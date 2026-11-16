-- Calendário mensal de redes sociais para aprovação no portal (ligado à tabela posts).

create table public.calendarios (
  id uuid primary key default gen_random_uuid(),
  cliente_id uuid not null references public.clientes(id) on delete cascade,
  mes date not null check (extract(day from mes) = 1),
  objetivo text,
  frequencia text,
  prazo_aprovacao date,
  status text not null default 'rascunho' check (status in ('rascunho','enviado','concluido')),
  enviado_em timestamptz,
  criado_em timestamptz not null default now(),
  atualizado_em timestamptz not null default now(),
  unique (cliente_id, mes)
);

create table public.calendario_pilares (
  id uuid primary key default gen_random_uuid(),
  calendario_id uuid not null references public.calendarios(id) on delete cascade,
  nome text not null check (char_length(btrim(nome)) between 1 and 80),
  descricao text,
  cor text not null default '#10D885' check (cor ~ '^#[0-9A-Fa-f]{6}$'),
  ordem int not null default 0
);
create index on public.calendario_pilares (calendario_id, ordem);

alter table public.posts
  add column calendario_id uuid references public.calendarios(id) on delete cascade,
  add column pilar_id uuid references public.calendario_pilares(id) on delete set null,
  add column hora time,
  add column formato text not null default 'imagem' check (formato in ('imagem','carrossel','reels','stories')),
  add column hashtags text,
  add column roteiro text,
  add column pergunta_agencia text,
  add column versao int not null default 1,
  add column respondido_em timestamptz;
create index on public.posts (calendario_id, data_publicacao);

create table public.post_midias (
  id uuid primary key default gen_random_uuid(),
  post_id uuid not null references public.posts(id) on delete cascade,
  arquivo_path text not null,
  tipo text not null default 'imagem' check (tipo in ('imagem','video')),
  proporcao text not null default '4:5' check (proporcao in ('4:5','1:1','9:16')),
  ordem int not null default 0,
  criado_em timestamptz not null default now()
);
create index on public.post_midias (post_id, ordem);

create table public.post_comentarios (
  id uuid primary key default gen_random_uuid(),
  post_id uuid not null references public.posts(id) on delete cascade,
  autor_id uuid references public.perfis(id) on delete set null,
  autor_agencia boolean not null default false,
  texto text not null check (char_length(btrim(texto)) between 1 and 2000),
  midia_id uuid references public.post_midias(id) on delete set null,
  pino_x numeric(5,2) check (pino_x is null or pino_x between 0 and 100),
  pino_y numeric(5,2) check (pino_y is null or pino_y between 0 and 100),
  versao int,
  resolvido boolean not null default false,
  resolvido_em timestamptz,
  criado_em timestamptz not null default now(),
  check ((pino_x is null) = (pino_y is null))
);
create index on public.post_comentarios (post_id, criado_em);

create table public.post_versoes (
  id uuid primary key default gen_random_uuid(),
  post_id uuid not null references public.posts(id) on delete cascade,
  versao int not null,
  snapshot jsonb not null,
  criado_em timestamptz not null default now(),
  unique (post_id, versao)
);

-- ---------- funções auxiliares
-- post visível ao cliente: dele, fora de rascunho e, se for de um calendário, com o calendário enviado
create or replace function privado.post_visivel(p uuid)
returns boolean language sql stable security definer set search_path to '' as $$
  select privado.is_equipe() or exists (
    select 1 from public.posts x left join public.calendarios c on c.id = x.calendario_id
    where x.id = p and x.cliente_id = privado.cliente_atual() and x.status <> 'rascunho'
      and (x.calendario_id is null or c.status in ('enviado','concluido')))
$$;

create or replace function privado.post_snapshot(p uuid)
returns jsonb language sql stable security definer set search_path to '' as $$
  select to_jsonb(x) - 'criado_em' - 'atualizado_em' - 'status' - 'comentario_cliente' - 'respondido_em'
    || jsonb_build_object('midias', coalesce((select jsonb_agg(to_jsonb(m) - 'criado_em' order by m.ordem) from public.post_midias m where m.post_id = p), '[]'))
  from public.posts x where x.id = p
$$;

-- ---------- gatilhos
create trigger t_calendarios_atualizado before update on public.calendarios
  for each row execute function public.tocar_atualizado_em();

-- o cliente só aprova ou pede ajuste; pedir ajuste exige comentário dele nesta versão
create or replace function public.proteger_post()
returns trigger language plpgsql security definer set search_path to '' as $$
begin
  if auth.uid() is not null and not privado.is_equipe() then
    if old.status not in ('aguardando_aprovacao','ajuste_solicitado')
       or new.status not in ('aprovado','ajuste_solicitado')
       or new.titulo is distinct from old.titulo or new.legenda is distinct from old.legenda
       or new.arte_url is distinct from old.arte_url or new.data_publicacao is distinct from old.data_publicacao
       or new.canais is distinct from old.canais or new.cliente_id is distinct from old.cliente_id
       or new.calendario_id is distinct from old.calendario_id or new.pilar_id is distinct from old.pilar_id
       or new.hora is distinct from old.hora or new.formato is distinct from old.formato or new.hashtags is distinct from old.hashtags
       or new.roteiro is distinct from old.roteiro or new.pergunta_agencia is distinct from old.pergunta_agencia
       or new.versao is distinct from old.versao then
      raise exception 'Cliente pode apenas aprovar ou pedir ajuste';
    end if;
    if new.calendario_id is not null and not privado.post_visivel(new.id) then
      raise exception 'Calendário ainda não enviado';
    end if;
    if new.status = 'ajuste_solicitado' and old.status is distinct from 'ajuste_solicitado' and new.calendario_id is not null
       and not exists (select 1 from public.post_comentarios c where c.post_id = new.id and not c.autor_agencia and c.versao = new.versao) then
      raise exception 'Para pedir ajuste, escreva um comentário';
    end if;
    new.respondido_em := now();
  end if;
  return new;
end $$;

-- calendário vira "concluído" quando todos os posts estão aprovados (e volta a "enviado" se algo reabrir)
create or replace function public.calendario_status_auto()
returns trigger language plpgsql security definer set search_path to '' as $$
declare cal uuid := coalesce(new.calendario_id, old.calendario_id); st text;
begin
  if cal is null then return null; end if;
  select status into st from public.calendarios where id = cal;
  if st in ('enviado','concluido') then
    if exists (select 1 from public.posts where calendario_id = cal)
       and not exists (select 1 from public.posts where calendario_id = cal and status not in ('aprovado','agendado','publicado')) then
      update public.calendarios set status = 'concluido' where id = cal and status <> 'concluido';
    else
      update public.calendarios set status = 'enviado' where id = cal and status = 'concluido';
    end if;
  end if;
  return null;
end $$;
create trigger t_posts_calendario_status after insert or update of status or delete on public.posts
  for each row execute function public.calendario_status_auto();

-- pilar precisa ser do mesmo calendário do post
create or replace function public.post_pilar_coerente()
returns trigger language plpgsql security definer set search_path to '' as $$
begin
  if new.pilar_id is not null and (select calendario_id from public.calendario_pilares where id = new.pilar_id) is distinct from new.calendario_id then
    raise exception 'O tema não pertence a este calendário';
  end if;
  if new.calendario_id is not null and (select cliente_id from public.calendarios where id = new.calendario_id) is distinct from new.cliente_id then
    raise exception 'O post e o calendário precisam ser do mesmo cliente';
  end if;
  return new;
end $$;
create trigger t_posts_pilar before insert or update of pilar_id, calendario_id, cliente_id on public.posts
  for each row execute function public.post_pilar_coerente();

-- comentários: autor e versão definidos pelo banco; pino só em mídia do próprio post
create or replace function public.post_comentario_prepara()
returns trigger language plpgsql security definer set search_path to '' as $$
begin
  new.autor_id := auth.uid();
  new.autor_agencia := coalesce(privado.is_equipe(), false);
  select versao into new.versao from public.posts where id = new.post_id;
  if not new.autor_agencia then new.resolvido := false; new.resolvido_em := null; end if;
  if new.midia_id is not null and not exists (select 1 from public.post_midias m where m.id = new.midia_id and m.post_id = new.post_id) then
    raise exception 'A arte comentada não pertence a este post';
  end if;
  return new;
end $$;
create trigger t_post_comentarios_prepara before insert on public.post_comentarios
  for each row execute function public.post_comentario_prepara();
create trigger t_post_comentarios_resolver before update on public.post_comentarios
  for each row execute function public.ads_marcacao_resolver();

-- ---------- RPCs da equipe
-- envia o calendário inteiro: posts em rascunho passam a aguardar o cliente
create or replace function public.calendario_enviar(p_cal uuid)
returns int language plpgsql security definer set search_path to '' as $$
declare n int; probs text;
begin
  if not privado.is_equipe() then raise exception 'Apenas a equipe pode enviar calendários'; end if;
  if not exists (select 1 from public.posts where calendario_id = p_cal) then raise exception 'O calendário não tem posts'; end if;
  select string_agg(coalesce(p.titulo, to_char(p.data_publicacao, 'DD/MM')), ', ') into probs from public.posts p
    where p.calendario_id = p_cal and (not exists (select 1 from public.post_midias m where m.post_id = p.id) or coalesce(btrim(p.legenda), '') = '');
  if probs is not null then raise exception 'Posts sem arte ou sem legenda: %', probs; end if;
  update public.posts set status = 'aguardando_aprovacao', comentario_cliente = null where calendario_id = p_cal and status = 'rascunho';
  get diagnostics n = row_count;
  insert into public.post_versoes (post_id, versao, snapshot)
    select p.id, p.versao, privado.post_snapshot(p.id) from public.posts p where p.calendario_id = p_cal
    on conflict (post_id, versao) do nothing;
  update public.calendarios set status = 'enviado', enviado_em = coalesce(enviado_em, now()) where id = p_cal;
  return n;
end $$;

-- nova versão de um post (depois de um pedido de ajuste): volta para "Aguardando você"
create or replace function public.post_enviar_versao(p_post uuid)
returns int language plpgsql security definer set search_path to '' as $$
declare v int;
begin
  if not privado.is_equipe() then raise exception 'Apenas a equipe pode enviar versões'; end if;
  update public.posts set versao = versao + 1, status = 'aguardando_aprovacao', respondido_em = null where id = p_post returning versao into v;
  if v is null then raise exception 'Post não encontrado'; end if;
  insert into public.post_versoes (post_id, versao, snapshot) values (p_post, v, privado.post_snapshot(p_post))
    on conflict (post_id, versao) do update set snapshot = excluded.snapshot, criado_em = now();
  return v;
end $$;

-- ---------- RLS
alter table public.calendarios enable row level security;
alter table public.calendario_pilares enable row level security;
alter table public.post_midias enable row level security;
alter table public.post_comentarios enable row level security;
alter table public.post_versoes enable row level security;

create policy cal_ler on public.calendarios for select to authenticated
  using (privado.is_equipe() or (cliente_id = privado.cliente_atual() and status in ('enviado','concluido')));
create policy cal_equipe on public.calendarios for all to authenticated using (privado.is_equipe()) with check (privado.is_equipe());

create policy cal_pilares_ler on public.calendario_pilares for select to authenticated
  using (privado.is_equipe() or exists (select 1 from public.calendarios c where c.id = calendario_id and c.cliente_id = privado.cliente_atual() and c.status in ('enviado','concluido')));
create policy cal_pilares_equipe on public.calendario_pilares for all to authenticated using (privado.is_equipe()) with check (privado.is_equipe());

drop policy posts_ler on public.posts;
create policy posts_ler on public.posts for select to authenticated using (privado.post_visivel(id));
drop policy posts_editar on public.posts;
create policy posts_editar on public.posts for update to authenticated
  using (privado.is_equipe() or (cliente_id = privado.cliente_atual() and privado.post_visivel(id)))
  with check (privado.is_equipe() or cliente_id = privado.cliente_atual());

create policy post_midias_ler on public.post_midias for select to authenticated using (privado.post_visivel(post_id));
create policy post_midias_equipe on public.post_midias for all to authenticated using (privado.is_equipe()) with check (privado.is_equipe());

create policy post_versoes_ler on public.post_versoes for select to authenticated using (privado.post_visivel(post_id));
create policy post_versoes_equipe on public.post_versoes for all to authenticated using (privado.is_equipe()) with check (privado.is_equipe());

create policy post_coment_ler on public.post_comentarios for select to authenticated using (privado.post_visivel(post_id));
create policy post_coment_inserir on public.post_comentarios for insert to authenticated with check (privado.post_visivel(post_id));
create policy post_coment_editar on public.post_comentarios for update to authenticated using (privado.is_equipe()) with check (privado.is_equipe());
create policy post_coment_excluir on public.post_comentarios for delete to authenticated using (privado.is_equipe());

revoke all on public.calendarios, public.calendario_pilares, public.post_midias, public.post_comentarios, public.post_versoes from anon;
grant select, insert, update, delete on public.calendarios, public.calendario_pilares, public.post_midias, public.post_comentarios, public.post_versoes to authenticated, service_role;
revoke execute on function public.calendario_enviar(uuid), public.post_enviar_versao(uuid) from public, anon;
grant execute on function public.calendario_enviar(uuid), public.post_enviar_versao(uuid) to authenticated, service_role;

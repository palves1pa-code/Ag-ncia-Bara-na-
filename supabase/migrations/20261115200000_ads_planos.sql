-- Planos de anúncios (Google Ads e Meta Ads) para aprovação no portal.
-- Um plano pertence a uma entrega (tipo 'trafego', formato 'plano') e acompanha a versão dela.

alter table public.entregas drop constraint entregas_formato_check;
alter table public.entregas add constraint entregas_formato_check
  check (formato = any (array['html','pdf','imagem','link','plano']));

-- artes e vídeos do Meta Ads ficam no bucket público de prévias (nomes aleatórios)
update storage.buckets set file_size_limit = 52428800,
  allowed_mime_types = array['text/plain','text/html','application/pdf','image/png','image/jpeg','image/webp','image/gif','image/svg+xml','video/mp4','video/quicktime','video/webm']
  where id = 'previas';

-- ---------- funções auxiliares (imutáveis, usadas em CHECK)
create or replace function privado.ads_valores_ok(v text[])
returns boolean language sql immutable set search_path to '' as $$
  select coalesce(bool_and(char_length(btrim(x)) between 1 and 25), false) from unnest(v) x
$$;

-- ---------- tabelas
create table public.ads_planos (
  id uuid primary key default gen_random_uuid(),
  entrega_id uuid not null unique references public.entregas(id) on delete cascade,
  cliente_id uuid not null references public.clientes(id) on delete cascade,
  plataforma text not null default 'google' check (plataforma in ('google','meta')),
  nome text not null check (char_length(btrim(nome)) between 1 and 255),
  rede text not null default 'Pesquisa',
  verba_mensal numeric(12,2) check (verba_mensal is null or verba_mensal >= 0),
  horario text,
  regiao text,
  idioma text default 'Português',
  estrategia_lance text,
  observacoes text,
  objetivo text,      -- Meta: objetivo da campanha
  otimizacao text,    -- Meta: evento de otimização
  medicao text,       -- Meta: pixel, API de Conversões etc.
  criado_em timestamptz not null default now(),
  atualizado_em timestamptz not null default now()
);

create table public.ads_grupos (
  id uuid primary key default gen_random_uuid(),
  plano_id uuid not null references public.ads_planos(id) on delete cascade,
  nome text not null check (char_length(btrim(nome)) between 1 and 255),
  descricao text,
  url_final text,
  ordem int not null default 0
);
create index on public.ads_grupos (plano_id, ordem);

create table public.ads_palavras (
  id uuid primary key default gen_random_uuid(),
  grupo_id uuid not null references public.ads_grupos(id) on delete cascade,
  subgrupo text,
  termo text not null check (char_length(btrim(termo)) between 1 and 80),
  correspondencia text not null default 'frase' check (correspondencia in ('ampla','frase','exata')),
  ordem int not null default 0
);
create index on public.ads_palavras (grupo_id, ordem);

create table public.ads_negativas (
  id uuid primary key default gen_random_uuid(),
  plano_id uuid not null references public.ads_planos(id) on delete cascade,
  grupo_id uuid references public.ads_grupos(id) on delete cascade,
  termo text not null check (char_length(btrim(termo)) between 1 and 80),
  correspondencia text not null default 'ampla' check (correspondencia in ('ampla','frase','exata')),
  ordem int not null default 0
);
create index on public.ads_negativas (plano_id, ordem);

create table public.ads_textos (
  id uuid primary key default gen_random_uuid(),
  grupo_id uuid not null references public.ads_grupos(id) on delete cascade,
  tipo text not null check (tipo in ('titulo','descricao')),
  texto text not null,
  fixado_posicao smallint,
  ordem int not null default 0,
  constraint ads_textos_limite check (
    (tipo = 'titulo' and char_length(btrim(texto)) between 1 and 30) or
    (tipo = 'descricao' and char_length(btrim(texto)) between 1 and 90)),
  constraint ads_textos_fixado check (fixado_posicao is null or (tipo = 'titulo' and fixado_posicao between 1 and 3))
);
create index on public.ads_textos (grupo_id, tipo, ordem);

create table public.ads_extensoes (
  id uuid primary key default gen_random_uuid(),
  plano_id uuid not null references public.ads_planos(id) on delete cascade,
  tipo text not null check (tipo in ('snippet','destaque','sitelink')),
  cabecalho text,
  valores text[],
  texto text,
  url text,
  descricao1 text,
  descricao2 text,
  ordem int not null default 0,
  constraint ads_ext_destaque check (tipo <> 'destaque' or char_length(btrim(coalesce(texto, ''))) between 1 and 25),
  constraint ads_ext_snippet check (tipo <> 'snippet' or (
    char_length(btrim(coalesce(cabecalho, ''))) > 0 and cardinality(valores) between 3 and 10 and privado.ads_valores_ok(valores))),
  constraint ads_ext_sitelink check (tipo <> 'sitelink' or (
    char_length(btrim(coalesce(texto, ''))) between 1 and 25 and char_length(btrim(coalesce(url, ''))) > 0
    and char_length(coalesce(descricao1, '')) <= 35 and char_length(coalesce(descricao2, '')) <= 35))
);
create index on public.ads_extensoes (plano_id, tipo, ordem);

-- ---------- Meta Ads
create table public.meta_conjuntos (
  id uuid primary key default gen_random_uuid(),
  plano_id uuid not null references public.ads_planos(id) on delete cascade,
  nome text not null check (char_length(btrim(nome)) between 1 and 255),
  verba_percentual numeric(5,2) check (verba_percentual is null or verba_percentual between 0 and 100),
  verba_valor numeric(12,2) check (verba_valor is null or verba_valor >= 0),
  localizacao text,
  idade_min smallint check (idade_min is null or idade_min between 13 and 65),
  idade_max smallint check (idade_max is null or idade_max between 13 and 65),
  genero text not null default 'todos' check (genero in ('todos','masculino','feminino')),
  interesses text[] not null default '{}',
  publicos_personalizados text[] not null default '{}',
  exclusoes text[] not null default '{}',
  posicionamentos text[] not null default '{}',
  expansao_publico boolean not null default false,
  observacoes text,
  ordem int not null default 0,
  check (idade_min is null or idade_max is null or idade_min <= idade_max)
);
create index on public.meta_conjuntos (plano_id, ordem);

create table public.meta_anuncios (
  id uuid primary key default gen_random_uuid(),
  plano_id uuid not null references public.ads_planos(id) on delete cascade,
  nome text not null check (char_length(btrim(nome)) between 1 and 255),
  formato text not null default 'imagem' check (formato in ('imagem','carrossel','video')),
  descricao_criativo text,
  cta text,
  url_destino text,
  utm text,
  ordem int not null default 0
);
create index on public.meta_anuncios (plano_id, ordem);

create table public.meta_anuncio_conjuntos (
  anuncio_id uuid not null references public.meta_anuncios(id) on delete cascade,
  conjunto_id uuid not null references public.meta_conjuntos(id) on delete cascade,
  primary key (anuncio_id, conjunto_id)
);
create index on public.meta_anuncio_conjuntos (conjunto_id);

create table public.meta_textos (
  id uuid primary key default gen_random_uuid(),
  anuncio_id uuid not null references public.meta_anuncios(id) on delete cascade,
  tipo text not null check (tipo in ('texto_principal','titulo','descricao')),
  texto text not null check (char_length(btrim(texto)) between 1 and 2200),
  ordem int not null default 0
);
create index on public.meta_textos (anuncio_id, tipo, ordem);

create table public.meta_midias (
  id uuid primary key default gen_random_uuid(),
  anuncio_id uuid not null references public.meta_anuncios(id) on delete cascade,
  arquivo_path text not null,
  mime text,
  proporcao text not null default '1:1' check (proporcao in ('1:1','4:5','9:16')),
  ordem int not null default 0,
  titulo_cartao text,
  descricao_cartao text,
  url_cartao text
);
create index on public.meta_midias (anuncio_id, ordem);

create table public.ads_marcacoes (
  id uuid primary key default gen_random_uuid(),
  plano_id uuid not null references public.ads_planos(id) on delete cascade,
  alvo_tipo text not null check (alvo_tipo in ('palavra','texto','extensao','negativa','conjunto','anuncio','midia','meta_texto')),
  alvo_id uuid not null,
  comentario text not null check (char_length(btrim(comentario)) between 1 and 2000),
  autor_id uuid references public.perfis(id) on delete set null,
  autor_agencia boolean not null default false,
  versao int,
  resolvido boolean not null default false,
  resolvido_em timestamptz,
  criado_em timestamptz not null default now()
);
create index on public.ads_marcacoes (plano_id, alvo_id);

create table public.ads_planos_versoes (
  id uuid primary key default gen_random_uuid(),
  plano_id uuid not null references public.ads_planos(id) on delete cascade,
  versao int not null,
  snapshot jsonb not null,
  criado_em timestamptz not null default now(),
  unique (plano_id, versao)
);

-- ---------- permissões auxiliares
create or replace function privado.ads_pode_ver(p uuid)
returns boolean language sql stable security definer set search_path to '' as $$
  select privado.is_equipe() or exists (
    select 1 from public.ads_planos a join public.entregas e on e.id = a.entrega_id
    where a.id = p and e.cliente_id = privado.cliente_atual() and e.status <> 'rascunho')
$$;

create or replace function privado.ads_plano_do_grupo(g uuid)
returns uuid language sql stable security definer set search_path to '' as $$
  select plano_id from public.ads_grupos where id = g
$$;

create or replace function privado.ads_plano_do_anuncio(a uuid)
returns uuid language sql stable security definer set search_path to '' as $$
  select plano_id from public.meta_anuncios where id = a
$$;

create or replace function privado.ads_cliente_pode_marcar(p uuid)
returns boolean language sql stable security definer set search_path to '' as $$
  select exists (
    select 1 from public.ads_planos a join public.entregas e on e.id = a.entrega_id
    where a.id = p and e.cliente_id = privado.cliente_atual() and e.status in ('aguardando_aprovacao','ajuste_solicitado'))
$$;

-- ---------- gatilhos
create trigger t_ads_planos_atualizado before update on public.ads_planos
  for each row execute function public.tocar_atualizado_em();

-- o cliente do plano é sempre o da entrega
create or replace function public.ads_plano_cliente()
returns trigger language plpgsql security definer set search_path to '' as $$
begin
  select cliente_id into new.cliente_id from public.entregas where id = new.entrega_id;
  if new.cliente_id is null then raise exception 'Entrega não encontrada'; end if;
  return new;
end $$;
create trigger t_ads_planos_cliente before insert or update of entrega_id, cliente_id on public.ads_planos
  for each row execute function public.ads_plano_cliente();

-- a negativa de grupo precisa ser de um grupo do mesmo plano
create or replace function public.ads_negativa_grupo()
returns trigger language plpgsql security definer set search_path to '' as $$
begin
  if new.grupo_id is not null and privado.ads_plano_do_grupo(new.grupo_id) is distinct from new.plano_id then
    raise exception 'O grupo da negativa não pertence a este plano';
  end if;
  return new;
end $$;
create trigger t_ads_negativas_grupo before insert or update on public.ads_negativas
  for each row execute function public.ads_negativa_grupo();

-- no máximo 15 títulos e 4 descrições por grupo
create or replace function public.ads_textos_limite()
returns trigger language plpgsql security definer set search_path to '' as $$
declare n int;
begin
  select count(*) into n from public.ads_textos
   where grupo_id = new.grupo_id and tipo = new.tipo and id <> new.id;
  if new.tipo = 'titulo' and n >= 15 then raise exception 'Cada grupo aceita no máximo 15 títulos'; end if;
  if new.tipo = 'descricao' and n >= 4 then raise exception 'Cada grupo aceita no máximo 4 descrições'; end if;
  return new;
end $$;
create trigger t_ads_textos_limite before insert or update of grupo_id, tipo on public.ads_textos
  for each row execute function public.ads_textos_limite();

-- Meta: até 5 textos de cada tipo por anúncio (como no Gerenciador de Anúncios)
create or replace function public.meta_textos_limite()
returns trigger language plpgsql security definer set search_path to '' as $$
declare n int;
begin
  select count(*) into n from public.meta_textos where anuncio_id = new.anuncio_id and tipo = new.tipo and id <> new.id;
  if n >= 5 then raise exception 'Cada anúncio aceita no máximo 5 textos de cada tipo'; end if;
  return new;
end $$;
create trigger t_meta_textos_limite before insert or update of anuncio_id, tipo on public.meta_textos
  for each row execute function public.meta_textos_limite();

-- Meta: anúncio e conjunto do vínculo precisam ser do mesmo plano
create or replace function public.meta_vinculo_plano()
returns trigger language plpgsql security definer set search_path to '' as $$
begin
  if privado.ads_plano_do_anuncio(new.anuncio_id) is distinct from (select plano_id from public.meta_conjuntos where id = new.conjunto_id) then
    raise exception 'Anúncio e conjunto precisam ser do mesmo plano';
  end if;
  return new;
end $$;
create trigger t_meta_vinculo_plano before insert or update on public.meta_anuncio_conjuntos
  for each row execute function public.meta_vinculo_plano();

-- marcações: autor, versão e alvo conferidos pelo banco
create or replace function public.ads_marcacao_prepara()
returns trigger language plpgsql security definer set search_path to '' as $$
declare ok boolean;
begin
  new.autor_id := auth.uid();
  new.autor_agencia := coalesce(privado.is_equipe(), false);
  select e.versao into new.versao from public.ads_planos a join public.entregas e on e.id = a.entrega_id where a.id = new.plano_id;
  if not new.autor_agencia then new.resolvido := false; new.resolvido_em := null; end if;
  ok := case new.alvo_tipo
    when 'palavra' then exists (select 1 from public.ads_palavras x join public.ads_grupos g on g.id = x.grupo_id where x.id = new.alvo_id and g.plano_id = new.plano_id)
    when 'texto' then exists (select 1 from public.ads_textos x join public.ads_grupos g on g.id = x.grupo_id where x.id = new.alvo_id and g.plano_id = new.plano_id)
    when 'extensao' then exists (select 1 from public.ads_extensoes x where x.id = new.alvo_id and x.plano_id = new.plano_id)
    when 'negativa' then exists (select 1 from public.ads_negativas x where x.id = new.alvo_id and x.plano_id = new.plano_id)
    when 'conjunto' then exists (select 1 from public.meta_conjuntos x where x.id = new.alvo_id and x.plano_id = new.plano_id)
    when 'anuncio' then exists (select 1 from public.meta_anuncios x where x.id = new.alvo_id and x.plano_id = new.plano_id)
    when 'midia' then exists (select 1 from public.meta_midias x join public.meta_anuncios a on a.id = x.anuncio_id where x.id = new.alvo_id and a.plano_id = new.plano_id)
    when 'meta_texto' then exists (select 1 from public.meta_textos x join public.meta_anuncios a on a.id = x.anuncio_id where x.id = new.alvo_id and a.plano_id = new.plano_id)
  end;
  if not ok then raise exception 'Item marcado não pertence a este plano'; end if;
  return new;
end $$;
create trigger t_ads_marcacoes_prepara before insert on public.ads_marcacoes
  for each row execute function public.ads_marcacao_prepara();

create or replace function public.ads_marcacao_resolver()
returns trigger language plpgsql set search_path to '' as $$
begin
  if new.resolvido and not old.resolvido then new.resolvido_em := now(); end if;
  if not new.resolvido then new.resolvido_em := null; end if;
  return new;
end $$;
create trigger t_ads_marcacoes_resolver before update on public.ads_marcacoes
  for each row execute function public.ads_marcacao_resolver();

-- ---------- validação e snapshot
create or replace function privado.ads_problemas(p uuid)
returns text[] language plpgsql stable security definer set search_path to '' as $$
declare r text[] := '{}'; g record; nt int; nd int; np int; plat text;
begin
  select plataforma into plat from public.ads_planos where id = p;
  if plat = 'meta' then
    if not exists (select 1 from public.meta_conjuntos where plano_id = p) then r := r || 'O plano não tem conjuntos de anúncios'; end if;
    if not exists (select 1 from public.meta_anuncios where plano_id = p) then r := r || 'O plano não tem anúncios'; end if;
    for g in select * from public.meta_anuncios where plano_id = p order by ordem loop
      if not exists (select 1 from public.meta_textos where anuncio_id = g.id and tipo = 'texto_principal') then r := r || (g.nome || ': sem texto principal'); end if;
      if not exists (select 1 from public.meta_anuncio_conjuntos where anuncio_id = g.id) then r := r || (g.nome || ': não está em nenhum conjunto'); end if;
      select count(*) into np from public.meta_midias where anuncio_id = g.id;
      if np = 0 then r := r || (g.nome || ': sem arte ou vídeo'); end if;
      if g.formato = 'carrossel' then
        select count(*) into np from public.meta_midias where anuncio_id = g.id and proporcao <> '9:16';
        if np < 2 or np > 10 then r := r || (g.nome || ': o carrossel precisa de 2 a 10 cartões (tem ' || np || ')'); end if;
      end if;
      if coalesce(g.url_destino, '') !~* '^https?://' and coalesce(g.cta, '') not in ('Enviar mensagem','Enviar mensagem no WhatsApp','Ligar agora') then
        r := r || (g.nome || ': URL de destino ausente ou inválida');
      end if;
    end loop;
    return r;
  end if;
  if not exists (select 1 from public.ads_grupos where plano_id = p) then r := r || 'O plano não tem grupos de anúncios'; end if;
  for g in select * from public.ads_grupos where plano_id = p order by ordem loop
    select count(*) filter (where tipo = 'titulo'), count(*) filter (where tipo = 'descricao') into nt, nd from public.ads_textos where grupo_id = g.id;
    select count(*) into np from public.ads_palavras where grupo_id = g.id;
    if nt < 3 then r := r || (g.nome || ': mínimo de 3 títulos (tem ' || nt || ')'); end if;
    if nd < 2 then r := r || (g.nome || ': mínimo de 2 descrições (tem ' || nd || ')'); end if;
    if np = 0 then r := r || (g.nome || ': sem palavras-chave'); end if;
    if coalesce(g.url_final, '') !~* '^https?://' then r := r || (g.nome || ': URL final ausente ou inválida'); end if;
  end loop;
  return r;
end $$;

create or replace function privado.ads_snapshot(p uuid)
returns jsonb language sql stable security definer set search_path to '' as $$
  select jsonb_build_object(
    'plano', (select to_jsonb(a) - 'criado_em' - 'atualizado_em' from public.ads_planos a where a.id = p),
    'grupos', coalesce((select jsonb_agg(to_jsonb(g) order by g.ordem) from public.ads_grupos g where g.plano_id = p), '[]'),
    'palavras', coalesce((select jsonb_agg(to_jsonb(x) order by x.ordem) from public.ads_palavras x join public.ads_grupos g on g.id = x.grupo_id where g.plano_id = p), '[]'),
    'textos', coalesce((select jsonb_agg(to_jsonb(x) order by x.ordem) from public.ads_textos x join public.ads_grupos g on g.id = x.grupo_id where g.plano_id = p), '[]'),
    'negativas', coalesce((select jsonb_agg(to_jsonb(x) order by x.ordem) from public.ads_negativas x where x.plano_id = p), '[]'),
    'extensoes', coalesce((select jsonb_agg(to_jsonb(x) order by x.ordem) from public.ads_extensoes x where x.plano_id = p), '[]'),
    'conjuntos', coalesce((select jsonb_agg(to_jsonb(x) order by x.ordem) from public.meta_conjuntos x where x.plano_id = p), '[]'),
    'anuncios', coalesce((select jsonb_agg(to_jsonb(x) || jsonb_build_object('conjuntos', coalesce((select jsonb_agg(v.conjunto_id order by v.conjunto_id) from public.meta_anuncio_conjuntos v where v.anuncio_id = x.id), '[]')) order by x.ordem) from public.meta_anuncios x where x.plano_id = p), '[]'),
    'meta_textos', coalesce((select jsonb_agg(to_jsonb(x) order by x.ordem) from public.meta_textos x join public.meta_anuncios a on a.id = x.anuncio_id where a.plano_id = p), '[]'),
    'midias', coalesce((select jsonb_agg(to_jsonb(x) order by x.ordem) from public.meta_midias x join public.meta_anuncios a on a.id = x.anuncio_id where a.plano_id = p), '[]'))
$$;

-- bloqueia o envio ao cliente de um plano com pendências
create or replace function public.ads_valida_envio()
returns trigger language plpgsql security definer set search_path to '' as $$
declare p uuid; probs text[];
begin
  if new.status = 'aguardando_aprovacao' and (old.status is distinct from new.status or old.versao is distinct from new.versao) then
    select id into p from public.ads_planos where entrega_id = new.id;
    if p is not null then
      probs := privado.ads_problemas(p);
      if cardinality(probs) > 0 then raise exception 'O plano tem pendências: %', array_to_string(probs, '; '); end if;
    end if;
  end if;
  return new;
end $$;
create trigger t_entregas_ads_valida before update of status, versao on public.entregas
  for each row execute function public.ads_valida_envio();

-- envia o plano: rascunho -> v atual; já enviado -> nova versão. Guarda o snapshot do que foi enviado.
create or replace function public.ads_enviar(p_plano uuid)
returns int language plpgsql security definer set search_path to '' as $$
declare e public.entregas; v int;
begin
  if not privado.is_equipe() then raise exception 'Apenas a equipe pode enviar planos'; end if;
  select en.* into e from public.entregas en join public.ads_planos a on a.entrega_id = en.id where a.id = p_plano;
  if e.id is null then raise exception 'Plano não encontrado'; end if;
  v := case when e.status = 'rascunho' then e.versao else e.versao + 1 end;
  update public.entregas set versao = v, status = 'aguardando_aprovacao' where id = e.id;
  insert into public.ads_planos_versoes (plano_id, versao, snapshot) values (p_plano, v, privado.ads_snapshot(p_plano))
    on conflict (plano_id, versao) do update set snapshot = excluded.snapshot, criado_em = now();
  return v;
end $$;

-- duplica um plano (como modelo) para outro cliente, em rascunho
create or replace function public.ads_duplicar(p_plano uuid, p_cliente uuid, p_nome text default null)
returns uuid language plpgsql security definer set search_path to '' as $$
declare o public.ads_planos; e_nova uuid; p_novo uuid; g record; g_novo uuid; mapa jsonb := '{}'; mc jsonb := '{}';
begin
  if not privado.is_equipe() then raise exception 'Apenas a equipe pode duplicar planos'; end if;
  select * into o from public.ads_planos where id = p_plano;
  if o.id is null then raise exception 'Plano não encontrado'; end if;
  insert into public.entregas (cliente_id, tipo, titulo, descricao, formato, status)
    select p_cliente, 'trafego', e.titulo, e.descricao, 'plano', 'rascunho' from public.entregas e where e.id = o.entrega_id
    returning id into e_nova;
  insert into public.ads_planos (entrega_id, cliente_id, plataforma, nome, rede, verba_mensal, horario, regiao, idioma, estrategia_lance, observacoes, objetivo, otimizacao, medicao)
    values (e_nova, p_cliente, o.plataforma, coalesce(nullif(btrim(p_nome), ''), o.nome || ' (cópia)'), o.rede, o.verba_mensal, o.horario, o.regiao, o.idioma, o.estrategia_lance, o.observacoes, o.objetivo, o.otimizacao, o.medicao)
    returning id into p_novo;
  for g in select * from public.ads_grupos where plano_id = p_plano order by ordem loop
    insert into public.ads_grupos (plano_id, nome, descricao, url_final, ordem) values (p_novo, g.nome, g.descricao, g.url_final, g.ordem) returning id into g_novo;
    mapa := mapa || jsonb_build_object(g.id::text, g_novo);
    insert into public.ads_palavras (grupo_id, subgrupo, termo, correspondencia, ordem) select g_novo, subgrupo, termo, correspondencia, ordem from public.ads_palavras where grupo_id = g.id;
    insert into public.ads_textos (grupo_id, tipo, texto, fixado_posicao, ordem) select g_novo, tipo, texto, fixado_posicao, ordem from public.ads_textos where grupo_id = g.id;
  end loop;
  insert into public.ads_negativas (plano_id, grupo_id, termo, correspondencia, ordem)
    select p_novo, case when grupo_id is null then null else (mapa ->> grupo_id::text)::uuid end, termo, correspondencia, ordem from public.ads_negativas where plano_id = p_plano;
  insert into public.ads_extensoes (plano_id, tipo, cabecalho, valores, texto, url, descricao1, descricao2, ordem)
    select p_novo, tipo, cabecalho, valores, texto, url, descricao1, descricao2, ordem from public.ads_extensoes where plano_id = p_plano;
  for g in select * from public.meta_conjuntos where plano_id = p_plano order by ordem loop
    insert into public.meta_conjuntos (plano_id, nome, verba_percentual, verba_valor, localizacao, idade_min, idade_max, genero, interesses, publicos_personalizados, exclusoes, posicionamentos, expansao_publico, observacoes, ordem)
      values (p_novo, g.nome, g.verba_percentual, g.verba_valor, g.localizacao, g.idade_min, g.idade_max, g.genero, g.interesses, g.publicos_personalizados, g.exclusoes, g.posicionamentos, g.expansao_publico, g.observacoes, g.ordem)
      returning id into g_novo;
    mc := mc || jsonb_build_object(g.id::text, g_novo);
  end loop;
  for g in select * from public.meta_anuncios where plano_id = p_plano order by ordem loop
    insert into public.meta_anuncios (plano_id, nome, formato, descricao_criativo, cta, url_destino, utm, ordem)
      values (p_novo, g.nome, g.formato, g.descricao_criativo, g.cta, g.url_destino, g.utm, g.ordem) returning id into g_novo;
    insert into public.meta_textos (anuncio_id, tipo, texto, ordem) select g_novo, tipo, texto, ordem from public.meta_textos where anuncio_id = g.id;
    insert into public.meta_midias (anuncio_id, arquivo_path, mime, proporcao, ordem, titulo_cartao, descricao_cartao, url_cartao)
      select g_novo, arquivo_path, mime, proporcao, ordem, titulo_cartao, descricao_cartao, url_cartao from public.meta_midias where anuncio_id = g.id;
    insert into public.meta_anuncio_conjuntos (anuncio_id, conjunto_id)
      select g_novo, (mc ->> conjunto_id::text)::uuid from public.meta_anuncio_conjuntos where anuncio_id = g.id;
  end loop;
  insert into public.entrega_perguntas (entrega_id, pergunta, ajuda, ordem)
    select e_nova, pergunta, ajuda, ordem from public.entrega_perguntas where entrega_id = o.entrega_id;
  return p_novo;
end $$;

-- ---------- RLS
alter table public.ads_planos enable row level security;
alter table public.ads_grupos enable row level security;
alter table public.ads_palavras enable row level security;
alter table public.ads_negativas enable row level security;
alter table public.ads_textos enable row level security;
alter table public.ads_extensoes enable row level security;
alter table public.ads_marcacoes enable row level security;
alter table public.ads_planos_versoes enable row level security;
alter table public.meta_conjuntos enable row level security;
alter table public.meta_anuncios enable row level security;
alter table public.meta_anuncio_conjuntos enable row level security;
alter table public.meta_textos enable row level security;
alter table public.meta_midias enable row level security;

create policy ads_planos_ler on public.ads_planos for select to authenticated using (privado.ads_pode_ver(id));
create policy ads_planos_equipe on public.ads_planos for all to authenticated using (privado.is_equipe()) with check (privado.is_equipe());

create policy ads_grupos_ler on public.ads_grupos for select to authenticated using (privado.ads_pode_ver(plano_id));
create policy ads_grupos_equipe on public.ads_grupos for all to authenticated using (privado.is_equipe()) with check (privado.is_equipe());

create policy ads_palavras_ler on public.ads_palavras for select to authenticated using (privado.ads_pode_ver(privado.ads_plano_do_grupo(grupo_id)));
create policy ads_palavras_equipe on public.ads_palavras for all to authenticated using (privado.is_equipe()) with check (privado.is_equipe());

create policy ads_textos_ler on public.ads_textos for select to authenticated using (privado.ads_pode_ver(privado.ads_plano_do_grupo(grupo_id)));
create policy ads_textos_equipe on public.ads_textos for all to authenticated using (privado.is_equipe()) with check (privado.is_equipe());

create policy ads_negativas_ler on public.ads_negativas for select to authenticated using (privado.ads_pode_ver(plano_id));
create policy ads_negativas_equipe on public.ads_negativas for all to authenticated using (privado.is_equipe()) with check (privado.is_equipe());

create policy ads_extensoes_ler on public.ads_extensoes for select to authenticated using (privado.ads_pode_ver(plano_id));
create policy ads_extensoes_equipe on public.ads_extensoes for all to authenticated using (privado.is_equipe()) with check (privado.is_equipe());

create policy meta_conjuntos_ler on public.meta_conjuntos for select to authenticated using (privado.ads_pode_ver(plano_id));
create policy meta_conjuntos_equipe on public.meta_conjuntos for all to authenticated using (privado.is_equipe()) with check (privado.is_equipe());

create policy meta_anuncios_ler on public.meta_anuncios for select to authenticated using (privado.ads_pode_ver(plano_id));
create policy meta_anuncios_equipe on public.meta_anuncios for all to authenticated using (privado.is_equipe()) with check (privado.is_equipe());

create policy meta_vinculos_ler on public.meta_anuncio_conjuntos for select to authenticated using (privado.ads_pode_ver(privado.ads_plano_do_anuncio(anuncio_id)));
create policy meta_vinculos_equipe on public.meta_anuncio_conjuntos for all to authenticated using (privado.is_equipe()) with check (privado.is_equipe());

create policy meta_textos_ler on public.meta_textos for select to authenticated using (privado.ads_pode_ver(privado.ads_plano_do_anuncio(anuncio_id)));
create policy meta_textos_equipe on public.meta_textos for all to authenticated using (privado.is_equipe()) with check (privado.is_equipe());

create policy meta_midias_ler on public.meta_midias for select to authenticated using (privado.ads_pode_ver(privado.ads_plano_do_anuncio(anuncio_id)));
create policy meta_midias_equipe on public.meta_midias for all to authenticated using (privado.is_equipe()) with check (privado.is_equipe());

create policy ads_versoes_ler on public.ads_planos_versoes for select to authenticated using (privado.ads_pode_ver(plano_id));
create policy ads_versoes_equipe on public.ads_planos_versoes for all to authenticated using (privado.is_equipe()) with check (privado.is_equipe());

create policy ads_marcacoes_ler on public.ads_marcacoes for select to authenticated using (privado.ads_pode_ver(plano_id));
create policy ads_marcacoes_inserir on public.ads_marcacoes for insert to authenticated
  with check (privado.is_equipe() or privado.ads_cliente_pode_marcar(plano_id));
create policy ads_marcacoes_editar on public.ads_marcacoes for update to authenticated using (privado.is_equipe()) with check (privado.is_equipe());
create policy ads_marcacoes_excluir on public.ads_marcacoes for delete to authenticated using (privado.is_equipe());

-- ---------- grants
revoke all on public.ads_planos, public.ads_grupos, public.ads_palavras, public.ads_negativas, public.ads_textos,
  public.ads_extensoes, public.ads_marcacoes, public.ads_planos_versoes, public.meta_conjuntos, public.meta_anuncios,
  public.meta_anuncio_conjuntos, public.meta_textos, public.meta_midias from anon;
grant select, insert, update, delete on public.ads_planos, public.ads_grupos, public.ads_palavras, public.ads_negativas, public.ads_textos,
  public.ads_extensoes, public.ads_marcacoes, public.ads_planos_versoes, public.meta_conjuntos, public.meta_anuncios,
  public.meta_anuncio_conjuntos, public.meta_textos, public.meta_midias to authenticated, service_role;

revoke execute on function public.ads_enviar(uuid), public.ads_duplicar(uuid, uuid, text) from public, anon;
grant execute on function public.ads_enviar(uuid), public.ads_duplicar(uuid, uuid, text) to authenticated, service_role;
revoke execute on function privado.ads_problemas(uuid), privado.ads_snapshot(uuid) from public, anon;
grant execute on function privado.ads_problemas(uuid), privado.ads_snapshot(uuid) to authenticated, service_role;

-- Fila de automação: o banco registra o que precisa do Claude (briefing preenchido, solicitação nova, resposta do cliente)
-- e a rotina agendada (8h, 13h e 16h) processa. Sem item pendente, a rodada encerra na primeira consulta.

create table public.automacao_fila (
  id uuid primary key default gen_random_uuid(),
  tipo text not null check (tipo in ('briefing','solicitacao_nova','solicitacao_resposta')),
  cliente_id uuid not null references public.clientes(id) on delete cascade,
  ref_id uuid not null,              -- briefing: cliente_id; solicitações: solicitacoes.id
  status text not null default 'pendente' check (status in ('pendente','processando','feito','erro','ignorado')),
  resultado text,
  entrega_id uuid references public.entregas(id) on delete set null,
  calendario_id uuid references public.calendarios(id) on delete set null,
  tentativas int not null default 0,
  criado_em timestamptz not null default now(),
  iniciado_em timestamptz,
  concluido_em timestamptz
);
create unique index automacao_fila_unica_aberta on public.automacao_fila (tipo, ref_id) where status in ('pendente','processando');
create index on public.automacao_fila (status, criado_em);

-- rascunhos criados pela automação
alter table public.entregas add column origem text check (origem is null or origem = 'claude');
alter table public.calendarios add column origem text check (origem is null or origem = 'claude');

-- ---------- gatilhos que alimentam a fila
create or replace function public.fila_briefing()
returns trigger language plpgsql security definer set search_path to '' as $$
begin
  if new.categoria = 'Briefing' and new.responsavel = 'cliente' and new.concluido
     and (old.concluido is distinct from true or new.resposta is distinct from old.resposta) then
    insert into public.automacao_fila (tipo, cliente_id, ref_id) values ('briefing', new.cliente_id, new.cliente_id)
      on conflict do nothing;
  end if;
  return null;
end $$;
create trigger t_fila_briefing after update of concluido, resposta on public.onboarding_itens
  for each row execute function public.fila_briefing();

create or replace function public.fila_solicitacao()
returns trigger language plpgsql security definer set search_path to '' as $$
begin
  insert into public.automacao_fila (tipo, cliente_id, ref_id) values ('solicitacao_nova', new.cliente_id, new.id) on conflict do nothing;
  return null;
end $$;
create trigger t_fila_solicitacao after insert on public.solicitacoes
  for each row execute function public.fila_solicitacao();

-- resposta do cliente a uma solicitação que estava aguardando ele
create or replace function public.fila_solicitacao_resposta()
returns trigger language plpgsql security definer set search_path to '' as $$
declare s public.solicitacoes;
begin
  if new.autor_agencia then return null; end if;
  select * into s from public.solicitacoes where id = new.solicitacao_id;
  if s.status = 'aguardando_cliente' then
    insert into public.automacao_fila (tipo, cliente_id, ref_id) values ('solicitacao_resposta', s.cliente_id, s.id) on conflict do nothing;
  end if;
  return null;
end $$;
create trigger t_fila_solicitacao_resposta after insert on public.solicitacao_mensagens
  for each row execute function public.fila_solicitacao_resposta();

-- ---------- RLS: só a equipe vê e mexe na fila
alter table public.automacao_fila enable row level security;
create policy fila_equipe on public.automacao_fila for all to authenticated using (privado.is_equipe()) with check (privado.is_equipe());
revoke all on public.automacao_fila from anon;
grant select, insert, update, delete on public.automacao_fila to authenticated, service_role;

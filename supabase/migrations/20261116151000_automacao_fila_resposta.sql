-- A resposta do cliente muda a solicitação para "aberta" num gatilho BEFORE; por isso a fila olha o próprio histórico:
-- entra na fila quando a última ação da automação nessa solicitação foi enviar perguntas.
create or replace function public.fila_solicitacao_resposta()
returns trigger language plpgsql security definer set search_path to '' as $$
declare cli uuid; ultimo text;
begin
  if new.autor_agencia then return null; end if;
  select f.resultado, f.cliente_id into ultimo, cli from public.automacao_fila f
    where f.ref_id = new.solicitacao_id and f.tipo in ('solicitacao_nova','solicitacao_resposta') and f.status = 'feito'
    order by f.concluido_em desc nulls last, f.criado_em desc limit 1;
  if ultimo like 'perguntas%' then
    insert into public.automacao_fila (tipo, cliente_id, ref_id) values ('solicitacao_resposta', cli, new.solicitacao_id) on conflict do nothing;
  end if;
  return null;
end $$;

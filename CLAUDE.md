# Painel Baraúna – contexto para o Claude Code

Painel de gestão de clientes da Agência Baraúna (equipe) + portal do cliente.
Produção: https://painel.agenciabarauna.com.br · Dono: Pedro Alves (CEO)

## Arquitetura
- Front-end: app de página única **sem etapa de build** (Preact + htm via esm.sh, importmap no `index.html`).
  - `public/app.js` (código-fonte legível), `public/styles.css`, `public/index.html`, `public/preview.html`.
  - Rotas por hash: equipe `#/crm`, `#/contratos`…; públicas `#/p/<token>` (proposta) e `#/redefinir/<token>`;
    portal do cliente `#/aprovacoes`, `#/primeiros-passos`, `#/contrato/<id>`…
- Back-end: **Supabase**, projeto `fhgmqphszubwucvytoum` (São Paulo). RLS em todas as tabelas.
  - Funções de permissão no schema `privado`: `is_admin()`, `is_equipe()`, `cliente_atual()`.
  - Papéis em `perfis.papel`: pendente, admin, equipe, cliente. Cliente ligado por `perfis.cliente_id`.
  - Login de cliente: usuário `<slug>` → e-mail técnico `<slug>@clientes.agenciabarauna.com.br`.
  - Senhas de acessos de clientes no **Vault** (`credenciais.segredo_id`), lidas só pela RPC `ver_credencial` (registra cada visualização).
- Edge Functions: `criar-acesso`, `enviar-nf`, `asaas-webhook` (sem JWT; valida o header `asaas-access-token`), `asaas-sync`,
  `assinar-contrato`, `esqueci-senha` e `redefinir-senha` (sem JWT).
- Storage: `painel` (público: app/styles versionados e logo da assinatura de e-mail), `previas` (público, nomes aleatórios),
  `notas`, `arquivos-clientes` (privados).
- Hospedagem: **Vercel**, projeto `barauna` (time `agenciadigitalbarauna-8494`), domínio `painel.agenciabarauna.com.br`.
  Hoje o Vercel serve só `index.html` e `preview.html`; o JS/CSS minificado (esbuild) vai para o bucket `painel`
  como `app.<hash>.js` / `styles.<hash>.css` e o `index.html` de produção aponta para eles.
  → **Primeira tarefa sugerida:** ligar o repositório do GitHub ao Vercel e servir `public/` direto (com minificação no build),
  aposentando o bucket `painel` para o app.

## Segredos (Supabase → Edge Functions → Secrets)
`ASAAS_API_KEY` (configurado), `ASAAS_WEBHOOK_TOKEN` (pendente), `RESEND_API_KEY` (pendente: e-mails de NF e de redefinição de senha),
`NF_REMETENTE` (opcional).

## Módulos
CRM; propostas (link público + aceite online); contratos (gerador a partir da proposta e do portal + assinatura eletrônica
com SHA-256, IP e registro); primeiros passos (checklist do cliente + roteiro de estruturação da agência montado pelo escopo);
cofre de acessos (Vault); cobranças (Asaas para Café Borgô, Wort, Drilex e dev4lab; manual para os demais); notas fiscais
(anexar PDF + envio por e-mail); demandas e reuniões (ata vira tarefa visível ao cliente); redes sociais (calendário + aprovação);
campanhas e métricas (lançamento manual); solicitações (tickets); aprovações (entregas HTML/PDF/imagem/link com perguntas,
comentários e versões).

## Prévias em HTML
Enviadas ao bucket `previas` (content-type `text/plain`) e abertas por `/preview.html?f=<caminho>`, que carrega o HTML num
iframe **sandbox sem `allow-same-origin`** e injeta um ajuste para links com `#`.
Prévia atual: Drilex site v1 em `previas/drilex/site-v1.html` (no bucket: `712455d6e470a513b266/drilex-site-v1.html`),
entrega "Prévia do novo site – versão 1" em rascunho no painel.
Prévia dev4lab v2 (aguardando envio): `previas/dev4lab/site-v2.html` (arquivo único; rotas por hash `#/servicos/<slug>`,
formulário simulado). Perguntas para a entrega em `previas/dev4lab/perguntas-v2.txt` (formato `pergunta|ajuda`).
Marca dev4lab: azul-marinho #1D1A3B, laranja #F5A135, cinza #F2F2F2; fonte New Order (na prévia, Outfit nos títulos e Inter no texto).
Foco comercial (briefing): vendas diretas de treinamentos, consultoria/suporte e relatórios para a base de clientes da Confience;
as implantações são vendidas pela Confience, e a dev4lab executa.

## Próximos trabalhos
- dev4lab: corrigir o site para tráfego (formulário hoje é simulado e não envia; sem GA4/GTM/Ads; CSP bloqueia scripts do Google;
  domínio sem www não resolve; criar páginas por serviço; sitemap/robots; dados estruturados).
- Drilex: evoluir a prévia do site com as respostas do cliente e depois construir o site real.

## Convenções
- Interface 100% em português do Brasil; identidade Baraúna (verde #10D885, escuro #0E1A15, Poppins + Inter).
- Testar com usuários temporários e apagar depois; nunca deixar dados de teste no banco.

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
  O Vercel serve só `index.html` e `preview.html`; o JS/CSS minificado (esbuild) vai para o bucket `painel`
  como `app.<hash>.js` / `styles.<hash>.css` e o `index.html` de produção aponta para eles. Versão no ar: ver `docs/versao-publicada.txt`.
- **Publicar** (o Claude faz sozinho, com o usuário dele):
  1. `esbuild public/app.js --minify --format=esm` e `esbuild public/styles.css --minify`; hash = 8 primeiros hex do sha256 de app+css.
  2. Upload em `painel/app.<hash>.js` e `painel/styles.<hash>.css` logado como admin (política `painel_admin_publicar`:
     só insere arquivos novos com esse padrão de nome; não sobrescreve nem apaga).
  3. Deploy no Vercel (MCP `create_deployment`, `target: production`) com `index.html` (hashes novos) e `preview.html`.
  4. Testar `https://painel.agenciabarauna.com.br` logado e atualizar `docs/versao-publicada.txt`.
  → Sugestão futura: ligar o repositório do GitHub ao Vercel e servir `public/` direto, aposentando o bucket `painel` para o app.
- Migrações versionadas em `supabase/migrations/` (as anteriores a 15/11/2026 estão só no histórico do Supabase).

## Usuário do Claude no painel
`claude@agenciabarauna.com.br`, papel `admin`, para subir prévias e criar entregas pela API como a equipe (respeitando o RLS).
A senha fica na variável de ambiente `PAINEL_CLAUDE_SENHA` do ambiente do Claude Code (nunca no repositório).
Login: `POST /auth/v1/token?grant_type=password` com a chave anon de `public/app.js`; upload em `previas` com content-type `text/plain`.

## Segredos (Supabase → Edge Functions → Secrets)
`ASAAS_API_KEY` (configurado), `ASAAS_WEBHOOK_TOKEN` (pendente), `RESEND_API_KEY` (pendente: e-mails de NF e de redefinição de senha),
`NF_REMETENTE` (opcional).

## Módulos
CRM; propostas (link público + aceite online); contratos (gerador a partir da proposta e do portal + assinatura eletrônica
com SHA-256, IP e registro); primeiros passos (checklist do cliente + roteiro de estruturação da agência montado pelo escopo);
cofre de acessos (Vault); cobranças (Asaas para Café Borgô, Wort, Drilex e dev4lab; manual para os demais); notas fiscais
(anexar PDF + envio por e-mail); demandas e reuniões (ata vira tarefa visível ao cliente); redes sociais (calendário + aprovação);
campanhas e métricas (lançamento manual); solicitações (tickets); aprovações (entregas HTML/PDF/imagem/link com perguntas,
comentários e versões); **planos de anúncios** Google Ads e Meta Ads (ver abaixo); **calendário mensal de redes sociais** (ver abaixo).

## Planos de anúncios (Google Ads e Meta Ads) – `20261115200000_ads_planos.sql`
- Equipe: Conteúdo e mídia → Campanhas → aba **Planos de anúncios** (`#/campanhas/planos`, editor em `#/campanhas/planos/<id>`).
- Cada plano (`ads_planos`, `plataforma` google|meta) pertence a uma entrega (`entregas.tipo='trafego'`, `formato='plano'`) e aparece
  nativo em Aprovações (portal e equipe) no lugar do iframe. Perguntas, comentários gerais e Aprovar/Pedir ajuste são os da entrega.
- Google: `ads_grupos`, `ads_palavras` (subgrupo, correspondência ampla|frase|exata), `ads_negativas` (grupo nulo = campanha),
  `ads_textos` (título ≤30, descrição ≤90, fixado 1–3; máx. 15/4 por grupo via gatilho), `ads_extensoes` (snippet: 3–10 valores ≤25;
  destaque ≤25; sitelink texto ≤25, descrições ≤35). Limites também em CHECK no banco.
- Meta: `meta_conjuntos` (públicos em text[]), `meta_anuncios` (formato imagem|carrossel|video, CTA, URL, UTM), `meta_anuncio_conjuntos`,
  `meta_textos` (≤5 por tipo; limites recomendados 125/40/30 só avisam), `meta_midias` (bucket `previas`, proporção 1:1|4:5|9:16, cartões).
- `ads_marcacoes`: o cliente marca itens (palavra, texto, extensão, negativa, conjunto, anúncio, mídia, meta_texto) com comentário;
  a equipe marca como resolvido. "Pedir ajuste" aceita marcações como justificativa.
- Envio: RPC `ads_enviar(plano)` (rascunho → v atual; depois → nova versão) grava snapshot em `ads_planos_versoes`; o portal compara com a
  versão anterior para o selo "Alterado". Gatilho `ads_valida_envio` bloqueia envio com pendências (`privado.ads_problemas`).
  `ads_duplicar(plano, cliente, nome)` copia tudo como rascunho. RLS: cliente lê o próprio plano fora de rascunho e só insere marcações.
- **CSV do Google Ads Editor** (UTF-8 com BOM, vírgula; uma linha por entidade, tipo inferido pelas colunas preenchidas):
  `Campaign, Campaign Type (Search), Networks (Google Search), Budget (diário = verba/30,4), Bid Strategy Type, Languages (pt),
  Ad Schedule ((Monday[07:00-19:00]);…, lido do campo horário), Campaign Status (Paused), Location (linha própria; Brasil→Brazil), Ad Group,
  Ad Group Status, Keyword + Criterion Type (Broad|Phrase|Exact; texto sem aspas/colchetes), negativas com Criterion Type
  "Negative <tipo>" (grupo) e "Campaign Negative <tipo>" (campanha), Headline 1–15, Headline N position, Description 1–4, Final URL,
  Callout text, Header (em inglês: Service catalog, Types…) + Snippet Values (separados por ;), Link Text, Description line 1/2`.
  Fontes: support.google.com/google-ads/editor/answer/57747 e /56368. **Não documentado pelo Google, conferir na 1ª importação:**
  os valores "Negative/Campaign Negative + tipo" e o separador de Snippet Values (exportar um item do Editor confirma).
- **Meta**: a lista oficial de colunas da importação em massa não pôde ser verificada; a exportação é uma planilha de referência
  (uma linha por anúncio × conjunto, com públicos, textos, CTA e enum da API, links das artes).

## Calendário mensal de redes sociais – `20261116120000_calendario_social.sql`
- `calendarios` (1 por cliente e mês; status rascunho|enviado|concluido; prazo_aprovacao), `calendario_pilares` (temas com cor),
  `posts` (+ calendario_id, pilar_id, hora, formato imagem|carrossel|reels|stories, hashtags, roteiro, pergunta_agencia, versao),
  `post_midias` (bucket `previas`; 4:5|1:1 feed, 9:16 Stories), `post_comentarios` (pino_x/pino_y em %, midia_id, versao, resolvido),
  `post_versoes` (snapshot por versão).
- Equipe: Redes sociais (`#/redes`) → escolhe cliente e mês → cria o calendário, temas e posts (upload de artes, legenda com contador,
  hashtags) → RPC `calendario_enviar` (exige arte e legenda em todos) → acompanha, responde, marca como resolvido e envia nova versão do
  post (`post_enviar_versao`: volta para "Aguardando você" com selo "Atualizado"). Lembrete no Dashboard e em Redes quando o prazo
  está a 3 dias ou menos e há posts sem resposta.
- Portal: aba Calendário (Visão geral · Calendário · Como fica o feed · Revisar posts), janela do post com simulação Instagram/Facebook/
  Stories, carrossel, marcador na arte, conversa, Aprovar / Pedir ajuste (comentário obrigatório, também no banco) / Só comentar,
  próximo pendente automático, setas do teclado e barra fixa no celular. "Precisa de você" mostra "Calendário de <mês>: X posts…".
- RLS: o cliente só vê posts de calendário `enviado|concluido` (`privado.post_visivel`), muda só o status (gatilho `proteger_post`) e insere
  comentários. O calendário vira `concluido` sozinho quando todos os posts estão aprovados. Posts antigos sem calendário seguem o fluxo antigo.

## Automação do Claude (fila + rodadas às 8h, 13h e 16h) – `20261116150000_automacao_fila.sql`
- Gatilhos no banco enchem `automacao_fila` sem custo de IA: `briefing` (item "Formulário de briefing" concluído/alterado pelo cliente;
  `ref_id` = cliente), `solicitacao_nova` (nova solicitação) e `solicitacao_resposta` (cliente respondeu depois que a última ação da
  automação naquela solicitação foi enviar perguntas; resultado começando com `perguntas`). Uma entrada aberta por (tipo, ref_id).
- Rotina agendada do Claude Code (sessão nova a cada disparo, seg a sex, horário de Brasília) segue `automacao/ROTINA.md` e usa
  `automacao/painel.py` (contar, pegar, concluir, mensagem, validar, google, meta, calendario, site). Fila vazia → encerra na 1ª consulta.
- Tudo nasce em **rascunho** com `origem = 'claude'` (entregas e calendários) e aparece no card "Automação do Claude" do Dashboard
  e com a etiqueta "Criado pelo Claude". O único contato direto com o cliente são perguntas e avisos nas solicitações.
- Serviços do cliente vêm das condições (`trafego`, `site`, `redes`) dos itens de Primeiros passos dele.
- Para pausar: desativar a tarefa agendada "Painel Baraúna · rodada da fila" em claude.ai/code (ou pedir ao Claude).

## Prévias em HTML
Enviadas ao bucket `previas` (content-type `text/plain`) e abertas por `/preview.html?f=<caminho>`, que carrega o HTML num
iframe **sandbox sem `allow-same-origin`** e injeta um ajuste para links com `#`.
Prévia atual: Drilex site v1 em `previas/drilex/site-v1.html` (no bucket: `712455d6e470a513b266/drilex-site-v1.html`),
entrega "Prévia do novo site – versão 1" em rascunho no painel.
Plano real de Google Ads da dev4lab criado em **rascunho** (2 grupos, 61 palavras-chave, 22 negativas) a partir do HTML de referência.
Prévia dev4lab v2: `previas/dev4lab/site-v2.html` (arquivo único; rotas por hash `#/servicos/<slug>`, formulário simulado;
telas com etiqueta "Imagem real" são exemplos fictícios). No bucket: `6815d626c2d99399827e/dev4lab-site-v2.html`; entrega
"Prévia do novo site – versão 2" (`02b92845-394d-43f5-8e60-06838e48a8dd`) aguardando aprovação, com as 17 perguntas de
`previas/dev4lab/perguntas-v2.txt` (formato `pergunta|ajuda`).
Marca dev4lab: azul-marinho #1D1A3B, laranja #F5A135, cinza #F2F2F2; fonte New Order (na prévia, Outfit nos títulos e Inter no texto).
Foco comercial (briefing): vendas diretas de treinamentos, consultoria/suporte e relatórios para a base de clientes da Confience;
as implantações são vendidas pela Confience, e a dev4lab executa.

## Próximos trabalhos
- dev4lab: corrigir o site para tráfego (formulário hoje é simulado e não envia; sem GA4/GTM/Ads; CSP bloqueia scripts do Google;
  domínio sem www não resolve; criar páginas por serviço; sitemap/robots; dados estruturados).
- Drilex: evoluir a prévia do site com as respostas do cliente e depois construir o site real.

## Convenções
- Interface 100% em português do Brasil; identidade Baraúna (verde #10D885, escuro #0E1A15, Poppins + Inter).
- Testar com usuários temporários e apagar depois; nunca deixar dados de teste no banco. Para criar usuários de teste sem e-mail,
  use a Edge Function `criar-acesso` logado como admin (o cadastro público esbarra no limite de e-mails do Supabase); apague-os por SQL
  antes do cliente temporário (a regra `perfil_cliente_coerente` impede o contrário).

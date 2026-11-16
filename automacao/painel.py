#!/usr/bin/env python3
"""Ferramenta da rotina de automação do Painel Baraúna (só biblioteca padrão).

Entra no painel com o usuário do Claude (PAINEL_CLAUDE_EMAIL / PAINEL_CLAUDE_SENHA) e respeita o RLS.
Nunca imprime senha nem token. Uso: python3 -I automacao/painel.py <comando> [...]

Comandos
  contar                                   quantos itens pendentes na fila (só o número)
  pegar [n]                                marca até n itens (padrão 5) como "processando" e imprime o contexto em JSON
  concluir <fila_id> <feito|ignorado|erro> "<resultado>" [--entrega ID] [--calendario ID]
  mensagem <solicitacao_id> <arquivo.txt> [--status aguardando_cliente|em_andamento]
  google <cliente_id> <plano.json>         cria plano de Google Ads em rascunho (entrega origem=claude)
  meta <cliente_id> <plano.json>           cria plano de Meta Ads em rascunho
  calendario <cliente_id> <calendario.json>  cria calendário do mês em rascunho (posts sem arte)
  site <cliente_id> <previa.html> <dados.json>  sobe prévia HTML e cria entrega de site em rascunho
  validar <tipo> <arquivo.json>            confere limites antes de criar (google|meta|calendario)
"""
import json, os, re, secrets, sys, urllib.request, urllib.error
from datetime import datetime, timezone
agora = lambda: datetime.now(timezone.utc).isoformat()

RAIZ = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
URL = 'https://fhgmqphszubwucvytoum.supabase.co'
ANON = re.search(r'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9\.[A-Za-z0-9_-]+\.[A-Za-z0-9_-]+', open(os.path.join(RAIZ, 'public', 'app.js'), encoding='utf-8').read()).group(0)
_TOK = None


def falhar(msg):
    print('ERRO: ' + msg, file=sys.stderr); sys.exit(1)


def req(metodo, caminho, corpo=None, cab=None, bruto=None, auth=True):
    h = {'apikey': ANON}
    if auth: h['Authorization'] = 'Bearer ' + token()
    h.update(cab or {})
    dados = bruto
    if corpo is not None:
        dados = json.dumps(corpo).encode(); h['Content-Type'] = 'application/json'
    r = urllib.request.Request(URL + caminho, data=dados, headers=h, method=metodo)
    try:
        x = urllib.request.urlopen(r, timeout=60); t = x.read(); st = x.status
    except urllib.error.HTTPError as e:
        t = e.read(); st = e.code
    try: d = json.loads(t) if t else None
    except Exception: d = t.decode(errors='replace')
    return st, d


def ok(st, d, oque):
    if st >= 300: falhar(f'{oque}: {st} {d}')
    return d


def token():
    global _TOK
    if _TOK: return _TOK
    em, se = os.environ.get('PAINEL_CLAUDE_EMAIL'), os.environ.get('PAINEL_CLAUDE_SENHA')
    if not em or not se: falhar('variáveis PAINEL_CLAUDE_EMAIL/PAINEL_CLAUDE_SENHA ausentes')
    st, d = req('POST', '/auth/v1/token?grant_type=password', {'email': em, 'password': se}, auth=False)
    if st != 200: falhar(f'login falhou ({st})')
    _TOK = d['access_token']; return _TOK


def get(caminho): return ok(*req('GET', caminho), 'leitura ' + caminho.split('?')[0])
def post(tabela, linhas, rep=True):
    return ok(*req('POST', '/rest/v1/' + tabela, linhas, {'Prefer': 'return=representation' if rep else 'return=minimal'}), 'inserir ' + tabela)
def patch(tabela, filtro, dados):
    return ok(*req('PATCH', f'/rest/v1/{tabela}?{filtro}', dados, {'Prefer': 'return=representation'}), 'atualizar ' + tabela)
def tam(s): return len(str(s or '').strip())
def ler_json(arq): return json.load(open(arq, encoding='utf-8'))


# ---------- fila
def contar():
    print(len(get('/rest/v1/automacao_fila?select=id&status=eq.pendente&limit=1000')))


def contexto_cliente(cid):
    cli = get(f'/rest/v1/clientes?select=id,nome_empresa,site,cidade,observacoes&id=eq.{cid}')[0]
    itens = get(f'/rest/v1/onboarding_itens?select=categoria,titulo,resposta,concluido,modelo_id,responsavel&cliente_id=eq.{cid}&order=ordem')
    mods = get('/rest/v1/onboarding_modelo?select=id,condicao&condicao=not.is.null')
    cond = {m['id']: m['condicao'] for m in mods}
    servicos = sorted({cond[i['modelo_id']] for i in itens if i.get('modelo_id') in cond})
    briefing = [{'titulo': i['titulo'], 'resposta': i['resposta']} for i in itens if i['categoria'] == 'Briefing' and i.get('resposta')]
    ents = get(f'/rest/v1/entregas?select=id,titulo,tipo,formato,status,origem,criado_em&cliente_id=eq.{cid}&order=criado_em.desc&limit=20')
    planos = get(f'/rest/v1/ads_planos?select=id,nome,plataforma,entrega_id&cliente_id=eq.{cid}')
    cals = get(f'/rest/v1/calendarios?select=id,mes,status,origem&cliente_id=eq.{cid}&order=mes.desc&limit=6')
    return {'cliente': cli, 'servicos_contratados': servicos, 'briefing': briefing, 'entregas_existentes': ents, 'planos_existentes': planos, 'calendarios_existentes': cals}


def pegar(n=5):
    fila = get(f'/rest/v1/automacao_fila?select=*&status=eq.pendente&order=criado_em&limit={int(n)}')
    saida = []
    for f in fila:
        upd = patch('automacao_fila', f"id=eq.{f['id']}&status=eq.pendente", {'status': 'processando', 'iniciado_em': agora(), 'tentativas': f['tentativas'] + 1})
        if not upd: continue
        item = {'fila_id': f['id'], 'tipo': f['tipo'], 'cliente_id': f['cliente_id'], 'criado_em': f['criado_em'], 'contexto': contexto_cliente(f['cliente_id'])}
        if f['tipo'].startswith('solicitacao'):
            s = get(f"/rest/v1/solicitacoes?select=*&id=eq.{f['ref_id']}")
            item['solicitacao'] = s[0] if s else None
            item['mensagens'] = get(f"/rest/v1/solicitacao_mensagens?select=autor_agencia,texto,criado_em&solicitacao_id=eq.{f['ref_id']}&order=criado_em")
            item['rodadas_de_perguntas'] = len(get(f"/rest/v1/automacao_fila?select=id&ref_id=eq.{f['ref_id']}&status=eq.feito&resultado=like.perguntas*"))
        saida.append(item)
    print(json.dumps(saida, ensure_ascii=False, indent=1, default=str))


def concluir(fid, status, resultado, entrega=None, calendario=None):
    if status not in ('feito', 'ignorado', 'erro'): falhar('status inválido')
    d = {'status': status, 'resultado': resultado[:2000], 'concluido_em': agora()}
    if entrega: d['entrega_id'] = entrega
    if calendario: d['calendario_id'] = calendario
    patch('automacao_fila', f'id=eq.{fid}', d); print('ok')


def mensagem(sid, arq, status=None):
    texto = open(arq, encoding='utf-8').read().strip()
    if not texto: falhar('mensagem vazia')
    post('solicitacao_mensagens', {'solicitacao_id': sid, 'texto': texto}, rep=False)
    if status: patch('solicitacoes', f'id=eq.{sid}', {'status': status})
    print('ok')


# ---------- validação
def validar(tipo, P, sair=True):
    prob = []
    if tipo == 'google':
        if not P.get('grupos'): prob.append('sem grupos')
        for g in P.get('grupos', []):
            ts, ds = g.get('titulos', []), g.get('descricoes', [])
            if not 3 <= len(ts) <= 15: prob.append(f"{g.get('nome')}: {len(ts)} títulos (3 a 15)")
            if not 2 <= len(ds) <= 4: prob.append(f"{g.get('nome')}: {len(ds)} descrições (2 a 4)")
            for t in ts:
                tx = t['texto'] if isinstance(t, dict) else t
                if tam(tx) > 30: prob.append(f'título com {tam(tx)} caracteres: {tx}')
            for t in ds:
                if tam(t) > 90: prob.append(f'descrição com {tam(t)} caracteres: {t}')
            if not g.get('palavras'): prob.append(f"{g.get('nome')}: sem palavras-chave")
            for k in g.get('palavras', []):
                if k.get('correspondencia', 'frase') not in ('ampla', 'frase', 'exata'): prob.append('correspondência inválida: ' + str(k))
            if not re.match(r'^https?://', g.get('url_final') or ''): prob.append(f"{g.get('nome')}: url_final inválida")
        for x in P.get('destaques', []):
            if tam(x) > 25: prob.append(f'frase de destaque com {tam(x)}: {x}')
        for s in P.get('snippets', []):
            if not 3 <= len(s.get('valores', [])) <= 10: prob.append('snippet precisa de 3 a 10 valores')
            for v in s.get('valores', []):
                if tam(v) > 25: prob.append(f'valor de snippet com {tam(v)}: {v}')
        for s in P.get('sitelinks', []):
            if tam(s.get('texto')) > 25 or tam(s.get('descricao1')) > 35 or tam(s.get('descricao2')) > 35: prob.append('sitelink acima do limite: ' + str(s.get('texto')))
    elif tipo == 'meta':
        if not P.get('conjuntos'): prob.append('sem conjuntos')
        if not P.get('anuncios'): prob.append('sem anúncios')
        chaves = {c.get('chave') for c in P.get('conjuntos', [])}
        for a in P.get('anuncios', []):
            for k in a.get('conjuntos', []):
                if k not in chaves: prob.append(f"anúncio {a.get('nome')}: conjunto '{k}' não existe")
            for t, l in (a.get('textos') or {}).items():
                if t not in ('texto_principal', 'titulo', 'descricao'): prob.append('tipo de texto inválido: ' + t)
                if len(l) > 5: prob.append(f"{a.get('nome')}: mais de 5 textos do tipo {t}")
    elif tipo == 'calendario':
        if not re.match(r'^\d{4}-\d{2}$', P.get('mes', '')): prob.append('mes deve ser AAAA-MM')
        nomes = {t['nome'] for t in P.get('temas', [])}
        for p in P.get('posts', []):
            if not str(p.get('data', '')).startswith(P.get('mes', '?')): prob.append(f"post fora do mês: {p.get('titulo')}")
            if p.get('tema') and p['tema'] not in nomes: prob.append(f"tema inexistente: {p['tema']}")
            if p.get('formato', 'imagem') not in ('imagem', 'carrossel', 'reels', 'stories'): prob.append('formato inválido: ' + str(p.get('formato')))
            if tam(p.get('legenda')) > 2200: prob.append('legenda acima de 2.200 caracteres')
    if sair:
        if prob: print('PROBLEMAS:\n- ' + '\n- '.join(prob)); sys.exit(2)
        print('ok')
    return prob


def nova_entrega(cid, tipo, titulo, descricao, formato, extra=None):
    d = {'cliente_id': cid, 'tipo': tipo, 'titulo': titulo, 'descricao': descricao, 'formato': formato, 'status': 'rascunho', 'origem': 'claude'}
    d.update(extra or {})
    return post('entregas', d)[0]['id']


def perguntas(eid, lista):
    if lista:
        post('entrega_perguntas', [{'entrega_id': eid, 'pergunta': q.split('|')[0].strip(), 'ajuda': (q.split('|')[1].strip() if '|' in q else None), 'ordem': i + 1} for i, q in enumerate(lista)], rep=False)


# ---------- criação
def criar_google(cid, P):
    if validar('google', P, sair=False): validar('google', P)
    eid = nova_entrega(cid, 'trafego', P.get('titulo') or 'Google Ads: palavras-chave e anúncios', P.get('descricao'), 'plano')
    pl = post('ads_planos', {'entrega_id': eid, 'cliente_id': cid, 'plataforma': 'google', 'nome': P['nome'], 'rede': 'Pesquisa', 'verba_mensal': P.get('verba_mensal'),
                             'horario': P.get('horario'), 'regiao': P.get('regiao'), 'idioma': P.get('idioma', 'Português'), 'estrategia_lance': P.get('estrategia_lance'), 'observacoes': P.get('observacoes')})[0]['id']
    gids = {}
    for i, g in enumerate(P['grupos']):
        gid = post('ads_grupos', {'plano_id': pl, 'nome': g['nome'], 'descricao': g.get('descricao'), 'url_final': g.get('url_final'), 'ordem': i + 1})[0]['id']; gids[g['nome']] = gid
        post('ads_palavras', [{'grupo_id': gid, 'subgrupo': k.get('subgrupo'), 'termo': k['termo'], 'correspondencia': k.get('correspondencia', 'frase'), 'ordem': j + 1} for j, k in enumerate(g['palavras'])], rep=False)
        tx = [{'grupo_id': gid, 'tipo': 'titulo', 'texto': (t['texto'] if isinstance(t, dict) else t), 'fixado_posicao': (t.get('fixado') if isinstance(t, dict) else None), 'ordem': j + 1} for j, t in enumerate(g['titulos'])]
        tx += [{'grupo_id': gid, 'tipo': 'descricao', 'texto': t, 'fixado_posicao': None, 'ordem': j + 1} for j, t in enumerate(g['descricoes'])]
        post('ads_textos', tx, rep=False)
    if P.get('negativas'):
        post('ads_negativas', [{'plano_id': pl, 'grupo_id': gids.get(n.get('grupo')), 'termo': n['termo'], 'correspondencia': n.get('correspondencia', 'ampla'), 'ordem': j + 1} for j, n in enumerate(P['negativas'])], rep=False)
    ext = [{'plano_id': pl, 'tipo': 'snippet', 'cabecalho': s['cabecalho'], 'valores': s['valores'], 'texto': None, 'url': None, 'descricao1': None, 'descricao2': None, 'ordem': j + 1} for j, s in enumerate(P.get('snippets', []))]
    ext += [{'plano_id': pl, 'tipo': 'destaque', 'cabecalho': None, 'valores': None, 'texto': t, 'url': None, 'descricao1': None, 'descricao2': None, 'ordem': j + 1} for j, t in enumerate(P.get('destaques', []))]
    ext += [{'plano_id': pl, 'tipo': 'sitelink', 'cabecalho': None, 'valores': None, 'texto': s['texto'], 'url': s['url'], 'descricao1': s.get('descricao1'), 'descricao2': s.get('descricao2'), 'ordem': j + 1} for j, s in enumerate(P.get('sitelinks', []))]
    if ext: post('ads_extensoes', ext, rep=False)
    perguntas(eid, P.get('perguntas'))
    print(json.dumps({'entrega_id': eid, 'plano_id': pl, 'editor': '#/campanhas/planos/' + pl}))


def criar_meta(cid, P):
    if validar('meta', P, sair=False): validar('meta', P)
    eid = nova_entrega(cid, 'trafego', P.get('titulo') or 'Meta Ads: públicos e anúncios', P.get('descricao'), 'plano')
    pl = post('ads_planos', {'entrega_id': eid, 'cliente_id': cid, 'plataforma': 'meta', 'nome': P['nome'], 'rede': 'Facebook e Instagram', 'verba_mensal': P.get('verba_mensal'),
                             'regiao': P.get('regiao'), 'objetivo': P.get('objetivo'), 'otimizacao': P.get('otimizacao'), 'medicao': P.get('medicao'), 'observacoes': P.get('observacoes')})[0]['id']
    cj = {}
    for i, c in enumerate(P['conjuntos']):
        cj[c['chave']] = post('meta_conjuntos', {'plano_id': pl, 'nome': c['nome'], 'verba_percentual': c.get('verba_percentual'), 'localizacao': c.get('localizacao'), 'idade_min': c.get('idade_min'), 'idade_max': c.get('idade_max'),
                                                  'genero': c.get('genero', 'todos'), 'interesses': c.get('interesses', []), 'publicos_personalizados': c.get('publicos_personalizados', []), 'exclusoes': c.get('exclusoes', []),
                                                  'posicionamentos': c.get('posicionamentos', []), 'expansao_publico': bool(c.get('expansao_publico')), 'observacoes': c.get('observacoes'), 'ordem': i + 1})[0]['id']
    for i, a in enumerate(P['anuncios']):
        aid = post('meta_anuncios', {'plano_id': pl, 'nome': a['nome'], 'formato': a.get('formato', 'imagem'), 'cta': a.get('cta', 'Saiba mais'), 'url_destino': a.get('url_destino'), 'utm': a.get('utm'),
                                     'descricao_criativo': a.get('descricao_criativo'), 'ordem': i + 1})[0]['id']
        if a.get('conjuntos'): post('meta_anuncio_conjuntos', [{'anuncio_id': aid, 'conjunto_id': cj[k]} for k in a['conjuntos']], rep=False)
        tx = [{'anuncio_id': aid, 'tipo': t, 'texto': x, 'ordem': j + 1} for t, l in (a.get('textos') or {}).items() for j, x in enumerate(l)]
        if tx: post('meta_textos', tx, rep=False)
    perguntas(eid, P.get('perguntas'))
    print(json.dumps({'entrega_id': eid, 'plano_id': pl, 'editor': '#/campanhas/planos/' + pl, 'aviso': 'artes e vídeos ficam para a equipe enviar'}))


CORES = ['#10D885', '#3B82F6', '#F5A122', '#A855F7', '#94A3B8', '#E5484D', '#14B8A6', '#EC4899']
def criar_calendario(cid, P):
    if validar('calendario', P, sair=False): validar('calendario', P)
    mes = P['mes'] + '-01'
    if get(f'/rest/v1/calendarios?select=id&cliente_id=eq.{cid}&mes=eq.{mes}'): falhar('já existe calendário deste cliente neste mês; não sobrescrevo')
    cal = post('calendarios', {'cliente_id': cid, 'mes': mes, 'objetivo': P.get('objetivo'), 'frequencia': P.get('frequencia'), 'prazo_aprovacao': P.get('prazo_aprovacao'), 'origem': 'claude'})[0]['id']
    tem = {}
    for i, t in enumerate(P.get('temas', [])):
        tem[t['nome']] = post('calendario_pilares', {'calendario_id': cal, 'nome': t['nome'], 'descricao': t.get('descricao'), 'cor': t.get('cor') or CORES[i % len(CORES)], 'ordem': i + 1})[0]['id']
    for p in P.get('posts', []):
        post('posts', {'cliente_id': cid, 'calendario_id': cal, 'pilar_id': tem.get(p.get('tema')), 'data_publicacao': p['data'], 'hora': p.get('hora'), 'formato': p.get('formato', 'imagem'),
                       'titulo': p['titulo'], 'legenda': p.get('legenda'), 'hashtags': p.get('hashtags'), 'roteiro': p.get('roteiro'), 'pergunta_agencia': p.get('pergunta'),
                       'canais': p.get('canais', ['instagram', 'facebook']), 'status': 'rascunho'}, rep=False)
    print(json.dumps({'calendario_id': cal, 'tela': '#/redes', 'aviso': 'artes ficam para a equipe enviar'}))


def criar_site(cid, html_arq, dados_arq):
    D = ler_json(dados_arq); html = open(html_arq, 'rb').read()
    nome = re.sub(r'[^A-Za-z0-9._-]+', '-', D.get('arquivo', 'site-previa.html'))
    path = secrets.token_hex(10) + '/' + nome
    ok(*req('POST', '/storage/v1/object/previas/' + path, cab={'Content-Type': 'text/plain', 'cache-control': 'max-age=60'}, bruto=html), 'upload da prévia')
    eid = nova_entrega(cid, 'site', D.get('titulo', 'Prévia do novo site – versão 1'), D.get('descricao'), 'html', {'arquivo_path': path})
    perguntas(eid, D.get('perguntas'))
    print(json.dumps({'entrega_id': eid, 'arquivo_path': path, 'previa': 'https://painel.agenciabarauna.com.br/preview.html?f=' + path}))


if __name__ == '__main__':
    a = sys.argv[1:]
    if not a: print(__doc__); sys.exit(0)
    c = a[0]
    def opt(n):
        return a[a.index(n) + 1] if n in a else None
    if c == 'contar': contar()
    elif c == 'pegar': pegar(a[1] if len(a) > 1 else 5)
    elif c == 'concluir': concluir(a[1], a[2], a[3], opt('--entrega'), opt('--calendario'))
    elif c == 'mensagem': mensagem(a[1], a[2], opt('--status'))
    elif c == 'google': criar_google(a[1], ler_json(a[2]))
    elif c == 'meta': criar_meta(a[1], ler_json(a[2]))
    elif c == 'calendario': criar_calendario(a[1], ler_json(a[2]))
    elif c == 'site': criar_site(a[1], a[2], a[3])
    elif c == 'validar': validar(a[1], ler_json(a[2]))
    else: print(__doc__); sys.exit(1)

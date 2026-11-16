import { h, render } from 'preact';
import { useState, useEffect, useRef } from 'preact/hooks';
import htm from 'htm';
import { createClient } from '@supabase/supabase-js';
const html = htm.bind(h);
const SB_URL = 'https://fhgmqphszubwucvytoum.supabase.co';
const SB_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZoZ21xcGhzenVid3Vjdnl0b3VtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTM3NTM1MjYsImV4cCI6MjEwOTMyOTUyNn0.ahY1VlJ29ufl8siwGlEIlM4jWowD9IEfBLyJV1aUsoE';
const sb = createClient(SB_URL, SB_KEY);
const ICONE = 'M108 164C108 164 106 163 104 162C103 161 101 160 99 159C98 158 96 157 96 157C95 157 94 156 92 155C90 154 89 153 88 153C88 153 87 152 86 152C85 151 84 150 83 150C81 149 81 149 78 151C76 152 74 153 74 153C74 153 72 154 69 156C68 156 67 157 66 157C66 158 64 159 63 160C61 160 60 161 59 161C58 162 55 164 54 164C54 164 54 164 54 155C54 147 54 147 54 146C54 146 55 146 59 143C61 142 63 141 63 141C63 141 65 140 67 139C71 137 73 136 73 135C74 135 74 134 74 110C74 86 74 84 73 84C73 84 72 83 69 82C68 81 67 80 67 80C66 80 64 79 64 79C64 79 60 77 59 76C59 76 57 75 56 74C54 74 53 73 53 73C53 72 53 72 53 71C53 71 54 69 54 68C55 67 56 65 56 65C56 64 57 63 58 62C58 60 59 59 59 59C60 59 60 59 61 59C62 59 62 60 63 60C63 60 64 61 66 62C67 62 69 63 70 64C72 65 72 65 73 65C73 65 74 65 74 62L74 60L74 59L74 59L81 59C86 59 88 59 89 59C89 59 89 59 89 69C89 75 89 78 90 79C90 79 90 79 91 79C92 78 93 78 94 78C95 77 96 76 96 76C97 76 100 74 101 73C102 73 102 73 103 73C103 73 104 73 105 76C105 76 106 77 106 79C107 80 108 82 108 82C109 83 110 86 110 86C110 86 109 87 108 88C108 88 107 88 106 89C105 89 105 90 105 90C104 90 101 92 100 92C100 92 98 93 96 94C95 95 93 96 93 96C93 96 92 96 91 97C90 98 90 98 89 99C89 99 89 108 89 117C89 135 89 135 90 135C90 136 92 137 96 139C98 140 99 141 100 141C100 141 101 142 102 143C104 143 105 144 106 144C106 145 107 145 108 146C108 146 109 146 109 146L109 147L109 155C109 161 109 163 109 164C109 164 109 164 108 164ZM44 118C42 118 41 117 40 117C39 117 38 117 38 117C37 116 36 116 36 116C35 116 34 116 34 116C34 116 30 114 29 114C28 113 25 111 23 110C22 110 20 108 18 106C16 104 14 101 12 98C11 97 8 91 8 90C8 90 7 90 7 89C6 87 6 83 5 78C5 77 5 72 5 71C5 71 5 70 6 69C6 67 6 64 7 62C8 60 10 55 11 53C12 52 14 50 15 48C16 46 20 43 21 42C23 41 26 39 27 38C28 38 30 37 31 36C32 36 33 35 34 35C34 35 34 34 35 33C36 31 38 28 39 26C41 24 44 20 47 18C48 17 48 17 51 15C52 14 53 13 56 12C58 10 60 9 62 8C69 6 72 5 79 5C84 5 89 5 93 6C96 7 100 8 102 9C104 10 106 11 106 11C107 11 107 12 108 12C112 14 115 16 118 20C121 22 123 24 125 27C126 28 128 32 129 34C130 36 131 36 132 37C134 37 137 39 139 40C142 42 141 42 144 44C145 45 146 46 148 48C149 50 150 50 152 54C153 56 155 60 156 62C156 63 156 64 156 64C156 65 157 65 157 65C157 66 157 66 157 68C158 70 158 72 158 77C158 80 157 82 157 83C157 84 157 84 157 85C156 86 156 87 156 87C156 88 156 88 156 89C155 90 154 94 153 95C151 98 150 100 149 102C147 104 144 106 142 109C141 109 139 111 137 112C136 113 133 114 132 115C129 116 126 116 125 117C125 117 124 117 123 117C121 118 119 118 116 118C112 118 110 118 108 117C108 117 107 117 106 117C104 116 98 114 96 113C95 112 95 112 95 112C94 111 94 111 97 107C97 106 98 105 99 104C101 99 102 98 102 98C103 98 103 99 104 99C105 99 106 100 106 100C107 100 110 101 111 101C113 102 116 102 118 102C120 102 121 101 122 101C124 100 126 100 128 98C130 98 130 97 132 96C134 94 136 92 138 90C138 88 141 84 141 84C141 84 141 83 141 82C142 81 142 79 142 76C142 73 141 68 140 65C138 61 137 59 134 56C130 53 126 50 120 49C119 49 118 49 118 48C118 48 118 48 118 47C117 45 116 44 115 42C114 39 113 38 112 36C109 32 105 29 101 26C100 26 97 24 96 24C95 23 94 23 94 23C94 23 93 23 93 22C92 22 92 22 91 22C90 22 85 21 83 21C79 21 75 21 71 22C69 23 68 23 65 25C60 27 55 31 52 36C50 38 47 42 46 45C46 47 45 48 45 48C45 49 44 49 42 50C38 50 34 52 31 54C30 55 28 58 26 59C24 63 22 66 21 70C21 73 21 73 21 75C21 77 21 78 21 79C21 79 21 80 21 81C22 85 23 87 25 90C27 92 28 93 29 95C31 96 32 97 33 98C36 99 38 100 40 101C42 102 44 102 47 102C50 102 52 102 54 101C56 100 56 100 59 99C59 99 60 98 60 98C61 98 61 99 62 100C63 102 64 104 64 104C64 104 65 105 66 108C68 112 68 111 68 112C67 113 64 114 60 116C60 116 59 116 58 116C58 116 57 116 56 117C56 117 55 117 54 117C54 117 53 117 52 118C51 118 46 118 44 118Z';

// ---------- utilidades
const brl = v => Number(v || 0).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
const dataBR = d => d ? new Date(String(d).length === 10 ? d + 'T12:00:00' : d).toLocaleDateString('pt-BR') : '—';
const dataHora = d => d ? new Date(d).toLocaleString('pt-BR', { dateStyle: 'short', timeStyle: 'short' }) : '—';
const hojeISO = () => { const d = new Date(); d.setMinutes(d.getMinutes() - d.getTimezoneOffset()); return d.toISOString().slice(0, 10); };
const paraLocal = iso => { if (!iso) return ''; const d = new Date(iso); d.setMinutes(d.getMinutes() - d.getTimezoneOffset()); return d.toISOString().slice(0, 16); };
const dias = ts => Math.max(0, Math.floor((Date.now() - new Date(ts)) / 86400000));
const ir = p => { location.hash = p; };
let mostrarToast = null;
const toast = (msg, tipo = 'ok') => mostrarToast && mostrarToast({ msg, tipo, id: Date.now() });
const ok = (res, msg) => { if (res && res.error) { toast(res.error.message || 'Erro', 'erro'); return false; } if (msg) toast(msg); return true; };
const proxMes = m => { const [a, b] = m.split('-').map(Number); return b === 12 ? (a + 1) + '-01-01' : a + '-' + String(b + 1).padStart(2, '0') + '-01'; };
const DOM_CLI = 'clientes.agenciabarauna.com.br';
const loginDe = e => String(e || '').endsWith('@' + DOM_CLI) ? String(e).split('@')[0] : e;
const slug = t => String(t || '').toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').split(/[^a-z0-9]+/).filter(Boolean)[0] || '';
const mesBR = m => { const d = new Date(String(m).slice(0, 7) + '-15T12:00:00'); return d.toLocaleDateString('pt-BR', { month: 'short', year: 'numeric' }).replace('.', ''); };
const tituloMes = d => { const t = d.toLocaleDateString('pt-BR', { month: 'long', year: 'numeric' }); return t.charAt(0).toUpperCase() + t.slice(1); };
const inteiro = v => Number(v || 0).toLocaleString('pt-BR');
const pct = (a, b) => (!b ? null : Math.round((a - b) / b * 100));
const PLAT = { google: 'Google Ads', meta: 'Meta Ads', outra: 'Outra' };
const REDES = [['instagram', 'Instagram'], ['facebook', 'Facebook'], ['linkedin', 'LinkedIn'], ['tiktok', 'TikTok'], ['youtube', 'YouTube'], ['google_meu_negocio', 'Google Meu Negócio']];
const TIPOS_SOL = [['campanha', 'Campanha'], ['arte', 'Arte'], ['post', 'Post'], ['site', 'Site'], ['relatorio', 'Relatório'], ['outro', 'Outro']];
const ST_SOL = { aberta: ['Aberta', 'info'], em_andamento: ['Em andamento', 'warn'], aguardando_cliente: ['Aguardando você', 'bad'], concluida: ['Concluída', 'ok'], cancelada: ['Cancelada', 'neu'] };
const ST_SOL_EQ = { ...ST_SOL, aguardando_cliente: ['Aguardando cliente', 'neu'] };
async function abrirArquivo(path, bucket = 'arquivos-clientes') {
  const { data, error } = await sb.storage.from(bucket).createSignedUrl(path, 600);
  if (error) return toast(error.message, 'erro');
  window.open(data.signedUrl, '_blank', 'noopener');
}
async function enviarArquivo(clienteId, pasta, arq) {
  const nome = arq.name.normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/[^A-Za-z0-9._-]+/g, '-');
  const path = clienteId + '/' + pasta + '/' + Date.now() + '-' + nome;
  const r = await sb.storage.from('arquivos-clientes').upload(path, arq, { contentType: arq.type || 'application/octet-stream' });
  if (r.error) { toast(r.error.message, 'erro'); return null; }
  return path;
}
const num = v => (v === '' || v == null) ? null : Number(String(v).replace(',', '.'));

const ETAPAS = [['lead', 'Leads'], ['proposta_enviada', 'Proposta enviada'], ['negociacao', 'Negociação'], ['fechado', 'Fechado'], ['perdido', 'Perdido']];
const COR_ETAPA = { lead: '#B9C7C0', proposta_enviada: '#7FB3E6', negociacao: '#F2B54A', fechado: '#10D885', perdido: '#C0574C' };
const ST_PROP = { rascunho: ['Rascunho', 'neu'], enviada: ['Enviada', 'info'], visualizada: ['Visualizada', 'info'], aceita: ['Aceita', 'ok'], recusada: ['Recusada', 'bad'], expirada: ['Expirada', 'neu'] };
const ST_CONT = { rascunho: ['Rascunho', 'neu'], aguardando_assinatura: ['Aguardando assinatura', 'warn'], assinado: ['Assinado', 'ok'], cancelado: ['Cancelado', 'bad'], encerrado: ['Encerrado', 'neu'] };
const ST_COB = { pendente: ['Pendente', 'warn'], paga: ['Paga', 'ok'], vencida: ['Vencida', 'bad'], cancelada: ['Cancelada', 'neu'], estornada: ['Estornada', 'neu'] };
const ST_TAR = [['a_fazer', 'A fazer'], ['em_andamento', 'Em andamento'], ['aguardando_cliente', 'Aguardando cliente'], ['concluido', 'Concluído']];
const ST_POST = { rascunho: ['Rascunho', 'neu'], aguardando_aprovacao: ['Aguardando aprovação', 'warn'], ajuste_solicitado: ['Ajuste solicitado', 'bad'], aprovado: ['Aprovado', 'ok'], agendado: ['Agendado', 'info'], publicado: ['Publicado', 'ok'] };
const FORMAS = [['indefinido', 'A definir'], ['pix', 'Pix'], ['boleto', 'Boleto'], ['cartao', 'Cartão']];
const PAPEIS = { pendente: 'Pendente', admin: 'Administrador', equipe: 'Equipe', cliente: 'Cliente' };
const CANAIS = [['instagram', 'Instagram'], ['facebook', 'Facebook'], ['linkedin', 'LinkedIn']];
const opts = obj => Object.entries(obj).map(([k, v]) => [k, Array.isArray(v) ? v[0] : v]);

// ---------- componentes base
const Pill = ({ k = 'neu', children }) => html`<span class="pill ${k}">${children}</span>`;
const PillDe = ({ mapa, v }) => { const x = mapa[v] || [v, 'neu']; return html`<${Pill} k=${x[1]}>${x[0]}<//>`; };
const Logo = ({ escuro }) => html`<a class=${'logo' + (escuro ? ' escuro' : '')} href="#/"><svg viewBox="0 0 163 169" aria-hidden="true"><path fill="#10D885" fill-rule="evenodd" d=${ICONE}></path></svg><b>baraúna</b></a>`;
const Kpi = ({ label, valor, nota, k }) => html`<section class="card kpi"><p>${label}</p><strong>${valor}</strong>${nota && html`<${Pill} k=${k}>${nota}<//>`}</section>`;
const Carregando = () => html`<p class="carregando">Carregando…</p>`;
const Topo = ({ titulo, sub, children }) => html`<header class="topo"><div><h1>${titulo}</h1>${sub && html`<p>${sub}</p>`}</div><div class="acoes">${children}</div></header>`;

function Toast() {
  const [t, setT] = useState(null);
  mostrarToast = setT;
  useEffect(() => { if (t) { const x = setTimeout(() => setT(null), 4000); return () => clearTimeout(x); } }, [t]);
  return t ? html`<div class=${'toast ' + t.tipo} role="status">${t.msg}</div>` : null;
}

function Modal({ titulo, onFechar, children }) {
  return html`<div class="fundo" onClick=${e => e.target === e.currentTarget && onFechar()}>
    <div class="modal" role="dialog" aria-modal="true" aria-label=${titulo}>
      <header><h2>${titulo}</h2><button class="btn pq" onClick=${onFechar} aria-label="Fechar">Fechar</button></header>
      ${children}
    </div></div>`;
}

let seq = 0;
function FormModal({ titulo, campos, inicial = {}, onSalvar, onFechar, rotulo = 'Salvar', antes }) {
  const [v, setV] = useState({ ...inicial });
  const [salvando, setSalvando] = useState(false);
  const [pref] = useState(() => 'f' + (++seq));
  const set = (n, val) => setV(o => ({ ...o, [n]: val }));
  const enviar = async e => {
    e.preventDefault();
    for (const c of campos) if (c.obrig && (v[c.n] == null || v[c.n] === '')) { toast('Preencha: ' + c.l, 'erro'); return; }
    setSalvando(true);
    const r = await onSalvar(v);
    setSalvando(false);
    if (r !== false) onFechar();
  };
  const campo = c => {
    const id = pref + c.n, val = v[c.n] ?? '';
    if (c.tipo === 'checks') return html`<fieldset class="campo" style="border:0;padding:0;margin:0"><legend style="font-size:13px;font-weight:600;margin-bottom:6px">${c.l}</legend><div class="acoes">${c.op.map(([k, l]) => html`<label class="chk"><input type="checkbox" checked=${(v[c.n] || []).includes(k)} onChange=${e => set(c.n, e.target.checked ? [...(v[c.n] || []), k] : (v[c.n] || []).filter(x => x !== k))} />${l}</label>`)}</div></fieldset>`;
    if (c.tipo === 'bool') return html`<label class="chk"><input type="checkbox" checked=${!!v[c.n]} onChange=${e => set(c.n, e.target.checked)} />${c.l}</label>`;
    let el;
    if (c.tipo === 'area') el = html`<textarea id=${id} value=${val} onInput=${e => set(c.n, e.target.value)} placeholder=${c.ph || ''}></textarea>`;
    else if (c.tipo === 'sel') el = html`<select id=${id} value=${val} onChange=${e => set(c.n, e.target.value)}>${c.vazio !== false && html`<option value="">${c.vazio || 'Selecione…'}</option>`}${c.op.map(([k, l]) => html`<option value=${k}>${l}</option>`)}</select>`;
    else el = html`<input id=${id} type=${c.tipo || 'text'} step=${c.tipo === 'number' ? '0.01' : undefined} value=${val} onInput=${e => set(c.n, e.target.value)} placeholder=${c.ph || ''} />`;
    return html`<div class="campo"><label for=${id}>${c.l}${c.obrig ? ' *' : ''}</label>${el}${c.ajuda && html`<span class="sub">${c.ajuda}</span>`}</div>`;
  };
  return html`<${Modal} titulo=${titulo} onFechar=${onFechar}>
    <form class="form" onSubmit=${enviar}>${antes}${campos.map(campo)}
      <div class="acoes"><button class="btn pri" type="submit" disabled=${salvando}>${salvando ? 'Salvando…' : rotulo}</button><button class="btn" type="button" onClick=${onFechar}>Cancelar</button></div>
    </form><//>`;
}

function useLista(tabela, sel = 'id,nome_empresa', ordem = 'nome_empresa') {
  const [l, setL] = useState([]);
  useEffect(() => { sb.from(tabela).select(sel).order(ordem).then(r => setL(r.data || [])); }, []);
  return l;
}
const opClientes = cl => cl.map(c => [c.id, c.nome_empresa]);

function useRota() {
  const ler = () => (location.hash.slice(1) || '/').split('?')[0];
  const [r, setR] = useState(ler());
  useEffect(() => { const f = () => setR(ler()); addEventListener('hashchange', f); return () => removeEventListener('hashchange', f); }, []);
  return r;
}

// ---------- acesso
function Login() {
  const [email, setEmail] = useState(''); const [senha, setSenha] = useState(''); const [enviando, setEnviando] = useState(false); const [erro, setErro] = useState('');
  const [esqueci, setEsqueci] = useState(false); const [aviso, setAviso] = useState('');
  const pedir = async e => {
    e.preventDefault(); setErro(''); setAviso('');
    if (email.trim().length < 3) return setErro('Informe seu usuário ou e-mail.');
    setEnviando(true);
    const { data, error } = await sb.functions.invoke('esqueci-senha', { body: { login: email.trim() } });
    setEnviando(false);
    let msg = data?.erro; if (!msg && error) { try { msg = (await error.context.json()).erro; } catch { msg = error.message; } }
    if (msg) return setErro(msg);
    setAviso(data.mensagem);
  };
  if (esqueci) return html`<main class="entrada"><form class="caixa" onSubmit=${pedir}>
    <${Logo} escuro />
    <div><h1>Esqueci minha senha</h1><p class="sub">Informe seu usuário de acesso (ou o e-mail que você cadastrou). Vamos enviar um link para você criar uma nova senha.</p></div>
    <div class="campo"><label for="ee">Usuário ou e-mail</label><input id="ee" type="text" autocapitalize="none" autocomplete="username" value=${email} onInput=${e => setEmail(e.target.value)} required /></div>
    ${erro && html`<p role="alert" style="color:#A12A1F;margin:0">${erro}</p>`}
    ${aviso && html`<p role="status" style="color:#08744A;margin:0;font-weight:600">${aviso}</p>`}
    <button class="btn pri" type="submit" disabled=${enviando}>${enviando ? 'Enviando…' : 'Enviar link'}</button>
    <button class="lnk" type="button" onClick=${() => { setEsqueci(false); setErro(''); setAviso(''); }}>Voltar para o login</button>
  </form></main>`;
  const entrar = async e => {
    e.preventDefault(); setEnviando(true); setErro('');
    const login = email.trim().toLowerCase();
    const { error } = await sb.auth.signInWithPassword({ email: login.includes('@') ? login : login + '@' + DOM_CLI, password: senha });
    setEnviando(false);
    if (error) setErro(error.message.includes('Invalid') ? 'Usuário ou senha incorretos.' : error.message);
  };
  return html`<main class="entrada"><form class="caixa" onSubmit=${entrar}>
    <${Logo} escuro />
    <div><h1>Entrar</h1><p class="sub">Painel de clientes da Agência Baraúna</p></div>
    <div class="campo"><label for="le">Usuário ou e-mail</label><input id="le" type="text" autocapitalize="none" autocomplete="username" value=${email} onInput=${e => setEmail(e.target.value)} required /></div>
    <div class="campo"><label for="ls">Senha</label><input id="ls" type="password" autocomplete="current-password" value=${senha} onInput=${e => setSenha(e.target.value)} required /></div>
    ${erro && html`<p role="alert" style="color:#A12A1F;margin:0">${erro}</p>`}
    <button class="btn pri" type="submit" disabled=${enviando}>${enviando ? 'Entrando…' : 'Entrar'}</button>
    <button class="lnk" type="button" onClick=${() => { setEsqueci(true); setErro(''); }}>Esqueci minha senha</button>
  </form></main>`;
}

function TrocarSenha({ perfil, onOk }) {
  const cli = perfil.papel === 'cliente';
  const [a, setA] = useState(''); const [b, setB] = useState(''); const [enviando, setEnviando] = useState(false); const [erro, setErro] = useState('');
  const [nome, setNome] = useState(perfil.nome || ''); const [mail, setMail] = useState(perfil.email_contato || ''); const [tel, setTel] = useState(perfil.telefone || '');
  const salvar = async e => {
    e.preventDefault(); setErro('');
    if (cli && (!nome.trim() || !mail.includes('@') || tel.replace(/\D/g, '').length < 10)) return setErro('Preencha seu nome, e-mail e telefone com DDD.');
    if (a.length < 8) return setErro('Use pelo menos 8 caracteres.');
    if (a !== b) return setErro('As senhas não conferem.');
    setEnviando(true);
    if (cli) { const r0 = await sb.rpc('completar_cadastro', { p_nome: nome, p_email: mail, p_telefone: tel }); if (r0.error) { setEnviando(false); return setErro(r0.error.message); } }
    const r1 = await sb.auth.updateUser({ password: a });
    if (r1.error) { setEnviando(false); return setErro(r1.error.message); }
    const r2 = await sb.from('perfis').update({ precisa_trocar_senha: false }).eq('id', perfil.id);
    setEnviando(false);
    if (r2.error) return setErro(r2.error.message);
    toast('Senha alterada!'); onOk();
  };
  return html`<main class="entrada"><form class="caixa" onSubmit=${salvar}>
    <${Logo} escuro />
    <div><h1>${cli ? 'Boas-vindas!' : 'Crie sua senha'}</h1><p class="sub">${cli ? 'Antes de começar, complete seus dados e crie a sua senha de acesso.' : 'Olá' + (perfil.nome ? ', ' + perfil.nome : '') + '! Por segurança, troque a senha temporária antes de continuar.'}</p></div>
    ${cli && html`<div class="campo"><label for="c1">Seu nome</label><input id="c1" autocomplete="name" value=${nome} onInput=${e => setNome(e.target.value)} /></div>
    <div class="campo"><label for="c2">Seu e-mail</label><input id="c2" type="email" autocomplete="email" value=${mail} onInput=${e => setMail(e.target.value)} /></div>
    <div class="campo"><label for="c3">Seu WhatsApp</label><input id="c3" type="tel" autocomplete="tel" placeholder="(11) 90000-0000" value=${tel} onInput=${e => setTel(e.target.value)} /></div>`}
    <div class="campo"><label for="n1">Nova senha</label><input id="n1" type="password" autocomplete="new-password" value=${a} onInput=${e => setA(e.target.value)} /></div>
    <div class="campo"><label for="n2">Repita a nova senha</label><input id="n2" type="password" autocomplete="new-password" value=${b} onInput=${e => setB(e.target.value)} /></div>
    ${erro && html`<p role="alert" style="color:#A12A1F;margin:0">${erro}</p>`}
    <button class="btn pri" type="submit" disabled=${enviando}>${enviando ? 'Salvando…' : 'Salvar e continuar'}</button>
    <button class="lnk" type="button" onClick=${() => sb.auth.signOut()}>Sair</button>
  </form></main>`;
}

function RedefinirSenha({ token }) {
  const [a, setA] = useState(''); const [b, setB] = useState(''); const [s, setS] = useState(false); const [erro, setErro] = useState(''); const [feito, setFeito] = useState(null);
  const salvar = async e => {
    e.preventDefault(); setErro('');
    if (a.length < 8) return setErro('Use pelo menos 8 caracteres.');
    if (a !== b) return setErro('As senhas não conferem.');
    setS(true);
    const { data, error } = await sb.functions.invoke('redefinir-senha', { body: { token, senha: a } });
    setS(false);
    let msg = data?.erro; if (!msg && error) { try { msg = (await error.context.json()).erro; } catch { msg = error.message; } }
    if (msg) return setErro(msg);
    setFeito(data.usuario || '');
  };
  if (feito !== null) return html`<main class="entrada"><div class="caixa"><${Logo} escuro /><h1>Senha alterada!</h1><p class="sub">Agora é só entrar com ${feito ? html`o usuário <b>${feito}</b> e` : ''} a sua nova senha.</p><a class="btn pri" href="#/" onClick=${() => setTimeout(() => location.reload(), 50)}>Ir para o login</a></div></main>`;
  return html`<main class="entrada"><form class="caixa" onSubmit=${salvar}>
    <${Logo} escuro /><div><h1>Criar nova senha</h1><p class="sub">Escolha uma senha com pelo menos 8 caracteres.</p></div>
    <div class="campo"><label for="r1">Nova senha</label><input id="r1" type="password" autocomplete="new-password" value=${a} onInput=${e => setA(e.target.value)} /></div>
    <div class="campo"><label for="r2">Repita a nova senha</label><input id="r2" type="password" autocomplete="new-password" value=${b} onInput=${e => setB(e.target.value)} /></div>
    ${erro && html`<p role="alert" style="color:#A12A1F;margin:0">${erro}</p>`}
    <button class="btn pri" type="submit" disabled=${s}>${s ? 'Salvando…' : 'Salvar nova senha'}</button></form></main>`;
}
const Pendente = () => html`<main class="entrada"><div class="caixa"><${Logo} escuro /><h1>Acesso em análise</h1><p class="sub">Seu usuário foi criado, mas ainda não foi liberado. Fale com a Agência Baraúna.</p><button class="btn" onClick=${() => sb.auth.signOut()}>Sair</button></div></main>`;

// ---------- layout da equipe
const IC_MENU = {
  casa: 'M3 11l9-8 9 8v9a1 1 0 0 1-1 1h-5v-6h-6v6H4a1 1 0 0 1-1-1z',
  check: 'M9 11l3 3 8-8 M20 12v7a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11',
  balao: 'M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z',
  lista: 'M9 6h11 M9 12h11 M9 18h11 M4 6h.01 M4 12h.01 M4 18h.01',
  foguete: 'M5 15c-1.5 1.5-2 5-2 5s3.5-.5 5-2 M14 4c4-1 6 1 6 1s2 2 1 6l-7 7-7-7z M14 10a1 1 0 1 0 0-.01',
  pessoas: 'M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2 M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8z M22 21v-2a4 4 0 0 0-3-3.9 M16 3.1a4 4 0 0 1 0 7.8',
  cal: 'M4 5h16v15H4z M4 10h16 M9 3v4 M15 3v4',
  grafico: 'M3 3v18h18 M7 15l4-4 3 3 6-6',
  funil: 'M3 4h18l-7 8v6l-4 2v-8z',
  doc: 'M14 3H6a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V8z M14 3v5h5 M9 13h6 M9 17h4',
  caneta: 'M4 20h4L19 9l-4-4L4 16z M13 7l4 4',
  cifrao: 'M12 2v20 M17 6H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6',
  nota: 'M6 2h9l5 5v15H6z M14 2v6h6 M9 13h8 M9 17h8 M9 9h2',
  escudo: 'M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z',
  predio: 'M3 21h18 M5 21V7l7-4 7 4v14 M9 10h1 M14 10h1 M9 14h1 M14 14h1 M10 21v-3h4v3',
  plug: 'M9 3v5 M15 3v5 M6 8h12v3a6 6 0 0 1-12 0z M12 17v4',
};
const MENU = [
  ['', [['/', 'Dashboard', 'casa']]],
  ['Clientes', [['/aprovacoes', 'Aprovações', 'check', 'aprov'], ['/solicitacoes', 'Solicitações', 'balao', 'sol'], ['/demandas', 'Demandas e reuniões', 'lista'], ['/primeiros-passos', 'Primeiros passos', 'foguete'], ['/clientes', 'Clientes', 'pessoas']]],
  ['Conteúdo e mídia', [['/redes', 'Redes sociais', 'cal'], ['/campanhas', 'Campanhas', 'grafico']]],
  ['Comercial', [['/crm', 'CRM de propostas', 'funil'], ['/propostas', 'Propostas', 'doc'], ['/contratos', 'Contratos', 'caneta']]],
  ['Financeiro', [['/cobrancas', 'Cobranças', 'cifrao'], ['/notas', 'Notas fiscais', 'nota']]],
  ['Configurações', [['/equipe', 'Equipe e acessos', 'escudo'], ['/agencia', 'Dados da agência', 'predio'], ['/integracoes', 'Integrações', 'plug']]],
];
const IconeMenu = ({ n }) => html`<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" style="flex-shrink:0"><path d=${IC_MENU[n]}></path></svg>`;
function Painel({ perfil, rota }) {
  const [contagens, setContagens] = useState({});
  useEffect(() => {
    Promise.all([sb.from('entregas').select('id', { count: 'exact', head: true }).eq('status', 'ajuste_solicitado'), sb.from('solicitacoes').select('id', { count: 'exact', head: true }).eq('status', 'aberta')])
      .then(([a, b]) => setContagens({ aprov: a.count || 0, sol: b.count || 0 }));
  }, [rota]);
  const base = '/' + (rota.split('/')[1] || '');
  let pag;
  if (rota === '/') pag = html`<${Dashboard} perfil=${perfil} />`;
  else if (rota === '/crm') pag = html`<${CRM} />`;
  else if (rota === '/clientes') pag = html`<${Clientes} perfil=${perfil} />`;
  else if (rota === '/propostas') pag = html`<${Propostas} />`;
  else if (rota.startsWith('/propostas/')) pag = html`<${EditorProposta} key=${rota} id=${rota.split('/')[2]} />`;
  else if (rota === '/contratos') pag = html`<${Contratos} perfil=${perfil} />`;
  else if (rota === '/agencia') pag = html`<${DadosAgencia} perfil=${perfil} />`;
  else if (rota === '/primeiros-passos') pag = html`<${PrimeirosPassos} />`;
  else if (rota === '/cobrancas') pag = html`<${Cobrancas} />`;
  else if (rota === '/notas') pag = html`<${NotasFiscais} />`;
  else if (rota === '/demandas') pag = html`<${Demandas} />`;
  else if (rota === '/solicitacoes') pag = html`<${Solicitacoes} perfil=${perfil} />`;
  else if (rota === '/aprovacoes') pag = html`<${Entregas} />`;
  else if (rota === '/redes') pag = html`<${Redes} />`;
  else if (rota === '/campanhas') pag = html`<${Campanhas} />`;
  else if (rota === '/campanhas/planos') pag = html`<${PlanosAds} />`;
  else if (rota.startsWith('/campanhas/planos/')) pag = html`<${EditorPlanoAds} key=${rota} id=${rota.split('/')[3]} />`;
  else if (rota === '/integracoes') pag = html`<${Integracoes} />`;
  else if (rota === '/equipe') pag = html`<${Equipe} perfil=${perfil} />`;
  else pag = html`<${Topo} titulo="Página não encontrada"><a class="btn" href="#/">Voltar</a><//>`;
  return html`<div class="layout">
    <nav class="side" aria-label="Menu principal">
      <${Logo} />
      ${MENU.map(([g, itens]) => html`<div class="grupo">${g && html`<p class="secao">${g}</p>`}${itens.map(([p, t, ic, cont]) => html`<a href=${'#' + p} class=${(p === '/' ? rota === '/' : base === p) ? 'ativo' : ''} aria-current=${(p === '/' ? rota === '/' : base === p) ? 'page' : undefined}><${IconeMenu} n=${ic} /><span style="flex:1">${t}</span>${cont && contagens[cont] > 0 && html`<span class="badge" aria-label=${contagens[cont] + ' pendentes'}>${contagens[cont]}</span>`}</a>`)}</div>`)}
      <div class="usuario"><b>${perfil.nome || perfil.email}</b><span>${PAPEIS[perfil.papel]}</span><button class="lnk" style="color:#C9D6CF;text-align:left" onClick=${() => sb.auth.signOut()}>Sair</button></div>
    </nav>
    <main class="main">${pag}</main>
  </div>`;
}

// ---------- dashboard
function Dashboard({ perfil }) {
  const [d, setD] = useState(null);
  useEffect(() => {
    (async () => {
      const [op, cob, tar, reu, onb, cli, sol] = await Promise.all([
        sb.from('oportunidades').select('etapa,valor_unico,valor_mensal'),
        sb.from('cobrancas').select('valor,status,vencimento'),
        sb.from('tarefas').select('id,titulo,status,prazo,clientes(nome_empresa)').neq('status', 'concluido').order('prazo', { ascending: true, nullsFirst: false }).limit(6),
        sb.from('reunioes').select('id,titulo,inicio,link_meet,clientes(nome_empresa)').gte('inicio', new Date().toISOString()).order('inicio').limit(5),
        sb.from('onboarding_progresso').select('*'),
        sb.from('clientes').select('id,nome_empresa'),
        sb.from('solicitacoes').select('id,titulo,tipo,status,criado_em,clientes(nome_empresa)').in('status', ['aberta', 'em_andamento']).order('criado_em')]);
      setD({ op: op.data || [], cob: cob.data || [], tar: tar.data || [], reu: reu.data || [], onb: onb.data || [], cli: cli.data || [], sol: sol.data || [] });
    })();
  }, []);
  if (!d) return html`<${Carregando} />`;
  const soma = (a, f) => a.reduce((s, x) => s + Number(f(x) || 0), 0);
  const fech = d.op.filter(o => o.etapa === 'fechado'), aberto = d.op.filter(o => ['proposta_enviada', 'negociacao'].includes(o.etapa));
  const h0 = hojeISO();
  const lim30 = (() => { const x = new Date(); x.setDate(x.getDate() + 30); return x.toISOString().slice(0, 10); })();
  const receber = d.cob.filter(c => c.status === 'pendente' && c.vencimento >= h0 && c.vencimento <= lim30), atraso = d.cob.filter(c => c.status === 'vencida' || (c.status === 'pendente' && c.vencimento < h0));
  const cont = Object.fromEntries(ETAPAS.map(([k]) => [k, d.op.filter(o => o.etapa === k).length]));
  const max = Math.max(1, ...Object.values(cont));
  const nome = id => d.cli.find(c => c.id === id)?.nome_empresa || '—';
  const primeiro = (perfil.nome || '').split(' ')[0];
  return html`
    <${Topo} titulo=${'Olá' + (primeiro ? ', ' + primeiro : '')} sub=${new Date().toLocaleDateString('pt-BR', { weekday: 'long', day: 'numeric', month: 'long' })}>
      <a class="btn pri" href="#/propostas/nova">Nova proposta</a><//>
    <${LembreteCalendarios} />
    <div class="grid">
      <${Kpi} label="Receita mensal fechada" valor=${brl(soma(fech, o => o.valor_mensal))} nota=${brl(soma(fech, o => o.valor_unico)) + ' em implantações'} k="ok" />
      <${Kpi} label="Em negociação" valor=${brl(soma(aberto, o => o.valor_mensal)) + '/mês'} nota=${aberto.length + ' proposta(s) em aberto'} k="info" />
      <${Kpi} label="A receber (30 dias)" valor=${brl(soma(receber, c => c.valor))} nota=${receber.length + ' cobrança(s)'} k="warn" />
      <${Kpi} label="Em atraso" valor=${brl(soma(atraso, c => c.valor))} nota=${atraso.length ? atraso.length + ' cobrança(s)' : 'Nada em atraso'} k=${atraso.length ? 'bad' : 'ok'} />
    </div>
    <div class="cols">
      <div class="c2">
        <section class="card"><h2>Funil comercial</h2>
          <div class="form">${ETAPAS.map(([k, l]) => html`<div><div style="display:flex;justify-content:space-between;font-size:13px;margin-bottom:4px"><span>${l}</span><span class="sub">${cont[k]}</span></div><div class="barra"><i style=${'width:' + (cont[k] / max * 100) + '%;background:' + COR_ETAPA[k]}></i></div></div>`)}</div>
          <p style="margin:14px 0 0"><a href="#/crm">Abrir o CRM</a></p></section>
        <section class="card"><h2>Primeiros passos dos clientes</h2>
          ${d.onb.length ? html`<div class="lista">${d.onb.map(o => html`<div><div style="flex:1"><b>${nome(o.cliente_id)}</b><div class="barra" style="margin-top:6px"><i style=${'width:' + Math.round(o.concluidos / o.total * 100) + '%'}></i></div></div><span class="sub">${o.concluidos}/${o.total} · ${o.pendentes_cliente} com o cliente</span></div>`)}</div>` : html`<p class="vazio">Nenhum cliente em implantação.</p>`}
          <p style="margin:14px 0 0"><a href="#/primeiros-passos">Ver checklists</a></p></section>
      </div>
      <div class="c1">
        <section class="card"><h2>Solicitações dos clientes</h2>
          ${d.sol.length ? html`<div class="lista">${d.sol.slice(0, 6).map(x => html`<div><div><b>${x.titulo}</b><div class="sub">${x.clientes?.nome_empresa} · ${dataBR(x.criado_em)}</div></div><${PillDe} mapa=${ST_SOL_EQ} v=${x.status} /></div>`)}</div>` : html`<p class="vazio">Nenhuma solicitação aberta.</p>`}
          <p style="margin:12px 0 0"><a href="#/solicitacoes">Ver solicitações</a></p></section>
        <section class="card"><h2>Tarefas abertas</h2>
          ${d.tar.length ? html`<div class="lista">${d.tar.map(t => html`<div><div><b>${t.titulo}</b><div class="sub">${t.clientes?.nome_empresa || 'Interno'}</div></div>${t.prazo && html`<${Pill} k=${t.prazo < h0 ? 'bad' : 'neu'}>${dataBR(t.prazo)}<//>`}</div>`)}</div>` : html`<p class="vazio">Nenhuma tarefa aberta.</p>`}
          <p style="margin:12px 0 0"><a href="#/demandas">Ver demandas</a></p></section>
        <section class="card"><h2>Próximas reuniões</h2>
          ${d.reu.length ? html`<div class="lista">${d.reu.map(r => html`<div><div><b>${r.titulo}</b><div class="sub">${dataHora(r.inicio)} · ${r.clientes?.nome_empresa || ''}</div></div>${r.link_meet && html`<a class="btn pq" href=${r.link_meet} target="_blank" rel="noopener">Entrar</a>`}</div>`)}</div>` : html`<p class="vazio">Nenhuma reunião agendada.</p>`}</section>
      </div>
    </div>`;
}

// ---------- clientes
const CAMPOS_CLIENTE = [
  { n: 'nome_empresa', l: 'Empresa', obrig: true }, { n: 'nome_contato', l: 'Contato' }, { n: 'email', l: 'E-mail', tipo: 'email' },
  { n: 'telefone', l: 'Telefone / WhatsApp' }, { n: 'cnpj', l: 'CNPJ' }, { n: 'site', l: 'Site' }, { n: 'cidade', l: 'Cidade' },
  { n: 'status', l: 'Status', tipo: 'sel', vazio: false, op: [['lead', 'Lead'], ['ativo', 'Ativo'], ['inativo', 'Inativo']] },
  { n: 'canal_cobranca', l: 'Como é cobrado', tipo: 'sel', vazio: false, op: [['manual', 'Manual (fora do Asaas)'], ['asaas', 'Asaas']] },
  { n: 'emite_nf', l: 'Emitir nota fiscal todo mês', tipo: 'bool' },
  { n: 'email_financeiro', l: 'E-mail para envio de notas e cobranças', ph: 'Separe vários com vírgula' },
  { n: 'observacoes', l: 'Observações', tipo: 'area' }];
function Clientes({ perfil }) {
  const [l, setL] = useState(null); const [m, setM] = useState(null); const [acesso, setAcesso] = useState(null); const [nAc, setNAc] = useState({});
  const carregar = () => { sb.from('clientes').select('*').order('nome_empresa').then(r => setL(r.data || [])); sb.from('perfis').select('cliente_id').eq('papel', 'cliente').then(r => { const c = {}; (r.data || []).forEach(x => { c[x.cliente_id] = (c[x.cliente_id] || 0) + 1; }); setNAc(c); }); };
  useEffect(() => { carregar(); }, []);
  const salvar = async v => {
    const dados = { ...v }; delete dados.id; delete dados.criado_em; delete dados.atualizado_em;
    const r = m.id ? await sb.from('clientes').update(dados).eq('id', m.id) : await sb.from('clientes').insert(dados);
    if (!ok(r, 'Cliente salvo')) return false; carregar();
  };
  if (!l) return html`<${Carregando} />`;
  return html`<${Topo} titulo="Clientes" sub="Cadastro de empresas, leads e clientes ativos."><button class="btn pri" onClick=${() => setM({ status: 'lead', canal_cobranca: 'manual', emite_nf: false })}>Novo cliente</button><//>
    <section class="card tabela"><table><thead><tr><th>Empresa</th><th>Contato</th><th>Cobrança</th><th>Acessos ao portal</th><th>Status</th><th></th></tr></thead><tbody>
    ${l.map(c => html`<tr><td><b>${c.nome_empresa}</b><div class="sub">${c.email || ''}</div></td><td>${c.nome_contato || '—'}<div class="sub">${c.telefone || ''}</div></td><td>${c.canal_cobranca === 'asaas' ? 'Asaas' : 'Manual'}${c.emite_nf ? html`<div class="sub">Emite NF</div>` : ''}</td><td>${nAc[c.id] ? nAc[c.id] + (nAc[c.id] > 1 ? ' pessoas' : ' pessoa') : html`<span class="sub">Nenhum</span>`}</td>
      <td><${Pill} k=${c.status === 'ativo' ? 'ok' : c.status === 'lead' ? 'info' : 'neu'}>${c.status}<//></td>
      <td><div class="acoes"><button class="btn pq" onClick=${() => setM(c)}>Editar</button>${perfil.papel === 'admin' && html`<button class="btn pq" onClick=${() => setAcesso(c)}>${nAc[c.id] ? 'Novo acesso' : 'Criar acesso ao portal'}</button>`}</div></td></tr>`)}
    </tbody></table></section>
    ${m && html`<${FormModal} titulo=${m.id ? 'Editar cliente' : 'Novo cliente'} campos=${CAMPOS_CLIENTE} inicial=${m} onSalvar=${salvar} onFechar=${() => setM(null)} />`}
    ${acesso && html`<${CriarAcesso} modo="cliente" cliente=${{ ...acesso, jaTem: !!nAc[acesso.id] }} onFechar=${() => { setAcesso(null); carregar(); }} />`}`;
}

// ---------- CRM
function CRM() {
  const [ops, setOps] = useState(null); const [m, setM] = useState(null);
  const clientes = useLista('clientes'); const equipe = useLista('perfis', 'id,nome,email,papel', 'nome');
  const carregar = () => sb.from('oportunidades').select('*, clientes(nome_empresa)').order('atualizado_em', { ascending: false }).then(r => setOps(r.data || []));
  useEffect(() => { carregar(); }, []);
  const mover = async (o, etapa) => {
    const extra = {};
    if (etapa === 'perdido') { const mot = prompt('Qual o motivo da perda?'); if (mot === null) return carregar(); extra.motivo_perda = mot; }
    if (ok(await sb.from('oportunidades').update({ etapa, ...extra }).eq('id', o.id), etapa === 'fechado' ? 'Fechado! O cliente foi ativado e os primeiros passos foram liberados.' : 'Etapa atualizada')) carregar();
  };
  const salvar = async v => {
    let cliente_id = v.cliente_id;
    if (v.novo_cliente) { const r = await sb.from('clientes').insert({ nome_empresa: v.novo_cliente }).select('id').single(); if (!ok(r)) return false; cliente_id = r.data.id; }
    if (!cliente_id) { toast('Escolha ou cadastre o cliente', 'erro'); return false; }
    const dados = { cliente_id, titulo: v.titulo, etapa: v.etapa || 'lead', valor_unico: num(v.valor_unico) || 0, valor_mensal: num(v.valor_mensal) || 0, responsavel_id: v.responsavel_id || null, origem: v.origem || null, proximo_passo: v.proximo_passo || null, data_proximo_passo: v.data_proximo_passo || null };
    const r = m.id ? await sb.from('oportunidades').update(dados).eq('id', m.id) : await sb.from('oportunidades').insert(dados);
    if (!ok(r, 'Oportunidade salva')) return false; carregar();
  };
  if (!ops) return html`<${Carregando} />`;
  const campos = [
    { n: 'cliente_id', l: 'Cliente', tipo: 'sel', op: opClientes(clientes) }, ...(m && !m.id ? [{ n: 'novo_cliente', l: 'Ou cadastre um cliente novo', ph: 'Nome da empresa' }] : []),
    { n: 'titulo', l: 'Título', obrig: true, ph: 'Ex.: Site + Google Ads' }, { n: 'etapa', l: 'Etapa', tipo: 'sel', vazio: false, op: ETAPAS },
    { n: 'valor_unico', l: 'Valor único (R$)', tipo: 'number' }, { n: 'valor_mensal', l: 'Valor mensal (R$)', tipo: 'number' },
    { n: 'responsavel_id', l: 'Responsável', tipo: 'sel', op: equipe.filter(p => ['admin', 'equipe'].includes(p.papel)).map(p => [p.id, p.nome || p.email]) },
    { n: 'origem', l: 'Origem', ph: 'Indicação, site, Instagram…' }, { n: 'proximo_passo', l: 'Próximo passo' }, { n: 'data_proximo_passo', l: 'Data do próximo passo', tipo: 'date' }];
  return html`<${Topo} titulo="CRM de propostas" sub="Mude a etapa pelo seletor de cada card. Ao fechar, o cliente recebe os primeiros passos automaticamente.">
      <button class="btn pri" onClick=${() => setM({ etapa: 'lead' })}>Nova oportunidade</button><//>
    <div class="kanban">${ETAPAS.map(([k, l]) => {
      const itens = ops.filter(o => o.etapa === k);
      const mensal = itens.reduce((s, o) => s + Number(o.valor_mensal || 0), 0);
      return html`<section class="coluna" aria-label=${l}><header><span><span style=${'display:inline-block;width:10px;height:10px;border-radius:9px;margin-right:8px;background:' + COR_ETAPA[k]}></span>${l}</span><span class="sub">${itens.length}${mensal ? ' · ' + brl(mensal) + '/mês' : ''}</span></header>
        ${itens.length ? itens.map(o => html`<article class="kcard">
          <div style="display:flex;justify-content:space-between;gap:8px"><b>${o.clientes?.nome_empresa}</b><button class="lnk" onClick=${() => setM(o)}>Editar</button></div>
          <span class="sub">${o.titulo}</span>
          <span class="valor">${o.valor_unico > 0 ? brl(o.valor_unico) + ' + ' : ''}${brl(o.valor_mensal)}/mês</span>
          ${o.proximo_passo && html`<span class="sub">Próximo: ${o.proximo_passo}${o.data_proximo_passo ? ' (' + dataBR(o.data_proximo_passo) + ')' : ''}</span>`}
          ${o.motivo_perda && html`<span class="sub">Motivo: ${o.motivo_perda}</span>`}
          <span class="sub">${dias(o.etapa_atualizada_em)} dia(s) nesta etapa</span>
          <label class="sub" for=${'et' + o.id} style="font-weight:600">Mover para</label>
          <select id=${'et' + o.id} value=${o.etapa} onChange=${e => mover(o, e.target.value)}>${ETAPAS.map(([v, t]) => html`<option value=${v}>${t}</option>`)}</select>
        </article>`) : html`<p class="vazio" style="padding:4px">Nada aqui.</p>`}</section>`;
    })}</div>
    ${m && html`<${FormModal} titulo=${m.id ? 'Editar oportunidade' : 'Nova oportunidade'} campos=${campos} inicial=${m} onSalvar=${salvar} onFechar=${() => setM(null)} />`}`;
}

// ---------- propostas
const linkPublico = t => location.origin + '/#/p/' + t;
const copiar = async t => { try { await navigator.clipboard.writeText(t); toast('Link copiado'); } catch { prompt('Copie o link:', t); } };
function Propostas() {
  const [l, setL] = useState(null); const [tot, setTot] = useState({});
  useEffect(() => {
    Promise.all([sb.from('propostas').select('*, clientes(nome_empresa)').order('criado_em', { ascending: false }), sb.from('propostas_totais').select('*')])
      .then(([p, t]) => { setL(p.data || []); setTot(Object.fromEntries((t.data || []).map(x => [x.proposta_id, x]))); });
  }, []);
  if (!l) return html`<${Carregando} />`;
  return html`<${Topo} titulo="Propostas" sub="Monte, envie por link e acompanhe visualizações e aceite."><a class="btn pri" href="#/propostas/nova">Nova proposta</a><//>
    <section class="card tabela"><table><thead><tr><th>Cliente</th><th>Proposta</th><th>Valores</th><th>Status</th><th>Visualizações</th><th></th></tr></thead><tbody>
    ${l.length ? l.map(p => html`<tr><td><b>${p.clientes?.nome_empresa}</b></td><td>${p.titulo}<div class="sub">${p.enviada_em ? 'Enviada em ' + dataBR(p.enviada_em) : 'Não enviada'}</div></td>
      <td>${tot[p.id]?.total_unico > 0 ? brl(tot[p.id].total_unico) + ' + ' : ''}${brl(tot[p.id]?.total_mensal)}/mês</td>
      <td><${PillDe} mapa=${ST_PROP} v=${p.status} /></td><td>${p.visualizacoes}${p.ultima_visualizacao_em ? html`<div class="sub">Última: ${dataHora(p.ultima_visualizacao_em)}</div>` : ''}</td>
      <td><div class="acoes"><a class="btn pq" href=${'#/propostas/' + p.id}>Abrir</a>${p.status !== 'rascunho' && html`<button class="btn pq" onClick=${() => copiar(linkPublico(p.token_publico))}>Copiar link</button>`}</div></td></tr>`) : html`<tr><td colspan="6" class="vazio">Nenhuma proposta ainda.</td></tr>`}
    </tbody></table></section>`;
}

function EditorProposta({ id }) {
  const nova = id === 'nova';
  const [carregado, setCarregado] = useState(false);
  const [f, setF] = useState({ cliente_id: '', titulo: '', validade_em: '', verba_midia_sugerida: '', link_apresentacao: '', observacoes: '' });
  const [prop, setProp] = useState(null); const [itens, setItens] = useState([]); const [salvando, setSalvando] = useState(false); const [temContrato, setTemContrato] = useState(false);
  const clientes = useLista('clientes');
  useEffect(() => {
    (async () => {
      const { data: servs } = await sb.from('servicos').select('*').eq('ativo', true).order('ordem');
      let existentes = [];
      if (!nova) {
        const { data: p } = await sb.from('propostas').select('*').eq('id', id).single();
        if (!p) { toast('Proposta não encontrada', 'erro'); return ir('/propostas'); }
        setProp(p); setF({ cliente_id: p.cliente_id, titulo: p.titulo, validade_em: p.validade_em || '', verba_midia_sugerida: p.verba_midia_sugerida ?? '', link_apresentacao: p.link_apresentacao || '', observacoes: p.observacoes || '' });
        existentes = (await sb.from('proposta_itens').select('*').eq('proposta_id', id).order('ordem')).data || [];
        const { count } = await sb.from('contratos').select('id', { count: 'exact', head: true }).eq('proposta_id', id);
        setTemContrato((count || 0) > 0);
      }
      const lista = (servs || []).map(s => { const e = existentes.find(x => x.servico_id === s.id); return { servico_id: s.id, descricao: e ? e.descricao : s.nome, tipo_cobranca: s.tipo_cobranca, preco_unitario: e ? e.preco_unitario : s.preco, sel: !!e }; });
      existentes.filter(x => !x.servico_id).forEach(x => lista.push({ servico_id: null, descricao: x.descricao, tipo_cobranca: x.tipo_cobranca, preco_unitario: x.preco_unitario, sel: true }));
      setItens(lista); setCarregado(true);
    })();
  }, []);
  if (!carregado) return html`<${Carregando} />`;
  const set = (k, v) => setF(o => ({ ...o, [k]: v }));
  const setItem = (i, k, v) => setItens(l => l.map((x, j) => j === i ? { ...x, [k]: v } : x));
  const sel = itens.filter(x => x.sel);
  const totU = sel.filter(x => x.tipo_cobranca === 'unico').reduce((s, x) => s + Number(x.preco_unitario || 0), 0);
  const totM = sel.filter(x => x.tipo_cobranca === 'mensal').reduce((s, x) => s + Number(x.preco_unitario || 0), 0);
  const travada = prop && ['aceita', 'recusada'].includes(prop.status);
  const salvar = async () => {
    if (!f.cliente_id || !f.titulo) return toast('Escolha o cliente e dê um título', 'erro');
    if (!sel.length) return toast('Marque pelo menos um serviço', 'erro');
    setSalvando(true);
    const dados = { cliente_id: f.cliente_id, titulo: f.titulo, validade_em: f.validade_em || null, verba_midia_sugerida: num(f.verba_midia_sugerida), link_apresentacao: f.link_apresentacao || null, observacoes: f.observacoes || null };
    let pid = id;
    if (nova) {
      const { data: op } = await sb.from('oportunidades').select('id').eq('cliente_id', f.cliente_id).not('etapa', 'in', '(fechado,perdido)').order('criado_em', { ascending: false }).limit(1);
      const r = await sb.from('propostas').insert({ ...dados, oportunidade_id: op?.[0]?.id || null }).select('id').single();
      if (!ok(r)) return setSalvando(false);
      pid = r.data.id;
    } else {
      if (!ok(await sb.from('propostas').update(dados).eq('id', id))) return setSalvando(false);
      if (!ok(await sb.from('proposta_itens').delete().eq('proposta_id', id))) return setSalvando(false);
    }
    const r2 = await sb.from('proposta_itens').insert(sel.map((x, i) => ({ proposta_id: pid, servico_id: x.servico_id, descricao: x.descricao, tipo_cobranca: x.tipo_cobranca, preco_unitario: Number(x.preco_unitario || 0), ordem: i + 1 })));
    setSalvando(false);
    if (!ok(r2, 'Proposta salva')) return;
    if (nova) ir('/propostas/' + pid); else location.reload();
  };
  const status = async (st, extra = {}) => { if (ok(await sb.from('propostas').update({ status: st, ...extra }).eq('id', id), 'Status atualizado')) location.reload(); };
  const gerarContrato = async () => {
    const r = await sb.from('contratos').insert({ proposta_id: id, cliente_id: prop.cliente_id, valor_unico: totU, valor_mensal: totM, status: 'rascunho' });
    if (ok(r, 'Contrato criado em rascunho')) ir('/contratos');
  };
  return html`<${Topo} titulo=${nova ? 'Nova proposta' : 'Proposta'} sub=${nova ? 'Escolha o cliente e os serviços. Os valores podem ser ajustados por proposta.' : f.titulo}>
      <a class="btn" href="#/propostas">Voltar</a>${!travada && html`<button class="btn pri" onClick=${salvar} disabled=${salvando}>${salvando ? 'Salvando…' : 'Salvar'}</button>`}<//>
    <div class="cols"><div class="c2">
      <section class="card form"><h2>1. Cliente e condições</h2>
        <div class="campo"><label for="pc">Cliente *</label><select id="pc" value=${f.cliente_id} onChange=${e => set('cliente_id', e.target.value)} disabled=${travada}><option value="">Selecione…</option>${clientes.map(c => html`<option value=${c.id}>${c.nome_empresa}</option>`)}</select></div>
        <div class="campo"><label for="pt">Título *</label><input id="pt" value=${f.titulo} onInput=${e => set('titulo', e.target.value)} placeholder="Ex.: Novo site, Google Ads e redes sociais" disabled=${travada} /></div>
        <div class="grid">
          <div class="campo"><label for="pv">Validade</label><input id="pv" type="date" value=${f.validade_em} onInput=${e => set('validade_em', e.target.value)} disabled=${travada} /></div>
          <div class="campo"><label for="pm">Verba de mídia sugerida (R$)</label><input id="pm" type="number" step="0.01" value=${f.verba_midia_sugerida} onInput=${e => set('verba_midia_sugerida', e.target.value)} disabled=${travada} /></div>
        </div>
        <div class="campo"><label for="pl">Link da apresentação visual</label><input id="pl" value=${f.link_apresentacao} onInput=${e => set('link_apresentacao', e.target.value)} placeholder="https://…" disabled=${travada} /></div>
        <div class="campo"><label for="po">Observações (aparecem para o cliente)</label><textarea id="po" value=${f.observacoes} onInput=${e => set('observacoes', e.target.value)} disabled=${travada}></textarea></div>
      </section>
      <section class="card"><h2>2. Serviços</h2>
        ${itens.map((x, i) => html`<div class="item">
          <input type="checkbox" aria-label=${'Incluir ' + x.descricao} checked=${x.sel} onChange=${e => setItem(i, 'sel', e.target.checked)} disabled=${travada} />
          <div class="txt"><input aria-label="Descrição" value=${x.descricao} onInput=${e => setItem(i, 'descricao', e.target.value)} disabled=${travada} /><span class="sub">${x.tipo_cobranca === 'unico' ? 'Pagamento único' : 'Mensal'}</span></div>
          <input aria-label="Valor" type="number" step="0.01" style="max-width:130px" value=${x.preco_unitario} onInput=${e => setItem(i, 'preco_unitario', e.target.value)} disabled=${travada} />
        </div>`)}
        ${!travada && html`<div class="acoes" style="margin-top:12px"><button class="btn pq" onClick=${() => setItens(l => [...l, { servico_id: null, descricao: 'Serviço avulso', tipo_cobranca: 'unico', preco_unitario: 0, sel: true }])}>+ Item avulso (único)</button><button class="btn pq" onClick=${() => setItens(l => [...l, { servico_id: null, descricao: 'Serviço avulso', tipo_cobranca: 'mensal', preco_unitario: 0, sel: true }])}>+ Item avulso (mensal)</button></div>`}
      </section>
    </div><div class="c1">
      <section class="card"><h2>Resumo</h2><div class="lista"><div><span>Pagamento único</span><span class="total">${brl(totU)}</span></div><div><span>Mensal</span><span class="total">${brl(totM)}</span></div></div></section>
      ${prop && html`<section class="card"><h2>Envio e acompanhamento</h2>
        <div class="lista"><div><span>Status</span><${PillDe} mapa=${ST_PROP} v=${prop.status} /></div><div><span>Visualizações</span><b>${prop.visualizacoes}</b></div>${prop.aceita_em && html`<div><span>Aceita em</span><b>${dataHora(prop.aceita_em)}</b></div>`}</div>
        <div class="acoes" style="margin-top:14px">
          ${prop.status === 'rascunho' && html`<button class="btn pri" onClick=${() => status('enviada', { enviada_em: new Date().toISOString() })}>Marcar como enviada</button>`}
          ${prop.status !== 'rascunho' && html`<button class="btn" onClick=${() => copiar(linkPublico(prop.token_publico))}>Copiar link do cliente</button><a class="btn" href=${'#/p/' + prop.token_publico} target="_blank" rel="noopener">Ver como cliente</a>`}
          ${['enviada', 'visualizada'].includes(prop.status) && html`<button class="btn" onClick=${() => status('aceita', { aceita_em: new Date().toISOString() })}>Marcar como aceita</button><button class="btn" onClick=${() => status('recusada')}>Recusada</button>`}
          ${prop.status === 'aceita' && !temContrato && html`<button class="btn pri" onClick=${gerarContrato}>Gerar contrato</button>`}
          ${prop.status === 'aceita' && temContrato && html`<a class="btn" href="#/contratos">Ver contrato</a>`}
        </div>
        ${prop.status !== 'rascunho' && html`<p class="sub" style="margin:12px 0 0">Ao abrir o link, o cliente vê a proposta e pode aceitar online. O aceite move o card no CRM para Fechado.</p>`}
      </section>`}
    </div></div>`;
}

function PropostaPublica({ token }) {
  const [p, setP] = useState(undefined); const [aceitando, setAceitando] = useState(false); const feito = useRef(false);
  useEffect(() => { if (feito.current) return; feito.current = true; sb.rpc('ver_proposta_publica', { p_token: token }).then(r => setP(r.data || null)); }, []);
  if (p === undefined) return html`<${Carregando} />`;
  if (!p) return html`<main class="entrada"><div class="caixa"><${Logo} escuro /><h1>Proposta indisponível</h1><p class="sub">Este link expirou ou não existe. Fale com a Agência Baraúna.</p></div></main>`;
  const aceitar = async () => {
    if (!confirm('Confirmar o aceite desta proposta?')) return;
    setAceitando(true);
    const r = await sb.rpc('aceitar_proposta_publica', { p_token: token });
    setAceitando(false);
    if (r.data) { setP({ ...p, status: 'aceita' }); toast('Proposta aceita! Em breve entraremos em contato.'); } else toast('Não foi possível aceitar. A proposta pode estar vencida.', 'erro');
  };
  const un = p.itens.filter(i => i.tipo_cobranca === 'unico'), me = p.itens.filter(i => i.tipo_cobranca === 'mensal');
  const bloco = (t, l) => l.length ? html`<section class="card"><h2>${t}</h2><div class="lista">${l.map(i => html`<div><span>${i.descricao}</span><b>${brl(i.preco_unitario * i.quantidade)}</b></div>`)}</div></section>` : null;
  return html`<div class="publica">
    <header class="capa"><${Logo} /><span class="eyebrow">PROPOSTA COMERCIAL · ${p.cliente}</span><h1>${p.titulo}</h1>
      ${p.link_apresentacao && html`<a class="btn pri" style="align-self:flex-start" href=${p.link_apresentacao} target="_blank" rel="noopener">Ver apresentação completa</a>`}</header>
    ${bloco('Implantação (pagamento único)', un)}${bloco('Mensalidade', me)}
    <section class="card"><div class="lista">
      ${p.total_unico > 0 && html`<div><span>Total único</span><span class="total">${brl(p.total_unico)}</span></div>`}
      ${p.total_mensal > 0 && html`<div><span>Total mensal</span><span class="total">${brl(p.total_mensal)}/mês</span></div>`}
      ${p.verba_midia_sugerida && html`<div><span>Verba de mídia sugerida (paga direto à plataforma)</span><b>${brl(p.verba_midia_sugerida)}</b></div>`}
      ${p.validade_em && html`<div><span>Válida até</span><b>${dataBR(p.validade_em)}</b></div>`}
    </div></section>
    ${p.status === 'aceita' ? html`<section class="card" style="border-color:#10D885"><h2>Proposta aceita</h2><p class="sub" style="margin:6px 0 0">Obrigado! A Agência Baraúna vai enviar o contrato e os próximos passos.</p></section>`
      : html`<div class="acoes"><button class="btn pri" onClick=${aceitar} disabled=${aceitando}>${aceitando ? 'Enviando…' : 'Aceitar proposta'}</button><span class="sub">Dúvidas? (11) 97239-1687 · contato@agenciabarauna.com.br</span></div>`}
  </div>`;
}

// ---------- contratos
function Contratos({ perfil }) {
  const [l, setL] = useState(null); const [m, setM] = useState(null); const [ed, setEd] = useState(null); const [ver, setVer] = useState(null); const clientes = useLista('clientes');
  const carregar = () => sb.from('contratos').select('*, clientes(nome_empresa), propostas(titulo)').order('criado_em', { ascending: false }).then(r => setL(r.data || []));
  useEffect(() => { carregar(); }, []);
  const salvar = async v => {
    const d = { cliente_id: v.cliente_id, status: v.status, valor_unico: num(v.valor_unico) || 0, valor_mensal: num(v.valor_mensal) || 0, duracao_meses: num(v.duracao_meses), inicio_em: v.inicio_em || null, fim_em: v.fim_em || null, documento_url: v.documento_url || null, assinatura_id: v.assinatura_id || null };
    if (v.status === 'assinado') { d.assinado_cliente_em = m.assinado_cliente_em || new Date().toISOString(); d.assinado_agencia_em = m.assinado_agencia_em || new Date().toISOString(); }
    const r = m.id ? await sb.from('contratos').update(d).eq('id', m.id) : await sb.from('contratos').insert(d);
    if (!ok(r, 'Contrato salvo')) return false; carregar();
  };
  if (!l) return html`<${Carregando} />`;
  const campos = [{ n: 'cliente_id', l: 'Cliente', tipo: 'sel', obrig: true, op: opClientes(clientes) }, { n: 'status', l: 'Status', tipo: 'sel', vazio: false, op: opts(ST_CONT) },
    { n: 'valor_unico', l: 'Valor único (R$)', tipo: 'number' }, { n: 'valor_mensal', l: 'Valor mensal (R$)', tipo: 'number' }, { n: 'duracao_meses', l: 'Duração (meses)', tipo: 'number' },
    { n: 'inicio_em', l: 'Início', tipo: 'date' }, { n: 'fim_em', l: 'Fim', tipo: 'date' }, { n: 'documento_url', l: 'Link do documento', ph: 'Link do PDF ou da assinatura eletrônica' }, { n: 'assinatura_id', l: 'ID na plataforma de assinatura' }];
  return html`<${Topo} titulo="Contratos" sub="Gere o contrato com os dados da proposta e do cliente, envie para assinatura e assine pelo próprio painel."><button class="btn pri" onClick=${() => setM({ status: 'rascunho' })}>Novo contrato</button><//>
    <section class="card tabela"><table><thead><tr><th>Cliente</th><th>Origem</th><th>Valores</th><th>Status</th><th>Vigência</th><th></th></tr></thead><tbody>
    ${l.length ? l.map(c => html`<tr><td><b>${c.clientes?.nome_empresa}</b></td><td>${c.propostas?.titulo || 'Manual'}</td><td>${c.valor_unico > 0 ? brl(c.valor_unico) + ' + ' : ''}${brl(c.valor_mensal)}/mês</td>
      <td><${PillDe} mapa=${ST_CONT} v=${c.status} /></td><td>${c.inicio_em ? dataBR(c.inicio_em) + (c.fim_em ? ' a ' + dataBR(c.fim_em) : '') : '—'}</td>
      <td><div class="acoes">${c.status === 'rascunho' && html`<button class="btn pq pri" onClick=${() => setEd(c)}>${c.conteudo ? 'Editar contrato' : 'Gerar contrato'}</button>`}${c.conteudo && c.status !== 'rascunho' && html`<button class="btn pq ${c.status === 'aguardando_assinatura' && !c.assinado_agencia_em ? 'pri' : ''}" onClick=${() => setVer(c)}>${c.status === 'aguardando_assinatura' && !c.assinado_agencia_em ? 'Ver e assinar' : 'Ver documento'}</button>`}<button class="btn pq" onClick=${() => setM(c)}>Dados</button>${c.documento_url && html`<a class="btn pq" href=${c.documento_url} target="_blank" rel="noopener">Arquivo</a>`}</div>
      ${c.status === 'aguardando_assinatura' && html`<div class="sub" style="margin-top:4px">Cliente: ${c.assinado_cliente_em ? '✓ assinou' : 'pendente'} · Agência: ${c.assinado_agencia_em ? '✓ assinou' : 'pendente'}</div>`}</td></tr>`) : html`<tr><td colspan="6" class="vazio">Nenhum contrato.</td></tr>`}
    </tbody></table></section>
    ${ed && html`<${EditorContrato} k=${ed} onFechar=${() => setEd(null)} onOk=${carregar} />`}
    ${ver && html`<${Modal} titulo=${'Contrato – ' + ver.clientes?.nome_empresa} onFechar=${() => setVer(null)}><${VerContrato} k=${ver} perfil=${perfil} onOk=${carregar} /><//>`}
    ${m && html`<${FormModal} titulo=${m.id ? 'Editar contrato' : 'Novo contrato'} campos=${campos} inicial=${m} onSalvar=${salvar} onFechar=${() => setM(null)} />`}`;
}


function VerAcesso({ id, onFechar }) {
  const [c, setC] = useState(null); const [ver, setVer] = useState(false);
  useEffect(() => { sb.rpc('ver_credencial', { p_id: id }).then(r => { if (r.error) { toast(r.error.message, 'erro'); onFechar(); } else setC(r.data); }); }, []);
  if (!c) return null;
  return html`<${Modal} titulo=${'Acesso – ' + c.servico} onFechar=${onFechar}>
    <div class="lista">
      <div><span>Login</span><span class="acoes"><b>${c.login || '—'}</b>${c.login && html`<button class="btn pq" onClick=${() => copiar(c.login)}>Copiar</button>`}</span></div>
      <div><span>Senha</span><span class="acoes"><b style="font-family:monospace">${c.senha ? (ver ? c.senha : '••••••••••') : '—'}</b>${c.senha && html`<button class="btn pq" onClick=${() => setVer(!ver)}>${ver ? 'Ocultar' : 'Mostrar'}</button><button class="btn pq" onClick=${() => copiar(c.senha)}>Copiar</button>`}</span></div>
      ${c.observacao && html`<div><span>Observação</span><span>${c.observacao}</span></div>`}
    </div>
    <p class="sub" style="margin:0">Esta visualização fica registrada no histórico de acessos.</p><//>`;
}

// ---------- primeiros passos (equipe)
const TIPOS_RESP = [['texto', 'Texto'], ['data', 'Data'], ['escolha', 'Escolha'], ['confirmacao', 'Confirmação'], ['arquivo', 'Arquivo'], ['acesso_credencial', 'Acesso com login e senha'], ['acesso_admin', 'Acesso como administrador'], ['dominio', 'Domínio']];
const mostraResp = i => !i.resposta ? null : i.resposta.startsWith('arquivo:') ? html`<button class="lnk" onClick=${() => abrirArquivo(i.resposta.slice(8))}>Abrir arquivo enviado (${i.resposta.split('-').slice(1).join('-') || 'arquivo'})</button>` : /^https?:\/\//.test(i.resposta) ? html`<a href=${i.resposta} target="_blank" rel="noopener">${i.resposta}</a>` : i.tipo_resposta === 'data' ? dataBR(i.resposta) : i.resposta;
function PrimeirosPassos() {
  const clientes = useLista('clientes', 'id,nome_empresa,status');
  const [cid, setCid] = useState(''); const [itens, setItens] = useState(null); const [m, setM] = useState(null); const [creds, setCreds] = useState([]); const [verC, setVerC] = useState(null); const [novoC, setNovoC] = useState(false);
  useEffect(() => { if (!cid && clientes.length) { sb.from('onboarding_progresso').select('cliente_id').then(r => setCid(r.data?.[0]?.cliente_id || clientes[0].id)); } }, [clientes]);
  const carregar = () => { if (!cid) return; sb.from('onboarding_itens').select('*').eq('cliente_id', cid).order('ordem').then(r => setItens(r.data || [])); sb.from('credenciais').select('id,onboarding_item_id,servico,login,observacao,atualizado_em').eq('cliente_id', cid).order('servico').then(r => setCreds(r.data || [])); };
  const salvarCred = async v => { if (!ok(await sb.rpc('salvar_credencial', { p_cliente: cid, p_item: null, p_servico: v.servico, p_login: v.login || '', p_senha: v.senha || '', p_obs: v.observacao || '' }), 'Acesso guardado')) return false; carregar(); };
  useEffect(() => { setItens(null); carregar(); }, [cid]);
  const alternar = async i => { if (ok(await sb.from('onboarding_itens').update({ concluido: !i.concluido }).eq('id', i.id))) carregar(); };
  const etapa = async (i, v) => { if (ok(await sb.from('onboarding_itens').update({ concluido: v === 'feito', em_andamento: v === 'andamento' }).eq('id', i.id), 'Etapa atualizada')) carregar(); };
  const aplicarPadrao = async () => {
    const { data: mod } = await sb.from('onboarding_modelo').select('*').eq('ativo', true).order('ordem');
    const r = await sb.from('onboarding_itens').insert((mod || []).map(x => ({ cliente_id: cid, modelo_id: x.id, categoria: x.categoria, titulo: x.titulo, instrucoes: x.instrucoes, responsavel: x.responsavel, tipo_resposta: x.tipo_resposta, opcoes: x.opcoes, obrigatorio: x.obrigatorio, ordem: x.ordem })));
    if (ok(r, 'Checklist padrão aplicado')) carregar();
  };
  const salvar = async v => {
    const d = { categoria: v.categoria, titulo: v.titulo, instrucoes: v.instrucoes || null, responsavel: v.responsavel, tipo_resposta: v.tipo_resposta, resposta: v.resposta || null, concluido: !!v.concluido, opcoes: v.opcoes_txt ? v.opcoes_txt.split(',').map(s => s.trim()).filter(Boolean) : null };
    const r = m.id ? await sb.from('onboarding_itens').update(d).eq('id', m.id) : await sb.from('onboarding_itens').insert({ ...d, cliente_id: cid, ordem: 999 });
    if (!ok(r, 'Item salvo')) return false; carregar();
  };
  const cats = itens ? [...new Set(itens.map(i => i.categoria))] : [];
  const feitos = itens ? itens.filter(i => i.concluido).length : 0;
  return html`<${Topo} titulo="Primeiros passos" sub="Parte do cliente (preenchida no portal) e estruturação da agência. O andamento das etapas da agência aparece para o cliente.">
      <label for="ppc" class="sub">Cliente</label><select id="ppc" style="width:auto" value=${cid} onChange=${e => setCid(e.target.value)}>${clientes.map(c => html`<option value=${c.id}>${c.nome_empresa}</option>`)}</select>
      ${cid && html`<button class="btn pri" onClick=${() => setM({ categoria: 'Outros', responsavel: 'cliente', tipo_resposta: 'texto' })}>Adicionar item</button>`}<//>
    ${!itens ? html`<${Carregando} />` : !itens.length ? html`<section class="card"><h2>Sem checklist</h2><p class="sub">Este cliente ainda não tem primeiros passos. Eles são criados sozinhos quando a oportunidade vai para Fechado, ou você pode aplicar agora.</p><button class="btn pri" onClick=${aplicarPadrao}>Aplicar checklist padrão</button></section>` : html`
      <section class="card"><div style="display:flex;justify-content:space-between;align-items:center;gap:8px;margin-bottom:6px"><h2 style="margin:0">🔒 Cofre de acessos</h2><button class="btn pq" onClick=${() => setNovoC(true)}>Guardar acesso</button></div>
        ${creds.length ? html`<div class="lista">${creds.map(c => html`<div><div><b>${c.servico}</b><div class="sub">Login: ${c.login || '—'}${c.observacao ? ' · ' + c.observacao : ''}</div></div><button class="btn pq pri" onClick=${() => setVerC(c.id)}>Ver acesso</button></div>`)}</div>` : html`<p class="vazio">Nenhum acesso guardado. Os logins e senhas que o cliente enviar pelo portal aparecem aqui.</p>`}</section>
      <section class="card"><div style="display:flex;justify-content:space-between;margin-bottom:8px"><b>Progresso</b><span>${feitos} de ${itens.length}</span></div><div class="barra"><i style=${'width:' + Math.round(feitos / itens.length * 100) + '%'}></i></div></section>
      ${cats.map(c => html`<section class="card"><h2>${c}</h2>${itens.filter(i => i.categoria === c).map(i => html`<div class="item">
        ${i.responsavel === 'agencia' ? html`<select aria-label=${'Andamento: ' + i.titulo} style="width:auto;padding:6px 8px;font-size:13px" value=${i.concluido ? 'feito' : i.em_andamento ? 'andamento' : 'fila'} onChange=${e => etapa(i, e.target.value)}><option value="fila">Na fila</option><option value="andamento">Em andamento</option><option value="feito">Concluído</option></select>` : html`<input type="checkbox" aria-label=${'Concluído: ' + i.titulo} checked=${i.concluido} onChange=${() => alternar(i)} />`}
        <div class="txt"><b class=${i.concluido ? 'feito' : ''}>${i.titulo}</b>${i.instrucoes && html`<span class="sub">${i.instrucoes}</span>`}
          ${i.resposta && html`<span style="background:#F2FCF7;border-radius:8px;padding:6px 10px;font-size:14px;white-space:pre-wrap">${mostraResp(i)}</span>`}
          ${creds.find(c => c.onboarding_item_id === i.id) && html`<div><button class="btn pq pri" onClick=${() => setVerC(creds.find(c => c.onboarding_item_id === i.id).id)}>Ver login e senha</button></div>`}
          ${i.concluido_em && html`<span class="sub">Concluído em ${dataHora(i.concluido_em)}</span>`}</div>
        <div class="acoes"><${Pill} k=${i.responsavel === 'cliente' ? 'info' : 'neu'}>${i.responsavel === 'cliente' ? 'Cliente' : 'Agência'}<//><button class="btn pq" onClick=${() => setM({ ...i, opcoes_txt: (i.opcoes || []).join(', ') })}>Editar</button></div>
      </div>`)}</section>`)}`}
    ${verC && html`<${VerAcesso} id=${verC} onFechar=${() => setVerC(null)} />`}
    ${novoC && html`<${FormModal} titulo="Guardar acesso" onSalvar=${salvarCred} onFechar=${() => setNovoC(false)} campos=${[{ n: 'servico', l: 'Serviço', obrig: true, ph: 'Ex.: Hospedagem, Instagram' }, { n: 'login', l: 'Login' }, { n: 'senha', l: 'Senha', tipo: 'password' }, { n: 'observacao', l: 'Observação' }]} />`}
    ${m && html`<${FormModal} titulo=${m.id ? 'Editar item' : 'Novo item'} inicial=${m} onSalvar=${salvar} onFechar=${() => setM(null)} campos=${[
      { n: 'categoria', l: 'Categoria', obrig: true }, { n: 'titulo', l: 'Título', obrig: true }, { n: 'instrucoes', l: 'Instruções para o cliente', tipo: 'area' },
      { n: 'responsavel', l: 'Responsável', tipo: 'sel', vazio: false, op: [['cliente', 'Cliente'], ['agencia', 'Agência']] }, { n: 'tipo_resposta', l: 'Tipo de resposta', tipo: 'sel', vazio: false, op: TIPOS_RESP },
      { n: 'opcoes_txt', l: 'Opções (para "Escolha", separadas por vírgula)' }, { n: 'resposta', l: 'Resposta', tipo: 'area' }, { n: 'concluido', l: 'Concluído', tipo: 'bool' }]} />`}`;
}

// ---------- cobranças
function Cobrancas() {
  const [aba, setAba] = useState('cob'); const [per, setPer] = useState('prox'); const [cob, setCob] = useState(null); const [ass, setAss] = useState([]); const [m, setM] = useState(null);
  const clientes = useLista('clientes');
  const carregar = () => Promise.all([sb.from('cobrancas').select('*, clientes(nome_empresa,canal_cobranca)').order('vencimento', { ascending: true }), sb.from('assinaturas').select('*, clientes(nome_empresa)').order('criado_em', { ascending: false })])
    .then(([a, b]) => { setCob(a.data || []); setAss(b.data || []); });
  useEffect(() => { carregar(); }, []);
  const pagar = async c => { if (ok(await sb.from('cobrancas').update({ status: 'paga', pago_em: new Date().toISOString(), valor_pago: c.valor }).eq('id', c.id), 'Pagamento registrado')) carregar(); };
  const salvar = async v => {
    const tab = m.tipo === 'ass' ? 'assinaturas' : 'cobrancas';
    const d = m.tipo === 'ass'
      ? { cliente_id: v.cliente_id, descricao: v.descricao, valor: num(v.valor) || 0, dia_vencimento: num(v.dia_vencimento), forma_pagamento: v.forma_pagamento, status: v.status }
      : { cliente_id: v.cliente_id, descricao: v.descricao, valor: num(v.valor) || 0, vencimento: v.vencimento, forma_pagamento: v.forma_pagamento, status: v.status, link_pagamento: v.link_pagamento || null };
    const r = m.id ? await sb.from(tab).update(d).eq('id', m.id) : await sb.from(tab).insert(d);
    if (!ok(r, 'Salvo')) return false; carregar();
  };
  if (!cob) return html`<${Carregando} />`;
  const h0 = hojeISO();
  const limite60 = (() => { const d = new Date(); d.setDate(d.getDate() + 60); return d.toISOString().slice(0, 10); })();
  const soma = l => l.reduce((s, x) => s + Number(x.valor || 0), 0);
  const mes = h0.slice(0, 7);
  const recebido = cob.filter(c => c.status === 'paga' && (c.pago_em || '').slice(0, 7) === mes);
  const pend = cob.filter(c => c.status === 'pendente' && c.vencimento >= h0 && c.vencimento <= limite60), venc = cob.filter(c => c.status === 'vencida' || (c.status === 'pendente' && c.vencimento < h0));
  const ativas = ass.filter(a => a.status === 'ativa');
  const campos = m && (m.tipo === 'ass'
    ? [{ n: 'cliente_id', l: 'Cliente', tipo: 'sel', obrig: true, op: opClientes(clientes) }, { n: 'descricao', l: 'Descrição', obrig: true }, { n: 'valor', l: 'Valor mensal (R$)', tipo: 'number', obrig: true }, { n: 'dia_vencimento', l: 'Dia de vencimento (1 a 28)', tipo: 'number' }, { n: 'forma_pagamento', l: 'Forma', tipo: 'sel', vazio: false, op: FORMAS }, { n: 'status', l: 'Status', tipo: 'sel', vazio: false, op: [['ativa', 'Ativa'], ['pausada', 'Pausada'], ['cancelada', 'Cancelada']] }]
    : [{ n: 'cliente_id', l: 'Cliente', tipo: 'sel', obrig: true, op: opClientes(clientes) }, { n: 'descricao', l: 'Descrição', obrig: true }, { n: 'valor', l: 'Valor (R$)', tipo: 'number', obrig: true }, { n: 'vencimento', l: 'Vencimento', tipo: 'date', obrig: true }, { n: 'forma_pagamento', l: 'Forma', tipo: 'sel', vazio: false, op: FORMAS }, { n: 'status', l: 'Status', tipo: 'sel', vazio: false, op: opts(ST_COB) }, { n: 'link_pagamento', l: 'Link de pagamento', ph: 'Link do boleto/Pix (Asaas)' }]);
  return html`<${Topo} titulo="Cobranças" sub="Controle de pagamentos e mensalidades.">
      <button class="btn" onClick=${() => setM({ tipo: 'ass', status: 'ativa', forma_pagamento: 'indefinido' })}>Nova assinatura</button>
      <button class="btn pri" onClick=${() => setM({ tipo: 'cob', status: 'pendente', forma_pagamento: 'indefinido' })}>Nova cobrança</button><//>
    <section class="card" style="background:#FFF8E8;border-color:#F2D9A0"><b>Integração com o Asaas pendente.</b> <span class="sub">Clientes marcados como “Asaas” passam a ter cobrança e baixa automáticas quando a chave do Asaas for configurada. Os demais seguem no controle manual.</span></section>
    <div class="tabs" role="group" aria-label="Período"><button class=${per === 'prox' ? 'on' : ''} onClick=${() => setPer('prox')}>Próximos 60 dias</button><button class=${per === 'todas' ? 'on' : ''} onClick=${() => setPer('todas')}>Todas</button></div>
    <div class="grid">
      <${Kpi} label="Recebido no mês" valor=${brl(soma(recebido))} nota=${recebido.length + ' pagamento(s)'} k="ok" />
      <${Kpi} label="A receber (60 dias)" valor=${brl(soma(pend))} nota=${pend.length + ' cobrança(s)'} k="info" />
      <${Kpi} label="Em atraso" valor=${brl(soma(venc))} nota=${venc.length ? venc.length + ' cobrança(s)' : 'Nada em atraso'} k=${venc.length ? 'bad' : 'ok'} />
      <${Kpi} label="Mensalidades ativas" valor=${brl(soma(ativas)) + '/mês'} nota=${ativas.length + ' assinatura(s)'} k="neu" />
    </div>
    <div class="tabs" role="tablist"><button role="tab" aria-selected=${aba === 'cob'} class=${aba === 'cob' ? 'on' : ''} onClick=${() => setAba('cob')}>Cobranças</button><button role="tab" aria-selected=${aba === 'ass'} class=${aba === 'ass' ? 'on' : ''} onClick=${() => setAba('ass')}>Assinaturas mensais</button></div>
    ${aba === 'cob' ? html`<section class="card tabela"><table><thead><tr><th>Cliente</th><th>Descrição</th><th>Vencimento</th><th>Valor</th><th>Canal</th><th>Status</th><th></th></tr></thead><tbody>
      ${cob.filter(c => per === 'todas' || c.status !== 'paga' && c.vencimento <= limite60).length ? cob.filter(c => per === 'todas' || c.status !== 'paga' && c.vencimento <= limite60).map(c => { const atras = c.status === 'pendente' && c.vencimento < h0; return html`<tr><td><b>${c.clientes?.nome_empresa}</b></td><td>${c.descricao}</td><td>${dataBR(c.vencimento)}</td><td>${brl(c.valor)}</td><td>${c.clientes?.canal_cobranca === 'asaas' ? html`<${Pill} k="info">Asaas<//>` : html`<${Pill}>Manual<//>`}</td>
        <td>${atras ? html`<${Pill} k="bad">Vencida<//>` : html`<${PillDe} mapa=${ST_COB} v=${c.status} />`}</td>
        <td><div class="acoes">${c.status !== 'paga' && html`<button class="btn pq" onClick=${() => pagar(c)}>Registrar pagamento</button>`}<button class="btn pq" onClick=${() => setM({ ...c, tipo: 'cob' })}>Editar</button></div></td></tr>`; }) : html`<tr><td colspan="7" class="vazio">Nenhuma cobrança lançada.</td></tr>`}
    </tbody></table></section>` : html`<section class="card tabela"><table><thead><tr><th>Cliente</th><th>Descrição</th><th>Valor</th><th>Vencimento</th><th>Status</th><th></th></tr></thead><tbody>
      ${ass.length ? ass.map(a => html`<tr><td><b>${a.clientes?.nome_empresa}</b></td><td>${a.descricao}</td><td>${brl(a.valor)}/mês</td><td>${a.dia_vencimento ? 'Dia ' + a.dia_vencimento : '—'}</td><td><${Pill} k=${a.status === 'ativa' ? 'ok' : 'neu'}>${a.status}<//></td><td><button class="btn pq" onClick=${() => setM({ ...a, tipo: 'ass' })}>Editar</button></td></tr>`) : html`<tr><td colspan="6" class="vazio">Nenhuma assinatura.</td></tr>`}
    </tbody></table></section>`}
    ${m && html`<${FormModal} titulo=${(m.id ? 'Editar ' : 'Nova ') + (m.tipo === 'ass' ? 'assinatura' : 'cobrança')} campos=${campos} inicial=${m} onSalvar=${salvar} onFechar=${() => setM(null)} />`}`;
}

// ---------- notas fiscais
const ST_NF = { pendente: ['Pendente', 'warn'], anexada: ['Anexada (não enviada)', 'info'], enviada: ['Enviada', 'ok'], erro: ['Erro no envio', 'bad'] };
const compBR = c => { const [a, m] = String(c).split('-'); return m + '/' + a; };
async function enviarNota(n) {
  toast('Enviando a nota…');
  const { data, error } = await sb.functions.invoke('enviar-nf', { body: { nota_id: n.id } });
  let msg = data?.erro;
  if (!msg && error) { try { msg = (await error.context.json()).erro; } catch { msg = error.message; } }
  if (msg) { toast(msg, 'erro'); return false; }
  toast('Nota enviada para ' + data.enviada_para); return true;
}
async function abrirNota(path) {
  const { data, error } = await sb.storage.from('notas').createSignedUrl(path, 300);
  if (error) return toast(error.message, 'erro');
  window.open(data.signedUrl, '_blank', 'noopener');
}
function AnexarNota({ nota, onFechar, onOk }) {
  const [arq, setArq] = useState(null); const [numero, setNumero] = useState(nota.numero || ''); const [enviar, setEnviar] = useState(true); const [s, setS] = useState(false);
  const salvar = async e => {
    e.preventDefault();
    if (!arq) return toast('Escolha o PDF da nota', 'erro');
    if (arq.type !== 'application/pdf') return toast('O arquivo precisa ser PDF', 'erro');
    setS(true);
    const path = nota.cliente_id + '/' + String(nota.competencia).slice(0, 7) + '-' + nota.id + '.pdf';
    const up = await sb.storage.from('notas').upload(path, arq, { contentType: 'application/pdf', upsert: true });
    if (!ok(up)) return setS(false);
    if (!ok(await sb.from('notas_fiscais').update({ arquivo_path: path, numero: numero || null, status: 'anexada', erro: null }).eq('id', nota.id))) return setS(false);
    if (enviar) await enviarNota(nota); else toast('Nota anexada');
    setS(false); onOk(); onFechar();
  };
  return html`<${Modal} titulo=${'Nota fiscal ' + compBR(nota.competencia) + ' – ' + nota.clientes?.nome_empresa} onFechar=${onFechar}>
    <form class="form" onSubmit=${salvar}>
      <p class="sub" style="margin:0">Emita a nota no portal da NFS-e e anexe o PDF aqui. O painel envia por e-mail para ${nota.clientes?.email_financeiro || nota.clientes?.email || 'o e-mail do cliente (cadastre em Clientes)'}, com cópia para a agência.</p>
      <div class="campo"><label for="nfa">PDF da nota *</label><input id="nfa" type="file" accept="application/pdf" onChange=${e => setArq(e.target.files[0] || null)} /></div>
      <div class="campo"><label for="nfn">Número da nota</label><input id="nfn" value=${numero} onInput=${e => setNumero(e.target.value)} /></div>
      <label class="chk"><input type="checkbox" checked=${enviar} onChange=${e => setEnviar(e.target.checked)} />Enviar por e-mail agora</label>
      <div class="acoes"><button class="btn pri" type="submit" disabled=${s}>${s ? 'Enviando…' : 'Salvar'}</button><button class="btn" type="button" onClick=${onFechar}>Cancelar</button></div>
    </form><//>`;
}
function NotasFiscais() {
  const [l, setL] = useState(null); const [filtro, setFiltro] = useState('abertas'); const [anexar, setAnexar] = useState(null);
  const carregar = () => sb.from('notas_fiscais').select('*, clientes(nome_empresa,email,email_financeiro)').order('competencia').then(r => setL(r.data || []));
  useEffect(() => { carregar(); }, []);
  if (!l) return html`<${Carregando} />`;
  const mesAtual = hojeISO().slice(0, 7) + '-01';
  const vis = l.filter(n => filtro === 'todas' ? true : filtro === 'enviadas' ? n.status === 'enviada' : n.status !== 'enviada' && n.competencia <= mesAtual);
  const pendMes = l.filter(n => n.competencia === mesAtual && n.status !== 'enviada').length;
  return html`<${Topo} titulo="Notas fiscais" sub="Emita a NFS-e, anexe o PDF e o painel envia o e-mail para o cliente automaticamente." />
    <div class="grid"><${Kpi} label="A emitir neste mês" valor=${pendMes} nota=${pendMes ? 'Pendente' : 'Tudo enviado'} k=${pendMes ? 'warn' : 'ok'} /><${Kpi} label="Enviadas" valor=${l.filter(n => n.status === 'enviada').length} nota="No total" k="ok" /></div>
    <div class="tabs" role="group" aria-label="Filtro"><button class=${filtro === 'abertas' ? 'on' : ''} onClick=${() => setFiltro('abertas')}>A emitir até este mês</button><button class=${filtro === 'enviadas' ? 'on' : ''} onClick=${() => setFiltro('enviadas')}>Enviadas</button><button class=${filtro === 'todas' ? 'on' : ''} onClick=${() => setFiltro('todas')}>Todas</button></div>
    <section class="card tabela"><table><thead><tr><th>Cliente</th><th>Competência</th><th>Valor</th><th>Nº</th><th>Status</th><th></th></tr></thead><tbody>
    ${vis.length ? vis.map(n => html`<tr><td><b>${n.clientes?.nome_empresa}</b><div class="sub">${n.clientes?.email_financeiro || n.clientes?.email || 'Sem e-mail cadastrado'}</div></td><td>${compBR(n.competencia)}</td><td>${brl(n.valor)}</td><td>${n.numero || '—'}</td>
      <td><${PillDe} mapa=${ST_NF} v=${n.status} />${n.erro && html`<div class="sub" style="color:#A12A1F;max-width:260px;white-space:normal">${n.erro}</div>`}${n.enviada_em && html`<div class="sub">${dataHora(n.enviada_em)}</div>`}</td>
      <td><div class="acoes"><button class="btn pq ${n.arquivo_path ? '' : 'pri'}" onClick=${() => setAnexar(n)}>${n.arquivo_path ? 'Trocar PDF' : 'Anexar NF'}</button>${n.arquivo_path && html`<button class="btn pq" onClick=${() => abrirNota(n.arquivo_path)}>Ver</button><button class="btn pq" onClick=${async () => { await enviarNota(n); carregar(); }}>${n.status === 'enviada' ? 'Reenviar' : 'Enviar'}</button>`}</div></td></tr>`) : html`<tr><td colspan="6" class="vazio">Nenhuma nota neste filtro.</td></tr>`}
    </tbody></table></section>
    ${anexar && html`<${AnexarNota} nota=${anexar} onFechar=${() => setAnexar(null)} onOk=${carregar} />`}`;
}

// ---------- solicitações (tickets)
function Conversa({ sol, agencia, onMudou }) {
  const [msgs, setMsgs] = useState(null); const [txt, setTxt] = useState(''); const [s, setS] = useState(false);
  const carregar = () => sb.from('solicitacao_mensagens').select('*').eq('solicitacao_id', sol.id).order('criado_em').then(r => setMsgs(r.data || []));
  useEffect(() => { carregar(); }, [sol.id]);
  const enviar = async e => {
    e.preventDefault(); if (!txt.trim()) return;
    setS(true); const r = await sb.from('solicitacao_mensagens').insert({ solicitacao_id: sol.id, texto: txt.trim() }); setS(false);
    if (ok(r)) { setTxt(''); carregar(); onMudou && onMudou(); }
  };
  return html`<div class="form">
    ${sol.descricao && html`<div class="card" style="background:#F7F9F7"><span class="sub">Pedido</span><p style="margin:4px 0 0;white-space:pre-wrap">${sol.descricao}</p>${sol.prazo_desejado && html`<p class="sub" style="margin:6px 0 0">Prazo desejado: ${dataBR(sol.prazo_desejado)}</p>`}${sol.anexo_path && html`<button class="lnk" style="margin-top:6px" onClick=${() => abrirArquivo(sol.anexo_path)}>Abrir anexo</button>`}</div>`}
    ${!msgs ? html`<${Carregando} />` : msgs.map(m => html`<div style=${'align-self:' + (m.autor_agencia === agencia ? 'flex-end' : 'flex-start') + ';max-width:85%;background:' + (m.autor_agencia ? '#E9F8F0' : '#EEF2F7') + ';border-radius:12px;padding:10px 12px'}><span class="sub">${m.autor_agencia ? 'Agência Baraúna' : 'Cliente'} · ${dataHora(m.criado_em)}</span><p style="margin:4px 0 0;white-space:pre-wrap">${m.texto}</p></div>`)}
    <form class="form" style="gap:8px" onSubmit=${enviar}><label for=${'msg' + sol.id} class="sub">Escrever mensagem</label><textarea id=${'msg' + sol.id} value=${txt} onInput=${e => setTxt(e.target.value)}></textarea><div><button class="btn pri pq" type="submit" disabled=${s}>${s ? 'Enviando…' : 'Enviar'}</button></div></form>
  </div>`;
}
function Solicitacoes() {
  const [l, setL] = useState(null); const [f, setF] = useState('abertas'); const [ab, setAb] = useState(null); const [nova, setNova] = useState(false);
  const clientes = useLista('clientes');
  const carregar = () => sb.from('solicitacoes').select('*, clientes(nome_empresa)').order('criado_em', { ascending: false }).then(r => setL(r.data || []));
  useEffect(() => { carregar(); }, []);
  const status = async (x, st) => { if (ok(await sb.from('solicitacoes').update({ status: st }).eq('id', x.id), 'Status atualizado')) { carregar(); setAb({ ...x, status: st }); } };
  const criar = async v => { if (!ok(await sb.from('solicitacoes').insert({ cliente_id: v.cliente_id, tipo: v.tipo, titulo: v.titulo, descricao: v.descricao || null, prazo_desejado: v.prazo_desejado || null }), 'Solicitação criada')) return false; carregar(); };
  if (!l) return html`<${Carregando} />`;
  const vis = l.filter(x => f === 'todas' || (f === 'abertas' ? ['aberta', 'em_andamento', 'aguardando_cliente'].includes(x.status) : ['concluida', 'cancelada'].includes(x.status)));
  return html`<${Topo} titulo="Solicitações" sub="Pedidos dos clientes pelo portal: campanhas, artes, posts, ajustes no site."><button class="btn pri" onClick=${() => setNova(true)}>Nova solicitação</button><//>
    <div class="tabs" role="group" aria-label="Filtro">${[['abertas', 'Em aberto'], ['fechadas', 'Concluídas'], ['todas', 'Todas']].map(([k, t]) => html`<button class=${f === k ? 'on' : ''} onClick=${() => setF(k)}>${t}</button>`)}</div>
    <section class="card tabela"><table><thead><tr><th>Cliente</th><th>Pedido</th><th>Tipo</th><th>Aberta em</th><th>Prazo</th><th>Status</th><th></th></tr></thead><tbody>
    ${vis.length ? vis.map(x => html`<tr><td><b>${x.clientes?.nome_empresa}</b></td><td>${x.titulo}</td><td>${(TIPOS_SOL.find(t => t[0] === x.tipo) || [])[1]}</td><td>${dataBR(x.criado_em)}</td><td>${x.prazo_desejado ? dataBR(x.prazo_desejado) : '—'}</td><td><${PillDe} mapa=${ST_SOL_EQ} v=${x.status} /></td><td><button class="btn pq" onClick=${() => setAb(x)}>Abrir</button></td></tr>`) : html`<tr><td colspan="7" class="vazio">Nenhuma solicitação neste filtro.</td></tr>`}
    </tbody></table></section>
    ${ab && html`<${Modal} titulo=${ab.clientes?.nome_empresa + ' – ' + ab.titulo} onFechar=${() => setAb(null)}>
      <div class="campo"><label for="sst">Status</label><select id="sst" value=${ab.status} onChange=${e => status(ab, e.target.value)}>${Object.entries(ST_SOL_EQ).map(([k, v]) => html`<option value=${k}>${v[0]}</option>`)}</select><span class="sub">“Aguardando cliente” mostra para ele que a vez é dele.</span></div>
      <${Conversa} sol=${ab} agencia=${true} onMudou=${carregar} /><//>`}
    ${nova && html`<${FormModal} titulo="Nova solicitação" onSalvar=${criar} onFechar=${() => setNova(false)} inicial=${{ tipo: 'arte' }} campos=${[
      { n: 'cliente_id', l: 'Cliente', tipo: 'sel', obrig: true, op: opClientes(clientes) }, { n: 'tipo', l: 'Tipo', tipo: 'sel', vazio: false, op: TIPOS_SOL }, { n: 'titulo', l: 'Título', obrig: true },
      { n: 'descricao', l: 'Detalhes', tipo: 'area' }, { n: 'prazo_desejado', l: 'Prazo', tipo: 'date' }]} />`}`;
}

// ---------- entregas para aprovação
const TIPOS_ENT = [['site', 'Site'], ['social', 'Social media'], ['arte', 'Arte'], ['trafego', 'Tráfego pago'], ['estrategia', 'Estratégia'], ['outro', 'Outro']];
const ST_ENT = { rascunho: ['Rascunho', 'neu'], aguardando_aprovacao: ['Aguardando aprovação', 'warn'], ajuste_solicitado: ['Ajuste solicitado', 'bad'], aprovado: ['Aprovado', 'ok'] };
const URL_PREVIAS = SB_URL + '/storage/v1/object/public/previas/';
const linkPrevia = e => e.formato === 'link' ? e.url_externa : e.formato === 'html' ? location.origin + '/preview.html?f=' + encodeURIComponent(e.arquivo_path).replace(/%2F/g, '/') : URL_PREVIAS + e.arquivo_path;
function Previa({ e, altura = '75vh' }) {
  if (e.formato === 'plano') return html`<${PlanoAprovacao} e=${e} agencia=${true} />`;
  const url = linkPrevia(e);
  if (!url) return html`<p class="vazio">Sem arquivo.</p>`;
  if (e.formato === 'imagem') return html`<img src=${url} alt=${'Prévia: ' + e.titulo} style="width:100%;border-radius:12px;border:1px solid #DCE3DF" />`;
  return html`<div style=${'border:1px solid #DCE3DF;border-radius:12px;overflow:hidden;height:' + altura}><iframe src=${url} title=${'Prévia: ' + e.titulo} style="width:100%;height:100%;border:0"></iframe></div>`;
}
function ComentariosEntrega({ e, agencia, onMudou }) {
  const [l, setL] = useState(null); const [t, setT] = useState(''); const [s, setS] = useState(false);
  const carregar = () => sb.from('entrega_comentarios').select('*').eq('entrega_id', e.id).order('criado_em').then(r => setL(r.data || []));
  useEffect(() => { carregar(); }, [e.id]);
  const enviar = async ev => { ev.preventDefault(); if (!t.trim()) return; setS(true); const r = await sb.from('entrega_comentarios').insert({ entrega_id: e.id, texto: t.trim() }); setS(false); if (ok(r)) { setT(''); carregar(); onMudou && onMudou(); } };
  return html`<div class="form">${!l ? html`<${Carregando} />` : !l.length ? html`<p class="vazio">Nenhum comentário ainda.</p>` : l.map(m => html`<div style=${'align-self:' + (m.autor_agencia === agencia ? 'flex-end' : 'flex-start') + ';max-width:85%;background:' + (m.autor_agencia ? '#E9F8F0' : '#EEF2F7') + ';border-radius:12px;padding:10px 12px'}><span class="sub">${m.autor_agencia ? 'Agência Baraúna' : 'Cliente'} · v${m.versao} · ${dataHora(m.criado_em)}</span><p style="margin:4px 0 0;white-space:pre-wrap">${m.texto}</p></div>`)}
    <form class="form" style="gap:8px" onSubmit=${enviar}><label class="sub" for=${'ce' + e.id}>${agencia ? 'Responder' : 'Comentar ou pedir ajuste'}</label><textarea id=${'ce' + e.id} value=${t} onInput=${x => setT(x.target.value)} placeholder=${agencia ? '' : 'Ex.: trocar a foto do topo; o WhatsApp de vendas é outro…'}></textarea><div><button class="btn pq" type="submit" disabled=${s}>${s ? 'Enviando…' : 'Enviar comentário'}</button></div></form></div>`;
}
function PerguntasEntrega({ e, editavel, onMudou }) {
  const [l, setL] = useState(null); const [v, setV] = useState({}); const [s, setS] = useState(false);
  const carregar = () => sb.from('entrega_perguntas').select('*').eq('entrega_id', e.id).order('ordem').then(r => { setL(r.data || []); setV(Object.fromEntries((r.data || []).map(q => [q.id, q.resposta || '']))); });
  useEffect(() => { carregar(); }, [e.id]);
  if (!l) return html`<${Carregando} />`;
  if (!l.length) return html`<p class="vazio">Nenhuma pergunta nesta entrega.</p>`;
  const salvar = async () => {
    setS(true);
    for (const q of l) if ((v[q.id] || '') !== (q.resposta || '')) { const r = await sb.from('entrega_perguntas').update({ resposta: v[q.id] || null }).eq('id', q.id); if (!ok(r)) { setS(false); return; } }
    setS(false); toast('Respostas salvas, obrigado!'); carregar(); onMudou && onMudou();
  };
  const resp = l.filter(q => q.resposta).length;
  return html`<div class="form"><span class="sub">${resp} de ${l.length} respondidas</span>
    ${l.map(q => html`<div class="campo"><label for=${'q' + q.id}>${q.pergunta}</label>${q.ajuda && html`<span class="sub">${q.ajuda}</span>`}
      ${editavel ? html`<textarea id=${'q' + q.id} style="min-height:64px" value=${v[q.id]} onInput=${x => setV({ ...v, [q.id]: x.target.value })}></textarea>` : html`<div style=${'background:' + (q.resposta ? '#F2FCF7' : '#F7F9F7') + ';border-radius:8px;padding:8px 10px;white-space:pre-wrap'}>${q.resposta || html`<span class="sub">Sem resposta ainda</span>`}</div>`}</div>`)}
    ${editavel && html`<div><button class="btn pri pq" onClick=${salvar} disabled=${s}>${s ? 'Salvando…' : 'Salvar respostas'}</button></div>`}</div>`;
}
const aleatorio = () => Array.from(crypto.getRandomValues(new Uint8Array(10))).map(b => b.toString(16).padStart(2, '0')).join('');
async function subirPrevia(arq) {
  const ext = (arq.name.split('.').pop() || '').toLowerCase();
  const formato = ['html', 'htm'].includes(ext) ? 'html' : ext === 'pdf' ? 'pdf' : ['png', 'jpg', 'jpeg', 'webp', 'svg'].includes(ext) ? 'imagem' : null;
  if (!formato) { toast('Use HTML, PDF ou imagem', 'erro'); return null; }
  const nome = arq.name.normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/[^A-Za-z0-9._-]+/g, '-');
  const path = aleatorio() + '/' + nome;
  const r = await sb.storage.from('previas').upload(path, arq, { contentType: formato === 'html' ? 'text/plain' : arq.type, cacheControl: '60' });
  if (r.error) { toast(r.error.message, 'erro'); return null; }
  return { formato, arquivo_path: path };
}
function NovaEntrega({ clientes, base, onFechar, onOk }) {
  const nova = !base;
  const [f, setF] = useState(base ? { cliente_id: base.cliente_id, tipo: base.tipo, titulo: base.titulo, descricao: base.descricao || '', url: base.url_externa || '', perguntas: '' } : { cliente_id: '', tipo: 'site', titulo: '', descricao: '', url: '', perguntas: '' });
  const [arq, setArq] = useState(null); const [s, setS] = useState(false);
  const salvar = async (ev, rascunho) => {
    ev && ev.preventDefault();
    if (!f.cliente_id || !f.titulo) return toast('Escolha o cliente e dê um título', 'erro');
    if (nova && !arq && !f.url) return toast('Envie o arquivo da prévia ou cole um link', 'erro');
    setS(true);
    let dados = { cliente_id: f.cliente_id, tipo: f.tipo, titulo: f.titulo, descricao: f.descricao || null };
    let novaVersao = false;
    if (arq) { const up = await subirPrevia(arq); if (!up) return setS(false); dados = { ...dados, ...up, url_externa: null }; novaVersao = true; }
    else if (f.url && (nova || f.url !== base.url_externa)) { dados = { ...dados, formato: 'link', url_externa: f.url, arquivo_path: null }; novaVersao = true; }
    let id = base?.id;
    if (nova) { const r = await sb.from('entregas').insert({ ...dados, status: rascunho ? 'rascunho' : 'aguardando_aprovacao' }).select('id').single(); if (!ok(r)) return setS(false); id = r.data.id; }
    else { const nv = novaVersao ? { versao: base.versao + 1, status: 'aguardando_aprovacao' } : {}; if (!ok(await sb.from('entregas').update({ ...dados, ...nv }).eq('id', id))) return setS(false); }
    const qs = f.perguntas.split('\n').map(x => x.trim()).filter(Boolean);
    if (qs.length) { const r = await sb.from('entrega_perguntas').insert(qs.map((q, i) => { const [p, a] = q.split('|'); return { entrega_id: id, pergunta: p.trim(), ajuda: a ? a.trim() : null, ordem: 100 + i }; })); if (!ok(r)) return setS(false); }
    setS(false); toast(nova ? (rascunho ? 'Rascunho salvo' : 'Enviado para o cliente aprovar') : (novaVersao ? 'Nova versão enviada ao cliente' : 'Entrega atualizada')); onOk(); onFechar();
  };
  return html`<${Modal} titulo=${nova ? 'Nova entrega para aprovação' : 'Atualizar entrega'} onFechar=${onFechar}><form class="form" onSubmit=${e => salvar(e, false)}>
    <div class="campo"><label for="ec">Cliente *</label><select id="ec" value=${f.cliente_id} onChange=${e => setF({ ...f, cliente_id: e.target.value })} disabled=${!nova}><option value="">Selecione…</option>${clientes.map(c => html`<option value=${c.id}>${c.nome_empresa}</option>`)}</select></div>
    <div class="campo"><label for="et">Tipo</label><select id="et" value=${f.tipo} onChange=${e => setF({ ...f, tipo: e.target.value })}>${TIPOS_ENT.map(([k, l]) => html`<option value=${k}>${l}</option>`)}</select></div>
    <div class="campo"><label for="eti">Título *</label><input id="eti" value=${f.titulo} onInput=${e => setF({ ...f, titulo: e.target.value })} placeholder="Ex.: Prévia do novo site" /></div>
    <div class="campo"><label for="ed">Mensagem para o cliente</label><textarea id="ed" value=${f.descricao} onInput=${e => setF({ ...f, descricao: e.target.value })}></textarea></div>
    <div class="campo"><label for="ea">${nova ? 'Arquivo da prévia (HTML, PDF ou imagem)' : 'Nova versão do arquivo (opcional)'}</label><input id="ea" type="file" accept=".html,.htm,.pdf,.png,.jpg,.jpeg,.webp,.svg" onChange=${e => setArq(e.target.files[0] || null)} /></div>
    <div class="campo"><label for="eu">Ou link (Canva, Figma, Google Drive)</label><input id="eu" type="url" value=${f.url} onInput=${e => setF({ ...f, url: e.target.value })} placeholder="https://…" /></div>
    <div class="campo"><label for="ep">${nova ? 'Perguntas para o cliente (uma por linha)' : 'Adicionar perguntas (uma por linha)'}</label><textarea id="ep" value=${f.perguntas} onInput=${e => setF({ ...f, perguntas: e.target.value })} placeholder=${'Qual o WhatsApp de vendas?\nQual o horário de atendimento? | Ex.: seg a sex, 8h às 18h'}></textarea><span class="sub">Use “|” para colocar uma dica embaixo da pergunta.</span></div>
    <div class="acoes"><button class="btn pri" type="submit" disabled=${s}>${s ? 'Salvando…' : nova ? 'Enviar para aprovação' : 'Salvar'}</button>${nova && html`<button class="btn" type="button" disabled=${s} onClick=${e => salvar(e, true)}>Salvar como rascunho</button>`}</div>
  </form><//>`;
}
function Entregas() {
  const [l, setL] = useState(null); const [ab, setAb] = useState(null); const [nova, setNova] = useState(null); const [f, setF] = useState('abertas');
  const clientes = useLista('clientes');
  const carregar = () => sb.from('entregas').select('*, clientes(nome_empresa), entrega_perguntas(id,resposta)').order('atualizado_em', { ascending: false }).then(r => { setL(r.data || []); setAb(a => a ? (r.data || []).find(x => x.id === a.id) || null : a); });
  useEffect(() => { carregar(); }, []);
  const status = async (e, st) => { if (ok(await sb.from('entregas').update({ status: st }).eq('id', e.id), 'Status atualizado')) carregar(); };
  if (!l) return html`<${Carregando} />`;
  const vis = l.filter(e => f === 'todas' || (f === 'abertas' ? e.status !== 'aprovado' : e.status === 'aprovado'));
  return html`<${Topo} titulo="Aprovações" sub="Prévias de site, cronogramas, artes e estratégias que o cliente valida, completa e aprova pelo portal."><button class="btn pri" onClick=${() => setNova({})}>Nova entrega</button><//>
    <div class="tabs" role="group" aria-label="Filtro">${[['abertas', 'Em aberto'], ['aprovadas', 'Aprovadas'], ['todas', 'Todas']].map(([k, t]) => html`<button class=${f === k ? 'on' : ''} onClick=${() => setF(k)}>${t}</button>`)}</div>
    <section class="card tabela"><table><thead><tr><th>Cliente</th><th>Entrega</th><th>Tipo</th><th>Versão</th><th>Perguntas</th><th>Status</th><th></th></tr></thead><tbody>
      ${vis.length ? vis.map(e => { const q = e.entrega_perguntas || []; return html`<tr><td><b>${e.clientes?.nome_empresa}</b></td><td>${e.titulo}<div class="sub">${dataHora(e.atualizado_em)}</div></td><td>${(TIPOS_ENT.find(t => t[0] === e.tipo) || [])[1]}</td><td>v${e.versao}</td><td>${q.length ? q.filter(x => x.resposta).length + ' de ' + q.length : '—'}</td><td><${PillDe} mapa=${ST_ENT} v=${e.status} /></td><td><button class="btn pq" onClick=${() => setAb(e)}>Abrir</button></td></tr>`; }) : html`<tr><td colspan="7" class="vazio">Nenhuma entrega neste filtro.</td></tr>`}
    </tbody></table></section>
    ${ab && html`<div class="fundo" onClick=${x => x.target === x.currentTarget && setAb(null)}><div class="modal" style="max-width:1100px" role="dialog" aria-modal="true" aria-label=${ab.titulo}>
      <header style="flex-wrap:wrap;gap:10px"><div><h2>${ab.clientes?.nome_empresa} – ${ab.titulo}</h2><span class="sub">v${ab.versao} · <${PillDe} mapa=${ST_ENT} v=${ab.status} /></span></div><div class="acoes">${ab.formato !== 'plano' && html`<a class="btn pq" href=${linkPrevia(ab)} target="_blank" rel="noopener">Tela cheia</a><button class="btn pq" onClick=${() => setNova(ab)}>Nova versão / editar</button>${ab.status === 'rascunho' && html`<button class="btn pq pri" onClick=${() => status(ab, 'aguardando_aprovacao')}>Enviar ao cliente</button>`}`}<button class="btn pq" onClick=${() => setAb(null)}>Fechar</button></div></header>
      <${Previa} e=${ab} altura="60vh" />
      <div class="cols"><div class="c2"><section class="card"><h2>Comentários e ajustes</h2><${ComentariosEntrega} e=${ab} agencia=${true} /></section></div><div class="c1"><section class="card"><h2>Respostas do cliente</h2><${PerguntasEntrega} e=${ab} editavel=${false} /></section></div></div>
    </div></div>`}
    ${nova && html`<${NovaEntrega} clientes=${clientes} base=${nova.id ? nova : null} onFechar=${() => setNova(null)} onOk=${carregar} />`}`;
}
function PortalAprovacoes({ onMudou }) {
  const [l, setL] = useState(null); const [ab, setAb] = useState(null); const [s, setS] = useState(false);
  const carregar = () => sb.from('entregas').select('*, entrega_perguntas(id,resposta)').order('atualizado_em', { ascending: false }).then(r => { setL(r.data || []); setAb(a => a ? (r.data || []).find(x => x.id === a.id) || null : a); });
  useEffect(() => { carregar(); }, []);
  const decidir = async aprovar => {
    if (!aprovar) {
      const n = await sb.from('entrega_comentarios').select('id', { count: 'exact', head: true }).eq('entrega_id', ab.id).eq('autor_agencia', false).eq('versao', ab.versao);
      const m = ab.formato === 'plano' ? await sb.from('ads_marcacoes').select('id, ads_planos!inner(entrega_id)', { count: 'exact', head: true }).eq('ads_planos.entrega_id', ab.id).eq('autor_agencia', false).eq('versao', ab.versao) : { count: 0 };
      if (!n.count && !m.count) return toast(ab.formato === 'plano' ? 'Use “Comentar / pedir ajuste” nos itens ou escreva nos comentários o que precisa ajustar' : 'Escreva nos comentários o que precisa ajustar', 'erro');
    }
    if (aprovar && !confirm('Confirmar a aprovação desta versão?')) return;
    setS(true); const r = await sb.from('entregas').update({ status: aprovar ? 'aprovado' : 'ajuste_solicitado' }).eq('id', ab.id); setS(false);
    if (ok(r, aprovar ? 'Aprovado! Obrigado.' : 'Pedido de ajuste enviado para a agência')) { carregar(); onMudou(); }
  };
  if (!l) return html`<${Carregando} />`;
  if (ab) { const q = ab.entrega_perguntas || []; return html`<div class="topo"><div><button class="lnk" onClick=${() => setAb(null)}>← Voltar para aprovações</button><h1 style="margin-top:8px">${ab.titulo}</h1><p class="sub">Versão ${ab.versao} · <${PillDe} mapa=${ST_ENT} v=${ab.status} /></p></div>${ab.formato !== 'plano' && html`<a class="btn" href=${linkPrevia(ab)} target="_blank" rel="noopener">Abrir em tela cheia</a>`}</div>
    ${ab.formato === 'plano' ? html`<${PlanoAprovacao} e=${ab} agencia=${false} />` : html`${ab.descricao && html`<section class="card"><p style="margin:0;white-space:pre-wrap">${ab.descricao}</p></section>`}<${Previa} e=${ab} />`}
    <div class="cols"><div class="c2">
      ${q.length > 0 && html`<section class="card"><h2>Informações que faltam</h2><${PerguntasEntrega} e=${ab} editavel=${ab.status !== 'aprovado'} onMudou=${carregar} /></section>`}
      <section class="card"><h2>Comentários e ajustes</h2><${ComentariosEntrega} e=${ab} agencia=${false} /></section></div>
      <div class="c1"><section class="card"><h2>Sua decisão</h2>${ab.status === 'aprovado' ? html`<p style="margin:0;color:#08744A;font-weight:600">Aprovado em ${dataHora(ab.aprovado_em)} ✓</p>` : html`<p class="sub" style="margin:0 0 12px">${ab.formato === 'plano' ? 'Revise o plano, use “Comentar / pedir ajuste” nos itens que quiser mudar e responda as perguntas. Depois, aprove ou peça ajustes.' : 'Navegue pela prévia, responda as perguntas e deixe seus comentários. Depois, aprove ou peça ajustes.'}</p><div class="acoes"><button class="btn pri" disabled=${s} onClick=${() => decidir(true)}>Aprovar</button><button class="btn" disabled=${s} onClick=${() => decidir(false)}>Pedir ajuste</button></div>`}</section></div></div>`; }
  return html`<div><h1>Aprovações</h1><p class="sub">Prévias e materiais para você revisar, completar e aprovar.</p></div>
    <section class="card">${l.length ? html`<div class="lista">${l.map(e => { const q = e.entrega_perguntas || []; const pend = q.filter(x => !x.resposta).length; return html`<div><div><b>${e.titulo}</b><div class="sub">${(TIPOS_ENT.find(t => t[0] === e.tipo) || [])[1]} · versão ${e.versao}${pend ? ' · ' + pend + ' pergunta(s) para responder' : ''}</div></div><div class="acoes"><${PillDe} mapa=${ST_ENT} v=${e.status} /><button class=${'btn pq' + (e.status === 'aguardando_aprovacao' ? ' pri' : '')} onClick=${() => setAb(e)}>Abrir</button></div></div>`; })}</div>` : html`<p class="vazio">Nada para aprovar no momento.</p>`}</section>`;
}

// ---------- contratos: modelo, documento e assinatura
const esc = s => String(s ?? '').replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
const linhas = s => esc(s).replace(/\n/g, '<br>');
async function sha256(t) { const d = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(t)); return Array.from(new Uint8Array(d)).map(b => b.toString(16).padStart(2, '0')).join(''); }
const cpfFmt = c => { const n = String(c || '').replace(/\D/g, ''); return n.length === 11 ? n.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4') : c; };
const cpfMask = c => { const n = String(c || '').replace(/\D/g, ''); return n.length === 11 ? '***.' + n.slice(3, 6) + '.' + n.slice(6, 9) + '-**' : '—'; };

function montarContrato(d, ag) {
  const servicos = (d.servicos || '').split('\n').map(x => x.trim()).filter(Boolean);
  const temUnico = Number(d.valor_unico || 0) > 0;
  let n = 0; const cl = t => `<h3>CLÁUSULA ${++n}ª – ${t}</h3>`;
  return `<h2>CONTRATO DE PRESTAÇÃO DE SERVIÇOS DE MARKETING DIGITAL</h2>
<p>Pelo presente instrumento particular, de um lado:</p>
<p><b>CONTRATANTE:</b> ${esc(d.contratante_razao)}, inscrita no CNPJ sob o nº ${esc(d.contratante_cnpj)}, com sede em ${esc(d.contratante_endereco)}, neste ato representada por ${esc(d.rep_nome)}, CPF nº ${esc(cpfFmt(d.rep_cpf))}, e-mail ${esc(d.rep_email)};</p>
<p><b>CONTRATADA:</b> ${esc(ag.razao_social)}${ag.nome_fantasia ? ', nome fantasia ' + esc(ag.nome_fantasia) : ''}, inscrita no CNPJ sob o nº ${esc(ag.cnpj)}, com sede em ${esc(ag.endereco)}, neste ato representada por ${esc(ag.representante_nome)}, CPF nº ${esc(cpfFmt(ag.representante_cpf))};</p>
<p>têm entre si justo e contratado o seguinte:</p>
${cl('DO OBJETO')}
<p>O presente contrato tem por objeto a prestação, pela CONTRATADA, dos seguintes serviços de marketing digital:</p>
<ul>${servicos.map(s => `<li>${esc(s)}</li>`).join('')}</ul>
<p>O detalhamento do escopo segue a proposta comercial aceita pela CONTRATANTE, que integra este contrato. Serviços fora deste escopo serão orçados à parte.</p>
${cl('DO PRAZO')}
<p>O contrato vigora por ${esc(d.duracao_meses)} meses, contados ${/^\d/.test(String(d.inicio || '')) ? 'a partir de ' + esc(d.inicio) : 'a partir da ' + esc(String(d.inicio || 'data da assinatura').replace(/^(a |da )/, ''))}, renovando-se automaticamente por iguais períodos, salvo manifestação contrária de qualquer das partes com antecedência mínima de 30 (trinta) dias do término.</p>
${cl('DOS VALORES E DO PAGAMENTO')}
<p>Pelos serviços contratados, a CONTRATANTE pagará à CONTRATADA:</p>
<ul>${Number(d.valor_mensal || 0) > 0 ? `<li>mensalidade de ${esc(brl(d.valor_mensal))}, com vencimento todo dia ${esc(d.dia_vencimento)} de cada mês;</li>` : ''}${temUnico ? `<li>valor único de ${esc(brl(d.valor_unico))}, ${esc(d.condicao_unico)};</li>` : ''}</ul>
<p>Os pagamentos serão feitos por ${esc(d.forma_pagamento)}. Em caso de atraso, incidirão multa de 2% (dois por cento) e juros de 1% (um por cento) ao mês, proporcionais aos dias de atraso. Os valores serão reajustados a cada 12 (doze) meses pelo IPCA ou outro índice que o substitua.</p>
${cl('DO INVESTIMENTO EM MÍDIA')}
<p>Os valores investidos em anúncios (Google Ads, Meta Ads e outras plataformas) não estão incluídos nos valores acima e serão pagos pela CONTRATANTE diretamente às plataformas. ${d.verba_midia ? 'O investimento sugerido para o início é de ' + esc(d.verba_midia) + ', podendo ser ajustado de comum acordo.' : ''}</p>
${cl('DAS OBRIGAÇÕES DA CONTRATADA')}
<p>São obrigações da CONTRATADA: executar os serviços com zelo e boa técnica; manter a CONTRATANTE informada sobre o andamento por meio do portal do cliente; submeter materiais à aprovação da CONTRATANTE antes da publicação; apresentar relatórios periódicos dos resultados; e guardar sigilo sobre as informações recebidas.</p>
${cl('DAS OBRIGAÇÕES DA CONTRATANTE')}
<p>São obrigações da CONTRATANTE: fornecer as informações, materiais e acessos necessários à execução dos serviços; analisar e responder às aprovações em até 3 (três) dias úteis; e efetuar os pagamentos nas datas acordadas. Atrasos no envio de informações ou nas aprovações poderão impactar os prazos de entrega, sem responsabilidade da CONTRATADA.</p>
${cl('DAS APROVAÇÕES E COMUNICAÇÕES')}
<p>As aprovações, solicitações e comunicações relativas aos serviços serão feitas preferencialmente pelo portal do cliente da CONTRATADA, que manterá o histórico das interações, sem prejuízo de outros meios combinados entre as partes.</p>
${cl('DA NATUREZA DOS SERVIÇOS')}
<p>Os serviços de marketing digital constituem obrigação de meio. A CONTRATADA se compromete a empregar as melhores práticas, não podendo garantir resultados específicos de vendas, alcance ou posicionamento, que dependem de fatores externos, como mercado, concorrência e regras das plataformas.</p>
${cl('DA PROPRIEDADE INTELECTUAL')}
<p>Após a quitação dos valores correspondentes, os materiais desenvolvidos especificamente para a CONTRATANTE, como textos, artes e páginas, passam a ser de sua propriedade. Perfis, contas de anúncio, domínio e hospedagem permanecem de titularidade da CONTRATANTE.</p>
${cl('DA CONFIDENCIALIDADE E DA PROTEÇÃO DE DADOS')}
<p>As partes manterão sigilo sobre as informações a que tiverem acesso em razão deste contrato e tratarão os dados pessoais envolvidos em conformidade com a Lei nº 13.709/2018 (LGPD). Os acessos e senhas fornecidos pela CONTRATANTE serão armazenados de forma criptografada e utilizados exclusivamente para a execução dos serviços.</p>
${cl('DA RESCISÃO')}
<p>${linhas(d.rescisao)}</p>
${cl('DA ASSINATURA ELETRÔNICA')}
<p>As partes reconhecem como válida e eficaz a assinatura deste contrato por meio eletrônico, realizada no portal da CONTRATADA, nos termos do art. 10, § 2º, da Medida Provisória nº 2.200-2/2001, com registro de data, hora, endereço IP e código de integridade do documento.</p>
${cl('DO FORO')}
<p>Fica eleito o foro da comarca de ${esc(ag.foro || 'Jundiaí/SP')} para dirimir quaisquer questões oriundas deste contrato.</p>
<p>E, por estarem de acordo, as partes assinam eletronicamente o presente instrumento.</p>
<p>${esc(ag.foro ? ag.foro.split('/')[0] : 'Jundiaí')}, data das assinaturas eletrônicas.</p>`;
}

const CSS_DOC = 'font-family:Georgia,"Times New Roman",serif;font-size:15px;line-height:1.65;color:#13201B';
function Manifesto({ k, ass }) {
  return html`<div class="card" style="background:#F7F9F7;margin-top:16px"><h2 style="margin-bottom:8px">Registro de assinaturas</h2>
    <p class="sub" style="margin:0 0 10px;word-break:break-all">Código de integridade (SHA-256): ${k.conteudo_hash || '—'}</p>
    ${['contratante', 'contratada'].map(p => { const a = ass.find(x => x.parte === p); return html`<div style="border-top:1px solid #DCE3DF;padding:10px 0"><b>${p === 'contratante' ? 'Contratante' : 'Contratada'}</b>
      ${a ? html`<div class="sub">${a.nome} · CPF ${cpfMask(a.cpf)} · ${a.email || ''}<br />Assinado em ${dataHora(a.assinado_em)} · IP ${a.ip || '—'}</div>` : html`<div class="sub">Aguardando assinatura</div>`}</div>`; })}</div>`;
}
function imprimirContrato(k, ass) {
  const w = window.open('', '_blank');
  if (!w) return toast('Libere as janelas pop-up para imprimir', 'erro');
  const man = ['contratante', 'contratada'].map(p => { const a = ass.find(x => x.parte === p); return `<p><b>${p === 'contratante' ? 'Contratante' : 'Contratada'}:</b> ${a ? esc(a.nome) + ' · CPF ' + cpfMask(a.cpf) + ' · ' + esc(a.email || '') + ' · ' + dataHora(a.assinado_em) + ' · IP ' + esc(a.ip || '—') : 'aguardando assinatura'}</p>`; }).join('');
  w.document.write(`<!doctype html><html lang="pt-BR"><head><meta charset="utf-8"><title>Contrato</title><style>body{${CSS_DOC};max-width:780px;margin:40px auto;padding:0 24px}h2{text-align:center;font-size:18px}h3{font-size:15px;margin-top:22px}.man{border-top:2px solid #13201B;margin-top:40px;padding-top:12px;font-family:Arial,sans-serif;font-size:12px}</style></head><body>${k.conteudo}<div class="man"><b>REGISTRO DE ASSINATURAS ELETRÔNICAS</b><p>Código de integridade (SHA-256): ${esc(k.conteudo_hash || '')}</p>${man}</div><script>window.onload=function(){window.print()}<\/script></body></html>`);
  w.document.close();
}
function DocContrato({ k, ass }) {
  return html`<div class="card" style="max-height:60vh;overflow:auto"><div class="doc-contrato" style=${CSS_DOC} dangerouslySetInnerHTML=${{ __html: k.conteudo || '<p>Documento ainda não gerado.</p>' }}></div></div><${Manifesto} k=${k} ass=${ass} />`;
}
function Assinar({ k, perfil, parte, onFechar, onOk }) {
  const [nome, setNome] = useState(perfil?.nome || ''); const [cpf, setCpf] = useState(''); const [aceite, setAceite] = useState(false); const [s, setS] = useState(false);
  const assinar = async e => {
    e.preventDefault();
    if (!aceite) return toast('Marque que leu e concorda com o contrato', 'erro');
    setS(true);
    const { data, error } = await sb.functions.invoke('assinar-contrato', { body: { contrato_id: k.id, nome, cpf, aceite: true } });
    setS(false);
    let msg = data?.erro; if (!msg && error) { try { msg = (await error.context.json()).erro; } catch { msg = error.message; } }
    if (msg) return toast(msg, 'erro');
    toast(data.concluido ? 'Contrato assinado pelas duas partes!' : 'Assinatura registrada!'); onOk(); onFechar();
  };
  return html`<form class="form" onSubmit=${assinar} style="background:#F2FCF7;border:1px solid #BFE9D3;border-radius:14px;padding:18px">
    <h2>Assinar ${parte === 'contratada' ? 'como contratada' : 'o contrato'}</h2>
    <div class="grid"><div class="campo"><label for="an">Nome completo</label><input id="an" autocomplete="name" value=${nome} onInput=${e => setNome(e.target.value)} required /></div>
    <div class="campo"><label for="ac">CPF</label><input id="ac" inputmode="numeric" value=${cpf} onInput=${e => setCpf(e.target.value)} placeholder="000.000.000-00" required /></div></div>
    <label class="chk" style="align-items:flex-start"><input type="checkbox" checked=${aceite} onChange=${e => setAceite(e.target.checked)} /><span>Li e concordo com todas as cláusulas deste contrato e reconheço a validade desta assinatura eletrônica.</span></label>
    <div class="acoes"><button class="btn pri" type="submit" disabled=${s}>${s ? 'Assinando…' : 'Assinar contrato'}</button>${onFechar && html`<button class="btn" type="button" onClick=${onFechar}>Cancelar</button>`}</div>
    <span class="sub">Serão registrados data, hora, endereço IP, navegador e o código de integridade do documento.</span></form>`;
}

function EditorContrato({ k, onFechar, onOk }) {
  const [ag, setAg] = useState(null); const [d, setD] = useState(null); const [s, setS] = useState(false);
  useEffect(() => {
    (async () => {
      const [a, c, it, onb, ass] = await Promise.all([
        sb.from('agencia_config').select('*').eq('id', 1).single(),
        sb.from('clientes').select('*').eq('id', k.cliente_id).single(),
        k.proposta_id ? sb.from('proposta_itens').select('descricao,tipo_cobranca').eq('proposta_id', k.proposta_id).order('ordem') : Promise.resolve({ data: [] }),
        sb.from('onboarding_itens').select('titulo,resposta').eq('cliente_id', k.cliente_id),
        sb.from('assinaturas').select('dia_vencimento,forma_pagamento').eq('cliente_id', k.cliente_id).limit(1)]);
      const { data: prop } = k.proposta_id ? await sb.from('propostas').select('verba_midia_sugerida,observacoes').eq('id', k.proposta_id).single() : { data: null };
      const r = t => (onb.data || []).find(x => x.titulo === t)?.resposta || '';
      const rz = r('Razão social e CNPJ'); const resp = r('Responsável pelo contrato').split('\n').map(x => x.trim()).filter(Boolean);
      const cpfR = resp.find(x => /^\d[\d.\-\s]{9,}$/.test(x)) || ''; const mailR = resp.find(x => x.includes('@')) || '';
      const dia = (r('Dia de vencimento da mensalidade').match(/\d+/) || [])[0] || ass.data?.[0]?.dia_vencimento || '10';
      const forma = r('Forma de pagamento') || ({ pix: 'Pix', boleto: 'Boleto', cartao: 'Cartão de crédito' })[ass.data?.[0]?.forma_pagamento] || 'Pix ou boleto';
      setAg(a.data || {});
      setD(k.dados || {
        contratante_razao: rz.split('\n')[0] || c.data?.nome_empresa || '', contratante_cnpj: c.data?.cnpj || (rz.match(/\d{2}\.?\d{3}\.?\d{3}\/?\d{4}-?\d{2}/) || [''])[0],
        contratante_endereco: r('Endereço completo').replace(/\n/g, ', ').replace(/,\s*,/g, ','), rep_nome: resp[0] || '', rep_cpf: cpfR, rep_email: mailR || c.data?.email || '',
        servicos: (it.data || []).map(x => x.descricao).join('\n'), valor_mensal: k.valor_mensal || 0, valor_unico: k.valor_unico || 0,
        condicao_unico: /entrega/i.test(prop?.observacoes || '') ? 'a ser pago na entrega do site' : 'a ser pago na assinatura deste contrato',
        dia_vencimento: dia, forma_pagamento: forma, duracao_meses: k.duracao_meses || 12, inicio: k.inicio_em ? dataBR(k.inicio_em) : 'data da assinatura',
        verba_midia: prop?.verba_midia_sugerida ? brl(prop.verba_midia_sugerida) + ' por mês' : '',
        rescisao: 'Qualquer das partes poderá rescindir este contrato mediante aviso prévio, por escrito, de 30 (trinta) dias, sem multa, sendo devidos os valores dos serviços prestados até a data do encerramento.'
      });
    })();
  }, []);
  if (!d || !ag) return html`<${Modal} titulo="Contrato" onFechar=${onFechar}><${Carregando} /><//>`;
  const set = (c, v) => setD({ ...d, [c]: v });
  const faltaAg = !ag.razao_social || !ag.cnpj || !ag.endereco || !ag.representante_nome || !ag.representante_cpf;
  const faltaCli = ['contratante_razao', 'contratante_cnpj', 'contratante_endereco', 'rep_nome', 'rep_cpf'].filter(c => !String(d[c] || '').trim());
  const conteudo = montarContrato(d, ag);
  const salvar = async enviar => {
    if (enviar && (faltaAg || faltaCli.length)) return toast('Preencha os dados que faltam antes de enviar', 'erro');
    if (enviar && !confirm('Enviar este contrato para assinatura? Depois da primeira assinatura, o texto não pode mais ser alterado.')) return;
    setS(true);
    const upd = { dados: d, conteudo, valor_mensal: num(d.valor_mensal) || 0, valor_unico: num(d.valor_unico) || 0, duracao_meses: num(d.duracao_meses) };
    if (enviar) { upd.conteudo_hash = await sha256(conteudo); upd.status = 'aguardando_assinatura'; upd.enviado_em = new Date().toISOString(); }
    const r = await sb.from('contratos').update(upd).eq('id', k.id); setS(false);
    if (ok(r, enviar ? 'Contrato enviado! Ele aparece para o cliente assinar no portal.' : 'Rascunho salvo')) { onOk(); onFechar(); }
  };
  const campo = (c, l, tipo, ph) => html`<div class="campo"><label for=${'k' + c}>${l}</label>${tipo === 'area' ? html`<textarea id=${'k' + c} value=${d[c]} onInput=${e => set(c, e.target.value)} placeholder=${ph || ''}></textarea>` : html`<input id=${'k' + c} type=${tipo || 'text'} value=${d[c]} onInput=${e => set(c, e.target.value)} placeholder=${ph || ''} />`}</div>`;
  return html`<div class="fundo" onClick=${e => e.target === e.currentTarget && onFechar()}><div class="modal" style="max-width:1200px" role="dialog" aria-modal="true" aria-label="Gerar contrato">
    <header><h2>Gerar contrato</h2><button class="btn pq" onClick=${onFechar}>Fechar</button></header>
    ${faltaAg && html`<div class="card" style="background:#FFF8E8;border-color:#F2D9A0"><b>Faltam os dados da agência.</b> <span class="sub">Preencha em Sistema → Dados da agência (razão social, CNPJ, endereço e representante).</span></div>`}
    <div class="cols"><div class="c1" style="flex:1 1 380px">
      <section class="card form"><h2>Contratante</h2>
        ${campo('contratante_razao', 'Razão social *')}${campo('contratante_cnpj', 'CNPJ *')}${campo('contratante_endereco', 'Endereço completo *', 'area')}
        ${campo('rep_nome', 'Representante (quem assina) *')}${campo('rep_cpf', 'CPF do representante *')}${campo('rep_email', 'E-mail do representante')}</section>
      <section class="card form"><h2>Serviços e valores</h2>
        ${campo('servicos', 'Serviços (um por linha)', 'area')}
        <div class="grid">${campo('valor_mensal', 'Mensalidade (R$)', 'number')}${campo('dia_vencimento', 'Dia do vencimento')}</div>
        <div class="grid">${campo('valor_unico', 'Valor único (R$)', 'number')}${campo('forma_pagamento', 'Forma de pagamento')}</div>
        ${Number(d.valor_unico || 0) > 0 && campo('condicao_unico', 'Condição do valor único')}
        <div class="grid">${campo('duracao_meses', 'Prazo (meses)', 'number')}${campo('inicio', 'Início')}</div>
        ${campo('verba_midia', 'Verba de mídia sugerida', 'text', 'Ex.: R$ 1.000,00 por mês')}
        ${campo('rescisao', 'Condições de rescisão', 'area')}</section>
      <div class="acoes"><button class="btn pri" disabled=${s} onClick=${() => salvar(true)}>Enviar para assinatura</button><button class="btn" disabled=${s} onClick=${() => salvar(false)}>Salvar rascunho</button></div>
      ${faltaCli.length > 0 && html`<span class="sub" style="color:#A12A1F">Faltam campos obrigatórios do contratante.</span>`}
    </div><div class="c2" style="flex:1.4 1 480px"><section class="card" style="max-height:78vh;overflow:auto"><span class="sub">Prévia do documento</span><div style=${CSS_DOC} dangerouslySetInnerHTML=${{ __html: conteudo }}></div></section>
      <p class="sub">Modelo base para facilitar o dia a dia. Vale uma revisão do seu advogado antes do primeiro uso.</p></div></div>
  </div></div>`;
}

function DadosAgencia({ perfil }) {
  const [a, setA] = useState(null);
  useEffect(() => { sb.from('agencia_config').select('*').eq('id', 1).single().then(r => setA(r.data || {})); }, []);
  if (!a) return html`<${Carregando} />`;
  const salvar = async v => { const d = { ...v }; delete d.id; d.atualizado_em = new Date().toISOString(); if (ok(await sb.from('agencia_config').update(d).eq('id', 1), 'Dados salvos')) setA({ ...a, ...d }); return false; };
  return html`<${Topo} titulo="Dados da agência" sub="Usados como CONTRATADA nos contratos gerados pelo painel." />
    ${perfil.papel !== 'admin' ? html`<p class="vazio">Somente administradores podem editar.</p>` : html`<section class="card" style="max-width:720px"><${FormInline} inicial=${a} onSalvar=${salvar} campos=${[
      { n: 'razao_social', l: 'Razão social', obrig: true }, { n: 'nome_fantasia', l: 'Nome fantasia' }, { n: 'cnpj', l: 'CNPJ', obrig: true }, { n: 'endereco', l: 'Endereço completo', obrig: true },
      { n: 'representante_nome', l: 'Representante legal (quem assina)', obrig: true }, { n: 'representante_cpf', l: 'CPF do representante', obrig: true },
      { n: 'email', l: 'E-mail' }, { n: 'telefone', l: 'Telefone' }, { n: 'foro', l: 'Foro (cidade/UF)' }]} /></section>`}`;
}
function FormInline({ campos, inicial, onSalvar }) {
  const [v, setV] = useState({ ...inicial }); const [s, setS] = useState(false);
  return html`<form class="form" onSubmit=${async e => { e.preventDefault(); for (const c of campos) if (c.obrig && !String(v[c.n] || '').trim()) return toast('Preencha: ' + c.l, 'erro'); setS(true); await onSalvar(v); setS(false); }}>
    ${campos.map(c => html`<div class="campo"><label for=${'fi' + c.n}>${c.l}${c.obrig ? ' *' : ''}</label><input id=${'fi' + c.n} value=${v[c.n] ?? ''} onInput=${e => setV({ ...v, [c.n]: e.target.value })} /></div>`)}
    <div><button class="btn pri" type="submit" disabled=${s}>${s ? 'Salvando…' : 'Salvar'}</button></div></form>`;
}

function VerContrato({ k, perfil, onFechar, onOk }) {
  const [ass, setAss] = useState(null); const [assinar, setAssinar] = useState(false);
  const carregar = () => sb.from('contrato_assinaturas').select('*').eq('contrato_id', k.id).then(r => setAss(r.data || []));
  useEffect(() => { carregar(); }, []);
  if (!ass) return null;
  const parte = perfil.papel === 'cliente' ? 'contratante' : 'contratada';
  const pode = k.status === 'aguardando_assinatura' && !ass.find(a => a.parte === parte) && (perfil.papel === 'admin' || perfil.papel === 'cliente');
  return html`<div class="form">
    <div class="acoes"><${PillDe} mapa=${ST_CONT} v=${k.status} /><button class="btn pq" onClick=${() => imprimirContrato(k, ass)}>Imprimir / salvar PDF</button>${onFechar && html`<button class="btn pq" onClick=${onFechar}>Fechar</button>`}</div>
    <${DocContrato} k=${k} ass=${ass} />
    ${pode && (assinar ? html`<${Assinar} k=${k} perfil=${perfil} parte=${parte} onFechar=${() => setAssinar(false)} onOk=${() => { carregar(); onOk && onOk(); }} />` : html`<div><button class="btn pri" onClick=${() => setAssinar(true)}>Assinar ${parte === 'contratada' ? 'como contratada' : 'contrato'}</button></div>`)}
  </div>`;
}
function PortalContrato({ id, perfil, onMudou }) {
  const [k, setK] = useState(undefined);
  const carregar = () => sb.from('contratos').select('*').eq('id', id).single().then(r => setK(r.data || null));
  useEffect(() => { carregar(); }, [id]);
  if (k === undefined) return html`<${Carregando} />`;
  if (!k) return html`<p class="vazio">Contrato não encontrado.</p>`;
  return html`<div><a href="#/financeiro">← Voltar</a><h1 style="margin-top:8px">Contrato de prestação de serviços</h1><p class="sub">Leia com atenção. A assinatura é feita aqui mesmo, de forma eletrônica.</p></div>
    <${VerContrato} k=${k} perfil=${perfil} onOk=${() => { carregar(); onMudou(); }} />`;
}

// ---------- demandas e reuniões
function Demandas() {
  const [tar, setTar] = useState(null); const [reu, setReu] = useState([]); const [m, setM] = useState(null); const [mr, setMr] = useState(null);
  const clientes = useLista('clientes'); const equipe = useLista('perfis', 'id,nome,email,papel', 'nome');
  const carregar = () => Promise.all([sb.from('tarefas').select('*, clientes(nome_empresa), perfis(nome,email)').order('prazo', { ascending: true, nullsFirst: false }), sb.from('reunioes').select('*, clientes(nome_empresa)').order('inicio', { ascending: false }).limit(30)])
    .then(([a, b]) => { setTar(a.data || []); setReu(b.data || []); });
  useEffect(() => { carregar(); }, []);
  const mover = async (t, status) => { if (ok(await sb.from('tarefas').update({ status }).eq('id', t.id))) carregar(); };
  const salvarT = async v => {
    const d = { cliente_id: v.cliente_id || null, titulo: v.titulo, descricao: v.descricao || null, status: v.status, responsavel_id: v.responsavel_id || null, prazo: v.prazo || null };
    const r = m.id ? await sb.from('tarefas').update(d).eq('id', m.id) : await sb.from('tarefas').insert(d);
    if (!ok(r, 'Tarefa salva')) return false; carregar();
  };
  const salvarR = async v => {
    const d = { cliente_id: v.cliente_id || null, titulo: v.titulo, inicio: new Date(v.inicio).toISOString(), link_meet: v.link_meet || null, ata: v.ata || null };
    const r = mr.id ? await sb.from('reunioes').update(d).eq('id', mr.id).select('id').single() : await sb.from('reunioes').insert(d).select('id').single();
    if (!ok(r)) return false;
    const novas = (v.novas_tarefas || '').split('\n').map(s => s.replace(/^[-*\s\[\]x]+/i, '').trim()).filter(Boolean);
    if (novas.length) { if (!ok(await sb.from('tarefas').insert(novas.map(t => ({ titulo: t, cliente_id: d.cliente_id, origem_reuniao_id: r.data.id }))))) return false; }
    toast(novas.length ? 'Reunião salva e ' + novas.length + ' tarefa(s) criada(s)' : 'Reunião salva'); carregar();
  };
  if (!tar) return html`<${Carregando} />`;
  const agora = new Date().toISOString();
  const opEquipe = equipe.filter(p => ['admin', 'equipe'].includes(p.papel)).map(p => [p.id, p.nome || p.email]);
  return html`<${Topo} titulo="Demandas e reuniões" sub="Tarefas por cliente e reuniões com link e ata. As tarefas da ata viram cards automaticamente.">
      <button class="btn" onClick=${() => setMr({ inicio: '' })}>Nova reunião</button><button class="btn pri" onClick=${() => setM({ status: 'a_fazer' })}>Nova tarefa</button><//>
    <div class="kanban">${ST_TAR.map(([k, l]) => { const its = tar.filter(t => t.status === k); return html`<section class="coluna" aria-label=${l}><header><span>${l}</span><span class="sub">${its.length}</span></header>
      ${its.length ? its.map(t => html`<article class="kcard"><div style="display:flex;justify-content:space-between;gap:8px"><b>${t.titulo}</b><button class="lnk" onClick=${() => setM(t)}>Editar</button></div>
        <span class="sub">${t.clientes?.nome_empresa || 'Interno'}${t.perfis ? ' · ' + (t.perfis.nome || t.perfis.email) : ''}</span>
        ${t.prazo && html`<${Pill} k=${t.prazo < hojeISO() && k !== 'concluido' ? 'bad' : 'neu'}>Prazo ${dataBR(t.prazo)}<//>`}
        <select aria-label="Mover tarefa" value=${t.status} onChange=${e => mover(t, e.target.value)}>${ST_TAR.map(([v, x]) => html`<option value=${v}>${x}</option>`)}</select></article>`) : html`<p class="vazio" style="padding:4px">Nada aqui.</p>`}</section>`; })}</div>
    <section class="card"><h2>Reuniões</h2>
      ${reu.length ? html`<div class="lista">${reu.map(r => html`<div><div><b>${r.titulo}</b><div class="sub">${dataHora(r.inicio)} · ${r.clientes?.nome_empresa || 'Interna'}${r.ata ? ' · ata registrada' : ''}</div></div>
        <div class="acoes">${r.inicio > agora && r.link_meet && html`<a class="btn pq pri" href=${r.link_meet} target="_blank" rel="noopener">Entrar</a>`}<button class="btn pq" onClick=${() => setMr({ ...r, inicio: paraLocal(r.inicio) })}>${r.inicio > agora ? 'Editar' : 'Ata'}</button></div></div>`)}</div>` : html`<p class="vazio">Nenhuma reunião registrada.</p>`}
    </section>
    ${m && html`<${FormModal} titulo=${m.id ? 'Editar tarefa' : 'Nova tarefa'} inicial=${m} onSalvar=${salvarT} onFechar=${() => setM(null)} campos=${[
      { n: 'titulo', l: 'Tarefa', obrig: true }, { n: 'cliente_id', l: 'Cliente', tipo: 'sel', vazio: 'Interno (sem cliente)', op: opClientes(clientes) }, { n: 'descricao', l: 'Detalhes', tipo: 'area' },
      { n: 'responsavel_id', l: 'Responsável', tipo: 'sel', op: opEquipe }, { n: 'prazo', l: 'Prazo', tipo: 'date' }, { n: 'status', l: 'Status', tipo: 'sel', vazio: false, op: ST_TAR }]} />`}
    ${mr && html`<${FormModal} titulo=${mr.id ? 'Reunião' : 'Nova reunião'} inicial=${mr} onSalvar=${salvarR} onFechar=${() => setMr(null)} campos=${[
      { n: 'titulo', l: 'Assunto', obrig: true }, { n: 'cliente_id', l: 'Cliente', tipo: 'sel', vazio: 'Interna', op: opClientes(clientes) }, { n: 'inicio', l: 'Data e hora', tipo: 'datetime-local', obrig: true },
      { n: 'link_meet', l: 'Link do Google Meet', ph: 'https://meet.google.com/…', ajuda: 'Crie o evento no Google Agenda e cole o link aqui. A criação automática vem com a integração do Google.' },
      { n: 'ata', l: 'Ata da reunião', tipo: 'area', ph: 'Resumo, decisões e combinados' }, { n: 'novas_tarefas', l: 'Tarefas desta reunião (uma por linha)', tipo: 'area', ph: 'Enviar contrato\nPedir catálogos', ajuda: 'Cada linha vira uma tarefa no quadro. A ata e as tarefas desta reunião aparecem para o cliente no portal.' }]} />`}`;
}

// ---------- redes sociais
function Redes() {
  const clientes = useLista('clientes', 'id,nome_empresa,status');
  const [cid, setCid] = useState(''); const [mes, setMes] = useState(() => hojeISO().slice(0, 7)); const [posts, setPosts] = useState(null); const [m, setM] = useState(null); const [mr, setMr] = useState(null); const [rmet, setRmet] = useState([]);
  useEffect(() => { if (cid) sb.from('redes_metricas').select('*').eq('cliente_id', cid).order('mes', { ascending: false }).limit(24).then(r => setRmet(r.data || [])); }, [cid, mr]);
  const salvarRede = async v => {
    const d = { cliente_id: cid, rede: v.rede, mes: v.mes + '-01', seguidores: num(v.seguidores), alcance: num(v.alcance), engajamento: num(v.engajamento), visitas_perfil: num(v.visitas_perfil), observacao: v.observacao || null };
    if (!ok(await sb.from('redes_metricas').upsert(d, { onConflict: 'cliente_id,rede,mes' }), 'Métricas salvas')) return false;
  };
  useEffect(() => { if (!cid && clientes.length) setCid((clientes.find(c => c.status === 'ativo') || clientes[0]).id); }, [clientes]);
  const carregar = () => cid && sb.from('posts').select('*').eq('cliente_id', cid).gte('data_publicacao', mes + '-01').lt('data_publicacao', proxMes(mes)).order('data_publicacao').then(r => setPosts(r.data || []));
  useEffect(() => { setPosts(null); carregar(); }, [cid, mes]);
  const salvar = async v => {
    const d = { cliente_id: cid, data_publicacao: v.data_publicacao, titulo: v.titulo, legenda: v.legenda || null, arte_url: v.arte_url || null, canais: v.canais || [], status: v.status };
    const r = m.id ? await sb.from('posts').update(d).eq('id', m.id) : await sb.from('posts').insert(d);
    if (!ok(r, 'Post salvo')) return false; carregar();
  };
  const [ano, mm] = mes.split('-').map(Number);
  const primeiro = new Date(ano, mm - 1, 1), inicio = new Date(primeiro); inicio.setDate(1 - ((primeiro.getDay() + 6) % 7));
  const diasCal = Array.from({ length: 42 }, (_, i) => { const d = new Date(inicio); d.setDate(inicio.getDate() + i); return d; });
  const iso = d => d.getFullYear() + '-' + String(d.getMonth() + 1).padStart(2, '0') + '-' + String(d.getDate()).padStart(2, '0');
  const navegar = n => { const d = new Date(ano, mm - 1 + n, 1); setMes(iso(d).slice(0, 7)); };
  const semanas = diasCal[35].getMonth() === mm - 1 ? 6 : 5;
  const aguard = posts ? posts.filter(p => p.status === 'aguardando_aprovacao').length : 0;
  const nomeCli = (clientes.find(c => c.id === cid) || {}).nome_empresa || '';
  return html`<${Topo} titulo="Redes sociais" sub="Monte o calendário do mês, envie para aprovação do cliente no portal e acompanhe as respostas.">
      <label for="rc" class="sub">Cliente</label><select id="rc" style="width:auto" value=${cid} onChange=${e => setCid(e.target.value)}>${clientes.map(c => html`<option value=${c.id}>${c.nome_empresa}</option>`)}</select>
      <div class="acoes"><button class="btn pq" onClick=${() => navegar(-1)} aria-label="Mês anterior">‹</button><b style="min-width:150px;text-align:center">${tituloMes(primeiro)}</b><button class="btn pq" onClick=${() => navegar(1)} aria-label="Próximo mês">›</button></div>
      <button class="btn" onClick=${() => setMr({ rede: 'instagram', mes: hojeISO().slice(0, 7) })}>Métricas do mês</button><//>
    <${LembreteCalendarios} />
    ${cid && html`<${CalendarioEquipe} key=${cid + mes} cid=${cid} mes=${mes} cliente=${nomeCli} />`}
    <section class="card tabela"><h2>Métricas lançadas</h2>${rmet.length ? html`<table><thead><tr><th>Mês</th><th>Rede</th><th>Seguidores</th><th>Alcance</th><th>Engajamento</th><th>Visitas ao perfil</th></tr></thead><tbody>
      ${rmet.map(x => html`<tr><td>${mesBR(x.mes)}</td><td>${(REDES.find(r => r[0] === x.rede) || [])[1]}</td><td>${x.seguidores != null ? inteiro(x.seguidores) : '—'}</td><td>${x.alcance != null ? inteiro(x.alcance) : '—'}</td><td>${x.engajamento != null ? inteiro(x.engajamento) : '—'}</td><td>${x.visitas_perfil != null ? inteiro(x.visitas_perfil) : '—'}</td></tr>`)}</tbody></table>` : html`<p class="vazio">Nenhuma métrica lançada. Use "Métricas do mês" para alimentar o painel do cliente.</p>`}</section>
    ${mr && html`<${FormModal} titulo="Métricas das redes" inicial=${mr} onSalvar=${salvarRede} onFechar=${() => setMr(null)} rotulo="Salvar mês" campos=${[
      { n: 'rede', l: 'Rede', tipo: 'sel', vazio: false, op: REDES }, { n: 'mes', l: 'Mês', tipo: 'month', obrig: true }, { n: 'seguidores', l: 'Seguidores no fim do mês', tipo: 'number' },
      { n: 'alcance', l: 'Alcance no mês', tipo: 'number' }, { n: 'engajamento', l: 'Interações no mês', tipo: 'number', ajuda: 'Curtidas, comentários, compartilhamentos e salvamentos.' }, { n: 'visitas_perfil', l: 'Visitas ao perfil', tipo: 'number' }, { n: 'observacao', l: 'Comentário para o cliente', tipo: 'area' }]} />`}
`;
}

// ---------- campanhas e integrações
function Campanhas() {
  const clientes = useLista('clientes', 'id,nome_empresa,status');
  const [cid, setCid] = useState(''); const [l, setL] = useState(null); const [met, setMet] = useState([]); const [m, setM] = useState(null); const [mm, setMm] = useState(null);
  useEffect(() => { if (!cid && clientes.length) setCid((clientes.find(c => c.status === 'ativo') || clientes[0]).id); }, [clientes]);
  const carregar = async () => {
    if (!cid) return;
    const { data: cs } = await sb.from('campanhas').select('*').eq('cliente_id', cid).order('status').order('nome');
    const ids = (cs || []).map(c => c.id);
    const { data: ms } = ids.length ? await sb.from('campanha_metricas').select('*').in('campanha_id', ids).order('mes', { ascending: false }) : { data: [] };
    setL(cs || []); setMet(ms || []);
  };
  useEffect(() => { setL(null); carregar(); }, [cid]);
  const salvar = async v => {
    const d = { cliente_id: cid, plataforma: v.plataforma, nome: v.nome, objetivo: v.objetivo || null, status: v.status, orcamento_mensal: num(v.orcamento_mensal), inicio_em: v.inicio_em || null };
    const r = m.id ? await sb.from('campanhas').update(d).eq('id', m.id) : await sb.from('campanhas').insert(d);
    if (!ok(r, 'Campanha salva')) return false; carregar();
  };
  const salvarMet = async v => {
    const d = { campanha_id: mm.campanha_id, mes: v.mes + '-01', investimento: num(v.investimento) || 0, impressoes: num(v.impressoes) || 0, cliques: num(v.cliques) || 0, conversoes: num(v.conversoes) || 0, observacao: v.observacao || null };
    if (!ok(await sb.from('campanha_metricas').upsert(d, { onConflict: 'campanha_id,mes' }), 'Métricas salvas')) return false; carregar();
  };
  const ultima = id => met.find(x => x.campanha_id === id);
  return html`<${Topo} titulo="Campanhas" sub="Campanhas de tráfego pago de cada cliente. As métricas lançadas aqui aparecem no portal do cliente.">
      <label for="cc" class="sub">Cliente</label><select id="cc" style="width:auto" value=${cid} onChange=${e => setCid(e.target.value)}>${clientes.map(c => html`<option value=${c.id}>${c.nome_empresa}</option>`)}</select>
      <button class="btn pri" onClick=${() => setM({ plataforma: 'google', status: 'ativa' })}>Nova campanha</button><//>
    <${AbasCampanhas} at="/campanhas" />
    <section class="card" style="background:#FFF8E8;border-color:#F2D9A0"><b>Lançamento manual por enquanto.</b> <span class="sub">Quando as integrações do Google Ads e da Meta forem liberadas, as métricas passam a entrar sozinhas. Até lá, lance o fechamento de cada mês (dá para pedir ao Claude, que lê as contas pelos conectores).</span></section>
    ${!l ? html`<${Carregando} />` : html`<section class="card tabela"><table><thead><tr><th>Campanha</th><th>Status</th><th>Último mês lançado</th><th>Investimento</th><th>Cliques</th><th>Conversões</th><th></th></tr></thead><tbody>
      ${l.length ? l.map(c => { const u = ultima(c.id); return html`<tr><td><b>${c.nome}</b><div class="sub">${PLAT[c.plataforma]}${c.objetivo ? ' · ' + c.objetivo : ''}</div></td>
        <td><${Pill} k=${c.status === 'ativa' ? 'ok' : 'neu'}>${c.status}<//></td><td>${u ? mesBR(u.mes) : '—'}</td><td>${u ? brl(u.investimento) : '—'}</td><td>${u ? inteiro(u.cliques) : '—'}</td><td>${u ? inteiro(u.conversoes) : '—'}</td>
        <td><div class="acoes"><button class="btn pq pri" onClick=${() => setMm({ campanha_id: c.id, nome: c.nome, mes: hojeISO().slice(0, 7) })}>Lançar mês</button><button class="btn pq" onClick=${() => setM(c)}>Editar</button></div></td></tr>`; }) : html`<tr><td colspan="7" class="vazio">Nenhuma campanha cadastrada para este cliente.</td></tr>`}
    </tbody></table></section>`}
    ${m && html`<${FormModal} titulo=${m.id ? 'Editar campanha' : 'Nova campanha'} inicial=${m} onSalvar=${salvar} onFechar=${() => setM(null)} campos=${[
      { n: 'nome', l: 'Nome da campanha', obrig: true, ph: 'Ex.: Pesquisa – Pneumática' }, { n: 'plataforma', l: 'Plataforma', tipo: 'sel', vazio: false, op: Object.entries(PLAT) },
      { n: 'objetivo', l: 'Objetivo', ph: 'Ex.: contatos no WhatsApp' }, { n: 'status', l: 'Status', tipo: 'sel', vazio: false, op: [['ativa', 'Ativa'], ['pausada', 'Pausada'], ['encerrada', 'Encerrada']] },
      { n: 'orcamento_mensal', l: 'Orçamento mensal (R$)', tipo: 'number' }, { n: 'inicio_em', l: 'Início', tipo: 'date' }]} />`}
    ${mm && html`<${FormModal} titulo=${'Métricas – ' + mm.nome} inicial=${mm} onSalvar=${salvarMet} onFechar=${() => setMm(null)} rotulo="Salvar mês" campos=${[
      { n: 'mes', l: 'Mês', tipo: 'month', obrig: true, ajuda: 'Se o mês já tiver números, eles serão substituídos.' }, { n: 'investimento', l: 'Investimento (R$)', tipo: 'number' }, { n: 'impressoes', l: 'Impressões', tipo: 'number' },
      { n: 'cliques', l: 'Cliques', tipo: 'number' }, { n: 'conversoes', l: 'Conversões (contatos)', tipo: 'number' }, { n: 'observacao', l: 'Comentário para o cliente', tipo: 'area' }]} />`}`;
}
const INTEG = [['Supabase', 'Banco de dados, login e permissões.', 'Conectado', 'ok'], ['Vercel', 'Hospedagem do painel.', 'Conectado', 'ok'],
  ['Asaas', 'Cobranças, assinaturas, régua de cobrança e notas fiscais. Precisa da chave de API do Asaas.', 'Pendente', 'warn'],
  ['ZapSign', 'Assinatura eletrônica dos contratos. Precisa da chave de API.', 'Pendente', 'warn'],
  ['Google (Agenda, Meet, Drive)', 'Criar reuniões com link do Meet automaticamente.', 'Pendente', 'warn'],
  ['Meta (Instagram e Facebook)', 'Agendar e publicar posts.', 'Pendente', 'warn'], ['LinkedIn', 'Publicar na página da empresa. Depende de aprovação da API.', 'Pendente', 'warn'],
  ['Google Ads', 'Métricas das campanhas. Exige token de desenvolvedor.', 'Pendente', 'warn'], ['WhatsApp', 'Envio de propostas, lembretes e cobranças.', 'Opcional', 'neu'],
  ['E-mail automático (Resend)', 'Envia as notas fiscais e avisos por e-mail. Precisa da chave do Resend e de registros no DNS.', 'Pendente', 'warn'],
  ['NFS-e Nacional (gov.br)', 'Emitir a nota direto pelo painel. Exige certificado digital A1 da agência e adesão do município ao padrão nacional.', 'Em avaliação', 'neu']];
const Integracoes = () => html`<${Topo} titulo="Integrações" sub="Status das conexões do painel." />
  <div class="grid">${INTEG.map(([n, d, s, k]) => html`<section class="card"><div style="display:flex;justify-content:space-between;gap:8px;margin-bottom:8px"><h2>${n}</h2><${Pill} k=${k}>${s}<//></div><p class="sub" style="margin:0">${d}</p></section>`)}</div>`;

// ---------- equipe e acessos
function SenhaGerada({ login, senha, onFechar }) {
  const email = login;
  return html`<${Modal} titulo="Acesso criado" onFechar=${onFechar}>
    <p style="margin:0">Envie estes dados para a pessoa. A senha aparece <b>só agora</b> e será trocada no primeiro login.</p>
    <div class="card" style="background:#F2FCF7"><div class="lista"><div><span>Endereço</span><b>${location.origin}</b></div><div><span>Usuário</span><b>${email}</b></div><div><span>Senha temporária</span><b style="font-family:monospace;font-size:16px">${senha}</b></div></div></div>
    <div class="acoes"><button class="btn pri" onClick=${() => copiar('Acesse ' + location.origin + '\nUsuário: ' + email + '\nSenha temporária: ' + senha + '\nNo primeiro acesso você completa seus dados e cria sua própria senha.')}>Copiar mensagem</button><button class="btn" onClick=${onFechar}>Fechar</button></div><//>`;
}
function CriarAcesso({ cliente, modo = 'cliente', onFechar, onCriado }) {
  const clientes = useLista('clientes');
  const [res, setRes] = useState(null);
  const criar = async v => {
    const body = modo === 'cliente' ? { usuario: v.usuario, papel: 'cliente', cliente_id: v.cliente_id } : { email: v.email, nome: v.nome, papel: v.papel };
    const { data, error } = await sb.functions.invoke('criar-acesso', { body });
    if (error || data?.erro) { let msg = data?.erro; if (!msg && error?.context) { try { msg = (await error.context.json()).erro; } catch { } } toast(msg || error.message, 'erro'); return false; }
    setRes({ login: data.login, senha: data.senha_temporaria }); onCriado && onCriado(); return false;
  };
  if (res) return html`<${SenhaGerada} login=${res.login} senha=${res.senha} onFechar=${onFechar} />`;
  if (modo === 'cliente') return html`<${FormModal} titulo=${cliente ? 'Acesso ao portal – ' + cliente.nome_empresa : 'Acesso de cliente ao portal'} rotulo="Criar acesso" onFechar=${onFechar} onSalvar=${criar}
    inicial=${{ cliente_id: cliente?.id || '', usuario: slug(cliente?.nome_empresa) + (cliente?.jaTem ? '.' : '') }}
    antes=${html`<p class="sub" style="margin:0">O cliente entra com este usuário e uma senha provisória. No primeiro acesso, ele mesmo preenche nome, e-mail e WhatsApp e cria a senha dele.<br /><b>Mais de uma pessoa da mesma empresa?</b> Crie um usuário para cada uma, por exemplo <code>drilex.alex</code> e <code>drilex.financeiro</code>. Todas veem o mesmo portal.</p>`}
    campos=${[{ n: 'cliente_id', l: 'Cliente', tipo: 'sel', obrig: true, op: opClientes(clientes) }, { n: 'usuario', l: 'Usuário de login', obrig: true, ajuda: 'Só letras minúsculas e números. Ex.: drilex' }]} />`;
  return html`<${FormModal} titulo="Acesso da equipe" rotulo="Criar acesso" onFechar=${onFechar} onSalvar=${criar} inicial=${{ papel: 'equipe' }}
    campos=${[{ n: 'email', l: 'E-mail de login', tipo: 'email', obrig: true }, { n: 'nome', l: 'Nome' }, { n: 'papel', l: 'Tipo de acesso', tipo: 'sel', vazio: false, op: [['equipe', 'Equipe da agência'], ['admin', 'Administrador']] }]} />`;
}
function Equipe({ perfil }) {
  const [l, setL] = useState(null); const [novo, setNovo] = useState(null); const [ed, setEd] = useState(null); const [senha, setSenha] = useState(null);
  const clientes = useLista('clientes');
  const carregar = () => sb.from('perfis').select('*, clientes(nome_empresa)').order('criado_em').then(r => setL(r.data || []));
  useEffect(() => { carregar(); }, []);
  const admin = perfil.papel === 'admin';
  const resetar = async p => {
    if (!confirm('Gerar uma nova senha temporária para ' + loginDe(p.email) + '?')) return;
    const { data, error } = await sb.functions.invoke('criar-acesso', { body: { acao: 'resetar', usuario_id: p.id } });
    if (error || data?.erro) return toast(data?.erro || error.message, 'erro');
    setSenha({ login: data.login || loginDe(p.email), senha: data.senha_temporaria });
  };
  const salvar = async v => { const r = await sb.from('perfis').update({ nome: v.nome || null, papel: v.papel, cliente_id: v.papel === 'cliente' ? (v.cliente_id || null) : null }).eq('id', ed.id); if (!ok(r, 'Perfil atualizado')) return false; carregar(); };
  if (!l) return html`<${Carregando} />`;
  return html`<${Topo} titulo="Equipe e acessos" sub="Usuários da agência e acessos dos clientes ao portal.">${admin && html`<button class="btn" onClick=${() => setNovo('equipe')}>Acesso da equipe</button><button class="btn pri" onClick=${() => setNovo('cliente')}>Acesso de cliente</button>`}<//>
    <section class="card tabela"><table><thead><tr><th>Pessoa</th><th>Tipo</th><th>Cliente</th><th>Situação</th>${admin && html`<th></th>`}</tr></thead><tbody>
    ${l.map(p => html`<tr><td><b>${p.nome || '—'}</b><div class="sub">Usuário: ${loginDe(p.email)}</div>${(p.email_contato || p.telefone) && html`<div class="sub">${[p.email_contato, p.telefone].filter(Boolean).join(' · ')}</div>`}</td><td>${PAPEIS[p.papel]}</td><td>${p.clientes?.nome_empresa || '—'}</td>
      <td>${p.precisa_trocar_senha ? html`<${Pill} k="warn">Aguardando 1º acesso<//>` : p.papel === 'pendente' ? html`<${Pill} k="bad">Sem liberação<//>` : html`<${Pill} k="ok">Ativo<//>`}</td>
      ${admin && html`<td><div class="acoes"><button class="btn pq" onClick=${() => setEd(p)}>Editar</button>${p.id !== perfil.id && html`<button class="btn pq" onClick=${() => resetar(p)}>Nova senha</button>`}</div></td>`}</tr>`)}
    </tbody></table></section>
    ${novo && html`<${CriarAcesso} modo=${novo} onFechar=${() => { setNovo(null); carregar(); }} onCriado=${carregar} />`}
    ${senha && html`<${SenhaGerada} login=${senha.login} senha=${senha.senha} onFechar=${() => { setSenha(null); carregar(); }} />`}
    ${ed && html`<${FormModal} titulo="Editar acesso" inicial=${ed} onSalvar=${salvar} onFechar=${() => setEd(null)} campos=${[{ n: 'nome', l: 'Nome' }, { n: 'papel', l: 'Tipo', tipo: 'sel', vazio: false, op: Object.entries(PAPEIS) }, { n: 'cliente_id', l: 'Cliente vinculado (só para tipo Cliente)', tipo: 'sel', op: opClientes(clientes) }]} />`}`;
}

// ---------- portal do cliente

const NOVOS_ACESSOS = ['acesso_credencial', 'acesso_admin', 'dominio'];
function CampoAcesso({ i, cid, onSalvo }) {
  const r0 = i.resposta || '';
  const [existe, setExiste] = useState(r0.startsWith('Sim') ? 'sim' : r0.startsWith('Não') ? 'nao' : '');
  const [editar, setEditar] = useState(!i.concluido);
  const [login, setLogin] = useState(''); const [senha, setSenha] = useState(''); const [obs, setObs] = useState(''); const [ver, setVer] = useState(false);
  const [dom, setDom] = useState(r0.startsWith('Sim · ') && i.tipo_resposta === 'dominio' ? r0.slice(6) : ''); const [admin, setAdmin] = useState(r0.includes('administrador'));
  const [s, setS] = useState(false);
  const pergunta = i.tipo_resposta === 'dominio' ? 'O domínio já está registrado?' : 'Já existe?';
  const gravar = async resposta => {
    setS(true); const r = await sb.from('onboarding_itens').update({ resposta, concluido: true }).eq('id', i.id); setS(false);
    if (ok(r, 'Salvo, obrigado!')) { setEditar(false); onSalvo(); }
  };
  const salvar = async () => {
    if (!existe) return toast('Responda se já existe', 'erro');
    if (existe === 'nao') return gravar(i.tipo_resposta === 'dominio' ? 'Não · a agência pode registrar' : 'Não existe · a agência pode criar');
    if (i.tipo_resposta === 'dominio') { if (!dom.includes('.')) return toast('Informe o domínio, ex.: suaempresa.com.br', 'erro'); return gravar('Sim · ' + dom.trim().toLowerCase().replace(/^https?:\/\//, '').replace(/\/.*$/, '')); }
    if (i.tipo_resposta === 'acesso_admin') { if (!admin) return toast('Confirme que adicionou a agência como administradora', 'erro'); return gravar('Sim · agência adicionada como administradora'); }
    const jaTem = r0.startsWith('Sim');
    if (!login.trim() || (!senha && !jaTem)) return toast('Informe o login e a senha', 'erro');
    setS(true);
    const r = await sb.rpc('salvar_credencial', { p_cliente: cid, p_item: i.id, p_servico: i.titulo, p_login: login, p_senha: senha, p_obs: obs });
    setS(false);
    if (!ok(r)) return;
    setSenha(''); gravar('Sim · acesso cadastrado (login: ' + login.trim() + ')');
  };
  if (!editar) return html`<div class="acoes"><${Pill} k="ok">Enviado<//><span class="sub">${r0}</span><button class="lnk" onClick=${() => setEditar(true)}>${i.tipo_resposta === 'acesso_credencial' && r0.startsWith('Sim') ? 'Atualizar acesso' : 'Alterar'}</button></div>`;
  const nm = 'ex' + i.id;
  return html`<div class="form" style="gap:10px">
    <fieldset style="border:0;padding:0;margin:0"><legend class="sub" style="font-weight:600;margin-bottom:6px">${pergunta}</legend>
      <div class="acoes"><label class="chk"><input type="radio" name=${nm} checked=${existe === 'sim'} onChange=${() => setExiste('sim')} />Sim</label><label class="chk"><input type="radio" name=${nm} checked=${existe === 'nao'} onChange=${() => setExiste('nao')} />Não</label></div></fieldset>
    ${existe === 'nao' && html`<span class="sub">${i.tipo_resposta === 'dominio' ? 'Sem problema: a agência registra o domínio para vocês.' : 'Sem problema: a agência cria para vocês.'}</span>`}
    ${existe === 'sim' && i.tipo_resposta === 'dominio' && html`<div class="campo"><label for=${'d' + i.id}>Qual é o domínio?</label><input id=${'d' + i.id} placeholder="suaempresa.com.br" value=${dom} onInput=${e => setDom(e.target.value)} /></div>`}
    ${existe === 'sim' && i.tipo_resposta === 'acesso_admin' && html`<label class="chk"><input type="checkbox" checked=${admin} onChange=${e => setAdmin(e.target.checked)} />Já adicionei a agência como administradora</label>`}
    ${existe === 'sim' && i.tipo_resposta === 'acesso_credencial' && html`<div class="form" style="gap:10px;background:#F7F9F7;border-radius:12px;padding:14px">
      <span class="sub">🔒 A senha é guardada criptografada e só a equipe da Agência Baraúna consegue ver.${r0.startsWith('Sim') ? ' Deixe a senha em branco para manter a atual.' : ''}</span>
      <div class="campo"><label for=${'l' + i.id}>Login (e-mail ou usuário)</label><input id=${'l' + i.id} autocomplete="off" value=${login} onInput=${e => setLogin(e.target.value)} /></div>
      <div class="campo"><label for=${'s' + i.id}>Senha</label><div class="acoes" style="flex-wrap:nowrap"><input id=${'s' + i.id} type=${ver ? 'text' : 'password'} autocomplete="new-password" value=${senha} onInput=${e => setSenha(e.target.value)} /><button class="btn pq" type="button" onClick=${() => setVer(!ver)}>${ver ? 'Ocultar' : 'Mostrar'}</button></div></div>
      <div class="campo"><label for=${'o' + i.id}>Observação (opcional)</label><input id=${'o' + i.id} value=${obs} onInput=${e => setObs(e.target.value)} placeholder="Ex.: o código de verificação chega no celular do Alex" /></div></div>`}
    <div class="acoes"><button class="btn pri pq" disabled=${s} onClick=${salvar}>${s ? 'Salvando…' : 'Salvar'}</button>${i.concluido && html`<button class="lnk" onClick=${() => setEditar(false)}>Cancelar</button>`}</div></div>`;
}
function CampoResposta({ i, cid, onSalvo }) {
  if (NOVOS_ACESSOS.includes(i.tipo_resposta)) return html`<${CampoAcesso} i=${i} cid=${cid} onSalvo=${onSalvo} />`;
  const [v, setV] = useState(i.resposta || ''); const [s, setS] = useState(false);
  const id = 'r' + i.id;
  const salvar = async (concluir = true, valor = v) => {
    if (concluir && i.tipo_resposta !== 'confirmacao' && !String(valor).trim()) return toast('Preencha antes de salvar', 'erro');
    setS(true);
    const r = await sb.from('onboarding_itens').update({ resposta: valor || null, concluido: concluir }).eq('id', i.id);
    setS(false); if (ok(r, concluir ? 'Salvo, obrigado!' : 'Reaberto')) onSalvo();
  };
  const subir = async e => {
    const arq = e.target.files[0]; if (!arq) return;
    setS(true); const path = await enviarArquivo(cid, 'primeiros-passos', arq); setS(false);
    if (path) salvar(true, 'arquivo:' + path);
  };
  if (i.tipo_resposta === 'confirmacao') return html`<div class="acoes">${i.concluido ? html`<${Pill} k="ok">Feito<//><button class="lnk" onClick=${() => salvar(false, '')}>Desfazer</button>` : html`<button class="btn pri pq" disabled=${s} onClick=${() => salvar(true, 'Feito')}>Marcar como feito</button>`}</div>`;
  if (i.tipo_resposta === 'arquivo') return html`<div class="form" style="gap:8px">
    ${i.resposta && html`<div class="acoes"><${Pill} k="ok">Enviado<//>${i.resposta.startsWith('arquivo:') ? html`<button class="lnk" onClick=${() => abrirArquivo(i.resposta.slice(8))}>Ver arquivo</button>` : html`<a href=${i.resposta} target="_blank" rel="noopener">Ver link</a>`}</div>`}
    <label class="sub" for=${id}>${i.resposta ? 'Enviar outro arquivo' : 'Enviar arquivo'}</label><input id=${id} type="file" onChange=${subir} disabled=${s} />
    <details><summary class="sub" style="cursor:pointer">Prefere mandar um link (Google Drive, WeTransfer)?</summary><div class="acoes" style="margin-top:8px"><input aria-label="Link do arquivo" type="url" placeholder="https://…" value=${v.startsWith('arquivo:') ? '' : v} onInput=${e => setV(e.target.value)} style="flex:1;min-width:220px" /><button class="btn pq" disabled=${s} onClick=${() => salvar(true)}>Salvar link</button></div></details>
    ${s && html`<span class="sub">Enviando…</span>`}</div>`;
  let el;
  if (i.tipo_resposta === 'texto') el = html`<textarea id=${id} value=${v} onInput=${e => setV(e.target.value)}></textarea>`;
  else if (i.tipo_resposta === 'data') el = html`<input id=${id} type="date" value=${v} onInput=${e => setV(e.target.value)} />`;
  else el = html`<select id=${id} value=${v} onChange=${e => setV(e.target.value)}><option value="">Selecione…</option>${(i.opcoes || []).map(o => html`<option value=${o}>${o}</option>`)}</select>`;
  return html`<div class="form" style="gap:8px"><label for=${id} class="sub">Sua resposta</label>${el}
    <div class="acoes"><button class="btn pri pq" disabled=${s} onClick=${() => salvar(true)}>${i.concluido ? 'Atualizar' : 'Salvar'}</button>${i.concluido && html`<${Pill} k="ok">Enviado<//>`}</div></div>`;
}

const ABAS_PORTAL = [['/', 'Início'], ['/aprovacoes', 'Aprovações'], ['/calendario', 'Calendário'], ['/solicitacoes', 'Solicitações'], ['/resultados', 'Resultados'], ['/reunioes', 'Reuniões'], ['/financeiro', 'Financeiro']];
function Portal({ perfil, rota }) {
  const [d, setD] = useState(null);
  const cid = perfil.cliente_id;
  const carregar = async () => {
    const hoje = new Date().toISOString();
    const [cli, onb, posts, props, conts, cobs, reusF, reusP, nfs, sols, camps, cmet, rmet, tars, ents, cals] = await Promise.all([
      sb.from('clientes').select('nome_empresa').eq('id', cid).single(),
      sb.from('onboarding_itens').select('*').order('ordem'),
      sb.from('posts').select('*').neq('status', 'rascunho').order('data_publicacao'),
      sb.from('propostas').select('id,titulo,status,token_publico').order('criado_em', { ascending: false }),
      sb.from('contratos').select('*').order('criado_em', { ascending: false }),
      sb.from('cobrancas').select('*').order('vencimento'),
      sb.from('reunioes').select('*').gte('inicio', hoje).order('inicio'),
      sb.from('reunioes').select('*').lt('inicio', hoje).order('inicio', { ascending: false }).limit(12),
      sb.from('notas_fiscais').select('id,competencia,numero,valor,arquivo_path').eq('status', 'enviada').order('competencia', { ascending: false }),
      sb.from('solicitacoes').select('*').order('criado_em', { ascending: false }),
      sb.from('campanhas').select('*').order('nome'),
      sb.from('campanha_metricas').select('*').order('mes'),
      sb.from('redes_metricas').select('*').order('mes'),
      sb.from('tarefas').select('id,titulo,status,prazo,origem_reuniao_id'),
      sb.from('entregas').select('id,titulo,status,versao'),
      sb.from('calendarios').select('id,mes,prazo_aprovacao,status').order('mes')]);
    setD({ cli: cli.data, onb: onb.data || [], posts: posts.data || [], props: props.data || [], conts: conts.data || [], cobs: cobs.data || [], reusF: reusF.data || [], reusP: reusP.data || [],
      nfs: nfs.data || [], sols: sols.data || [], camps: camps.data || [], cmet: cmet.data || [], rmet: rmet.data || [], tars: tars.data || [], ents: ents.data || [], cals: cals.data || [] });
  };
  useEffect(() => { carregar(); }, []);
  if (!d) return html`<${Carregando} />`;
  const meus = d.onb.filter(i => i.responsavel === 'cliente'); const feitos = meus.filter(i => i.concluido).length;
  const onbAberto = meus.length > 0 && feitos < meus.length;
  const abas = [...ABAS_PORTAL.slice(0, 1), ...(d.onb.length ? [['/primeiros-passos', 'Projeto']] : []), ...ABAS_PORTAL.slice(1)];
  const atual = abas.some(a => a[0] === rota) ? rota : '/';
  let corpo;
  if (rota.startsWith('/contrato/')) corpo = html`<${PortalContrato} id=${rota.split('/')[2]} perfil=${perfil} onMudou=${carregar} />`;
  else if (atual === '/aprovacoes') corpo = html`<${PortalAprovacoes} cid=${cid} onMudou=${carregar} />`;
  else if (atual === '/calendario') corpo = html`<${CalendarioCliente} cid=${cid} onMudou=${carregar} legado=${html`<${PortalCalendario} posts=${d.posts.filter(p => !p.calendario_id)} onMudou=${carregar} />`} />`;
  else if (atual === '/solicitacoes') corpo = html`<${PortalSolicitacoes} sols=${d.sols} cid=${cid} onMudou=${carregar} />`;
  else if (atual === '/resultados') corpo = html`<${PortalResultados} d=${d} />`;
  else if (atual === '/reunioes') corpo = html`<${PortalReunioes} d=${d} />`;
  else if (atual === '/financeiro') corpo = html`<${PortalFinanceiro} d=${d} />`;
  else if (atual === '/primeiros-passos') corpo = html`<${PortalOnboarding} d=${d} meus=${meus} feitos=${feitos} cid=${cid} onMudou=${carregar} />`;
  else corpo = html`<${PortalInicio} d=${d} perfil=${perfil} meus=${meus} feitos=${feitos} onbAberto=${onbAberto} />`;
  return html`<div>
    <header class="portal-topo"><${Logo} /><div class="acoes"><span>${d.cli?.nome_empresa}</span><button class="btn pq" onClick=${() => sb.auth.signOut()}>Sair</button></div></header>
    <nav class="portal-abas" aria-label="Seções do portal">${abas.map(([p, t]) => html`<a href=${'#' + p} class=${atual === p ? 'on' : ''}>${t}${p === '/primeiros-passos' && onbAberto ? ' •' : ''}</a>`)}</nav>
    <main class="portal">${corpo}</main></div>`;
}

const proxCobs = d => { const h0 = hojeISO(); return d.cobs.filter(c => c.status === 'pendente' || c.status === 'vencida').map(c => ({ ...c, atrasada: c.status === 'vencida' || c.vencimento < h0 })); };
const PillEtapa = ({ i }) => i.concluido ? html`<${Pill} k="ok">Concluído<//>` : i.em_andamento ? html`<${Pill} k="warn">Em andamento<//>` : html`<${Pill}>Na fila<//>`;
function PortalInicio({ d, perfil, meus, feitos, onbAberto }) {
  const ag = d.onb.filter(i => i.responsavel === 'agencia'); const agFeitos = ag.filter(i => i.concluido).length;
  const aprovar = d.posts.filter(p => p.status === 'aguardando_aprovacao' && !p.calendario_id);
  const solVez = d.sols.filter(s => s.status === 'aguardando_cliente');
  const cobs = proxCobs(d); const atrasadas = cobs.filter(c => c.atrasada); const prox = cobs.find(c => !c.atrasada);
  const reu = d.reusF[0];
  const mesAt = hojeISO().slice(0, 7) + '-01';
  const ultMes = d.cmet.length ? d.cmet[d.cmet.length - 1].mes : null;
  const metMes = d.cmet.filter(m => m.mes === ultMes);
  const pend = [];
  if (onbAberto) pend.push(html`<div><div><b>Informações para começarmos</b><div class="sub">${feitos} de ${meus.length} itens enviados</div></div><a class="btn pq pri" href="#/primeiros-passos">Continuar</a></div>`);
  d.conts.filter(k => k.status === 'aguardando_assinatura' && !k.assinado_cliente_em).forEach(k => pend.push(html`<div><div><b>Contrato para assinar</b><div class="sub">Leia e assine eletronicamente, aqui mesmo no portal</div></div><a class="btn pq pri" href=${'#/contrato/' + k.id}>Ler e assinar</a></div>`));
  d.ents.filter(e => e.status === 'aguardando_aprovacao').forEach(e => pend.push(html`<div><div><b>${e.titulo}</b><div class="sub">Nova prévia para você revisar e aprovar · versão ${e.versao}</div></div><a class="btn pq pri" href="#/aprovacoes">Revisar</a></div>`));
  (d.cals || []).forEach(c => { const n = d.posts.filter(p => p.calendario_id === c.id && p.status === 'aguardando_aprovacao').length; if (n) pend.push(html`<div><div><b>Calendário de ${nomeMes(c.mes)}: ${n} post${n === 1 ? '' : 's'} para aprovar${c.prazo_aprovacao ? ' até ' + dd_mm(c.prazo_aprovacao) : ''}</b><div class="sub">Artes e legendas das redes sociais</div></div><a class="btn pq pri" href="#/calendario">Revisar</a></div>`); });
  if (aprovar.length) pend.push(html`<div><div><b>${aprovar.length} post(s) para aprovar</b><div class="sub">Artes e legendas do calendário</div></div><a class="btn pq pri" href="#/calendario">Revisar</a></div>`);
  solVez.forEach(s => pend.push(html`<div><div><b>${s.titulo}</b><div class="sub">A agência respondeu sua solicitação</div></div><a class="btn pq pri" href="#/solicitacoes">Ver</a></div>`));
  d.tars.filter(t => t.status === 'aguardando_cliente').forEach(t => pend.push(html`<div><div><b>${t.titulo}</b><div class="sub">Combinado em reunião${t.prazo ? ' · até ' + dataBR(t.prazo) : ''}</div></div><a class="btn pq" href="#/reunioes">Ver</a></div>`));
  atrasadas.forEach(c => pend.push(html`<div><div><b>Fatura em atraso</b><div class="sub">${c.descricao} · ${brl(c.valor)} · venceu ${dataBR(c.vencimento)}</div></div>${c.link_pagamento ? html`<a class="btn pq pri" href=${c.link_pagamento} target="_blank" rel="noopener">Pagar</a>` : html`<a class="btn pq" href="#/financeiro">Ver</a>`}</div>`));
  return html`<div><h1>Olá${perfil.nome ? ', ' + perfil.nome.split(' ')[0] : ''}!</h1><p class="sub">Tudo sobre o seu projeto com a Agência Baraúna em um só lugar.</p></div>
    <section class="card"><h2>Precisa de você</h2>${pend.length ? html`<div class="lista">${pend}</div>` : html`<p class="vazio" style="color:#08744A;font-weight:600">Tudo em dia ✓</p>`}</section>
    <div class="grid">
      <section class="card kpi"><p>Próximo pagamento</p>${prox ? html`<strong>${brl(prox.valor)}</strong><span class="sub">Vence em ${dataBR(prox.vencimento)}</span>` : html`<strong>—</strong><span class="sub">Nenhum pagamento pendente</span>`}</section>
      <section class="card kpi"><p>Próxima reunião</p>${reu ? html`<strong style="font-size:20px">${reu.titulo}</strong><span class="sub">${dataHora(reu.inicio)}</span>${reu.link_meet && html`<div style="margin-top:8px"><a class="btn pq pri" href=${reu.link_meet} target="_blank" rel="noopener">Entrar no Meet</a></div>`}` : html`<strong>—</strong><span class="sub">Nenhuma agendada</span>`}</section>
      <section class="card kpi"><p>Campanhas${ultMes ? ' · ' + mesBR(ultMes) : ''}</p>${metMes.length ? html`<strong>${inteiro(metMes.reduce((s, m) => s + m.conversoes, 0))} contatos</strong><span class="sub">${brl(metMes.reduce((s, m) => s + Number(m.investimento), 0))} investidos</span>` : html`<strong>—</strong><span class="sub">Resultados aparecem após o 1º mês</span>`}</section>
      <section class="card kpi"><p>Posts no mês</p><strong>${d.posts.filter(p => p.data_publicacao >= mesAt && p.data_publicacao < proxMes(mesAt.slice(0, 7))).length}</strong><span class="sub">${d.posts.filter(p => p.status === 'publicado' && p.data_publicacao >= mesAt).length} já publicados</span></section>
    </div>
    ${ag.length > 0 && html`<section class="card"><div style="display:flex;justify-content:space-between;gap:8px;flex-wrap:wrap"><h2>Estruturação do seu projeto</h2><span>${agFeitos} de ${ag.length} etapas concluídas</span></div>
      <div class="barra" style="margin:10px 0 14px"><i style=${'width:' + Math.round(agFeitos / ag.length * 100) + '%'}></i></div>
      ${agFeitos < ag.length ? html`<div class="lista">${[...ag.filter(i => i.em_andamento && !i.concluido), ...ag.filter(i => !i.em_andamento && !i.concluido)].slice(0, 4).map(i => html`<div><div><b>${i.titulo}</b><div class="sub">${i.categoria}</div></div><${PillEtapa} i=${i} /></div>`)}</div>` : html`<p class="vazio" style="color:#08744A;font-weight:600">Estruturação concluída ✓</p>`}
      <p style="margin:12px 0 0"><a href="#/primeiros-passos">Ver todas as etapas</a></p></section>`}
    <div class="acoes"><a class="btn pri" href="#/solicitacoes">Fazer uma solicitação</a><a class="btn" href="#/resultados">Ver resultados</a></div>`;
}

function PortalCalendario({ posts, onMudou }) {
  const [mes, setMes] = useState(() => hojeISO().slice(0, 7)); const [ab, setAb] = useState(null); const [com, setCom] = useState(''); const [s, setS] = useState(false);
  const [ano, mm] = mes.split('-').map(Number);
  const primeiro = new Date(ano, mm - 1, 1), inicio = new Date(primeiro); inicio.setDate(1 - ((primeiro.getDay() + 6) % 7));
  const diasCal = Array.from({ length: 42 }, (_, i) => { const x = new Date(inicio); x.setDate(inicio.getDate() + i); return x; });
  const iso = x => x.getFullYear() + '-' + String(x.getMonth() + 1).padStart(2, '0') + '-' + String(x.getDate()).padStart(2, '0');
  const semanas = diasCal[35].getMonth() === mm - 1 ? 6 : 5;
  const navegar = n => { const x = new Date(ano, mm - 1 + n, 1); setMes(iso(x).slice(0, 7)); };
  const decidir = async aprovar => {
    if (!aprovar && !com.trim()) return toast('Conte o que precisa ajustar', 'erro');
    setS(true);
    const r = await sb.from('posts').update({ status: aprovar ? 'aprovado' : 'ajuste_solicitado', comentario_cliente: aprovar ? null : com.trim() }).eq('id', ab.id);
    setS(false);
    if (ok(r, aprovar ? 'Post aprovado!' : 'Pedido de ajuste enviado')) { setAb(null); setCom(''); onMudou(); }
  };
  const doMes = posts.filter(p => p.data_publicacao.slice(0, 7) === mes);
  const imagem = u => /\.(png|jpe?g|webp|gif)(\?|$)/i.test(u || '');
  return html`<section class="card">
      <div class="topo" style="margin-bottom:12px"><div class="acoes"><button class="btn pq" onClick=${() => navegar(-1)} aria-label="Mês anterior">‹</button><h2>${tituloMes(primeiro)}</h2><button class="btn pq" onClick=${() => navegar(1)} aria-label="Próximo mês">›</button></div>
        <div class="acoes"><${Pill} k="info">${doMes.length} post(s)<//>${doMes.filter(p => p.status === 'aguardando_aprovacao').length > 0 && html`<${Pill} k="warn">${doMes.filter(p => p.status === 'aguardando_aprovacao').length} para aprovar<//>`}</div></div>
      <div class="tabela"><div class="cal">
        ${['Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb', 'Dom'].map(x => html`<b class="sub" style="padding:0 8px">${x}</b>`)}
        ${diasCal.slice(0, semanas * 7).map(x => { const k = iso(x); const ps = posts.filter(p => p.data_publicacao === k); return html`<div class=${'dia' + (x.getMonth() !== mm - 1 ? ' fora' : '')}><span>${x.getDate()}</span>
          ${ps.map(p => html`<button class="post" onClick=${() => { setAb(p); setCom(p.comentario_cliente || ''); }}><b>${p.titulo}</b><${PillDe} mapa=${ST_POST} v=${p.status} /></button>`)}</div>`; })}
      </div></div>
      <p class="sub" style="margin:12px 0 0">Clique em um post para ver a arte e a legenda. Os marcados como “Aguardando aprovação” precisam do seu ok.</p>
    </section>
    ${ab && html`<${Modal} titulo=${ab.titulo} onFechar=${() => setAb(null)}>
      <div class="acoes"><${PillDe} mapa=${ST_POST} v=${ab.status} /><span class="sub">${dataBR(ab.data_publicacao)} · ${(ab.canais || []).map(c => (CANAIS.find(x => x[0] === c) || [c, c])[1]).join(', ')}</span></div>
      ${ab.arte_url && (imagem(ab.arte_url) ? html`<img src=${ab.arte_url} alt=${'Arte do post ' + ab.titulo} style="width:100%;border-radius:12px;border:1px solid #DCE3DF" />` : html`<a class="btn" href=${ab.arte_url} target="_blank" rel="noopener">Ver arte</a>`)}
      ${ab.legenda && html`<div class="card" style="background:#F7F9F7"><span class="sub">Legenda</span><p style="margin:6px 0 0;white-space:pre-wrap">${ab.legenda}</p></div>`}
      ${['aguardando_aprovacao', 'ajuste_solicitado'].includes(ab.status) && html`<div class="form">
        <div class="campo"><label for="cmt">Precisa de ajuste? Conte o que mudar</label><textarea id="cmt" value=${com} onInput=${e => setCom(e.target.value)}></textarea></div>
        <div class="acoes"><button class="btn pri" disabled=${s} onClick=${() => decidir(true)}>Aprovar</button><button class="btn" disabled=${s} onClick=${() => decidir(false)}>Pedir ajuste</button></div></div>`}
    <//>`}`;
}

function PortalSolicitacoes({ sols, cid, onMudou }) {
  const [nova, setNova] = useState(false); const [ab, setAb] = useState(null);
  const [f, setF] = useState({ tipo: 'arte', titulo: '', descricao: '', prazo_desejado: '' }); const [arq, setArq] = useState(null); const [s, setS] = useState(false);
  const criar = async e => {
    e.preventDefault(); if (!f.titulo.trim()) return toast('Dê um título para o pedido', 'erro');
    setS(true);
    let anexo_path = null;
    if (arq) { anexo_path = await enviarArquivo(cid, 'solicitacoes', arq); if (!anexo_path) return setS(false); }
    const r = await sb.from('solicitacoes').insert({ cliente_id: cid, tipo: f.tipo, titulo: f.titulo.trim(), descricao: f.descricao || null, prazo_desejado: f.prazo_desejado || null, anexo_path });
    setS(false);
    if (ok(r, 'Solicitação enviada! A agência vai responder por aqui.')) { setNova(false); setF({ tipo: 'arte', titulo: '', descricao: '', prazo_desejado: '' }); setArq(null); onMudou(); }
  };
  return html`<div class="topo"><div><h1>Solicitações</h1><p class="sub">Peça campanhas, artes, posts ou ajustes e acompanhe cada pedido.</p></div><button class="btn pri" onClick=${() => setNova(true)}>Nova solicitação</button></div>
    <section class="card">${sols.length ? html`<div class="lista">${sols.map(x => html`<div><div><b>${x.titulo}</b><div class="sub">${(TIPOS_SOL.find(t => t[0] === x.tipo) || [])[1]} · aberta em ${dataBR(x.criado_em)}${x.prazo_desejado ? ' · prazo ' + dataBR(x.prazo_desejado) : ''}</div></div><div class="acoes"><${PillDe} mapa=${ST_SOL} v=${x.status} /><button class="btn pq" onClick=${() => setAb(x)}>Abrir</button></div></div>`)}</div>` : html`<p class="vazio">Você ainda não fez nenhuma solicitação.</p>`}</section>
    ${nova && html`<${Modal} titulo="Nova solicitação" onFechar=${() => setNova(false)}><form class="form" onSubmit=${criar}>
      <div class="campo"><label for="st">O que você precisa?</label><select id="st" value=${f.tipo} onChange=${e => setF({ ...f, tipo: e.target.value })}>${TIPOS_SOL.map(([k, l]) => html`<option value=${k}>${l}</option>`)}</select></div>
      <div class="campo"><label for="stt">Título *</label><input id="stt" value=${f.titulo} onInput=${e => setF({ ...f, titulo: e.target.value })} placeholder="Ex.: Arte para promoção de dezembro" /></div>
      <div class="campo"><label for="std">Detalhes</label><textarea id="std" value=${f.descricao} onInput=${e => setF({ ...f, descricao: e.target.value })} placeholder="Conte o objetivo, textos, referências…"></textarea></div>
      <div class="campo"><label for="stp">Para quando?</label><input id="stp" type="date" value=${f.prazo_desejado} onInput=${e => setF({ ...f, prazo_desejado: e.target.value })} /></div>
      <div class="campo"><label for="sta">Anexo (opcional)</label><input id="sta" type="file" onChange=${e => setArq(e.target.files[0] || null)} /></div>
      <div class="acoes"><button class="btn pri" type="submit" disabled=${s}>${s ? 'Enviando…' : 'Enviar solicitação'}</button><button class="btn" type="button" onClick=${() => setNova(false)}>Cancelar</button></div></form><//>`}
    ${ab && html`<${Modal} titulo=${ab.titulo} onFechar=${() => { setAb(null); onMudou(); }}><div class="acoes"><${PillDe} mapa=${ST_SOL} v=${ab.status} /></div><${Conversa} sol=${ab} agencia=${false} /><//>`}`;
}

function Barras({ dados, rotulo, fmt = inteiro }) {
  const max = Math.max(1, ...dados.map(x => x.v));
  return html`<div role="img" aria-label=${rotulo} style="display:flex;align-items:flex-end;gap:10px;height:150px;padding-top:20px">${dados.map(x => html`<div style="flex:1;display:flex;flex-direction:column;align-items:center;gap:6px;height:100%;justify-content:flex-end">
    <span class="sub" style="font-size:12px">${fmt(x.v)}</span><div style=${'width:100%;max-width:48px;border-radius:8px 8px 0 0;background:#10D885;height:' + Math.max(2, x.v / max * 100) + '%'}></div><span class="sub" style="font-size:12px;text-transform:capitalize">${x.l}</span></div>`)}</div>`;
}
function PortalResultados({ d }) {
  const meses = [...new Set(d.cmet.map(m => m.mes))].sort();
  const [mes, setMes] = useState(meses[meses.length - 1] || '');
  const doMes = d.cmet.filter(m => m.mes === mes);
  const tot = k => doMes.reduce((s, m) => s + Number(m[k] || 0), 0);
  const inv = tot('investimento'), conv = tot('conversoes'), cliq = tot('cliques');
  const ult6 = meses.slice(-6).map(mm => ({ l: mesBR(mm).split(' ')[0], v: d.cmet.filter(x => x.mes === mm).reduce((s, x) => s + x.conversoes, 0) }));
  const ativas = d.camps.filter(c => c.status === 'ativa');
  const redes = [...new Set(d.rmet.map(r => r.rede))];
  const mesAt = hojeISO().slice(0, 7);
  const varTag = (a, b) => { const v = pct(a, b); return v == null ? null : html`<${Pill} k=${v >= 0 ? 'ok' : 'bad'}>${(v >= 0 ? '+' : '') + v}% vs mês anterior<//>`; };
  return html`<div class="topo"><div><h1>Resultados</h1><p class="sub">Campanhas de tráfego pago e redes sociais.</p></div>
      ${meses.length > 0 && html`<div class="acoes"><label for="rm" class="sub">Mês das campanhas</label><select id="rm" style="width:auto" value=${mes} onChange=${e => setMes(e.target.value)}>${[...meses].reverse().map(mm => html`<option value=${mm}>${mesBR(mm)}</option>`)}</select></div>`}</div>
    <h2>Tráfego pago</h2>
    ${!d.camps.length ? html`<section class="card"><p class="vazio">Nenhuma campanha ativa no momento.</p></section>` : html`
      <div class="grid"><${Kpi} label="Investimento" valor=${brl(inv)} nota=${mes ? mesBR(mes) : 'Sem dados'} k="neu" /><${Kpi} label="Contatos gerados" valor=${inteiro(conv)} nota=${conv ? 'Conversões' : 'Sem dados ainda'} k="ok" /><${Kpi} label="Custo por contato" valor=${conv ? brl(inv / conv) : '—'} nota=${inteiro(cliq) + ' cliques'} k="info" /></div>
      <div class="cols"><div class="c2"><section class="card tabela"><h2>Campanhas ativas</h2><table><thead><tr><th>Campanha</th><th>Investimento</th><th>Cliques</th><th>Contatos</th><th>Custo/contato</th></tr></thead><tbody>
        ${ativas.map(c => { const m = doMes.find(x => x.campanha_id === c.id); return html`<tr><td><b>${c.nome}</b><div class="sub">${PLAT[c.plataforma]}${c.objetivo ? ' · ' + c.objetivo : ''}</div></td><td>${m ? brl(m.investimento) : '—'}</td><td>${m ? inteiro(m.cliques) : '—'}</td><td>${m ? inteiro(m.conversoes) : '—'}</td><td>${m && m.conversoes ? brl(m.investimento / m.conversoes) : '—'}</td></tr>`; })}
        </tbody></table>${doMes.filter(m => m.observacao).map(m => html`<p class="sub" style="margin:10px 0 0">💬 ${m.observacao}</p>`)}</section></div>
        <div class="c1"><section class="card"><h2>Contatos por mês</h2>${ult6.length ? html`<${Barras} dados=${ult6} rotulo="Contatos gerados nos últimos meses" />` : html`<p class="vazio">Sem histórico ainda.</p>`}</section></div></div>`}
    <h2>Redes sociais</h2>
    ${!redes.length ? html`<section class="card"><p class="vazio">Os números das redes aparecem aqui após o primeiro mês de trabalho.</p></section>` : html`<div class="grid">${redes.map(r => {
      const hist = d.rmet.filter(x => x.rede === r); const u = hist[hist.length - 1], a = hist[hist.length - 2];
      return html`<section class="card"><div style="display:flex;justify-content:space-between;gap:8px"><h2>${(REDES.find(x => x[0] === r) || [r, r])[1]}</h2><span class="sub">${mesBR(u.mes)}</span></div>
        <div class="lista"><div><span>Seguidores</span><span style="text-align:right"><b>${u.seguidores != null ? inteiro(u.seguidores) : '—'}</b>${a && u.seguidores != null && a.seguidores != null && html`<br />${varTag(u.seguidores, a.seguidores)}`}</span></div>
        <div><span>Alcance</span><b>${u.alcance != null ? inteiro(u.alcance) : '—'}</b></div><div><span>Interações</span><b>${u.engajamento != null ? inteiro(u.engajamento) : '—'}</b></div>${u.visitas_perfil != null && html`<div><span>Visitas ao perfil</span><b>${inteiro(u.visitas_perfil)}</b></div>`}</div>
        ${u.observacao && html`<p class="sub" style="margin:10px 0 0">💬 ${u.observacao}</p>`}</section>`; })}</div>`}
    <section class="card"><h2>Publicações</h2><div class="lista"><div><span>Posts publicados neste mês</span><b>${d.posts.filter(p => p.status === 'publicado' && p.data_publicacao.slice(0, 7) === mesAt).length}</b></div><div><span>Programados até o fim do mês</span><b>${d.posts.filter(p => ['aprovado', 'agendado'].includes(p.status) && p.data_publicacao.slice(0, 7) === mesAt).length}</b></div></div></section>`;
}

function PortalReunioes({ d }) {
  const tarefasDe = id => d.tars.filter(t => t.origem_reuniao_id === id);
  const stT = Object.fromEntries(ST_TAR);
  return html`<div><h1>Reuniões</h1><p class="sub">Próximos encontros, atas e o andamento do que foi combinado.</p></div>
    <section class="card"><h2>Próximas</h2>${d.reusF.length ? html`<div class="lista">${d.reusF.map(r => html`<div><div><b>${r.titulo}</b><div class="sub">${dataHora(r.inicio)}</div></div>${r.link_meet && html`<a class="btn pq pri" href=${r.link_meet} target="_blank" rel="noopener">Entrar no Meet</a>`}</div>`)}</div>` : html`<p class="vazio">Nenhuma reunião agendada.</p>`}</section>
    <h2>Anteriores</h2>
    ${d.reusP.length ? d.reusP.map(r => { const ts = tarefasDe(r.id); return html`<section class="card"><div style="display:flex;justify-content:space-between;gap:8px;flex-wrap:wrap"><h2>${r.titulo}</h2><span class="sub">${dataHora(r.inicio)}</span></div>
      ${r.ata ? html`<p style="margin:10px 0 0;white-space:pre-wrap">${r.ata}</p>` : html`<p class="vazio">Ata ainda não registrada.</p>`}
      ${ts.length > 0 && html`<h3 style="margin-top:14px">Combinados</h3><div class="lista">${ts.map(t => html`<div><span>${t.titulo}${t.prazo ? html`<span class="sub"> · até ${dataBR(t.prazo)}</span>` : ''}</span><${Pill} k=${t.status === 'concluido' ? 'ok' : t.status === 'aguardando_cliente' ? 'bad' : t.status === 'em_andamento' ? 'warn' : 'neu'}>${t.status === 'aguardando_cliente' ? 'Aguardando você' : stT[t.status]}<//></div>`)}</div>`}</section>`; }) : html`<section class="card"><p class="vazio">Nenhuma reunião registrada ainda.</p></section>`}`;
}

function PortalFinanceiro({ d }) {
  const prox = proxCobs(d).slice(0, 12); const pagas = d.cobs.filter(c => c.status === 'paga').sort((a, b) => a.vencimento < b.vencimento ? 1 : -1).slice(0, 6);
  return html`<div><h1>Financeiro</h1><p class="sub">Próximos pagamentos, histórico e notas fiscais.</p></div>
    <section class="card"><h2>Próximos pagamentos</h2>${prox.length ? html`<div class="lista">${prox.map(c => html`<div><div><b>${c.descricao}</b><div class="sub">Vence em ${dataBR(c.vencimento)}</div></div><div class="acoes"><b>${brl(c.valor)}</b>${c.atrasada ? html`<${Pill} k="bad">Em atraso<//>` : html`<${Pill} k="warn">A vencer<//>`}${c.link_pagamento && html`<a class="btn pq pri" href=${c.link_pagamento} target="_blank" rel="noopener">Pagar</a>`}</div></div>`)}</div>` : html`<p class="vazio">Nenhum pagamento pendente.</p>`}</section>
    <div class="cols"><div class="c2"><section class="card"><h2>Pagos recentemente</h2>${pagas.length ? html`<div class="lista">${pagas.map(c => html`<div><div><b>${c.descricao}</b><div class="sub">Pago em ${dataBR(c.pago_em || c.vencimento)}</div></div><div class="acoes"><b>${brl(c.valor_pago || c.valor)}</b><${Pill} k="ok">Pago<//></div></div>`)}</div>` : html`<p class="vazio">Nenhum pagamento registrado.</p>`}</section></div>
    <div class="c1">${d.nfs.length > 0 && html`<section class="card"><h2>Notas fiscais</h2><div class="lista">${d.nfs.map(n => html`<div><div><b>${compBR(n.competencia)}</b><div class="sub">${n.numero ? 'Nº ' + n.numero + ' · ' : ''}${brl(n.valor)}</div></div>${n.arquivo_path && html`<button class="btn pq" onClick=${() => abrirNota(n.arquivo_path)}>Baixar</button>`}</div>`)}</div></section>`}
      <section class="card"><h2>Propostas e contratos</h2><div class="lista">${d.props.map(p => html`<div><div><b>${p.titulo}</b><div class="sub">Proposta</div></div><div class="acoes"><${PillDe} mapa=${ST_PROP} v=${p.status} /><a class="btn pq" href=${'#/p/' + p.token_publico}>Abrir</a></div></div>`)}
        ${d.conts.map(c => html`<div><div><b>Contrato</b><div class="sub">${c.valor_unico > 0 ? brl(c.valor_unico) + ' + ' : ''}${brl(c.valor_mensal)}/mês</div></div><div class="acoes"><${PillDe} mapa=${ST_CONT} v=${c.status} />${c.conteudo ? html`<a class=${'btn pq' + (c.status === 'aguardando_assinatura' && !c.assinado_cliente_em ? ' pri' : '')} href=${'#/contrato/' + c.id}>${c.status === 'aguardando_assinatura' && !c.assinado_cliente_em ? 'Assinar' : 'Abrir'}</a>` : c.documento_url && html`<a class="btn pq" href=${c.documento_url} target="_blank" rel="noopener">Documento</a>`}</div></div>`)}
        ${!d.props.length && !d.conts.length && html`<p class="vazio">Nada por aqui.</p>`}</div></section></div></div>`;
}

function PortalOnboarding({ d, meus, feitos, cid, onMudou }) {
  const cats = [...new Set(meus.map(i => i.categoria))];
  const ag = d.onb.filter(i => i.responsavel === 'agencia'); const agFeitos = ag.filter(i => i.concluido).length;
  const catsAg = [...new Set(ag.map(i => i.categoria))];
  const [abertos, setAbertos] = useState({});
  const barra = (a, b) => html`<div class="barra"><i style=${'width:' + Math.round(a / Math.max(1, b) * 100) + '%'}></i></div>`;
  return html`<div><h1>Projeto</h1><p class="sub">O que precisamos de você e tudo o que a agência está estruturando para o seu projeto.</p></div>
    <div class="grid">
      ${meus.length > 0 && html`<section class="card"><div style="display:flex;justify-content:space-between;margin-bottom:8px"><b>Sua parte</b><span>${feitos} de ${meus.length}</span></div>${barra(feitos, meus.length)}</section>`}
      ${ag.length > 0 && html`<section class="card"><div style="display:flex;justify-content:space-between;margin-bottom:8px"><b>Nossa parte</b><span>${agFeitos} de ${ag.length}</span></div>${barra(agFeitos, ag.length)}</section>`}
    </div>
    ${meus.length > 0 && html`<h2>Sua parte</h2>
      <p class="sub" style="margin:-8px 0 0">${feitos === meus.length ? 'Tudo enviado, obrigado! Você pode revisar suas respostas.' : 'Nunca escreva senhas aqui: os acessos são liberados por convite, como indicado em cada item.'}</p>
      ${cats.map(c => { const its = meus.filter(i => i.categoria === c); const ok2 = its.filter(i => i.concluido).length; const aberto = abertos[c] ?? ok2 < its.length;
        return html`<section class="card"><button class="sanfona" aria-expanded=${aberto} onClick=${() => setAbertos({ ...abertos, [c]: !aberto })}><span class="sanfona-t">${c}</span><span class="acoes">${ok2 === its.length ? html`<${Pill} k="ok">Concluído<//>` : html`<span class="sub">${ok2} de ${its.length}</span>`}<span aria-hidden="true">${aberto ? '▴' : '▾'}</span></span></button>
          ${aberto && its.map(i => html`<div class="item"><div class="txt"><b>${i.titulo}${i.obrigatorio ? '' : ' (opcional)'}</b>${i.instrucoes && html`<span class="sub">${i.instrucoes}</span>`}<${CampoResposta} i=${i} cid=${cid} onSalvo=${onMudou} /></div></div>`)}</section>`; })}`}
    ${ag.length > 0 && html`<h2>Nossa parte: estruturação do projeto</h2>
      ${catsAg.map(c => { const its = ag.filter(i => i.categoria === c); const ok2 = its.filter(i => i.concluido).length;
        return html`<section class="card"><div style="display:flex;justify-content:space-between;gap:8px;margin-bottom:6px"><span class="sanfona-t">${c}</span>${ok2 === its.length ? html`<${Pill} k="ok">Concluído<//>` : html`<span class="sub">${ok2} de ${its.length}</span>`}</div>
          ${its.map(i => html`<div class="item"><div class="txt"><b class=${i.concluido ? 'feito' : ''}>${i.titulo}</b>${i.instrucoes && html`<span class="sub">${i.instrucoes}</span>`}${i.concluido_em && html`<span class="sub">Concluído em ${dataBR(i.concluido_em)}</span>`}</div><${PillEtapa} i=${i} /></div>`)}</section>`; })}`}`;
}

// ---------- raiz
// ---------- planos de anúncios (Google Ads e Meta Ads) para aprovação
const PLAT_ADS = { google: 'Google Ads', meta: 'Meta Ads' };
const CORRESP = [['ampla', 'Ampla'], ['frase', 'Frase'], ['exata', 'Exata']];
const CORRESP_EN = { ampla: 'Broad', frase: 'Phrase', exata: 'Exact' };
const fmtKw = (t, c) => c === 'exata' ? '[' + t + ']' : c === 'frase' ? '"' + t + '"' : t;
const lerKw = (linha, padrao) => {
  let t = String(linha).trim(), c = padrao;
  if (/^\[.*\]$/.test(t)) { c = 'exata'; t = t.slice(1, -1); } else if (/^".*"$/.test(t)) { c = 'frase'; t = t.slice(1, -1); }
  return { termo: t.trim().replace(/\s+/g, ' '), correspondencia: c };
};
const tam = s => [...String(s ?? '').trim()].length;
const LIM_G = { titulo: 30, descricao: 90, destaque: 25, snippet: 25, sl_texto: 25, sl_desc: 35 };
const LIM_M = { texto_principal: 125, titulo: 40, descricao: 30 };
const TIPOS_MT = [['texto_principal', 'Textos principais', 'Texto principal'], ['titulo', 'Títulos', 'Título'], ['descricao', 'Descrições', 'Descrição']];
const SNIP_CAB = [['Serviços', 'Service catalog'], ['Tipos', 'Types'], ['Marcas', 'Brands'], ['Modelos', 'Models'], ['Cursos', 'Courses'], ['Diplomas', 'Degree programs'], ['Destinos', 'Destinations'], ['Estilos', 'Styles'], ['Bairros', 'Neighborhoods'], ['Comodidades', 'Amenities'], ['Seguros', 'Insurance coverage'], ['Hotéis em destaque', 'Featured hotels'], ['Programas', 'Shows']];
const META_CTA = [['Saiba mais', 'LEARN_MORE'], ['Pedir orçamento', 'GET_QUOTE'], ['Fale conosco', 'CONTACT_US'], ['Cadastre-se', 'SIGN_UP'], ['Enviar mensagem', 'MESSAGE_PAGE'], ['Enviar mensagem no WhatsApp', 'WHATSAPP_MESSAGE'], ['Ligar agora', 'CALL_NOW'], ['Comprar agora', 'SHOP_NOW'], ['Baixar', 'DOWNLOAD'], ['Inscreva-se', 'SUBSCRIBE'], ['Reservar agora', 'BOOK_NOW'], ['Obter oferta', 'GET_OFFER'], ['Candidatar-se', 'APPLY_NOW'], ['Ver mais', 'SEE_MORE']];
const META_OBJ = ['Reconhecimento', 'Tráfego', 'Engajamento', 'Cadastros', 'Promoção do app', 'Vendas'];
const META_POS = ['Feed do Facebook', 'Feed do Instagram', 'Stories do Facebook', 'Stories do Instagram', 'Reels do Facebook', 'Reels do Instagram', 'Explorar do Instagram', 'Marketplace', 'Messenger', 'Audience Network'];
const GENEROS = [['todos', 'Todos'], ['masculino', 'Masculino'], ['feminino', 'Feminino']];
const FORMATOS_M = [['imagem', 'Imagem única'], ['carrossel', 'Carrossel'], ['video', 'Vídeo']];
const PROPORCOES = [['1:1', '1:1 (quadrado)'], ['4:5', '4:5 (vertical, feed)'], ['9:16', '9:16 (Stories e Reels)']];
const TITULO_PLANO = { google: 'Google Ads: palavras-chave e anúncios', meta: 'Meta Ads: públicos e anúncios' };
const urlMidia = p => URL_PREVIAS + String(p).split('/').map(encodeURIComponent).join('/');
const ehVideo = m => /^video\//.test(m.mime || '') || /\.(mp4|mov|webm)$/i.test(m.arquivo_path || '');
const linhasDe = t => String(t || '').split('\n').map(x => x.trim()).filter(Boolean);
const iniciais = n => String(n || '').replace(/[^A-Za-z0-9 ]/g, ' ').split(/\s+/).filter(Boolean).slice(0, 2).map(x => x[0]).join('').toLowerCase() || 'ad';
const normKw = t => String(t || '').toLowerCase().replace(/\s+/g, ' ').trim();
function conflitaNeg(kw, n) {
  const k = normKw(kw), t = normKw(n.termo);
  if (n.correspondencia === 'exata') return k === t;
  if (n.correspondencia === 'frase') return (' ' + k + ' ').includes(' ' + t + ' ');
  const ws = k.split(' '); return t.split(' ').every(w => ws.includes(w));
}

async function carregarPlanoAds(id) {
  const { data: p } = await sb.from('ads_planos').select('*, entregas(*), clientes(nome_empresa)').eq('id', id).maybeSingle();
  if (!p) return null;
  const em = (t, col, ids) => ids.length ? sb.from(t).select('*').in(col, ids).order('ordem').order('id') : Promise.resolve({ data: [] });
  const [g, neg, ext, conj, anu, marc, vers] = await Promise.all([
    sb.from('ads_grupos').select('*').eq('plano_id', id).order('ordem').order('id'),
    sb.from('ads_negativas').select('*').eq('plano_id', id).order('ordem').order('id'),
    sb.from('ads_extensoes').select('*').eq('plano_id', id).order('ordem').order('id'),
    sb.from('meta_conjuntos').select('*').eq('plano_id', id).order('ordem').order('id'),
    sb.from('meta_anuncios').select('*').eq('plano_id', id).order('ordem').order('id'),
    sb.from('ads_marcacoes').select('*').eq('plano_id', id).order('criado_em'),
    sb.from('ads_planos_versoes').select('versao,snapshot').eq('plano_id', id).eq('versao', (p.entregas?.versao || 1) - 1).maybeSingle()]);
  const gids = (g.data || []).map(x => x.id), aids = (anu.data || []).map(x => x.id);
  const [pal, tex, vin, mtx, mid] = await Promise.all([em('ads_palavras', 'grupo_id', gids), em('ads_textos', 'grupo_id', gids),
    aids.length ? sb.from('meta_anuncio_conjuntos').select('*').in('anuncio_id', aids) : Promise.resolve({ data: [] }),
    em('meta_textos', 'anuncio_id', aids), em('meta_midias', 'anuncio_id', aids)]);
  return { p, e: p.entregas, cliente: p.clientes?.nome_empresa || '', grupos: g.data || [], palavras: pal.data || [], textos: tex.data || [], negativas: neg.data || [], extensoes: ext.data || [],
    conjuntos: conj.data || [], anuncios: anu.data || [], vinculos: vin.data || [], mtextos: mtx.data || [], midias: mid.data || [], marcas: marc.data || [], anterior: vers.data?.snapshot || null };
}

// itens alterados desde a versão anterior (para o selo "Alterado")
function alteradosAds(P) {
  const s = P.anterior; if (!s) return new Set();
  const set = new Set();
  const cmp = (atuais, antigos, campos) => { const m = new Map((antigos || []).map(x => [x.id, x])); for (const x of atuais) { const o = m.get(x.id); if (!o || campos.some(c => JSON.stringify(o[c] ?? null) !== JSON.stringify(x[c] ?? null))) set.add(x.id); } };
  cmp(P.grupos, s.grupos, ['nome', 'descricao', 'url_final']);
  cmp(P.palavras, s.palavras, ['termo', 'correspondencia', 'subgrupo']);
  cmp(P.textos, s.textos, ['texto', 'fixado_posicao']);
  cmp(P.negativas, s.negativas, ['termo', 'correspondencia', 'grupo_id']);
  cmp(P.extensoes, s.extensoes, ['cabecalho', 'valores', 'texto', 'url', 'descricao1', 'descricao2']);
  cmp(P.conjuntos, s.conjuntos, ['nome', 'verba_percentual', 'verba_valor', 'localizacao', 'idade_min', 'idade_max', 'genero', 'interesses', 'publicos_personalizados', 'exclusoes', 'posicionamentos', 'expansao_publico', 'observacoes']);
  const comConj = P.anuncios.map(a => ({ ...a, conjuntos: P.vinculos.filter(v => v.anuncio_id === a.id).map(v => v.conjunto_id).sort() }));
  cmp(comConj, (s.anuncios || []).map(a => ({ ...a, conjuntos: [...(a.conjuntos || [])].sort() })), ['nome', 'formato', 'descricao_criativo', 'cta', 'url_destino', 'utm', 'conjuntos']);
  cmp(P.mtextos, s.meta_textos, ['texto']);
  cmp(P.midias, s.midias, ['arquivo_path', 'proporcao', 'titulo_cartao', 'descricao_cartao', 'url_cartao']);
  return set;
}

// pendências (bloqueiam o envio, iguais às do banco) e avisos
function problemasAds(P) {
  const r = [], av = [];
  if (P.p.plataforma === 'meta') {
    if (!P.conjuntos.length) r.push('O plano não tem conjuntos de anúncios');
    if (!P.anuncios.length) r.push('O plano não tem anúncios');
    for (const a of P.anuncios) {
      const tx = P.mtextos.filter(x => x.anuncio_id === a.id), md = P.midias.filter(x => x.anuncio_id === a.id);
      if (!tx.some(x => x.tipo === 'texto_principal')) r.push(a.nome + ': sem texto principal');
      if (!P.vinculos.some(v => v.anuncio_id === a.id)) r.push(a.nome + ': não está em nenhum conjunto');
      if (!md.length) r.push(a.nome + ': sem arte ou vídeo');
      if (a.formato === 'carrossel') { const n = md.filter(m => m.proporcao !== '9:16').length; if (n < 2 || n > 10) r.push(a.nome + ': o carrossel precisa de 2 a 10 cartões (tem ' + n + ')'); }
      if (!/^https?:\/\//i.test(a.url_destino || '') && !['Enviar mensagem', 'Enviar mensagem no WhatsApp', 'Ligar agora'].includes(a.cta)) r.push(a.nome + ': URL de destino ausente ou inválida');
      if (a.formato === 'video' && md.length && !md.some(m => m.proporcao === '9:16')) av.push(a.nome + ': falta a versão 9:16 do vídeo para Stories e Reels');
      for (const t of tx) if (tam(t.texto) > LIM_M[t.tipo]) av.push(a.nome + ': ' + (TIPOS_MT.find(x => x[0] === t.tipo) || [])[2] + ' com ' + tam(t.texto) + ' caracteres (recomendado até ' + LIM_M[t.tipo] + '); pode ser cortado');
    }
    const soma = P.conjuntos.reduce((s, c) => s + Number(c.verba_percentual || 0), 0);
    if (P.conjuntos.some(c => c.verba_percentual != null) && Math.round(soma) !== 100) av.push('A divisão da verba entre os conjuntos soma ' + soma + '%');
    return { r, av };
  }
  if (!P.grupos.length) r.push('O plano não tem grupos de anúncios');
  for (const g of P.grupos) {
    const tx = P.textos.filter(x => x.grupo_id === g.id), nt = tx.filter(x => x.tipo === 'titulo').length, nd = tx.filter(x => x.tipo === 'descricao').length;
    if (nt < 3) r.push(g.nome + ': mínimo de 3 títulos (tem ' + nt + ')'); else if (nt < 8) av.push(g.nome + ': o Google recomenda pelo menos 8 títulos (tem ' + nt + ')');
    if (nd < 2) r.push(g.nome + ': mínimo de 2 descrições (tem ' + nd + ')');
    if (!P.palavras.some(k => k.grupo_id === g.id)) r.push(g.nome + ': sem palavras-chave');
    if (!/^https?:\/\//i.test(g.url_final || '')) r.push(g.nome + ': URL final ausente ou inválida');
    for (const t of tx) if (tam(t.texto) > LIM_G[t.tipo]) r.push(g.nome + ': ' + (t.tipo === 'titulo' ? 'título' : 'descrição') + ' acima do limite');
  }
  const vistos = new Set();
  for (const k of P.palavras) { const ch = normKw(k.termo) + '|' + k.correspondencia; if (vistos.has(ch)) av.push('Palavra-chave repetida: ' + fmtKw(k.termo, k.correspondencia)); vistos.add(ch); }
  for (const k of P.palavras) for (const n of P.negativas) if ((!n.grupo_id || n.grupo_id === k.grupo_id) && conflitaNeg(k.termo, n)) av.push(fmtKw(k.termo, k.correspondencia) + ' é bloqueada pela negativa ' + fmtKw(n.termo, n.correspondencia));
  return { r, av };
}

// ---------- componentes compartilhados
const Cont = ({ n, max, aviso }) => html`<span class=${'ads-cont' + (n > max ? (aviso ? ' av' : ' over') : '')} aria-label=${n + ' de ' + max + ' caracteres'}>${n}/${max}</span>`;
const SeloAlt = ({ alt, id }) => alt && alt.has(id) ? html`<span class="ads-alt">Alterado</span>` : null;

// campo de texto que salva ao sair, com contador ao vivo
function TextoLim({ valor = '', max, aviso, area, onSalvar, ph, rotulo }) {
  const [v, setV] = useState(valor); useEffect(() => setV(valor), [valor]);
  const n = tam(v);
  const sair = async () => {
    if (v.trim() === String(valor).trim()) return;
    if (!v.trim()) { setV(valor); return toast('O texto não pode ficar vazio', 'erro'); }
    if (max && n > max && !aviso) { return toast('Passou do limite de ' + max + ' caracteres', 'erro'); }
    const r = await onSalvar(v.trim()); if (r === false) setV(valor);
  };
  const p = { value: v, onInput: e => setV(e.target.value), onBlur: sair, placeholder: ph || '', 'aria-label': rotulo, class: max && n > max ? (aviso ? 'ads-in av' : 'ads-in over') : 'ads-in' };
  return html`<div class="ads-campo">${area ? html`<textarea rows="2" ...${p}></textarea>` : html`<input ...${p} onKeyDown=${e => e.key === 'Enter' && e.target.blur()} />`}${max && html`<${Cont} n=${n} max=${max} aviso=${aviso} />`}</div>`;
}

// novo item com contador
function NovoTexto({ max, aviso, area, ph, rotulo = 'Adicionar', onAdd, desab }) {
  const [v, setV] = useState(''); const n = tam(v);
  const add = async () => { if (!v.trim()) return; if (max && n > max && !aviso) return toast('Passou do limite de ' + max + ' caracteres', 'erro'); if (await onAdd(v.trim()) !== false) setV(''); };
  const p = { value: v, onInput: e => setV(e.target.value), placeholder: ph || '', 'aria-label': ph, class: max && n > max ? (aviso ? 'ads-in av' : 'ads-in over') : 'ads-in', disabled: desab };
  return html`<div class="ads-novo"><div class="ads-campo">${area ? html`<textarea rows="2" ...${p}></textarea>` : html`<input ...${p} onKeyDown=${e => e.key === 'Enter' && (e.preventDefault(), add())} />`}${max && html`<${Cont} n=${n} max=${max} aviso=${aviso} />`}</div><button class="btn pq" type="button" disabled=${desab || !v.trim()} onClick=${add}>${rotulo}</button></div>`;
}

// marcações do cliente sobre um item (lado da equipe e do cliente)
function MarcasItem({ P, alvo, agencia, onMudou }) {
  const l = P.marcas.filter(m => m.alvo_id === alvo);
  if (!l.length) return null;
  const resolver = async (m, v) => { if (ok(await sb.from('ads_marcacoes').update({ resolvido: v }).eq('id', m.id), v ? 'Marcado como resolvido' : 'Reaberto')) onMudou(); };
  return html`<div class="ads-marcas">${l.map(m => html`<div class=${'ads-marca' + (m.resolvido ? ' ok' : '')}><span class="sub">${m.autor_agencia ? 'Agência' : 'Cliente'} · v${m.versao} · ${dataHora(m.criado_em)}${m.resolvido ? ' · resolvido' : ''}</span><p>${m.comentario}</p>
    ${agencia && html`<button class="lnk" onClick=${() => resolver(m, !m.resolvido)}>${m.resolvido ? 'Reabrir' : 'Marcar como resolvido'}</button>`}</div>`)}</div>`;
}

// botão "Comentar / pedir ajuste" do cliente em cada item
function AcaoItem({ P, tipo, alvo, ctx }) {
  const [ab, setAb] = useState(false); const [t, setT] = useState(''); const [s, setS] = useState(false);
  const l = P.marcas.filter(m => m.alvo_id === alvo), abertas = l.filter(m => !m.resolvido).length;
  if (!ctx.podeMarcar && !l.length) return null;
  const enviar = async e => { e.preventDefault(); if (!t.trim()) return; setS(true); const r = await sb.from('ads_marcacoes').insert({ plano_id: P.p.id, alvo_tipo: tipo, alvo_id: alvo, comentario: t.trim() }); setS(false); if (ok(r, 'Pedido de ajuste registrado')) { setT(''); setAb(false); ctx.onMudou(); } };
  return html`<div class="ads-acao"><button class=${'ads-acao-btn' + (l.length ? ' tem' : '')} type="button" aria-expanded=${ab} onClick=${() => setAb(!ab)}>${l.length ? '💬 ' + l.length + (abertas ? '' : ' ✓') : 'Comentar / pedir ajuste'}</button>
    ${ab && html`<div class="ads-acao-caixa">${l.map(m => html`<div class=${'ads-marca' + (m.resolvido ? ' ok' : '')}><span class="sub">${m.autor_agencia ? 'Agência' : 'Você'} · v${m.versao}${m.resolvido ? ' · resolvido pela agência' : ''}</span><p>${m.comentario}</p></div>`)}
      ${ctx.podeMarcar && html`<form class="form" style="gap:8px" onSubmit=${enviar}><textarea value=${t} onInput=${e => setT(e.target.value)} placeholder="O que você quer mudar neste item?" aria-label="Comentário sobre este item" style="min-height:64px"></textarea><div class="acoes"><button class="btn pq pri" type="submit" disabled=${s || !t.trim()}>${s ? 'Enviando…' : 'Enviar'}</button><button class="btn pq" type="button" onClick=${() => setAb(false)}>Fechar</button></div></form>`}</div>`}</div>`;
}

// ---------- visão do plano (portal do cliente e prévia da equipe)
function SerpPrevia({ P, g }) {
  const tx = P.textos.filter(x => x.grupo_id === g.id), tits = tx.filter(x => x.tipo === 'titulo'), descs = tx.filter(x => x.tipo === 'descricao');
  const [semente, setSemente] = useState(0);
  const comb = (() => {
    const emb = a => { const b = [...a]; let s = semente * 9301 + 49297; for (let i = b.length - 1; i > 0; i--) { s = (s * 9301 + 49297) % 233280; const j = Math.floor(s / 233280 * (i + 1)); [b[i], b[j]] = [b[j], b[i]]; } return b; };
    const pos = [1, 2, 3].map(n => { const f = tits.filter(t => t.fixado_posicao === n); return f.length ? emb(f)[0] : null; });
    const livres = emb(tits.filter(t => !t.fixado_posicao)); const ts = pos.map(x => x || livres.shift()).filter(Boolean);
    return { ts: semente === 0 ? (pos.some(Boolean) ? ts : tits.slice(0, 3)) : ts, ds: semente === 0 ? descs.slice(0, 2) : emb(descs).slice(0, 2) };
  })();
  let url = ''; try { const u = new URL(g.url_final); url = u.hostname.replace(/^www\./, '') + (u.pathname.length > 1 ? ' › ' + u.pathname.split('/').filter(Boolean).join(' › ') : '') + (u.hash ? ' › ' + u.hash.slice(1) : ''); } catch (e) { url = g.url_final || 'site.com.br'; }
  return html`<div class="ads-serp-box"><div class="ads-serp" aria-label="Prévia do anúncio no Google"><span class="pat">Patrocinado</span><div class="url">${url}</div><div class="tit">${comb.ts.map(t => t.texto).join(' | ') || 'Título do anúncio'}</div><div class="des">${comb.ds.map(d => d.texto).join(' ')}</div></div>
    ${tits.length > 3 && html`<button class="lnk" onClick=${() => setSemente(semente + 1)}>Ver outra combinação</button>`}</div>`;
}

function TabelaTextos({ P, lista, max, alt, ctx, tipoAlvo = 'texto', fixado }) {
  return html`<div class="ads-rolagem"><table class="ads-tab"><thead><tr><th class="n">#</th><th>Texto</th>${fixado && html`<th>Posição</th>`}<th class="c">Caracteres</th><th class="a"><span class="sr">Ações</span></th></tr></thead><tbody>
    ${lista.map((t, i) => html`<tr><td class="n">${i + 1}</td><td>${t.texto} <${SeloAlt} alt=${alt} id=${t.id} /></td>${fixado && html`<td class="sub">${t.fixado_posicao ? 'Fixado na ' + t.fixado_posicao + 'ª' : '—'}</td>`}<td class="c"><${Cont} n=${tam(t.texto)} max=${max} aviso=${tipoAlvo === 'meta_texto'} /></td><td class="a"><${AcaoItem} P=${P} tipo=${tipoAlvo} alvo=${t.id} ctx=${ctx} /></td></tr>`)}
  </tbody></table></div>`;
}

function VisaoGoogle({ P, ctx, alt }) {
  const { p } = P; const exts = t => P.extensoes.filter(x => x.tipo === t);
  return html`
    <h2 class="ads-h2">Estrutura</h2>
    <div class="ads-kpis">
      <div class="ads-card kpi"><b>1 campanha</b><span>Rede de ${p.rede || 'Pesquisa'} do Google</span></div>
      ${p.verba_mensal != null && html`<div class="ads-card kpi"><b>${brl(p.verba_mensal).replace(',00', '')}/mês</b><span>cerca de ${brl(p.verba_mensal / 30.4).replace(/,\d\d$/, '')} por dia</span></div>`}
      <div class="ads-card kpi"><b>${P.grupos.length} grupo${P.grupos.length === 1 ? '' : 's'}</b><span>${P.grupos.map(g => g.nome).join(' · ')}</span></div>
      ${(p.horario || p.regiao) && html`<div class="ads-card kpi"><b>${p.horario || 'Todos os dias'}</b><span>${[p.regiao, p.idioma && p.idioma.toLowerCase()].filter(Boolean).join(' · ')}</span></div>`}
    </div>
    ${(p.estrategia_lance || p.observacoes) && html`<div class="ads-card">${p.estrategia_lance && html`<p style="margin:0"><b>Estratégia de lances:</b> ${p.estrategia_lance}</p>`}${p.observacoes && html`<p style="margin:6px 0 0;white-space:pre-wrap">${p.observacoes}</p>`}</div>`}
    <div class="ads-cols">${P.grupos.map((g, i) => html`<div class="ads-card"><h3>Grupo ${i + 1} · ${g.nome} <${SeloAlt} alt=${alt} id=${g.id} /></h3>${g.descricao && html`<p class="ads-lead" style="margin:6px 0 0">${g.descricao}</p>`}</div>`)}</div>
    ${P.grupos.map((g, i) => { const ks = P.palavras.filter(k => k.grupo_id === g.id); const subs = []; ks.forEach(k => { const s = k.subgrupo || ''; let b = subs.find(x => x[0] === s); if (!b) subs.push(b = [s, []]); b[1].push(k); });
      return html`<h2 class="ads-h2">Palavras-chave · Grupo ${i + 1} · ${g.nome}</h2><p class="ads-lead">${ks.length} palavra${ks.length === 1 ? '' : 's'}-chave. Ampla = buscas relacionadas; Frase = a busca contém a expressão; Exata = a expressão ou variações muito próximas.</p>
      <div class="ads-rolagem"><table class="ads-tab"><thead><tr><th>Palavra-chave</th><th>Correspondência</th><th class="a"><span class="sr">Ações</span></th></tr></thead><tbody>
        ${subs.map(([s, l]) => html`${s && html`<tr class="sub"><td colspan="3">${s}</td></tr>`}${l.map(k => html`<tr><td><code class="ads-kw">${fmtKw(k.termo, k.correspondencia)}</code> <${SeloAlt} alt=${alt} id=${k.id} /></td><td>${(CORRESP.find(c => c[0] === k.correspondencia) || [])[1]}</td><td class="a"><${AcaoItem} P=${P} tipo="palavra" alvo=${k.id} ctx=${ctx} /></td></tr>`)}`)}
      </tbody></table></div>`; })}
    ${P.negativas.length > 0 && html`<h2 class="ads-h2">Palavras negativas</h2><p class="ads-lead">O anúncio não aparece para buscas com estes termos, que não costumam gerar clientes.</p>
      <div class="ads-card">${P.negativas.map(n => html`<div class="ads-neg-linha"><span class="ads-tag neg">${fmtKw(n.termo, n.correspondencia)}</span>${n.grupo_id && html`<span class="sub">só no grupo ${(P.grupos.find(g => g.id === n.grupo_id) || {}).nome}</span>`}<${SeloAlt} alt=${alt} id=${n.id} /><${AcaoItem} P=${P} tipo="negativa" alvo=${n.id} ctx=${ctx} /></div>`)}</div>`}
    ${P.grupos.map((g, i) => { const tx = P.textos.filter(x => x.grupo_id === g.id); const tits = tx.filter(x => x.tipo === 'titulo'), descs = tx.filter(x => x.tipo === 'descricao');
      return html`<h2 class="ads-h2">Anúncio · Grupo ${i + 1} · ${g.nome}</h2><p class="ads-lead">O Google combina os títulos e as descrições e mostra as combinações que funcionam melhor. Exemplo de como pode aparecer:</p>
      <${SerpPrevia} P=${P} g=${g} />
      <h3 class="ads-h3">${tits.length} título${tits.length === 1 ? '' : 's'} (até 30 caracteres)</h3><${TabelaTextos} P=${P} lista=${tits} max=${30} alt=${alt} ctx=${ctx} fixado=${tits.some(t => t.fixado_posicao)} />
      <h3 class="ads-h3">${descs.length} descriç${descs.length === 1 ? 'ão' : 'ões'} (até 90 caracteres)</h3><${TabelaTextos} P=${P} lista=${descs} max=${90} alt=${alt} ctx=${ctx} />`; })}
    ${exts('snippet').length > 0 && html`<h2 class="ads-h2">Snippets estruturados</h2><p class="ads-lead">Aparecem abaixo do anúncio como uma lista de itens.</p>${exts('snippet').map(x => html`<div class="ads-card ads-linha-acao"><div><b>${x.cabecalho}:</b> ${(x.valores || []).join(', ')} <${SeloAlt} alt=${alt} id=${x.id} /></div><${AcaoItem} P=${P} tipo="extensao" alvo=${x.id} ctx=${ctx} /></div>`)}`}
    ${exts('destaque').length > 0 && html`<h2 class="ads-h2">Frases de destaque</h2><p class="ads-lead">Até 25 caracteres cada, exibidas junto ao anúncio.</p><div class="ads-card">${exts('destaque').map(x => html`<div class="ads-neg-linha"><span class="ads-tag">${x.texto}</span><span class="sub">${tam(x.texto)}/25</span><${SeloAlt} alt=${alt} id=${x.id} /><${AcaoItem} P=${P} tipo="extensao" alvo=${x.id} ctx=${ctx} /></div>`)}</div>`}
    ${exts('sitelink').length > 0 && html`<h2 class="ads-h2">Sitelinks</h2><p class="ads-lead">Links extras para páginas do site, exibidos abaixo do anúncio.</p><div class="ads-cols">${exts('sitelink').map(x => html`<div class="ads-card"><b style="color:#1a0dab">${x.texto}</b> <${SeloAlt} alt=${alt} id=${x.id} /><div class="sub">${[x.descricao1, x.descricao2].filter(Boolean).join(' · ')}</div><div class="sub" style="word-break:break-all">${x.url}</div><${AcaoItem} P=${P} tipo="extensao" alvo=${x.id} ctx=${ctx} /></div>`)}</div>`}`;
}

// simulações de Feed do Instagram, Feed do Facebook e Stories/Reels
function MidiaMock({ m, cls }) {
  if (!m) return html`<div class=${'mk-vazio ' + (cls || '')}><span>Arte ainda não enviada</span></div>`;
  return ehVideo(m) ? html`<video class=${cls} src=${urlMidia(m.arquivo_path)} controls playsinline preload="metadata" aria-label="Vídeo do anúncio"></video>` : html`<img class=${cls} src=${urlMidia(m.arquivo_path)} alt="Arte do anúncio" loading="lazy" />`;
}
function MockMeta({ P, a }) {
  const tx = tipo => P.mtextos.filter(x => x.anuncio_id === a.id && x.tipo === tipo);
  const prin = tx('texto_principal'), tits = tx('titulo'), descs = tx('descricao');
  const md = P.midias.filter(m => m.anuncio_id === a.id);
  const feed = md.filter(m => m.proporcao !== '9:16'), story = md.find(m => m.proporcao === '9:16') || feed[0];
  const [i, setI] = useState(0); const [j, setJ] = useState(0); const [k, setK] = useState(0); const [c, setC] = useState(0);
  const tp = prin[i % (prin.length || 1)]?.texto || '', ti = tits[j % (tits.length || 1)]?.texto || '', de = descs[k % (descs.length || 1)]?.texto || '';
  const carrossel = a.formato === 'carrossel' && feed.length > 1, atual = carrossel ? feed[c % feed.length] : feed[0];
  const cta = a.cta || 'Saiba mais', marca = P.cliente, av = iniciais(marca);
  let dom = ''; try { dom = new URL(a.url_destino).hostname.replace(/^www\./, '').toUpperCase(); } catch (e) { }
  const tituloCard = carrossel ? (atual?.titulo_cartao || ti) : ti, descCard = carrossel ? (atual?.descricao_cartao || de) : de;
  const Nav = () => carrossel ? html`<div class="mk-nav"><button aria-label="Cartão anterior" onClick=${() => setC((c - 1 + feed.length) % feed.length)}>‹</button><span>${(c % feed.length) + 1}/${feed.length}</span><button aria-label="Próximo cartão" onClick=${() => setC((c + 1) % feed.length)}>›</button></div>` : null;
  const Sel = ({ l, v, set, nome }) => l.length > 1 ? html`<div class="mk-sel" role="group" aria-label=${nome}><span>${nome}:</span>${l.map((_, n) => html`<button class=${v % l.length === n ? 'on' : ''} aria-pressed=${v % l.length === n} onClick=${() => set(n)}>${n + 1}</button>`)}</div>` : null;
  return html`<div>
    ${(prin.length > 1 || tits.length > 1 || descs.length > 1) && html`<div class="mk-sels"><${Sel} l=${prin} v=${i} set=${setI} nome="Texto principal" /><${Sel} l=${tits} v=${j} set=${setJ} nome="Título" /><${Sel} l=${descs} v=${k} set=${setK} nome="Descrição" /></div>`}
    <div class="mk">
      <div><p class="mk-rot">Feed do Instagram</p><div class="mk-post"><div class="mk-topo"><span class="mk-av">${av}</span><div><b>${marca}</b><small>Patrocinado</small></div><span class="mk-dots">···</span></div>
        <div class="mk-midia"><${MidiaMock} m=${atual} /><${Nav} /></div><div class="mk-cta-ig"><span>${cta}</span><span>›</span></div><div class="mk-acoes-ig">♡ 💬 ➤</div><p class="mk-txt"><b>${marca}</b> ${tp}</p></div></div>
      <div><p class="mk-rot">Feed do Facebook</p><div class="mk-post"><div class="mk-topo"><span class="mk-av">${av}</span><div><b>${marca}</b><small>Patrocinado · 🌐</small></div><span class="mk-dots">···</span></div>
        <p class="mk-txt">${tp}</p><div class="mk-midia"><${MidiaMock} m=${atual} /><${Nav} /></div><div class="mk-rodape"><div><small>${dom}</small><b>${tituloCard}</b><span>${descCard}</span></div><span class="mk-btn-fb">${cta}</span></div></div></div>
      <div><p class="mk-rot">Stories e Reels</p><div class="mk-story"><${MidiaMock} m=${story} cls="mk-story-midia" /><div class="mk-st-top"><span class="mk-av">${av}</span><div><b>${marca}</b><small>Patrocinado</small></div></div><div class="mk-st-cta">⌃<br />${cta}</div></div></div>
    </div></div>`;
}

const dlItem = (rot, val) => val && (!Array.isArray(val) || val.length) ? html`<dt>${rot}</dt><dd>${Array.isArray(val) ? val.join(', ') : val}</dd>` : null;
function VisaoMeta({ P, ctx, alt }) {
  const { p } = P;
  return html`
    <h2 class="ads-h2">Estrutura da campanha</h2>
    <div class="ads-kpis">
      ${p.objetivo && html`<div class="ads-card kpi"><b>${p.objetivo}</b><span>Objetivo da campanha</span></div>`}
      ${p.verba_mensal != null && html`<div class="ads-card kpi"><b>${brl(p.verba_mensal).replace(',00', '')}/mês</b><span>cerca de ${brl(p.verba_mensal / 30.4).replace(/,\d\d$/, '')} por dia</span></div>`}
      <div class="ads-card kpi"><b>${P.conjuntos.length} conjunto${P.conjuntos.length === 1 ? '' : 's'}</b><span>${P.anuncios.length} anúncio${P.anuncios.length === 1 ? '' : 's'}</span></div>
      ${p.otimizacao && html`<div class="ads-card kpi"><b>Otimização</b><span>${p.otimizacao}</span></div>`}
    </div>
    <div class="ads-card"><dl class="ads-dl">${dlItem('Campanha', p.nome)}${dlItem('Região', p.regiao)}${dlItem('Medição', p.medicao)}${dlItem('Observações', p.observacoes)}</dl></div>
    <h2 class="ads-h2">Conjuntos de anúncios e públicos</h2><p class="ads-lead">Quem vai ver os anúncios, onde e com qual parte da verba.</p>
    ${P.conjuntos.map((c, i) => html`<div class="ads-card"><div class="ads-linha-acao"><h3>Conjunto ${i + 1} · ${c.nome}${c.verba_percentual != null && html`<span class="ads-badge">${Number(c.verba_percentual)}% da verba</span>`}${c.verba_valor != null && html`<span class="ads-badge">${brl(c.verba_valor)}</span>`} <${SeloAlt} alt=${alt} id=${c.id} /></h3><${AcaoItem} P=${P} tipo="conjunto" alvo=${c.id} ctx=${ctx} /></div>
      <dl class="ads-dl">${dlItem('Públicos personalizados', c.publicos_personalizados)}${dlItem('Exclusões', c.exclusoes)}${dlItem('Localização', c.localizacao)}${(c.idade_min || c.idade_max) && dlItem('Idade', (c.idade_min || 18) + ' a ' + (c.idade_max ? (c.idade_max === 65 ? '65+' : c.idade_max) : '65+') + ' anos')}${c.genero !== 'todos' && dlItem('Gênero', (GENEROS.find(g => g[0] === c.genero) || [])[1])}${dlItem('Interesses', c.interesses)}${dlItem('Expansão de público', c.expansao_publico ? 'Ativada' : 'Desativada')}${dlItem('Posicionamentos', c.posicionamentos)}${dlItem('Observações', c.observacoes)}</dl></div>`)}
    ${P.anuncios.map((a, i) => { const conj = P.vinculos.filter(v => v.anuncio_id === a.id).map(v => P.conjuntos.findIndex(c => c.id === v.conjunto_id) + 1).filter(Boolean).sort();
      const md = P.midias.filter(m => m.anuncio_id === a.id);
      return html`<div class="ads-linha-acao" style="margin-top:36px"><h2 class="ads-h2" style="margin:0">Anúncio ${i + 1} · ${a.nome} <${SeloAlt} alt=${alt} id=${a.id} /></h2><${AcaoItem} P=${P} tipo="anuncio" alvo=${a.id} ctx=${ctx} /></div>
      <p class="ads-lead">${(FORMATOS_M.find(f => f[0] === a.formato) || [])[1]}${a.formato === 'carrossel' ? ' (' + md.filter(m => m.proporcao !== '9:16').length + ' cartões)' : ''} · exibido em: ${conj.length ? (conj.length > 1 ? 'Conjuntos ' : 'Conjunto ') + conj.join(' e ') : '—'} · botão: <b>${a.cta || 'Saiba mais'}</b>${a.url_destino && html` · destino: <code>${a.url_destino.replace(/^https?:\/\/(www\.)?/, '')}</code>`}</p>
      ${a.descricao_criativo && html`<div class="ads-card"><b>Criativo:</b> ${a.descricao_criativo}</div>`}
      <${MockMeta} P=${P} a=${a} />
      ${md.length > 0 && html`<h3 class="ads-h3">Artes e vídeos para aprovar</h3><div class="ads-midias">${md.map((m, n) => html`<div class="ads-midia-item"><${MidiaMock} m=${m} cls="ads-thumb" /><div class="sub">${a.formato === 'carrossel' && m.proporcao !== '9:16' ? 'Cartão ' + (md.filter(x => x.proporcao !== '9:16').indexOf(m) + 1) + ' · ' : ''}${m.proporcao}${m.titulo_cartao ? ' · ' + m.titulo_cartao : ''} <${SeloAlt} alt=${alt} id=${m.id} /></div><${AcaoItem} P=${P} tipo="midia" alvo=${m.id} ctx=${ctx} /></div>`)}</div>`}
      ${TIPOS_MT.map(([t, rot]) => { const l = P.mtextos.filter(x => x.anuncio_id === a.id && x.tipo === t); return l.length ? html`<h3 class="ads-h3">${rot} (recomendado até ${LIM_M[t]} caracteres)</h3><${TabelaTextos} P=${P} lista=${l} max=${LIM_M[t]} alt=${alt} ctx=${ctx} tipoAlvo="meta_texto" />` : null; })}`; })}`;
}

function VisaoPlano({ P, ctx }) {
  const alt = alteradosAds(P);
  return html`<div class="ads">
    <header class="ads-capa"><small>Agência Baraúna · Proposta para aprovação</small><h1>${P.e?.titulo || TITULO_PLANO[P.p.plataforma]}</h1>${P.e?.descricao && html`<p>${P.e.descricao}</p>`}
      ${alt.size > 0 && html`<p class="ads-capa-alt">Versão ${P.e.versao}: ${alt.size} ite${alt.size === 1 ? 'm mudou' : 'ns mudaram'} desde a versão anterior (marcados como “Alterado”).</p>`}</header>
    ${P.p.plataforma === 'meta' ? html`<${VisaoMeta} P=${P} ctx=${ctx} alt=${alt} />` : html`<${VisaoGoogle} P=${P} ctx=${ctx} alt=${alt} />`}
  </div>`;
}

// plano dentro de Aprovações (cliente e equipe)
function PlanoAprovacao({ e, agencia, onMarcou }) {
  const [P, setP] = useState(undefined);
  const carregar = async () => { const { data } = await sb.from('ads_planos').select('id').eq('entrega_id', e.id).maybeSingle(); setP(data ? await carregarPlanoAds(data.id) : null); };
  useEffect(() => { carregar(); }, [e.id, e.versao, e.status]);
  if (P === undefined) return html`<${Carregando} />`;
  if (!P) return html`<p class="vazio">Plano não encontrado.</p>`;
  const ctx = { podeMarcar: !agencia && ['aguardando_aprovacao', 'ajuste_solicitado'].includes(e.status), onMudou: () => { carregar(); onMarcou && onMarcou(); } };
  return html`${agencia && html`<div class="acoes"><a class="btn pq pri" href=${'#/campanhas/planos/' + P.p.id}>Abrir no editor</a></div>`}<${VisaoPlano} P=${P} ctx=${ctx} />`;
}

// ---------- exportação
function baixarCSV(nome, linhas) {
  const cel = c => { const s = c == null ? '' : String(c); return /[",\n\r;]/.test(s) ? '"' + s.replace(/"/g, '""') + '"' : s; };
  const csv = '﻿' + linhas.map(l => l.map(cel).join(',')).join('\r\n');
  const a = document.createElement('a'); a.href = URL.createObjectURL(new Blob([csv], { type: 'text/csv;charset=utf-8' })); a.download = nome;
  document.body.appendChild(a); a.click(); a.remove(); setTimeout(() => URL.revokeObjectURL(a.href), 3000);
}
const DIAS_EN = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
function agendaEditor(h) {
  const t = String(h || '').toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '');
  const horas = /(\d{1,2})(?::(\d{2}))?\s*h?\s*(?:as|a|-|ate)\s*(\d{1,2})(?::(\d{2}))?\s*h/.exec(t);
  if (!horas) return '';
  const d = { dom: 0, seg: 1, ter: 2, qua: 3, qui: 4, sex: 5, sab: 6 };
  let dias;
  const f = /(dom|seg|ter|qua|qui|sex|sab)\w*\.?\s*(?:a|-|ate)\s*(dom|seg|ter|qua|qui|sex|sab)/.exec(t);
  if (f) { dias = []; for (let x = d[f[1]]; ; x = (x + 1) % 7) { dias.push(x); if (x === d[f[2]] || dias.length > 7) break; } }
  else if (/todos os dias|diariamente/.test(t)) dias = [0, 1, 2, 3, 4, 5, 6]; else return '';
  const hh = (a, b) => String(a).padStart(2, '0') + ':' + (b || '00');
  return dias.map(x => '(' + DIAS_EN[x] + '[' + hh(horas[1], horas[2]) + '-' + hh(horas[3], horas[4]) + '])').join(';');
}
function lanceEditor(t) { t = String(t || '').toLowerCase(); return /cpa/.test(t) ? 'Target CPA' : /roas/.test(t) ? 'Target ROAS' : /convers/.test(t) ? 'Maximize conversions' : /clique/.test(t) ? 'Maximize clicks' : /manual|cpc/.test(t) ? 'Manual CPC' : ''; }
function exportarGoogle(P) {
  const { p } = P, camp = p.nome;
  const H = ['Campaign', 'Campaign Type', 'Networks', 'Budget', 'Bid Strategy Type', 'Languages', 'Ad Schedule', 'Campaign Status', 'Location', 'Ad Group', 'Ad Group Status', 'Keyword', 'Criterion Type',
    ...Array.from({ length: 15 }, (_, i) => 'Headline ' + (i + 1)), ...Array.from({ length: 15 }, (_, i) => 'Headline ' + (i + 1) + ' position'), ...Array.from({ length: 4 }, (_, i) => 'Description ' + (i + 1)),
    'Final URL', 'Callout text', 'Header', 'Snippet Values', 'Link Text', 'Description line 1', 'Description line 2'];
  const L = [H]; const lin = o => L.push(H.map(h => o[h] ?? ''));
  lin({ Campaign: camp, 'Campaign Type': 'Search', Networks: 'Google Search', Budget: p.verba_mensal ? (p.verba_mensal / 30.4).toFixed(2) : '', 'Bid Strategy Type': lanceEditor(p.estrategia_lance),
    Languages: /portug/i.test(p.idioma || 'Português') ? 'pt' : '', 'Ad Schedule': agendaEditor(p.horario), 'Campaign Status': 'Paused' });
  String(p.regiao || '').split(/[;,]/).map(x => x.trim()).filter(Boolean).forEach(r => lin({ Campaign: camp, Location: /^brasil$/i.test(r) ? 'Brazil' : r }));
  for (const g of P.grupos) {
    lin({ Campaign: camp, 'Ad Group': g.nome, 'Ad Group Status': 'Enabled' });
    for (const k of P.palavras.filter(x => x.grupo_id === g.id)) lin({ Campaign: camp, 'Ad Group': g.nome, Keyword: k.termo, 'Criterion Type': CORRESP_EN[k.correspondencia] });
    for (const n of P.negativas.filter(x => x.grupo_id === g.id)) lin({ Campaign: camp, 'Ad Group': g.nome, Keyword: n.termo, 'Criterion Type': 'Negative ' + CORRESP_EN[n.correspondencia] });
    const tx = P.textos.filter(x => x.grupo_id === g.id), o = { Campaign: camp, 'Ad Group': g.nome, 'Final URL': g.url_final };
    tx.filter(x => x.tipo === 'titulo').forEach((t, i) => { o['Headline ' + (i + 1)] = t.texto; if (t.fixado_posicao) o['Headline ' + (i + 1) + ' position'] = t.fixado_posicao; });
    tx.filter(x => x.tipo === 'descricao').forEach((t, i) => { o['Description ' + (i + 1)] = t.texto; });
    lin(o);
  }
  for (const n of P.negativas.filter(x => !x.grupo_id)) lin({ Campaign: camp, Keyword: n.termo, 'Criterion Type': 'Campaign Negative ' + CORRESP_EN[n.correspondencia] });
  for (const x of P.extensoes) {
    if (x.tipo === 'destaque') lin({ Campaign: camp, 'Callout text': x.texto });
    else if (x.tipo === 'snippet') lin({ Campaign: camp, Header: (SNIP_CAB.find(c => c[0] === x.cabecalho) || [0, x.cabecalho])[1], 'Snippet Values': (x.valores || []).join(';') });
    else lin({ Campaign: camp, 'Link Text': x.texto, 'Description line 1': x.descricao1, 'Description line 2': x.descricao2, 'Final URL': x.url });
  }
  baixarCSV('google-ads-editor-' + (slug(P.cliente) || 'cliente') + '-v' + (P.e?.versao || 1) + '.csv', L);
}
function exportarMeta(P) {
  const { p } = P, J = l => (l || []).join(' | ');
  const H = ['Campanha', 'Objetivo', 'Otimização', 'Medição', 'Verba mensal (R$)', 'Conjunto', 'Verba do conjunto', 'Localização', 'Idade', 'Gênero', 'Interesses', 'Públicos personalizados', 'Exclusões', 'Posicionamentos', 'Expansão de público',
    'Anúncio', 'Formato', 'Botão (CTA)', 'CTA na API da Meta', 'URL de destino', 'Parâmetros UTM', 'Textos principais', 'Títulos', 'Descrições', 'Artes e vídeos (links)', 'Cartões do carrossel'];
  const L = [H];
  const linhaConj = c => c ? [c.nome, c.verba_percentual != null ? Number(c.verba_percentual) + '%' : c.verba_valor != null ? c.verba_valor : '', c.localizacao, (c.idade_min || c.idade_max) ? (c.idade_min || 18) + '-' + (c.idade_max || '65+') : '', (GENEROS.find(g => g[0] === c.genero) || [])[1], J(c.interesses), J(c.publicos_personalizados), J(c.exclusoes), J(c.posicionamentos), c.expansao_publico ? 'Sim' : 'Não'] : Array(10).fill('');
  const base = [p.nome, p.objetivo, p.otimizacao, p.medicao, p.verba_mensal];
  const usados = new Set();
  for (const a of P.anuncios) {
    const tx = t => J(P.mtextos.filter(x => x.anuncio_id === a.id && x.tipo === t).map(x => x.texto)), md = P.midias.filter(m => m.anuncio_id === a.id);
    const ad = [a.nome, (FORMATOS_M.find(f => f[0] === a.formato) || [])[1], a.cta, (META_CTA.find(c => c[0] === a.cta) || [])[1] || '', a.url_destino, a.utm, tx('texto_principal'), tx('titulo'), tx('descricao'),
      J(md.map(m => m.proporcao + ': ' + urlMidia(m.arquivo_path))), a.formato === 'carrossel' ? J(md.filter(m => m.proporcao !== '9:16').map((m, i) => (i + 1) + ') ' + [m.titulo_cartao, m.descricao_cartao, m.url_cartao].filter(Boolean).join(' / '))) : ''];
    const cs = P.vinculos.filter(v => v.anuncio_id === a.id).map(v => P.conjuntos.find(c => c.id === v.conjunto_id)).filter(Boolean);
    (cs.length ? cs : [null]).forEach(c => { if (c) usados.add(c.id); L.push([...base, ...linhaConj(c), ...ad]); });
  }
  P.conjuntos.filter(c => !usados.has(c.id)).forEach(c => L.push([...base, ...linhaConj(c), ...Array(11).fill('')]));
  baixarCSV('meta-ads-referencia-' + (slug(P.cliente) || 'cliente') + '-v' + (P.e?.versao || 1) + '.csv', L);
}

// ---------- tela da equipe: lista de planos
const AbasCampanhas = ({ at }) => html`<div class="tabs" role="group" aria-label="Campanhas">${[['/campanhas', 'Métricas'], ['/campanhas/planos', 'Planos de anúncios']].map(([r, t]) => html`<button class=${at === r ? 'on' : ''} onClick=${() => ir(r)}>${t}</button>`)}</div>`;
function PlanosAds() {
  const clientes = useLista('clientes', 'id,nome_empresa,status');
  const [l, setL] = useState(null); const [novo, setNovo] = useState(false); const [dup, setDup] = useState(null); const [f, setF] = useState('');
  const carregar = () => sb.from('ads_planos').select('id,nome,plataforma,atualizado_em,cliente_id,clientes(nome_empresa),entregas(id,status,versao,entrega_perguntas(id,resposta)),ads_marcacoes(id,resolvido)').order('atualizado_em', { ascending: false }).then(r => setL(r.data || []));
  useEffect(() => { carregar(); }, []);
  const criar = async v => {
    const { data: e, error } = await sb.from('entregas').insert({ cliente_id: v.cliente_id, tipo: 'trafego', titulo: TITULO_PLANO[v.plataforma], formato: 'plano', status: 'rascunho', descricao: v.plataforma === 'google' ? 'Campanha de Pesquisa no Google. Revise as palavras-chave e os anúncios, responda as perguntas e comente o que quiser ajustar.' : 'Campanha no Facebook e no Instagram. Revise os públicos, os anúncios e as artes, responda as perguntas e comente o que quiser ajustar.' }).select('id').single();
    if (error) return ok({ error });
    const r = await sb.from('ads_planos').insert({ entrega_id: e.id, cliente_id: v.cliente_id, plataforma: v.plataforma, nome: v.nome, rede: v.plataforma === 'google' ? 'Pesquisa' : 'Facebook e Instagram' }).select('id').single();
    if (r.error) { await sb.from('entregas').delete().eq('id', e.id); return ok(r); }
    toast('Plano criado'); ir('/campanhas/planos/' + r.data.id);
  };
  const duplicar = async v => { const r = await sb.rpc('ads_duplicar', { p_plano: dup.id, p_cliente: v.cliente_id, p_nome: v.nome || null }); if (!ok(r, 'Plano duplicado')) return false; ir('/campanhas/planos/' + r.data); };
  const vis = (l || []).filter(x => !f || x.cliente_id === f);
  return html`<${Topo} titulo="Campanhas" sub="Planos de anúncios do Google Ads e do Meta Ads que o cliente aprova pelo portal.">
      <label for="pc" class="sub">Cliente</label><select id="pc" style="width:auto" value=${f} onChange=${e => setF(e.target.value)}><option value="">Todos</option>${clientes.map(c => html`<option value=${c.id}>${c.nome_empresa}</option>`)}</select>
      <button class="btn pri" onClick=${() => setNovo(true)}>Novo plano</button><//>
    <${AbasCampanhas} at="/campanhas/planos" />
    ${!l ? html`<${Carregando} />` : html`<section class="card tabela"><table><thead><tr><th>Cliente</th><th>Plano</th><th>Plataforma</th><th>Versão</th><th>Perguntas</th><th>Ajustes pedidos</th><th>Status</th><th></th></tr></thead><tbody>
      ${vis.length ? vis.map(x => { const q = x.entregas?.entrega_perguntas || [], m = (x.ads_marcacoes || []).filter(y => !y.resolvido).length; return html`<tr><td><b>${x.clientes?.nome_empresa}</b></td><td>${x.nome}<div class="sub">${dataHora(x.atualizado_em)}</div></td><td>${PLAT_ADS[x.plataforma]}</td><td>v${x.entregas?.versao}</td><td>${q.length ? q.filter(y => y.resposta).length + ' de ' + q.length : '—'}</td><td>${m ? html`<${Pill} k="bad">${m} em aberto<//>` : '—'}</td><td><${PillDe} mapa=${ST_ENT} v=${x.entregas?.status} /></td>
        <td><div class="acoes"><a class="btn pq pri" href=${'#/campanhas/planos/' + x.id}>Abrir</a><button class="btn pq" onClick=${() => setDup(x)}>Duplicar</button></div></td></tr>`; }) : html`<tr><td colspan="8" class="vazio">Nenhum plano ainda. Crie o primeiro em “Novo plano”.</td></tr>`}
    </tbody></table></section>`}
    ${novo && html`<${FormModal} titulo="Novo plano de anúncios" inicial=${{ plataforma: 'google', cliente_id: f }} rotulo="Criar plano" onSalvar=${criar} onFechar=${() => setNovo(false)} campos=${[
      { n: 'cliente_id', l: 'Cliente', tipo: 'sel', op: opClientes(clientes), obrig: true }, { n: 'plataforma', l: 'Plataforma', tipo: 'sel', vazio: false, op: Object.entries(PLAT_ADS) },
      { n: 'nome', l: 'Nome da campanha', obrig: true, ph: 'Ex.: dev4lab · Pesquisa · Serviços myLIMS' }]} />`}
    ${dup && html`<${FormModal} titulo=${'Duplicar “' + dup.nome + '”'} inicial=${{ cliente_id: dup.cliente_id, nome: dup.nome + ' (cópia)' }} rotulo="Duplicar" onSalvar=${duplicar} onFechar=${() => setDup(null)} campos=${[
      { n: 'cliente_id', l: 'Para o cliente', tipo: 'sel', op: opClientes(clientes), obrig: true }, { n: 'nome', l: 'Nome da campanha', obrig: true, ajuda: 'A cópia é criada como rascunho, com as mesmas palavras, textos, extensões, públicos e perguntas.' }]} />`}`;
}

// ---------- tela da equipe: editor do plano
const mover = async (tabela, lista, i, d) => { const a = lista[i], b = lista[i + d]; if (!a || !b) return true; const oa = a.ordem === b.ordem ? i : a.ordem, ob = a.ordem === b.ordem ? i + d : b.ordem;
  const r1 = await sb.from(tabela).update({ ordem: ob }).eq('id', a.id); const r2 = await sb.from(tabela).update({ ordem: oa }).eq('id', b.id); return ok(r1) && ok(r2); };
const proxOrdem = l => l.reduce((m, x) => Math.max(m, x.ordem || 0), 0) + 1;
const BtnsLinha = ({ onCima, onBaixo, onExcluir, ordem = onCima !== undefined || onBaixo !== undefined }) => html`<div class="ads-btns">${ordem && html`<button class="ads-ic" aria-label="Mover para cima" disabled=${!onCima} onClick=${onCima || undefined}>↑</button><button class="ads-ic" aria-label="Mover para baixo" disabled=${!onBaixo} onClick=${onBaixo || undefined}>↓</button>`}${onExcluir && html`<button class="ads-ic x" aria-label="Excluir" onClick=${onExcluir}>×</button>`}</div>`;

function EditorPlanoAds({ id }) {
  const [P, setP] = useState(undefined); const [sec, setSec] = useState('estrutura'); const [gs, setGs] = useState(null); const [env, setEnv] = useState(false); const [dup, setDup] = useState(false);
  const clientes = useLista('clientes');
  const recarregar = async () => { const x = await carregarPlanoAds(id); setP(x); if (x && (!gs || !x.grupos.some(g => g.id === gs))) setGs(x.grupos[0]?.id || null); };
  useEffect(() => { recarregar(); }, [id]);
  if (P === undefined) return html`<${Carregando} />`;
  if (!P) return html`<${Topo} titulo="Plano não encontrado"><a class="btn" href="#/campanhas/planos">Voltar</a><//>`;
  const { p, e } = P, google = p.plataforma === 'google';
  const db = async (prom, msg) => { const r = await prom; if (!ok(r, msg)) return false; await recarregar(); return true; };
  const { r: probs, av } = problemasAds(P);
  const enviar = async () => {
    if (probs.length) return toast('Resolva as pendências antes de enviar', 'erro');
    const nova = e.status !== 'rascunho';
    if (!confirm(nova ? 'Enviar a versão ' + (e.versao + 1) + ' ao cliente? Ele verá o que mudou desde a versão ' + e.versao + '.' : 'Enviar o plano ao cliente para aprovação?')) return;
    setEnv(true); const r = await sb.rpc('ads_enviar', { p_plano: p.id }); setEnv(false);
    if (ok(r, nova ? 'Versão ' + r.data + ' enviada ao cliente' : 'Plano enviado ao cliente')) recarregar();
  };
  const exportar = () => { if (e.status !== 'aprovado' && !confirm('Este plano ainda não foi aprovado pelo cliente. Exportar mesmo assim?')) return; google ? exportarGoogle(P) : exportarMeta(P); };
  const duplicar = async v => { const r = await sb.rpc('ads_duplicar', { p_plano: p.id, p_cliente: v.cliente_id, p_nome: v.nome || null }); if (!ok(r, 'Plano duplicado')) return false; ir('/campanhas/planos/' + r.data); };
  const marcasAbertas = P.marcas.filter(m => !m.resolvido && !m.autor_agencia).length;
  const secoes = google ? [['estrutura', 'Estrutura'], ['grupos', 'Grupos'], ['palavras', 'Palavras-chave'], ['negativas', 'Negativas'], ['anuncios', 'Anúncios'], ['extensoes', 'Extensões'], ['perguntas', 'Perguntas'], ['previa', 'Ver como o cliente']]
    : [['estrutura', 'Estrutura'], ['conjuntos', 'Conjuntos e públicos'], ['anuncios', 'Anúncios'], ['perguntas', 'Perguntas'], ['previa', 'Ver como o cliente']];
  const ctxEq = { P, db, recarregar, gs, setGs };
  let corpo;
  if (sec === 'estrutura') corpo = html`<${EdEstrutura} key=${p.id + p.atualizado_em} ...${ctxEq} />`;
  else if (sec === 'grupos') corpo = html`<${EdGrupos} ...${ctxEq} />`;
  else if (sec === 'palavras') corpo = html`<${EdPalavras} ...${ctxEq} />`;
  else if (sec === 'negativas') corpo = html`<${EdNegativas} ...${ctxEq} />`;
  else if (sec === 'anuncios') corpo = google ? html`<${EdAnunciosG} ...${ctxEq} />` : html`<${EdAnunciosM} ...${ctxEq} />`;
  else if (sec === 'extensoes') corpo = html`<${EdExtensoes} ...${ctxEq} />`;
  else if (sec === 'conjuntos') corpo = html`<${EdConjuntos} ...${ctxEq} />`;
  else if (sec === 'perguntas') corpo = html`<${EdPerguntas} ...${ctxEq} />`;
  else corpo = html`<section class="card"><${VisaoPlano} P=${P} ctx=${{ podeMarcar: false, onMudou: recarregar }} /></section>`;
  return html`<${Topo} titulo=${p.nome} sub=${P.cliente + ' · ' + PLAT_ADS[p.plataforma] + ' · versão ' + e.versao}>
      <${PillDe} mapa=${ST_ENT} v=${e.status} />
      <button class="btn pq" onClick=${() => { toast('Rascunho salvo. As alterações dos itens são gravadas na hora.'); recarregar(); }}>Salvar rascunho</button>
      <button class="btn pq pri" disabled=${env || probs.length > 0} title=${probs.length ? 'Resolva as pendências antes de enviar' : ''} onClick=${enviar}>${e.status === 'rascunho' ? 'Enviar ao cliente' : 'Nova versão'}</button>
      <button class="btn pq" onClick=${exportar}>${google ? 'Exportar CSV para o Google Ads Editor' : 'Exportar planilha (CSV)'}</button>
      <button class="btn pq" onClick=${() => setDup(true)}>Duplicar plano</button><//>
    <div class="acoes"><a class="lnk" href="#/campanhas/planos">← Todos os planos</a>${marcasAbertas > 0 && html`<${Pill} k="bad">${marcasAbertas} pedido${marcasAbertas === 1 ? '' : 's'} de ajuste do cliente em aberto<//>`}</div>
    ${(probs.length > 0 || av.length > 0) && html`<section class="card ads-pend">${probs.length > 0 && html`<b>Pendências que impedem o envio</b><ul>${probs.map(x => html`<li>${x}</li>`)}</ul>`}${av.length > 0 && html`<b>Avisos</b><ul class="av">${av.slice(0, 12).map(x => html`<li>${x}</li>`)}${av.length > 12 && html`<li>e mais ${av.length - 12}…</li>`}</ul>`}</section>`}
    <div class="tabs" role="tablist" aria-label="Seções do plano">${secoes.map(([k, t]) => html`<button role="tab" aria-selected=${sec === k} class=${sec === k ? 'on' : ''} onClick=${() => setSec(k)}>${t}</button>`)}</div>
    ${corpo}
    ${dup && html`<${FormModal} titulo="Duplicar plano" inicial=${{ cliente_id: p.cliente_id, nome: p.nome + ' (cópia)' }} rotulo="Duplicar" onSalvar=${duplicar} onFechar=${() => setDup(false)} campos=${[{ n: 'cliente_id', l: 'Para o cliente', tipo: 'sel', op: opClientes(clientes), obrig: true }, { n: 'nome', l: 'Nome da campanha', obrig: true }]} />`}`;
}

function EdEstrutura({ P, db }) {
  const { p } = P, google = p.plataforma === 'google';
  const campos = google ? [['nome', 'Nome da campanha'], ['rede', 'Rede'], ['verba_mensal', 'Verba mensal (R$)', 'number'], ['horario', 'Horário', '', 'Ex.: Seg a sex, 7h às 19h'], ['regiao', 'Região', '', 'Ex.: Brasil'], ['idioma', 'Idioma'], ['estrategia_lance', 'Estratégia de lances', '', 'Ex.: Maximizar cliques com CPC máximo de R$ 6']]
    : [['nome', 'Nome da campanha'], ['objetivo', 'Objetivo', 'objetivo'], ['otimizacao', 'Otimização', '', 'Ex.: Conversões: envio do formulário'], ['verba_mensal', 'Verba mensal (R$)', 'number'], ['regiao', 'Região', '', 'Ex.: Brasil'], ['medicao', 'Medição', '', 'Ex.: Pixel da Meta + API de Conversões']];
  const [v, setV] = useState({ ...p, observacoes: p.observacoes || '' }); const [s, setS] = useState(false);
  const salvar = async ev => { ev.preventDefault(); if (!String(v.nome || '').trim()) return toast('Dê um nome à campanha', 'erro'); setS(true);
    const d = Object.fromEntries([...campos.map(c => c[0]), 'observacoes'].map(k => [k, k === 'verba_mensal' ? num(v[k]) : (String(v[k] ?? '').trim() || null)]));
    await db(sb.from('ads_planos').update(d).eq('id', p.id), 'Estrutura salva'); setS(false); };
  return html`<section class="card"><h2>Estrutura da campanha</h2><form class="form" onSubmit=${salvar}><div class="ads-form-grid">
    ${campos.map(([k, l, t, ph]) => html`<div class="campo"><label for=${'ae' + k}>${l}</label>${t === 'objetivo' ? html`<select id=${'ae' + k} value=${v[k] || ''} onChange=${x => setV({ ...v, [k]: x.target.value })}><option value="">Selecione…</option>${META_OBJ.map(o => html`<option>${o}</option>`)}</select>` : html`<input id=${'ae' + k} type=${t === 'number' ? 'number' : 'text'} step="0.01" value=${v[k] ?? ''} placeholder=${ph || ''} onInput=${x => setV({ ...v, [k]: x.target.value })} />`}</div>`)}</div>
    <div class="campo"><label for="aeobs">${google ? 'Observações para o cliente' : 'Período e observações'}</label><textarea id="aeobs" value=${v.observacoes} onInput=${x => setV({ ...v, observacoes: x.target.value })} placeholder=${google ? '' : 'Ex.: contínua, com revisão mensal'}></textarea></div>
    ${google && html`<p class="sub" style="margin:0">O horário no formato “Seg a sex, 7h às 19h” vira a programação de anúncios na exportação para o Google Ads Editor.</p>`}
    <div><button class="btn pri" type="submit" disabled=${s}>${s ? 'Salvando…' : 'Salvar estrutura'}</button></div></form></section>`;
}

function SelGrupo({ P, gs, setGs }) {
  return P.grupos.length > 1 ? html`<div class="tabs" role="group" aria-label="Grupo de anúncios">${P.grupos.map(g => html`<button class=${gs === g.id ? 'on' : ''} onClick=${() => setGs(g.id)}>${g.nome}</button>`)}</div>` : null;
}

function EdGrupos({ P, db }) {
  const [m, setM] = useState(null);
  const salvar = async v => { const d = { nome: v.nome, descricao: v.descricao || null, url_final: v.url_final || null }; return db(m.id ? sb.from('ads_grupos').update(d).eq('id', m.id) : sb.from('ads_grupos').insert({ ...d, plano_id: P.p.id, ordem: proxOrdem(P.grupos) }), 'Grupo salvo'); };
  const excluir = g => confirm('Excluir o grupo “' + g.nome + '” com todas as palavras-chave e anúncios dele?') && db(sb.from('ads_grupos').delete().eq('id', g.id), 'Grupo excluído');
  return html`<section class="card"><div class="topo" style="margin-bottom:12px"><h2>Grupos de anúncios</h2><button class="btn pq pri" onClick=${() => setM({})}>Novo grupo</button></div>
    ${P.grupos.length ? html`<div class="lista">${P.grupos.map((g, i) => html`<div><div style="min-width:0"><b>Grupo ${i + 1} · ${g.nome}</b><div class="sub">${g.descricao || 'Sem descrição'}</div><div class="sub" style="word-break:break-all">${g.url_final || 'Sem URL final'}</div></div>
      <div class="acoes"><button class="btn pq" onClick=${() => setM(g)}>Editar</button><${BtnsLinha} onCima=${i > 0 && (() => mover('ads_grupos', P.grupos, i, -1).then(() => db(Promise.resolve({}))))} onBaixo=${i < P.grupos.length - 1 && (() => mover('ads_grupos', P.grupos, i, 1).then(() => db(Promise.resolve({}))))} onExcluir=${() => excluir(g)} /></div></div>`)}</div>` : html`<p class="vazio">Nenhum grupo ainda.</p>`}
    ${m && html`<${FormModal} titulo=${m.id ? 'Editar grupo' : 'Novo grupo'} inicial=${m} onSalvar=${salvar} onFechar=${() => setM(null)} campos=${[{ n: 'nome', l: 'Nome do grupo', obrig: true, ph: 'Ex.: Serviços myLIMS' }, { n: 'descricao', l: 'Para quem é este grupo', tipo: 'area' }, { n: 'url_final', l: 'URL final', tipo: 'url', ph: 'https://…' }]} />`}</section>`;
}

function EdPalavras({ P, db, gs, setGs }) {
  const [txt, setTxt] = useState(''); const [sub, setSub] = useState(''); const [cp, setCp] = useState('ampla'); const [s, setS] = useState(false);
  const g = P.grupos.find(x => x.id === gs);
  if (!g) return html`<section class="card"><p class="vazio">Crie um grupo de anúncios primeiro.</p></section>`;
  const ks = P.palavras.filter(k => k.grupo_id === g.id);
  const add = async () => { const ls = linhasDe(txt).map(l => lerKw(l, cp)).filter(x => x.termo); if (!ls.length) return; const longas = ls.filter(x => tam(x.termo) > 80); if (longas.length) return toast('Palavra-chave com mais de 80 caracteres: ' + longas[0].termo, 'erro');
    setS(true); let o = proxOrdem(ks); const r = await db(sb.from('ads_palavras').insert(ls.map(x => ({ ...x, grupo_id: g.id, subgrupo: sub.trim() || null, ordem: o++ }))), ls.length + ' palavra(s)-chave adicionada(s)'); setS(false); if (r) setTxt(''); };
  const dups = new Map(); P.palavras.forEach(k => { const c = normKw(k.termo) + '|' + k.correspondencia; dups.set(c, (dups.get(c) || 0) + 1); });
  const subs = []; ks.forEach(k => { const t = k.subgrupo || ''; let b = subs.find(x => x[0] === t); if (!b) subs.push(b = [t, []]); b[1].push(k); });
  return html`<${SelGrupo} P=${P} gs=${gs} setGs=${setGs} />
    <section class="card"><h2>Adicionar palavras-chave · ${g.nome}</h2><div class="form">
      <div class="campo"><label for="kwt">Uma por linha</label><textarea id="kwt" value=${txt} onInput=${e => setTxt(e.target.value)} placeholder=${'suporte mylims\n"relatório mylims"\n[dev4lab]'}></textarea><span class="sub">Use "termo" para frase e [termo] para exata. Sem marcação, vale a correspondência escolhida abaixo.</span></div>
      <div class="ads-form-grid"><div class="campo"><label for="kws">Subgrupo</label><input id="kws" value=${sub} onInput=${e => setSub(e.target.value)} placeholder="Ex.: Suporte e ajuda" list="kwsubs" /><datalist id="kwsubs">${[...new Set(ks.map(k => k.subgrupo).filter(Boolean))].map(x => html`<option value=${x} />`)}</datalist></div>
        <div class="campo"><label for="kwc">Correspondência sem marcação</label><select id="kwc" value=${cp} onChange=${e => setCp(e.target.value)}>${CORRESP.map(([k, l]) => html`<option value=${k}>${l}</option>`)}</select></div></div>
      <div><button class="btn pri" disabled=${s || !txt.trim()} onClick=${add}>Adicionar</button></div></div></section>
    <section class="card"><h2>${ks.length} palavra${ks.length === 1 ? '' : 's'}-chave</h2>
      ${ks.length ? html`<div class="ads-rolagem"><table class="ads-tab"><thead><tr><th>Palavra-chave</th><th>Correspondência</th><th>Subgrupo</th><th class="a"><span class="sr">Ações</span></th></tr></thead><tbody>
      ${subs.map(([t, l]) => html`${t && html`<tr class="sub"><td colspan="4">${t}</td></tr>`}${l.map(k => { const i = ks.indexOf(k), conf = P.negativas.filter(n => (!n.grupo_id || n.grupo_id === g.id) && conflitaNeg(k.termo, n));
        return html`<tr><td><code class="ads-kw">${fmtKw(k.termo, k.correspondencia)}</code>${dups.get(normKw(k.termo) + '|' + k.correspondencia) > 1 && html` <${Pill} k="warn">repetida<//>`}${conf.length > 0 && html` <${Pill} k="bad">bloqueada por ${fmtKw(conf[0].termo, conf[0].correspondencia)}<//>`}<${MarcasItem} P=${P} alvo=${k.id} agencia=${true} onMudou=${() => db(Promise.resolve({}))} /></td>
          <td><select aria-label="Correspondência" value=${k.correspondencia} onChange=${e => db(sb.from('ads_palavras').update({ correspondencia: e.target.value }).eq('id', k.id))}>${CORRESP.map(([c, n]) => html`<option value=${c}>${n}</option>`)}</select></td>
          <td><${TextoLim} valor=${k.subgrupo || ''} rotulo="Subgrupo" onSalvar=${x => db(sb.from('ads_palavras').update({ subgrupo: x }).eq('id', k.id))} /></td>
          <td class="a"><${BtnsLinha} onCima=${i > 0 && (() => mover('ads_palavras', ks, i, -1).then(() => db(Promise.resolve({}))))} onBaixo=${i < ks.length - 1 && (() => mover('ads_palavras', ks, i, 1).then(() => db(Promise.resolve({}))))} onExcluir=${() => db(sb.from('ads_palavras').delete().eq('id', k.id))} /></td></tr>`; })}`)}
      </tbody></table></div>` : html`<p class="vazio">Nenhuma palavra-chave neste grupo.</p>`}</section>`;
}

function EdNegativas({ P, db }) {
  const [txt, setTxt] = useState(''); const [esc, setEsc] = useState(''); const [cp, setCp] = useState('ampla'); const [s, setS] = useState(false);
  const add = async () => { const ls = linhasDe(txt).map(l => lerKw(l, cp)).filter(x => x.termo); if (!ls.length) return; setS(true); let o = proxOrdem(P.negativas);
    const r = await db(sb.from('ads_negativas').insert(ls.map(x => ({ ...x, plano_id: P.p.id, grupo_id: esc || null, ordem: o++ }))), ls.length + ' negativa(s) adicionada(s)'); setS(false); if (r) setTxt(''); };
  return html`<section class="card"><h2>Adicionar palavras negativas</h2><div class="form">
      <div class="campo"><label for="ngt">Uma por linha</label><textarea id="ngt" value=${txt} onInput=${e => setTxt(e.target.value)} placeholder=${'grátis\nvagas\n"o que significa"'}></textarea></div>
      <div class="ads-form-grid"><div class="campo"><label for="nge">Vale para</label><select id="nge" value=${esc} onChange=${e => setEsc(e.target.value)}><option value="">A campanha toda</option>${P.grupos.map(g => html`<option value=${g.id}>Só o grupo ${g.nome}</option>`)}</select></div>
        <div class="campo"><label for="ngc">Correspondência sem marcação</label><select id="ngc" value=${cp} onChange=${e => setCp(e.target.value)}>${CORRESP.map(([k, l]) => html`<option value=${k}>${l}</option>`)}</select></div></div>
      <div><button class="btn pri" disabled=${s || !txt.trim()} onClick=${add}>Adicionar</button></div></div></section>
    <section class="card"><h2>${P.negativas.length} negativa${P.negativas.length === 1 ? '' : 's'}</h2>${P.negativas.length ? html`<div>${P.negativas.map(n => html`<div class="ads-neg-linha"><span class="ads-tag neg">${fmtKw(n.termo, n.correspondencia)}<button class="ads-tag-x" aria-label=${'Excluir ' + n.termo} onClick=${() => db(sb.from('ads_negativas').delete().eq('id', n.id))}>×</button></span><span class="sub">${n.grupo_id ? 'grupo ' + (P.grupos.find(g => g.id === n.grupo_id) || {}).nome : 'campanha'}</span><${MarcasItem} P=${P} alvo=${n.id} agencia=${true} onMudou=${() => db(Promise.resolve({}))} /></div>`)}</div>` : html`<p class="vazio">Nenhuma negativa.</p>`}</section>`;
}

function ListaTextosG({ P, db, g, tipo }) {
  const l = P.textos.filter(x => x.grupo_id === g.id && x.tipo === tipo), max = LIM_G[tipo], lim = tipo === 'titulo' ? 15 : 4;
  return html`<div class="ads-lista-txt">${l.map((t, i) => html`<div class="ads-txt-linha"><span class="n">${i + 1}</span><${TextoLim} valor=${t.texto} max=${max} area=${tipo === 'descricao'} rotulo=${(tipo === 'titulo' ? 'Título ' : 'Descrição ') + (i + 1)} onSalvar=${x => db(sb.from('ads_textos').update({ texto: x }).eq('id', t.id))} />
      ${tipo === 'titulo' && html`<select class="ads-fix" aria-label="Fixar posição" value=${t.fixado_posicao || ''} onChange=${e => db(sb.from('ads_textos').update({ fixado_posicao: e.target.value ? Number(e.target.value) : null }).eq('id', t.id))}><option value="">Não fixado</option><option value="1">Fixar na 1ª</option><option value="2">Fixar na 2ª</option><option value="3">Fixar na 3ª</option></select>`}
      <${BtnsLinha} onCima=${i > 0 && (() => mover('ads_textos', l, i, -1).then(() => db(Promise.resolve({}))))} onBaixo=${i < l.length - 1 && (() => mover('ads_textos', l, i, 1).then(() => db(Promise.resolve({}))))} onExcluir=${() => db(sb.from('ads_textos').delete().eq('id', t.id))} />
      <${MarcasItem} P=${P} alvo=${t.id} agencia=${true} onMudou=${() => db(Promise.resolve({}))} /></div>`)}
    <${NovoTexto} max=${max} area=${tipo === 'descricao'} ph=${tipo === 'titulo' ? 'Novo título' : 'Nova descrição'} desab=${l.length >= lim} onAdd=${x => db(sb.from('ads_textos').insert({ grupo_id: g.id, tipo, texto: x, ordem: proxOrdem(l) }))} />
    ${l.length >= lim && html`<span class="sub">Limite de ${lim} atingido.</span>`}</div>`;
}
function EdAnunciosG({ P, db, gs, setGs }) {
  const g = P.grupos.find(x => x.id === gs);
  if (!g) return html`<section class="card"><p class="vazio">Crie um grupo de anúncios primeiro.</p></section>`;
  const tx = P.textos.filter(x => x.grupo_id === g.id), nt = tx.filter(x => x.tipo === 'titulo').length, nd = tx.filter(x => x.tipo === 'descricao').length;
  return html`<${SelGrupo} P=${P} gs=${gs} setGs=${setGs} />
    <div class="cols"><div class="c2">
      <section class="card"><h2>Títulos (${nt}/15) <span class="sub">de 3 a 15, até 30 caracteres; o Google recomenda 8 ou mais</span></h2><${ListaTextosG} P=${P} db=${db} g=${g} tipo="titulo" /></section>
      <section class="card"><h2>Descrições (${nd}/4) <span class="sub">de 2 a 4, até 90 caracteres</span></h2><${ListaTextosG} P=${P} db=${db} g=${g} tipo="descricao" /></section></div>
      <div class="c1"><section class="card"><h2>Prévia no Google</h2><div class="ads"><${SerpPrevia} P=${P} g=${g} /></div><p class="sub" style="margin:10px 0 0">URL final: ${g.url_final || '—'} (edite em Grupos)</p></section></div></div>`;
}

function EdExtensoes({ P, db }) {
  const ex = t => P.extensoes.filter(x => x.tipo === t);
  const [sn, setSn] = useState(null); const [sl, setSl] = useState(null);
  const salvarSn = async v => { const vals = linhasDe(v.valores); if (vals.length < 3 || vals.length > 10) return toast('Use de 3 a 10 valores', 'erro'), false; const longo = vals.find(x => tam(x) > 25); if (longo) return toast('Valor com mais de 25 caracteres: ' + longo, 'erro'), false;
    const d = { cabecalho: v.cabecalho, valores: vals }; return db(sn.id ? sb.from('ads_extensoes').update(d).eq('id', sn.id) : sb.from('ads_extensoes').insert({ ...d, tipo: 'snippet', plano_id: P.p.id, ordem: proxOrdem(ex('snippet')) }), 'Snippet salvo'); };
  const salvarSl = async v => { if (tam(v.texto) > 25 || tam(v.descricao1) > 35 || tam(v.descricao2) > 35) return toast('Texto até 25 e descrições até 35 caracteres', 'erro'), false;
    const d = { texto: v.texto, url: v.url, descricao1: v.descricao1 || null, descricao2: v.descricao2 || null }; return db(sl.id ? sb.from('ads_extensoes').update(d).eq('id', sl.id) : sb.from('ads_extensoes').insert({ ...d, tipo: 'sitelink', plano_id: P.p.id, ordem: proxOrdem(ex('sitelink')) }), 'Sitelink salvo'); };
  const dest = ex('destaque');
  return html`<section class="card"><div class="topo" style="margin-bottom:12px"><h2>Snippets estruturados</h2><button class="btn pq pri" onClick=${() => setSn({ cabecalho: 'Serviços', valores: '' })}>Novo snippet</button></div>
      ${ex('snippet').length ? html`<div class="lista">${ex('snippet').map(x => html`<div><div style="min-width:0"><b>${x.cabecalho}:</b> ${(x.valores || []).join(', ')}<${MarcasItem} P=${P} alvo=${x.id} agencia=${true} onMudou=${() => db(Promise.resolve({}))} /></div><div class="acoes"><button class="btn pq" onClick=${() => setSn({ ...x, valores: (x.valores || []).join('\n') })}>Editar</button><${BtnsLinha} onExcluir=${() => db(sb.from('ads_extensoes').delete().eq('id', x.id))} /></div></div>`)}</div>` : html`<p class="vazio">Nenhum snippet.</p>`}</section>
    <section class="card"><h2>Frases de destaque <span class="sub">até 25 caracteres</span></h2><div class="ads-lista-txt">${dest.map((x, i) => html`<div class="ads-txt-linha"><span class="n">${i + 1}</span><${TextoLim} valor=${x.texto} max=${25} rotulo=${'Frase de destaque ' + (i + 1)} onSalvar=${t => db(sb.from('ads_extensoes').update({ texto: t }).eq('id', x.id))} /><${BtnsLinha} onCima=${i > 0 && (() => mover('ads_extensoes', dest, i, -1).then(() => db(Promise.resolve({}))))} onBaixo=${i < dest.length - 1 && (() => mover('ads_extensoes', dest, i, 1).then(() => db(Promise.resolve({}))))} onExcluir=${() => db(sb.from('ads_extensoes').delete().eq('id', x.id))} /><${MarcasItem} P=${P} alvo=${x.id} agencia=${true} onMudou=${() => db(Promise.resolve({}))} /></div>`)}
      <${NovoTexto} max=${25} ph="Nova frase de destaque" onAdd=${t => db(sb.from('ads_extensoes').insert({ tipo: 'destaque', texto: t, plano_id: P.p.id, ordem: proxOrdem(dest) }))} /></div></section>
    <section class="card"><div class="topo" style="margin-bottom:12px"><h2>Sitelinks</h2><button class="btn pq pri" onClick=${() => setSl({})}>Novo sitelink</button></div>
      ${ex('sitelink').length ? html`<div class="lista">${ex('sitelink').map(x => html`<div><div style="min-width:0"><b>${x.texto}</b><div class="sub">${[x.descricao1, x.descricao2].filter(Boolean).join(' · ')}</div><div class="sub" style="word-break:break-all">${x.url}</div><${MarcasItem} P=${P} alvo=${x.id} agencia=${true} onMudou=${() => db(Promise.resolve({}))} /></div><div class="acoes"><button class="btn pq" onClick=${() => setSl(x)}>Editar</button><${BtnsLinha} onExcluir=${() => db(sb.from('ads_extensoes').delete().eq('id', x.id))} /></div></div>`)}</div>` : html`<p class="vazio">Nenhum sitelink.</p>`}</section>
    ${sn && html`<${FormModal} titulo=${sn.id ? 'Editar snippet' : 'Novo snippet'} inicial=${sn} onSalvar=${salvarSn} onFechar=${() => setSn(null)} campos=${[{ n: 'cabecalho', l: 'Cabeçalho', tipo: 'sel', vazio: false, op: SNIP_CAB.map(c => [c[0], c[0]]) }, { n: 'valores', l: 'Valores (um por linha)', tipo: 'area', obrig: true, ajuda: 'De 3 a 10 valores, até 25 caracteres cada.' }]} />`}
    ${sl && html`<${FormModal} titulo=${sl.id ? 'Editar sitelink' : 'Novo sitelink'} inicial=${sl} onSalvar=${salvarSl} onFechar=${() => setSl(null)} campos=${[{ n: 'texto', l: 'Texto do link (até 25)', obrig: true }, { n: 'url', l: 'URL final', tipo: 'url', obrig: true, ph: 'https://…' }, { n: 'descricao1', l: 'Descrição 1 (até 35)' }, { n: 'descricao2', l: 'Descrição 2 (até 35)' }]} />`}`;
}

function EdPerguntas({ P, db }) {
  const [t, setT] = useState(''); const [k, setK] = useState(0);
  const add = async () => { const qs = linhasDe(t); if (!qs.length) return; const { data: ex } = await sb.from('entrega_perguntas').select('ordem').eq('entrega_id', P.e.id); let o = (ex || []).reduce((m, x) => Math.max(m, x.ordem || 0), 0) + 1;
    if (await db(sb.from('entrega_perguntas').insert(qs.map(q => { const [p, a] = q.split('|'); return { entrega_id: P.e.id, pergunta: p.trim(), ajuda: a ? a.trim() : null, ordem: o++ }; })), 'Pergunta(s) adicionada(s)')) { setT(''); setK(k + 1); } };
  return html`<div class="cols"><div class="c2"><section class="card"><h2>Perguntas para o cliente</h2><${PerguntasEntrega} key=${k} e=${P.e} editavel=${false} />
      <div class="form" style="margin-top:16px"><div class="campo"><label for="pqn">Adicionar perguntas (uma por linha)</label><textarea id="pqn" value=${t} onInput=${e => setT(e.target.value)} placeholder="Atendem todo o Brasil? | Para a frase “Atendemos todo o Brasil”"></textarea><span class="sub">Use “|” para colocar uma dica embaixo da pergunta.</span></div><div><button class="btn pq pri" disabled=${!t.trim()} onClick=${add}>Adicionar</button></div></div></section></div>
    <div class="c1"><section class="card"><h2>Comentários gerais</h2><${ComentariosEntrega} e=${P.e} agencia=${true} /></section></div></div>`;
}

// ---------- editor Meta: conjuntos e anúncios
function EdConjuntos({ P, db }) {
  const [m, setM] = useState(null);
  const arr = t => linhasDe(t);
  const salvar = async v => { const d = { nome: v.nome, verba_percentual: num(v.verba_percentual), verba_valor: num(v.verba_valor), localizacao: v.localizacao || null, idade_min: num(v.idade_min), idade_max: num(v.idade_max), genero: v.genero || 'todos',
      interesses: arr(v.interesses), publicos_personalizados: arr(v.publicos_personalizados), exclusoes: arr(v.exclusoes), posicionamentos: v.posicionamentos || [], expansao_publico: !!v.expansao_publico, observacoes: v.observacoes || null };
    return db(m.id ? sb.from('meta_conjuntos').update(d).eq('id', m.id) : sb.from('meta_conjuntos').insert({ ...d, plano_id: P.p.id, ordem: proxOrdem(P.conjuntos) }), 'Conjunto salvo'); };
  const abrir = c => setM(c.id ? { ...c, interesses: c.interesses.join('\n'), publicos_personalizados: c.publicos_personalizados.join('\n'), exclusoes: c.exclusoes.join('\n') } : { genero: 'todos', localizacao: 'Brasil', idade_min: 25, idade_max: 60, posicionamentos: ['Feed do Facebook', 'Feed do Instagram'] });
  const soma = P.conjuntos.reduce((s, c) => s + Number(c.verba_percentual || 0), 0);
  return html`<section class="card"><div class="topo" style="margin-bottom:12px"><div><h2>Conjuntos de anúncios e públicos</h2>${P.conjuntos.length > 0 && html`<span class="sub">Divisão da verba: ${soma}%</span>`}</div><button class="btn pq pri" onClick=${() => abrir({})}>Novo conjunto</button></div>
    ${P.conjuntos.length ? html`<div class="lista">${P.conjuntos.map((c, i) => html`<div><div style="min-width:0"><b>Conjunto ${i + 1} · ${c.nome}</b>${c.verba_percentual != null && html` <span class="ads-badge">${Number(c.verba_percentual)}% da verba</span>`}
        <div class="sub">${[c.localizacao, (c.idade_min || c.idade_max) && (c.idade_min || 18) + ' a ' + (c.idade_max || '65+') + ' anos', c.interesses.length && c.interesses.length + ' interesse(s)', c.publicos_personalizados.length && c.publicos_personalizados.length + ' público(s) personalizado(s)', c.posicionamentos.join(', ')].filter(Boolean).join(' · ')}</div>
        <${MarcasItem} P=${P} alvo=${c.id} agencia=${true} onMudou=${() => db(Promise.resolve({}))} /></div>
      <div class="acoes"><button class="btn pq" onClick=${() => abrir(c)}>Editar</button><${BtnsLinha} onCima=${i > 0 && (() => mover('meta_conjuntos', P.conjuntos, i, -1).then(() => db(Promise.resolve({}))))} onBaixo=${i < P.conjuntos.length - 1 && (() => mover('meta_conjuntos', P.conjuntos, i, 1).then(() => db(Promise.resolve({}))))} onExcluir=${() => confirm('Excluir o conjunto “' + c.nome + '”?') && db(sb.from('meta_conjuntos').delete().eq('id', c.id), 'Conjunto excluído')} /></div></div>`)}</div>` : html`<p class="vazio">Nenhum conjunto ainda.</p>`}
    ${m && html`<${FormModal} titulo=${m.id ? 'Editar conjunto' : 'Novo conjunto'} inicial=${m} onSalvar=${salvar} onFechar=${() => setM(null)} campos=${[
      { n: 'nome', l: 'Nome do conjunto', obrig: true, ph: 'Ex.: Visitantes do site (remarketing)' }, { n: 'verba_percentual', l: 'Parte da verba (%)', tipo: 'number' }, { n: 'verba_valor', l: 'Ou valor fixo (R$/mês)', tipo: 'number' },
      { n: 'localizacao', l: 'Localização', ph: 'Ex.: Brasil' }, { n: 'idade_min', l: 'Idade mínima', tipo: 'number' }, { n: 'idade_max', l: 'Idade máxima (65 = 65+)', tipo: 'number' }, { n: 'genero', l: 'Gênero', tipo: 'sel', vazio: false, op: GENEROS },
      { n: 'publicos_personalizados', l: 'Públicos personalizados (um por linha)', tipo: 'area', ph: 'Visitaram o site nos últimos 30 dias' }, { n: 'exclusoes', l: 'Exclusões (uma por linha)', tipo: 'area' }, { n: 'interesses', l: 'Interesses e comportamentos (um por linha)', tipo: 'area' },
      { n: 'posicionamentos', l: 'Posicionamentos', tipo: 'checks', op: META_POS.map(x => [x, x]) }, { n: 'expansao_publico', l: 'Expansão de público (Advantage+) ativada', tipo: 'bool' }, { n: 'observacoes', l: 'Observações', tipo: 'area' }]} />`}</section>`;
}

function EdAnuncioMeta({ P, db, a, i, n }) {
  const [m, setM] = useState(null); const [up, setUp] = useState(false);
  const md = P.midias.filter(x => x.anuncio_id === a.id), vinc = P.vinculos.filter(v => v.anuncio_id === a.id).map(v => v.conjunto_id);
  const salvar = async v => { const d = { nome: v.nome, formato: v.formato, cta: v.cta || null, url_destino: v.url_destino || null, utm: v.utm || null, descricao_criativo: v.descricao_criativo || null }; return db(sb.from('meta_anuncios').update(d).eq('id', a.id), 'Anúncio salvo'); };
  const togConj = (c, on) => db(on ? sb.from('meta_anuncio_conjuntos').insert({ anuncio_id: a.id, conjunto_id: c }) : sb.from('meta_anuncio_conjuntos').delete().eq('anuncio_id', a.id).eq('conjunto_id', c));
  const subir = async ev => {
    const fs = [...ev.target.files]; ev.target.value = ''; if (!fs.length) return;
    setUp(true); let o = proxOrdem(md);
    for (const f of fs) {
      if (!/^(image|video)\//.test(f.type)) { toast('Envie imagem ou vídeo: ' + f.name, 'erro'); continue; }
      if (f.size > 50 * 1024 * 1024) { toast('Arquivo acima de 50 MB: ' + f.name, 'erro'); continue; }
      const nome = f.name.normalize('NFD').replace(/[̀-ͯ]/g, '').replace(/[^A-Za-z0-9._-]+/g, '-'), path = aleatorio() + '/' + nome;
      const r = await sb.storage.from('previas').upload(path, f, { contentType: f.type, cacheControl: '3600' });
      if (r.error) { toast(r.error.message, 'erro'); continue; }
      const prop = await new Promise(res => { const ok2 = (w, h) => res(!w || !h ? '1:1' : h / w > 1.5 ? '9:16' : h / w > 1.1 ? '4:5' : '1:1'); if (f.type.startsWith('image/')) { const im = new Image(); im.onload = () => ok2(im.naturalWidth, im.naturalHeight); im.onerror = () => res('1:1'); im.src = URL.createObjectURL(f); } else { const vd = document.createElement('video'); vd.preload = 'metadata'; vd.onloadedmetadata = () => ok2(vd.videoWidth, vd.videoHeight); vd.onerror = () => res('1:1'); vd.src = URL.createObjectURL(f); } });
      await sb.from('meta_midias').insert({ anuncio_id: a.id, arquivo_path: path, mime: f.type, proporcao: prop, ordem: o++ });
    }
    setUp(false); db(Promise.resolve({}), 'Arquivos enviados');
  };
  const card = a.formato === 'carrossel';
  return html`<section class="card ads-ed-anuncio"><div class="topo" style="margin-bottom:10px"><div style="min-width:0"><h2>Anúncio ${i + 1} · ${a.nome}</h2><span class="sub">${(FORMATOS_M.find(f => f[0] === a.formato) || [])[1]} · botão: ${a.cta || '—'} · ${a.url_destino || 'sem URL de destino'}${a.utm ? ' · UTM: ' + a.utm : ''}</span></div>
      <div class="acoes"><button class="btn pq" onClick=${() => setM({ ...a })}>Editar dados</button><${BtnsLinha} onCima=${i > 0 && (() => mover('meta_anuncios', P.anuncios, i, -1).then(() => db(Promise.resolve({}))))} onBaixo=${i < n - 1 && (() => mover('meta_anuncios', P.anuncios, i, 1).then(() => db(Promise.resolve({}))))} onExcluir=${() => confirm('Excluir o anúncio “' + a.nome + '”?') && db(sb.from('meta_anuncios').delete().eq('id', a.id), 'Anúncio excluído')} /></div></div>
    <${MarcasItem} P=${P} alvo=${a.id} agencia=${true} onMudou=${() => db(Promise.resolve({}))} />
    ${a.descricao_criativo && html`<p class="sub" style="margin:0 0 10px"><b>Criativo:</b> ${a.descricao_criativo}</p>`}
    <div class="campo" style="margin-bottom:14px"><span style="font-size:13px;font-weight:600">Exibido nos conjuntos</span><div class="acoes">${P.conjuntos.length ? P.conjuntos.map((c, k) => html`<label class="chk"><input type="checkbox" checked=${vinc.includes(c.id)} onChange=${e => togConj(c.id, e.target.checked)} />Conjunto ${k + 1} · ${c.nome}</label>`) : html`<span class="sub">Crie os conjuntos primeiro.</span>`}</div></div>
    <div class="cols"><div class="c2">
      ${TIPOS_MT.map(([t, rot, um]) => { const l = P.mtextos.filter(x => x.anuncio_id === a.id && x.tipo === t); return html`<div style="margin-bottom:14px"><h3 style="margin-bottom:8px">${rot} (${l.length}/5) <span class="sub">recomendado até ${LIM_M[t]} caracteres</span></h3><div class="ads-lista-txt">
        ${l.map((x, k) => html`<div class="ads-txt-linha"><span class="n">${k + 1}</span><${TextoLim} valor=${x.texto} max=${LIM_M[t]} aviso=${true} area=${t === 'texto_principal'} rotulo=${um + ' ' + (k + 1)} onSalvar=${v => db(sb.from('meta_textos').update({ texto: v }).eq('id', x.id))} /><${BtnsLinha} onCima=${k > 0 && (() => mover('meta_textos', l, k, -1).then(() => db(Promise.resolve({}))))} onBaixo=${k < l.length - 1 && (() => mover('meta_textos', l, k, 1).then(() => db(Promise.resolve({}))))} onExcluir=${() => db(sb.from('meta_textos').delete().eq('id', x.id))} /><${MarcasItem} P=${P} alvo=${x.id} agencia=${true} onMudou=${() => db(Promise.resolve({}))} />${tam(x.texto) > LIM_M[t] && html`<span class="ads-aviso-txt">Acima do recomendado: pode ser cortado.</span>`}</div>`)}
        <${NovoTexto} max=${LIM_M[t]} aviso=${true} area=${t === 'texto_principal'} ph=${'Novo ' + um.toLowerCase()} desab=${l.length >= 5} onAdd=${v => db(sb.from('meta_textos').insert({ anuncio_id: a.id, tipo: t, texto: v, ordem: proxOrdem(l) }))} /></div></div>`; })}
      <h3 style="margin-bottom:8px">Artes e vídeos (${md.length}) ${card && html`<span class="sub">carrossel: de 2 a 10 cartões</span>`}</h3>
      <div class="ads-midias ed">${md.map((x, k) => html`<div class="ads-midia-item"><${MidiaMock} m=${x} cls="ads-thumb" />
        <select aria-label="Proporção" value=${x.proporcao} onChange=${e => db(sb.from('meta_midias').update({ proporcao: e.target.value }).eq('id', x.id))}>${PROPORCOES.map(([v, l]) => html`<option value=${v}>${l}</option>`)}</select>
        ${card && x.proporcao !== '9:16' && html`<${TextoLim} valor=${x.titulo_cartao || ''} rotulo="Título do cartão" ph="Título do cartão" max=${40} aviso=${true} onSalvar=${v => db(sb.from('meta_midias').update({ titulo_cartao: v }).eq('id', x.id))} /><${TextoLim} valor=${x.descricao_cartao || ''} rotulo="Descrição do cartão" ph="Descrição do cartão" max=${20} aviso=${true} onSalvar=${v => db(sb.from('meta_midias').update({ descricao_cartao: v }).eq('id', x.id))} /><${TextoLim} valor=${x.url_cartao || ''} rotulo="URL do cartão" ph="URL do cartão (opcional)" onSalvar=${v => db(sb.from('meta_midias').update({ url_cartao: v }).eq('id', x.id))} />`}
        <${BtnsLinha} onCima=${k > 0 && (() => mover('meta_midias', md, k, -1).then(() => db(Promise.resolve({}))))} onBaixo=${k < md.length - 1 && (() => mover('meta_midias', md, k, 1).then(() => db(Promise.resolve({}))))} onExcluir=${() => confirm('Remover esta arte?') && db(sb.from('meta_midias').delete().eq('id', x.id))} />
        <${MarcasItem} P=${P} alvo=${x.id} agencia=${true} onMudou=${() => db(Promise.resolve({}))} /></div>`)}
        <label class="ads-up"><input type="file" accept="image/*,video/mp4,video/quicktime,video/webm" multiple onChange=${subir} disabled=${up} /><span>${up ? 'Enviando…' : '+ Enviar artes ou vídeos'}</span><small>JPG, PNG, WebP, GIF, MP4, MOV ou WebM, até 50 MB. A proporção é detectada pelo tamanho.</small></label></div>
      ${a.formato === 'video' && md.length > 0 && !md.some(x => x.proporcao === '9:16') && html`<p class="ads-aviso-txt">Falta a versão 9:16 do vídeo para Stories e Reels.</p>`}
    </div><div class="c1"><div class="ads"><${MockMeta} P=${P} a=${a} /></div></div></div>
    ${m && html`<${FormModal} titulo="Dados do anúncio" inicial=${m} onSalvar=${salvar} onFechar=${() => setM(null)} campos=${[{ n: 'nome', l: 'Nome do anúncio', obrig: true }, { n: 'formato', l: 'Formato', tipo: 'sel', vazio: false, op: FORMATOS_M }, { n: 'cta', l: 'Botão (CTA)', tipo: 'sel', op: META_CTA.map(c => [c[0], c[0]]) },
      { n: 'url_destino', l: 'URL de destino', tipo: 'url', ph: 'https://…' }, { n: 'utm', l: 'Parâmetros UTM', ph: 'utm_source=meta&utm_medium=cpc&utm_campaign=…' }, { n: 'descricao_criativo', l: 'Descrição do criativo (o que a arte mostra)', tipo: 'area' }]} />`}</section>`;
}
function EdAnunciosM({ P, db }) {
  const novo = () => db(sb.from('meta_anuncios').insert({ plano_id: P.p.id, nome: 'Novo anúncio', formato: 'imagem', cta: 'Saiba mais', ordem: proxOrdem(P.anuncios) }), 'Anúncio criado');
  return html`${P.anuncios.map((a, i) => html`<${EdAnuncioMeta} key=${a.id} P=${P} db=${db} a=${a} i=${i} n=${P.anuncios.length} />`)}${!P.anuncios.length && html`<section class="card"><p class="vazio">Nenhum anúncio ainda.</p></section>`}<div><button class="btn pri" onClick=${novo}>Novo anúncio</button></div>`;
}

// ---------- calendário mensal de redes sociais (aprovação no portal)
const ST_CP = { aguardando_aprovacao: ['Aguardando você', 'cs-ag', '#F5A122'], ajuste_solicitado: ['Ajuste pedido', 'cs-aj', '#E5484D'], aprovado: ['Aprovado', 'cs-ok', '#10D885'], agendado: ['Aprovado', 'cs-ok', '#10D885'], publicado: ['Publicado', 'cs-ok', '#10D885'], rascunho: ['Rascunho', 'cs-ra', '#B9C7C0'] };
const ST_CP_EQ = { ...ST_CP, aguardando_aprovacao: ['Aguardando cliente', 'cs-ag', '#F5A122'] };
const grupoSt = s => s === 'aguardando_aprovacao' ? 'aguardando' : s === 'ajuste_solicitado' ? 'ajuste' : s === 'rascunho' ? 'rascunho' : 'aprovado';
const FORMATOS_POST = [['imagem', 'Imagem'], ['carrossel', 'Carrossel'], ['reels', 'Reels'], ['stories', 'Stories']];
const ST_CAL = { rascunho: ['Rascunho', 'neu'], enviado: ['Enviado ao cliente', 'warn'], concluido: ['Concluído', 'ok'] };
const CORES_TEMA = ['#10D885', '#3B82F6', '#F5A122', '#A855F7', '#94A3B8', '#E5484D', '#14B8A6', '#EC4899'];
const FERIADOS_FIXOS = { '01-01': 'Ano Novo', '04-21': 'Tiradentes', '05-01': 'Dia do Trabalho', '09-07': 'Independência', '10-12': 'Nossa Senhora Aparecida', '11-02': 'Finados', '11-15': 'Proclamação da República', '11-20': 'Consciência Negra', '12-25': 'Natal' };
const DSEM = ['dom', 'seg', 'ter', 'qua', 'qui', 'sex', 'sáb'];
const dd_mm = d => d ? String(d).slice(8, 10) + '/' + String(d).slice(5, 7) : '';
const diaSem = d => DSEM[new Date(d + 'T12:00:00').getDay()];
const hhmm = h => h ? String(h).slice(0, 5) : '';
const nomeMes = m => { const t = new Date(String(m).slice(0, 7) + '-15T12:00:00').toLocaleDateString('pt-BR', { month: 'long' }); return t; };
const tituloCal = m => { const t = new Date(String(m).slice(0, 7) + '-15T12:00:00').toLocaleDateString('pt-BR', { month: 'long', year: 'numeric' }); return t.charAt(0).toUpperCase() + t.slice(1); };
const isoD = d => d.getFullYear() + '-' + String(d.getMonth() + 1).padStart(2, '0') + '-' + String(d.getDate()).padStart(2, '0');
const PillCP = ({ s, eq }) => { const x = (eq ? ST_CP_EQ : ST_CP)[s] || [s, 'cs-ra']; return html`<span class=${'cs-pill ' + x[1]}>${x[0]}</span>`; };
const Tema = ({ p }) => p ? html`<span class="cs-tema" style=${'--c:' + p.cor}>${p.nome}</span>` : null;

async function carregarCalendario(id) {
  const { data: cal } = await sb.from('calendarios').select('*, clientes(nome_empresa)').eq('id', id).maybeSingle();
  if (!cal) return null;
  const [pi, po] = await Promise.all([sb.from('calendario_pilares').select('*').eq('calendario_id', id).order('ordem').order('nome'),
    sb.from('posts').select('*').eq('calendario_id', id).order('data_publicacao').order('hora')]);
  const posts = po.data || [], ids = posts.map(p => p.id);
  const [mi, co, ve, an] = await Promise.all([
    ids.length ? sb.from('post_midias').select('*').in('post_id', ids).order('ordem').order('criado_em') : { data: [] },
    ids.length ? sb.from('post_comentarios').select('*').in('post_id', ids).order('criado_em') : { data: [] },
    ids.length ? sb.from('post_versoes').select('post_id,versao,snapshot').in('post_id', ids) : { data: [] },
    sb.from('posts').select('id,titulo,formato,post_midias(arquivo_path,tipo,proporcao,ordem)').eq('cliente_id', cal.cliente_id).eq('status', 'publicado').lt('data_publicacao', cal.mes).order('data_publicacao', { ascending: false }).limit(6)]);
  return { cal, cliente: cal.clientes?.nome_empresa || '', pilares: pi.data || [], posts, midias: mi.data || [], coments: co.data || [], versoes: ve.data || [], antigos: an.data || [] };
}
const midiasDe = (C, p) => C.midias.filter(m => m.post_id === p.id);
const feedDe = (C, p) => { const m = midiasDe(C, p); const f = m.filter(x => x.proporcao !== '9:16'); return f.length ? f : m; };
const storyDe = (C, p) => { const m = midiasDe(C, p); return m.find(x => x.proporcao === '9:16') || m[0]; };
const capaDe = (C, p) => feedDe(C, p)[0];
const pilarDe = (C, p) => C.pilares.find(x => x.id === p.pilar_id);
const contagem = posts => { const c = { aprovado: 0, ajuste: 0, aguardando: 0, rascunho: 0 }; posts.forEach(p => c[grupoSt(p.status)]++); return c; };
// "Atualizado": voltou ao cliente com nova versão
const atualizado = (C, p) => p.versao > 1 && p.status === 'aguardando_aprovacao';
// o que mudou em relação à versão anterior
function mudouDesde(C, p) {
  const ant = C.versoes.find(v => v.post_id === p.id && v.versao === p.versao - 1)?.snapshot; if (!ant) return [];
  const r = []; if ((ant.legenda || '') !== (p.legenda || '')) r.push('legenda'); if ((ant.hashtags || '') !== (p.hashtags || '')) r.push('hashtags');
  const am = (ant.midias || []).map(m => m.arquivo_path).join('|'), nm = midiasDe(C, p).map(m => m.arquivo_path).join('|'); if (am !== nm) r.push('arte');
  if (ant.data_publicacao !== p.data_publicacao || hhmm(ant.hora) !== hhmm(p.hora)) r.push('data ou hora');
  return r;
}

function MidiaPost({ m, cls, alt, ctrl }) {
  if (!m) return html`<div class=${'cs-sem-arte ' + (cls || '')}><span>Arte em produção</span></div>`;
  return m.tipo === 'video' ? html`<video class=${cls} src=${urlMidia(m.arquivo_path) + (ctrl ? '' : '#t=1')} controls=${!!ctrl} playsinline muted preload="metadata" aria-label=${alt || 'Vídeo do post'}></video>` : html`<img class=${cls} src=${urlMidia(m.arquivo_path)} alt=${alt || 'Arte do post'} loading="lazy" />`;
}

// ---------- portal do cliente
function CalendarioCliente({ cid, onMudou, legado }) {
  const [cals, setCals] = useState(null); const [sel, setSel] = useState(null); const [C, setC] = useState(null);
  useEffect(() => { sb.from('calendarios').select('id,mes,status,prazo_aprovacao,posts(status)').order('mes', { ascending: false }).then(r => {
    const l = r.data || []; setCals(l); const pend = [...l].reverse().find(c => (c.posts || []).some(p => p.status === 'aguardando_aprovacao')); setSel((pend || l[0])?.id || null); }); }, []);
  const recarregar = async () => { if (sel) setC(await carregarCalendario(sel)); onMudou && onMudou(); };
  useEffect(() => { setC(null); if (sel) carregarCalendario(sel).then(setC); }, [sel]);
  if (!cals) return html`<${Carregando} />`;
  if (!cals.length) return legado;
  return html`${cals.length > 1 && html`<div class="tabs" role="group" aria-label="Mês do calendário">${cals.map(c => html`<button class=${sel === c.id ? 'on' : ''} onClick=${() => setSel(c.id)}>${tituloCal(c.mes)}</button>`)}</div>`}
    ${!C ? html`<${Carregando} />` : html`<${CalendarioVisao} key=${C.cal.id} C=${C} cliente=${true} onMudou=${recarregar} />`}`;
}

// visão do calendário (portal do cliente; a equipe usa como prévia)
function CalendarioVisao({ C, cliente, onMudou }) {
  const [vis, setVis] = useState('geral'); const [fs, setFs] = useState('todos'); const [fp, setFp] = useState('todos'); const [ab, setAb] = useState(null);
  const { cal, posts } = C, c = contagem(posts), tot = posts.length || 1;
  const filtrados = posts.filter(p => (fs === 'todos' || grupoSt(p.status) === fs) && (fp === 'todos' || p.pilar_id === fp));
  const pend = posts.filter(p => p.status === 'aguardando_aprovacao');
  const prazoPassou = cal.prazo_aprovacao && cal.prazo_aprovacao < hojeISO();
  const aprovarTodos = async () => { if (!confirm('Aprovar os ' + pend.length + ' posts que ainda aguardam sua resposta?')) return;
    const r = await sb.from('posts').update({ status: 'aprovado' }).eq('calendario_id', cal.id).eq('status', 'aguardando_aprovacao'); if (ok(r, 'Posts aprovados!')) onMudou(); };
  const Filtros = () => html`<div class="cs-filtros"><span class="sub">Status:</span>${[['todos', 'Todos'], ['aguardando', 'Aguardando você'], ['ajuste', 'Ajuste pedido'], ['aprovado', 'Aprovado']].map(([k, t]) => html`<button class=${'cs-chip' + (fs === k ? ' on' : '')} aria-pressed=${fs === k} onClick=${() => setFs(k)}>${t}</button>`)}
    ${C.pilares.length > 0 && html`<span class="sub" style="margin-left:8px">Tema:</span><button class=${'cs-chip' + (fp === 'todos' ? ' on' : '')} aria-pressed=${fp === 'todos'} onClick=${() => setFp('todos')}>Todos</button>${C.pilares.map(x => html`<button class=${'cs-chip' + (fp === x.id ? ' on' : '')} aria-pressed=${fp === x.id} onClick=${() => setFp(x.id)}>${x.nome}</button>`)}`}</div>`;
  const Mini = ({ p, hora }) => { const pi = pilarDe(C, p), x = ST_CP[p.status] || ST_CP.rascunho; return html`<button class="cs-mini" style=${'--c:' + (pi?.cor || '#B9C7C0')} onClick=${() => setAb(p.id)} aria-label=${p.titulo + ', ' + x[0]}><${MidiaPost} m=${capaDe(C, p)} cls="cs-mini-img" alt="" /><span>${hora ? html`<i class="hr">${hhmm(p.hora)} · ${(FORMATOS_POST.find(f => f[0] === p.formato) || [])[1]}</i>` : html`${diaSem(p.data_publicacao)} ${dd_mm(p.data_publicacao)} · `}${p.titulo}</span><i class="st" style=${'background:' + x[2]} title=${x[0]}></i></button>`; };
  let corpo;
  if (vis === 'geral') {
    const faixas = [[1, 7], [8, 14], [15, 21], [22, 28], [29, 31]];
    corpo = html`<div class="cs-grid" style="margin-bottom:16px">
        ${cal.objetivo && html`<div class="card"><span class="sub">Objetivo do mês</span><h3 class="cs-h3">${cal.objetivo}</h3></div>`}
        <div class="card"><span class="sub">Frequência</span><h3 class="cs-h3">${posts.length} post${posts.length === 1 ? '' : 's'}${cal.frequencia ? ' · ' + cal.frequencia : ''}</h3></div>
        <div class="card"><span class="sub">Precisa de você</span><h3 class="cs-h3">${pend.length ? pend.length + ' post' + (pend.length === 1 ? '' : 's') + ' para revisar' : 'Tudo respondido ✓'}</h3>${pend.length > 0 && html`<p style="margin:10px 0 0"><button class="btn pri pq" onClick=${() => { setFs('aguardando'); setVis('lista'); }}>Começar a revisar</button></p>`}</div></div>
      ${C.pilares.length > 0 && html`<h2 class="cs-h2">Temas do mês</h2><div class="cs-pilares">${C.pilares.map(x => { const n = posts.filter(p => p.pilar_id === x.id).length; return html`<div class="card" style=${'--c:' + x.cor}><h3>${x.nome}</h3>${x.descricao && html`<p class="sub" style="margin:4px 0 8px">${x.descricao}</p>`}<b>${n} post${n === 1 ? '' : 's'}</b></div>`; })}</div>`}
      <h2 class="cs-h2">Semana a semana</h2><div class="card">${faixas.map(([a, b], i) => { const ps = posts.filter(p => { const d = +p.data_publicacao.slice(8); return d >= a && d <= b; }); if (i === 4 && !ps.length) return null;
        return html`<div class="cs-semana"><b>${i < 4 ? (i + 1) + 'ª semana' : 'Fim do mês'}<br /><span class="sub">${String(a).padStart(2, '0')} a ${String(Math.min(b, 31)).padStart(2, '0')}/${String(cal.mes).slice(5, 7)}</span></b><div class="cs-semana-l">${ps.length ? ps.map(p => html`<${Mini} p=${p} />`) : html`<span class="sub">Sem posts</span>`}</div></div>`; })}</div>`;
  } else if (vis === 'cal') {
    const [a, m] = String(cal.mes).split('-').map(Number), ini = new Date(a, m - 1, 1), off = (ini.getDay() + 6) % 7, nd = new Date(a, m, 0).getDate(), totC = Math.ceil((off + nd) / 7) * 7;
    corpo = html`<${Filtros} /><div class="cs-cal">${['Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb', 'Dom'].map(d => html`<div class="dsem">${d}</div>`)}
      ${Array.from({ length: totC }, (_, i) => { const d = i - off + 1; if (d < 1 || d > nd) return html`<div class="cs-dia fora"></div>`;
        const iso = String(cal.mes).slice(0, 8) + String(d).padStart(2, '0'), fer = FERIADOS_FIXOS[iso.slice(5)], ps = filtrados.filter(p => p.data_publicacao === iso);
        if (!ps.length && !fer) return html`<div class=${'cs-dia vazio-m' + (i % 7 >= 5 ? ' fds' : '')}><span class="n">${d}</span></div>`;
        return html`<div class=${'cs-dia' + (i % 7 >= 5 ? ' fds' : '')}><span class=${'n' + (fer ? ' feriado' : '')}>${d}${fer ? ' · ' + fer : ''} <span class="sub cs-so-movel">${diaSem(iso)}</span></span>${ps.map(p => html`<${Mini} p=${p} hora=${true} />`)}</div>`; })}</div>
      <p class="sub" style="margin-top:12px">Clique em um post para ver a arte, a legenda e aprovar. A bolinha indica o status: verde aprovado, laranja aguardando você, vermelho ajuste pedido.</p>`;
  } else if (vis === 'feed') {
    const ordem = [...posts].filter(p => p.formato !== 'stories').sort((x, y) => (y.data_publicacao + hhmm(y.hora)).localeCompare(x.data_publicacao + hhmm(x.hora)));
    corpo = html`<p class="sub" style="text-align:center;margin:0 0 14px">Assim o perfil fica no fim de ${nomeMes(cal.mes)}, com os posts novos em cima dos que já foram publicados. Toque em um post para revisar.</p>
      <div class="cs-perfil"><div class="cab"><div class="foto">${iniciais(C.cliente)}</div><div style="flex:1;min-width:0"><b>${C.cliente}</b><div class="nums"><div><b>${ordem.length + C.antigos.length}</b>posts</div><div><b>—</b>seguidores</div><div><b>—</b>seguindo</div></div></div></div>
      <div class="cs-ig-grid">${ordem.map(p => html`<button onClick=${() => setAb(p.id)} aria-label=${p.titulo}><${MidiaPost} m=${capaDe(C, p)} alt="" /><span class="tipo" aria-hidden="true">${p.formato === 'carrossel' ? '❐' : p.formato === 'reels' ? '▶' : ''}</span><span class="marca"><${PillCP} s=${p.status} /></span></button>`)}
        ${C.antigos.map(p => { const m = (p.post_midias || []).sort((a, b) => a.ordem - b.ordem).find(x => x.proporcao !== '9:16'); return html`<button disabled aria-label="Post já publicado"><${MidiaPost} m=${m} cls="antigo" alt="Post já publicado" /></button>`; })}</div></div>
      ${!C.antigos.length && html`<p class="sub" style="text-align:center;margin-top:10px">Os posts já publicados aparecem aqui embaixo assim que forem marcados como publicados.</p>`}`;
  } else {
    corpo = html`<div class="cs-acoes-topo"><${Filtros} />${cliente && pend.length > 0 && html`<button class="btn" onClick=${aprovarTodos}>Aprovar os ${pend.length} pendentes</button>`}</div>
      ${filtrados.length ? html`<div class="cs-lista">${filtrados.map(p => { const nc = C.coments.filter(x => x.post_id === p.id).length, n = feedDe(C, p).length; return html`<div class="cs-item"><button class="cs-item-img" onClick=${() => setAb(p.id)} aria-label=${'Revisar ' + p.titulo}><${MidiaPost} m=${capaDe(C, p)} alt="" /></button><div class="corpo">
        <div class="cs-linha"><b>${diaSem(p.data_publicacao)}, ${dd_mm(p.data_publicacao)}${p.hora ? ' · ' + hhmm(p.hora) : ''}</b><span><${PillCP} s=${p.status} />${atualizado(C, p) && html` <span class="cs-pill cs-up">Atualizado</span>`}</span></div>
        <div class="cs-linha" style="justify-content:flex-start"><${Tema} p=${pilarDe(C, p)} /><span class="sub">${(FORMATOS_POST.find(f => f[0] === p.formato) || [])[1]}${n > 1 ? ' · ' + n + ' cards' : ''}</span></div>
        <b>${p.titulo}</b><p>${p.legenda}</p>${nc > 0 && html`<span class="sub">💬 ${nc} comentário${nc === 1 ? '' : 's'}</span>`}
        <div class="rod"><button class="btn pq pri" onClick=${() => setAb(p.id)}>Revisar</button>${cliente && p.status === 'aguardando_aprovacao' && html`<button class="btn pq" onClick=${async () => { if (ok(await sb.from('posts').update({ status: 'aprovado' }).eq('id', p.id), 'Post aprovado!')) onMudou(); }}>Aprovar</button>`}</div></div></div>`; })}</div>` : html`<p class="vazio" style="text-align:center">Nenhum post com esses filtros.</p>`}`;
  }
  return html`<div class="cs">
    <header class="cs-topo"><div class="w"><div><small>Portal ${C.cliente} · Redes sociais</small><h1>Calendário de ${tituloCal(cal.mes).toLowerCase()}</h1><p>Instagram e Facebook · ${posts.length} publicaç${posts.length === 1 ? 'ão' : 'ões'} · Agência Baraúna</p></div>
      ${cal.prazo_aprovacao && pend.length > 0 && html`<div class=${'cs-prazo' + (prazoPassou ? ' passou' : '')}>⏰ <b>${prazoPassou ? 'O prazo era ' + dd_mm(cal.prazo_aprovacao) : 'Aprove até ' + dd_mm(cal.prazo_aprovacao)}</b> para mantermos as publicações nas datas. Itens sem resposta até lá seguem para ajuste com a agência.</div>`}
      ${cal.status === 'concluido' && html`<div class="cs-prazo ok">✓ <b>Calendário aprovado.</b> Obrigado! Agora é com a gente.</div>`}</div>
      <div class="cs-progresso"><div class="cs-barra" role="img" aria-label=${c.aprovado + ' aprovados, ' + c.ajuste + ' com ajuste, ' + c.aguardando + ' aguardando'}>${[['aprovado', '#10D885'], ['ajuste', '#E5484D'], ['aguardando', '#F5A122']].map(([k, cor]) => html`<i style=${'width:' + (c[k] / tot * 100) + '%;background:' + cor}></i>`)}</div>
        <div class="cs-leg"><span style="--c:#10D885">${c.aprovado} aprovado${c.aprovado === 1 ? '' : 's'}</span><span style="--c:#E5484D">${c.ajuste} com ajuste</span><span style="--c:#F5A122">${c.aguardando} aguardando ${cliente ? 'você' : 'o cliente'}</span></div></div></header>
    <nav class="cs-abas" aria-label="Visualizações"><div class="w" role="tablist">${[['geral', 'Visão geral'], ['cal', 'Calendário'], ['feed', 'Como fica o feed'], ['lista', 'Revisar posts']].map(([k, t]) => html`<button role="tab" aria-selected=${vis === k} class=${vis === k ? 'on' : ''} onClick=${() => setVis(k)}>${t}</button>`)}</div></nav>
    <div class="cs-main">${corpo}</div>
    ${ab && html`<${PostDetalhe} C=${C} id=${ab} setId=${setAb} cliente=${cliente} onMudou=${onMudou} />`}
  </div>`;
}

// janela do post: simulação, pinos na arte, conversa e decisão
function PostDetalhe({ C, id, setId, cliente, onMudou }) {
  const posts = C.posts, i = posts.findIndex(p => p.id === id), p = posts[i];
  const [rede, setRede] = useState('ig'); const [sl, setSl] = useState(0); const [mais, setMais] = useState(false); const [pino, setPino] = useState(null); const [t, setT] = useState(''); const [s, setS] = useState(false);
  const txt = useRef(null);
  useEffect(() => { setSl(0); setMais(false); setPino(null); setT(''); }, [id]);
  const ir = d => { const n = posts[i + d]; if (n) setId(n.id); };
  useEffect(() => { const k = e => { if (e.target.tagName === 'TEXTAREA' || e.target.tagName === 'INPUT') return; if (e.key === 'Escape') setId(null); if (e.key === 'ArrowRight') ir(1); if (e.key === 'ArrowLeft') ir(-1); };
    addEventListener('keydown', k); document.body.style.overflow = 'hidden'; return () => { removeEventListener('keydown', k); document.body.style.overflow = ''; }; }, [i]);
  if (!p) return null;
  const feed = feedDe(C, p), atual = rede === 'st' ? storyDe(C, p) : feed[Math.min(sl, feed.length - 1)], n = feed.length;
  const coments = C.coments.filter(x => x.post_id === p.id), comPino = coments.filter(x => x.pino_x != null);
  const numPino = x => comPino.indexOf(x) + 1;
  const pinosAqui = atual ? comPino.filter(x => x.midia_id === atual.id) : [];
  const pi = pilarDe(C, p), leg = (p.legenda || '') + (p.hashtags ? '\n\n' + p.hashtags : ''), curta = leg.length > 125 && !mais;
  const podeDecidir = cliente && ['aguardando_aprovacao', 'ajuste_solicitado'].includes(p.status);
  const marcar = e => { if (!cliente || !atual || atual.tipo === 'video') return; const r = e.currentTarget.getBoundingClientRect(); setPino({ x: Math.round((e.clientX - r.left) / r.width * 1000) / 10, y: Math.round((e.clientY - r.top) / r.height * 1000) / 10, midia_id: atual.id, n: comPino.length + 1 }); setTimeout(() => txt.current && txt.current.focus(), 50); };
  const decidir = async st => {
    const texto = t.trim();
    if (st === 'ajuste_solicitado' && !texto) { toast('Escreva o que precisa ajustar', 'erro'); txt.current && txt.current.focus(); return; }
    if (!st && !texto) { toast('Escreva o comentário', 'erro'); return; }
    setS(true);
    if (texto) { const r = await sb.from('post_comentarios').insert({ post_id: p.id, texto, midia_id: pino?.midia_id || (rede !== 'st' && n > 1 ? atual?.id : null) || null, pino_x: pino?.x ?? null, pino_y: pino?.y ?? null }); if (!ok(r)) return setS(false); }
    if (st) { const r = await sb.from('posts').update({ status: st }).eq('id', p.id); if (!ok(r)) return setS(false); }
    setS(false); setT(''); setPino(null); toast(st === 'aprovado' ? 'Post aprovado!' : st ? 'Pedido de ajuste enviado para a agência' : 'Comentário enviado');
    if (st) { const prox = posts.find((x, k) => k > i && x.status === 'aguardando_aprovacao') || posts.find(x => x.status === 'aguardando_aprovacao' && x.id !== p.id); if (prox) setId(prox.id); }
    onMudou();
  };
  const arte = html`<div class=${'cs-arte' + (cliente && atual?.tipo !== 'video' ? ' marca' : '')} onClick=${marcar}><${MidiaPost} m=${atual} ctrl=${true} alt=${'Arte: ' + p.titulo} />
    ${rede !== 'st' && pinosAqui.map(x => html`<span class="cs-pino" style=${'left:' + x.pino_x + '%;top:' + x.pino_y + '%'} title=${x.texto}>${numPino(x)}</span>`)}${pino && pino.midia_id === atual?.id && html`<span class="cs-pino novo" style=${'left:' + pino.x + '%;top:' + pino.y + '%'}>${pino.n}</span>`}
    ${rede !== 'st' && n > 1 && html`<div class="cs-setas" onClick=${e => e.stopPropagation()}><button aria-label="Card anterior" style=${sl === 0 ? 'visibility:hidden' : ''} onClick=${() => { setSl(sl - 1); setPino(null); }}>‹</button><button aria-label="Próximo card" style=${sl >= n - 1 ? 'visibility:hidden' : ''} onClick=${() => { setSl(sl + 1); setPino(null); }}>›</button></div>`}</div>`;
  const pontos = rede !== 'st' && n > 1 ? html`<div class="cs-pontos">${feed.map((_, k) => html`<i class=${k === sl ? 'on' : ''}></i>`)}</div>` : null;
  const av = html`<span class="cs-av">${iniciais(C.cliente)}</span>`;
  let celular;
  if (rede === 'st') celular = html`<div class="cs-story"><div class="barras">${(feed.length > 1 ? feed : [0]).map(() => html`<i></i>`)}</div><div class="sh">${av}<b>${C.cliente}</b><span style="opacity:.7">· ${hhmm(p.hora)}</span></div>${arte}</div><p class="dica">Versão para Stories (9:16)${storyDe(C, p)?.proporcao !== '9:16' ? ': ainda sem arte vertical, mostrando a do feed' : ''}.</p>`;
  else if (rede === 'fb') celular = html`<div class="cs-celular"><div class="hd">${av}<div><b>${C.cliente}</b><small>${dd_mm(p.data_publicacao)}${p.hora ? ' às ' + hhmm(p.hora) : ''} · 🌐</small></div>···</div><div class="fb-top">${curta ? leg.slice(0, 125) + '… ' : leg}${curta && html`<button class="mais" onClick=${() => setMais(true)}>Ver mais</button>`}</div>${arte}${pontos}<div class="fb-acoes"><span>👍 Curtir</span><span>💬 Comentar</span><span>↗ Compartilhar</span></div></div>${cliente && html`<p class="dica">Clique na arte para marcar um ponto e comentar.</p>`}`;
  else celular = html`<div class="cs-celular"><div class="hd">${av}<div><b>${C.cliente}</b><small>${p.formato === 'reels' ? 'Áudio original' : 'Instagram'}</small></div>···</div>${arte}${pontos}<div class="ig-acoes">♡ 💬 ➤<span style="margin-left:auto">⌑</span></div><div class="legenda"><b>${C.cliente}</b> ${curta ? leg.slice(0, 125) + '…' : leg} ${curta && html`<button class="mais" onClick=${() => setMais(true)}>mais</button>`}</div></div>${cliente && html`<p class="dica">Clique na arte para marcar um ponto e comentar.</p>`}`;
  const mud = atualizado(C, p) ? mudouDesde(C, p) : [];
  return html`<div class="cs-fundo" onClick=${e => e.target === e.currentTarget && setId(null)}><div class="cs-modal" role="dialog" aria-modal="true" aria-labelledby="cs-mt">
    <div class="esq"><div class="cs-seg" role="group" aria-label="Rede">${[['ig', 'Instagram'], ['fb', 'Facebook'], ['st', 'Stories']].map(([k, l]) => html`<button class=${rede === k ? 'on' : ''} aria-pressed=${rede === k} onClick=${() => { setRede(k); setPino(null); }}>${l}</button>`)}</div>${celular}</div>
    <div class="dir">
      <div class="cs-navpost"><button class="btn pq" disabled=${i === 0} onClick=${() => ir(-1)}>‹ Anterior</button><span class="sub">${i + 1} de ${posts.length}</span><button class="btn pq" disabled=${i === posts.length - 1} onClick=${() => ir(1)}>Próximo ›</button><button class="cs-x" onClick=${() => setId(null)} aria-label="Fechar">×</button></div>
      <div><div class="cs-linha" style="justify-content:flex-start"><${PillCP} s=${p.status} eq=${!cliente} />${atualizado(C, p) && html`<span class="cs-pill cs-up">Atualizado${mud.length ? ': ' + mud.join(', ') : ''}</span>`}<${Tema} p=${pi} /></div><h2 id="cs-mt" class="cs-h2" style="margin:8px 0 0">${p.titulo}</h2></div>
      <div class="cs-meta"><div><small>Publicação</small>${diaSem(p.data_publicacao)}, ${dd_mm(p.data_publicacao)}${p.hora ? ' às ' + hhmm(p.hora) : ''}</div><div><small>Formato</small>${(FORMATOS_POST.find(f => f[0] === p.formato) || [])[1]}${n > 1 ? ' · ' + n + ' cards' : ''}</div><div><small>Canais</small>${(p.canais || []).map(c => (CANAIS.find(x => x[0] === c) || [c, c])[1]).join(', ') || '—'}</div></div>
      ${p.roteiro && html`<div><b class="cs-rot">Roteiro do vídeo</b><div class="cs-capt">${p.roteiro}</div></div>`}
      <div><b class="cs-rot">Legenda</b> <span class="sub">(${tam(p.legenda)} caracteres · as primeiras ~125 aparecem antes do “mais”)</span><div class="cs-capt">${p.legenda}${p.hashtags && html`${'\n\n'}<span style="color:#00376B">${p.hashtags}</span>`}</div></div>
      ${p.pergunta_agencia && html`<div class="cs-pergunta"><b>Pergunta da agência:</b> ${p.pergunta_agencia}</div>`}
      <div><b class="cs-rot">Comentários</b><div class="cs-coments">${coments.length ? coments.map(x => { const k = C.midias.filter(m => m.post_id === p.id && m.proporcao !== '9:16').findIndex(m => m.id === x.midia_id); return html`<div class=${'cs-coment ' + (x.autor_agencia ? 'ag' : 'cli') + (x.resolvido ? ' res' : '')}><small>${x.autor_agencia ? 'Agência Baraúna' : cliente ? 'Você' : 'Cliente'} · ${dataHora(x.criado_em)} · v${x.versao}${k >= 0 && n > 1 ? ' · card ' + (k + 1) : ''}${x.resolvido ? ' · resolvido' : ''}</small>${x.pino_x != null && html`<span class="cs-tagpino">${numPino(x)}</span>`}${x.texto}</div>`; }) : html`<span class="sub">Nenhum comentário ainda.</span>`}</div></div>
      ${cliente && html`<div class="campo"><label for="cs-txt">${pino ? 'Comentário no ponto ' + pino.n + (n > 1 && rede !== 'st' ? ' (card ' + (sl + 1) + ')' : '') : 'Comentário ou pedido de ajuste'}</label><textarea id="cs-txt" ref=${txt} value=${t} onInput=${e => setT(e.target.value)} placeholder="Ex.: trocar a cor do título; ajustar o texto do segundo card…"></textarea>${pino && html`<button class="lnk" style="align-self:flex-start" onClick=${() => setPino(null)}>Remover marcador</button>`}</div>
        <div class="cs-decisao">${podeDecidir ? html`<button class="btn pri" disabled=${s} onClick=${() => decidir('aprovado')}>✓ Aprovar</button><button class="btn cs-alerta" disabled=${s} onClick=${() => decidir('ajuste_solicitado')}>Pedir ajuste</button>` : html`<${PillCP} s=${p.status} />`}<button class="btn" disabled=${s} onClick=${() => decidir(null)}>Só comentar</button>
          <span class="sub" style="flex-basis:100%">Dica: use as setas ← → do teclado para passar de um post para o outro.</span></div>`}
    </div>
    ${cliente && html`<div class="cs-barra-movel">${podeDecidir ? html`<button class="btn pri" disabled=${s} onClick=${() => decidir('aprovado')}>✓ Aprovar</button>` : html`<${PillCP} s=${p.status} />`}<button class="btn" onClick=${() => { txt.current && (txt.current.scrollIntoView({ behavior: 'smooth', block: 'center' }), setTimeout(() => txt.current.focus(), 300)); }}>💬 Comentar / ajuste</button></div>`}
  </div></div>`;
}

// ---------- equipe: montar, enviar e acompanhar
function LembreteCalendarios({ cid }) {
  const [l, setL] = useState([]);
  useEffect(() => { let q = sb.from('calendarios').select('id,mes,prazo_aprovacao,cliente_id,clientes(nome_empresa),posts(status)').eq('status', 'enviado').not('prazo_aprovacao', 'is', null).lte('prazo_aprovacao', isoD(new Date(Date.now() + 3 * 864e5)));
    if (cid) q = q.eq('cliente_id', cid); q.then(r => setL((r.data || []).map(c => ({ ...c, pend: (c.posts || []).filter(p => p.status === 'aguardando_aprovacao').length })).filter(c => c.pend > 0))); }, [cid]);
  if (!l.length) return null;
  return html`<section class="card cs-lembrete" role="status"><b>⏰ Prazo de aprovação chegando</b><div class="lista">${l.map(c => html`<div><div><b>${c.clientes?.nome_empresa} · ${tituloCal(c.mes)}</b><div class="sub">${c.pend} post${c.pend === 1 ? '' : 's'} sem resposta · prazo ${c.prazo_aprovacao < hojeISO() ? 'venceu em' : 'até'} ${dd_mm(c.prazo_aprovacao)}</div></div><a class="btn pq" href="#/redes">Ver calendário</a></div>`)}</div></section>`;
}

function CalendarioEquipe({ cid, mes, cliente }) {
  const [C, setC] = useState(undefined); const [ed, setEd] = useState(null); const [mt, setMt] = useState(null); const [dc, setDc] = useState(false); const [prev, setPrev] = useState(false); const [env, setEnv] = useState(false);
  const mesD = mes + '-01';
  const carregar = async () => { const { data } = await sb.from('calendarios').select('id').eq('cliente_id', cid).eq('mes', mesD).maybeSingle(); setC(data ? await carregarCalendario(data.id) : null); };
  useEffect(() => { setC(undefined); if (cid) carregar(); }, [cid, mes]);
  if (C === undefined) return html`<${Carregando} />`;
  const criar = async v => { const r = await sb.from('calendarios').insert({ cliente_id: cid, mes: mesD, objetivo: v.objetivo || null, frequencia: v.frequencia || null, prazo_aprovacao: v.prazo_aprovacao || null }).select('id').single(); if (!ok(r, 'Calendário criado')) return false;
    const temas = linhasDe(v.temas); if (temas.length) await sb.from('calendario_pilares').insert(temas.map((t, k) => { const [nome, desc] = t.split('|'); return { calendario_id: r.data.id, nome: nome.trim(), descricao: desc ? desc.trim() : null, cor: CORES_TEMA[k % CORES_TEMA.length], ordem: k + 1 }; }));
    carregar(); };
  if (!C) return html`<section class="card"><h2>Calendário de ${tituloCal(mesD).toLowerCase()}</h2><p class="sub">${cliente} ainda não tem calendário neste mês. Crie com o objetivo, a frequência, o prazo de aprovação e os temas; depois monte os posts.</p>
    <div><button class="btn pri" onClick=${() => setDc(true)}>Criar calendário do mês</button></div>
    ${dc && html`<${FormModal} titulo=${'Calendário de ' + tituloCal(mesD).toLowerCase()} inicial=${{ temas: 'Dicas | Conteúdo prático para o dia a dia\nAutoridade e cases | Experiência e resultados\nBastidores | Pessoas e jeito de trabalhar\nDatas e institucional | Datas comemorativas e mensagens da marca' }} rotulo="Criar calendário" onSalvar=${criar} onFechar=${() => setDc(false)} campos=${[
      { n: 'objetivo', l: 'Objetivo do mês', tipo: 'area', ph: 'Ex.: mostrar que existe ajuda especializada para quem usa o myLIMS' }, { n: 'frequencia', l: 'Frequência', ph: 'Ex.: terças e quintas + datas comemorativas' },
      { n: 'prazo_aprovacao', l: 'Prazo para o cliente aprovar', tipo: 'date' }, { n: 'temas', l: 'Temas do mês (um por linha)', tipo: 'area', ajuda: 'Use “|” para a descrição. As cores podem ser trocadas depois.' }]} />`}</section>`;
  const { cal, posts } = C, c = contagem(posts), rasc = posts.filter(p => p.status === 'rascunho').length;
  const semArte = posts.filter(p => !midiasDe(C, p).length || !String(p.legenda || '').trim());
  const salvarDados = async v => { if (!ok(await sb.from('calendarios').update({ objetivo: v.objetivo || null, frequencia: v.frequencia || null, prazo_aprovacao: v.prazo_aprovacao || null }).eq('id', cal.id), 'Calendário salvo')) return false; carregar(); };
  const salvarTema = async v => { const d = { nome: v.nome, descricao: v.descricao || null, cor: v.cor || '#10D885' }; const r = mt.id ? await sb.from('calendario_pilares').update(d).eq('id', mt.id) : await sb.from('calendario_pilares').insert({ ...d, calendario_id: cal.id, ordem: C.pilares.length + 1 }); if (!ok(r, 'Tema salvo')) return false; carregar(); };
  const enviar = async () => { if (semArte.length) return toast('Complete arte e legenda de: ' + semArte.map(p => p.titulo).join(', '), 'erro');
    if (!confirm('Enviar o calendário de ' + tituloCal(cal.mes).toLowerCase() + ' para o cliente aprovar? ' + (rasc || posts.length) + ' post(s) passam a aparecer no portal.')) return;
    setEnv(true); const r = await sb.rpc('calendario_enviar', { p_cal: cal.id }); setEnv(false); if (ok(r, 'Calendário enviado para aprovação')) carregar(); };
  const [a, m] = mes.split('-').map(Number), ini = new Date(a, m - 1, 1), off = (ini.getDay() + 6) % 7, nd = new Date(a, m, 0).getDate(), totC = Math.ceil((off + nd) / 7) * 7;
  const abertos = id => C.coments.filter(x => x.post_id === id && !x.autor_agencia && !x.resolvido).length;
  return html`<section class="card">
      <div class="topo" style="margin-bottom:12px"><div><h2>Calendário de ${tituloCal(cal.mes).toLowerCase()} <${PillDe} mapa=${ST_CAL} v=${cal.status} /></h2><p class="sub" style="margin:4px 0 0">${cal.objetivo || 'Sem objetivo definido'}${cal.frequencia ? ' · ' + cal.frequencia : ''}${cal.prazo_aprovacao ? ' · prazo de aprovação ' + dd_mm(cal.prazo_aprovacao) : ''}</p></div>
        <div class="acoes"><button class="btn pq" onClick=${() => setPrev(true)}>Ver como o cliente</button><button class="btn pq" onClick=${() => setMt({ cal })}>Editar dados</button>${(cal.status === 'rascunho' || rasc > 0) && html`<button class="btn pq pri" disabled=${env || !posts.length} onClick=${enviar}>${cal.status === 'rascunho' ? 'Enviar calendário para aprovação' : 'Enviar ' + rasc + ' post(s) novo(s)'}</button>`}</div></div>
      ${posts.length > 0 && html`<div class="cs-barra eq" role="img" aria-label="Andamento">${[['aprovado', '#10D885'], ['ajuste', '#E5484D'], ['aguardando', '#F5A122'], ['rascunho', '#DCE3DF']].map(([k, cor]) => html`<i style=${'width:' + (c[k] / posts.length * 100) + '%;background:' + cor}></i>`)}</div>
        <div class="cs-leg eq"><span style="--c:#10D885">${c.aprovado} aprovados</span><span style="--c:#E5484D">${c.ajuste} com ajuste</span><span style="--c:#F5A122">${c.aguardando} aguardando o cliente</span>${c.rascunho > 0 && html`<span style="--c:#B9C7C0">${c.rascunho} em rascunho</span>`}</div>`}
      ${semArte.length > 0 && cal.status === 'rascunho' && html`<p class="sub" style="color:#7A4F00;margin:10px 0 0">Antes de enviar: ${semArte.length} post(s) sem arte ou sem legenda.</p>`}
      <div class="cs-temas"><span class="sub">Temas:</span>${C.pilares.map(x => html`<button class="cs-chip" style=${'--c:' + x.cor} onClick=${() => setMt(x)}><span class="cs-tema" style=${'--c:' + x.cor}>${x.nome}</span></button>`)}<button class="cs-chip" onClick=${() => setMt({ cor: CORES_TEMA[C.pilares.length % CORES_TEMA.length] })}>+ Tema</button></div>
    </section>
    <section class="card"><div class="topo" style="margin-bottom:10px"><h2>Posts do mês (${posts.length})</h2><button class="btn pri pq" onClick=${() => setEd({ data_publicacao: mesD, hora: '11:30', formato: 'imagem', canais: ['instagram', 'facebook'] })}>Novo post</button></div>
      <div class="tabela"><div class="cs-cal eq">${['Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb', 'Dom'].map(d => html`<div class="dsem">${d}</div>`)}
        ${Array.from({ length: totC }, (_, i) => { const d = i - off + 1; if (d < 1 || d > nd) return html`<div class="cs-dia fora"></div>`; const iso = mes + '-' + String(d).padStart(2, '0'), ps = posts.filter(p => p.data_publicacao === iso), fer = FERIADOS_FIXOS[iso.slice(5)];
          return html`<div class=${'cs-dia' + (i % 7 >= 5 ? ' fds' : '')}><span class=${'n' + (fer ? ' feriado' : '')}>${d}${fer ? ' · ' + fer : ''}</span>${ps.map(p => { const x = ST_CP_EQ[p.status] || ST_CP.rascunho, ab = abertos(p.id); return html`<button class="cs-mini" style=${'--c:' + (pilarDe(C, p)?.cor || '#B9C7C0')} onClick=${() => setEd(p)}><span><i class="hr">${hhmm(p.hora)} · ${(FORMATOS_POST.find(f => f[0] === p.formato) || [])[1]}</i>${p.titulo}${ab > 0 ? ' · 💬' + ab : ''}</span><i class="st" style=${'background:' + x[2]} title=${x[0]}></i></button>`; })}
            <button class="cs-add" aria-label=${'Novo post em ' + dd_mm(iso)} onClick=${() => setEd({ data_publicacao: iso, hora: '11:30', formato: 'imagem', canais: ['instagram', 'facebook'] })}>+</button></div>`; })}</div></div></section>
    ${posts.some(p => p.status === 'ajuste_solicitado' || abertos(p.id)) && html`<section class="card"><h2>Pedidos de ajuste e comentários do cliente</h2><div class="lista">${posts.filter(p => p.status === 'ajuste_solicitado' || abertos(p.id)).map(p => html`<div><div><b>${dd_mm(p.data_publicacao)} · ${p.titulo}</b><div class="sub">${C.coments.filter(x => x.post_id === p.id && !x.autor_agencia && !x.resolvido).map(x => x.texto).join(' · ').slice(0, 160) || 'Sem comentários em aberto'}</div></div><div class="acoes"><${PillCP} s=${p.status} eq=${true} /><button class="btn pq pri" onClick=${() => setEd(p)}>Abrir</button></div></div>`)}</div></section>`}
    ${ed && html`<${EditorPost} C=${C} base=${ed} cid=${cid} onFechar=${() => setEd(null)} onMudou=${carregar} />`}
    ${mt && (mt.cal ? html`<${FormModal} titulo="Dados do calendário" inicial=${cal} onSalvar=${salvarDados} onFechar=${() => setMt(null)} campos=${[{ n: 'objetivo', l: 'Objetivo do mês', tipo: 'area' }, { n: 'frequencia', l: 'Frequência' }, { n: 'prazo_aprovacao', l: 'Prazo para o cliente aprovar', tipo: 'date' }]} />`
      : html`<${FormModal} titulo=${mt.id ? 'Editar tema' : 'Novo tema'} inicial=${mt} onSalvar=${salvarTema} onFechar=${() => setMt(null)} campos=${[{ n: 'nome', l: 'Nome do tema', obrig: true }, { n: 'descricao', l: 'Descrição', tipo: 'area' }, { n: 'cor', l: 'Cor', tipo: 'color' }]} antes=${mt.id ? html`<button class="lnk" style="align-self:flex-end;color:#A12A1F" type="button" onClick=${async () => { if (confirm('Excluir o tema “' + mt.nome + '”? Os posts ficam sem tema.') && ok(await sb.from('calendario_pilares').delete().eq('id', mt.id), 'Tema excluído')) { setMt(null); carregar(); } }}>Excluir tema</button>` : null} />`)}
    ${prev && html`<div class="fundo" onClick=${e => e.target === e.currentTarget && setPrev(false)}><div class="modal" style="max-width:1200px;padding:0;overflow:hidden" role="dialog" aria-modal="true" aria-label="Prévia do cliente"><header style="padding:14px 18px"><h2>Como o cliente vê</h2><button class="btn pq" onClick=${() => setPrev(false)}>Fechar</button></header><${CalendarioVisao} C=${C} cliente=${false} onMudou=${carregar} /></div></div>`}`;
}

function EditorPost({ C, base, cid, onFechar, onMudou }) {
  const [p, setP] = useState({ ...base, hora: hhmm(base.hora), legenda: base.legenda || '', hashtags: base.hashtags || '', titulo: base.titulo || '', roteiro: base.roteiro || '', pergunta_agencia: base.pergunta_agencia || '', pilar_id: base.pilar_id || '' });
  const [s, setS] = useState(false); const [up, setUp] = useState(false); const [resp, setResp] = useState(''); const [mid, setMid] = useState([]); const [com, setCom] = useState([]);
  const id = p.id;
  const recarregarItens = async () => { if (!id) return; const [a, b] = await Promise.all([sb.from('post_midias').select('*').eq('post_id', id).order('ordem').order('criado_em'), sb.from('post_comentarios').select('*').eq('post_id', id).order('criado_em')]); setMid(a.data || []); setCom(b.data || []); };
  useEffect(() => { recarregarItens(); }, [id]);
  const set = (k, v) => setP(o => ({ ...o, [k]: v }));
  const salvar = async () => {
    if (!p.titulo.trim() || !p.data_publicacao) return toast('Preencha o título e a data', 'erro');
    setS(true);
    const d = { cliente_id: cid, calendario_id: C.cal.id, data_publicacao: p.data_publicacao, hora: p.hora || null, titulo: p.titulo.trim(), legenda: p.legenda || null, hashtags: p.hashtags.trim() || null, formato: p.formato, pilar_id: p.pilar_id || null, roteiro: p.roteiro.trim() || null, pergunta_agencia: p.pergunta_agencia.trim() || null, canais: p.canais || ['instagram', 'facebook'] };
    const r = id ? await sb.from('posts').update(d).eq('id', id).select().single() : await sb.from('posts').insert({ ...d, status: C.cal.status === 'rascunho' ? 'rascunho' : 'rascunho' }).select().single();
    setS(false); if (!ok(r, id ? 'Post salvo' : 'Post criado. Agora envie as artes.')) return false;
    setP(o => ({ ...o, id: r.data.id, status: r.data.status, versao: r.data.versao })); onMudou(); return true;
  };
  const subir = async ev => {
    const fs = [...ev.target.files]; ev.target.value = ''; if (!fs.length || !id) return;
    setUp(true); let o = mid.reduce((x, m) => Math.max(x, m.ordem || 0), 0) + 1;
    for (const f of fs) {
      if (!/^(image|video)\//.test(f.type)) { toast('Envie imagem ou vídeo: ' + f.name, 'erro'); continue; }
      if (f.size > 50 * 1024 * 1024) { toast('Arquivo acima de 50 MB: ' + f.name, 'erro'); continue; }
      const nome = f.name.normalize('NFD').replace(/[̀-ͯ]/g, '').replace(/[^A-Za-z0-9._-]+/g, '-'), path = aleatorio() + '/' + nome;
      const r = await sb.storage.from('previas').upload(path, f, { contentType: f.type, cacheControl: '3600' }); if (r.error) { toast(r.error.message, 'erro'); continue; }
      const prop = await new Promise(res => { const fim = (w, h) => res(!w || !h ? '4:5' : h / w > 1.5 ? '9:16' : h / w > 1.12 ? '4:5' : '1:1'); if (f.type.startsWith('image/')) { const im = new Image(); im.onload = () => fim(im.naturalWidth, im.naturalHeight); im.onerror = () => res('4:5'); im.src = URL.createObjectURL(f); } else { const v = document.createElement('video'); v.preload = 'metadata'; v.onloadedmetadata = () => fim(v.videoWidth, v.videoHeight); v.onerror = () => res('9:16'); v.src = URL.createObjectURL(f); } });
      await sb.from('post_midias').insert({ post_id: id, arquivo_path: path, tipo: f.type.startsWith('video/') ? 'video' : 'imagem', proporcao: prop, ordem: o++ });
    }
    setUp(false); toast('Artes enviadas'); recarregarItens(); onMudou();
  };
  const moverM = async (k, dlt) => { const a = mid[k], b = mid[k + dlt]; if (!a || !b) return; await sb.from('post_midias').update({ ordem: b.ordem === a.ordem ? k + dlt : b.ordem }).eq('id', a.id); await sb.from('post_midias').update({ ordem: b.ordem === a.ordem ? k : a.ordem }).eq('id', b.id); recarregarItens(); onMudou(); };
  const responder = async () => { if (!resp.trim()) return; if (ok(await sb.from('post_comentarios').insert({ post_id: id, texto: resp.trim() }), 'Resposta enviada')) { setResp(''); recarregarItens(); onMudou(); } };
  const resolver = async (x, v) => { if (ok(await sb.from('post_comentarios').update({ resolvido: v }).eq('id', x.id))) { recarregarItens(); onMudou(); } };
  const novaVersao = async () => { if (!(await salvar())) return; if (!confirm('Enviar a nova versão deste post ao cliente? Ele volta para “Aguardando você” com o selo “Atualizado”.')) return;
    const r = await sb.rpc('post_enviar_versao', { p_post: id }); if (ok(r, 'Versão ' + r.data + ' enviada ao cliente')) { onMudou(); onFechar(); } };
  const excluir = async () => { if (confirm('Excluir este post?') && ok(await sb.from('posts').delete().eq('id', id), 'Post excluído')) { onMudou(); onFechar(); } };
  const nl = tam(p.legenda), nh = (p.hashtags.match(/#[^\s#]+/g) || []).length, comPino = com.filter(x => x.pino_x != null);
  return html`<div class="fundo" onClick=${e => e.target === e.currentTarget && onFechar()}><div class="modal cs-editor" role="dialog" aria-modal="true" aria-label=${id ? 'Editar post' : 'Novo post'}>
    <header><div><h2>${id ? p.titulo || 'Post' : 'Novo post'}</h2>${id && html`<span class="sub"><${PillCP} s=${p.status} eq=${true} /> · versão ${p.versao || 1}</span>`}</div><button class="btn pq" onClick=${onFechar}>Fechar</button></header>
    <div class="cs-ed-cols"><div class="form">
      <div class="ads-form-grid"><div class="campo"><label for="pdt">Data *</label><input id="pdt" type="date" value=${p.data_publicacao} onInput=${e => set('data_publicacao', e.target.value)} /></div>
        <div class="campo"><label for="phr">Hora</label><input id="phr" type="time" value=${p.hora} onInput=${e => set('hora', e.target.value)} /></div>
        <div class="campo"><label for="pfm">Formato</label><select id="pfm" value=${p.formato} onChange=${e => set('formato', e.target.value)}>${FORMATOS_POST.map(([k, l]) => html`<option value=${k}>${l}</option>`)}</select></div>
        <div class="campo"><label for="ptm">Tema</label><select id="ptm" value=${p.pilar_id} onChange=${e => set('pilar_id', e.target.value)}><option value="">Sem tema</option>${C.pilares.map(x => html`<option value=${x.id}>${x.nome}</option>`)}</select></div></div>
      <div class="campo"><label for="pti">Título interno *</label><input id="pti" value=${p.titulo} onInput=${e => set('titulo', e.target.value)} placeholder="Ex.: 5 relatórios essenciais no myLIMS" /></div>
      <div class="campo"><label for="plg">Legenda <span class=${'ads-cont' + (nl > 2200 ? ' over' : '')}>${nl}/2.200</span></label><textarea id="plg" style="min-height:140px" value=${p.legenda} onInput=${e => set('legenda', e.target.value)}></textarea><span class="sub">As primeiras ~125 caracteres aparecem antes do “mais”: ${nl > 125 ? '“' + p.legenda.slice(0, 125).trim() + '…”' : 'a legenda inteira aparece.'}</span></div>
      <div class="campo"><label for="pht">Hashtags <span class=${'ads-cont' + (nh > 30 ? ' over' : nh > 15 ? ' av' : '')}>${nh} hashtag${nh === 1 ? '' : 's'}</span></label><input id="pht" value=${p.hashtags} onInput=${e => set('hashtags', e.target.value)} placeholder="#myLIMS #laboratorio" /><span class="sub">O Instagram aceita até 30; entre 3 e 15 costuma funcionar melhor.</span></div>
      ${['reels', 'stories'].includes(p.formato) && html`<div class="campo"><label for="prt">Roteiro do vídeo</label><textarea id="prt" value=${p.roteiro} onInput=${e => set('roteiro', e.target.value)}></textarea></div>`}
      <div class="campo"><label for="ppg">Pergunta para o cliente</label><input id="ppg" value=${p.pergunta_agencia} onInput=${e => set('pergunta_agencia', e.target.value)} placeholder="Ex.: podemos citar o nome do cliente neste case?" /></div>
      <div class="acoes"><button class="btn pri" disabled=${s} onClick=${salvar}>${s ? 'Salvando…' : id ? 'Salvar post' : 'Criar post'}</button>${id && p.status === 'ajuste_solicitado' && html`<button class="btn pri" disabled=${s} onClick=${novaVersao}>Salvar e enviar nova versão</button>`}${id && html`<button class="btn" style="color:#A12A1F" onClick=${excluir}>Excluir</button>`}</div>
    </div>
    <div class="form">
      <div><h3>Artes (${mid.length})</h3><p class="sub" style="margin:4px 0 8px">Cards do feed na ordem do carrossel e, se houver, a versão 9:16 para Stories. A proporção é detectada pelo tamanho do arquivo.</p>
        ${!id ? html`<p class="vazio">Crie o post para enviar as artes.</p>` : html`<div class="cs-ed-midias">${mid.map((m, k) => { const ps = comPino.filter(x => x.midia_id === m.id); return html`<div class="cs-ed-midia"><div class="cs-arte"><${MidiaPost} m=${m} ctrl=${true} />${ps.map(x => html`<span class="cs-pino" style=${'left:' + x.pino_x + '%;top:' + x.pino_y + '%'} title=${x.texto}>${comPino.indexOf(x) + 1}</span>`)}</div>
          <select aria-label="Proporção" value=${m.proporcao} onChange=${async e => { await sb.from('post_midias').update({ proporcao: e.target.value }).eq('id', m.id); recarregarItens(); onMudou(); }}><option value="4:5">4:5 feed</option><option value="1:1">1:1 feed</option><option value="9:16">9:16 Stories</option></select>
          <${BtnsLinha} onCima=${k > 0 && (() => moverM(k, -1))} onBaixo=${k < mid.length - 1 && (() => moverM(k, 1))} onExcluir=${async () => { if (confirm('Remover esta arte?')) { await sb.from('post_midias').delete().eq('id', m.id); recarregarItens(); onMudou(); } }} /></div>`; })}
          <label class="ads-up"><input type="file" accept="image/*,video/mp4,video/quicktime,video/webm" multiple onChange=${subir} disabled=${up} /><span>${up ? 'Enviando…' : '+ Enviar artes ou vídeos'}</span><small>JPG, PNG, WebP, MP4 ou MOV, até 50 MB</small></label></div>`}</div>
      ${id && html`<div><h3>Comentários do cliente</h3><div class="cs-coments" style="margin-top:8px">${com.length ? com.map(x => html`<div class=${'cs-coment ' + (x.autor_agencia ? 'ag' : 'cli') + (x.resolvido ? ' res' : '')}><small>${x.autor_agencia ? 'Agência' : 'Cliente'} · ${dataHora(x.criado_em)} · v${x.versao}${x.resolvido ? ' · resolvido' : ''}</small>${x.pino_x != null && html`<span class="cs-tagpino">${comPino.indexOf(x) + 1}</span>`}${x.texto}
          ${!x.autor_agencia && html`<div><button class="lnk" onClick=${() => resolver(x, !x.resolvido)}>${x.resolvido ? 'Reabrir' : 'Marcar como resolvido'}</button></div>`}</div>`) : html`<span class="sub">Nenhum comentário.</span>`}</div>
        <div class="form" style="gap:8px;margin-top:10px"><textarea value=${resp} onInput=${e => setResp(e.target.value)} placeholder="Responder ao cliente" aria-label="Responder ao cliente" style="min-height:60px"></textarea><div><button class="btn pq" disabled=${!resp.trim()} onClick=${responder}>Responder</button></div></div></div>`}
    </div></div></div></div>`;
}

function App() {
  const rota = useRota();
  const [sessao, setSessao] = useState(undefined); const [perfil, setPerfil] = useState(undefined);
  useEffect(() => {
    sb.auth.getSession().then(({ data }) => setSessao(data.session));
    const { data } = sb.auth.onAuthStateChange((_e, s) => setSessao(s));
    return () => data.subscription.unsubscribe();
  }, []);
  const uid = sessao?.user?.id;
  const carregarPerfil = () => { if (!uid) return setPerfil(null); sb.from('perfis').select('*').eq('id', uid).single().then(({ data }) => setPerfil(data || null)); };
  useEffect(() => { setPerfil(undefined); carregarPerfil(); }, [uid]);
  let tela;
  if (rota.startsWith('/p/')) tela = html`<${PropostaPublica} token=${rota.slice(3)} />`;
  else if (rota.startsWith('/redefinir/')) tela = html`<${RedefinirSenha} token=${rota.split('/')[2]} />`;
  else if (sessao === undefined || (sessao && perfil === undefined)) tela = html`<${Carregando} />`;
  else if (!sessao) tela = html`<${Login} />`;
  else if (!perfil) tela = html`<${Pendente} />`;
  else if (perfil.precisa_trocar_senha) tela = html`<${TrocarSenha} perfil=${perfil} onOk=${carregarPerfil} />`;
  else if (perfil.papel === 'pendente') tela = html`<${Pendente} />`;
  else if (perfil.papel === 'cliente') tela = html`<${Portal} perfil=${perfil} rota=${rota} />`;
  else tela = html`<${Painel} perfil=${perfil} rota=${rota} />`;
  return html`${tela}<${Toast} />`;
}
render(html`<${App} />`, document.getElementById('app'));

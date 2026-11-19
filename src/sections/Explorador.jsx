/*
 * FATIA 20261119_RECURSOS — navegação mais curta e conteúdo do catálogo de 19/11/2026.
 *  - AcessoRapido: atalhos logo abaixo da abertura.
 *  - Explorador: recursos do OmniNerd em abas por módulo; cada recurso abre num <details>.
 *    Sem JavaScript, TODAS as abas aparecem empilhadas (o CSS só esconde as inativas com .js),
 *    e os botões das abas são links (#rx-<id>) — o texto inteiro fica no HTML (Google, Meta, leitor de tela).
 *  - Destaques, NovoSac, Saude e Sobre (com #suporte).
 * Mini telas = HTML decorativo (aria-hidden), sem print e sem dado real.
 */
import { useEffect, useState } from 'react';
import Icon from '../components/Icon.jsx';
import { SectionHead, Check } from '../components/ui.jsx';
import { ACESSO, AGENDAR, SOBRE_PILARES, SUPORTE_ITENS, FUNDACAO, WHATS_URL, WHATS_NUM, SISTEMA_URL } from '../data/site.js';
import { RECURSOS_ABAS, DESTAQUES, SAC_PILARES, SAUDE_PASSOS, SAUDE_ITENS } from '../data/recursos.js';

/* ---------------------------------------------------------------- Acesso rápido */
export function AcessoRapido() {
  return (
    <nav id="conteudo" className="quick-wrap scroll-mt-16" aria-label="Acesso rápido">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="quick">
          <div className="quick-head">
            <span className="mono"><span className="text-brand-l" aria-hidden="true">●</span> Acesso rápido</span>
            <span className="mono hidden sm:inline">Vá direto ao que você procura</span>
          </div>
          <ul className="quick-tiles">
            {ACESSO.map((a, i) => (
              <li key={a.href}>
                <a href={a.href} className={`quick-tile ${i === 0 ? 'hot' : ''}`}>
                  <span className="mono quick-n" aria-hidden="true">{String(i + 1).padStart(2, '0')}</span>
                  <Icon name="arrow-up-right" className="quick-arr w-4 h-4" />
                  <span className="quick-ic"><Icon name={a.icon} className="w-5 h-5" strokeWidth={1.8} /></span>
                  <b>{a.titulo}</b>
                  <span className="quick-txt">{a.texto}</span>
                  {a.novo && <span className="badge-new quick-tag">NOVO</span>}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}

/* ---------------------------------------------------------------- Explorador de recursos */
export function Explorador() {
  const [ativa, setAtiva] = useState(RECURSOS_ABAS[0].id);

  // Links #rx-<id> (cartões de novidades ou endereço colado) abrem a aba certa e rolam até o explorador.
  useEffect(() => {
    const abrir = (hash) => {
      const id = hash.startsWith('#rx-') ? hash.slice(4) : '';
      if (!RECURSOS_ABAS.some((a) => a.id === id)) return false;
      setAtiva(id);
      requestAnimationFrame(() => document.getElementById('recursos')?.scrollIntoView({ block: 'start' }));
      return true;
    };
    abrir(location.hash);
    const clique = (e) => {
      const a = e.target.closest?.('a[href^="#rx-"]');
      if (!a || a.closest('[role="tablist"]')) return;
      if (abrir(a.getAttribute('href'))) e.preventDefault();
    };
    const hash = () => abrir(location.hash);
    document.addEventListener('click', clique);
    window.addEventListener('hashchange', hash);
    return () => { document.removeEventListener('click', clique); window.removeEventListener('hashchange', hash); };
  }, []);

  const escolher = (id, foco) => {
    setAtiva(id);
    if (foco) requestAnimationFrame(() => document.getElementById(`tab-${id}`)?.focus());
    // no celular, traz a aba escolhida para dentro da faixa rolável
    requestAnimationFrame(() => document.getElementById(`tab-${id}`)?.scrollIntoView({ block: 'nearest', inline: 'nearest' }));
  };
  const teclado = (e) => {
    const i = RECURSOS_ABAS.findIndex((a) => a.id === ativa);
    const ir = { ArrowDown: 1, ArrowRight: 1, ArrowUp: -1, ArrowLeft: -1 }[e.key];
    if (ir) { e.preventDefault(); escolher(RECURSOS_ABAS[(i + ir + RECURSOS_ABAS.length) % RECURSOS_ABAS.length].id, true); }
    if (e.key === 'Home') { e.preventDefault(); escolher(RECURSOS_ABAS[0].id, true); }
    if (e.key === 'End') { e.preventDefault(); escolher(RECURSOS_ABAS[RECURSOS_ABAS.length - 1].id, true); }
  };

  return (
    <section id="recursos" className="py-24 scroll-mt-16" aria-labelledby="titulo-recursos">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="reveal grid gap-6 lg:grid-cols-[1.2fr_0.8fr] lg:items-end mb-10 md:mb-12">
          <div>
            <span className="eyebrow">Recursos do OmniNerd</span>
            <h2 id="titulo-recursos" className="h-sec mt-4">Tudo o que a plataforma faz, <span className="hl">sem rolar a página inteira.</span></h2>
          </div>
          <p className="lead">Escolha a área e abra cada recurso para ver os detalhes. Um sistema em módulos: comece pelo que mais importa hoje e cresça quando quiser.</p>
        </div>

        <div className="rx">
          <div className="rx-tabs" role="tablist" aria-label="Áreas do OmniNerd" aria-orientation="vertical" onKeyDown={teclado}>
            {RECURSOS_ABAS.map((a) => {
              const on = a.id === ativa;
              return (
                <a key={a.id} id={`tab-${a.id}`} href={`#rx-${a.id}`} role="tab" aria-selected={on} aria-controls={`rx-${a.id}`}
                  tabIndex={on ? 0 : -1} className={`rx-tab ${on ? 'on' : ''}`}
                  onClick={(e) => { e.preventDefault(); escolher(a.id); }}>
                  <Icon name={a.icon} className="w-[18px] h-[18px] shrink-0" strokeWidth={1.8} />
                  <span>{a.aba}</span>
                  <span className="rx-count mono" aria-hidden="true">{a.itens.length}</span>
                </a>
              );
            })}
          </div>

          {RECURSOS_ABAS.map((a) => (
            <div key={a.id} id={`rx-${a.id}`} role="tabpanel" aria-labelledby={`tab-${a.id}`} className={`rx-panel ${a.id === ativa ? 'on' : ''}`}>
              <div className="rx-text">
                <span className="mono rx-k">{a.aba}</span>
                <h3 className="text-2xl md:text-[28px] font-semibold tracking-tight leading-tight mt-2.5 mb-3">{a.titulo}</h3>
                <p className="text-tx2 leading-relaxed">{a.resumo}</p>
                <div className="rx-acc">
                  {a.itens.map((it, i) => (
                    <details key={it.t} className="rx-item group" open={i === 0}>
                      <summary>
                        <Check />
                        <span className="flex-1">{it.t}</span>
                        {it.novo && <span className="badge-new">NOVO</span>}
                        <Icon name="plus" className="w-4 h-4 text-tx3 shrink-0 transition-transform group-open:rotate-45" />
                      </summary>
                      <p>{it.d}</p>
                    </details>
                  ))}
                </div>
                {a.link && <a href={a.link[0]} className="btn btn-s btn-sm mt-6">{a.link[1]} <Icon name="arrow-right" className="w-4 h-4" /></a>}
              </div>
              <div className="rx-visual" aria-hidden="true"><Visual tipo={a.visual} /></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* Mini telas ilustrativas de cada aba (decorativas). */
function Visual({ tipo }) {
  if (tipo === 'inbox') return <TelaInbox />;
  if (tipo === 'tv') return <PainelTV />;
  const corpo = {
    transmissao: (
      <>
        <Topo k="TRANSMISSÕES" v="● enviando" />
        <div className="vx-phone"><div className="vx-bub">Olá, <b>Marina</b>! Sua fatura de novembro já está disponível. Vencimento: <b>10/12</b>.</div><div className="vx-btn">Ver 2ª via</div></div>
        <div className="vx-kpis">{[['1.240', 'enviadas'], ['81%', 'lidas'], ['214', 'respostas']].map(([v, l]) => <div key={l}><b className="num">{v}</b><span>{l}</span></div>)}</div>
        <div className="vx-row"><span className="text-tx3">Ritmo</span><span>devagar · 1 a cada 6 s</span></div>
        <div className="vx-row"><span className="text-tx3">Quando responder</span><span className="text-brand-l">fila Cobrança</span></div>
      </>
    ),
    ura: (
      <>
        <Topo k="FLUXO · ATENDIMENTO" v="✓ Novo SAC" />
        <div className="vx-flow">
          {['Início', 'Menu (4 setores)', 'Consulta externa', 'Gerou boleto 📊', 'Falar com atendente'].map((t, i) => (
            <div key={t} className={`vx-node ${i === 2 ? 'on' : ''}`}>{t}</div>
          ))}
        </div>
        <div className="vx-row"><span className="text-tx3">Versão 12</span><span>salva há 2 min · ▶ Simular</span></div>
      </>
    ),
    ia: (
      <>
        <Topo k="OMNINERD AI · LEITURA" v="pedido médico" />
        {[['Paciente', 'M. C. S.'], ['Exames', 'Hemograma, TSH'], ['Médico', 'CRM 0000/AL'], ['Especialidade', 'Endocrinologia']].map(([k, v]) => (
          <div key={k} className="vx-row"><span className="text-tx3">{k}</span><span>{v}</span></div>
        ))}
        <div className="vx-cta">Emitir guia</div>
        <p className="vx-note">Exemplo ilustrativo.</p>
      </>
    ),
    ramal: (
      <>
        <Topo k="TELEFONIA · AO VIVO" v="● 4 em chamada" />
        {[['2041', 'Ana', 'em chamada · 02:14', 'b'], ['2042', 'Bruno', 'em pausa · Almoço', 'a'], ['2043', 'Carla', 'livre', 'l'], ['2044', 'Diego', 'tocando · fila Financeiro', 'b']].map(([r, n, s, c]) => (
          <div key={r} className="vx-row"><span><i className={`vx-dot ${c}`} /> <b className="num">{r}</b> {n}</span><span className="text-tx3">{s}</span></div>
        ))}
        <div className="vx-row"><span className="text-tx3">Fila Financeiro</span><span>“você é o próximo”</span></div>
      </>
    ),
    kanban: (
      <>
        <Topo k="CRM · FINANCEIRO" v="3 vencem hoje" />
        <div className="vx-kanban">
          {[['Novo', ['2026-000184', '2026-000190']], ['Em andamento', ['2026-000171']], ['Concluída', ['2026-000150']]].map(([col, cards]) => (
            <div key={col}><span className="mono">{col}</span>{cards.map((c) => <div key={c} className="vx-card num">{c}</div>)}</div>
          ))}
        </div>
      </>
    ),
    sac: <TelaSac />,
    guia: <CupomGuia />,
    app: (
      <>
        <Topo k="WIKI · MODO AJUDA" v="?" />
        <div className="vx-row"><span>Como transferir com motivo</span><span className="text-brand-l">Mostrar na tela</span></div>
        <div className="vx-row"><span>Encerrar parados</span><span className="text-brand-l">Ver na Wiki</span></div>
        <div className="vx-row"><span>✦ Pergunte ao OmniNerd AI</span><span className="text-tx3">5 idiomas</span></div>
        <div className="vx-row"><span><Icon name="smartphone" className="w-4 h-4 inline text-brand-l" /> App Android</span><span className="text-tx3">Inbox · Supervisão · ramal</span></div>
      </>
    ),
    lgpd: (
      <>
        <Topo k="ENVIADO À IA" v="mascarado" />
        <div className="vx-bub">CPF <b>***.***.412-**</b>, cartão <b>**** 1234</b>, e-mail <b>m***@***.com</b></div>
        <div className="vx-row"><span className="text-tx3">Backup de hoje</span><span className="text-brand-l">✓ criptografado · São Paulo</span></div>
        <div className="vx-row"><span className="text-tx3">Papel TI</span><span>sem acesso a conversas</span></div>
        <div className="vx-row"><span className="text-tx3">Suporte presente</span><span>registrado 10:42</span></div>
      </>
    ),
  }[tipo];
  return <div className="vx">{corpo}</div>;
}

function Topo({ k, v }) {
  return <div className="vx-top"><span className="mono">{k}</span><span className="mono text-brand-l">{v}</span></div>;
}

function TelaInbox() {
  const conversas = [
    ['MC', '#1f7a63', 'Marina Costa', '2ª via do boleto · Financeiro', 'WhatsApp', 72],
    ['JR', '#334155', 'John Reed', '🌐 escreve em inglês', 'WhatsApp', 25],
    ['@', '#6d28d9', '@lojaexemplo', 'Comentário no post', 'Instagram', 0],
    ['PA', '#9a3412', 'Pedro Alves', 'Protocolo 2026000184', 'Telegram', 0],
    ['VS', '#3f3f46', 'Visitante do site', 'Vocês atendem clínicas?', 'Chat do site', 0],
  ];
  return (
    <div className="vx">
      <Topo k="INBOX · FILA FINANCEIRO" v="⏳ 2 janela acabando" />
      {conversas.map(([ini, cor, nome, msg, canal, janela], i) => (
        <div key={nome} className={`mrow ${i === 0 ? 'on' : ''}`}>
          <span className="vx-ring" style={{ '--p': `${janela}%`, '--c': janela > 40 ? '#4fc3a1' : '#f59e0b' }}><span className="av" style={{ background: cor }}>{ini}</span></span>
          <div className="flex-1 min-w-0"><b className="block">{nome}</b><span className="block text-tx3 truncate">{msg}</span></div>
          <span className="chip">{canal}</span>
        </div>
      ))}
    </div>
  );
}

function PainelTV() {
  const kpis = [['12', 'na fila'], ['38 s', 'maior espera'], ['9', 'online'], ['4,7★', 'satisfação']];
  const agentes = [['Ana', 'Em atendimento', '#2a9276'], ['Bruno', 'Pausa · Almoço', '#f59e0b'], ['Carla', 'Livre', '#4fc3a1'], ['Diego', 'Em chamada', '#2a9276']];
  return (
    <div className="vx">
      <Topo k="PAINEL DE TV · SALA DE OPERAÇÃO" v="● AO VIVO" />
      <div className="grid grid-cols-2 gap-2">
        {kpis.map(([v, l]) => (
          <div key={l} className="rounded-md bg-g-900 border border-g-line p-2.5 text-center"><b className="block text-xl num">{v}</b><span className="text-[11px] text-tx3">{l}</span></div>
        ))}
      </div>
      <div className="grid gap-1.5 mt-2">
        {agentes.map(([n, s, c]) => (
          <div key={n} className="flex items-center gap-2 rounded-md bg-g-900 border border-g-line px-3 py-1.5 text-[12px]">
            <span className="w-2 h-2 rounded-full" style={{ background: c }} /> <b>{n}</b> <span className="text-tx3 ml-auto">{s}</span>
          </div>
        ))}
      </div>
      <div className="vx-row mt-1"><span className="text-tx3">Prestes a perder</span><span className="text-accent">3 conversas</span></div>
    </div>
  );
}

function TelaSac() {
  return (
    <div className="vx">
      <Topo k="RELATÓRIO NOVO SAC · FILA FINANCEIRO" v="hoje" />
      <div className="vx-meter"><div className="flex justify-between text-[12px]"><span>Atendidas em até 20 s</span><b className="num text-brand-l">86%</b></div><div className="vx-bar"><i style={{ width: '86%' }} /><em style={{ left: '80%' }} /></div><span className="text-[10.5px] text-tx3">meta 80%</span></div>
      {[['Espera acima de 300 s', '0'], ['Caídas com retorno em até 300 s', '92%'], ['Tempo até o humano (texto)', '1 min 40 s'], ['Protocolos abertos há mais de 7 dias', '3']].map(([k, v]) => (
        <div key={k} className="vx-row"><span className="text-tx3">{k}</span><b className="num">{v}</b></div>
      ))}
      <div className="vx-row"><span className="text-tx3">Protocolo</span><span className="mono">2026000123</span></div>
      <p className="vx-note">Exemplo ilustrativo. Excel com prova de integridade.</p>
    </div>
  );
}

function CupomGuia() {
  return (
    <div className="vx vx-cupom">
      <span className="mono text-[10px] tracking-widest text-tx3">CLÍNICA EXEMPLO · GUIA</span>
      <b className="block text-2xl mono tracking-wider mt-2">CLX-004812</b>
      <div className="vx-row"><span className="text-tx3">Parceiro</span><span>Laboratório Exemplo</span></div>
      <div className="vx-row"><span className="text-tx3">Exames</span><span>Hemograma · TSH</span></div>
      <div className="vx-row"><span className="text-tx3">Validade</span><span className="num">30 dias</span></div>
      <div className="vx-row"><span className="text-tx3">Situação</span><span className="text-brand-l">✓ validada pelo parceiro</span></div>
      <p className="vx-note">Emitida por Fulana às 15:36 · exemplo ilustrativo</p>
    </div>
  );
}

/* ---------------------------------------------------------------- Destaques (novidades) */
export function Destaques() {
  return (
    <section className="py-20 band" aria-labelledby="titulo-destaques">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHead id="titulo-destaques" eyebrow="Novidades do OmniNerd" title="Chegou agora —" accent="e já está em produção."
          text="O OmniNerd recebe melhorias o tempo todo. Estas são algumas das mais recentes — toque para ver os detalhes." />
        <ul className="dest-row reveal">
          {DESTAQUES.map((d) => (
            <li key={d.titulo}>
              <a href={`#rx-${d.aba}`} className="card tilt p-6 flex gap-4 h-full hover:border-brand/60">
                <span className="icon-box"><Icon name={d.icon} className="w-5 h-5" strokeWidth={1.8} /></span>
                <span>
                  <b className="flex items-center gap-2 text-lg font-semibold">{d.titulo} <span className="badge-new">NOVO</span></b>
                  <span className="block text-tx2 text-[15px] leading-relaxed mt-1">{d.texto}</span>
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

/* ---------------------------------------------------------------- Novo SAC */
export function NovoSac() {
  return (
    <section id="novo-sac" className="py-24 scroll-mt-16 relative overflow-hidden" aria-labelledby="titulo-sac">
      <div className="absolute -top-40 -left-40 w-[560px] h-[560px] max-w-full rounded-full bg-brand/10 blur-[120px] pointer-events-none" aria-hidden="true" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] items-start">
          <div className="reveal">
            <span className="eyebrow">Novo SAC · Decreto nº 13.135/2026</span>
            <h2 id="titulo-sac" className="h-sec mt-4 mb-4">O Novo SAC já está valendo. <span className="hl">O OmniNerd ajuda você a se adequar.</span></h2>
            <p className="lead mb-6">
              Em vigor desde 2 de novembro de 2026, o decreto muda as regras do atendimento ao consumidor por telefone e
              pelos canais digitais. O OmniNerd reúne as ferramentas, os registros e os relatórios para a sua empresa acompanhar
              as metas no dia a dia — e mostrar o cuidado com elas.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <a href={AGENDAR} className="btn btn-p">Avaliar meu atendimento para o Novo SAC</a>
              <a href={WHATS_URL} target="_blank" rel="noopener noreferrer" className="btn btn-s"><Icon name="message-circle" className="w-5 h-5 text-brand-l" /> Falar no WhatsApp</a>
            </div>
          </div>
          <div className="reveal" style={{ '--d': '120ms' }} aria-hidden="true"><TelaSac /></div>
        </div>

        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 mt-12">
          {SAC_PILARES.map((p, i) => (
            <li key={p.titulo} className="card tilt reveal p-6" style={{ '--d': `${i * 90}ms` }}>
              <span className="icon-box"><Icon name={p.icon} className="w-5 h-5" strokeWidth={1.8} /></span>
              <h3 className="text-lg font-semibold mt-4 mb-2 leading-snug">{p.titulo}</h3>
              <p className="text-tx2 text-[15px] leading-relaxed">{p.texto}</p>
            </li>
          ))}
        </ul>

        <aside className="sac-aviso reveal mt-6" aria-label="A quem se aplica o Novo SAC">
          <Icon name="info" className="w-5 h-5 text-brand-l shrink-0 mt-0.5" />
          <p>
            <b className="text-tx">A quem se aplica.</b> As regras do Decreto nº 13.135/2026 valem para fornecedores de serviços regulados
            pelo Poder Executivo federal, conforme os critérios de cada órgão regulador; as demais empresas podem adotá-las como boa prática.
            O OmniNerd <b className="text-tx">auxilia a adequação</b> com ferramentas, registros e relatórios — a conformidade também depende de como a sua
            empresa opera (equipe, horários de atendimento humano e prazos de resposta) e deve ser avaliada pelo seu jurídico.
          </p>
        </aside>
      </div>
    </section>
  );
}

/* ---------------------------------------------------------------- Saúde */
export function Saude() {
  return (
    <section id="saude" className="py-24 band scroll-mt-16" aria-labelledby="titulo-saude">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] items-center">
          <div className="reveal">
            <span className="eyebrow">OmniNerd Saúde · clínicas, laboratórios e planos</span>
            <h2 id="titulo-saude" className="h-sec mt-4 mb-4">A guia sai na conversa. <span className="hl">O laboratório confere no celular.</span></h2>
            <p className="lead mb-8">
              Fim da guia de papel que some, é copiada ou usada duas vezes. A atendente emite, o parceiro valida pelo celular
              e a clínica acompanha tudo num painel — com acerto de parceiros e médicos no mesmo lugar.
            </p>
            <ol className="grid gap-3 sm:grid-cols-3">
              {SAUDE_PASSOS.map((p) => (
                <li key={p.n} className="saude-passo">
                  <span className="flex items-center justify-between"><span className="mono text-brand-l font-bold">{p.n}</span><Icon name={p.icon} className="w-5 h-5 text-brand-l" strokeWidth={1.8} /></span>
                  <b className="block mt-3 text-lg">{p.titulo}</b>
                  <span className="block text-tx2 text-[14px] leading-relaxed mt-1">{p.texto}</span>
                </li>
              ))}
            </ol>
          </div>
          <div className="reveal hidden md:block" style={{ '--d': '120ms' }} aria-hidden="true"><CupomGuia /></div>
        </div>

        <div className="grid gap-3 md:grid-cols-2 mt-12">
          {SAUDE_ITENS.map((it) => (
            <details key={it.t} className="card rx-item rx-item-card group">
              <summary>
                <Check />
                <span className="flex-1">{it.t}</span>
                <Icon name="plus" className="w-4 h-4 text-tx3 shrink-0 transition-transform group-open:rotate-45" />
              </summary>
              <p>{it.d}</p>
            </details>
          ))}
        </div>

        <div className="reveal mt-10 flex flex-col sm:flex-row sm:items-center gap-4">
          <a href={AGENDAR} className="btn btn-p">Agendar demonstração para a minha clínica</a>
          <p className="text-sm text-tx3">Módulo contratado à parte · valores sob consulta. Manual, Modo Ajuda e Wiki em 5 idiomas.</p>
        </div>
      </div>
    </section>
  );
}

/* ---------------------------------------------------------------- Sobre + Suporte */
export function Sobre() {
  return (
    <section id="sobre" className="py-24 scroll-mt-16" aria-labelledby="titulo-sobre">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid gap-10 lg:grid-cols-[1fr_1fr] items-start">
        <div className="reveal">
          <span className="eyebrow">Nerd Services · desde {FUNDACAO.ano}</span>
          <h2 id="titulo-sobre" className="h-sec mt-4 mb-4">Engenharia de atendimento, <span className="hl">feita por quem vive telefonia.</span></h2>
          <p className="lead mb-8">
            Somos uma software house de Maceió (AL), em operação desde {FUNDACAO.ano}. Começamos pela telefonia empresarial e criamos
            o OmniNerd para unir voz, mensagens e inteligência artificial numa operação só — implantado e acompanhado pela mesma equipe.
          </p>
          <ul className="grid gap-5 sm:grid-cols-2">
            {SOBRE_PILARES.map(([ic, t, d]) => (
              <li key={t} className="flex gap-3">
                <span className="icon-box w-10 h-10"><Icon name={ic} className="w-5 h-5" strokeWidth={1.8} /></span>
                <span><b className="block font-semibold">{t}</b><span className="text-tx2 text-[15px] leading-snug">{d}</span></span>
              </li>
            ))}
          </ul>
        </div>
        <div id="suporte" className="card reveal p-7 md:p-8 scroll-mt-24" style={{ '--d': '120ms' }}>
          <div className="flex items-center gap-3"><span className="icon-box"><Icon name="life-buoy" className="w-6 h-6" strokeWidth={1.8} /></span><span className="eyebrow">Suporte</span></div>
          <h3 className="text-2xl font-semibold mt-5 mb-2">Suporte Nerd Services, incluso no serviço.</h3>
          <p className="text-tx2 leading-relaxed mb-5">Quem implanta é quem atende depois: a mesma equipe que conhece a sua operação.</p>
          <ul className="space-y-2.5 text-[15px] text-tx2">
            {SUPORTE_ITENS.map((t) => <li key={t} className="flex gap-2"><Check />{t}</li>)}
          </ul>
          <div className="flex flex-col sm:flex-row gap-3 mt-7">
            <a href={`https://wa.me/${WHATS_NUM}`} target="_blank" rel="noopener noreferrer" className="btn btn-p btn-sm"><Icon name="message-circle" className="w-4 h-4" /> Falar com a equipe</a>
            <a href={SISTEMA_URL} target="_blank" rel="noopener noreferrer" className="btn btn-s btn-sm">Área do cliente</a>
          </div>
        </div>
      </div>
    </section>
  );
}

import Icon from '../components/Icon.jsx';
import { SectionHead, Check } from '../components/ui.jsx';
import { CANAIS, FLUXO, MODULOS, NOVIDADES, SEGMENTOS, TELEFONIA, TELEFONIA_A_PARTIR_DE, AGENDAR, FUNDACAO } from '../data/site.js';

export function Canais() {
  return (
    <section className="band" aria-label="Canais atendidos">
      <ul className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-wrap justify-center gap-x-9 gap-y-3">
        {CANAIS.map(([ic, t]) => (
          <li key={t} className="flex items-center gap-2.5 text-tx2 font-medium text-sm sm:text-base">
            <Icon name={ic} className="w-5 h-5 text-brand-l" /> {t}
          </li>
        ))}
      </ul>
    </section>
  );
}

/* “Da mensagem ao relatório” — o fluxo do sistema em 4 etapas, com mini telas */
export function Fluxo() {
  return (
    <section id="conteudo" className="py-24 scroll-mt-16" aria-labelledby="titulo-fluxo">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHead id="titulo-fluxo" eyebrow="Como o OmniNerd trabalha" title="Da primeira mensagem" accent="ao relatório da semana."
          text="O mesmo fluxo que a sua equipe vê no dia a dia — do canal até a análise da operação." />
        <div className="relative">
        <div className="flow-line hidden lg:block" aria-hidden="true" />
        <ol className="relative grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {FLUXO.map((f, i) => (
            <li key={f.n} className="reveal" style={{ '--d': `${i * 120}ms` }}>
              <div className="flow-dot" aria-hidden="true">{f.n}</div>
              <div className="card tilt p-5 mt-4 h-[calc(100%-70px)]">
                <span className="mono text-[11px] uppercase tracking-wider text-brand-l">{f.tag}</span>
                <h3 className="text-lg font-semibold mt-1.5 mb-2">{f.titulo}</h3>
                <p className="text-tx2 text-[15px] leading-relaxed">{f.texto}</p>
                <MiniTela i={i} />
              </div>
            </li>
          ))}
        </ol>
        </div>
      </div>
    </section>
  );
}

function MiniTela({ i }) {
  const base = 'mt-4 rounded-lg border border-g-line bg-g-950 p-3 text-[12px]';
  if (i === 0) return (
    <div className={base} aria-hidden="true">
      <div className="mrow on"><div className="av" style={{ background: '#1f7a63' }}>MC</div><div className="flex-1 min-w-0"><b className="block">Marina Costa</b><span className="text-tx3">Nova conversa</span></div><span className="chip">WhatsApp</span></div>
    </div>
  );
  if (i === 1) return (
    <div className={base} aria-hidden="true">
      <div className="flex items-center gap-1.5 flex-wrap"><span className="chip">Consulta externa</span><span className="text-brand-l">→</span><span className="chip">2 títulos</span><span className="text-brand-l">→</span><span className="chip">PIX ✓</span></div>
    </div>
  );
  if (i === 2) return (
    <div className={base} aria-hidden="true">
      <span className="text-tx3">Protocolo</span> <b className="num">2026-000184</b><div className="text-tx3 mt-1">Prazo: 2 dias úteis · Financeiro</div>
    </div>
  );
  return (
    <div className={base} aria-hidden="true">
      <div className="flex justify-between text-tx3"><span>1ª resposta</span><span className="text-brand-l num">▼ 12 s</span></div>
      <div className="flex justify-between text-tx3 mt-1"><span>Conversas</span><span className="text-brand-l num">▲ 9%</span></div>
    </div>
  );
}

export function Modulos() {
  return (
    <section id="recursos" className="py-24 band scroll-mt-16" aria-labelledby="titulo-recursos">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHead id="titulo-recursos" eyebrow="Recursos" title="Ative só o que a sua operação" accent="precisa."
          text="Um sistema em módulos: comece pelo canal que mais importa hoje e cresça quando quiser." />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {MODULOS.map((m, i) => (
            <article key={m.titulo} className="card tilt reveal p-7" style={{ '--d': `${(i % 3) * 100}ms` }}>
              <div className="icon-box"><Icon name={m.icon} className="w-6 h-6" strokeWidth={1.8} /></div>
              <h3 className="text-xl font-semibold mt-5 mb-2">{m.titulo}</h3>
              <p className="text-tx2 leading-relaxed mb-4">{m.texto}</p>
              <ul className="space-y-2 text-[15px] text-tx2">
                {m.itens.map((t) => <li key={t} className="flex gap-2"><Check />{t}</li>)}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Novidades() {
  const [tv, ...resto] = NOVIDADES;
  return (
    <section className="py-24" aria-labelledby="titulo-novidades">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHead id="titulo-novidades" eyebrow="Novidades do OmniNerd" title="Feito para operação real —" accent="e cada vez mais completo."
          text="Recursos que já estão em produção nos nossos clientes." />
        <div className="grid gap-4 md:grid-cols-6">
          <article className="card tilt reveal p-7 md:col-span-4 md:row-span-2">
            <div className="flex items-center gap-3"><div className="icon-box"><Icon name={tv.icon} className="w-6 h-6" strokeWidth={1.8} /></div><span className="badge-new">NOVO</span></div>
            <h3 className="text-2xl font-semibold mt-5 mb-2">{tv.titulo}</h3>
            <p className="text-tx2 leading-relaxed max-w-xl">{tv.texto}</p>
            <PainelTV />
          </article>
          {resto.map((n, i) => (
            <article key={n.id} className="card tilt reveal p-6 md:col-span-2" style={{ '--d': `${i * 90}ms` }}>
              <div className="flex items-center justify-between">
                <span className="eyebrow">{n.tag}</span><span className="badge-new">NOVO</span>
              </div>
              <h3 className="text-lg font-semibold mt-3 mb-1.5 flex items-center gap-2"><Icon name={n.icon} className="w-5 h-5 text-brand-l" strokeWidth={1.8} />{n.titulo}</h3>
              <p className="text-tx2 text-[15px] leading-relaxed">{n.texto}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function PainelTV() {
  const kpis = [['12', 'na fila'], ['38 s', 'maior espera'], ['9', 'atendentes online'], ['94%', 'no SLA']];
  const agentes = [['Ana', 'Em atendimento', '#2a9276'], ['Bruno', 'Em pausa · Almoço', '#f59e0b'], ['Carla', 'Livre', '#4fc3a1'], ['Diego', 'Em chamada', '#2a9276']];
  return (
    <div className="mt-6 rounded-xl border border-g-line2 bg-[#0b0d10] p-3 sm:p-4" aria-hidden="true">
      <div className="flex items-center justify-between text-[11px] text-tx3 mono mb-3"><span>PAINEL DE TV · SALA DE OPERAÇÃO</span><span className="text-brand-l">● AO VIVO</span></div>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
        {kpis.map(([v, l]) => (
          <div key={l} className="rounded-lg bg-g-900 border border-g-line p-3 text-center">
            <b className="block text-2xl sm:text-3xl num">{v}</b><span className="text-[11px] text-tx3">{l}</span>
          </div>
        ))}
      </div>
      <div className="grid sm:grid-cols-2 gap-2 mt-2">
        {agentes.map(([n, s, c]) => (
          <div key={n} className="flex items-center gap-2 rounded-lg bg-g-900 border border-g-line px-3 py-2 text-[12px]">
            <span className="w-2 h-2 rounded-full" style={{ background: c }} /> <b>{n}</b> <span className="text-tx3 ml-auto">{s}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export function Segmentos() {
  return (
    <section className="py-24" aria-labelledby="titulo-segmentos">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHead id="titulo-segmentos" center eyebrow="Para quem é" title="Feito para quem" accent="atende muita gente."
          text="Fluxos, formulários e filas se adaptam ao seu segmento — sem desenvolvimento sob medida." />
        <ul className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
          {SEGMENTOS.map(([ic, t], i) => (
            <li key={t} className="card reveal p-4 md:p-5 flex items-center gap-3" style={{ '--d': `${(i % 3) * 80}ms` }}>
              <Icon name={ic} className="w-6 h-6 text-brand-l shrink-0" strokeWidth={1.8} />
              <span className="font-medium leading-snug">{t}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

/*
 * Telefonia Nerd Services — a Nerd Services também fornece a conectividade (números, 0800, rotas).
 * Regras (precos.md): sem “operadora”/“STFC”, sem citar a tecnologia de base; preço só “a partir de”.
 */
export function Telefonia() {
  return (
    <section id="telefonia" className="py-24 scroll-mt-16" aria-labelledby="titulo-telefonia">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid gap-10 lg:grid-cols-[0.9fr_1.1fr] items-start">
        <div className="reveal lg:sticky lg:top-28">
          <span className="eyebrow">Telefonia Nerd Services</span>
          <h2 id="titulo-telefonia" className="h-sec mt-4 mb-4">A linha telefônica <span className="hl">também é com a gente.</span></h2>
          <p className="lead mb-6">
            Telefonia é a nossa origem: desde {FUNDACAO.ano} cuidamos da voz das empresas. Além do OmniNerd,
            fornecemos os números, o 0800 e as rotas de saída — tudo num só contrato e com o mesmo suporte.
          </p>
          <div className="card p-5 mb-6">
            <p className="text-sm text-tx3">Planos de número</p>
            <p className="mt-1"><span className="text-tx2">a partir de</span> <b className="text-3xl font-bold num tracking-tight">R$ {TELEFONIA_A_PARTIR_DE}</b><span className="text-tx3 text-sm">/mês</span></p>
            <p className="text-[13px] text-tx3 mt-2">Funciona com a central do OmniNerd ou com a central SIP que você já tem.</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3">
            <a href={AGENDAR} className="btn btn-p">Falar com um especialista</a>
          </div>
          <p className="text-sm text-tx3 mt-6 leading-relaxed">
            Já usa a nossa central telefônica em nuvem? A migração para o OmniNerd é feita pela nossa equipe.
          </p>
        </div>
        <ul className="grid gap-4 sm:grid-cols-2">
          {TELEFONIA.map((t, i) => (
            <li key={t.titulo} className="card tilt reveal p-6" style={{ '--d': `${(i % 2) * 90}ms` }}>
              <div className="icon-box"><Icon name={t.icon} className="w-6 h-6" strokeWidth={1.8} /></div>
              <h3 className="text-lg font-semibold mt-4 mb-1.5">{t.titulo}</h3>
              <p className="text-tx2 text-[15px] leading-relaxed">{t.texto}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

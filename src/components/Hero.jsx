import { AGENDAR, anosDeMercado } from '../data/site.js';

/*
 * Hero “Camadas”: texto real à esquerda; à direita o produto em camadas 3D (CSS puro).
 * Os mockups são HTML (sem print, sem dado real). O palco é decorativo → aria-hidden.
 * A inclinação com o mouse e o parallax de rolagem ficam no App.jsx (só com mouse e sem reduced-motion).
 */
export default function Hero() {
  const anos = anosDeMercado();
  return (
    <section className="hero relative overflow-hidden pt-28 pb-16 lg:pt-36 lg:pb-24" aria-labelledby="titulo-hero">
      <Circuit />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-[1fr_1.1fr] gap-8 lg:gap-10 items-center">
        <div>
          <span className="eyebrow">OmniNerd · plataforma de atendimento</span>
          <h1 id="titulo-hero" className="text-[2.5rem] leading-[1.05] sm:text-6xl lg:text-[4rem] font-bold tracking-tight mt-5 mb-6">
            Telefone, WhatsApp e chat <span className="hl">numa operação só.</span>
          </h1>
          <p className="lead text-lg max-w-xl mb-8">
            Caixa de entrada unificada, PABX em nuvem, URA com IA e CRM — e a OmniNerd AI escrevendo o relatório da sua semana.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <a href={AGENDAR} className="btn btn-p">Agendar demonstração</a>
            <a href="#planos" className="btn btn-s">Ver planos</a>
          </div>
          <dl className="reveal stats flex flex-wrap gap-x-8 gap-y-4 mt-10 text-sm text-tx3">
            <div><dt className="sr-only">Anos de mercado</dt><dd><b className="block text-2xl text-tx num" suppressHydrationWarning>+{anos}</b>anos de mercado</dd></div>
            <div><dt className="sr-only">Canais</dt><dd><b className="block text-2xl text-tx num" >5</b>canais numa tela</dd></div>
            <div><dt className="sr-only">Idiomas</dt><dd><b className="block text-2xl text-tx num" >5</b>idiomas</dd></div>
          </dl>
        </div>
        <Stage />
      </div>
    </section>
  );
}

function Circuit() {
  const linhas = [
    ['M0 120 H380 L440 180 H760 L820 240 H1200', '0s'],
    ['M0 420 H300 L360 360 H700 L760 420 H1200', '-1.5s'],
    ['M0 680 H460 L520 620 H900 L960 560 H1200', '-2.6s'],
    ['M820 0 V160 L860 200 V800', '-.8s'],
  ];
  return (
    <svg className="circuit" viewBox="0 0 1200 800" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
      {linhas.map(([d, delay]) => (
        <g key={d}><path d={d} /><path className="pulse" d={d} style={{ animationDelay: delay }} /></g>
      ))}
    </svg>
  );
}

const CONVERSAS = [
  { ini: 'MC', cor: '#1f7a63', nome: 'Marina Costa', msg: '“Queria a 2ª via do boleto”', canal: 'WhatsApp', on: true },
  { ini: '☎', cor: '#334155', nome: 'Fila Financeiro', msg: 'posição 1 · 00:42', canal: 'Telefone' },
  { ini: 'PA', cor: '#9a3412', nome: 'Pedro Alves', msg: 'Protocolo 2026-000184', canal: 'Telegram' },
  { ini: 'VS', cor: '#3f3f46', nome: 'Visitante do site', msg: 'Vocês atendem clínicas?', canal: 'Chat do site' },
  { ini: '@', cor: '#6d28d9', nome: '@lojaexemplo', msg: 'Comentário no post', canal: 'Instagram' },
];

function Stage() {
  return (
    <div className="scene" id="palco" aria-hidden="true">
      <div className="rig" id="rig">
        <div className="layer l-nb">
          <div className="nb-screen grid grid-cols-[110px_1fr] gap-2.5">
            <div className="pt-1">
              <img src="/brand/omninerd-logo-dark.svg" alt="" className="h-5 w-auto mb-3" width="80" height="20" />
              {[70, 100, 85, 100, 60, 90].map((w, i) => (
                <div key={i} className={`h-2 rounded-sm my-2.5 ${i === 0 ? 'bg-brand' : 'bg-g-800'}`} style={{ width: `${w}%` }} />
              ))}
            </div>
            <div>
              {CONVERSAS.map((c) => (
                <div key={c.nome} className={`mrow ${c.on ? 'on' : ''}`}>
                  <div className="av" style={{ background: c.cor }}>{c.ini}</div>
                  <div className="flex-1 min-w-0"><b className="block">{c.nome}</b><span className="block text-tx3 truncate">{c.msg}</span></div>
                  <span className="chip">{c.canal}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="layer l-phone"><div className="float" style={{ animationDelay: '-2s' }}>
          <div className="ph-frame"><div className="ph-in">
            <b>Escola Exemplo</b>
            <div className="bub l">Oi! Preciso do boleto de outubro</div>
            <div className="bub r">Encontrei 2 títulos no CPF ***.412. Qual deseja?</div>
            <div className="bub l">Os dois</div>
            <div className="bub r">Linha digitável e PIX enviados ✓</div>
          </div></div>
        </div></div>
        <div className="layer l-ura"><div className="glass p-3 text-xs float">
          <span className="mono text-[10px] tracking-wider text-brand-l">URA VISUAL</span>
          <div className="flex items-center gap-1.5 mt-2 flex-wrap">
            <span className="chip">Menu</span><span className="text-brand-l">→</span><span className="chip">Consulta externa</span><span className="text-brand-l">→</span><span className="chip">Fila</span>
          </div>
        </div></div>
        <div className="layer l-call"><div className="glass glow p-3 text-xs float" style={{ animationDelay: '-4s' }}>
          <span className="mono text-[10px] tracking-wider text-brand-l">TELEFONIA · AO VIVO</span>
          <div className="mrow px-0"><div className="av" style={{ background: '#1f7a63' }}>R</div><div><b className="block">Ramal 2041</b><span className="text-tx3 num">em chamada · 02:14</span></div></div>
        </div></div>
        <div className="layer l-ai"><div className="glass glow p-3 text-xs float" style={{ animationDelay: '-1s' }}>
          <img src="/brand/omninerd-ai-logo-dark.svg" alt="" className="h-6 w-auto" width="70" height="24" />
          <p className="text-tx2 mt-2 leading-snug">IA Supervisor: <b className="text-tx">1ª resposta caiu 12 s</b> na semana. Reforçar a fila Financeiro às segundas.</p>
        </div></div>
      </div>
    </div>
  );
}

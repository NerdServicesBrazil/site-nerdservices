/*
 * nerdservices.com.br — site institucional (identidade v2, 09/10/2026)
 * Mesma identidade do login do OmniNerd: azul-marinho #0B1220, verde-água
 * (teal-300/400/500/700 do Tailwind = #5EEAD4/#2DD4BF/#14B8A6/#0F766E),
 * laranja #F97316 (o "pontinho" do símbolo), fonte DM Sans, rede de pontos
 * ao fundo (/brand/network-bg.svg) e cartões de vidro.
 * Ícones: Lucide (ISC), embutidos abaixo para não depender de pacote.
 */
import React, { useState } from 'react';

const WHATS_NUM = '558231423700';
const WHATS_URL = `https://wa.me/${WHATS_NUM}?text=${encodeURIComponent('Olá! Quero agendar uma demonstração do OmniNerd.')}`;
const PHONE_FIXO = '(82) 3142-3700';
const PHONE_CEL = '(82) 99828-4515';
const WHATS_CEL = '5582998284515';
const EMAIL = 'gustavo@nerdservices.com.br';
const INSTAGRAM_URL = 'https://instagram.com/nerdservicesbr';
const SISTEMA_URL = 'https://omninerd.com.br';

/* FATIA 20261024_AJUSTES — abertura da empresa (CNPJ): 14/10/2016.
 * Os "anos de mercado" são calculados a partir desta data (anos completos). */
const FUNDACAO = { ano: 2016, mes: 10, dia: 14 };
function anosDeMercado(hoje = new Date()) {
  const fezAniversario =
    hoje.getMonth() + 1 > FUNDACAO.mes ||
    (hoje.getMonth() + 1 === FUNDACAO.mes && hoje.getDate() >= FUNDACAO.dia);
  return hoje.getFullYear() - FUNDACAO.ano - (fezAniversario ? 0 : 1);
}

const ICONS = {
  'message-circle': ' <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" />',
  'phone': ' <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />',
  'send': ' <path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z" /><path d="m21.854 2.147-10.94 10.939" />',
  'globe': ' <circle cx="12" cy="12" r="10" /><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" /><path d="M2 12h20" />',
  'camera': ' <path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z" /><circle cx="12" cy="13" r="3" />',
  'bot': ' <path d="M12 8V4H8" /><rect width="16" height="12" x="4" y="8" rx="2" /><path d="M2 14h2" /><path d="M20 14h2" /><path d="M15 13v2" /><path d="M9 13v2" />',
  'contact': ' <path d="M16 2v2" /><path d="M7 22v-2a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v2" /><path d="M8 2v2" /><circle cx="12" cy="11" r="3" /><rect x="3" y="4" width="18" height="18" rx="2" />',
  'layout-dashboard': ' <rect width="7" height="9" x="3" y="3" rx="1" /><rect width="7" height="5" x="14" y="3" rx="1" /><rect width="7" height="9" x="14" y="12" rx="1" /><rect width="7" height="5" x="3" y="16" rx="1" />',
  'calendar-clock': ' <path d="M21 7.5V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h3.5" /><path d="M16 2v4" /><path d="M8 2v4" /><path d="M3 10h5" /><path d="M17.5 17.5 16 16.3V14" /><circle cx="16" cy="16" r="6" />',
  'shield-check': ' <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" /><path d="m9 12 2 2 4-4" />',
  'receipt': ' <path d="M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1Z" /><path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8" /><path d="M12 17.5v-11" />',
  'users': ' <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M22 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" />',
  'graduation-cap': ' <path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z" /><path d="M22 10v6" /><path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5" />',
  'stethoscope': ' <path d="M11 2v2" /><path d="M5 2v2" /><path d="M5 3H4a2 2 0 0 0-2 2v4a6 6 0 0 0 12 0V5a2 2 0 0 0-2-2h-1" /><path d="M8 15a6 6 0 0 0 12 0v-3" /><circle cx="20" cy="10" r="2" />',
  'scale': ' <path d="m16 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z" /><path d="m2 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z" /><path d="M7 21h10" /><path d="M12 3v18" /><path d="M3 7h2c2 0 5-1 7-2 2 1 5 2 7 2h2" />',
  'car': ' <path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2" /><circle cx="7" cy="17" r="2" /><path d="M9 17h6" /><circle cx="17" cy="17" r="2" />',
  'factory': ' <path d="M2 20a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8l-7 5V8l-7 5V4a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z" /><path d="M17 18h1" /><path d="M12 18h1" /><path d="M7 18h1" />',
  'building-2': ' <path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z" /><path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2" /><path d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2" /><path d="M10 6h4" /><path d="M10 10h4" /><path d="M10 14h4" /><path d="M10 18h4" />',
  'wifi': ' <path d="M12 20h.01" /><path d="M2 8.82a15 15 0 0 1 20 0" /><path d="M5 12.859a10 10 0 0 1 14 0" /><path d="M8.5 16.429a5 5 0 0 1 7 0" />',
  'check': ' <path d="M20 6 9 17l-5-5" />',
  'arrow-right': ' <path d="M5 12h14" /><path d="m12 5 7 7-7 7" />',
  'menu': ' <line x1="4" x2="20" y1="12" y2="12" /><line x1="4" x2="20" y1="6" y2="6" /><line x1="4" x2="20" y1="18" y2="18" />',
  'x': ' <path d="M18 6 6 18" /><path d="m6 6 12 12" />',
  'mail': ' <rect width="20" height="16" x="2" y="4" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />',
  'map-pin': ' <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" /><circle cx="12" cy="10" r="3" />',
  'plus': ' <path d="M5 12h14" /><path d="M12 5v14" />',
  'headphones': ' <path d="M3 14h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a9 9 0 0 1 18 0v7a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3" />',
  'sparkles': ' <path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z" /><path d="M20 3v4" /><path d="M22 5h-4" /><path d="M4 17v2" /><path d="M5 18H3" />',
};

function Icon({ name, className = 'w-6 h-6', strokeWidth = 2 }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
      dangerouslySetInnerHTML={{ __html: ICONS[name] || '' }}
    />
  );
}

/* Título com o ponto laranja da marca */
const Dot = () => <span className="text-orange-500">.</span>;

function Chip({ children }) {
  return (
    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-teal-400/10 border border-teal-400/30 text-teal-300 text-xs sm:text-sm font-semibold tracking-wide text-left">
      <span className="h-2 w-2 rounded-full bg-orange-500 shrink-0" />
      {children}
    </div>
  );
}

function SectionHead({ chip, title, accent, text }) {
  return (
    <div className="text-center max-w-3xl mx-auto mb-14 md:mb-16">
      {chip && <div className="mb-6"><Chip>{chip}</Chip></div>}
      <h2 className="text-3xl md:text-5xl font-bold tracking-tight leading-tight mb-5">
        {title} {accent && <span className="text-gradient">{accent}</span>}<Dot />
      </h2>
      {text && <p className="text-slate-400 text-lg leading-relaxed">{text}</p>}
    </div>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-navy-950 text-slate-50 font-sans selection:bg-teal-400 selection:text-navy-950 scroll-smooth antialiased">
      <Navbar />
      <main>
        <HeroSection />
        <ChannelsStrip />
        <AboutSection />
        <FeaturesSection />
        <SegmentsSection />
        <PlatformSection />
        <ClientsSection />
        <TestimonialSection />
        <FaqSection />
        <CtaSection />
      </main>
      <Footer />
    </div>
  );
}

function Navbar() {
  const [open, setOpen] = useState(false);
  const links = [
    ['#sobre', 'Nossa evolução'],
    ['#omninerd', 'OmniNerd'],
    ['#plataforma', 'Como funciona'],
    ['#clientes', 'Clientes'],
    ['#faq', 'Dúvidas'],
  ];
  return (
    <nav className="fixed w-full z-50 bg-navy-950/85 backdrop-blur-md border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo mista registrada no INPI — mantida (marca registrada) */}
          <a href="/" className="flex-shrink-0 flex items-center gap-1" aria-label="Nerd Services — início">
            <img src="/logo-nerd.png" alt="Nerd Services" className="h-10 w-auto object-contain brightness-0 invert" />
            <span className="text-[10px] text-slate-400 font-bold self-start -ml-1">®</span>
          </a>

          <div className="hidden lg:flex gap-8 items-center">
            {links.map(([href, label]) => (
              <a key={href} href={href} className="text-sm font-medium text-slate-300 hover:text-teal-300 transition-colors whitespace-nowrap">{label}</a>
            ))}
            <a href={SISTEMA_URL} target="_blank" rel="noopener noreferrer"
              className="text-sm font-medium text-slate-300 hover:text-teal-300 transition-colors border border-white/15 px-4 py-2 rounded-full hover:border-teal-400/60 whitespace-nowrap">
              Área do cliente
            </a>
            <a href={WHATS_URL} target="_blank" rel="noopener noreferrer" className="btn-primary px-6 py-2.5 text-sm whitespace-nowrap">
              Agendar demo
            </a>
          </div>

          <button
            type="button"
            className="lg:hidden p-2 -mr-2 text-slate-200"
            onClick={() => setOpen(!open)}
            aria-label={open ? 'Fechar menu' : 'Abrir menu'}
            aria-expanded={open}
          >
            <Icon name={open ? 'x' : 'menu'} className="w-7 h-7" />
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden border-t border-white/5 bg-navy-950/95 backdrop-blur-md">
          <div className="px-4 py-4 flex flex-col gap-1">
            {links.map(([href, label]) => (
              <a key={href} href={href} onClick={() => setOpen(false)} className="py-3 px-2 text-base font-medium text-slate-200 rounded-lg hover:bg-white/5">{label}</a>
            ))}
            <div className="grid grid-cols-2 gap-3 pt-3">
              <a href={SISTEMA_URL} target="_blank" rel="noopener noreferrer" className="text-center text-sm font-semibold border border-white/15 py-3 rounded-full text-slate-200">Área do cliente</a>
              <a href={WHATS_URL} target="_blank" rel="noopener noreferrer" className="btn-primary py-3 text-sm text-center">Agendar demo</a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}

function HeroSection() {
  return (
    <section className="relative pt-32 pb-20 lg:pt-44 lg:pb-28 overflow-hidden">
      <div className="hero-bg" aria-hidden="true" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-[1.05fr_1fr] gap-14 lg:gap-12 items-center">
          <div className="text-center lg:text-left">
            <div className="mb-8"><Chip>Software house especializada em atendimento</Chip></div>
            <h1 className="text-[2.6rem] leading-[1.05] sm:text-6xl lg:text-[4.2rem] font-bold tracking-tight mb-7">
              Evoluímos a comunicação.<br />
              <span className="text-gradient">Apresentamos o OmniNerd</span><Dot />
            </h1>
            <p className="text-lg md:text-xl text-slate-400 mb-10 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Telefonia, <strong className="text-slate-100 font-semibold">WhatsApp oficial</strong>, Telegram, chat do site e Instagram em
              <strong className="text-slate-100 font-semibold"> uma só tela</strong> — com Inteligência Artificial e CRM nativo.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a href={WHATS_URL} target="_blank" rel="noopener noreferrer" className="btn-primary px-8 py-4 text-lg inline-flex items-center justify-center gap-2">
                Agendar demonstração <Icon name="arrow-right" className="w-5 h-5" strokeWidth={2.4} />
              </a>
              <a href={SISTEMA_URL} target="_blank" rel="noopener noreferrer"
                className="px-8 py-4 rounded-2xl text-lg font-semibold border border-white/15 bg-white/5 hover:bg-white/10 hover:border-teal-400/50 transition-colors text-center">
                Acessar sistema
              </a>
            </div>
          </div>
          <InboxMock />
        </div>
      </div>
    </section>
  );
}

/* Ilustração da Inbox (HTML puro, sem print) — mostra o produto sem expor dados reais */
function InboxMock() {
  const convs = [
    { n: 'Marina Costa', m: 'Áudio transcrito: "Queria o horário de sábado…"', tag: 'WhatsApp', c: 'bg-emerald-400/15 text-emerald-300', ini: 'MC', col: 'bg-teal-500' },
    { n: 'Ramal 2041', m: 'Chamada em andamento · 02:14', tag: 'Telefone', c: 'bg-sky-400/15 text-sky-300', ini: '☎', col: 'bg-sky-600' },
    { n: 'Pedro Alves', m: 'Recebi o protocolo, obrigado!', tag: 'Telegram', c: 'bg-indigo-400/15 text-indigo-300', ini: 'PA', col: 'bg-orange-500' },
    { n: 'Visitante do site', m: 'Vocês atendem clínicas?', tag: 'Chat do site', c: 'bg-fuchsia-400/15 text-fuchsia-300', ini: 'VS', col: 'bg-slate-600' },
  ];
  return (
    <div className="relative mx-auto w-full max-w-xl" aria-hidden="true">
      <div className="absolute -inset-6 bg-teal-500/20 blur-3xl rounded-full" />
      <div className="glass relative rounded-3xl p-5 sm:p-6">
        <div className="flex items-center justify-between mb-5">
          <div className="font-bold text-lg">Inbox</div>
          <div className="flex gap-2 text-xs font-semibold">
            <span className="px-3 py-1 rounded-full bg-teal-400 text-navy-950">Meus</span>
            <span className="px-3 py-1 rounded-full bg-white/5 text-slate-300">Fila</span>
            <span className="px-3 py-1 rounded-full bg-white/5 text-slate-300">Todos</span>
          </div>
        </div>
        <div className="space-y-2.5">
          {convs.map((c, i) => (
            <div key={i} className={`flex items-center gap-3 p-3 rounded-2xl ${i === 0 ? 'bg-teal-400/10 ring-1 ring-teal-400/30' : 'bg-white/[0.03]'}`}>
              <div className={`w-10 h-10 rounded-full ${c.col} flex items-center justify-center text-sm font-bold shrink-0`}>{c.ini}</div>
              <div className="min-w-0 flex-1">
                <div className="flex items-center justify-between gap-2">
                  <span className="font-semibold text-sm truncate">{c.n}</span>
                  <span className={`text-[11px] font-semibold px-2 py-0.5 rounded-full shrink-0 ${c.c}`}>{c.tag}</span>
                </div>
                <div className="text-xs text-slate-400 truncate mt-0.5">{c.m}</div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-4 p-3.5 rounded-2xl bg-navy-950/70 border border-white/5 flex items-start gap-3">
          <div className="w-8 h-8 rounded-lg bg-teal-400/15 text-teal-300 flex items-center justify-center shrink-0"><Icon name="sparkles" className="w-4 h-4" /></div>
          <div className="text-xs leading-relaxed text-slate-300">
            <span className="text-teal-300 font-semibold">IA sugere:</span> "Olá, Marina! Aos sábados atendemos das 8h às 12h. Posso agendar para você?"
          </div>
        </div>
      </div>
    </div>
  );
}

function ChannelsStrip() {
  const ch = [['message-circle', 'WhatsApp oficial'], ['phone', 'Telefonia / PABX'], ['send', 'Telegram'], ['globe', 'Chat do site'], ['camera', 'Instagram Direct']];
  return (
    <section className="border-y border-white/5 bg-navy-900/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-7 flex flex-wrap justify-center gap-x-10 gap-y-4">
        {ch.map(([ic, t]) => (
          <div key={t} className="flex items-center gap-2.5 text-slate-300 font-medium">
            <Icon name={ic} className="w-5 h-5 text-teal-300" /> {t}
          </div>
        ))}
      </div>
    </section>
  );
}

function AboutSection() {
  return (
    <section id="sobre" className="py-24 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="mb-6"><Chip>Nerd Services · Maceió/AL</Chip></div>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight leading-tight mb-6">
              De Maceió para <span className="text-gradient">o mercado global</span><Dot />
            </h2>
            <div className="space-y-6 text-slate-400 text-lg leading-relaxed">
              <p>
                A Nerd Services iniciou sua jornada em {FUNDACAO.ano} resolvendo os gargalos de comunicação das empresas. Durante anos, conectamos
                infraestruturas críticas e PABX para garantir a continuidade dos negócios de nossos clientes.
              </p>
              <p>
                Com a evolução do mercado, levamos essa engenharia para o desenvolvimento de software próprio e nos consolidamos como uma
                software house focada na experiência do cliente.
              </p>
              <p>
                O resultado dessa trajetória é o <strong className="text-slate-100">OmniNerd</strong>: uma plataforma SaaS modular, pronta para o
                atendimento multicanal de qualquer segmento.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-5">
            {[[`+${anosDeMercado()}`, 'anos de mercado'], ['100%', 'tecnologia própria'], ['INPI', 'marcas registradas'], ['24h', 'atendimento com IA']].map(([k, t]) => (
              <div key={t} className="glass rounded-3xl p-7 md:p-8">
                <div className="text-4xl md:text-5xl font-extrabold tracking-tight text-gradient mb-2">{k}</div>
                <div className="text-sm md:text-base text-slate-400 font-medium">{t}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function FeaturesSection() {
  const features = [
    { icon: 'layout-dashboard', title: 'Inbox omnichannel', description: 'WhatsApp, telefonia, Telegram, chat do site e Instagram numa caixa de entrada compartilhada. Filas, atribuição e o histórico do cliente sempre junto.' },
    { icon: 'phone', title: 'PABX em nuvem + WebRTC', description: 'Ramal no navegador, URA, filas, gravação e relatórios. Integra com a sua operadora e com os aparelhos SIP que você já tem.' },
    { icon: 'bot', title: 'Inteligência Artificial', description: 'Transcreve áudios, entende a intenção, responde com a base de conhecimento da sua empresa e passa para o humano na hora certa — 24 horas.' },
    { icon: 'contact', title: 'CRM nativo', description: 'Fichas, formulários e solicitações com protocolo. Do pedido ao aviso automático ao cliente, com PDF anexado e prazos — sem planilha.' },
    { icon: 'calendar-clock', title: 'Campanhas e agendamentos', description: 'Mensagens ativas com modelos aprovados pela Meta e campanhas de voz, respeitando consentimento e limites de envio.' },
    { icon: 'shield-check', title: 'Seguro e multiempresa', description: 'Cada empresa no seu espaço isolado, com login individual, papéis e permissões. Dados tratados conforme a LGPD.' },
  ];
  return (
    <section id="omninerd" className="py-24 bg-navy-900/40 border-y border-white/5 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center mb-8">
          <img src="/brand/omninerd-logo-dark.svg" alt="OmniNerd" className="h-12 md:h-14 w-auto" />
        </div>
        <SectionHead
          title="Ative só o que a sua operação"
          accent="precisa"
          text="Um sistema construído em módulos. Você começa pelo canal que mais importa hoje e cresce quando quiser."
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f) => (
            <div key={f.title} className="glass glass-hover rounded-3xl p-8">
              <div className="w-14 h-14 rounded-2xl bg-teal-400/10 ring-1 ring-teal-400/30 text-teal-300 flex items-center justify-center mb-6">
                <Icon name={f.icon} className="w-7 h-7" strokeWidth={1.8} />
              </div>
              <h3 className="text-xl font-bold mb-3">{f.title}</h3>
              <p className="text-slate-400 leading-relaxed">{f.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function SegmentsSection() {
  const segs = [
    ['graduation-cap', 'Escolas e faculdades'], ['stethoscope', 'Clínicas e hospitais'], ['scale', 'Escritórios de advocacia'],
    ['car', 'Proteção veicular e seguros'], ['wifi', 'Provedores de internet'], ['factory', 'Indústria e comércio'],
  ];
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHead chip="Para quem é" title="Feito para quem" accent="atende muita gente" text="Fluxos, formulários e filas se adaptam ao seu segmento — sem desenvolvimento sob medida." />
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-5">
          {segs.map(([ic, t]) => (
            <div key={t} className="glass rounded-2xl p-5 md:p-6 flex items-center gap-4">
              <Icon name={ic} className="w-7 h-7 text-teal-300 shrink-0" strokeWidth={1.8} />
              <span className="font-semibold text-slate-100 leading-snug">{t}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/*
 * Seção "Como funciona" — posicionamento de PROVEDOR DE TECNOLOGIA (Tech
 * Provider) da Meta. Existe para deixar explícito, para quem visita e para a
 * verificação de acesso da Meta, três pontos do modelo:
 *   1. é uma PLATAFORMA DE SaaS B2B multi-tenant (empresas atendem os clientes
 *      DELAS; cada empresa é isolada das demais);
 *   2. cada empresa conecta a PRÓPRIA conta oficial do WhatsApp Business e
 *      continua dona dela;
 *   3. o consumo de conversas é pago DIRETO à Meta pela empresa — não há
 *      revenda de mensagens. Nós cobramos a plataforma.
 * Não alterar o sentido destes textos sem rever a análise da Meta.
 */
function PlatformSection() {
  const steps = [
    { step: '01', title: 'Sua empresa conecta o próprio WhatsApp', description: 'Cada empresa vincula ao OmniNerd a sua própria conta oficial do WhatsApp Business e o seu próprio número. A conta continua sendo sua: você mantém o controle, a titularidade e a reputação do número.' },
    { step: '02', title: 'Sua equipe atende em um só lugar', description: 'As mensagens dos seus clientes chegam em uma caixa de entrada compartilhada, ao lado da telefonia e dos demais canais. Filas, atribuição, histórico, modelos aprovados e relatórios — tudo na mesma tela.' },
    { step: '03', title: 'Você paga o consumo direto à Meta', description: 'As conversas do WhatsApp são cobradas pela Meta diretamente da sua conta, pelo preço oficial dela. Não revendemos mensagens nem embutimos margem no seu consumo. Da Nerd Services você contrata a plataforma e o suporte.' },
  ];
  return (
    <section id="plataforma" className="py-24 bg-navy-900/40 border-y border-white/5 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHead
          chip="Plataforma SaaS · Provedor de tecnologia"
          title="Como a sua empresa usa o"
          accent="OmniNerd"
          text="O OmniNerd é uma plataforma de software (SaaS) contratada por empresas que precisam atender os seus próprios clientes. Cada empresa opera o seu espaço, com os seus atendentes e os seus canais — isolada das demais."
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {steps.map((item) => (
            <div key={item.step} className="glass glass-hover rounded-3xl p-8">
              <div className="text-5xl font-extrabold text-teal-400/30 mb-4">{item.step}</div>
              <h3 className="text-xl font-bold mb-4 leading-snug">{item.title}</h3>
              <p className="text-slate-400 leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
        <div className="glass rounded-3xl p-8 md:p-10 max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-lg font-bold mb-3 text-slate-100">Cada empresa, o seu espaço</h4>
              <p className="text-slate-400 leading-relaxed">
                A arquitetura é multiempresa: os dados de um cliente nunca são acessíveis a outro. O acesso é por login individual, com
                papéis e permissões definidos pelo administrador de cada empresa.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-bold mb-3 text-slate-100">Transparência no custo</h4>
              <p className="text-slate-400 leading-relaxed">
                Você paga a Meta pelo que conversar, no preço oficial, e a Nerd Services pela plataforma. Sem intermediação no consumo e
                sem surpresa na fatura — você acompanha o uso pelo próprio painel.
              </p>
            </div>
          </div>
          <p className="text-sm text-slate-500 mt-8 leading-relaxed">
            A Nerd Services é uma provedora de tecnologia: desenvolvemos e operamos o software. O uso do WhatsApp segue os termos e as
            políticas da Meta, e as mensagens são enviadas apenas a pessoas que entraram em contato com a empresa ou consentiram em recebê-las.
          </p>
        </div>
      </div>
    </section>
  );
}

/*
 * Carrossel de clientes. Troque "name" pelo nome real de cada empresa
 * (vira o texto alternativo — ajuda no Google e na acessibilidade).
 * O antigo "cliente (17).png" saiu da lista porque o arquivo não carrega.
 */
function ClientsSection() {
  const clients = [
    { name: 'Engenho Caraçuipe', logo: '/clients/caracuipe.png' },
    { name: 'Cliente 01', logo: '/clients/cliente (1).png' },
    { name: 'Cliente 02', logo: '/clients/cliente (2).png' },
    { name: 'Cliente 03', logo: '/clients/cliente (3).png' },
    { name: 'Cliente 04', logo: '/clients/cliente (4).png' },
    { name: 'Cliente 05', logo: '/clients/cliente (5).png' },
    { name: 'Cliente 06', logo: '/clients/cliente (6).png' },
    { name: 'Cliente 07', logo: '/clients/cliente (7).png' },
    { name: 'Cliente 08', logo: '/clients/cliente (8).png' },
    { name: 'Cliente 09', logo: '/clients/cliente (9).png' },
    { name: 'Cliente 10', logo: '/clients/cliente (10).png' },
    { name: 'Cliente 11', logo: '/clients/cliente (11).png' },
    { name: 'Cliente 12', logo: '/clients/cliente (12).png' },
    { name: 'Cliente 13', logo: '/clients/cliente (13).png' },
    { name: 'Cliente 14', logo: '/clients/cliente (14).png' },
    { name: 'Cliente 15', logo: '/clients/cliente (15).png' },
    { name: 'Cliente 16', logo: '/clients/cliente (16).png' },
    { name: 'Cliente 18', logo: '/clients/cliente (18).png' },
    { name: 'Cliente 19', logo: '/clients/cliente (19).png' },
    { name: 'Cliente 20', logo: '/clients/cliente (20).png' },
    { name: 'Cliente 21', logo: '/clients/cliente (21).png' },
    { name: 'Cliente 22', logo: '/clients/cliente (22).png' },
    { name: 'Cliente 23', logo: '/clients/cliente (23).png' },
    { name: 'Cliente 43', logo: '/clients/cliente (1).svg' },
    { name: 'Cliente 44', logo: '/clients/cliente (1).jpg' },
  ];
  return (
    <section id="clientes" className="py-20 overflow-hidden scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10 text-center">
        <p className="text-sm font-semibold text-slate-400 uppercase tracking-[0.2em]">Empresas que confiam na engenharia da Nerd Services</p>
      </div>
      <div className="relative w-full flex overflow-x-hidden mask-fade">
        <div className="py-6 animate-marquee flex items-center gap-20">
          {clients.concat(clients).map((client, index) => (
            <div key={index} className="flex items-center justify-center min-w-[200px] h-24 opacity-60 grayscale hover:grayscale-0 hover:opacity-100 transition-all">
              <img
                src={client.logo}
                alt={index < clients.length ? `Logo ${client.name}` : ''}
                loading="lazy"
                className="max-h-16 max-w-[180px] object-contain"
                onError={(e) => { e.currentTarget.parentElement.style.display = 'none'; }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function TestimonialSection() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[560px] h-[560px] max-w-full bg-teal-500/10 blur-[100px] rounded-full pointer-events-none" />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="glass rounded-[2rem] p-8 md:p-14 text-center">
          <div className="text-7xl leading-none font-extrabold text-orange-500 h-10 mb-6">“</div>
          <blockquote className="text-xl md:text-3xl font-medium text-slate-100 leading-snug mb-10">
            Contratei a Nerd Services para reestruturar todo o atendimento e intercomunicação da empresa. O processo foi concluído em poucos
            dias, com rapidez extrema e qualidade técnica indiscutível.
          </blockquote>
          <div className="font-bold text-white text-lg">Carlos Coutinho</div>
          <div className="text-teal-300 font-medium">Engenho Caraçuipe</div>
        </div>
      </div>
    </section>
  );
}

function FaqSection() {
  const faqs = [
    ['O número do WhatsApp continua sendo da minha empresa?', 'Sim. Você conecta a sua própria conta oficial do WhatsApp Business (API da Meta). A titularidade, o número e a reputação continuam com a sua empresa — inclusive se um dia sair do OmniNerd.'],
    ['Quanto custam as mensagens do WhatsApp?', 'As conversas são cobradas pela Meta diretamente no cartão da sua empresa, no preço oficial. A Nerd Services cobra apenas a plataforma e o suporte, sem margem sobre o consumo.'],
    ['Preciso trocar meus telefones ou a operadora?', 'Não. O módulo PBX integra com a sua operadora (tronco SIP) e com os aparelhos SIP que você já usa. O atendente também pode falar direto pelo navegador, só com um headset.'],
    ['Como é a contratação?', 'Por usuário, com os módulos que você escolher (WhatsApp, PBX, CRM, IA, Telegram e chat do site). A implantação inclui configuração dos canais, fluxos de atendimento e treinamento da equipe.'],
    ['E a LGPD?', 'Sua empresa é a controladora dos dados e a Nerd Services atua como operadora: os dados ficam isolados por empresa, com acesso por login individual, registro de ações e backups periódicos.'],
    ['A IA responde qualquer coisa sozinha?', 'A IA responde com base no conteúdo que a sua empresa cadastra e encaminha para um atendente humano quando não tem certeza ou quando o cliente pede. Você decide onde ela atua.'],
  ];
  return (
    <section id="faq" className="py-24 bg-navy-900/40 border-y border-white/5 scroll-mt-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHead chip="Dúvidas frequentes" title="Perguntas que" accent="sempre aparecem" />
        <div className="space-y-3">
          {faqs.map(([q, a]) => (
            <details key={q} className="glass rounded-2xl group">
              <summary className="cursor-pointer list-none p-6 flex items-center justify-between gap-4 font-semibold text-slate-100">
                {q}
                <Icon name="plus" className="w-5 h-5 text-teal-300 shrink-0 transition-transform group-open:rotate-45" />
              </summary>
              <p className="px-6 pb-6 -mt-1 text-slate-400 leading-relaxed">{a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

function CtaSection() {
  return (
    <section id="contato" className="py-28 relative overflow-hidden scroll-mt-20">
      <div className="hero-bg opacity-70" aria-hidden="true" />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative text-center">
        <div className="mb-6"><Chip>Demonstração gratuita</Chip></div>
        <h2 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight leading-tight">
          Veja o OmniNerd <span className="text-gradient">em ação</span><Dot />
        </h2>
        <p className="text-lg md:text-xl text-slate-400 mb-10 max-w-2xl mx-auto leading-relaxed">
          Em 30 minutos mostramos como a sua equipe atende telefone, WhatsApp e chat numa tela só — online ou presencial em Maceió.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
          <a href={WHATS_URL} target="_blank" rel="noopener noreferrer" className="btn-primary px-8 py-4 text-lg inline-flex items-center justify-center gap-2">
            <Icon name="message-circle" className="w-5 h-5" strokeWidth={2.2} /> Falar no WhatsApp
          </a>
          <a href={`tel:+${WHATS_NUM}`} className="px-8 py-4 rounded-2xl text-lg font-semibold border border-white/15 bg-white/5 hover:bg-white/10 transition-colors inline-flex items-center justify-center gap-2">
            <Icon name="phone" className="w-5 h-5 text-teal-300" /> {PHONE_FIXO}
          </a>
        </div>
        <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-white/5 border border-white/10 text-slate-300 text-sm font-medium">
          <span className="h-2.5 w-2.5 rounded-full bg-teal-400 animate-pulse shadow-[0_0_10px_rgba(45,212,191,0.9)]" />
          Prefere o chat? Nossa equipe atende pelo próprio OmniNerd — é só abrir no canto da tela.
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-navy-950 pt-16 pb-10 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-3 mb-12">
          <div>
            <div className="flex items-center gap-1 mb-5">
              <img src="/logo-nerd.png" alt="Nerd Services" className="h-11 w-auto object-contain brightness-0 invert opacity-90" />
              <span className="text-[10px] text-slate-500 font-bold self-start -ml-1">®</span>
            </div>
            <p className="text-slate-400 leading-relaxed max-w-xs">Software house de Maceió/AL, criadora do OmniNerd®.</p>
          </div>
          <div className="space-y-3 text-slate-300">
            <div className="text-sm font-semibold uppercase tracking-widest text-slate-500 mb-4">Contato</div>
            <a href={`tel:+${WHATS_NUM}`} className="flex items-center gap-3 hover:text-teal-300 transition-colors"><Icon name="phone" className="w-5 h-5 text-teal-300" /> {PHONE_FIXO}</a>
            <a href={`https://wa.me/${WHATS_CEL}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 hover:text-teal-300 transition-colors"><Icon name="message-circle" className="w-5 h-5 text-teal-300" /> {PHONE_CEL}</a>
            <a href={`mailto:${EMAIL}`} className="flex items-center gap-3 hover:text-teal-300 transition-colors break-all"><Icon name="mail" className="w-5 h-5 text-teal-300 shrink-0" /> {EMAIL}</a>
            <div className="flex items-center gap-3"><Icon name="map-pin" className="w-5 h-5 text-teal-300" /> Maceió, AL — Brasil</div>
          </div>
          <div className="space-y-3 text-slate-300">
            <div className="text-sm font-semibold uppercase tracking-widest text-slate-500 mb-4">Links</div>
            <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 hover:text-teal-300 transition-colors"><Icon name="camera" className="w-5 h-5 text-teal-300" /> @nerdservicesbr</a>
            <a href={SISTEMA_URL} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 hover:text-teal-300 transition-colors"><Icon name="headphones" className="w-5 h-5 text-teal-300" /> Área do cliente</a>
            <a href={WHATS_URL} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 hover:text-teal-300 transition-colors"><Icon name="building-2" className="w-5 h-5 text-teal-300" /> Agendar demonstração</a>
          </div>
        </div>
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row gap-4 items-center justify-between">
          <div className="flex flex-wrap justify-center gap-x-5 gap-y-2 text-sm">
            <a href="/privacidade" className="text-slate-500 hover:text-teal-300 transition-colors">Política de Privacidade</a>
            <a href="/termos" className="text-slate-500 hover:text-teal-300 transition-colors">Termos de Serviço</a>
            <a href="/exclusao" className="text-slate-500 hover:text-teal-300 transition-colors">Exclusão de Dados</a>
          </div>
          <p className="text-slate-600 text-sm text-center">
            © {new Date().getFullYear()} Nerd Services® · L. Gustavo Gomes Galvão Tecnologia · CNPJ 26.356.334/0001-96
          </p>
        </div>
      </div>
    </footer>
  );
}

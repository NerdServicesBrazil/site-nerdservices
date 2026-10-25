import Icon from '../components/Icon.jsx';
import { SectionHead, Check } from '../components/ui.jsx';
import { PLANOS, FAQ, CLIENTES, WHATS_URL, WHATS_NUM, PHONE_FIXO, AGENDAR, AGENDA_IFRAME, AGENDA_URL, INSTAGRAM_URL, INSTAGRAM_USER } from '../data/site.js';

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
 * (Textos mantidos iguais aos de antes do redesign — 25/10/2026.)
 */
export function Plataforma() {
  const steps = [
    { step: '01', title: 'Sua empresa conecta o próprio WhatsApp', description: 'Cada empresa vincula ao OmniNerd a sua própria conta oficial do WhatsApp Business e o seu próprio número. A conta continua sendo sua: você mantém o controle, a titularidade e a reputação do número.' },
    { step: '02', title: 'Sua equipe atende em um só lugar', description: 'As mensagens dos seus clientes chegam em uma caixa de entrada compartilhada, ao lado da telefonia e dos demais canais. Filas, atribuição, histórico, modelos aprovados e relatórios — tudo na mesma tela.' },
    { step: '03', title: 'Você paga o consumo direto à Meta', description: 'As conversas do WhatsApp são cobradas pela Meta diretamente da sua conta, pelo preço oficial dela. Não revendemos mensagens nem embutimos margem no seu consumo. Da Nerd Services você contrata a plataforma e o suporte.' },
  ];
  return (
    <section id="plataforma" className="py-24 band scroll-mt-16" aria-labelledby="titulo-plataforma">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHead id="titulo-plataforma" center eyebrow="Plataforma SaaS · Provedor de tecnologia" title="Como a sua empresa usa o" accent="OmniNerd"
          text="O OmniNerd é uma plataforma de software (SaaS) contratada por empresas que precisam atender os seus próprios clientes. Cada empresa opera o seu espaço, com os seus atendentes e os seus canais — isolada das demais." />
        <div className="grid gap-5 md:grid-cols-3 mb-8">
          {steps.map((s, i) => (
            <div key={s.step} className="card tilt reveal p-7" style={{ '--d': `${i * 100}ms` }}>
              <div className="mono text-4xl font-bold text-brand/50 mb-4">{s.step}</div>
              <h3 className="text-xl font-semibold mb-3 leading-snug">{s.title}</h3>
              <p className="text-tx2 leading-relaxed">{s.description}</p>
            </div>
          ))}
        </div>
        <div className="card reveal p-7 md:p-9 max-w-4xl mx-auto">
          <div className="grid gap-8 md:grid-cols-2">
            <div>
              <h3 className="text-lg font-semibold mb-2">Cada empresa, o seu espaço</h3>
              <p className="text-tx2 leading-relaxed">A arquitetura é multiempresa: os dados de um cliente nunca são acessíveis a outro. O acesso é por login individual, com papéis e permissões definidos pelo administrador de cada empresa.</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">Transparência no custo</h3>
              <p className="text-tx2 leading-relaxed">Você paga a Meta pelo que conversar, no preço oficial, e a Nerd Services pela plataforma. Sem intermediação no consumo e sem surpresa na fatura — você acompanha o uso pelo próprio painel.</p>
            </div>
          </div>
          <p className="text-sm text-tx3 mt-8 leading-relaxed">A Nerd Services é uma provedora de tecnologia: desenvolvemos e operamos o software. O uso do WhatsApp segue os termos e as políticas da Meta, e as mensagens são enviadas apenas a pessoas que entraram em contato com a empresa ou consentiram em recebê-las.</p>
        </div>
      </div>
    </section>
  );
}

/* Planos — os pacotes do catálogo, SEM preço (decisão do Gustavo em 25/10/2026). */
export function Planos() {
  return (
    <section id="planos" className="py-24 scroll-mt-16" aria-labelledby="titulo-planos">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHead id="titulo-planos" center eyebrow="Planos" title="Pacotes claros," accent="sem sobretaxa no WhatsApp."
          text="Todos os pacotes incluem chat do site, Telegram, URA e fluxos, relatórios e suporte da Nerd Services. A proposta é montada para o tamanho da sua operação." />
        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {PLANOS.map((p, i) => (
            <li key={p.nome} className={`card tilt reveal p-6 flex flex-col ${p.destaque ? 'glow border-brand/60' : ''}`} style={{ '--d': `${i * 80}ms` }}>
              <div className="flex items-center justify-between gap-2 min-h-6">
                <h3 className="font-semibold text-lg leading-tight">{p.nome}</h3>
                {p.destaque && <span className="badge-new">COM IA</span>}
              </div>
              <p className="mono text-[12px] text-brand-l mt-3">{p.inclui}</p>
              <p className="text-tx2 text-[15px] leading-relaxed mt-3">{p.desc}</p>
              <ul className="mt-4 space-y-2 text-[14px] text-tx2 flex-1">
                {p.itens.map((t) => <li key={t} className="flex gap-2"><Check />{t}</li>)}
              </ul>
              <a href={AGENDAR} className={`btn btn-sm mt-6 ${p.destaque ? 'btn-p' : 'btn-s'}`}>Solicitar proposta</a>
            </li>
          ))}
        </ul>
        <div className="reveal mt-8 grid gap-3 md:grid-cols-3 text-[15px] text-tx2">
          <p className="flex gap-2"><Check />Usuários e ramais adicionais em faixa progressiva: quanto maior a operação, menor o valor por usuário — e cada usuário de atendimento já inclui o ramal dele.</p>
          <p className="flex gap-2"><Check />Mensagens do WhatsApp pagas direto à Meta, a preço de custo. A conta (WABA) é da sua empresa.</p>
          <p className="flex gap-2"><Check />Módulos avulsos (Instagram, IA, CRM), migração e conectores: montamos a proposta com você.</p>
        </div>
      </div>
    </section>
  );
}

export function Prova() {
  const lista = CLIENTES.concat(CLIENTES);
  return (
    <section id="clientes" className="py-20 overflow-hidden scroll-mt-16 band" aria-labelledby="titulo-clientes">
      <h2 id="titulo-clientes" className="text-center text-sm font-semibold text-tx3 uppercase tracking-[0.2em] px-4 mb-8">Empresas que confiam na engenharia da Nerd Services</h2>
      <div className="relative w-full flex overflow-x-hidden mask-fade">
        <ul className="marquee items-center gap-4 sm:gap-5 py-4">
          {lista.map((c, i) => (
            <li key={i} className={`logo-tile ${c.escuro ? 'logo-tile-escuro' : ''}`} aria-hidden={i >= CLIENTES.length ? 'true' : undefined}>
              <img src={c.logo} alt={i < CLIENTES.length ? c.name : ''} width={c.w} height={c.h} loading="lazy" decoding="async" />
            </li>
          ))}
        </ul>
      </div>
      <figure className="reveal max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        <div className="card p-8 md:p-12 text-center">
          <div className="text-6xl leading-none font-bold text-accent h-8 mb-6" aria-hidden="true">“</div>
          <blockquote className="text-xl md:text-2xl font-medium leading-snug mb-8">
            Contratei a Nerd Services para reestruturar todo o atendimento e intercomunicação da empresa. O processo foi concluído em poucos
            dias, com rapidez extrema e qualidade técnica indiscutível.
          </blockquote>
          <figcaption><b className="block">Carlos Coutinho</b><span className="text-brand-l">Engenho Caraçuipe</span></figcaption>
        </div>
      </figure>
    </section>
  );
}

export function Faq() {
  return (
    <section id="faq" className="py-24 scroll-mt-16" aria-labelledby="titulo-faq">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHead id="titulo-faq" center eyebrow="Dúvidas frequentes" title="Perguntas que" accent="sempre aparecem." />
        <div className="space-y-3">
          {FAQ.map(([q, a]) => (
            <details key={q} className="card group">
              <summary className="cursor-pointer p-5 md:p-6 flex items-center justify-between gap-4 font-semibold">
                {q}
                <Icon name="plus" className="w-5 h-5 text-brand-l shrink-0 transition-transform group-open:rotate-45" />
              </summary>
              <p className="px-5 md:px-6 pb-6 -mt-1 text-tx2 leading-relaxed">{a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

/*
 * Agendamento: o Formulário do Site do próprio OmniNerd embutido (cai direto no CRM com protocolo).
 * Mesmo resultado do embed.js oficial, mas com o <iframe> já no HTML pré-renderizado (sem script
 * de terceiros mexendo no DOM do React). A altura se ajusta pela mensagem "omninerd-form-height"
 * (ouvinte no App.jsx). Sem iframe (bloqueado/sem JS), o link abre o formulário na página do OmniNerd.
 */
export function Cta() {
  return (
    <section id="agendar" className="py-24 lg:py-28 relative overflow-hidden scroll-mt-16 hero" aria-labelledby="titulo-cta">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid gap-10 lg:grid-cols-[0.85fr_1.15fr] items-start">
        <div className="reveal lg:sticky lg:top-28">
          <span className="eyebrow">Demonstração gratuita</span>
          <h2 id="titulo-cta" className="text-4xl md:text-5xl font-bold tracking-tight leading-tight mt-5 mb-6">Veja o OmniNerd <span className="hl">em ação.</span></h2>
          <p className="lead text-lg mb-8">Em 30 minutos mostramos como a sua equipe atende telefone, WhatsApp e chat numa tela só — online ou presencial em Maceió.</p>
          <ul className="space-y-3 text-tx2 mb-10">
            <li className="flex gap-2"><Check />Escolha a data e conte como é o seu atendimento hoje.</li>
            <li className="flex gap-2"><Check />O pedido cai direto no nosso OmniNerd, com protocolo.</li>
            <li className="flex gap-2"><Check />Confirmamos pelo WhatsApp ou por e-mail, como você preferir.</li>
          </ul>
          <p className="text-sm text-tx3 mb-3">Prefere falar agora?</p>
          <div className="flex flex-col sm:flex-row sm:flex-wrap gap-3">
            <a href={WHATS_URL} target="_blank" rel="noopener noreferrer" className="btn btn-s"><Icon name="message-circle" className="w-5 h-5 text-brand-l" /> WhatsApp</a>
            <a href={`tel:+${WHATS_NUM}`} className="btn btn-s"><Icon name="phone" className="w-5 h-5 text-brand-l" /> {PHONE_FIXO}</a>
            <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="btn btn-s"><Icon name="instagram" className="w-5 h-5 text-brand-l" /> {INSTAGRAM_USER}</a>
          </div>
        </div>
        <div className="reveal" style={{ '--d': '120ms' }}>
          <div className="glass glow p-2 sm:p-3">
            <div className="flex items-center gap-2 px-2 pb-2 text-[11px] mono text-tx3" aria-hidden="true">
              <span className="w-2 h-2 rounded-full bg-g-line3" /><span className="w-2 h-2 rounded-full bg-g-line3" /><span className="w-2 h-2 rounded-full bg-g-line3" />
              <span className="ml-2 truncate">nerdservices.omninerd.io · agendamento</span>
            </div>
            <iframe
              id="form-agenda"
              src={AGENDA_IFRAME}
              title="Agendamento de demonstração do OmniNerd"
              loading="lazy"
              className="block w-full rounded-lg bg-white"
              style={{ border: 0, minHeight: 420, height: 980 }}
            />
          </div>
          <p className="text-center text-sm text-tx3 mt-4">
            O formulário não carregou? <a href={AGENDA_URL} target="_blank" rel="noopener noreferrer" className="text-brand-l underline underline-offset-4">Abrir o agendamento em outra aba</a>
          </p>
        </div>
      </div>
    </section>
  );
}

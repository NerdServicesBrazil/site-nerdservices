import Icon from '../components/Icon.jsx';
import { SectionHead } from '../components/ui.jsx';
import { SEGMENTOS, TELEFONIA, AGENDAR, FUNDACAO, APP_ANDROID_URL, APP_ITENS } from '../data/site.js'; // FATIA 20261119_RECURSOS: Canais, Módulos e Novidades viraram o explorador (Explorador.jsx)

/* FATIA 20261110_ANDROID — App OmniNerd no celular. QR Code só no computador (no celular o selo abre a loja). */
export function AppCelular() {
  return (
    <section id="app" className="py-24 band scroll-mt-16" aria-labelledby="titulo-app">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid gap-10 lg:grid-cols-[1.15fr_0.85fr] items-center">
        <div className="reveal">
          <span className="eyebrow">Novo · App OmniNerd</span>
          <h2 id="titulo-app" className="h-sec mt-4 mb-4">Atenda de onde estiver. <span className="hl">Agora no celular.</span></h2>
          <p className="lead mb-6">
            O aplicativo OmniNerd leva o atendimento para o celular da sua equipe: as conversas de todos os canais,
            as ligações do ramal e os avisos na hora — com o mesmo login do sistema.
          </p>
          <ul className="grid gap-3 sm:grid-cols-2 mb-8">
            {APP_ITENS.map(([ic, t]) => (
              <li key={t} className="flex items-start gap-3 text-tx2 text-[15px] leading-relaxed">
                <Icon name={ic} className="w-5 h-5 text-brand-l shrink-0 mt-0.5" /> {t}
              </li>
            ))}
          </ul>
          <div className="flex flex-col sm:flex-row sm:items-center gap-4">
            <a href={APP_ANDROID_URL} target="_blank" rel="noopener noreferrer" className="store-btn">
              <Icon name="download" className="w-6 h-6" />
              <span><small>Disponível no</small>Google Play</span>
            </a>
            <p className="text-sm text-tx3">iPhone: em breve na App Store.</p>
          </div>
          <p className="text-sm text-tx3 mt-6 leading-relaxed">
            Como entrar: baixe o app, informe o endereço da sua empresa e use o seu login.
            A conta é criada pelo administrador da empresa no painel do OmniNerd.
          </p>
        </div>
        <div className="reveal hidden md:flex justify-center" style={{ '--d': '120ms' }}>
          <div className="card qr-card p-6 text-center">
            <img src="/app/qr-google-play.svg" alt="QR Code para baixar o app OmniNerd na Google Play" width="200" height="200" className="qr-img" loading="lazy" />
            <p className="mt-4 font-semibold flex items-center justify-center gap-2"><Icon name="smartphone" className="w-5 h-5 text-brand-l" /> Aponte a câmera do celular</p>
            <p className="text-sm text-tx3 mt-1">Abre o OmniNerd na Google Play</p>
          </div>
        </div>
      </div>
    </section>
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
            <p className="mt-1 text-2xl font-semibold tracking-tight">Sob consulta</p>
            <p className="text-[13px] text-tx3 mt-2">Funciona com a central do OmniNerd ou com a central SIP que você já tem.</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3">
            <a href={AGENDAR} className="btn btn-p">Pedir orçamento</a>
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

import { useEffect, useRef } from 'react';
import Icon from './Icon.jsx';
import { anosDeMercado } from '../data/site.js';

/*
 * FATIA 20261119_CINEMA — abertura cinematográfica (direção “Obsidiana”, aprovada em 19/11/2026).
 * Cenário: servidores em profundidade, piso em perspectiva, núcleo com o símbolo OFICIAL do OmniNerd
 * (public/brand/omninerd-symbol.webp, sem alteração), anéis orbitais, hologramas das soluções e partículas.
 * Tudo em CSS 3D + um <canvas> 2D para as partículas — nenhuma biblioteca nova.
 * Regras de desempenho e acessibilidade:
 *  - o texto (h1, CTAs) vem no HTML pré-renderizado e é o LCP; o cenário é decorativo (aria-hidden);
 *  - partículas e inclinação com o mouse só com mouse fino, tela ≥ 1024 px e SEM prefers-reduced-motion;
 *    o canvas começa depois do carregamento e pausa quando a abertura sai da tela ou a aba fica oculta;
 *  - no celular: núcleo e anéis numa versão compacta, sem servidores e sem partículas;
 *  - sem JavaScript: o cenário aparece parado, completo.
 */
const RACKS = (() => {
  const r = [];
  for (const lado of [-1, 1]) {
    for (let k = 5; k >= 0; k--) {
      const sc = 1 - k * 0.13, w = Math.round(150 * sc), h = Math.round(440 * sc);
      r.push({ key: `${lado}${k}`, w, h, x: Math.round(450 + lado * (120 + 330 * sc) - w / 2), y: Math.round(420 - h / 2 + 20),
        o: (0.35 + sc * 0.55).toFixed(2), b: (0.55 + sc * 0.6).toFixed(2), z: Math.round((sc - 1) * 60) });
    }
  }
  return r;
})();

export default function Hero() {
  const anos = anosDeMercado();
  return (
    <section className="cine" id="topo" aria-labelledby="titulo-hero">
      <Cenario />
      <div className="cine-copy max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="cine-text">
          <span className="eyebrow">Nerd Services · Telecom · Atendimento · IA</span>
          <h1 id="titulo-hero" className="cine-h1">Tecnologia que conecta você <span className="hl">ao futuro.</span></h1>
          <p className="lead text-lg max-w-xl">
            Atendimento omnichannel com inteligência artificial, telefonia em nuvem e a linha telefônica da sua empresa —
            projetados, implantados e suportados pela mesma equipe, desde 2016.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 mt-8">
            <a href="#recursos" className="btn btn-p">Conheça nossas soluções <Icon name="arrow-up-right" className="w-4 h-4" /></a>
            <a href="#sobre" className="btn btn-s"><span className="cine-play" aria-hidden="true"><Icon name="arrow-right" className="w-3.5 h-3.5" /></span>Conheça a Nerd Services</a>
          </div>
          <dl className="reveal stats cine-stats">
            <div><dt className="sr-only">Anos de mercado</dt><dd><b className="num" suppressHydrationWarning>+{anos}</b>anos de mercado</dd></div>
            <div><dt className="sr-only">Canais</dt><dd><b className="num">5</b>canais numa tela</dd></div>
            <div><dt className="sr-only">Idiomas</dt><dd><b className="num">5</b>idiomas</dd></div>
          </dl>
        </div>
      </div>
    </section>
  );
}

function Cenario() {
  const canvas = useRef(null);
  const cena = useRef(null);

  useEffect(() => {
    const el = cena.current, cv = canvas.current;
    if (!el || !cv) return;
    const reduz = matchMedia('(prefers-reduced-motion: reduce)').matches;
    const mouse = matchMedia('(hover: hover) and (pointer: fine)').matches;
    const grande = matchMedia('(min-width: 1024px)').matches;
    if (reduz || !mouse || !grande) return;

    // --- inclinação e luz seguindo o mouse (variáveis CSS; o CSS faz o resto) ---
    let raf = 0;
    const mover = (e) => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const r = el.getBoundingClientRect();
        el.style.setProperty('--mx', ((e.clientX - r.left) / r.width - 0.5).toFixed(3));
        el.style.setProperty('--my', ((e.clientY - r.top) / r.height - 0.5).toFixed(3));
        el.style.setProperty('--lx', `${Math.round(e.clientX - r.left)}px`);
        el.style.setProperty('--ly', `${Math.round(e.clientY - r.top)}px`);
      });
    };
    el.parentElement.addEventListener('pointermove', mover, { passive: true });

    // --- partículas com profundidade (canvas 2D), iniciadas depois do carregamento ---
    const ctx = cv.getContext('2d');
    const dpr = 1; // partículas são pontos de 1–2 px: resolução 1× basta e alivia a placa de vídeo
    let W = 0, H = 0, pts = [], vivo = true, visivel = true, quadro = 0, t0 = 0;
    const medir = () => {
      W = cv.clientWidth; H = cv.clientHeight;
      cv.width = Math.round(W * dpr); cv.height = Math.round(H * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      const n = Math.round(Math.min(70, (W * H) / 9000));
      pts = Array.from({ length: n }, () => ({ x: Math.random() * W, y: Math.random() * H, z: 0.3 + Math.random() * 0.7, f: Math.random() * 6.28 }));
    };
    const desenhar = (t) => {
      if (!vivo) return;
      quadro = requestAnimationFrame(desenhar);
      if (!visivel || document.hidden) return;
      if (t - t0 < 32) return; // no máximo ~30 quadros por segundo
      const dt = Math.min(50, t - (t0 || t)); t0 = t;
      const mx = parseFloat(el.style.getPropertyValue('--mx')) || 0, my = parseFloat(el.style.getPropertyValue('--my')) || 0;
      ctx.clearRect(0, 0, W, H);
      for (const p of pts) {
        p.y -= dt * 0.012 * p.z; p.f += dt * 0.0015;
        if (p.y < -10) { p.y = H + 10; p.x = Math.random() * W; }
        const x = p.x + Math.sin(p.f) * 6 * p.z - mx * 28 * p.z, y = p.y - my * 18 * p.z;
        ctx.globalAlpha = 0.18 + p.z * 0.55;
        ctx.fillStyle = p.z > 0.8 ? '#bdf5e4' : '#4fc3a1';
        ctx.beginPath(); ctx.arc(x, y, 0.6 + p.z * 1.4, 0, 6.283); ctx.fill();
      }
    };
    const io = new IntersectionObserver(([e]) => { visivel = e.isIntersecting; }, { threshold: 0 });
    io.observe(el);
    const iniciar = () => { medir(); quadro = requestAnimationFrame(desenhar); el.classList.add('vivo'); };
    const ocioso = window.requestIdleCallback || ((f) => setTimeout(f, 300));
    const aoCarregar = () => ocioso(iniciar);
    if (document.readyState === 'complete') aoCarregar();
    else window.addEventListener('load', aoCarregar, { once: true });
    let rt = 0;
    const redimensionar = () => { clearTimeout(rt); rt = setTimeout(medir, 200); };
    window.addEventListener('resize', redimensionar);

    return () => {
      vivo = false; cancelAnimationFrame(quadro); cancelAnimationFrame(raf); io.disconnect(); clearTimeout(rt);
      el.parentElement?.removeEventListener('pointermove', mover);
      window.removeEventListener('resize', redimensionar); window.removeEventListener('load', aoCarregar);
    };
  }, []);

  return (
    <div className="cine-scene" ref={cena} aria-hidden="true">
      <div className="cine-light" />
      <div className="cine-stage">
        <div className="cine-room"><div className="cine-ceil" /><div className="cine-floor" /></div>
        <div className="cine-beam" style={{ left: 345 }} /><div className="cine-beam b2" style={{ left: 495 }} />
        <div className="cine-racks">
          {RACKS.map((r) => (
            <div key={r.key} className="cine-rack" style={{ left: r.x, top: r.y, width: r.w, height: r.h, opacity: r.o, filter: `brightness(${r.b})`, '--z': `${r.z}px` }} />
          ))}
        </div>
        <div className="cine-core-wrap">
          <div className="cine-halo" />
          <div className="orbit o2"><div className="ring"><i className="sat" /></div></div>
          <div className="orbit o1"><div className="ring"><i className="sat" /><i className="sat s2" /></div></div>
          <div className="cine-core"><img src="/brand/omninerd-symbol.webp" alt="" width="120" height="120" decoding="async" /></div>
          <div className="orbit o3"><div className="ring"><i className="sat" /></div></div>
        </div>
        <div className="holo h1 float"><span className="hc c1" /><span className="hc c2" />
          <span className="holo-k">Plataforma</span>
          <img src="/brand/omninerd-logo-dark.svg" alt="" width="96" height="24" className="h-[22px] w-auto mt-2.5" />
          <span className="holo-s">Inbox · Central telefônica · URA · CRM</span>
        </div>
        <div className="holo h2 float" style={{ animationDelay: '-2s' }}><span className="hc c1" /><span className="hc c2" />
          <span className="holo-k">Novo SAC · ao vivo</span>
          <b className="mono">Protocolo 2026000123</b>
          <span className="holo-s">Atendidas em até 20 s · <span className="text-brand-l">86%</span></span>
          <span className="holo-bar"><i style={{ width: '86%' }} /></span>
        </div>
        <div className="holo h3 float" style={{ animationDelay: '-4s' }}><span className="hc c1" /><span className="hc c2" />
          <span className="holo-k">Telefonia IP</span>
          <b>Ramal 2041 · em chamada</b>
          <span className="holo-s mono">02:14 · fila Financeiro</span>
        </div>
        <div className="holo h4 float" style={{ animationDelay: '-1s' }}><span className="hc c1" /><span className="hc c2" />
          <img src="/brand/omninerd-ai-logo-dark.svg" alt="" width="81" height="28" className="h-7 w-auto" />
          <span className="holo-s mt-2">IA Supervisor: 1ª resposta caiu 12 s na semana.</span>
        </div>
      </div>
      <canvas ref={canvas} className="cine-dust" />
      <div className="cine-fog" />
    </div>
  );
}

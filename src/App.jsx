/*
 * nerdservices.com.br — site institucional, identidade v3 “Camadas” (25/10/2026).
 * Base de marca: padrão Obsidiana do OmniNerd (grafite + verde mineral, laranja só destaque).
 * O HTML é pré-renderizado no build (scripts/prerender.mjs): o texto já vem no HTML e o React
 * só “acorda” os efeitos. Efeitos: revelar ao rolar, contadores, inclinação 3D e parallax —
 * todos desligados em prefers-reduced-motion e sem depender de hover no celular.
 */
import { useEffect } from 'react';
import Nav from './components/Nav.jsx';
import Hero from './components/Hero.jsx';
import Footer from './components/Footer.jsx';
import { Canais, Fluxo, Modulos, Telefonia, Novidades, Segmentos } from './sections/Recursos.jsx';
import { OmniAI, Integracoes } from './sections/OmniAI.jsx';
import { Plataforma, Planos, Prova, Faq, Cta } from './sections/Comercial.jsx';
import { AGENDA_ORIGEM, AGENDA_FORM } from './data/site.js';

export default function App() {
  useEfeitos();
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Canais />
        <Fluxo />
        <Modulos />
        <Telefonia />
        <Novidades />
        <OmniAI />
        <Integracoes />
        <Segmentos />
        <Plataforma />
        <Planos />
        <Prova />
        <Faq />
        <Cta />
      </main>
      <Footer />
    </>
  );
}

function useEfeitos() {
  useEffect(() => {
    const reduz = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const mouse = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
    const limpar = [];

    // Agendamento (Formulário do Site do OmniNerd): ajusta a altura do iframe ao conteúdo.
    // Mesma regra do embed.js oficial: só aceita mensagem da origem e do formulário certos.
    const ajustaForm = (ev) => {
      const d = ev.data;
      if (ev.origin !== AGENDA_ORIGEM || !d || d.type !== 'omninerd-form-height' || d.key !== AGENDA_FORM) return;
      const f = document.getElementById('form-agenda');
      if (f) f.style.height = `${Math.max(320, Math.min(4000, Number(d.h) || 0)) + 8}px`;
    };
    window.addEventListener('message', ajustaForm);
    limpar.push(() => window.removeEventListener('message', ajustaForm));

    // Revelar ao rolar. Os números (ex.: “+10 anos”) já vêm com o valor final no HTML — o efeito
    // é só visual (classe .in no CSS), nunca troca o texto (SEO, leitor de tela, quem rola rápido).
    const io = new IntersectionObserver((es) => es.forEach((e) => {
      if (!e.isIntersecting) return;
      e.target.classList.add('in');
      io.unobserve(e.target);
    }), { rootMargin: '0px 0px -10% 0px', threshold: 0.12 });
    document.querySelectorAll('.reveal').forEach((el) => io.observe(el));
    limpar.push(() => io.disconnect());

    if (!reduz && mouse) {
      // Palco do hero inclina com o mouse
      const rig = document.getElementById('rig');
      let raf = 0;
      const mover = (e) => {
        cancelAnimationFrame(raf);
        raf = requestAnimationFrame(() => {
          rig?.style.setProperty('--rx', (e.clientX / innerWidth - 0.5).toFixed(3));
          rig?.style.setProperty('--ry', (e.clientY / innerHeight - 0.5).toFixed(3));
        });
      };
      window.addEventListener('pointermove', mover, { passive: true });
      limpar.push(() => window.removeEventListener('pointermove', mover));

      // Cartões com inclinação 3D leve + brilho seguindo o cursor
      const tilt = (e) => {
        const t = e.target.closest?.('.tilt'); if (!t) return;
        const r = t.getBoundingClientRect(), x = (e.clientX - r.left) / r.width, y = (e.clientY - r.top) / r.height;
        t.style.setProperty('--mx', `${x * 100}%`); t.style.setProperty('--my', `${y * 100}%`);
        t.style.transform = `perspective(900px) rotateX(${(0.5 - y) * 4}deg) rotateY(${(x - 0.5) * 5}deg)`;
      };
      const solta = (e) => { const t = e.target.closest?.('.tilt'); if (t && !t.contains(e.relatedTarget)) t.style.transform = ''; };
      document.addEventListener('pointermove', tilt, { passive: true });
      document.addEventListener('pointerout', solta, { passive: true });
      limpar.push(() => { document.removeEventListener('pointermove', tilt); document.removeEventListener('pointerout', solta); });

      // Parallax leve do palco na rolagem
      const palco = document.getElementById('palco');
      const rolar = () => { if (scrollY < 900 && palco) palco.style.transform = `translateY(${scrollY * -0.08}px)`; };
      window.addEventListener('scroll', rolar, { passive: true });
      limpar.push(() => window.removeEventListener('scroll', rolar));
    }
    return () => limpar.forEach((f) => f());
  }, []);
}

import { useState } from 'react';
import Icon from './Icon.jsx';
import { NAV, SISTEMA_URL, AGENDAR, INSTAGRAM_URL, INSTAGRAM_USER } from '../data/site.js';

export default function Nav() {
  const [open, setOpen] = useState(false);
  return (
    <header className="topnav fixed inset-x-0 top-0 z-50">
      <a href="#conteudo" className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-3 btn btn-s btn-sm">Pular para o conteúdo</a>
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between" aria-label="Principal">
        {/* Logo mista registrada no INPI — mantida (marca registrada) */}
        <a href="/" className="flex items-center gap-1 shrink-0" aria-label="Nerd Services — início">
          <img src="/logo-nerd.png" alt="Nerd Services" width="120" height="36" className="h-9 w-auto object-contain brightness-0 invert" />
          <span className="text-[10px] text-tx3 font-bold self-start -ml-0.5">®</span>
        </a>
        <ul className="hidden lg:flex items-center gap-7 text-sm text-tx2">
          {NAV.map(([href, label]) => (
            <li key={href}><a href={href} className="hover:text-tx transition-colors">{label}</a></li>
          ))}
        </ul>
        <div className="hidden lg:flex items-center gap-3">
          <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="btn btn-s btn-sm px-3" aria-label={`Instagram da Nerd Services (${INSTAGRAM_USER})`} title={INSTAGRAM_USER}>
            <Icon name="instagram" className="w-5 h-5" />
          </a>
          <a href={SISTEMA_URL} target="_blank" rel="noopener noreferrer" className="btn btn-s btn-sm">Área do cliente</a>
          <a href={AGENDAR} className="btn btn-p btn-sm">Agendar demo</a>
        </div>
        <button type="button" className="lg:hidden p-2 -mr-2 text-tx" onClick={() => setOpen(!open)}
          aria-label={open ? 'Fechar menu' : 'Abrir menu'} aria-expanded={open} aria-controls="menu-celular">
          <Icon name={open ? 'x' : 'menu'} className="w-7 h-7" />
        </button>
      </nav>
      {open && (
        <div id="menu-celular" className="lg:hidden border-t border-white/5 bg-g-950/95">
          <ul className="px-4 py-3 flex flex-col">
            {NAV.map(([href, label]) => (
              <li key={href}><a href={href} onClick={() => setOpen(false)} className="block py-3 px-2 text-base text-tx rounded-lg hover:bg-white/5">{label}</a></li>
            ))}
          </ul>
          <div className="grid grid-cols-2 gap-3 px-4 pb-4">
            <a href={SISTEMA_URL} target="_blank" rel="noopener noreferrer" className="btn btn-s btn-sm">Área do cliente</a>
            <a href={AGENDAR} onClick={() => setOpen(false)} className="btn btn-p btn-sm">Agendar demo</a>
            <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="btn btn-s btn-sm col-span-2"><Icon name="instagram" className="w-5 h-5 text-brand-l" /> Siga {INSTAGRAM_USER}</a>
          </div>
        </div>
      )}
    </header>
  );
}

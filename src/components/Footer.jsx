import Icon from './Icon.jsx';
import { NAV, WHATS_NUM, WHATS_CEL, AGENDAR, PHONE_FIXO, PHONE_CEL, EMAIL, INSTAGRAM_URL, SISTEMA_URL } from '../data/site.js';

export default function Footer() {
  return (
    <footer className="border-t border-white/5 pt-16 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-4 mb-12">
          <div className="md:col-span-1">
            <div className="flex items-center gap-1 mb-5">
              <img src="/logo-nerd.png" alt="Nerd Services" width="130" height="40" className="h-10 w-auto object-contain brightness-0 invert opacity-90" loading="lazy" />
              <span className="text-[10px] text-tx3 font-bold self-start -ml-0.5">®</span>
            </div>
            <p className="text-tx2 leading-relaxed max-w-xs">Software house de Maceió/AL, criadora do OmniNerd®.</p>
            <img src="/brand/omninerd-logo-dark.svg" alt="OmniNerd" width="120" height="30" className="h-7 w-auto mt-5" loading="lazy" />
          </div>
          <nav aria-label="Seções" className="space-y-3 text-tx2">
            <h2 className="text-sm font-semibold uppercase tracking-widest text-tx3 mb-4">Site</h2>
            {NAV.map(([href, label]) => <a key={href} href={href} className="block hover:text-brand-l transition-colors">{label}</a>)}
          </nav>
          <div className="space-y-3 text-tx2">
            <h2 className="text-sm font-semibold uppercase tracking-widest text-tx3 mb-4">Contato</h2>
            <a href={`tel:+${WHATS_NUM}`} className="flex items-center gap-3 hover:text-brand-l transition-colors"><Icon name="phone" className="w-5 h-5 text-brand-l" /> {PHONE_FIXO}</a>
            <a href={`https://wa.me/${WHATS_CEL}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 hover:text-brand-l transition-colors"><Icon name="message-circle" className="w-5 h-5 text-brand-l" /> {PHONE_CEL}</a>
            <a href={`mailto:${EMAIL}`} className="flex items-center gap-3 hover:text-brand-l transition-colors break-all"><Icon name="mail" className="w-5 h-5 text-brand-l shrink-0" /> {EMAIL}</a>
            <p className="flex items-center gap-3"><Icon name="map-pin" className="w-5 h-5 text-brand-l" /> Maceió, AL — Brasil</p>
          </div>
          <div className="space-y-3 text-tx2">
            <h2 className="text-sm font-semibold uppercase tracking-widest text-tx3 mb-4">Links</h2>
            <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 hover:text-brand-l transition-colors"><Icon name="instagram" className="w-5 h-5 text-brand-l" /> @nerdservicesbr</a>
            <a href={SISTEMA_URL} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 hover:text-brand-l transition-colors"><Icon name="headphones" className="w-5 h-5 text-brand-l" /> Área do cliente</a>
            <a href={AGENDAR} className="flex items-center gap-3 hover:text-brand-l transition-colors"><Icon name="calendar-clock" className="w-5 h-5 text-brand-l" /> Agendar demonstração</a>
          </div>
        </div>
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row gap-4 items-center justify-between">
          <div className="flex flex-wrap justify-center gap-x-5 gap-y-2 text-sm">
            <a href="/privacidade" className="text-tx3 hover:text-brand-l transition-colors">Política de Privacidade</a>
            <a href="/termos" className="text-tx3 hover:text-brand-l transition-colors">Termos de Serviço</a>
            <a href="/exclusao" className="text-tx3 hover:text-brand-l transition-colors">Exclusão de Dados</a>
          </div>
          <p className="text-tx3 text-sm text-center" suppressHydrationWarning>
            © {new Date().getFullYear()} Nerd Services® · L. Gustavo Gomes Galvão Tecnologia · CNPJ 26.356.334/0001-96
          </p>
        </div>
      </div>
    </footer>
  );
}

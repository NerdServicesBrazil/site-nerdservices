import Icon from '../components/Icon.jsx';
import { SectionHead, Check } from '../components/ui.jsx';
import { AI_ITENS, MIGRACAO } from '../data/site.js';

/* OmniNerd AI — identidade própria (logo oficial) + IA Supervisor gerando o relatório */
export function OmniAI() {
  return (
    <section id="omninerd-ai" className="py-24 band scroll-mt-16 relative overflow-hidden" aria-labelledby="titulo-ai">
      <div className="absolute -top-40 right-0 w-[640px] h-[640px] max-w-full rounded-full bg-brand/10 blur-[120px] pointer-events-none" aria-hidden="true" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-[1fr_1.05fr] gap-12 items-center">
        <div>
          <img src="/brand/omninerd-ai-logo-dark.svg" alt="OmniNerd AI" width="222" height="77" className="reveal h-14 md:h-16 w-auto mb-6" />
          <SectionHead id="titulo-ai" title="A IA que atende, ajuda a equipe" accent="e supervisiona a operação."
            text="Tudo no mesmo módulo, com controle de custo, mascaramento de dados e provedor de IA trocável — inclusive servidor próprio." />
          <ul className="grid sm:grid-cols-2 gap-4 -mt-4">
            {AI_ITENS.map(([ic, t, d], i) => (
              <li key={t} className="reveal flex gap-3" style={{ '--d': `${i * 70}ms` }}>
                <div className="icon-box w-10 h-10"><Icon name={ic} className="w-5 h-5" strokeWidth={1.8} /></div>
                <div><b className="block font-semibold">{t}</b><span className="text-tx2 text-[15px] leading-snug">{d}</span></div>
              </li>
            ))}
          </ul>
        </div>
        <Relatorio />
      </div>
    </section>
  );
}

function Relatorio() {
  const barras = [55, 72, 64, 88, 79, 34, 22];
  const dias = ['seg', 'ter', 'qua', 'qui', 'sex', 'sáb', 'dom'];
  return (
    <figure className="reveal glass glow p-5 sm:p-6" aria-label="Exemplo de relatório da IA Supervisor">
      <div className="flex items-center justify-between gap-3">
        <span className="flex items-center gap-2 font-semibold"><img src="/brand/omninerd-ai-mini-dark.svg" alt="" width="24" height="24" className="w-6 h-6" />IA Supervisor</span>
        <span className="badge-new">NOVO</span>
      </div>
      <p className="text-tx3 text-sm mt-1">Relatório da semana 43 · telefonia + atendimento</p>
      <div className="grid grid-cols-3 gap-2 mt-4 num">
        {[['1.284', 'conversas', '▲ 9%', true], ['38 s', '1ª resposta', '▼ 12 s', true], ['4,7★', 'satisfação', '▼ 0,1', false]].map(([v, l, d, bom]) => (
          <div key={l} className="rounded-lg border border-g-line bg-g-850 p-3">
            <b className="block text-xl">{v}</b>
            <span className="text-[11px] text-tx3">{l} <span className={bom ? 'text-brand-l' : 'text-red-400'}>{d}</span></span>
          </div>
        ))}
      </div>
      <div className="mt-5 rounded-lg border border-g-line bg-g-950 p-4">
        <div className="flex justify-between text-[12px] text-tx3"><span>Conversas por dia</span><span className="text-brand-l">vs. semana anterior ▲ 9%</span></div>
        <div className="bars mt-3" aria-hidden="true">
          {barras.map((h, i) => <i key={i} style={{ height: `${h}%`, '--i': i }} />)}
        </div>
        <div className="flex gap-1.5 mt-1.5 text-[10px] text-tx3 mono" aria-hidden="true">{dias.map((d) => <span key={d} className="flex-1 text-center">{d}</span>)}</div>
      </div>
      <figcaption className="mt-5">
        <b className="text-sm">Ações sugeridas</b>
        <ul className="mt-2 space-y-1.5 text-[14px] text-tx2">
          <li className="flex gap-2"><Check />A fila Financeiro estourou o SLA na segunda, das 9h às 11h — reforçar 1 atendente nesse horário.</li>
          <li className="flex gap-2"><Check /><span className="typing">68% das dúvidas de boleto foram resolvidas pela URA; vale ampliar a base de conhecimento</span></li>
        </ul>
        <p className="text-[11px] text-tx3 mt-4">Exemplo ilustrativo. A IA Supervisor usa os mesmos números dos relatórios do sistema e compara com a semana anterior.</p>
      </figcaption>
    </figure>
  );
}

/* Integrações: Consulta externa + migração de outros sistemas */
export function Integracoes() {
  return (
    <section id="integracoes" className="py-24 scroll-mt-16" aria-labelledby="titulo-integracoes">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHead id="titulo-integracoes" eyebrow="Integrações" title="Conversa com o seu sistema" accent="— e traz o seu histórico."
          text="A URA consulta os dados da sua empresa em tempo real, e a nossa equipe traz o que você já tem em outra plataforma." />
        <div className="grid gap-5 lg:grid-cols-2">
          <article className="card tilt reveal p-7">
            <div className="flex items-center gap-3"><div className="icon-box"><Icon name="database" className="w-6 h-6" strokeWidth={1.8} /></div><span className="badge-new">NOVO</span></div>
            <h3 className="text-2xl font-semibold mt-5 mb-2">Consulta externa</h3>
            <p className="text-tx2 leading-relaxed">A URA busca boletos, títulos e cadastros no banco de dados do seu sistema e responde no WhatsApp — com linha digitável, PIX copia-e-cola e vencimento.</p>
            <ol className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-2 text-center text-[12px]" aria-label="Como funciona a consulta">
              {[['message-circle', 'Cliente pede'], ['workflow', 'URA consulta'], ['lock', 'Conector seguro'], ['database', 'Seu banco']].map(([ic, t], i) => (
                <li key={t} className="rounded-lg border border-g-line bg-g-950 p-3 relative">
                  <Icon name={ic} className="w-5 h-5 mx-auto text-brand-l" strokeWidth={1.8} />
                  <span className="block mt-1.5 text-tx2">{t}</span>
                  {i < 3 && <span className="hidden sm:block absolute -right-2 top-1/2 -translate-y-1/2 text-brand-l text-xs" aria-hidden="true">→</span>}
                </li>
              ))}
            </ol>
            <ul className="mt-6 space-y-2 text-[15px] text-tx2">
              <li className="flex gap-2"><Check />Conector instalado pela nossa equipe em um comando, com túnel seguro — sem abrir porta no seu servidor.</li>
              <li className="flex gap-2"><Check />Login só de leitura, segredo cifrado e aviso à equipe se o conector cair.</li>
              <li className="flex gap-2"><Check />Mais de um resultado? O cliente escolhe o item — ou “Todos”.</li>
            </ul>
          </article>
          <article className="card tilt reveal p-7" style={{ '--d': '120ms' }}>
            <div className="flex items-center gap-3"><div className="icon-box"><Icon name="download" className="w-6 h-6" strokeWidth={1.8} /></div><span className="badge-new">NOVO</span></div>
            <h3 className="text-2xl font-semibold mt-5 mb-2">Vindo de outro sistema?</h3>
            <p className="text-tx2 leading-relaxed">Trazemos contatos, atendimentos e conversas com mídias, sem perder o histórico e sem disparar robô ou aviso para os seus clientes.</p>
            <ul className="mt-6 flex flex-wrap gap-2" aria-label="Sistemas de onde migramos">
              {MIGRACAO.map((m) => (
                <li key={m} className="px-3.5 py-2 rounded-lg border border-g-line2 bg-g-950 text-[15px] font-medium">{m}</li>
              ))}
              <li className="px-3.5 py-2 rounded-lg border border-dashed border-g-line2 text-[15px] text-tx3">e outros</li>
            </ul>
            <ul className="mt-6 space-y-2 text-[15px] text-tx2">
              <li className="flex gap-2"><Check />Análise antes de importar: contatos novos e existentes, atendimentos, mensagens e mídias.</li>
              <li className="flex gap-2"><Check />Mapeamento de canais, filas, atendentes e campos personalizados.</li>
              <li className="flex gap-2"><Check />Progresso em tempo real, retomar sem duplicar e desfazer a importação.</li>
            </ul>
          </article>
        </div>
      </div>
    </section>
  );
}

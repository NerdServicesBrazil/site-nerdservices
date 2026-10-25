/*
 * Conteúdo do site — fonte: claude/recursos-omninerd.md (catálogo de 24/10/2026).
 * Regras: nada da seção "Planejado" como pronto; WhatsApp por QR Code NÃO aparece no site;
 * preço só com os números do catálogo.
 */

export const WHATS_NUM = '558231423700';
export const WHATS_CEL = '5582998284515';
export const WHATS_URL = `https://wa.me/${WHATS_NUM}?text=${encodeURIComponent('Olá! Quero agendar uma demonstração do OmniNerd.')}`;
export const PHONE_FIXO = '(82) 3142-3700';
export const PHONE_CEL = '(82) 99828-4515';
export const EMAIL = 'gustavo@nerdservices.com.br';
export const INSTAGRAM_URL = 'https://instagram.com/nerdservicesbr';
export const INSTAGRAM_USER = '@nerdservicesbr';
export const SISTEMA_URL = 'https://omninerd.com.br';

/*
 * Agendamento de demonstração = Formulário do Site do próprio OmniNerd (tenant nerdservices).
 * Cai direto no CRM com protocolo. O OmniNerd só deixa embutir em https://nerdservices.com.br
 * (frame-ancestors) — se o site passar a responder em outro endereço (ex.: www), liberar lá também.
 */
export const AGENDA_ORIGEM = 'https://nerdservices.omninerd.io';
export const AGENDA_FORM = 'cf_ZNK1lFGMG21S3784aQa5';
export const AGENDA_IFRAME = `${AGENDA_ORIGEM}/api/crmform/public/f/${AGENDA_FORM}`;
export const AGENDA_URL = `${AGENDA_ORIGEM}/f/agenda`;
export const AGENDAR = '#agendar';

/* Abertura da empresa (CNPJ): 14/10/2016. "Anos de mercado" = anos completos. */
export const FUNDACAO = { ano: 2016, mes: 10, dia: 14 };
export function anosDeMercado(hoje = new Date()) {
  const fezAniversario =
    hoje.getMonth() + 1 > FUNDACAO.mes ||
    (hoje.getMonth() + 1 === FUNDACAO.mes && hoje.getDate() >= FUNDACAO.dia);
  return hoje.getFullYear() - FUNDACAO.ano - (fezAniversario ? 0 : 1);
}

export const NAV = [
  ['#recursos', 'Recursos'],
  ['#omninerd-ai', 'OmniNerd AI'],
  ['#integracoes', 'Integrações'],
  ['#planos', 'Planos'],
  ['#faq', 'Dúvidas'],
];

export const CANAIS = [
  ['message-circle', 'WhatsApp oficial'],
  ['phone', 'Telefonia / PABX'],
  ['instagram', 'Instagram'],
  ['globe', 'Chat do site'],
  ['send', 'Telegram'],
  ['mic', 'Voz pelo WhatsApp'],
];

export const FLUXO = [
  { n: '01', tag: 'Canal', titulo: 'A mensagem chega', texto: 'WhatsApp, telefone, Instagram, chat do site ou Telegram caem na mesma caixa de entrada, com o canal em destaque.' },
  { n: '02', tag: 'URA', titulo: 'A URA entende e resolve', texto: 'Texto livre ou áudio. Consulta o sistema da sua empresa e já responde — boleto, cadastro, situação do pedido.' },
  { n: '03', tag: 'Equipe', titulo: 'O atendente assume', texto: 'Com protocolo, prazo e o que o cliente já respondeu. O copiloto da OmniNerd AI sugere a resposta.' },
  { n: '04', tag: 'OmniNerd AI', titulo: 'A IA Supervisor relata', texto: 'Toda semana, um relatório da operação inteira: o que melhorou, o que piorou e o que fazer.' },
];

export const MODULOS = [
  { icon: 'layout-dashboard', titulo: 'Inbox omnichannel', texto: 'Todos os canais numa caixa de entrada compartilhada, em tempo real.',
    itens: ['Meus, Fila e Todos com contadores', 'Transferência para atendente ou fila', 'Notas privadas, respostas rápidas e mídia completa'] },
  { icon: 'message-circle', titulo: 'WhatsApp oficial', texto: 'API oficial da Meta, com a conta e o número da sua empresa.',
    itens: ['Nerd Services é Tech Provider verificado', 'Campanhas com template aprovado e teto de gasto', 'Ligações de voz pelo WhatsApp no PABX'] },
  { icon: 'phone', titulo: 'Telefonia em nuvem', texto: 'PABX IP completo, com ramal no navegador ou no aparelho de mesa.',
    itens: ['Filas com posição e tempo estimado', 'URA de voz, gravação e relatórios', 'Painel ao vivo: escutar, sussurrar, desligar'] },
  { icon: 'workflow', titulo: 'URA visual', texto: 'Monte o atendimento automático arrastando blocos — sem programar.',
    itens: ['Simulador antes de publicar', 'Subfluxos reaproveitáveis', 'QR Code de entrada para cada passo'] },
  { icon: 'kanban', titulo: 'CRM Builder', texto: 'Solicitações com protocolo, setores, prazos em dias úteis e Kanban.',
    itens: ['Abertura pela URA, pela Inbox ou pelo site', 'PDF anexado e aviso automático ao cliente', 'Alertas de prazo e resumo diário'] },
  { icon: 'bar-chart', titulo: 'Gestão e relatórios', texto: 'Central por papel, supervisão por equipe e relatórios por área.',
    itens: ['Telefonia, atendimento e CRM', 'Exportação em Excel e PDF', 'Satisfação (CSAT) e autoatendimento'] },
];

export const NOVIDADES = [
  { id: 'tv', icon: 'monitor', tag: 'Operação', titulo: 'Painel de TV', texto: 'Os números da operação em tempo real na TV da sala: fila de espera, atendentes e telefonia, por link seguro e sem login.' },
  { id: 'inter', icon: 'network', tag: 'Telefonia', titulo: 'Interconexão', texto: 'Duas empresas do mesmo grupo ligando entre si como uma central só: ramal, fila, URA e transferência.' },
  { id: 'form', icon: 'file-text', tag: 'CRM', titulo: 'Formulário do Site', texto: 'Formulário público ou embutido no seu site que abre a solicitação no CRM com protocolo, prazo e anexos.' },
  { id: 'idiomas', icon: 'languages', tag: 'Equipe', titulo: '5 idiomas', texto: 'Português, inglês, espanhol, italiano e francês — cada usuário troca na hora.' },
  { id: 'pausa', icon: 'coffee', tag: 'Equipe', titulo: 'Pausas do atendente', texto: 'Pausa com motivo e limite: em pausa, nem a fila de voz nem a Inbox entregam nada novo. Passou do limite, o supervisor é avisado.' },
  { id: 'voz', icon: 'mic', tag: 'WhatsApp', titulo: 'Chamada de voz pelo WhatsApp', texto: 'O cliente liga pelo WhatsApp e cai na fila, na URA ou no ramal — com gravação e relatório.' },
];

export const AI_ITENS = [
  ['bot', 'URA que entende', 'Texto livre e áudio, com até 30 intenções e confirmação quando há dúvida.'],
  ['file-text', 'Base de conhecimento', 'Responde só com o conteúdo da sua empresa (PDF, DOCX, TXT), citando a fonte.'],
  ['sparkles', 'Copiloto do atendente', 'Sugerir, melhorar e resumir — nada é enviado sem o clique do atendente.'],
  ['heart', 'Humor do cliente', 'Identifica reclamação, elogio ou dúvida e muda a resposta.'],
  ['shield-check', 'LGPD na IA', 'CPF, CNPJ, cartão, e-mail e telefone são mascarados antes de ir para a IA.'],
  ['bar-chart', 'IA Supervisor', 'Relatório semanal da operação com os seus números reais e ações sugeridas.'],
];

export const MIGRACAO = ['Digisac', 'MandeUmZap', 'Opa Suite', 'SGA', 'Poli'];

export const SEGMENTOS = [
  ['graduation-cap', 'Escolas e faculdades'], ['stethoscope', 'Clínicas e hospitais'], ['scale', 'Escritórios de advocacia'],
  ['car', 'Proteção veicular e seguros'], ['wifi', 'Provedores de internet'], ['factory', 'Indústria e comércio'],
];

/*
 * Pacotes (catálogo de out/2026). DECISÃO DO GUSTAVO (25/10/2026): o site mostra os planos, mas
 * NUNCA os preços — nem aqui no código (o repositório é público). Valores só na proposta comercial.
 */
export const PLANOS = [
  { nome: 'Essencial', inclui: '5 usuários', desc: 'A base para atender em todos os canais digitais.',
    itens: ['Inbox omnichannel', 'URA e fluxos', 'Chat do site e Telegram', 'Relatórios'] },
  { nome: 'Telefonia', inclui: '3 usuários · 20 ramais', desc: 'Essencial + PABX em nuvem.',
    itens: ['Tudo do Essencial', 'PABX em nuvem', 'Filas, URA de voz e gravação'] },
  { nome: 'Atendimento', inclui: '5 usuários', desc: 'Essencial + WhatsApp oficial + CRM.',
    itens: ['Tudo do Essencial', 'WhatsApp oficial', 'CRM Builder e Formulário do Site'] },
  { nome: 'Completo', inclui: '5 usuários', desc: 'Atendimento + OmniNerd AI.', destaque: true,
    itens: ['Tudo do Atendimento', 'OmniNerd AI', 'IA Supervisor'] },
  { nome: 'Completo + Telefonia', inclui: '5 usuários · 20 ramais', desc: 'Completo + PABX em nuvem.',
    itens: ['Tudo do Completo', 'PABX em nuvem', 'Painel ao vivo da telefonia'] },
];

export const FAQ = [
  ['O número do WhatsApp continua sendo da minha empresa?', 'Sim. Você conecta a sua própria conta oficial do WhatsApp Business (API da Meta). A titularidade, o número e a reputação continuam com a sua empresa — inclusive se um dia sair do OmniNerd.'],
  ['Quanto custam as mensagens do WhatsApp?', 'As conversas são cobradas pela Meta diretamente no cartão da sua empresa, no preço oficial. A Nerd Services cobra apenas a plataforma e o suporte, sem margem sobre o consumo.'],
  ['Preciso trocar meus telefones ou a operadora?', 'Não. O módulo de telefonia integra com a sua operadora (tronco SIP) e com os aparelhos SIP que você já usa. O atendente também pode falar direto pelo navegador, só com um headset.'],
  ['Como é a contratação?', 'Por pacote — Essencial, Telefonia, Atendimento, Completo ou Completo + Telefonia — com usuários inclusos. Usuários e ramais adicionais seguem uma faixa progressiva (quanto mais, menor o valor), e cada usuário de atendimento já inclui o ramal dele. A implantação inclui URA, configuração dos canais e treinamento da equipe.'],
  ['Já uso outro sistema. Consigo trazer o histórico?', 'Sim. Trazemos contatos, atendimentos e conversas com mídias de plataformas como Digisac, MandeUmZap, Opa Suite, SGA e Poli, com análise antes de importar e sem duplicar. A migração é feita pela nossa equipe na implantação.'],
  ['O OmniNerd consulta o sistema da minha empresa?', 'Sim, com a Consulta externa: a URA busca boletos, títulos e cadastros no banco do seu sistema e responde no WhatsApp. O conector é instalado pela nossa equipe em um comando, com túnel seguro e sem abrir porta no seu servidor.'],
  ['E a LGPD?', 'Sua empresa é a controladora dos dados e a Nerd Services atua como operadora: dados isolados por empresa, login individual, registro de ações, backups cifrados, mascaramento antes da IA e um papel de TI que configura o sistema sem ver conversas.'],
  ['A IA responde qualquer coisa sozinha?', 'A IA responde com base no conteúdo que a sua empresa cadastra e encaminha para um atendente humano quando não tem certeza ou quando o cliente pede. Você decide onde ela atua.'],
];

/*
 * Carrossel de clientes — lista enviada pelo Gustavo em 25/10/2026 (pasta `logos`).
 * Logo de cliente só com autorização; ao tirar um cliente, apagar também o arquivo em public/clients/.
 * Imagens em WebP (máx. 360×120). `escuro: true` = logo branco, vai em cartão escuro.
 */
export const CLIENTES = [
  { name: 'Acolha-me', logo: '/clients/acolha-me.webp', w: 147, h: 120 },
  { name: 'Alive Net', logo: '/clients/alive-net.webp', w: 229, h: 120 },
  { name: 'Âncora Telecom', logo: '/clients/ancora-telecom.webp', w: 360, h: 53 },
  { name: 'ATM Telecom', logo: '/clients/atm-telecom.webp', w: 346, h: 120 },
  { name: 'Audo Proteção Veicular', logo: '/clients/audo-protecao-veicular.webp', w: 250, h: 120, escuro: true },
  { name: 'BH Med', logo: '/clients/bh-med.webp', w: 120, h: 120 },
  { name: 'Century Net', logo: '/clients/century-net.webp', w: 208, h: 47 },
  { name: 'Colégio Santa Úrsula', logo: '/clients/colegio-santa-ursula.webp', w: 304, h: 120 },
  { name: 'Comafer', logo: '/clients/comafer.webp', w: 212, h: 120 },
  { name: 'COPRA', logo: '/clients/copra.webp', w: 131, h: 120 },
  { name: 'Delgado & Sampaio Advogados', logo: '/clients/delgado-sampaio-advogados.webp', w: 360, h: 108 },
  { name: 'Eco Memorial', logo: '/clients/eco-memorial.webp', w: 159, h: 95 },
  { name: 'Engenho Caraçuípe', logo: '/clients/engenho-caracuipe.webp', w: 229, h: 100 },
  { name: 'Fácil Gestão Condominial', logo: '/clients/facil-gestao-condominial.webp', w: 172, h: 120 },
  { name: 'GAGC', logo: '/clients/gagc.webp', w: 152, h: 120 },
  { name: 'HemoPac', logo: '/clients/hemopac.webp', w: 360, h: 76 },
  { name: 'Litoral Telecom', logo: '/clients/litoral-telecom.webp', w: 160, h: 120, escuro: true },
  { name: 'Newplast Embalagens', logo: '/clients/newplast-embalagens.webp', w: 135, h: 120, escuro: true },
  { name: 'NK Telecom', logo: '/clients/nk-telecom.webp', w: 224, h: 120 },
  { name: 'Plastmar', logo: '/clients/plastmar.webp', w: 120, h: 120 },
  { name: 'Quality Tecnologia', logo: '/clients/quality-tecnologia.webp', w: 330, h: 120 },
  { name: 'Rosalvo', logo: '/clients/rosalvo.webp', w: 196, h: 40 },
  { name: 'Stella Marina', logo: '/clients/stella-marina.webp', w: 270, h: 89, escuro: true },
  { name: 'T2Web', logo: '/clients/t2web.webp', w: 168, h: 88 },
  { name: 'Total Saúde', logo: '/clients/total-saude.webp', w: 182, h: 60 },
  { name: 'Veloo', logo: '/clients/veloo.webp', w: 224, h: 120 },
];

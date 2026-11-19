/*
 * Conteúdo do site — fonte: recursos-omninerd.md (catálogo de 19/11/2026; FATIA 20261119_RECURSOS).
 * Regras: nada da seção "Planejado" como pronto; a conexão do WhatsApp por QR Code NÃO aparece no site;
 * preço: SÓ o "a partir de R$ 790/mês" do Essencial — todo o resto é "sob consulta" (Gustavo, 19/11/2026).
 * Explorador de recursos, Novo SAC e Saúde: src/data/recursos.js.
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
// FATIA 20261110_ANDROID: aplicativo de celular OmniNerd (Android publicado; iPhone em breve)
export const APP_ANDROID_URL = 'https://play.google.com/store/apps/details?id=io.omninerd.app';
export const APP_ITENS = [
  ['message-circle', 'Conversas do WhatsApp, Instagram, Telegram e chat do site num só lugar'],
  ['phone', 'Faça e receba ligações do ramal da empresa pelo celular'],
  ['bell', 'Aviso na hora de mensagem nova e de ligação recebida'],
  ['mic', 'Fotos, vídeos, documentos e notas de voz'],
];

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
  ['#novo-sac', 'Novo SAC'],
  ['#saude', 'Saúde'],
  ['#telefonia', 'Telefonia'],
  ['#omninerd-ai', 'OmniNerd AI'],
  ['#planos', 'Planos'],
  ['#sobre', 'Sobre'],
];

/* Acesso rápido (logo abaixo da abertura): atalhos para as áreas mais procuradas. */
export const ACESSO = [
  { href: '#recursos', icon: 'layout-dashboard', titulo: 'OmniNerd', texto: 'Telefone, WhatsApp e chat numa operação só' },
  { href: '#novo-sac', icon: 'shield-check', titulo: 'Novo SAC', texto: 'Protocolo, metas de tempo e relatório', novo: true },
  { href: '#saude', icon: 'stethoscope', titulo: 'Saúde', texto: 'Guias, parceiros e médicos para clínicas', novo: true },
  { href: '#telefonia', icon: 'phone', titulo: 'Telefonia IP', texto: 'Central em nuvem, números e 0800' },
  { href: '#omninerd-ai', icon: 'sparkles', titulo: 'OmniNerd AI', texto: 'URA que entende, copiloto e IA Supervisor' },
  { href: '#planos', icon: 'layers', titulo: 'Planos', texto: 'Pacotes e proposta para a sua operação' },
  { href: '#suporte', icon: 'life-buoy', titulo: 'Suporte', texto: 'Equipe Nerd Services, incluso no serviço' },
  { href: AGENDAR, icon: 'calendar-clock', titulo: 'Demonstração', texto: 'Agende pelo formulário, sem compromisso' },
];

export const AI_ITENS = [
  ['bot', 'URA que entende', 'Texto livre e áudio, com até 30 intenções e confirmação quando há dúvida.'],
  ['file-check', 'Lê documentos', 'Comprovante, boleto e pedido médico viram campos prontos para usar.'],
  ['file-text', 'Base de conhecimento', 'Responde só com o conteúdo da sua empresa, citando a fonte, e sabe quando passar para a equipe.'],
  ['sparkles', 'Copiloto do atendente', 'Sugerir, melhorar, resumir e perguntar à base — nada é enviado sem o clique do atendente.'],
  ['languages', 'Tradução automática', 'Atenda em qualquer idioma, com prévia antes de enviar e glossário da empresa.'],
  ['workflow', 'Cria a URA', 'Descreva a empresa por texto ou voz e a IA monta o rascunho do fluxo.'],
  ['shield-check', 'LGPD na IA', 'CPF, CNPJ, cartão, e-mail e telefone são mascarados antes de ir para a IA.'],
  ['bar-chart', 'IA Supervisor', 'Relatório semanal da operação com os seus números reais e ações sugeridas.'],
];

/*
 * Telefonia Nerd Services (conectividade). Regras de comunicação (precos.md):
 * não usar “operadora” nem “STFC”; não citar a tecnologia de base — falar em “central telefônica”.
 * Preço: SOB CONSULTA (Gustavo, 19/11/2026 — o site só exibe o “a partir de R$ 790/mês” do Essencial).
 */
export const TELEFONIA = [
  { icon: 'phone', titulo: 'Números fixos (DID)', texto: 'Número fixo com chamadas simultâneas de entrada e canais de saída ilimitados nacionais.' },
  { icon: 'headphones', titulo: '0800', texto: 'Atendimento gratuito para quem liga, com bilhetagem detalhada e roteamento direto para a sua fila ou URA.' },
  { icon: 'shield-check', titulo: 'Rota certificada (STIR/SHAKEN)', texto: 'Chamada assinada na origem, no padrão internacional contra números falsificados.' },
  { icon: 'contact', titulo: 'CLI Premium', texto: 'O seu número fixo aparece no visor de quem recebe a ligação.' },
  { icon: 'map-pin', titulo: 'Local Inteligente', texto: 'A ligação sai com o DDD da região do número discado.' },
  { icon: 'network', titulo: 'Sob medida', texto: 'Operações maiores: canais de entrada e saída dimensionados para o seu volume.' },
];

export const MIGRACAO = ['Digisac', 'MandeUmZap', 'Opa Suite', 'SGA', 'Poli'];

export const SEGMENTOS = [
  ['graduation-cap', 'Escolas e faculdades'], ['stethoscope', 'Clínicas e hospitais'], ['scale', 'Escritórios de advocacia'],
  ['car', 'Proteção veicular e seguros'], ['wifi', 'Provedores de internet'], ['factory', 'Indústria e comércio'],
];

/*
 * Pacotes (catálogo de out/2026). DECISÃO DO GUSTAVO (25/10/2026): o site mostra os planos SEM preço,
 * exceto o “a partir de” do plano mais barato (Essencial). Demais valores só na proposta comercial.
 */
/*
 * Depoimentos — só textos REAIS, com autorização. A seção some sozinha se nenhum estiver
 * publicado (decisão do Gustavo em 25/10/2026: ocultar até juntar 2–3 de segmentos diferentes).
 */
export const DEPOIMENTOS = [
  { publicado: false, nome: 'Carlos Coutinho', empresa: 'Engenho Caraçuípe', segmento: 'Indústria',
    texto: 'Contratei a Nerd Services para reestruturar todo o atendimento e intercomunicação da empresa. O processo foi concluído em poucos dias, com rapidez extrema e qualidade técnica indiscutível.' },
  // { publicado: true, nome: '…', empresa: '…', segmento: 'Escola', texto: '…' },
  // { publicado: true, nome: '…', empresa: '…', segmento: 'Provedor de internet', texto: '…' },
];

export const PLANOS = [
  { nome: 'Essencial', aPartirDe: 790, // ÚNICO valor publicado no site inclui: '5 usuários', desc: 'A base para atender em todos os canais digitais.',
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
  ['Preciso trocar meus telefones ou o meu número?', 'Não. A central telefônica do OmniNerd funciona com os aparelhos SIP que você já usa e com o seu número atual (tronco SIP). Se preferir, a própria Nerd Services fornece os números, o 0800 e as rotas de saída. O atendente também pode falar direto pelo navegador, só com um headset.'],
  ['Como é a contratação?', 'Por pacote — Essencial, Telefonia, Atendimento, Completo ou Completo + Telefonia — com usuários inclusos. O Essencial começa em R$ 790/mês; os demais pacotes, os módulos, os usuários e ramais adicionais e a implantação são sob consulta, numa proposta montada para a sua operação. Cada usuário de atendimento já inclui o ramal dele, e a implantação inclui URA, configuração dos canais e treinamento da equipe.'],
  ['Já uso outro sistema. Consigo trazer o histórico?', 'Sim. Trazemos contatos, atendimentos e conversas com mídias de plataformas como Digisac, MandeUmZap, Opa Suite, SGA e Poli, com análise antes de importar e sem duplicar. A migração é feita pela nossa equipe na implantação.'],
  ['O OmniNerd consulta o sistema da minha empresa?', 'Sim, com a Consulta externa: a URA busca boletos, títulos e cadastros no banco do seu sistema e responde no WhatsApp. O conector é instalado pela nossa equipe em um comando, com túnel seguro e sem abrir porta no seu servidor.'],
  ['E a LGPD?', 'Sua empresa é a controladora dos dados e a Nerd Services só os trata em nome dela (papel de operador na LGPD): dados isolados por empresa, login individual, registro de ações, backups cifrados, mascaramento antes da IA e um papel de TI que configura o sistema sem ver conversas.'],
  ['O OmniNerd tem aplicativo para celular?', 'Sim. O app OmniNerd para Android já está na Google Play (o de iPhone chega em breve). Baixe o aplicativo, informe o endereço da sua empresa e entre com o seu login — a conta é criada pelo administrador da empresa no painel do OmniNerd.'],
  ['O OmniNerd deixa a minha empresa em conformidade com o Novo SAC?', 'O OmniNerd auxilia a adequação ao Decreto nº 13.135/2026: protocolo em toda conversa e ligação, conferência da URA ao publicar, relatório com as metas de tempo e avisos ao vivo. A conformidade também depende de como a empresa opera — equipe, horários de atendimento humano e prazos — e deve ser avaliada pelo seu jurídico. As exigências valem para fornecedores de setores regulados; para as demais empresas, são uma boa prática.'],
  ['O OmniNerd atende clínicas e planos de saúde?', 'Sim. O módulo Saúde emite guias de exame e consulta (até de dentro da conversa do WhatsApp), controla o que cada plano não cobre, deixa o laboratório parceiro validar a guia pelo celular e faz o acerto com parceiros e médicos. É contratado à parte — os valores são sob consulta.'],
  ['Consigo atender clientes que falam outro idioma?', 'Sim, com o módulo OmniNerd AI: a conversa é traduzida automaticamente na Inbox, o atendente responde no próprio idioma com prévia antes de enviar, e a URA identifica o idioma do cliente para levá-lo à equipe certa.'],
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

/* Sobre a Nerd Services + Suporte (âncoras #sobre e #suporte). Sem promessa de prazo ou percentual. */
export const SOBRE_PILARES = [
  ['shield-check', 'Tech Provider da Meta', 'Provedor de tecnologia verificado: o WhatsApp oficial da sua empresa conectado do jeito certo.'],
  ['phone', 'Telefonia é a nossa origem', 'Além do OmniNerd, fornecemos os números, o 0800 e as rotas de saída — tudo num só contrato.'],
  ['workflow', 'Implantação pela nossa equipe', 'URA, canais, treinamento da equipe e, quando combinado, a migração do sistema anterior.'],
  ['code', 'Software próprio', 'Desenvolvemos e operamos o OmniNerd: as novidades chegam a todos os clientes direto no sistema.'],
];
export const SUPORTE_ITENS = [
  '“Pedir suporte” dentro do sistema e o contato fixo “Suporte Nerd Services” no chat interno da equipe.',
  'De segunda a sexta, das 8h às 18h, com canal urgente para canal parado.',
  'O técnico só entra no seu ambiente com a faixa “Suporte presente” visível a todos — e todo acesso fica registrado.',
  'Acompanhamento do contrato pela Nerd Services: franquias, módulos e alertas de uso.',
];

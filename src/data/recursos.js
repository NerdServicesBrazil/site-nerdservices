/*
 * FATIA 20261119_RECURSOS — conteúdo do explorador de recursos, do Novo SAC e da Saúde.
 * Fonte única: recursos-omninerd.md (catálogo de 19/11/2026), em linguagem de cliente.
 * Regras (Gustavo, 19/11/2026):
 *  - nada da seção "Planejado" do catálogo aparece como pronto;
 *  - a conexão do WhatsApp por QR Code NÃO aparece em lugar nenhum do site;
 *  - nenhum preço aqui (só o "a partir de R$ 790/mês" do Essencial, em site.js);
 *  - Novo SAC: a plataforma AUXILIA a adequação — nunca prometer conformidade.
 * `novo: true` = lançado nas últimas semanas (selo NOVO). `visual` escolhe a mini tela da aba.
 */

export const RECURSOS_ABAS = [
  {
    id: 'atendimento', icon: 'layout-dashboard', aba: 'Atendimento (Inbox)', visual: 'inbox',
    titulo: 'Todos os canais numa caixa de entrada só.',
    resumo: 'WhatsApp oficial, Instagram, chat do site e Telegram na mesma tela, em tempo real, com o canal de cada conversa em destaque e um número de atendimento próprio.',
    itens: [
      { t: 'Meus, Fila e Todos', d: 'Abas com contadores e não lidas. “Pegar pra mim”, atribuir a um atendente ou transferir para a fila inteira — quem pegar primeiro atende. O robô sai da conversa assim que uma pessoa entra.' },
      { t: 'Nunca perca a janela de 24 h do WhatsApp', d: 'Anel colorido em volta de cada conversa (verde, âmbar, vermelho), botão “Janela acabando” com as mais urgentes primeiro e aviso 2 horas antes — mesmo com a Inbox fechada. Quando a janela fecha, “Reengajar” abre o template de retorno já preenchido.', novo: true },
      { t: 'Distribuição automática nas filas', d: 'Rodízio ou “menos ocupado”, só para quem está online e com limite de conversas por pessoa. Liga por fila.', novo: true },
      { t: 'Transferir com motivo e resumo da IA', d: 'Quem recebe a conversa já chega sabendo o porquê e o que foi tratado, com o aviso “Novo atendimento para você”.', novo: true },
      { t: 'Agendar mensagem', d: 'A atendente escreve, escolhe dia e hora (até 30 dias) e a mensagem sai sozinha com o nome dela — só se a conversa ainda estiver com ela e a janela de 24 h aberta.', novo: true },
      { t: 'Tradução automática', d: 'O cliente escreve em inglês, espanhol, chinês…; o atendente lê e responde no próprio idioma, com prévia antes de enviar e glossário da empresa. Com o módulo OmniNerd AI.' },
      { t: 'Pesquisa de satisfação ao encerrar', d: 'Estrelas dentro do próprio WhatsApp, botões no Telegram e no Instagram. O robô também é avaliado. Nota 1 ou 2 avisa o supervisor na hora e o cliente recebe uma mensagem de desculpas.' },
      { t: 'Supervisor no controle do volume', d: 'Encerrar em lote, “Encerrar parados” (até 2.000 de uma vez, com motivo) e redistribuir todos os atendimentos de uma pessoa ou fila quando alguém falta.', novo: true },
      { t: 'Fila com privacidade por vendedor', d: 'Cada vendedor vê só os atendimentos dele (e os sem responsável, para pegar); supervisores veem tudo.', novo: true },
      { t: 'Conversa completa, como no WhatsApp', d: 'Responder citando, emoji, mensagem de voz gravada no navegador, imagem com zoom e giro, notas privadas, respostas rápidas com /atalho e exportar a conversa em PDF.' },
      { t: 'Conversas que vieram de anúncio', d: 'Selo na lista, “Veio do anúncio” na conversa e relatório por anúncio do Facebook e do Instagram, com Excel.' },
      { t: 'Contatos sem duplicidade', d: 'Um cadastro por pessoa em todos os canais (com ou sem o nono dígito), unificar em 1 clique, “Documentos e mídias” de cada cliente, campos personalizados e importação por planilha.' },
      { t: 'Contatos internos', d: 'Colegas, diretoria e fornecedores marcados como internos: a conversa com eles não conta como atendimento e dá para encaminhar uma mensagem do cliente em 2 cliques.' },
    ],
  },
  {
    id: 'whatsapp', icon: 'message-circle', aba: 'WhatsApp, Instagram e Transmissões', visual: 'transmissao',
    titulo: 'API oficial da Meta, com a conta da sua empresa.',
    resumo: 'A Nerd Services é Tech Provider verificado da Meta. O número e a conta são da sua empresa, e as mensagens são pagas direto à Meta, a preço de custo.',
    itens: [
      { t: 'Vários números oficiais na mesma empresa', d: 'Cobrança, Comercial, SAC… cada um com o seu número. Escolha por qual sair no “Iniciar conversa”, nas Transmissões, nos templates e nos avisos do CRM.', novo: true },
      { t: 'Transmissões (envio em massa)', d: 'Uma página só: mensagem, público (etiquetas ou planilha), prévia num celular com exemplos reais, custo estimado da Meta e o checklist “Tudo pronto?”. Ritmo rápido ou devagar, agendamento e envios recorrentes.', novo: true },
      { t: '“Quando o cliente responder”', d: 'A resposta de uma Transmissão pode seguir o fluxo normal, cair direto numa fila (com distribuição automática) ou começar num fluxo — e abrir uma solicitação no CRM.', novo: true },
      { t: 'Templates que se preenchem sozinhos', d: 'Nome do cliente, protocolo, data, saudação do horário e campos da ficha entram sozinhos; botão de calendário para datas e “Preencher com IA” lendo a conversa.', novo: true },
      { t: 'Controle do gasto com a Meta', d: 'Teto mensal, custo estimado antes de enviar e relatório de consumo: quantas mensagens a Meta cobrou e quantas foram grátis, por categoria, dia e número — para conferir a fatura.', novo: true },
      { t: 'Conexão Meta sem mistério', d: 'Qualidade do número, limite de envio, diagnóstico com conserto em 1 clique e alertas no sino (template reprovado, pagamento recusado, qualidade). Se a conta cair, os envios pausam e voltam sozinhos.' },
      { t: 'Ligações de voz pelo WhatsApp', d: 'O cliente liga pelo WhatsApp e cai na fila, na URA ou no ramal, com gravação e relatório. A empresa também liga, com a permissão do cliente registrada.' },
      { t: 'Só a voz do WhatsApp, se preferir', d: 'Já atende as mensagens em outro sistema? Traga só as ligações do mesmo número para a central do OmniNerd, sem conflito com o outro fornecedor.' },
      { t: 'Instagram: Direct e comentários', d: 'Pela API oficial: Direct e comentários dos posts na mesma Inbox, cada um com a sua URA, mídia nos dois sentidos e transcrição de áudio.' },
      { t: 'Chat do site e Telegram', d: 'Widget de uma linha para o seu site (balão, sempre aberto ou embutido na página) e o bot do Telegram da sua empresa como canal, com a mesma URA e a mesma IA.' },
    ],
  },
  {
    id: 'ura', icon: 'workflow', aba: 'URA e fluxos', visual: 'ura',
    titulo: 'Atendimento automático que se monta arrastando blocos.',
    resumo: 'Editor visual para WhatsApp, Instagram, chat do site e Telegram — sem programar, com simulador antes de publicar.',
    itens: [
      { t: 'Criar fluxo com a OmniNerd AI', d: 'Cole o material da empresa ou fale: “tenho 4 setores e atendo de segunda a sexta…” — a IA monta o rascunho da URA com menu, filas, horário e “falar com atendente”. Nada é publicado sem você.' },
      { t: 'Modelos prontos, sem IA e sem custo', d: 'Pós-expediente, triagem por setor e falar com atendente: preencha o que é da sua empresa e pronto. Todos já saem no padrão do Novo SAC.' },
      { t: 'Simulador e versões', d: 'Teste o fluxo como se fosse o cliente antes de publicar. Cada mudança salva guarda a versão anterior (as 30 últimas), com “abrir esta versão” para voltar.', novo: true },
      { t: 'Consulta externa ao seu sistema', d: 'A URA busca boletos, títulos e cadastros no banco da sua empresa e responde com linha digitável, PIX copia-e-cola e vencimento. Conector instalado pela nossa equipe, sem abrir porta no seu servidor.' },
      { t: 'O robô aproveita a 1ª mensagem', d: 'Quem já chega com o pedido completo (“quero marcar ultrassom amanhã”), em texto ou áudio, não precisa repetir.', novo: true },
      { t: 'Detectar idioma', d: 'Separa o atendimento pelo idioma do cliente e lembra na próxima conversa. Junto com a tradução automática, atende estrangeiros mesmo sem equipe bilíngue.' },
      { t: 'Etapas do fluxo no relatório', d: 'Marque blocos como “Gerou boleto” ou “Falou com humano” e veja quantos clientes passaram por cada etapa — o número de quanto a URA resolve sozinha.' },
      { t: 'Blocos reaproveitáveis', d: 'Subfluxos, variáveis com “/”, validação de CPF/CNPJ, e-mail e data, resposta salva direto na ficha do contato e mídia da biblioteca nas respostas.' },
      { t: 'Filas, horário e QR Code de entrada', d: 'Encaminhar por fila fixa, por variável ou por unidade × setor; horário e feriados da empresa; QR Code de entrada que leva o cliente ao passo certo do fluxo.' },
    ],
  },
  {
    id: 'ia', icon: 'sparkles', aba: 'OmniNerd AI', visual: 'ia',
    titulo: 'A IA que atende, ajuda a equipe e supervisiona.',
    resumo: 'Módulo contratável com controle de custo, dados mascarados antes da IA e provedor trocável — inclusive servidor próprio.',
    itens: [
      { t: 'Lê comprovante, boleto e pedido médico', d: 'Imagem ou PDF que o cliente manda vira campos: valor, data e banco do comprovante; vencimento e linha digitável do boleto; paciente, exames e médico do pedido médico. Foto ruim? Ela sugere pedir outra. Nunca confirma pagamento sozinha.', novo: true },
      { t: 'URA que entende texto livre e áudio', d: 'Até 30 intenções, confirmação quando há dúvida e extração das informações de uma frase solta — pergunta só o que faltou.' },
      { t: 'Base de conhecimento da sua empresa', d: 'Envie PDF, DOCX ou TXT e o robô responde só com esse conteúdo, citando a fonte. Com regras em português, sabe quando passar o cliente para a equipe — e o gestor marca se a transferência foi certa.', novo: true },
      { t: 'Copiloto do atendente', d: 'Sugerir, melhorar, resumir e “Perguntar à base” com as próprias palavras. Nada é enviado sem o clique do atendente.' },
      { t: 'Preencher template com IA', d: 'A IA lê a conversa e preenche as variáveis do template (nome, protocolo, o que foi combinado); a atendente confere e envia.', novo: true },
      { t: 'Tradução automática', d: 'Conversas traduzidas na Inbox, com prévia antes de enviar e glossário de produtos e marcas.' },
      { t: 'IA Supervisor', d: 'Relatório semanal da operação inteira — telefonia, mensagens e CRM —, com os números reais, comparação com a semana anterior e ações sugeridas.' },
      { t: 'LGPD e custo sob controle', d: 'CPF, cartão, e-mail e telefone mascarados antes de ir à IA; teto mensal e avisos de uso; se a IA cair, a URA nunca trava.' },
    ],
  },
  {
    id: 'telefonia', icon: 'phone', aba: 'Telefonia (PABX)', visual: 'ramal',
    titulo: 'Central telefônica em nuvem, no navegador ou no aparelho.',
    resumo: 'Ramais, filas, URA de voz, gravação e painel ao vivo — na mesma tela do WhatsApp e do chat.',
    itens: [
      { t: 'Filas que respeitam o cliente', d: 'Não tocam em atendente ocupado, anunciam a posição e o tempo estimado, transbordam para o próximo destino e avisam por e-mail quando a fila fica sem ninguém.' },
      { t: 'Ramal no navegador ou de mesa', d: 'Softphone com “ouvir toque em” e “ouvir chamada em” separados, atender ou rejeitar no aviso do Windows e “Minhas chamadas” com retorno em 1 clique.' },
      { t: 'Usuário novo já com ramal', d: 'Ao criar o usuário, o sistema sugere o próximo ramal livre e cria o ramal do navegador com o nome da pessoa. Ramais e filas também em lote.', novo: true },
      { t: 'URA de voz', d: 'Até 5 níveis, saudação interrompível e opção “receber pelo WhatsApp”. Quem liga para o fixo pode continuar a conversa no WhatsApp.' },
      { t: 'Rotas como centro de controle', d: 'Origem, horários, feriados e “Testar rota”. Ligação de retorno vai para a fila certa conforme a unidade escolhida no fluxo.', novo: true },
      { t: 'Painel ao vivo', d: 'Estado de cada ramal, com quem fala e o cronômetro; o supervisor pode escutar e desligar.' },
      { t: 'Pausas com motivo e limite', d: 'Em pausa, nem a fila de voz nem a Inbox entregam nada novo. Passou do limite, o supervisor é avisado. Relatório de pausas em Excel.' },
      { t: 'Gravação, troncos e segurança', d: 'Gravação com retenção (inclusive ligações internas), status real dos troncos, bloqueio por número e antifraude para internacional e tarifa premium.' },
      { t: 'Interconexão entre empresas', d: 'Duas empresas do mesmo grupo ligam entre si como uma central só: ramal, fila, URA e transferência.' },
    ],
  },
  {
    id: 'crm', icon: 'kanban', aba: 'CRM e automações', visual: 'kanban',
    titulo: 'Solicitações com protocolo, prazo e dono.',
    resumo: 'Setores, etapas e prazos em dias úteis configurados pela própria empresa, com Kanban e aviso automático para quem precisa saber.',
    itens: [
      { t: 'Protocolo, setor e prazo', d: 'Protocolo anual, prazos em dias úteis (com os feriados da empresa), Kanban por setor e lista por prazo, com alertas de “vencem hoje” e resumo diário por e-mail.' },
      { t: 'Abre de qualquer lugar', d: 'Pela URA, pela Inbox, à mão ou pelo Formulário do Site — público ou embutido no seu site, com anexos, aceite LGPD e proteção anti-robô.' },
      { t: 'Automações do CRM', d: 'Ao criar, quando um campo muda ou quando a etapa anda, o sistema avisa a pessoa certa por WhatsApp, e-mail ou Telegram (de graça). Pessoas de fora do sistema também recebem.' },
      { t: 'Etapas com regra', d: 'Campos obrigatórios para entrar numa etapa, solicitação que anda sozinha ao ser assumida e avanço de etapa sem sair do atendimento.' },
      { t: 'Retorno ao cliente', d: '“Concluir e avisar” com PDF anexado, continuar a conversa sem gastar template dentro da janela de 24 h e impressão da solicitação em A4.' },
      { t: 'Fora do expediente em destaque', d: 'O que chega à noite, no fim de semana ou no feriado ganha selo e sobe para o topo até alguém pegar.' },
      { t: 'Relatórios do CRM', d: 'Criadas × concluídas, no prazo e atrasadas, por tipo, setor, responsável e origem; “Por campo” e “Avisos enviados”, tudo em Excel.' },
    ],
  },
  {
    id: 'gestao', icon: 'bar-chart', aba: 'Supervisão e relatórios', visual: 'tv',
    titulo: 'O gestor vê o agora — e prova os resultados.',
    resumo: 'Central por papel, supervisão por equipe, Painel de TV e relatórios por área, com Excel e PDF.',
    itens: [
      { t: 'Central por papel', d: 'O gestor vê conversas, espera, SLA, ligações e o que precisa de atenção; o atendente vê o “meu dia”; o TI vê a saúde do sistema.' },
      { t: 'Supervisão feita para volume', d: 'Indicadores clicáveis (sem responsável, aguardando, SLA estourado, satisfação de hoje), pausas com motivo e tempo, atribuição por arrastar. Supervisor por equipe ou geral.' },
      { t: 'Painel de TV da operação', d: 'Fila de espera, atendentes, telefonia, satisfação do dia, clientes no robô e “Prestes a perder” — por link seguro, sem login, escolhendo as filas de cada TV.' },
      { t: 'Relatórios por área', d: 'Telefonia (CDR, filas, agentes, pausas), atendimento (1ª resposta, duração, por atendente e fila), satisfação, etapas do fluxo, anúncios, CRM e Novo SAC — no fuso da sua empresa.' },
      { t: 'Excel e PDF', d: 'Todos os relatórios exportam em Excel (resumo em abas e lista detalhada) e imprimem em PDF com o cabeçalho da empresa.' },
      { t: 'IA Supervisor', d: 'Toda semana, a análise da operação escrita pela IA com os seus números e ações sugeridas.' },
    ],
  },
  {
    id: 'novo-sac', icon: 'shield-check', aba: 'Novo SAC', visual: 'sac', link: ['#novo-sac', 'Ver a seção do Novo SAC'],
    titulo: 'Ferramentas para a adequação ao Novo SAC.',
    resumo: 'Protocolo, conferência da URA, relatório com as metas de tempo e avisos ao vivo — para a sua empresa acompanhar e demonstrar o cuidado com o Decreto nº 13.135/2026.',
    itens: [
      { t: 'Protocolo em todo atendimento', d: 'Toda conversa e toda ligação recebem número de protocolo, com sequência própria da empresa.', novo: true },
      { t: 'URA conferida ao publicar', d: 'Até 5 níveis, opção de falar com atendente e de cancelamento — o sistema confere antes de salvar.', novo: true },
      { t: 'Relatório do Novo SAC', d: 'Atendidas em até 20 s, espera acima de 300 s, retorno de ligações que caíram e protocolos abertos há mais de 7 dias.', novo: true },
      { t: 'Avisos ao vivo', d: 'Supervisão, sino e Painel de TV avisam quando uma fila sai da meta.', novo: true },
    ],
  },
  {
    id: 'saude', icon: 'stethoscope', aba: 'Saúde', visual: 'guia', link: ['#saude', 'Ver a seção Saúde'],
    titulo: 'Guias, parceiros e médicos para clínicas e planos.',
    resumo: 'A atendente emite a guia, o laboratório confere no celular e a clínica vê tudo num painel.',
    itens: [
      { t: 'Guia emitida até de dentro da conversa', d: 'Cupom térmico ou envio pelo WhatsApp, com código, validade e o que o plano do paciente não cobre.', novo: true },
      { t: 'Parceiro valida pelo celular', d: 'O laboratório confere a guia e ela vale uma vez só — com antifraude e registro de tudo.', novo: true },
      { t: 'Acerto com parceiros e médicos', d: 'Quanto a clínica deve a cada parceiro e a cada médico, com folha para assinatura e Excel.', novo: true },
      { t: 'Pedido médico lido pela IA', d: 'A foto do pedido vira guia, com os exames da tabela da clínica.', novo: true },
    ],
  },
  {
    id: 'equipe', icon: 'users', aba: 'Equipe, Wiki e app', visual: 'app',
    titulo: 'A equipe aprende sozinha e atende de onde estiver.',
    resumo: 'App para Android, ajuda dentro de cada tela, manual sempre atualizado e permissões sob medida.',
    itens: [
      { t: 'App OmniNerd para Android', d: 'Inbox, Supervisão e o ramal no celular, com o uso liberado pelo administrador por pessoa. Versão para iPhone em breve.' },
      { t: 'Wiki dentro do sistema', d: 'O manual de todas as telas, com busca e passo a passo, filtrado pelo papel de cada pessoa e atualizado junto com o sistema — em 5 idiomas.', novo: true },
      { t: 'Modo Ajuda e “Pergunte ao OmniNerd AI”', d: 'Botão “?” em todas as telas: passe o mouse para ver o que cada botão faz, sem executar nada. Ou pergunte com as próprias palavras e receba a resposta do manual.' },
      { t: 'Permissões por papel, com exceção por pessoa', d: 'O administrador decide numa grade o que supervisor e atendente podem fazer. O papel TI configura o sistema sem ver conversas.' },
      { t: 'Novidades com destaque na tela', d: 'Depois de cada atualização, o sistema mostra o que mudou e acende o botão novo na primeira vez.', novo: true },
      { t: '5 idiomas e tema claro ou escuro', d: 'Português, inglês, espanhol, italiano e francês, com troca na hora.' },
      { t: 'Rápido mesmo com internet ruim', d: 'Painel leve, que avisa quando a conexão cai, não perde a sessão e se atualiza sozinho — nunca no meio de uma ligação.' },
      { t: 'Chat interno da equipe', d: 'Conversas 1:1 e em grupo, com arquivos, fotos, recado de voz e ditado.' },
    ],
  },
  {
    id: 'seguranca', icon: 'lock', aba: 'Segurança, LGPD e suporte', visual: 'lgpd',
    titulo: 'Seus dados isolados, protegidos e com cópia.',
    resumo: 'Cada empresa tem o seu espaço, e a Nerd Services acompanha a operação de perto.',
    itens: [
      { t: 'Isolamento por empresa', d: 'Endereço, dados, números, URAs e filas próprios. Os dados de um cliente nunca são acessíveis a outro.' },
      { t: 'LGPD na prática', d: 'Mascaramento antes da IA, papel de TI sem acesso a conversas, registro de quem mudou o quê e logs sem dados sensíveis.' },
      { t: 'Proteção contra ataques', d: 'Bloqueio automático de tentativas de senha, firewall restrito e robôs de ataque bloqueados já na primeira tentativa.' },
      { t: 'Backup diário criptografado', d: 'Na nuvem do Google, em São Paulo: o banco todo dia e o sistema completo toda semana, com cópias que não podem ser apagadas antes de 30 dias.', novo: true },
      { t: 'Suporte Nerd Services incluso', d: '“Pedir suporte” dentro do sistema; o técnico só entra com a faixa “Suporte presente” visível a todos, e todo acesso fica registrado.' },
    ],
  },
];

/* Novidades em destaque — cada cartão abre a aba certa do explorador (#rx-<id>). */
export const DESTAQUES = [
  { icon: 'megaphone', aba: 'whatsapp', titulo: 'Transmissões', texto: 'Envio em massa com prévia no celular, custo estimado, ritmo e destino de quem responder.' },
  { icon: 'file-check', aba: 'ia', titulo: 'A IA lê documentos', texto: 'Comprovante, boleto e pedido médico viram campos — e o pedido vira guia.' },
  { icon: 'languages', aba: 'atendimento', titulo: 'Tradução automática', texto: 'Atenda clientes em qualquer idioma, com prévia antes de enviar.' },
  { icon: 'star', aba: 'atendimento', titulo: 'Pesquisa de satisfação', texto: 'Estrelas dentro do WhatsApp, nota por atendente e do robô, alerta de nota baixa.' },
  { icon: 'book-open', aba: 'equipe', titulo: 'Wiki dentro do sistema', texto: 'O manual de cada tela, em 5 idiomas, sempre atualizado.' },
  { icon: 'smartphone', aba: 'equipe', titulo: 'App para Android', texto: 'Inbox, Supervisão e o ramal no celular da equipe.' },
];

/* ---------- Novo SAC (Decreto nº 13.135/2026, em vigor desde 02/11/2026) ---------- */
export const SAC_PILARES = [
  { icon: 'hash', titulo: 'Protocolo em toda conversa e ligação',
    texto: 'Cada atendimento recebe número de protocolo, com sequência própria da empresa por ano. O cliente pode receber o número por mensagem, e a URA pode falá-lo na ligação. Busca pelo número no Histórico e nos relatórios.' },
  { icon: 'workflow', titulo: 'URA conferida antes de publicar',
    texto: 'Ao salvar um fluxo ou uma URA, o OmniNerd confere os pontos do decreto — até 5 níveis, opção de falar com atendente e de cancelamento — e registra a confirmação. Os modelos de fluxo prontos já saem nesse padrão.' },
  { icon: 'bar-chart', titulo: 'Relatório do Novo SAC',
    texto: 'Por fila: ligações atendidas em até 20 segundos (meta de 80%), espera acima de 300 s, ligações que caíram e se tiveram retorno, tempo até o atendimento humano no texto e protocolos abertos há mais de 7 dias. Metas por fila e Excel com prova de integridade.' },
  { icon: 'alert-triangle', titulo: 'Avisos ao vivo',
    texto: 'Na Supervisão, no sino e no Painel de TV: fila acima da meta de espera, nível de serviço do dia abaixo de 80% ou fila sem ninguém no horário — para a equipe reagir na hora.' },
];

/* ---------- Saúde (módulo para clínicas, laboratórios e planos) ---------- */
export const SAUDE_PASSOS = [
  { n: '01', icon: 'ticket', titulo: 'Emitir', texto: 'No balcão ou de dentro da conversa do WhatsApp: paciente, parceiro, exames com o preço do dia e validade. Cupom térmico de 58 ou 80 mm e/ou envio pelo WhatsApp.' },
  { n: '02', icon: 'scan-line', titulo: 'Validar', texto: 'O laboratório digita o código ou aponta a câmera, vê só o necessário, confere 3 números do CPF e confirma. A guia vale uma vez só.' },
  { n: '03', icon: 'wallet', titulo: 'Acertar', texto: 'Painel por parceiro e período, acerto com laboratórios e médicos com folha para assinatura, caixa do dia e Excel.' },
];

export const SAUDE_ITENS = [
  { t: 'Pedido médico lido pela IA vira guia', d: 'A foto do pedido aparece em campos (paciente, exames, médico e CRM) e o botão “Emitir guia” já traz os exames da tabela da clínica, inclusive pelos apelidos. Com o módulo OmniNerd AI.' },
  { t: 'Planos e o que cada um não cobre', d: 'Bronze, Prata, Ouro… ao emitir, a atendente é avisada do que o plano do paciente não cobre e confirma.' },
  { t: 'Parceiros com acesso próprio e restrito', d: 'Laboratórios, clínicas e médicos conveniados só validam guias e conversam com a clínica pelo chat interno — não veem conversas, contatos nem outros parceiros.' },
  { t: 'Antifraude de verdade', d: 'Guia de outro parceiro aparece como não encontrada, erros de CPF cancelam a guia e quem erra muitos códigos é travado — com aviso ao administrador e registro de tudo.' },
  { t: 'Guia de retorno', d: 'Cada parceiro com o seu prazo de retorno: dentro do prazo, a guia sai sem cobrança do paciente e sem pagamento ao parceiro.' },
  { t: 'Médicos e agenda do dia', d: 'Médicos com especialidades, prazo de retorno e vagas; folha do dia para a recepção e “Meu dia” para o médico ver os atendimentos e o que tem a receber.' },
  { t: 'Caixa do dia e acerto dos médicos', d: 'O que entrou e saiu no balcão, fechamento do caixa e o pagamento de cada médico por período, com folha para assinar.' },
  { t: 'Painel das guias', d: 'Emitidas, usadas, em aberto, vencidas e canceladas por parceiro; guias não usadas há dias, para ligar ao paciente.' },
];

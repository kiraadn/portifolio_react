/**
 * Conteúdo e configuração do portfólio — alimenta os componentes em `src/components/portfolio`.
 */

export const site = {
  title: 'Portfólio | Ameralim Namburete',
  description:
    'Transformando ideias em soluções digitais modernas, escaláveis e inteligentes.',
  lang: 'pt-PT',
};

export const header = {
  logo: {
    href: '#hero',
    accent: 'Ameralim Namburete',
  },
  navItems: [
    { href: '#hero', label: 'Início' },
    { href: '#about', label: 'Sobre' },
    { href: '#services', label: 'Serviços' },
    { href: '#portfolio', label: 'Portfólio' },
    { href: '#contact', label: 'Contato' },
  ],
};

export const hero = {
  subtitle: '',
  titleLines: ['Soluções Inteligentes', 'Para Negócios Modernos'],
  typingLabel: 'Eu construo',
  typingRoles: [
    'Experiências Digitais',
    'Sistemas Inteligentes',
    'APIs Escaláveis',
    'Plataformas Modernas',
    'Soluções Tecnológicas',
  ],
  cta: { href: '#portfolio', label: 'Ver Projetos' },
  scrollTarget: '#about',
};

export const about = {
  sectionTitle: { line: 'Sobre', highlight: 'Mim' },
  image: {
    src: 'img/me/me.png',
    alt: 'Ameralim Namburete',
  },
  paragraphs: [
    'Com uma abordagem multidisciplinar, actuo na interseção entre desenvolvimento de software robusto e infraestrutura de TI. Minha experiência abrange desde a criação de aplicações web modernas até a gestão técnica de ambientes corporativos.',
    'Como Consultor, ajudo empresas a optimizar processos através da tecnologia correcta. Como Desenvolvedor, construo soluções escaláveis utilizando as mais recentes tecnologias.',
  ],
  skills: [
    { name: 'Laravel', percent: 85 },
    { name: 'Angular', percent: 95 },
    { name: 'TypeScript', percent: 90 },
    { name: 'Infraestrutura & Suporte', percent: 95 },
  ],
  techTags: ['HTML5/CSS3', 'JavaScript', 'MySQL', 'Docker', 'Redes', 'Cloud', 'PHP', 'Laravel', 'Angular', 'TypeScript', 'IA'],
};

export const services = {
  sectionTitle: { line: 'Meus', highlight: 'Serviços' },
  items: [
    {
      iconClass: 'fas fa-code',
      title: 'Desenvolvimento Web',
      description:
      'Criação de aplicações web modernas, escaláveis e responsivas utilizando Angular, Laravel e tecnologias actuais do mercado.',
  },
    {
      iconClass: 'fas fa-layer-group',
      title: 'Sistemas Empresariais',
      description:
        'Desenvolvimento de plataformas de gestão empresarial, sistemas administrativos, ERPs e soluções SaaS adaptadas às necessidades do negócio.',
    },
    {
      iconClass: 'fas fa-chart-line',
      title: 'Consultoria Tecnológica',
      description:
        'Análise, planeamento e implementação de soluções digitais para optimizar processos, aumentar produtividade e acelerar a transformação digital.',
    },
    {
      iconClass: 'fas fa-cloud',
      title: 'APIs & Integrações',
      description:
        'Desenvolvimento de APIs REST seguras, integrações entre sistemas e arquitectura backend focada em performance e escalabilidade.',
    },
  ],
};

export const projects = {
  sectionTitle: { line: 'Projetos', highlight: 'Recentes' },
  items: [
    {
      image: { src: 'img/projects/linka.png', alt: 'Linka' },
      tags: ['Angular', 'Laravel', 'IA', 'MySQL'],
      title: 'Linka — Plataforma de Recrutamento',
      description:
      'Plataforma inteligente de recrutamento e integração com IA, desenvolvida para optimizar processos de contratação, gestão de candidatos e matching de talentos.',
      links: [
        { href: 'https://linka.co.mz', label: 'Visitar Plataforma', iconClass: 'fas fa-external-link-alt' },
      ],
    },
    {
      image: { src: 'img/projects/belleza.png', alt: 'Dashboard Angular' },
      tags: ['Angular', 'Laravel', 'SaaS', 'Gestão'],
      title: 'Belleza — Sistema Inteligente para Salões de Beleza',
      description:
      'Sistema de gestão para salões de beleza com funcionalidades de agendamento, controlo financeiro, gestão de clientes e painel administrativo completo.',
      links: [
        { href: 'https://belleza.gaarra.net', label: 'Visitar Plataforma', iconClass: 'fas fa-external-link-alt' },
      ],
    },
    {
      image: { src: 'img/projects/akademia.jpg', alt: 'Akademia' },
      tags: ['SaaS', 'Laravel', 'MySQL', 'Educação'],
      title: 'Akademia — Sistema de Gestão Académica',
      description:
      'Plataforma completa de gestão académica desenvolvida para automatizar processos escolares, incluindo matrículas, gestão de estudantes, propinas, avaliações, turmas e administração institucional.',
      links: [{ href: 'https://akademia.gaarra.net', label: 'Visitar Plataforma', iconClass: 'fas fa-external-link-alt' }],
    },
  ],
};

export const contact = {
  sectionTitle: { line: 'Entre em', highlight: 'Contato' },
  infoItems: [
    { iconClass: 'fas fa-envelope', title: 'Email', text: 'ameralimnamburete@gmail.com' },
    { iconClass: 'fas fa-phone', title: 'Telefone', text: '+258 87 91 09 464' },
    { iconClass: 'fas fa-map-marker-alt', title: 'Localização', text: 'Maputo, Moçambique' },
  ],
  note:
    'Estou disponível para novos projetos de desenvolvimento, consultoria de TI ou suporte técnico. Entre em contato para discutirmos como posso ajudar.',
  form: {
    placeholders: {
      name: 'Seu Nome',
      email: 'Seu Email',
      message: 'Sua Mensagem',
    },
    subjectPlaceholder: 'Assunto',
    subjects: [
      { value: 'dev', label: 'Desenvolvimento Web' },
      { value: 'consulting', label: 'Consultoria de TI' },
      { value: 'support', label: 'Suporte Técnico' },
      { value: 'other', label: 'Outro' },
    ],
    submitLabel: 'Enviar Mensagem',
    sendingLabel: 'Enviando...',
  },
};

export const footer = {
  logo: header.logo,
  social: [
    { href: 'https://www.linkedin.com/in/ameralim-namburete-2758241a4/', iconClass: 'fab fa-linkedin-in', label: 'LinkedIn' },
    { href: 'https://wa.me/258848109464', iconClass: 'fab fa-whatsapp', label: 'WhatsApp' },
  ],
  copyright: `© ${new Date().getFullYear()} Ameralim Namburete. Todos os direitos reservados.`,
};

export const toast = {
  message: 'Mensagem enviada com sucesso!',
  iconClass: 'fas fa-check-circle',
  durationMs: 3000,
  simulateDelayMs: 1500,
};

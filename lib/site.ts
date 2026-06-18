// Configuração central do site Ordia. Valores sensíveis vêm de variáveis
// de ambiente públicas; aqui ficam os defaults e o conteúdo de marca.

export const siteConfig = {
  name: 'Ordia',
  tagline: 'Estúdio de gestão e organização de vida, casa e património.',
  description:
    'A Ordia é um estúdio premium que organiza a sua vida digital, a sua casa e o seu património, e mantém tudo a funcionar. Marque um diagnóstico gratuito de 30 minutos.',
  url: 'https://rgvduarte.github.io/Ordia',
  locale: 'pt-PT',
  email: 'ola@ordia.pt',
  calcomLink: process.env.NEXT_PUBLIC_CALCOM_LINK || 'ordia/diagnostico',
  formspreeEndpoint:
    process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT || 'https://formspree.io/f/your-id',
  gaId: process.env.NEXT_PUBLIC_GA_ID || '',
};

export const nav = [
  { href: '/metodo', label: 'Método' },
  { href: '/servicos', label: 'Serviços' },
  { href: '/casos', label: 'Casos' },
  { href: '/sobre', label: 'Sobre' },
  { href: '/diario', label: 'Diário' },
];

export const methodSteps = [
  {
    n: '01',
    title: 'Compreender',
    summary: 'Ouvimos a sua vida e mapeamos o que pesa.',
    detail:
      'Começamos por perceber como vive, o que o tira do sério e onde se perde tempo. Mapeamos espaços, ficheiros, rotinas e responsabilidades, sem julgamento.',
  },
  {
    n: '02',
    title: 'Desenhar',
    summary: 'Criamos um sistema simples, feito à sua medida.',
    detail:
      'Desenhamos uma estrutura clara: onde fica cada coisa, quem trata de quê, que regras mantêm tudo no sítio. Um sistema que faz sentido para si, não para nós.',
  },
  {
    n: '03',
    title: 'Instalar',
    summary: 'Pomos o sistema a funcionar, na prática.',
    detail:
      'Organizamos, arrumamos, configuramos e documentamos. Quando saímos, está tudo no lugar e percebe-se à primeira vista como funciona.',
  },
  {
    n: '04',
    title: 'Manter',
    summary: 'Acompanhamos para que a ordem dure.',
    detail:
      'A ordem não é um evento, é um hábito. Acompanhamos com avenças e revisões periódicas para que o sistema se mantenha vivo sem esforço seu.',
  },
];

export const services = [
  {
    slug: 'ordem-digital',
    name: 'Ordem Digital',
    promise: 'A vida digital arrumada e com regras.',
    scope:
      'Fotografias, documentos, contas, palavras-passe e ficheiros. Estrutura, nomes, cópias de segurança e regras que se mantêm.',
    result:
      'Encontra tudo em segundos, com tranquilidade e sem caos digital.',
    priceFrom: 900,
    priceTo: 1800,
    unit: 'projeto',
  },
  {
    slug: 'sistema-casa',
    name: 'Sistema Casa',
    promise: 'A casa a funcionar sozinha.',
    scope:
      'Espaços, despensas, roupeiros, garagem, documentos da casa e fornecedores. Sistemas físicos e rotinas para a família ou para a equipa de apoio.',
    result: 'Uma casa que se mantém em ordem sem depender de si.',
    priceFrom: 1500,
    priceTo: 4000,
    unit: 'projeto',
  },
  {
    slug: 'concierge',
    name: 'Concierge',
    promise: 'Alguém que trata, todos os meses.',
    scope:
      'Avença mensal de gestão: fornecedores, marcações, compras, manutenção e tarefas recorrentes da casa e da vida.',
    result: 'Liberta tempo e cabeça, com alguém de confiança a tratar.',
    priceFrom: 600,
    priceTo: 1500,
    unit: 'mês',
  },
  {
    slug: 'evento',
    name: 'Evento',
    promise: 'O evento sem stress.',
    scope:
      'Add-on de planeamento e coordenação de um evento em casa ou fora: logística, fornecedores e dia a dia até ao fim.',
    result: 'Recebe ou celebra sem carregar a operação aos ombros.',
    priceFrom: 1500,
    priceTo: null,
    unit: 'projeto',
  },
];

export const segments = [
  { value: 'segunda-casa', label: 'Segunda casa ou villa' },
  { value: 'familia', label: 'Família' },
  { value: 'empresa', label: 'Empresa' },
  { value: 'outro', label: 'Outro' },
];

export const testimonials = [
  {
    quote:
      'Recuperámos uma divisão inteira e, sobretudo, deixámos de discutir sobre onde estão as coisas. A casa respira.',
    author: 'Família M.',
    context: 'Sistema Casa, Cascais',
  },
  {
    quote:
      'Vinte anos de fotografias e documentos finalmente organizados e seguros. Sinto que recuperei a minha memória.',
    author: 'Sofia R.',
    context: 'Ordem Digital, Lisboa',
  },
  {
    quote:
      'Ter alguém que trata da casa todos os meses mudou a forma como vivemos a segunda casa. Chegamos e está tudo a postos.',
    author: 'James & Clara',
    context: 'Concierge, Comporta',
  },
];

export const cases = [
  {
    slug: 'villa-cascais',
    title: 'Villa em Cascais devolvida à calma',
    segment: 'Segunda casa',
    summary:
      'Uma villa usada poucos meses por ano, sempre em modo de emergência à chegada. Criámos um sistema de casa e uma avença de concierge.',
    before: 'Chegadas caóticas, despensas sem regra, fornecedores dispersos.',
    after:
      'Casa pronta a cada chegada, inventário claro e um único ponto de contacto para tudo.',
  },
  {
    slug: 'arquivo-digital-familia',
    title: 'Vinte anos de memórias, organizados',
    segment: 'Família',
    summary:
      'Milhares de fotografias e documentos espalhados por telemóveis, discos e contas. Estruturámos, limpámos e protegemos tudo.',
    before: 'Duplicados, ficheiros perdidos, sem cópias de segurança.',
    after: 'Arquivo único, com nomes, datas e cópia segura na nuvem.',
  },
  {
    slug: 'escritorio-pme',
    title: 'Uma PME que deixou de perder tempo',
    segment: 'Empresa',
    summary:
      'Documentos e processos sem dono. Desenhámos uma estrutura partilhada e regras simples para a equipa.',
    before: 'Versões duplicadas, pastas caóticas, tempo perdido a procurar.',
    after: 'Estrutura partilhada, regras claras e onboarding em minutos.',
  },
];

export const resources = [
  {
    slug: 'guia-por-onde-comecar',
    kind: 'Guia gratuito',
    title: 'Por onde começar a pôr ordem',
    promise:
      'O guia que mostra os três erros que mantêm a desordem e o primeiro passo para cada área da sua vida.',
    bullets: [
      'Os três erros que mantêm a desordem',
      'O método em quatro passos, resumido',
      'Uma lista para começar este fim de semana',
    ],
  },
  {
    slug: 'quiz-tipo-de-desordem',
    kind: 'Quiz',
    title: 'Que tipo de desordem o trava?',
    promise:
      'Responda a seis perguntas e descubra qual o sistema da Ordia que mais lhe vai mudar o dia a dia.',
    bullets: [
      'Seis perguntas, dois minutos',
      'Um diagnóstico inicial do que pesa',
      'A recomendação de serviço para si',
    ],
  },
];

export const posts = [
  {
    slug: 'organizar-fotografias-sem-stress',
    title: 'Como organizar 20 anos de fotografias sem stress',
    excerpt:
      'Um método simples para arrumar o arquivo digital da família, do telemóvel à nuvem, e nunca mais perder uma memória.',
    date: '2026-05-02',
    readingTime: '6 min',
  },
  {
    slug: 'casa-que-se-mantem-sozinha',
    title: 'A casa que se mantém sozinha: o poder das rotinas',
    excerpt:
      'Porque é que a ordem se perde semanas depois de arrumar, e como desenhar rotinas que a fazem durar.',
    date: '2026-04-15',
    readingTime: '5 min',
  },
  {
    slug: 'home-concierge-portugal',
    title: 'Home concierge em Portugal: o que é e para quem faz sentido',
    excerpt:
      'O conceito de gestão de casa por avença, e como funciona para donos de segunda casa e famílias com duas carreiras.',
    date: '2026-03-28',
    readingTime: '7 min',
  },
];

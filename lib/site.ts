// Configuração central do site Ordia. Valores sensíveis vêm de variáveis
// de ambiente públicas; aqui ficam os defaults e o conteúdo de marca.

export const siteConfig = {
  name: 'Ordia',
  tagline: 'A sua casa e a sua vida em ordem, sem ter de gerir nada.',
  description:
    'A Ordia põe a sua casa e a sua vida em ordem, e mantém tudo assim, sem que tenha de gerir nada. Concebemos o sistema à medida e dirigimos toda a execução. Marque um diagnóstico gratuito de 30 minutos.',
  url: 'https://rgvduarte.github.io/Ordia',
  locale: 'pt-PT',
  email: 'ola@ordia.pt',
  calcomLink: process.env.NEXT_PUBLIC_CALCOM_LINK || 'ordia/diagnostico',
  formspreeEndpoint:
    process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT || 'https://formspree.io/f/your-id',
  gaId: process.env.NEXT_PUBLIC_GA_ID || '',
  // Veículo comercial: a Ordia é uma marca explorada por esta sociedade.
  // EDITÁVEL: preencher NIF e sede com os dados do registo (racius/portal).
  legalEntity: {
    name: 'Flammable Unipessoal, Lda',
    nif: '', // NIPC, a preencher
    address: '', // sede social, a preencher
  },
};

export const nav = [
  { href: '/como-trabalhamos', label: 'Como trabalhamos' },
  { href: '/metodo', label: 'Método' },
  { href: '/servicos', label: 'Serviços' },
  { href: '/casos', label: 'Casos' },
  { href: '/sobre', label: 'Sobre' },
  { href: '/diario', label: 'Diário' },
];

// A oferta, em termos inequívocos (skill: offers + copywriting).
export const offer = {
  // Promessa única / USP, para o herói.
  headline: 'A sua casa e a sua vida em ordem, sem ter de gerir nada.',
  subhead:
    'A Ordia concebe o sistema que organiza a sua casa, a sua vida digital e o dia a dia, e dirige toda a execução. Uma só pessoa de confiança a tratar de tudo, para que recupere tempo e tranquilidade.',
  // Reversão de risco junto aos CTA.
  riskReversal: '30 minutos, sem compromisso. Sai com um plano claro, marque ou não connosco.',
  // Para quem é (afia o nicho).
  audience:
    'Para donos de segunda casa, famílias com duas carreiras e quem tem uma vida cheia e pouco tempo.',
};

// O que a Ordia entrega, em três frentes (uma oferta, três áreas, não quatro
// serviços a competir). Skill: copywriting (benefício, especificidade).
export const valueProps = [
  {
    title: 'Tempo e cabeça de volta',
    body: 'Deixa de gerir tarefas, fornecedores e decisões. A Ordia trata de tudo por si.',
  },
  {
    title: 'Um só ponto de confiança',
    body: 'Uma só pessoa pensa o conjunto, dirige a execução e responde por tudo, do início ao fim.',
  },
  {
    title: 'Ordem que se mantém',
    body: 'Não é arrumar uma vez. É um sistema desenhado para durar, com acompanhamento.',
  },
];

// Posicionamento: a Ordia concebe e dirige; coordena os profissionais que
// concretizam. É a visão e o ponto de confiança do cliente.
export const positioning = {
  eyebrow: 'Como trabalhamos',
  title: 'Da visão à execução, um só ponto de confiança.',
  lead: 'A Ordia concebe a visão, o conceito e os sistemas, e coordena os profissionais que os concretizam. Para si, a tranquilidade de uma só pessoa de confiança a pensar o conjunto e a garantir a coerência de tudo, do princípio ao fim.',
  points: [
    {
      title: 'Sempre do seu lado',
      body: 'Trabalhamos no seu interesse, com critério e gosto. O que lhe entregamos é discernimento e confiança, e a certeza de que cada escolha serve o resultado.',
    },
    {
      title: 'Um só interlocutor',
      body: 'Em vez de coordenar vários profissionais, fala com uma só pessoa, que pensa o conjunto e responde por ele do início ao fim.',
    },
    {
      title: 'Os profissionais certos, dirigidos por nós',
      body: 'Selecionamos e coordenamos os profissionais indicados para cada projeto, para que o resultado seja um só, coerente e à sua medida.',
    },
  ],
};

// Escada de valor: o caminho do cliente, com um só ponto de entrada.
export const valueLadder = [
  {
    step: '1',
    name: 'Diagnóstico',
    tag: 'Gratuito',
    body: 'Uma conversa de 30 minutos. Percebemos o que pesa e mostramos por onde começar. Sai com um plano claro.',
  },
  {
    step: '2',
    name: 'Projeto',
    tag: 'Ordem Digital ou Sistema Casa',
    body: 'Desenhamos o sistema e dirigimos a execução, num projeto com âmbito e orçamento definidos.',
  },
  {
    step: '3',
    name: 'Avença',
    tag: 'Concierge mensal',
    body: 'Para quem quer manter a ordem viva: somos o ponto de confiança que coordena tudo, todos os meses.',
  },
  {
    step: '4',
    name: 'Add-on',
    tag: 'Evento',
    body: 'Quando há um momento a celebrar, concebemos e dirigimos o evento, sem peso para si.',
  },
];

// A nossa promessa (reversão de risco honesta e cumprível). Skill: offers.
export const promisepoints = [
  {
    title: 'Diagnóstico sem compromisso',
    body: 'Se não virmos como ajudar, dizemos-lo. Não vendemos o que não faz sentido para si.',
  },
  {
    title: 'Plano e orçamento claros antes de avançar',
    body: 'Sabe exatamente o âmbito e o investimento antes de decidir. Sem surpresas.',
  },
  {
    title: 'Acompanhamos até estar a funcionar',
    body: 'Não fechamos um projeto enquanto o sistema não estiver a funcionar como combinado.',
  },
  {
    title: 'Discrição absoluta',
    body: 'O que vemos da sua casa e da sua vida fica connosco. Sempre.',
  },
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
    summary: 'Coordenamos a concretização, ao detalhe.',
    detail:
      'Selecionamos e coordenamos os profissionais que põem o sistema em prática e acompanhamos cada detalhe. A si chega o resultado pronto, simples de perceber e de usar.',
  },
  {
    n: '04',
    title: 'Manter',
    summary: 'Garantimos que a ordem dura.',
    detail:
      'A ordem é um hábito, não um momento. Com avenças e revisões periódicas, acompanhamos a manutenção do sistema, para que se mantenha vivo sem esforço seu.',
  },
];

export const services = [
  {
    slug: 'ordem-digital',
    name: 'Ordem Digital',
    promise: 'A vida digital com estrutura e regras.',
    scope:
      'Desenhamos a estrutura e as regras da sua vida digital, das fotografias aos documentos e às contas, e coordenamos a organização sempre que o volume o exige. Fica com um sistema que se mantém.',
    result:
      'Encontra tudo em segundos, com tranquilidade e sem caos digital.',
    priceFrom: 900,
    priceTo: 1800,
    unit: 'projeto',
  },
  {
    slug: 'sistema-casa',
    name: 'Sistema Casa',
    promise: 'A arquitetura da ordem em casa.',
    scope:
      'Desenhamos o sistema da sua casa e coordenamos a sua concretização, com os profissionais certos sob a nossa direção. Mais do que arrumar, é dar arquitetura à ordem.',
    result: 'Uma casa que se mantém em ordem sem depender de si.',
    priceFrom: 1500,
    priceTo: 4000,
    unit: 'projeto',
  },
  {
    slug: 'concierge',
    name: 'Concierge',
    promise: 'O ponto de confiança que coordena tudo.',
    scope:
      'Todos os meses, somos o seu ponto de confiança para a logística da casa e da vida: selecionamos, coordenamos e acompanhamos os fornecedores, para que nada lhe pese.',
    result: 'Liberta tempo e cabeça, com uma só pessoa de confiança a tratar de tudo.',
    priceFrom: 600,
    priceTo: 1500,
    unit: 'mês',
  },
  {
    slug: 'evento',
    name: 'Evento',
    promise: 'Direção criativa e coordenação.',
    scope:
      'Concebemos o evento, do conceito à narrativa e ao ambiente, e coordenamos os profissionais que o concretizam. Pensamos e conduzimos, para que a si fique apenas o prazer de receber.',
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

// EDITÁVEL: casos representativos. Substituir por dados e números reais de
// cliente (com autorização) antes de campanhas pagas. Nomes anonimizados.
export const cases = [
  {
    slug: 'villa-cascais',
    title: 'Villa em Cascais devolvida à calma',
    segment: 'Segunda casa',
    summary:
      'Uma villa usada poucos meses por ano, sempre em modo de emergência à chegada. A Ordia desenhou o sistema da casa e assumiu uma avença de concierge.',
    before: 'Chegadas caóticas, despensas sem regra, fornecedores dispersos.',
    after:
      'Casa pronta a cada chegada, inventário claro e um único ponto de contacto.',
    challenge:
      'A cada visita, os donos chegavam a uma casa fria: despensa por fazer, piscina por tratar, nove fornecedores diferentes a contactar à última hora. As primeiras 48 horas de cada estadia perdiam-se a organizar, em vez de a descansar.',
    approach:
      'Desenhámos o sistema da casa (inventário, despensa-base, manutenção) e passámos a dirigir os fornecedores numa só avença. Antes de cada chegada, coordenamos tudo para que a casa esteja pronta.',
    outcome:
      'Os donos passaram a chegar a uma casa a postos, com um só contacto para tudo. As estadias começam a descansar, não a resolver.',
    metrics: [
      { value: '9 → 1', label: 'fornecedores num só contacto' },
      { value: '48h → 0', label: 'tempo a preparar à chegada' },
      { value: '100%', label: 'chegadas com a casa pronta' },
    ],
    testimonial: {
      quote:
        'Chegamos e está tudo a postos. Mudou a forma como vivemos a casa.',
      author: 'Família M.',
    },
  },
  {
    slug: 'arquivo-digital-familia',
    title: 'Vinte anos de memórias, organizados',
    segment: 'Família',
    summary:
      'Milhares de fotografias e documentos espalhados por telemóveis, discos e contas. A Ordia desenhou a estrutura e dirigiu a limpeza e a proteção de tudo.',
    before: 'Duplicados, ficheiros perdidos, sem cópias de segurança.',
    after: 'Arquivo único, com nomes, datas e cópia segura na nuvem.',
    challenge:
      'Vinte anos de fotografias e documentos viviam em três telemóveis, dois discos antigos e várias contas. Procurar um documento podia levar uma tarde, e nada tinha cópia de segurança.',
    approach:
      'Desenhámos uma estrutura única (pastas, nomes, datas, regras) e dirigimos a consolidação: juntar tudo, eliminar duplicados e configurar uma cópia segura automática.',
    outcome:
      'A família passou a ter um só arquivo, encontrável em segundos e protegido. As memórias deixaram de estar reféns de um disco que podia falhar.',
    metrics: [
      { value: '~14.000', label: 'ficheiros consolidados' },
      { value: '3 → 1', label: 'dispositivos num só arquivo' },
      { value: 'minutos', label: 'para encontrar, antes horas' },
    ],
    testimonial: {
      quote:
        'Finalmente tudo organizado e seguro. Sinto que recuperei a minha memória.',
      author: 'Sofia R.',
    },
  },
  {
    slug: 'escritorio-pme',
    title: 'Uma PME que deixou de perder tempo',
    segment: 'Empresa',
    summary:
      'Documentos e processos sem dono. A Ordia desenhou uma estrutura partilhada e regras simples, e dirigiu a sua adoção pela equipa.',
    before: 'Versões duplicadas, pastas caóticas, tempo perdido a procurar.',
    after: 'Estrutura partilhada, regras claras e integração em minutos.',
    challenge:
      'Numa equipa pequena, cada pessoa guardava ficheiros à sua maneira. Procuravam-se versões, repetia-se trabalho, e integrar alguém novo demorava dias.',
    approach:
      'Desenhámos uma estrutura partilhada com regras de nomes e de versões, e acompanhámos a equipa na adoção, com um guia simples para se manter.',
    outcome:
      'A equipa passou a encontrar tudo no mesmo sítio e a integrar novos elementos em minutos, sem depender de ninguém em particular.',
    metrics: [
      { value: '~4h', label: 'por semana recuperadas' },
      { value: 'dias → min', label: 'para integrar alguém' },
      { value: '1', label: 'estrutura para toda a equipa' },
    ],
    testimonial: null,
  },
];

export const resources = [
  {
    slug: 'guia-por-onde-comecar',
    kind: 'Guia gratuito',
    format: 'guide',
    time: '5 min de leitura',
    title: 'Por onde começar a pôr ordem',
    promise:
      'Os três erros que mantêm a desordem e o primeiro passo para cada área da sua vida. Leia já o essencial aqui; receba o guia completo em PDF por email.',
    bullets: [
      'Os três erros que mantêm a desordem',
      'O método em quatro passos, resumido',
      'Uma lista para começar este fim de semana',
    ],
    // Conteúdo real e útil (preview do guia). Skill: lead-magnets.
    errors: [
      {
        title: 'Erro 1: confundir arrumar com organizar',
        body: 'Arrumar é pôr as coisas no sítio hoje. Organizar é criar um sistema que decide, sozinho, onde tudo fica. Sem sistema, a desordem volta sempre em semanas.',
      },
      {
        title: 'Erro 2: começar pelo mais visível, não pelo que mais pesa',
        body: 'Arruma-se a gaveta à vista e adia-se o arquivo digital ou os fornecedores, que são o que realmente rouba tempo e cabeça. Comece pelo que pesa, não pelo que se vê.',
      },
      {
        title: 'Erro 3: não definir quem mantém',
        body: 'Um sistema sem dono morre. Antes de arrumar, decida quem mantém cada área e com que rotina. É isso que faz a ordem durar.',
      },
    ],
    checklist: [
      'Escolha a área que mais lhe pesa: digital, casa ou recorrente.',
      'Escreva onde "vive" cada tipo de coisa (uma regra por categoria).',
      'Elimine duplicados e o que não serve, antes de arrumar.',
      'Defina uma rotina semanal de 15 minutos para manter.',
      'Marque um diagnóstico se quiser um sistema feito à medida.',
    ],
  },
  {
    slug: 'quiz-tipo-de-desordem',
    kind: 'Quiz',
    format: 'quiz',
    time: '2 minutos',
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

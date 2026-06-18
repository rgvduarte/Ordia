import type { Metadata } from 'next';
import { PageHeader } from '@/components/PageHeader';
import { CtaBanner } from '@/components/CtaBanner';

export const metadata: Metadata = {
  title: 'Sobre',
  description:
    'Daniela dos Santos Duarte, fundadora da Ordia. Quinze anos a construir e a gerir marcas de grande escala, agora ao serviço da ordem na vida, na casa e no património.',
};

const valores = [
  {
    title: 'Discrição',
    body: 'Entramos na sua vida e na sua casa com respeito e sem julgamento. O que vemos fica connosco.',
  },
  {
    title: 'Método',
    body: 'Não improvisamos. Cada decisão tem uma razão e cada sistema é pensado para durar muito depois de sairmos.',
  },
  {
    title: 'Cuidado',
    body: 'Tratamos da sua casa, dos seus dados e do seu tempo como se fossem nossos. Atenção ao detalhe em tudo.',
  },
];

const percurso = [
  {
    period: '2024 a hoje',
    role: 'Projetos independentes',
    org: 'Estratégia de marca, comunicação e storytelling',
    note: 'Desenho e implementação de estratégias de marca, reputação e identidade, da visão à execução.',
  },
  {
    period: '2023 a 2024',
    role: 'Gestora de Marca Famílias',
    org: "McDonald's Portugal",
    note: 'Liderança do segmento prioritário da marca, coordenando programas de grande visibilidade, quatro agências e parceiros nacionais e internacionais.',
  },
  {
    period: '2017 a 2022',
    role: 'Gestora de Comunicação e Marca',
    org: "McDonald's Portugal",
    note: 'Responsável pela estratégia de comunicação e marca, com gestão de um ecossistema alargado de agências e de budget de marketing considerável.',
  },
  {
    period: '2015 a 2017',
    role: 'Gestora de Projetos e Equipa',
    org: 'Youzz (Grupo Lift)',
    note: 'Gestão de uma carteira internacional (L’Oréal, Unilever, Nestlé, P&G, Samsung, Mercedes) e da equipa, com expansão a novos mercados.',
  },
  {
    period: '2012 a 2015',
    role: 'Gestora de Projetos',
    org: 'Youzz (Grupo Lift)',
    note: 'Planeamento e implementação de estratégias de comunicação e marketing para marcas de grande consumo.',
  },
  {
    period: '2010 a 2012',
    role: 'Gestora de Conteúdos Digitais',
    org: 'Microsoft Portugal',
    note: 'Estratégia digital e de conteúdos da plataforma MSN, em contexto tecnológico de escala global.',
  },
];

const competencias = [
  'Gestão de projetos e de budget',
  'Coordenação de fornecedores e parceiros',
  'Gestão de eventos',
  'Pensamento estratégico e método',
  'Gestão de stakeholders e de reputação',
  'Relação com clientes exigentes',
];

const formacao = [
  {
    title: 'Mestrado em Ciências da Comunicação',
    org: 'Universidade Católica Portuguesa',
    period: '2013 a 2015',
  },
  {
    title: 'Licenciatura em Comunicação Social e Cultural',
    org: 'Universidade Católica Portuguesa',
    period: '2009 a 2012',
  },
  {
    title: 'Diploma de Espanhol (DELE)',
    org: 'Instituto Cervantes de Lisboa',
    period: '2012',
  },
];

export default function SobrePage() {
  return (
    <>
      <PageHeader
        eyebrow="Sobre"
        title="Daniela dos Santos Duarte"
        intro="Fundadora da Ordia. Quinze anos a dar ordem e narrativa a marcas de grande escala, agora ao serviço da ordem na sua vida, na sua casa e no seu património."
      />

      {/* Bio + foto */}
      <section className="container-ordia pb-16">
        <div className="reveal grid gap-10 lg:grid-cols-[1fr_1.618fr] lg:items-start">
          <div className="overflow-hidden rounded-[10px] border border-umbra/10 bg-areia/60">
            {/* Foto editável: substituir por retrato da fundadora */}
            <div className="flex aspect-[1/1.2] items-center justify-center">
              <span className="label-mono text-umbra/40">Retrato de Daniela</span>
            </div>
          </div>
          <div className="space-y-5 text-phi2 text-taupe">
            <p>
              A Daniela passou mais de quinze anos em comunicação, marca e
              reputação, em contextos corporativos exigentes e de grande escala.
              Liderou a estratégia de marca da McDonald's Portugal, coordenou
              ecossistemas de agências, geriu budgets consideráveis e trabalhou
              com algumas das maiores marcas do mundo, da L'Oréal à Mercedes.
            </p>
            <p>
              Quem passa uma carreira a transformar complexidade em sistema,
              alinhar dezenas de partes em movimento e cuidar de cada detalhe
              sob pressão, aprende uma coisa simples: a ordem não é um luxo, é o
              que liberta. É essa disciplina, a de planear, coordenar e manter,
              que está na origem da Ordia.
            </p>
            <p>
              A Ordia nasce da convicção de que, por detrás de cada vida mais
              leve, existe um sistema bem pensado. Trazemos para a sua casa e
              para o seu património o mesmo rigor de método, a mesma discrição e
              o mesmo cuidado com a narrativa que construímos durante anos para
              marcas que perduram.
            </p>
            <p>
              Aqui, a Daniela é a arquiteta e diretora criativa do projeto, e o
              seu ponto único de confiança. Desenha a visão, o conceito e os
              sistemas, e escolhe e dirige os fornecedores que executam. Nunca a
              executora: sempre a estratega e a curadora que garante a coerência
              de tudo.
            </p>
            <a
              href="https://www.linkedin.com/in/dmsduarte/"
              target="_blank"
              rel="noopener noreferrer"
              className="link-underline text-[0.95rem] underline-offset-4 hover:underline"
            >
              Perfil de LinkedIn →
            </a>
          </div>
        </div>
      </section>

      {/* Percurso */}
      <section className="bg-linho py-20">
        <div className="container-ordia">
          <div className="reveal">
            <p className="label-mono">Percurso</p>
            <h2 className="mt-4 font-grotesk text-phi4 tracking-tighter text-umbra">
              Uma carreira a pôr ordem
            </h2>
          </div>
          <ol className="mt-12 space-y-px overflow-hidden rounded-[10px] border border-umbra/10 bg-umbra/10">
            {percurso.map((item) => (
              <li
                key={`${item.period}-${item.role}`}
                className="reveal grid gap-3 bg-gesso p-7 sm:grid-cols-[10rem_1fr] sm:gap-8 sm:p-8"
              >
                <span className="font-mono text-phi1 uppercase tracking-[0.12em] text-taupe">
                  {item.period}
                </span>
                <div>
                  <h3 className="font-grotesk text-phi2 tracking-tight text-umbra">
                    {item.role}
                  </h3>
                  <p className="text-[0.95rem] font-medium text-taupe">
                    {item.org}
                  </p>
                  <p className="mt-2 text-taupe">{item.note}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Competências + Formação */}
      <section className="container-ordia py-20">
        <div className="grid gap-12 lg:grid-cols-2">
          <div className="reveal">
            <p className="label-mono">O que trazemos</p>
            <h2 className="mt-4 font-grotesk text-phi3 tracking-tighter text-umbra">
              Competências ao serviço da sua ordem
            </h2>
            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
              {competencias.map((c) => (
                <li key={c} className="flex gap-3 text-umbra">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-umbra/70" />
                  <span>{c}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="reveal">
            <p className="label-mono">Formação</p>
            <h2 className="mt-4 font-grotesk text-phi3 tracking-tighter text-umbra">
              Base académica
            </h2>
            <ul className="mt-6 space-y-5">
              {formacao.map((f) => (
                <li key={f.title}>
                  <p className="font-grotesk text-phi2 tracking-tight text-umbra">
                    {f.title}
                  </p>
                  <p className="text-[0.95rem] text-taupe">
                    {f.org} · {f.period}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Valores */}
      <section className="container-ordia pb-12">
        <div className="grid gap-px overflow-hidden rounded-[10px] border border-umbra/10 bg-umbra/10 sm:grid-cols-3">
          {valores.map((v) => (
            <div key={v.title} className="reveal bg-gesso p-8">
              <h2 className="font-grotesk text-phi3 tracking-tighter text-umbra">
                {v.title}
              </h2>
              <p className="mt-3 text-taupe">{v.body}</p>
            </div>
          ))}
        </div>
      </section>

      <CtaBanner />

      {/* JSON-LD da fundadora */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Person',
            name: 'Daniela dos Santos Duarte',
            jobTitle: 'Fundadora da Ordia',
            worksFor: { '@type': 'Organization', name: 'Ordia' },
            alumniOf: 'Universidade Católica Portuguesa',
            sameAs: 'https://www.linkedin.com/in/dmsduarte/',
          }),
        }}
      />
    </>
  );
}

'use client';

import { useState } from 'react';
import Link from 'next/link';
import { LeadForm } from '@/components/LeadForm';

// Quiz de segmentação (lead magnet interativo). Seis perguntas, cada resposta
// pontua uma área. O resultado recomenda o ponto de partida e encaminha para
// o diagnóstico. Skill: lead-magnets (quiz/assessment) + free-tools.

type Area = 'digital' | 'casa' | 'concierge' | 'evento';

const questions: {
  q: string;
  options: { label: string; area: Area }[];
}[] = [
  {
    q: 'O que mais lhe pesa neste momento?',
    options: [
      { label: 'Fotografias, documentos e ficheiros num caos', area: 'digital' },
      { label: 'A casa nunca está como eu gostaria', area: 'casa' },
      { label: 'A logística do dia a dia (marcações, fornecedores, compras)', area: 'concierge' },
      { label: 'Uma receção ou evento que se aproxima', area: 'evento' },
    ],
  },
  {
    q: 'Quando precisa de um documento ou ficheiro importante...',
    options: [
      { label: 'Posso demorar imenso a encontrá-lo', area: 'digital' },
      { label: 'Está algalgures em casa, sem sítio certo', area: 'casa' },
      { label: 'Peço a alguém de confiança para tratar', area: 'concierge' },
      { label: 'Raramente, mas preciso de tudo a postos para receber', area: 'evento' },
    ],
  },
  {
    q: 'Como descreveria a sua casa hoje?',
    options: [
      { label: 'Fisicamente arrumada, o caos é digital', area: 'digital' },
      { label: 'Há divisões que nunca chegam a estar prontas', area: 'casa' },
      { label: 'Funciona, mas dependo de muita gente para a manter', area: 'concierge' },
      { label: 'Boa no dia a dia, mas não para grandes ocasiões', area: 'evento' },
    ],
  },
  {
    q: 'Quanto tempo perde por semana com tarefas e logística?',
    options: [
      { label: 'A procurar ficheiros e a organizar o digital', area: 'digital' },
      { label: 'A arrumar e a tratar de coisas da casa', area: 'casa' },
      { label: 'A coordenar fornecedores, marcações e recados', area: 'concierge' },
      { label: 'Pontualmente, a preparar momentos especiais', area: 'evento' },
    ],
  },
  {
    q: 'Se pudesse resolver UMA coisa esta semana...',
    options: [
      { label: 'Ter o meu arquivo digital seguro e encontrável', area: 'digital' },
      { label: 'Uma casa que se mantém em ordem sozinha', area: 'casa' },
      { label: 'Alguém de confiança a tratar do recorrente', area: 'concierge' },
      { label: 'Um evento tratado de A a Z, sem stress', area: 'evento' },
    ],
  },
  {
    q: 'O que procura na Ordia?',
    options: [
      { label: 'Pôr ordem e regras no digital, de uma vez', area: 'digital' },
      { label: 'Um sistema para a casa, à medida', area: 'casa' },
      { label: 'Uma relação contínua que me liberta tempo', area: 'concierge' },
      { label: 'Direção criativa para uma ocasião', area: 'evento' },
    ],
  },
];

const results: Record<
  Area,
  { service: string; title: string; body: string }
> = {
  digital: {
    service: 'Ordem Digital',
    title: 'O seu ponto de partida é a Ordem Digital',
    body: 'O que mais lhe pesa vive no digital. Desenhamos a estrutura e as regras das suas fotografias, documentos e contas, e dirigimos a organização. Fica com um arquivo seguro e encontrável em segundos.',
  },
  casa: {
    service: 'Sistema Casa',
    title: 'O seu ponto de partida é o Sistema Casa',
    body: 'A sua casa precisa de um sistema, não de mais uma arrumação. Desenhamos a arquitetura da ordem e dirigimos a sua instalação, para que a casa se mantenha em ordem sem depender de si.',
  },
  concierge: {
    service: 'Concierge',
    title: 'O seu ponto de partida é o Concierge',
    body: 'O que lhe pesa é o recorrente. Somos o seu ponto de confiança que coordena e dirige a logística da casa e da vida, todos os meses, para que recupere tempo e cabeça.',
  },
  evento: {
    service: 'Evento',
    title: 'O seu ponto de partida é o Evento',
    body: 'Tem um momento a celebrar. Concebemos o conceito e a narrativa e dirigimos os profissionais que o concretizam, para que a si fique apenas o prazer de receber.',
  },
};

export function Quiz() {
  const [current, setCurrent] = useState(0);
  const [scores, setScores] = useState<Record<Area, number>>({
    digital: 0,
    casa: 0,
    concierge: 0,
    evento: 0,
  });
  const [done, setDone] = useState(false);

  function choose(area: Area) {
    const next = { ...scores, [area]: scores[area] + 1 };
    setScores(next);
    if (current + 1 < questions.length) {
      setCurrent(current + 1);
    } else {
      setDone(true);
    }
  }

  function restart() {
    setScores({ digital: 0, casa: 0, concierge: 0, evento: 0 });
    setCurrent(0);
    setDone(false);
  }

  if (done) {
    const winner = (Object.keys(scores) as Area[]).reduce((a, b) =>
      scores[a] >= scores[b] ? a : b
    );
    const r = results[winner];
    return (
      <div className="reveal rounded-[10px] border border-umbra/10 bg-areia/40 p-8 sm:p-10">
        <p className="label-mono">O seu resultado</p>
        <h2 className="mt-4 font-grotesk text-phi3 tracking-tighter text-umbra">
          {r.title}
        </h2>
        <p className="mt-4 text-phi2 text-taupe">{r.body}</p>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Link
            href="/diagnostico"
            className="inline-flex justify-center rounded-md bg-umbra px-6 py-3.5 font-medium text-gesso transition-colors hover:bg-umbra/90"
          >
            Marcar diagnóstico gratuito
          </Link>
          <Link
            href="/servicos"
            className="inline-flex justify-center rounded-md border border-umbra/20 px-6 py-3.5 font-medium text-umbra transition-colors hover:bg-linho"
          >
            Ver {r.service}
          </Link>
        </div>
        <p className="mt-4 text-phi1 text-taupe">
          30 minutos, sem compromisso. Sai com um plano claro.
        </p>

        <div className="mt-8 border-t border-umbra/10 pt-8">
          <p className="font-grotesk text-phi2 tracking-tight text-umbra">
            Quer o plano detalhado por email?
          </p>
          <p className="mt-1 text-[0.95rem] text-taupe">
            Deixe o contacto e enviamos o resultado e o próximo passo para si.
          </p>
          <div className="mt-5">
            <LeadForm variant="compact" sourcePage={`quiz-resultado-${winner}`} />
          </div>
        </div>

        <button
          type="button"
          onClick={restart}
          className="mt-6 text-phi1 text-taupe underline-offset-4 hover:underline"
        >
          Repetir o quiz
        </button>
      </div>
    );
  }

  const question = questions[current];
  const progress = Math.round((current / questions.length) * 100);

  return (
    <div className="reveal rounded-[10px] border border-umbra/10 bg-areia/40 p-8 sm:p-10">
      {/* Progresso */}
      <div className="flex items-center justify-between text-phi1 text-taupe">
        <span className="font-mono uppercase tracking-[0.18em]">
          Pergunta {current + 1} de {questions.length}
        </span>
        <span className="font-mono">{progress}%</span>
      </div>
      <div className="mt-3 h-1 w-full overflow-hidden rounded-full bg-umbra/10">
        <div
          className="h-full bg-umbra transition-all duration-500"
          style={{ width: `${progress}%` }}
        />
      </div>

      <h2 className="mt-8 font-grotesk text-phi3 tracking-tighter text-umbra">
        {question.q}
      </h2>

      <ul className="mt-6 space-y-3">
        {question.options.map((o) => (
          <li key={o.label}>
            <button
              type="button"
              onClick={() => choose(o.area)}
              className="w-full rounded-[10px] border border-umbra/15 bg-gesso px-5 py-4 text-left text-umbra transition-colors hover:border-umbra/40 hover:bg-linho/60"
            >
              {o.label}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

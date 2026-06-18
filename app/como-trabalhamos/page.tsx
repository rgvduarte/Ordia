import type { Metadata } from 'next';
import Link from 'next/link';
import { PageHeader } from '@/components/PageHeader';
import { CtaBanner } from '@/components/CtaBanner';
import { GoldenSpiral } from '@/components/GoldenSpiral';
import { positioning } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Como trabalhamos',
  description:
    'A Ordia desenha e orquestra, não executa com as próprias mãos. É a arquiteta do sistema e o ponto único de confiança do cliente, que escolhe e dirige os fornecedores que executam.',
};

const comparativo = [
  {
    label: 'Empresas de execução',
    items: [
      'Vendem mãos, horas e capacidade',
      'Puxam o trabalho para o lado delas',
      'O cliente coordena vários fornecedores',
      'O foco é a tarefa, não o todo',
    ],
  },
  {
    label: 'Ordia',
    items: [
      'Vende gosto, critério e confiança',
      'Está sempre do lado do cliente',
      'Um só ponto de confiança para tudo',
      'O foco é a coerência do resultado',
    ],
    highlight: true,
  },
];

export default function ComoTrabalhamosPage() {
  return (
    <>
      <PageHeader
        eyebrow={positioning.eyebrow}
        title={positioning.title}
        intro={positioning.lead}
      />

      {/* Três princípios */}
      <section className="container-ordia relative pb-12">
        <GoldenSpiral className="pointer-events-none absolute right-0 top-0 hidden h-72 w-72 text-argila opacity-50 lg:block" />
        <div className="relative grid gap-px overflow-hidden rounded-[10px] border border-umbra/10 bg-umbra/10 sm:grid-cols-3">
          {positioning.points.map((p) => (
            <div key={p.title} className="reveal bg-gesso p-8">
              <h2 className="font-grotesk text-phi3 tracking-tighter text-umbra">
                {p.title}
              </h2>
              <p className="mt-3 text-taupe">{p.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Comparativo arquiteto vs pedreiro */}
      <section className="bg-linho py-20">
        <div className="container-ordia">
          <div className="reveal max-w-2xl">
            <p className="label-mono">A diferença</p>
            <h2 className="mt-4 font-grotesk text-phi4 tracking-tighter text-umbra">
              O arquiteto, não o pedreiro
            </h2>
            <p className="mt-4 text-taupe">
              Os fornecedores de execução não são concorrentes da Ordia. São
              quem a Ordia escolhe e dirige, em nome do cliente, para que o
              resultado seja um só, coerente e bem pensado.
            </p>
          </div>
          <div className="reveal mt-12 grid gap-6 md:grid-cols-2">
            {comparativo.map((col) => (
              <div
                key={col.label}
                className={`rounded-[10px] border p-8 ${
                  col.highlight
                    ? 'border-umbra/20 bg-argila'
                    : 'border-umbra/10 bg-gesso'
                }`}
              >
                <p className="label-mono text-umbra/70">{col.label}</p>
                <ul className="mt-5 space-y-3">
                  {col.items.map((item) => (
                    <li key={item} className="flex gap-3 text-umbra">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-umbra/60" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Encadeamento para o método */}
      <section className="container-ordia py-20">
        <div className="reveal grid gap-8 lg:grid-cols-[1.618fr_1fr] lg:items-center">
          <div>
            <h2 className="font-grotesk text-phi3 tracking-tighter text-umbra">
              Onde isto se traduz
            </h2>
            <p className="mt-4 text-taupe">
              Este posicionamento atravessa tudo o que fazemos. No método, a fase
              de Instalar é a Ordia a dirigir e supervisionar quem executa. Nos
              serviços, cada pacote é desenho e direção, nunca trabalho manual
              cobrado à hora.
            </p>
          </div>
          <div className="flex flex-col gap-3">
            <Link
              href="/metodo"
              className="inline-flex justify-center rounded-md border border-umbra/20 px-6 py-3.5 font-medium text-umbra transition-colors hover:bg-linho"
            >
              Ver o método
            </Link>
            <Link
              href="/servicos"
              className="inline-flex justify-center rounded-md border border-umbra/20 px-6 py-3.5 font-medium text-umbra transition-colors hover:bg-linho"
            >
              Ver os serviços
            </Link>
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}

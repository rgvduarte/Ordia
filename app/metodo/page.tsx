import type { Metadata } from 'next';
import { PageHeader } from '@/components/PageHeader';
import { CtaBanner } from '@/components/CtaBanner';
import { GoldenSpiral } from '@/components/GoldenSpiral';
import { methodSteps } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Método',
  description:
    'O método Ordia em quatro passos: Compreender, Desenhar, Instalar e Manter. Sistemas calmos que põem ordem e a fazem durar.',
};

export default function MetodoPage() {
  return (
    <>
      <PageHeader
        eyebrow="Como trabalhamos"
        title="Compreender, Desenhar, Instalar, Manter"
        intro="A ordem não nasce de um dia de arrumação. Nasce de um sistema bem pensado e de um hábito que se mantém. É isso que o nosso método garante."
      />

      <section className="container-ordia relative pb-12">
        <GoldenSpiral className="pointer-events-none absolute right-0 top-0 hidden h-80 w-80 text-argila opacity-50 lg:block" />
        <div className="relative space-y-px overflow-hidden rounded-[10px] border border-umbra/10 bg-umbra/10">
          {methodSteps.map((step) => (
            <div
              key={step.n}
              className="reveal grid gap-6 bg-gesso p-8 sm:p-10 lg:grid-cols-[1fr_1.618fr]"
            >
              <div className="flex items-baseline gap-5">
                <span className="font-mono text-phi4 text-argila">{step.n}</span>
                <h2 className="font-grotesk text-phi3 tracking-tighter text-umbra">
                  {step.title}
                </h2>
              </div>
              <div>
                <p className="font-grotesk text-phi2 text-umbra">{step.summary}</p>
                <p className="mt-3 text-taupe">{step.detail}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <CtaBanner />
    </>
  );
}

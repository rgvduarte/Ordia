import type { Metadata } from 'next';
import Link from 'next/link';
import { PageHeader } from '@/components/PageHeader';
import { CtaBanner } from '@/components/CtaBanner';
import { GoldenSpiral } from '@/components/GoldenSpiral';
import { positioning } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Como trabalhamos',
  description:
    'A Ordia concebe a visão, o conceito e os sistemas, e coordena os profissionais que os concretizam. Uma só pessoa de confiança a pensar o conjunto, do princípio ao fim.',
};

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

      {/* O nosso lugar */}
      <section className="bg-linho py-20">
        <div className="container-ordia grid gap-10 lg:grid-cols-[1fr_1.618fr]">
          <h2 className="reveal font-grotesk text-phi4 tracking-tighter text-umbra">
            O nosso lugar
          </h2>
          <div className="reveal space-y-5 text-phi2 text-taupe">
            <p>
              O valor da Ordia está na visão e na direção. Pensamos o conjunto,
              definimos os sistemas e escolhemos, em cada projeto, os
              profissionais indicados para o concretizar.
            </p>
            <p>
              Esses profissionais não são concorrência: são parceiros que a
              Ordia seleciona e coordena, em seu nome, para que o resultado seja
              um só, coerente e à altura. A si chega o essencial, uma só pessoa
              de confiança que responde por tudo, do início ao fim.
            </p>
          </div>
        </div>
      </section>

      {/* Onde isto se traduz */}
      <section className="container-ordia py-20">
        <div className="reveal grid gap-8 lg:grid-cols-[1.618fr_1fr] lg:items-center">
          <div>
            <h2 className="font-grotesk text-phi3 tracking-tighter text-umbra">
              Onde isto se traduz
            </h2>
            <p className="mt-4 text-taupe">
              Este princípio atravessa tudo o que fazemos. No método, é a Ordia
              a conceber e a coordenar cada fase. Nos serviços, cada proposta é
              visão e direção, pensadas para durar.
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

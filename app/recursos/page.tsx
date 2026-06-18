import type { Metadata } from 'next';
import Link from 'next/link';
import { PageHeader } from '@/components/PageHeader';
import { resources } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Recursos gratuitos',
  description:
    'Guias e ferramentas gratuitas da Ordia para começar a pôr a sua vida e a sua casa em ordem.',
};

export default function RecursosPage() {
  return (
    <>
      <PageHeader
        eyebrow="Recursos"
        title="Comece de graça"
        intro="Ferramentas práticas para dar o primeiro passo, sem custo e sem compromisso."
      />
      <section className="container-ordia grid gap-6 pb-12 md:grid-cols-2">
        {resources.map((r) => (
          <Link
            key={r.slug}
            href={`/recursos/${r.slug}`}
            className="reveal group flex flex-col rounded-[10px] border border-umbra/10 bg-areia/40 p-8 transition-colors hover:bg-areia/70"
          >
            <p className="label-mono">{r.kind}</p>
            <h2 className="mt-4 font-grotesk text-phi3 tracking-tighter text-umbra group-hover:opacity-80">
              {r.title}
            </h2>
            <p className="mt-3 text-taupe">{r.promise}</p>
            <span className="mt-6 inline-block text-umbra underline-offset-4 group-hover:underline">
              Aceder →
            </span>
          </Link>
        ))}
      </section>
    </>
  );
}

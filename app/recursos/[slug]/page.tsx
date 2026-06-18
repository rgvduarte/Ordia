import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { PageHeader } from '@/components/PageHeader';
import { LeadForm } from '@/components/LeadForm';
import { resources } from '@/lib/site';

export function generateStaticParams() {
  return resources.map((r) => ({ slug: r.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const r = resources.find((x) => x.slug === slug);
  if (!r) return {};
  return { title: r.title, description: r.promise };
}

export default async function RecursoPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const resource = resources.find((r) => r.slug === slug);
  if (!resource) notFound();

  return (
    <>
      <PageHeader eyebrow={resource.kind} title={resource.title} intro={resource.promise} />

      <section className="container-ordia grid gap-12 pb-12 lg:grid-cols-[1fr_1.2fr] lg:items-start">
        <div className="reveal">
          <p className="label-mono">O que vai receber</p>
          <ul className="mt-5 space-y-3">
            {resource.bullets.map((b) => (
              <li key={b} className="flex gap-3 text-umbra">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-umbra/70" />
                <span>{b}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="reveal rounded-[10px] border border-umbra/10 bg-areia/40 p-6 sm:p-8">
          <h2 className="font-grotesk text-phi3 tracking-tighter text-umbra">
            Receber agora
          </h2>
          <p className="mt-2 text-taupe">
            Deixe o seu contacto e enviamos já, junto com o link para o
            diagnóstico gratuito.
          </p>
          <div className="mt-6">
            <LeadForm variant="compact" sourcePage={`recurso-${resource.slug}`} />
          </div>
        </div>
      </section>
    </>
  );
}

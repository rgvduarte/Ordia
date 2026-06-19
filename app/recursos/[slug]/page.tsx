import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { PageHeader } from '@/components/PageHeader';
import { LeadForm } from '@/components/LeadForm';
import { Quiz } from '@/components/Quiz';
import { resources } from '@/lib/site';

type GuideResource = {
  slug: string;
  kind: string;
  title: string;
  promise: string;
  time?: string;
  bullets: string[];
  errors?: { title: string; body: string }[];
  checklist?: string[];
};

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
  const found = resources.find((r) => r.slug === slug);
  if (!found) notFound();
  const resource = found as GuideResource;
  const isQuiz = slug === 'quiz-tipo-de-desordem';

  return (
    <>
      <PageHeader
        eyebrow={resource.time ? `${resource.kind} · ${resource.time}` : resource.kind}
        title={resource.title}
        intro={resource.promise}
      />

      {isQuiz ? (
        <section className="container-ordia max-w-2xl pb-16">
          <Quiz />
        </section>
      ) : (
        <>
          {/* Guia: conteúdo real + captura para o PDF completo */}
          <section className="container-ordia grid gap-12 pb-8 lg:grid-cols-[1.4fr_1fr] lg:items-start">
            <div className="reveal space-y-8">
              <div>
                <p className="label-mono">Os três erros que mantêm a desordem</p>
                <div className="mt-5 space-y-6">
                  {resource.errors?.map((e) => (
                    <div key={e.title}>
                      <h2 className="font-grotesk text-phi2 tracking-tight text-umbra">
                        {e.title}
                      </h2>
                      <p className="mt-2 text-taupe">{e.body}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-[10px] border border-umbra/10 bg-areia/40 p-7">
                <p className="label-mono">Comece este fim de semana</p>
                <ol className="mt-5 space-y-3">
                  {resource.checklist?.map((item, idx) => (
                    <li key={item} className="flex gap-3 text-umbra">
                      <span className="font-mono text-taupe">
                        {String(idx + 1).padStart(2, '0')}
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ol>
              </div>
            </div>

            <div className="reveal rounded-[10px] border border-umbra/10 bg-gesso p-6 shadow-none sm:p-8 lg:sticky lg:top-24">
              <h2 className="font-grotesk text-phi3 tracking-tighter text-umbra">
                Receber o guia completo
              </h2>
              <p className="mt-2 text-taupe">
                Deixe o contacto e enviamos o guia em PDF, com a lista completa e
                o link para o diagnóstico gratuito.
              </p>
              <div className="mt-6">
                <LeadForm variant="compact" sourcePage={`recurso-${resource.slug}`} />
              </div>
            </div>
          </section>
        </>
      )}
    </>
  );
}

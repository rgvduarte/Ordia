import type { Metadata } from 'next';
import { PageHeader } from '@/components/PageHeader';
import { BeforeAfter } from '@/components/BeforeAfter';
import { CtaBanner } from '@/components/CtaBanner';
import { cases, testimonials } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Casos',
  description:
    'Estudos de caso da Ordia: antes e depois reais de organização de casa, arquivo digital e processos de empresa.',
};

export default function CasosPage() {
  return (
    <>
      <PageHeader
        eyebrow="Casos"
        title="Histórias com antes e depois"
        intro="Cada projeto começa com uma vida cheia e termina com um sistema que se mantém. Estes são alguns dos que mais nos orgulham."
      />

      <section className="container-ordia space-y-20 pb-12">
        {cases.map((c, i) => (
          <article key={c.slug} className="reveal">
            <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
              <div className={i % 2 === 1 ? 'lg:order-2' : ''}>
                <BeforeAfter before={c.before} after={c.after} />
              </div>
              <div className={i % 2 === 1 ? 'lg:order-1' : ''}>
                <p className="label-mono">{c.segment}</p>
                <h2 className="mt-4 font-grotesk text-phi3 tracking-tighter text-umbra">
                  {c.title}
                </h2>
                <p className="mt-4 text-taupe">{c.summary}</p>

                {/* Métricas do resultado */}
                <dl className="mt-7 grid grid-cols-3 gap-4 border-t border-umbra/10 pt-6">
                  {c.metrics.map((m) => (
                    <div key={m.label}>
                      <dt className="sr-only">{m.label}</dt>
                      <dd>
                        <span className="block font-grotesk text-phi3 leading-none tracking-tighter text-umbra">
                          {m.value}
                        </span>
                        <span className="mt-2 block text-phi1 text-taupe">
                          {m.label}
                        </span>
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>

            {/* Desafio, Abordagem, Resultado */}
            <div className="mt-10 grid gap-px overflow-hidden rounded-[10px] border border-umbra/10 bg-umbra/10 sm:grid-cols-3">
              {[
                { label: 'Desafio', body: c.challenge },
                { label: 'Abordagem', body: c.approach },
                { label: 'Resultado', body: c.outcome },
              ].map((block) => (
                <div key={block.label} className="bg-gesso p-7">
                  <p className="label-mono">{block.label}</p>
                  <p className="mt-3 text-taupe">{block.body}</p>
                </div>
              ))}
            </div>

            {c.testimonial ? (
              <figure className="mt-8 max-w-2xl border-l-2 border-rosa pl-6">
                <blockquote className="font-grotesk text-phi2 tracking-tight text-umbra">
                  “{c.testimonial.quote}”
                </blockquote>
                <figcaption className="mt-3 text-phi1 text-taupe">
                  {c.testimonial.author}, {c.segment}
                </figcaption>
              </figure>
            ) : null}
          </article>
        ))}
      </section>

      <section className="bg-linho py-24">
        <div className="container-ordia">
          <h2 className="reveal font-grotesk text-phi4 tracking-tighter text-umbra">
            Em palavras de quem viveu
          </h2>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {testimonials.map((t) => (
              <figure
                key={t.author}
                className="reveal flex flex-col rounded-[10px] border border-umbra/10 bg-gesso p-7"
              >
                <blockquote className="text-umbra">“{t.quote}”</blockquote>
                <figcaption className="mt-6 text-phi1">
                  <span className="font-medium text-umbra">{t.author}</span>
                  <span className="block text-taupe">{t.context}</span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}

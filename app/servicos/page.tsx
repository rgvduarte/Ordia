import type { Metadata } from 'next';
import { PageHeader } from '@/components/PageHeader';
import { CtaBanner } from '@/components/CtaBanner';
import { services } from '@/lib/site';
import { priceLabel, IVA_NOTE } from '@/lib/format';

export const metadata: Metadata = {
  title: 'Serviços',
  description:
    'Ordem Digital, Sistema Casa, Concierge e Evento. Âmbito, resultado e preço de cada serviço da Ordia. Valores sem IVA.',
};

const serviceJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  itemListElement: services.map((s, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    item: {
      '@type': 'Service',
      name: s.name,
      description: s.promise,
      provider: { '@type': 'LocalBusiness', name: 'Ordia' },
    },
  })),
};

export default function ServicosPage() {
  return (
    <>
      <PageHeader
        eyebrow="Serviços"
        title="Comece pelo diagnóstico. Crescemos a partir daí."
        intro="Tudo começa com um diagnóstico gratuito. Depois, a Ordia desenha e dirige um projeto pontual ou uma avença mensal, conforme o que mais pesa. Valores sem IVA."
      />

      <section className="container-ordia space-y-6 pb-12">
        {services.map((s) => (
          <article
            key={s.slug}
            className="reveal grid gap-8 rounded-[10px] border border-umbra/10 bg-areia/40 p-8 sm:p-10 lg:grid-cols-[1.618fr_1fr]"
          >
            <div>
              <p className="label-mono">
                {s.unit === 'mês'
                  ? 'Avença mensal'
                  : s.slug === 'evento'
                    ? 'Add-on'
                    : 'Projeto'}
              </p>
              <h2 className="mt-3 font-grotesk text-phi3 tracking-tighter text-umbra">
                {s.name}
              </h2>
              <p className="mt-2 text-phi2 text-umbra/80">{s.promise}</p>
              <dl className="mt-7 grid gap-6 sm:grid-cols-2">
                <div>
                  <dt className="label-mono">Âmbito</dt>
                  <dd className="mt-2 text-taupe">{s.scope}</dd>
                </div>
                <div>
                  <dt className="label-mono">Resultado</dt>
                  <dd className="mt-2 text-taupe">{s.result}</dd>
                </div>
              </dl>
            </div>
            <div className="flex flex-col justify-between gap-6 rounded-[10px] border border-umbra/10 bg-gesso p-6">
              <div>
                <p className="label-mono">Investimento</p>
                <p className="mt-3 font-grotesk text-phi3 tracking-tighter text-umbra">
                  {priceLabel(s.priceFrom, s.priceTo, s.unit)}
                </p>
                <p className="mt-2 text-phi1 text-taupe">{IVA_NOTE}</p>
              </div>
              <a
                href="/diagnostico"
                className="inline-flex justify-center rounded-md bg-umbra px-5 py-3 font-medium text-gesso transition-colors hover:bg-umbra/90"
              >
                Falar sobre este serviço
              </a>
            </div>
          </article>
        ))}
      </section>

      <CtaBanner />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />
    </>
  );
}

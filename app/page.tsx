import Link from 'next/link';
import { GoldenSpiral } from '@/components/GoldenSpiral';
import { BeforeAfter } from '@/components/BeforeAfter';
import { CtaBanner } from '@/components/CtaBanner';
import { LeadForm } from '@/components/LeadForm';
import {
  methodSteps,
  services,
  testimonials,
  cases,
  positioning,
  offer,
  valueProps,
} from '@/lib/site';
import { priceLabel, IVA_NOTE } from '@/lib/format';

export default function HomePage() {
  return (
    <>
      {/* Herói */}
      <section className="relative overflow-hidden bg-gesso">
        <GoldenSpiral className="pointer-events-none absolute right-[-6rem] top-[-4rem] h-[34rem] w-[34rem] text-argila opacity-60" />
        <div className="container-ordia relative grid gap-12 py-24 lg:grid-cols-[1.618fr_1fr] lg:items-center lg:py-32">
          <div className="reveal">
            <p className="label-mono">Gestão de casa e vida · Portugal</p>
            <h1 className="mt-6 font-grotesk text-phi4 leading-[1.04] tracking-tightest text-umbra sm:text-phi5">
              {offer.headline}
            </h1>
            <p className="mt-6 max-w-xl text-phi2 text-taupe">{offer.subhead}</p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/diagnostico"
                className="inline-flex justify-center rounded-md bg-umbra px-6 py-3.5 font-medium text-gesso transition-colors hover:bg-umbra/90"
              >
                Marcar diagnóstico gratuito
              </Link>
              <Link
                href="/como-trabalhamos"
                className="inline-flex justify-center rounded-md border border-umbra/20 px-6 py-3.5 font-medium text-umbra transition-colors hover:bg-linho"
              >
                Como trabalhamos
              </Link>
            </div>
            <p className="mt-4 text-phi1 text-taupe">{offer.riskReversal}</p>
          </div>

          <div className="reveal rounded-[14px] border border-umbra/10 bg-areia/60 p-8">
            <p className="label-mono">O que ganha</p>
            <ul className="mt-5 space-y-5">
              {valueProps.map((v) => (
                <li key={v.title}>
                  <p className="font-grotesk text-phi2 tracking-tight text-umbra">
                    {v.title}
                  </p>
                  <p className="mt-1 text-[0.95rem] text-taupe">{v.body}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Para quem */}
      <section className="border-y border-umbra/10 bg-linho">
        <div className="container-ordia py-6">
          <p className="reveal text-center font-grotesk text-phi2 tracking-tight text-umbra">
            {offer.audience}
          </p>
        </div>
      </section>

      {/* O problema */}
      <section className="container-ordia py-20">
        <div className="reveal grid gap-10 lg:grid-cols-[1fr_1.618fr]">
          <h2 className="font-grotesk text-phi3 tracking-tighter text-umbra">
            O peso invisível da desordem
          </h2>
          <div className="space-y-5 text-phi2 text-taupe">
            <p>
              A vida acumula. Ficheiros que não se encontram, divisões que nunca
              chegam a estar prontas, fornecedores espalhados, tarefas que
              voltam sempre. Não é falta de vontade, é falta de sistema.
            </p>
            <p>
              A Ordia existe para resolver isso de raiz. Desenhamos a
              estrutura, coordenamos quem a concretiza e garantimos que a ordem
              dura muito depois de o projeto fechar.
            </p>
          </div>
        </div>
      </section>

      {/* Posicionamento: desenho e orquestração, não execução */}
      <section className="container-ordia pb-12">
        <div className="reveal rounded-[14px] border border-umbra/10 bg-areia/40 p-8 sm:p-12">
          <div className="grid gap-10 lg:grid-cols-[1.618fr_1fr] lg:items-start">
            <div>
              <p className="label-mono">{positioning.eyebrow}</p>
              <h2 className="mt-4 font-grotesk text-phi3 tracking-tighter text-umbra">
                {positioning.title}
              </h2>
              <p className="mt-4 max-w-xl text-taupe">{positioning.lead}</p>
              <Link
                href="/como-trabalhamos"
                className="mt-6 inline-block text-umbra underline-offset-4 hover:underline"
              >
                Como trabalhamos, em detalhe →
              </Link>
            </div>
            <ul className="space-y-5">
              {positioning.points.map((p) => (
                <li key={p.title}>
                  <p className="font-grotesk text-phi2 tracking-tight text-umbra">
                    {p.title}
                  </p>
                  <p className="mt-1 text-[0.95rem] text-taupe">{p.body}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Método em 4 passos */}
      <section className="bg-linho py-24">
        <div className="container-ordia">
          <div className="reveal flex items-end justify-between gap-6">
            <div>
              <p className="label-mono">Como trabalhamos</p>
              <h2 className="mt-4 font-grotesk text-phi4 tracking-tighter text-umbra">
                Um método em quatro passos
              </h2>
            </div>
            <Link
              href="/metodo"
              className="hidden whitespace-nowrap text-umbra underline-offset-4 hover:underline sm:block"
            >
              Ver em detalhe
            </Link>
          </div>

          <div className="mt-14 grid gap-px overflow-hidden rounded-[10px] border border-umbra/10 bg-umbra/10 sm:grid-cols-2 lg:grid-cols-4">
            {methodSteps.map((step) => (
              <div key={step.n} className="reveal bg-gesso p-7">
                <span className="font-mono text-phi3 text-argila">{step.n}</span>
                <h3 className="mt-4 font-grotesk text-phi3 tracking-tighter text-umbra">
                  {step.title}
                </h3>
                <p className="mt-3 text-taupe">{step.summary}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Serviços: uma oferta, aplicada onde mais pesa */}
      <section className="container-ordia py-24">
        <div className="reveal max-w-2xl">
          <p className="label-mono">Onde a Ordia entra</p>
          <h2 className="mt-4 font-grotesk text-phi4 tracking-tighter text-umbra">
            Um estúdio, um método, aplicado onde mais pesa
          </h2>
          <p className="mt-4 text-taupe">
            Começa sempre com um diagnóstico. A partir daí, desenhamos e
            dirigimos o que precisa, num projeto pontual ou numa avença mensal.
          </p>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {services.map((s) => (
            <article
              key={s.slug}
              className="reveal flex flex-col rounded-[10px] border border-umbra/10 bg-areia/40 p-8"
            >
              <p className="label-mono">
                {s.unit === 'mês'
                  ? 'Avença mensal'
                  : s.slug === 'evento'
                    ? 'Add-on'
                    : 'Projeto'}
              </p>
              <h3 className="mt-3 font-grotesk text-phi3 tracking-tighter text-umbra">
                {s.name}
              </h3>
              <p className="mt-2 text-taupe">{s.promise}</p>
              <p className="mt-5 font-mono text-[0.95rem] text-umbra">
                {priceLabel(s.priceFrom, s.priceTo, s.unit)}
              </p>
              <p className="mt-1 text-phi1 text-taupe">{IVA_NOTE}</p>
            </article>
          ))}
        </div>
        <div className="reveal mt-10">
          <Link
            href="/servicos"
            className="link-underline underline-offset-4 hover:underline"
          >
            Ver âmbito e resultados de cada serviço →
          </Link>
        </div>
      </section>

      {/* Galeria antes e depois */}
      <section className="bg-linho py-24">
        <div className="container-ordia">
          <div className="reveal">
            <p className="label-mono">Antes e depois</p>
            <h2 className="mt-4 font-grotesk text-phi4 tracking-tighter text-umbra">
              A diferença vê-se
            </h2>
            <p className="mt-4 max-w-xl text-taupe">
              Arraste para comparar. As imagens reais dos casos substituem estes
              painéis assim que estiverem disponíveis.
            </p>
          </div>
          <div className="reveal mt-12 grid gap-8 md:grid-cols-2">
            <BeforeAfter
              before="Despensa sem regra"
              after="Inventário claro"
              caption="Sistema Casa · Cascais"
            />
            <BeforeAfter
              before="Arquivo digital disperso"
              after="Tudo num só lugar"
              caption="Ordem Digital · Lisboa"
            />
          </div>
          <div className="reveal mt-10">
            <Link
              href="/casos"
              className="link-underline underline-offset-4 hover:underline"
            >
              Ver estudos de caso →
            </Link>
          </div>
        </div>
      </section>

      {/* Depoimentos */}
      <section className="container-ordia py-24">
        <div className="reveal">
          <p className="label-mono">Quem confiou</p>
          <h2 className="mt-4 font-grotesk text-phi4 tracking-tighter text-umbra">
            O que dizem
          </h2>
        </div>
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
      </section>

      {/* Íman de leads */}
      <section className="container-ordia my-12">
        <div className="reveal grid gap-12 rounded-[14px] border border-umbra/10 bg-areia/40 p-8 sm:p-12 lg:grid-cols-[1fr_1.2fr]">
          <div>
            <p className="label-mono">Recurso gratuito</p>
            <h2 className="mt-4 font-grotesk text-phi3 tracking-tighter text-umbra">
              Guia: por onde começar a pôr ordem
            </h2>
            <p className="mt-4 text-taupe">
              Deixe o seu contacto e enviamos o guia gratuito, mais o link para
              marcar o diagnóstico. Sem spam, é só o que ajuda.
            </p>
            <ul className="mt-6 space-y-2 text-[0.95rem] text-taupe">
              <li>· Os três erros que mantêm a desordem</li>
              <li>· O método em quatro passos, resumido</li>
              <li>· Uma lista para começar este fim de semana</li>
            </ul>
          </div>
          <div className="rounded-[10px] border border-umbra/10 bg-gesso p-6 sm:p-8">
            <LeadForm variant="compact" sourcePage="home-iman" />
          </div>
        </div>
      </section>

      <CtaBanner />

      {/* JSON-LD dos casos para SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'ItemList',
            itemListElement: cases.map((c, i) => ({
              '@type': 'ListItem',
              position: i + 1,
              name: c.title,
            })),
          }),
        }}
      />
    </>
  );
}

import Link from 'next/link';
import { GoldenSpiral } from '@/components/GoldenSpiral';

export function CtaBanner() {
  return (
    <section className="container-ordia my-24">
      <div className="reveal relative overflow-hidden rounded-[14px] bg-argila px-8 py-16 sm:px-16">
        <GoldenSpiral className="pointer-events-none absolute -right-10 -top-10 h-64 w-64 text-umbra/30" />
        <div className="relative max-w-xl">
          <p className="label-mono">Próximo passo</p>
          <h2 className="mt-4 font-grotesk text-phi4 leading-[1.05] tracking-tighter text-umbra">
            Comece por uma conversa de 30 minutos
          </h2>
          <p className="mt-4 text-umbra/80">
            Um diagnóstico gratuito, sem compromisso. Percebemos o que pesa e
            mostramos por onde começar. Saia da conversa com clareza, marque ou
            não marque connosco.
          </p>
          <Link
            href="/diagnostico"
            className="mt-8 inline-flex rounded-md bg-umbra px-6 py-3.5 font-medium text-gesso transition-colors hover:bg-umbra/90"
          >
            Marcar diagnóstico gratuito
          </Link>
          <p className="mt-4 text-phi1 text-umbra/70">
            30 minutos, sem compromisso. Sai com um plano claro.
          </p>
        </div>
      </div>
    </section>
  );
}

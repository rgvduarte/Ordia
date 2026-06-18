import type { Metadata } from 'next';
import Link from 'next/link';
import { GoldenSpiral } from '@/components/GoldenSpiral';
import { ConversionPing } from '@/components/ConversionPing';

export const metadata: Metadata = {
  title: 'Obrigado',
  description: 'Recebemos o seu contacto. Entramos em contacto em breve.',
  robots: { index: false, follow: false },
};

export default function ObrigadoPage() {
  return (
    <section className="container-ordia relative flex min-h-[60vh] flex-col items-center justify-center py-24 text-center">
      <ConversionPing />
      <GoldenSpiral className="pointer-events-none absolute top-10 h-72 w-72 text-argila opacity-40" />
      <div className="relative max-w-xl">
        <p className="label-mono">Recebido</p>
        <h1 className="mt-5 font-grotesk text-phi4 leading-[1.05] tracking-tightest text-umbra sm:text-phi5">
          Obrigado. Falamos em breve.
        </h1>
        <p className="mt-6 text-phi2 text-taupe">
          Recebemos o seu pedido e respondemos no mesmo dia útil com os próximos
          passos. Se quiser adiantar, escolha já um horário para o diagnóstico.
        </p>
        <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
          <Link
            href="/diagnostico"
            className="inline-flex justify-center rounded-md bg-umbra px-6 py-3.5 font-medium text-gesso transition-colors hover:bg-umbra/90"
          >
            Escolher horário
          </Link>
          <Link
            href="/"
            className="inline-flex justify-center rounded-md border border-umbra/20 px-6 py-3.5 font-medium text-umbra transition-colors hover:bg-linho"
          >
            Voltar ao início
          </Link>
        </div>
      </div>
    </section>
  );
}

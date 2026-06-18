import type { Metadata } from 'next';
import { PageHeader } from '@/components/PageHeader';
import { CalEmbed } from '@/components/CalEmbed';
import { LeadForm } from '@/components/LeadForm';

export const metadata: Metadata = {
  title: 'Diagnóstico gratuito',
  description:
    'Marque um diagnóstico gratuito de 30 minutos com a Ordia. Sem compromisso: percebemos o que pesa e mostramos por onde começar.',
};

export default function DiagnosticoPage() {
  return (
    <>
      <PageHeader
        eyebrow="Diagnóstico gratuito"
        title="30 minutos para ganhar clareza"
        intro="Escolha um horário no calendário, ou deixe o seu contacto e tratamos do resto. Sem compromisso, sem pressão."
      />

      <section className="container-ordia grid gap-12 pb-12 lg:grid-cols-[1.618fr_1fr] lg:items-start">
        <div className="reveal">
          <h2 className="mb-5 font-grotesk text-phi3 tracking-tighter text-umbra">
            Escolher horário
          </h2>
          <CalEmbed />
        </div>

        <div className="reveal rounded-[10px] border border-umbra/10 bg-areia/40 p-6 sm:p-8">
          <h2 className="font-grotesk text-phi3 tracking-tighter text-umbra">
            Ou deixe o contacto
          </h2>
          <p className="mt-2 text-taupe">
            Respondemos no mesmo dia útil com horários e o guia gratuito.
          </p>
          <div className="mt-6">
            <LeadForm variant="full" sourcePage="diagnostico" />
          </div>
        </div>
      </section>
    </>
  );
}

import type { Metadata } from 'next';
import { PageHeader } from '@/components/PageHeader';
import { siteConfig } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Termos',
  description: 'Termos de utilização do site da Ordia.',
};

export default function TermosPage() {
  const { legalEntity, email } = siteConfig;
  return (
    <>
      <PageHeader
        eyebrow="Legal"
        title="Termos de utilização"
        intro="Condições de utilização deste site. Modelo editável, a adaptar antes da publicação em produção."
      />
      <section className="container-ordia max-w-3xl space-y-8 pb-16 text-umbra/90">
        <Block title="Identificação">
          A Ordia é uma marca explorada por <strong>{legalEntity.name}</strong>,
          a sociedade que está por detrás da marca como veículo comercial
          {legalEntity.nif ? `, com o NIPC ${legalEntity.nif}` : ''}
          {legalEntity.address ? ` e sede em ${legalEntity.address}` : ''}. Para
          qualquer contacto, escreva para{' '}
          <a href={`mailto:${email}`} className="underline">
            {email}
          </a>
          .
        </Block>
        <Block title="Utilização do site">
          O conteúdo deste site destina-se a informar sobre os serviços da Ordia.
          Os valores apresentados são indicativos, com IVA incluído, e podem
          variar consoante o âmbito de cada projeto.
        </Block>
        <Block title="Propriedade intelectual">
          Os textos, a marca Ordia e os elementos visuais são propriedade de{' '}
          {legalEntity.name} e não podem ser reproduzidos sem autorização.
        </Block>
        <Block title="Responsabilidade">
          Esforçamo-nos por manter a informação correta e atualizada, mas não
          garantimos a ausência de erros. A relação contratual é definida em
          proposta própria a cada cliente, celebrada com {legalEntity.name}.
        </Block>
        <Block title="Lei aplicável">
          Aplica-se a lei portuguesa. Qualquer litígio será resolvido nos
          tribunais competentes em Portugal.
        </Block>
      </section>
    </>
  );
}

function Block({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h2 className="font-grotesk text-phi3 tracking-tighter text-umbra">
        {title}
      </h2>
      <p className="mt-3 text-taupe">{children}</p>
    </div>
  );
}

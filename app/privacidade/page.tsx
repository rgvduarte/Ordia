import type { Metadata } from 'next';
import { PageHeader } from '@/components/PageHeader';
import { siteConfig } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Política de privacidade',
  description:
    'Como a Ordia trata os seus dados pessoais, em conformidade com o RGPD.',
};

export default function PrivacidadePage() {
  return (
    <>
      <PageHeader
        eyebrow="RGPD"
        title="Política de privacidade"
        intro="A sua privacidade importa-nos. Aqui explicamos que dados recolhemos, porquê e quais os seus direitos."
      />
      <section className="container-ordia max-w-3xl space-y-8 pb-16 text-umbra/90">
        <Block title="Responsável pelo tratamento">
          {siteConfig.legalEntity.name}, sociedade que explora a marca Ordia
          {siteConfig.legalEntity.nif
            ? ` (NIPC ${siteConfig.legalEntity.nif})`
            : ''}
          , é a responsável pelo tratamento dos dados recolhidos neste site.
          Para qualquer questão, contacte{' '}
          <a href={`mailto:${siteConfig.email}`} className="underline">
            {siteConfig.email}
          </a>
          .
        </Block>
        <Block title="Que dados recolhemos">
          Recolhemos os dados que nos fornece nos formulários (nome, email,
          telefone, segmento e mensagem) e dados técnicos de origem (página,
          parâmetros UTM e referrer) para perceber como chegou até nós.
        </Block>
        <Block title="Para que usamos">
          Usamos os seus dados apenas para responder ao seu pedido, marcar o
          diagnóstico e, com o seu consentimento, enviar conteúdos úteis. Nunca
          vendemos os seus dados.
        </Block>
        <Block title="Onde ficam guardados">
          Os dados são tratados por fornecedores de serviços (formulários,
          email e analítica) com garantias adequadas. Sempre que possível,
          privilegiamos o armazenamento em servidores na União Europeia.
        </Block>
        <Block title="Os seus direitos">
          Tem direito a aceder, corrigir, apagar ou limitar o tratamento dos
          seus dados, bem como a retirar o consentimento a qualquer momento.
          Para exercer estes direitos, escreva-nos.
        </Block>
        <Block title="Cookies">
          Usamos cookies essenciais e, mediante consentimento, cookies de
          analítica para melhorar o site. Pode gerir as suas preferências no seu
          navegador.
        </Block>
        <p className="text-phi1 text-taupe">
          Este texto é um modelo editável. Adapte-o à sua realidade jurídica
          antes de publicar em produção.
        </p>
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

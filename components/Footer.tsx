import Link from 'next/link';
import { siteConfig } from '@/lib/site';
import { NewsletterForm } from '@/components/NewsletterForm';

export function Footer() {
  return (
    <footer className="mt-24 border-t border-umbra/10 bg-linho">
      <div className="container-ordia py-16">
        <div className="grid gap-12 md:grid-cols-[1.618fr_1fr]">
          <div className="max-w-md">
            <p className="font-grotesk text-phi3 tracking-tighter text-umbra">
              Fique a par do que escrevemos
            </p>
            <p className="mt-3 text-taupe">
              Notas sobre organização, casa e vida com método. Sem ruído, só o
              que vale a pena. Cancela quando quiser.
            </p>
            <div className="mt-6">
              <NewsletterForm />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8">
            <div>
              <p className="label-mono">Estúdio</p>
              <ul className="mt-4 space-y-2 text-[0.95rem] text-taupe">
                <li>
                  <Link href="/como-trabalhamos" className="hover:text-umbra">
                    Como trabalhamos
                  </Link>
                </li>
                <li>
                  <Link href="/metodo" className="hover:text-umbra">
                    Método
                  </Link>
                </li>
                <li>
                  <Link href="/servicos" className="hover:text-umbra">
                    Serviços
                  </Link>
                </li>
                <li>
                  <Link href="/casos" className="hover:text-umbra">
                    Casos
                  </Link>
                </li>
                <li>
                  <Link href="/sobre" className="hover:text-umbra">
                    Sobre
                  </Link>
                </li>
                <li>
                  <Link href="/diario" className="hover:text-umbra">
                    Diário
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <p className="label-mono">Contacto</p>
              <ul className="mt-4 space-y-2 text-[0.95rem] text-taupe">
                <li>
                  <Link href="/diagnostico" className="hover:text-umbra">
                    Diagnóstico gratuito
                  </Link>
                </li>
                <li>
                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="hover:text-umbra"
                  >
                    {siteConfig.email}
                  </a>
                </li>
                <li>
                  <Link href="/privacidade" className="hover:text-umbra">
                    Privacidade
                  </Link>
                </li>
                <li>
                  <Link href="/termos" className="hover:text-umbra">
                    Termos
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="rule mt-12 flex flex-col gap-2 pt-6 text-phi1 text-taupe sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} Ordia, marca de{' '}
            {siteConfig.legalEntity.name}. Todos os direitos reservados.
          </p>
          <p className="font-mono uppercase tracking-[0.18em]">
            Lisboa, Portugal
          </p>
        </div>
      </div>
    </footer>
  );
}

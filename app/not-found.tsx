import Link from 'next/link';

export default function NotFound() {
  return (
    <section className="container-ordia flex min-h-[60vh] flex-col items-center justify-center py-24 text-center">
      <p className="font-mono text-phi4 text-argila">404</p>
      <h1 className="mt-4 font-grotesk text-phi3 tracking-tighter text-umbra">
        Esta página não existe
      </h1>
      <p className="mt-3 max-w-md text-taupe">
        O caminho que procura pode ter mudado de lugar. Voltemos ao princípio.
      </p>
      <Link
        href="/"
        className="mt-8 inline-flex rounded-md bg-umbra px-6 py-3.5 font-medium text-gesso transition-colors hover:bg-umbra/90"
      >
        Voltar ao início
      </Link>
    </section>
  );
}

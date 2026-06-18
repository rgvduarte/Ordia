import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { CtaBanner } from '@/components/CtaBanner';
import { posts } from '@/lib/site';
import { formatDate } from '@/lib/format';

export function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
    openGraph: { title: post.title, description: post.excerpt, type: 'article' },
  };
}

export default async function PostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);
  if (!post) notFound();

  return (
    <>
      <article className="container-ordia max-w-3xl pb-12 pt-20 lg:pt-28">
        <div className="reveal">
          <Link
            href="/diario"
            className="text-phi1 text-taupe underline-offset-4 hover:underline"
          >
            ← Diário
          </Link>
          <div className="mt-6 flex flex-wrap items-center gap-3 text-phi1 text-taupe">
            <span className="font-mono uppercase tracking-[0.18em]">
              {formatDate(post.date)}
            </span>
            <span aria-hidden>·</span>
            <span>{post.readingTime} de leitura</span>
          </div>
          <h1 className="mt-4 font-grotesk text-phi4 leading-[1.08] tracking-tightest text-umbra">
            {post.title}
          </h1>
        </div>

        <div className="reveal mt-10 space-y-6 text-phi2 text-umbra/90">
          <p className="text-taupe">{post.excerpt}</p>
          {/* Corpo do artigo (placeholder editável). Substituir por conteúdo real. */}
          <p>
            Este é o corpo do artigo, pronto a editar. Aqui desenvolve-se a
            ideia com exemplos concretos, passos práticos e o tom calmo e
            preciso da Ordia.
          </p>
          <h2 className="font-grotesk text-phi3 tracking-tighter text-umbra">
            Por onde começar
          </h2>
          <p>
            Comece pelo que mais pesa. Um sistema simples, aplicado com
            consistência, vale mais do que uma arrumação perfeita que não dura.
          </p>
          <p>
            Quando estiver pronto para um sistema feito à sua medida, o
            diagnóstico gratuito é o primeiro passo.
          </p>
        </div>
      </article>

      <CtaBanner />
    </>
  );
}

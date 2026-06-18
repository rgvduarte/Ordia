import type { Metadata } from 'next';
import Link from 'next/link';
import { PageHeader } from '@/components/PageHeader';
import { posts } from '@/lib/site';
import { formatDate } from '@/lib/format';

export const metadata: Metadata = {
  title: 'Diário',
  description:
    'O diário da Ordia: notas sobre organização de casa, arquivo digital, rotinas e gestão de vida com método.',
};

export default function DiarioPage() {
  return (
    <>
      <PageHeader
        eyebrow="Diário"
        title="Notas sobre ordem e vida"
        intro="Ideias práticas e reflexões sobre como pôr a vida, a casa e o digital em ordem, e mantê-los assim."
      />

      <section className="container-ordia pb-12">
        <ul className="space-y-px overflow-hidden rounded-[10px] border border-umbra/10 bg-umbra/10">
          {posts.map((post) => (
            <li key={post.slug} className="reveal bg-gesso">
              <Link
                href={`/diario/${post.slug}`}
                className="group block p-8 transition-colors hover:bg-linho/50 sm:p-10"
              >
                <div className="flex flex-wrap items-center gap-3 text-phi1 text-taupe">
                  <span className="font-mono uppercase tracking-[0.18em]">
                    {formatDate(post.date)}
                  </span>
                  <span aria-hidden>·</span>
                  <span>{post.readingTime} de leitura</span>
                </div>
                <h2 className="mt-3 font-grotesk text-phi3 tracking-tighter text-umbra group-hover:opacity-80">
                  {post.title}
                </h2>
                <p className="mt-3 max-w-2xl text-taupe">{post.excerpt}</p>
                <span className="mt-4 inline-block text-umbra underline-offset-4 group-hover:underline">
                  Ler →
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}

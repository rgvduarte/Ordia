'use client';

import { useState } from 'react';
import { siteConfig } from '@/lib/site';

export function NewsletterForm() {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'done' | 'error'>(
    'idle'
  );

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus('submitting');
    const data = new FormData(e.currentTarget);
    data.set('source_page', 'newsletter');
    try {
      const res = await fetch(siteConfig.formspreeEndpoint, {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' },
      });
      setStatus(res.ok ? 'done' : 'error');
    } catch {
      setStatus('error');
    }
  }

  if (status === 'done') {
    return (
      <p className="text-[0.95rem] text-umbra">
        Obrigado. Está subscrito ao diário da Ordia.
      </p>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3 sm:flex-row">
      <label htmlFor="newsletter-email" className="sr-only">
        Email
      </label>
      <input
        id="newsletter-email"
        name="email"
        type="email"
        required
        placeholder="o.seu@email.pt"
        className="flex-1 rounded-md border border-umbra/20 bg-gesso px-4 py-2.5 text-umbra focus:border-umbra/50 focus:outline-none"
      />
      <button
        type="submit"
        disabled={status === 'submitting'}
        className="rounded-md bg-umbra px-5 py-2.5 font-medium text-gesso transition-colors hover:bg-umbra/90 disabled:opacity-60"
      >
        {status === 'submitting' ? 'A subscrever...' : 'Subscrever'}
      </button>
      {status === 'error' ? (
        <p role="alert" className="text-[0.85rem] text-[#A65A4C]">
          Tente novamente.
        </p>
      ) : null}
    </form>
  );
}

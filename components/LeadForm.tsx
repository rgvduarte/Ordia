'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { siteConfig, segments } from '@/lib/site';

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

type Status = 'idle' | 'submitting' | 'error';

// Formulário de captura de leads. Em estático, submete ao Formspree e,
// em caso de sucesso, redireciona para /obrigado (dispara conversão lá).
export function LeadForm({
  variant = 'full',
  sourcePage,
}: {
  variant?: 'full' | 'compact';
  sourcePage: string;
}) {
  const [status, setStatus] = useState<Status>('idle');
  const [utm, setUtm] = useState<Record<string, string>>({});

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    setUtm({
      utm_source: params.get('utm_source') || '',
      utm_medium: params.get('utm_medium') || '',
      utm_campaign: params.get('utm_campaign') || '',
      referrer: document.referrer || '',
    });
  }, []);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus('submitting');
    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch(siteConfig.formspreeEndpoint, {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' },
      });
      if (res.ok) {
        window.location.href = `${basePath}/obrigado/`;
        return;
      }
      setStatus('error');
    } catch {
      setStatus('error');
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-4"
      noValidate
      aria-label="Formulário de contacto"
    >
      {/* Origem e UTM, capturadas automaticamente */}
      <input type="hidden" name="source_page" value={sourcePage} />
      <input type="hidden" name="utm_source" value={utm.utm_source || ''} />
      <input type="hidden" name="utm_medium" value={utm.utm_medium || ''} />
      <input type="hidden" name="utm_campaign" value={utm.utm_campaign || ''} />
      <input type="hidden" name="referrer" value={utm.referrer || ''} />

      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Nome" htmlFor="name">
          <input
            id="name"
            name="name"
            type="text"
            required
            autoComplete="name"
            className="input"
          />
        </Field>
        <Field label="Email" htmlFor="email">
          <input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            className="input"
          />
        </Field>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Telefone (opcional)" htmlFor="phone">
          <input
            id="phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            className="input"
          />
        </Field>
        <Field label="Segmento" htmlFor="segment">
          <select id="segment" name="segment" required className="input" defaultValue="">
            <option value="" disabled>
              Selecione
            </option>
            {segments.map((s) => (
              <option key={s.value} value={s.value}>
                {s.label}
              </option>
            ))}
          </select>
        </Field>
      </div>

      {variant === 'full' ? (
        <Field label="Mensagem ou objetivo" htmlFor="message">
          <textarea
            id="message"
            name="message"
            rows={4}
            className="input resize-none"
            placeholder="O que gostaria de organizar ou resolver?"
          />
        </Field>
      ) : null}

      <label className="flex items-start gap-3 text-[0.9rem] text-taupe">
        <input
          type="checkbox"
          name="consent"
          required
          className="mt-1 h-4 w-4 shrink-0 accent-umbra"
        />
        <span>
          Autorizo o tratamento dos meus dados para ser contactado, de acordo
          com a{' '}
          <Link href="/privacidade" className="underline hover:text-umbra">
            política de privacidade
          </Link>
          .
        </span>
      </label>

      <button
        type="submit"
        disabled={status === 'submitting'}
        className="w-full rounded-md bg-umbra px-6 py-3.5 font-medium text-gesso transition-colors hover:bg-umbra/90 disabled:opacity-60 sm:w-auto"
      >
        {status === 'submitting' ? 'A enviar...' : 'Marcar diagnóstico gratuito'}
      </button>

      {status === 'error' ? (
        <p role="alert" className="text-[0.9rem] text-[#A65A4C]">
          Não foi possível enviar. Tente novamente ou escreva para{' '}
          <a href={`mailto:${siteConfig.email}`} className="underline">
            {siteConfig.email}
          </a>
          .
        </p>
      ) : null}

      <style jsx>{`
        :global(.input) {
          width: 100%;
          border-radius: 6px;
          border: 1px solid rgba(59, 43, 34, 0.18);
          background: #f9f5f2;
          padding: 0.7rem 0.9rem;
          color: #3b2b22;
          font-size: 1rem;
          transition: border-color 0.15s ease;
        }
        :global(.input:focus) {
          outline: none;
          border-color: rgba(59, 43, 34, 0.5);
        }
      `}</style>
    </form>
  );
}

function Field({
  label,
  htmlFor,
  children,
}: {
  label: string;
  htmlFor: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label
        htmlFor={htmlFor}
        className="mb-1.5 block text-[0.85rem] font-medium text-umbra"
      >
        {label}
      </label>
      {children}
    </div>
  );
}

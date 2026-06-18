'use client';

import Link from 'next/link';
import { useState } from 'react';
import { nav } from '@/lib/site';

export function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-umbra/10 bg-gesso/85 backdrop-blur">
      <nav className="container-ordia flex h-16 items-center justify-between">
        <Link
          href="/"
          className="font-grotesk text-phi3 font-medium tracking-tightest text-umbra"
          onClick={() => setOpen(false)}
        >
          Ordia
        </Link>

        <div className="hidden items-center gap-7 lg:flex">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-[0.95rem] text-taupe transition-colors hover:text-umbra"
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/diagnostico"
            className="rounded-md bg-umbra px-4 py-2 text-[0.9rem] font-medium text-gesso transition-colors hover:bg-umbra/90"
          >
            Diagnóstico gratuito
          </Link>
        </div>

        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center lg:hidden"
          aria-label={open ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span className="relative block h-3 w-5">
            <span
              className={`absolute left-0 block h-px w-5 bg-umbra transition-transform ${open ? 'top-1.5 rotate-45' : 'top-0'}`}
            />
            <span
              className={`absolute left-0 top-1.5 block h-px w-5 bg-umbra transition-opacity ${open ? 'opacity-0' : 'opacity-100'}`}
            />
            <span
              className={`absolute left-0 block h-px w-5 bg-umbra transition-transform ${open ? 'top-1.5 -rotate-45' : 'top-3'}`}
            />
          </span>
        </button>
      </nav>

      {open ? (
        <div className="border-t border-umbra/10 bg-gesso lg:hidden">
          <div className="container-ordia flex flex-col gap-1 py-4">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="py-2 text-umbra"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/diagnostico"
              className="mt-2 rounded-md bg-umbra px-4 py-3 text-center font-medium text-gesso"
              onClick={() => setOpen(false)}
            >
              Diagnóstico gratuito
            </Link>
          </div>
        </div>
      ) : null}
    </header>
  );
}

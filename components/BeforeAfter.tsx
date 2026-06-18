'use client';

import { useRef, useState } from 'react';

// Comparação visual antes/depois com handle arrastável. Usa painéis de cor
// como placeholder editável (substituir por <Image> quando houver fotos).
export function BeforeAfter({
  before,
  after,
  caption,
}: {
  before: string;
  after: string;
  caption?: string;
}) {
  const [pos, setPos] = useState(50);
  const ref = useRef<HTMLDivElement>(null);

  function update(clientX: number) {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const next = ((clientX - rect.left) / rect.width) * 100;
    setPos(Math.max(0, Math.min(100, next)));
  }

  return (
    <figure>
      <div
        ref={ref}
        className="relative aspect-[1.618/1] w-full select-none overflow-hidden rounded-[10px] border border-umbra/10"
        onMouseMove={(e) => e.buttons === 1 && update(e.clientX)}
        onTouchMove={(e) => update(e.touches[0].clientX)}
      >
        {/* Depois (fundo) */}
        <div className="absolute inset-0 flex items-end bg-argila p-6">
          <span className="label-mono text-umbra/70">Depois</span>
          <span className="absolute right-6 top-6 max-w-[60%] text-right font-grotesk text-umbra/80">
            {after}
          </span>
        </div>
        {/* Antes (recortado) */}
        <div
          className="absolute inset-0 flex items-end bg-linho p-6"
          style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}
        >
          <span className="label-mono text-umbra/60">Antes</span>
          <span className="absolute left-6 top-6 max-w-[60%] font-grotesk text-umbra/70">
            {before}
          </span>
        </div>
        {/* Handle */}
        <div
          className="absolute inset-y-0 w-px bg-umbra/60"
          style={{ left: `${pos}%` }}
        >
          <span className="absolute top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-umbra/30 bg-gesso px-2 py-1 font-mono text-[10px] uppercase tracking-widest text-umbra">
            ↔
          </span>
        </div>
      </div>
      <label className="mt-3 block">
        <span className="sr-only">Comparar antes e depois</span>
        <input
          type="range"
          min={0}
          max={100}
          value={pos}
          onChange={(e) => setPos(Number(e.target.value))}
          className="w-full accent-umbra"
          aria-label="Comparar antes e depois"
        />
      </label>
      {caption ? (
        <figcaption className="mt-2 text-[0.9rem] text-taupe">{caption}</figcaption>
      ) : null}
    </figure>
  );
}

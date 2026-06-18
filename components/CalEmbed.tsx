'use client';

import { useEffect } from 'react';
import { siteConfig } from '@/lib/site';

// Embed inline do Cal.com. Carrega o script oficial e monta o calendário
// no elemento alvo. Tema nude para combinar com a marca.
export function CalEmbed() {
  useEffect(() => {
    (function (C: any, A: string, L: string) {
      const p = function (a: any, ar: any) {
        a.q.push(ar);
      };
      const d = C.document;
      C.Cal =
        C.Cal ||
        function (...args: any[]) {
          const cal = C.Cal;
          const ar = args;
          if (!cal.loaded) {
            cal.ns = {};
            cal.q = cal.q || [];
            const s = d.createElement('script');
            s.src = A;
            d.head.appendChild(s);
            cal.loaded = true;
          }
          if (ar[0] === L) {
            const api: any = function (...a: any[]) {
              p(api, a);
            };
            const namespace = ar[1];
            api.q = api.q || [];
            if (typeof namespace === 'string') {
              cal.ns[namespace] = cal.ns[namespace] || api;
              p(cal.ns[namespace], ar);
              p(cal, ['initNamespace', namespace]);
            } else p(cal, ar);
            return;
          }
          p(cal, ar);
        };
    })(window, 'https://app.cal.com/embed/embed.js', 'init');

    const Cal = (window as any).Cal;
    Cal('init', 'diagnostico', { origin: 'https://cal.com' });
    Cal.ns['diagnostico']('inline', {
      elementOrSelector: '#cal-embed',
      calLink: siteConfig.calcomLink,
      layout: 'month_view',
    });
    Cal.ns['diagnostico']('ui', {
      cssVarsPerTheme: {
        light: {
          'cal-brand': '#3B2B22',
          'cal-bg': '#F9F5F2',
          'cal-bg-emphasis': '#EADAD0',
        },
      },
      hideEventTypeDetails: false,
      layout: 'month_view',
    });
  }, []);

  return (
    <div
      id="cal-embed"
      className="min-h-[560px] w-full overflow-hidden rounded-[10px] border border-umbra/10 bg-gesso"
    />
  );
}

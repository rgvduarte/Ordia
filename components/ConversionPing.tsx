'use client';

import { useEffect } from 'react';

// Dispara o evento de conversão na analítica ao chegar à página de obrigado.
export function ConversionPing() {
  useEffect(() => {
    const gtag = (window as any).gtag;
    if (typeof gtag === 'function') {
      gtag('event', 'generate_lead', {
        event_category: 'lead',
        event_label: 'form_submit',
      });
    }
  }, []);

  return null;
}

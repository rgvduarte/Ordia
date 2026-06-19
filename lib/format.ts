// Valores no site já com IVA incluído.
const eur = new Intl.NumberFormat('pt-PT', {
  style: 'currency',
  currency: 'EUR',
  maximumFractionDigits: 0,
});

export function priceLabel(from: number, to: number | null, unit: string) {
  const unitSuffix = unit === 'mês' ? ' / mês' : '';
  if (to == null) {
    return `Desde ${eur.format(from)}${unitSuffix}`;
  }
  return `${eur.format(from)} a ${eur.format(to)}${unitSuffix}`;
}

export const IVA_NOTE = 'IVA incluído.';

export function formatDate(iso: string) {
  return new Intl.DateTimeFormat('pt-PT', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  }).format(new Date(iso));
}

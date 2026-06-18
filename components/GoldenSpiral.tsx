// Espiral áurea desenhada com arcos de quartos de círculo sobre os retângulos
// da sequência de Fibonacci. Elemento de assinatura, usado com discrição.
export function GoldenSpiral({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 144 89"
      fill="none"
      aria-hidden="true"
      className={className}
    >
      {/* Grelha de secção de ouro, filetes muito ténues */}
      <g stroke="currentColor" strokeWidth="0.4" opacity="0.25">
        <rect x="0.5" y="0.5" width="143" height="88" />
        <rect x="0.5" y="0.5" width="89" height="88" />
        <rect x="0.5" y="0.5" width="55" height="55" />
        <rect x="34.5" y="0.5" width="21" height="34" />
        <rect x="34.5" y="0.5" width="13" height="13" />
      </g>
      {/* A espiral */}
      <path
        d="M89 89 A89 89 0 0 1 0 0 M0 0 A55 55 0 0 1 55 55 M55 55 A34 34 0 0 1 89 21 M89 21 A21 21 0 0 1 68 0 M68 0 A13 13 0 0 1 55 13"
        stroke="currentColor"
        strokeWidth="0.8"
        fill="none"
      />
    </svg>
  );
}

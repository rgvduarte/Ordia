import type { Config } from 'tailwindcss';

// Escala tipográfica em proporção áurea (1,618), a partir de 16,5px.
// Passos: 10,2 / 16,5 / 26,7 / 43 / 70 (rem com base 16px).
const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        // Paleta nude, luminosidade espaçada pela razão de ouro.
        gesso: '#F9F5F2',
        linho: '#EADAD0',
        areia: '#E0C9BA',
        argila: '#D6B9A5',
        umbra: '#3B2B22',
        taupe: '#7D6C62',
        rosa: '#E7C9C5',
      },
      fontFamily: {
        grotesk: ['var(--font-space-grotesk)', 'system-ui', 'sans-serif'],
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-jetbrains-mono)', 'ui-monospace', 'monospace'],
      },
      fontSize: {
        // Escala áurea
        phi1: ['0.6375rem', { lineHeight: '1.4' }], // ~10,2px
        phi2: ['1.03125rem', { lineHeight: '1.6' }], // ~16,5px (base)
        phi3: ['1.66875rem', { lineHeight: '1.25' }], // ~26,7px
        phi4: ['2.6875rem', { lineHeight: '1.1' }], // ~43px
        phi5: ['4.375rem', { lineHeight: '1.02' }], // ~70px
      },
      letterSpacing: {
        tightest: '-0.04em',
        tighter: '-0.025em',
      },
      maxWidth: {
        content: '72rem',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'draw-spiral': {
          '0%': { strokeDashoffset: '1' },
          '100%': { strokeDashoffset: '0' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.7s cubic-bezier(0.22, 1, 0.36, 1) both',
      },
    },
  },
  plugins: [],
};

export default config;

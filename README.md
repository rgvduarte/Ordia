# Ordia

Website institucional e motor de leads da **Ordia**, um estúdio premium de
gestão e organização de vida, casa e património.

Esta versão é o **site de marca estático**, construído em Next.js e publicado no
**GitHub Pages**. A captura de leads usa um serviço externo compatível com
estático (Formspree) e o diagnóstico usa o embed do Cal.com.

> O brief completo previa backend (Supabase, Vercel functions, painel /admin com
> auth e automações de email). Nada disso corre no GitHub Pages, que só serve
> ficheiros estáticos. Quando esse backend for necessário, o caminho é migrar o
> deploy para a Vercel. O sistema de design do painel já está guardado em
> `.interface-design/system.md` para esse momento.

## Stack

- **Next.js** (App Router) + **TypeScript** + **Tailwind CSS**
- Export estático (`output: 'export'`) para o GitHub Pages
- **Formspree** para captura de leads (formulários)
- **Cal.com** (embed inline) para o diagnóstico gratuito
- **GA4** opcional para analítica

## Design

- **Páginas públicas:** paleta nude por proporção áurea, Space Grotesk + Inter +
  JetBrains Mono, composição em secção de ouro, espiral áurea como assinatura.
- Tokens de cor e tipografia em `tailwind.config.ts`.

## Páginas

`/` · `/metodo` · `/servicos` · `/casos` · `/sobre` · `/diagnostico` ·
`/diario` (+ `/diario/[slug]`) · `/recursos` (+ `/recursos/[slug]`) ·
`/obrigado` · `/privacidade` · `/termos`

## Desenvolvimento local

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # gera o export estático em ./out
```

Copie `.env.example` para `.env.local` e preencha as variáveis.

## Variáveis de ambiente

| Variável | Descrição |
| --- | --- |
| `NEXT_PUBLIC_FORMSPREE_ENDPOINT` | Endpoint do Formspree para os formulários |
| `NEXT_PUBLIC_CALCOM_LINK` | Link do evento Cal.com (ex.: `ordia/diagnostico`) |
| `NEXT_PUBLIC_GA_ID` | ID do Google Analytics 4 (opcional) |
| `NEXT_PUBLIC_BASE_PATH` | Caminho base no Pages (definido no Action: `/Ordia`) |

## Deploy (GitHub Pages)

O workflow `.github/workflows/deploy.yml` faz build e publica em cada push para
`main`. Para ativar:

1. No GitHub, **Settings → Pages → Build and deployment → Source: GitHub Actions**.
2. Em **Settings → Secrets and variables → Actions → Variables**, defina
   `NEXT_PUBLIC_FORMSPREE_ENDPOINT`, `NEXT_PUBLIC_CALCOM_LINK` e (opcional)
   `NEXT_PUBLIC_GA_ID`.
3. Faça merge para `main`. O site fica em `https://rgvduarte.github.io/Ordia/`.

> Nota: valores no site são sempre sem IVA, com a nota "acresce IVA à taxa em
> vigor". Não se usam travessões em textos visíveis.

# Design System

Sistema para o painel **/admin** da Ordia (product UI: gestão de leads, kanban, tabela, KPIs).
Guardar como `.interface-design/system.md` na raiz do projeto, para a skill interface-design o carregar.
As páginas públicas (marketing) NÃO usam este ficheiro: seguem o sistema de marca (nude por proporção áurea, Space Grotesk) com a skill frontend-design.

## Direction

**Personality:** Warmth & Approachability (com carácter calmo e ordenado da marca Ordia)
**Foundation:** Warm (nude)
**Depth:** Borders-only com mudanças de superfície muito subtis (nude). Sem sombras.

Racional: o painel é onde a operação trabalha todos os dias a gerir leads. Tem de ser calmo, legível e sem ruído. A hierarquia nasce de filetes finos e de saltos de luminosidade quase impercetíveis na mesma família nude, nunca de sombras ou de cores fortes.

## Tokens

### Spacing

Base: 4px
Scale: 4, 8, 12, 16, 24, 32, 48 (generoso, não denso)

### Colors

```
/* Texto, 4 níveis */
--fg:            #3B2B22;   /* umbra, texto principal */
--fg-secondary:  #6F5D53;   /* apoio */
--fg-tertiary:   #9A887C;   /* metadados */
--fg-muted:      #BCA99D;   /* placeholder, desativado */

/* Superfícies (borders-only + surface shift nude). Mais alto = mais claro */
--bg:            #F1E7DE;   /* canvas */
--surface-1:     #F9F5F2;   /* cartões (elevado) */
--surface-2:     #FFFFFF;   /* dropdowns, modais (topo) */
--surface-sunken:#EADAD0;   /* inputs (recuado, "escreve aqui") */

/* Filetes (umbra em baixa opacidade, progressão) */
--border:        rgba(59,43,34,0.10);
--border-soft:   rgba(59,43,34,0.06);
--border-strong: rgba(59,43,34,0.16);
--focus:         rgba(59,43,34,0.32);

/* Marca: acento monocromático (sem terracota). Ação primária = umbra cheio */
--accent:        #3B2B22;
--accent-hover:  #4A382E;
--accent-fg:     #F9F5F2;
--highlight:     #E7C9C5;   /* rosa, só acentos NÃO interativos: linha ativa, separador */

/* Semânticas, dessaturadas para viverem no mundo nude */
--success:       #6E7A53;   --success-bg: rgba(110,122,83,0.12);
--warning:       #B5894F;   --warning-bg: rgba(181,137,79,0.14);
--destructive:   #A65A4C;   --destructive-bg: rgba(166,90,76,0.12);
```

### Radius

Scale: 6px (inputs, botões), 10px (cartões), 14px (modais). Chips: pill (full).

### Typography

Font (UI): Inter (texto e controlos)
Font (títulos, etiquetas, números de KPI): Space Grotesk
Font (dados, IDs, valores em tabela): JetBrains Mono, tabular-nums
Scale: 12, 13, 14 (base), 16, 20, 26
Weights: 400, 500, 600
Nota: títulos com tracking apertado (-0.01em a -0.02em). Dados sempre com tabular-nums para alinhar colunas.

## Patterns

### Button Primary

- Height: 38px
- Padding: 10px 16px
- Radius: 6px
- Font: Inter 14px / 600
- Background: –accent, texto –accent-fg
- Hover: –accent-hover
- Usage: ação principal (criar lead, guardar)

### Button Secondary

- Height: 38px
- Padding: 10px 16px
- Radius: 6px
- Background: –surface-1, border 1px –border, texto –fg
- Usage: ações secundárias

### Input / Select / Date (componentes próprios, nunca nativos)

- Height: 40px
- Padding: 10px 14px
- Radius: 6px
- Background: –surface-sunken, border 1px –border
- Focus: ring 2px –focus
- Select e date sempre custom (trigger + popover –surface-2)

### Card

- Background: –surface-1
- Border: 1px solid –border-soft
- Radius: 10px
- Padding: 16px
- Sem sombra

### KPI Stat

- Número: Space Grotesk 26px / 430, –fg
- Label: Inter 12px / 500, –fg-tertiary
- Topo do painel: novos leads (semana/mês), conversão por estágio, origem, valor do pipeline

### Kanban Column

- Fundo da coluna: –bg (igual ao canvas, separação por filete, não por cor)
- Cabeçalho: Space Grotesk 12px / 600 uppercase, tracking 0.08em, –fg-secondary
- Contagem: JetBrains Mono 12px, –fg-tertiary

### Lead Card (no kanban)

- Background: –surface-1, border 1px –border, radius 10px, padding 12px
- Nome: Inter 14px / 600, –fg
- Meta (origem, data): Inter 12px, –fg-tertiary
- Stage chip no topo, valor estimado em JetBrains Mono

### Stage Chip

- Pill, height 22px, padding 2px 10px, Space Grotesk 11px / 600 uppercase
- Mapa de cor (tonal, dessaturado):
  novo → neutro (–surface-sunken / –fg-secondary)
  contactado → –warning-bg / –warning
  diagnostico → –highlight a 40% / –fg
  proposta → –accent a 8% / –fg
  cliente → –success-bg / –success
  perdido → –destructive-bg / –destructive

### Table Row

- Height: 44px
- Border-bottom: 1px –border-soft
- Hover: fundo rgba(59,43,34,0.03)
- Células numéricas: JetBrains Mono, tabular-nums, alinhadas à direita

## States

Todos os elementos interativos: default, hover, active, focus (ring –focus), disabled (–fg-muted).
Dados: loading (skeleton em –surface-sunken), empty (título –fg + apoio –fg-tertiary + botão primário), error (texto –destructive). Um ecrã sem estado vazio sente-se partido.

## Decisions

|Decisão                               |Racional                                                                                                                    |Data      |
|--------------------------------------|----------------------------------------------------------------------------------------------------------------------------|----------|
|Borders-only + surface shift nude     |Painel de trabalho diário, calmo e legível. Sombras e cores fortes só adicionam ruído.                                      |2026-06-18|
|Acento monocromático (umbra)          |A marca Ordia é quase monocromática. Botão primário a umbra cheio é premium e coerente, sem introduzir nova cor.            |2026-06-18|
|Semânticas dessaturadas               |Sucesso/aviso/perda têm de comunicar sem partir o mundo nude. Tons de terra suaves.                                         |2026-06-18|
|Base de 4px (não phi)                 |Numa interface de dados, a grelha de 4px é o que mantém tudo alinhado. A proporção áurea fica na camada de marca, não no UI.|2026-06-18|
|Estágios por chip tonal, não arco-íris|Cinco cores berrantes no kanban gritam “genérico”. Tons subtis dizem o estado sem ruído.                                    |2026-06-18|

# Ordia — Plano de Marketing de 1 Página

> Framework "1-Page Marketing Plan" (9 quadrados, 3 fases). Referencia
> `.agents/product-marketing.md`. Marketing é um processo, não um evento.

| Fase | Alvo | Quadrados |
|------|------|-----------|
| **ANTES** | Prospeto | 1. Mercado · 2. Mensagem · 3. Meios |
| **DURANTE** | Lead | 4. Captar · 5. Nutrir · 6. Converter |
| **DEPOIS** | Cliente | 7. Experiência · 8. Valor de vida · 9. Referências |

---

## ANTES (estranho → lead)

### 1. Mercado-alvo
- **Nicho primário:** donos de segunda casa / villa em Portugal (PT e estrangeiros), zonas Cascais, Comporta, Algarve, Lisboa.
- **Nicho secundário:** famílias de duas carreiras e alto rendimento (35-60), sem tempo.
- **Avatar:** rendimento alto, agenda cheia, valoriza tempo e discrição acima do preço. "Tem tudo menos tempo e cabeça."
- **Watering holes:** imobiliárias de luxo, gestoras de aluguer de villas, arquitetos e designers de interiores, family offices, clubes/concierge médico, escolas internacionais, grupos de expats.
- **Anti-persona:** caçadores de preço; quem quer só "horas de arrumação"; quem quer gerir os fornecedores.

### 2. Mensagem (USP)
- **USP:** "A única que concebe o sistema da sua casa e da sua vida e dirige toda a execução, com um só ponto de confiança. Não vendemos horas; entregamos ordem que se mantém."
- **Pitch (30s):** "Sabe como quem tem casa e vida cheias vive afogado em tarefas, fornecedores e desordem? A Ordia desenha um sistema à medida e dirige toda a execução, para que recupere tempo e tranquilidade, com uma só pessoa de confiança a tratar de tudo."
- **Headline do site:** "A sua casa e a sua vida em ordem, sem ter de gerir nada."

### 3. Meios
- **Dominar primeiro um canal:** parcerias de referência (B2B2C) com imobiliárias de luxo, gestoras de villas e designers de interiores. Custo baixo, confiança alta, lead quente.
- **Orgânico (autoridade):** SEO local (diário/blog) + Instagram/Pinterest editorial (antes/depois, bastidores de método). Alinhar com palavras-chave do brief.
- **Pago (velocidade), depois:** Meta/Google geo-segmentado (Cascais, Comporta, Algarve) para o quiz e o guia. Só depois de ter o orgânico e as parcerias a converter.
- **Métrica:** CAC por canal vs. LTV. Começar pelas parcerias (CAC mais baixo).

---

## DURANTE (lead → cliente)

### 4. Captar leads
- **Já no site:** diagnóstico gratuito (oferta principal), quiz "Que tipo de desordem o trava?", guia "Por onde começar". Formulário com segmento + UTM + consentimento.
- **Speed-to-lead:** responder em menos de 5 minutos / no mesmo dia útil. Crítico para conversão.
- **Lead scoring:** segmento (segunda casa > família > empresa), origem (parceria > orgânico > pago), urgência (evento/chegada marcada).
- **A construir:** CRM real (o brief previa Supabase + /admin kanban). Hoje, leads via Formspree → email. Próximo passo: backend para não perder leads.

### 5. Nutrir
- **Sequência de email (Resend, do brief):** dia 0 boas-vindas + guia; dia 2 estudo de caso (com números); dia 5 convite para diagnóstico; dia 12 check-in suave. Para automaticamente se marcar ou responder.
- **Rácio 3:1** valor:pedido. Educar (organização, casa, digital), inspirar (antes/depois), depois oferecer.
- **Reforço:** retargeting leve + conteúdo de Instagram/diário.

### 6. Converter
- **Processo:** diagnóstico de 30 min (descoberta) → proposta com âmbito e orçamento em 24-48h → fecho.
- **Reversão de risco:** "A nossa promessa" (diagnóstico sem compromisso; plano e orçamento claros; acompanhamos até funcionar; discrição). Já no /como-trabalhamos.
- **Prova:** casos com números, depoimentos, percurso da fundadora (marcas de grande escala).
- **Preço premium** comunica valor. Não descontar; ancorar na escada de valor.

---

## DEPOIS (cliente → fã)

### 7. Experiência de excelência
- **Momentos de verdade:** primeira chegada à casa já a postos; entrega do sistema documentado e simples; relatório de cada visita na avença.
- **Sistematizar (SOPs):** checklists por tipo de projeto para consistência, independentemente de quem executa sob direção da Ordia.
- **Detalhe que encanta:** um gesto de boas-vindas na primeira chegada pós-projeto (curadoria, não custo).

### 8. Valor de vida (LTV)
- **Escada:** Diagnóstico → Projeto (Ordem Digital / Sistema Casa) → Avença (Concierge, receita recorrente) → Add-on (Evento).
- **Foco no recorrente:** o Concierge é o motor de LTV. Cada projeto deve propor, no fecho, a transição para avença.
- **Expansão:** novas áreas da mesma casa/família; segunda casa; mudança/relocation.

### 9. Referências
- **Pedido sistemático:** pós-projeto, pedir avaliação + uma referência (o brief previa automação). Momento ideal: logo após um "momento de verdade".
- **Programa de parceiros:** comissão/reciprocidade com imobiliárias, designers e gestoras de villas (alinhado com o canal primário).
- **Prova social:** transformar cada caso (com autorização) em estudo de caso no site.

---

## Autoavaliação

**Score atual: 6/10.** Mensagem (2), oferta (6), captação no site (4) e conversão (6) estão fortes e claros. Lacunas a fechar para 9-10:

1. **Meios (3):** escolher e ativar o canal primário (parcerias de referência) com um plano concreto e metas.
2. **Captar/CRM (4):** implementar o backend (Supabase + /admin) para não perder leads e medir.
3. **Nutrir (4):** montar a sequência de email (Resend) — hoje inexistente em estático.
4. **Referências (9):** desenhar o pedido pós-projeto e o programa de parceiros.

**Próximo passo recomendado:** ativar as parcerias de referência (canal de CAC mais baixo) e, em paralelo, migrar para um backend (Vercel + Supabase) para ligar captação, nurture e o painel de leads — fechando as lacunas 2 e 3 de uma vez.

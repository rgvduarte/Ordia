#!/usr/bin/env python3
# Gera o PDF do Plano de Marketing da Ordia com o design system da marca.
from weasyprint import HTML
import datetime, os

FONT_CSS = open('/tmp/ordia_pdf/local-fonts.css').read()

SPIRAL = '''<svg viewBox="0 0 144 89" fill="none" xmlns="http://www.w3.org/2000/svg" class="spiral">
<g stroke="currentColor" stroke-width="0.4" opacity="0.30">
<rect x="0.5" y="0.5" width="143" height="88"/><rect x="0.5" y="0.5" width="89" height="88"/>
<rect x="0.5" y="0.5" width="55" height="55"/><rect x="34.5" y="0.5" width="21" height="34"/>
<rect x="34.5" y="0.5" width="13" height="13"/></g>
<path d="M89 89 A89 89 0 0 1 0 0 M0 0 A55 55 0 0 1 55 55 M55 55 A34 34 0 0 1 89 21 M89 21 A21 21 0 0 1 68 0 M68 0 A13 13 0 0 1 55 13" stroke="currentColor" stroke-width="0.9" fill="none"/>
</svg>'''

today = datetime.date.today().strftime('%d.%m.%Y')

def card(num, title, rows):
    items = ''.join(f'<li>{r}</li>' for r in rows)
    return f'''<div class="card">
      <p class="cardlabel"><span class="num">{num}</span> {title}</p>
      <ul>{items}</ul>
    </div>'''

before = card('1', 'Mercado-alvo', [
    '<b>Nicho primário:</b> donos de segunda casa / villa (PT e estrangeiros), em Cascais, Comporta, Algarve e Lisboa.',
    '<b>Secundário:</b> famílias de duas carreiras e alto rendimento, 35-60, sem tempo.',
    '<b>Avatar:</b> valoriza tempo e discrição acima do preço. "Tem tudo menos tempo e cabeça."',
    '<b>Watering holes:</b> imobiliárias de luxo, gestoras de villas, designers de interiores, family offices, expats.',
    '<b>Anti-persona:</b> caçadores de preço; quem quer só horas de arrumação.',
]) + card('2', 'Mensagem (USP)', [
    '<b>USP:</b> a única que concebe o sistema da sua casa e da sua vida e dirige toda a execução, com um só ponto de confiança.',
    '<b>Pitch:</b> "Quem tem casa e vida cheias vive afogado em tarefas e desordem. A Ordia desenha o sistema e dirige a execução, para que recupere tempo e tranquilidade."',
    '<b>Headline:</b> "A sua casa e a sua vida em ordem, sem ter de gerir nada."',
]) + card('3', 'Meios', [
    '<b>Canal nº1 (dominar primeiro):</b> parcerias de referência com imobiliárias de luxo, gestoras de villas e designers. CAC baixo, lead quente.',
    '<b>Orgânico:</b> SEO local (diário) + Instagram/Pinterest editorial (antes/depois, método).',
    '<b>Pago (depois):</b> Meta/Google geo-segmentado (Cascais, Comporta, Algarve) para o quiz e o guia.',
    '<b>Métrica:</b> CAC por canal vs. LTV.',
])

during = card('4', 'Captar leads', [
    '<b>No site:</b> diagnóstico gratuito (oferta principal), quiz de segmentação, guia. Formulário com segmento + UTM + consentimento.',
    '<b>Speed-to-lead:</b> responder em &lt; 5 min / no mesmo dia útil.',
    '<b>Lead scoring:</b> por segmento, origem e urgência (evento/chegada marcada).',
    '<b>A construir:</b> CRM real (Supabase + /admin) para não perder leads.',
]) + card('5', 'Nutrir', [
    '<b>Sequência (Resend):</b> dia 0 boas-vindas + guia · dia 2 caso com números · dia 5 convite para diagnóstico · dia 12 check-in.',
    '<b>Rácio 3:1</b> valor:pedido. Educar, inspirar, depois oferecer.',
    '<b>Reforço:</b> retargeting leve + conteúdo de diário e Instagram.',
]) + card('6', 'Converter', [
    '<b>Processo:</b> diagnóstico de 30 min &rarr; proposta com âmbito e orçamento em 24-48h &rarr; fecho.',
    '<b>Reversão de risco:</b> "A nossa promessa" (sem compromisso, plano claro, acompanhamos até funcionar, discrição).',
    '<b>Prova:</b> casos com números, depoimentos, percurso da fundadora.',
    '<b>Preço premium</b> comunica valor. Ancorar na escada, não descontar.',
])

after = card('7', 'Experiência de excelência', [
    '<b>Momentos de verdade:</b> primeira chegada à casa já a postos; sistema documentado e simples; relatório de cada visita.',
    '<b>Sistematizar (SOPs):</b> checklists por tipo de projeto, para consistência.',
    '<b>Encantar:</b> um gesto de boas-vindas na primeira chegada pós-projeto.',
]) + card('8', 'Valor de vida (LTV)', [
    '<b>Escada:</b> Diagnóstico &rarr; Projeto &rarr; Avença (Concierge) &rarr; Add-on (Evento).',
    '<b>Motor de LTV:</b> o Concierge. Cada projeto propõe, no fecho, a transição para avença.',
    '<b>Expansão:</b> novas áreas, segunda casa, relocation.',
]) + card('9', 'Referências', [
    '<b>Pedido sistemático:</b> pós-projeto, pedir avaliação + uma referência, logo após um momento de verdade.',
    '<b>Programa de parceiros:</b> reciprocidade com imobiliárias, designers e gestoras de villas.',
    '<b>Prova social:</b> transformar cada caso (com autorização) em estudo de caso.',
])

grid_rows = [
    ('Antes', 'Prospeto', '1. Mercado-alvo', '2. Mensagem', '3. Meios'),
    ('Durante', 'Lead', '4. Captar leads', '5. Nutrir', '6. Converter'),
    ('Depois', 'Cliente', '7. Experiência', '8. Valor de vida', '9. Referências'),
]
grid_html = ''.join(
    f'<tr><th>{p}<span>{t}</span></th><td>{a}</td><td>{b}</td><td>{c}</td></tr>'
    for (p, t, a, b, c) in grid_rows
)

HTML_DOC = f'''<!DOCTYPE html><html lang="pt"><head><meta charset="utf-8"><style>
{FONT_CSS}
@page {{
  size: A4;
  margin: 17mm 15mm 14mm 15mm;
  background: #F9F5F2;
  @bottom-left {{ content: "Ordia · Plano de Marketing de 1 Página"; font-family: 'JetBrains Mono'; font-size: 6.5pt; color: #9A887C; letter-spacing: 0.06em; }}
  @bottom-right {{ content: counter(page); font-family: 'JetBrains Mono'; font-size: 6.5pt; color: #9A887C; }}
}}
@page cover {{ margin: 0; @bottom-left {{ content: none; }} @bottom-right {{ content: none; }} }}
* {{ box-sizing: border-box; }}
html {{ -weasy-hyphens: none; }}
body {{ margin: 0; font-family: 'Inter'; color: #3B2B22; font-size: 9.3pt; line-height: 1.5; }}
h1,h2,h3,p {{ margin: 0; }}
.mono {{ font-family: 'JetBrains Mono'; text-transform: uppercase; letter-spacing: 0.16em; font-size: 7pt; color: #7D6C62; }}

/* Capa */
.cover {{ page: cover; position: relative; width: 210mm; height: 297mm; background: #F9F5F2; padding: 30mm 24mm; overflow: hidden; }}
.cover .spiral {{ position: absolute; right: -40mm; top: -30mm; width: 150mm; height: 150mm; color: #D6B9A5; }}
.cover .brand {{ font-family: 'Space Grotesk'; font-weight: 500; font-size: 16pt; letter-spacing: -0.02em; }}
.cover .eyebrow {{ margin-top: 95mm; }}
.cover h1 {{ font-family: 'Space Grotesk'; font-weight: 500; font-size: 40pt; line-height: 1.02; letter-spacing: -0.03em; margin-top: 8mm; max-width: 150mm; }}
.cover .sub {{ margin-top: 9mm; font-size: 11pt; color: #7D6C62; max-width: 130mm; }}
.cover .meta {{ position: absolute; left: 24mm; bottom: 26mm; font-family: 'JetBrains Mono'; font-size: 7.5pt; color: #7D6C62; letter-spacing: 0.05em; }}
.cover .rule {{ position: absolute; left: 24mm; right: 24mm; bottom: 22mm; border-top: 1px solid rgba(59,43,34,0.16); }}

/* Conteúdo */
.section {{ padding-top: 4mm; }}
.intro-h {{ font-family: 'Space Grotesk'; font-weight: 500; font-size: 19pt; letter-spacing: -0.02em; margin-top: 3mm; }}
.lead {{ color: #7D6C62; margin-top: 4mm; font-size: 10pt; max-width: 165mm; }}
.principle {{ margin-top: 7mm; padding: 6mm; background: rgba(224,201,186,0.30); border: 1px solid rgba(59,43,34,0.10); border-radius: 10px; }}
.principle b {{ font-family: 'Space Grotesk'; }}

table.grid {{ width: 100%; border-collapse: collapse; margin-top: 7mm; }}
table.grid th, table.grid td {{ border: 1px solid rgba(59,43,34,0.12); padding: 4mm; text-align: left; vertical-align: top; font-size: 8.6pt; }}
table.grid th {{ background: #EADAD0; font-family: 'Space Grotesk'; font-weight: 600; width: 26mm; }}
table.grid th span {{ display: block; font-family: 'JetBrains Mono'; font-weight: 400; font-size: 6.5pt; text-transform: uppercase; letter-spacing: 0.12em; color: #7D6C62; margin-top: 1mm; }}
table.grid td {{ font-family: 'Space Grotesk'; color: #3B2B22; }}

.phase {{ margin-top: 9mm; }}
.phase-head {{ display: flex; align-items: baseline; gap: 5mm; border-top: 1px solid rgba(59,43,34,0.16); padding-top: 4mm; break-after: avoid; }}
.phase-head .pn {{ font-family: 'JetBrains Mono'; font-size: 7pt; color: #B5894F; letter-spacing: 0.12em; }}
.phase-head h2 {{ font-family: 'Space Grotesk'; font-weight: 500; font-size: 16pt; letter-spacing: -0.02em; }}
.phase-head .who {{ font-family: 'JetBrains Mono'; font-size: 6.5pt; text-transform: uppercase; letter-spacing: 0.14em; color: #9A887C; margin-left: auto; }}

.cards {{ display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 4mm; margin-top: 5mm; break-inside: avoid; }}
.card {{ background: #F9F5F2; border: 1px solid rgba(59,43,34,0.12); border-radius: 10px; padding: 5mm; break-inside: avoid; }}
.cardlabel {{ font-family: 'Space Grotesk'; font-weight: 600; font-size: 9.5pt; letter-spacing: -0.01em; padding-bottom: 3mm; border-bottom: 1px solid rgba(59,43,34,0.10); margin-bottom: 3mm; }}
.cardlabel .num {{ font-family: 'JetBrains Mono'; color: #D6B9A5; font-weight: 500; margin-right: 1.5mm; }}
.card ul {{ margin: 0; padding: 0; list-style: none; }}
.card li {{ font-size: 7.9pt; line-height: 1.45; color: #5d4d43; padding-left: 4mm; position: relative; margin-bottom: 2.4mm; }}
.card li:before {{ content: ""; position: absolute; left: 0; top: 3.1mm; width: 1.4mm; height: 1.4mm; border-radius: 50%; background: rgba(59,43,34,0.45); }}
.card li b {{ color: #3B2B22; font-weight: 600; }}

/* Avaliação */
.score-wrap {{ display: grid; grid-template-columns: 40mm 1fr; gap: 8mm; margin-top: 6mm; align-items: start; }}
.score {{ background: #3B2B22; color: #F9F5F2; border-radius: 14px; padding: 8mm 6mm; text-align: center; }}
.score .n {{ font-family: 'Space Grotesk'; font-weight: 500; font-size: 34pt; line-height: 1; }}
.score .l {{ font-family: 'JetBrains Mono'; font-size: 6.5pt; text-transform: uppercase; letter-spacing: 0.14em; color: #D6B9A5; margin-top: 3mm; }}
.gaps {{ list-style: none; margin: 0; padding: 0; }}
.gaps li {{ padding: 3mm 0; border-bottom: 1px solid rgba(59,43,34,0.10); font-size: 9pt; }}
.gaps li b {{ font-family: 'Space Grotesk'; }}
.next {{ margin-top: 7mm; padding: 6mm; background: #EADAD0; border-radius: 10px; font-size: 9.3pt; }}
.next .mono {{ margin-bottom: 2mm; }}
.avoid {{ break-inside: avoid; }}
</style></head><body>

<section class="cover">
  {SPIRAL}
  <div class="brand">Ordia</div>
  <p class="mono eyebrow">Plano de marketing · estratégia</p>
  <h1>Plano de Marketing de 1 Página</h1>
  <p class="sub">Um sistema de marketing completo, do estranho ao cliente fiel. Nove quadrados, três fases, um processo.</p>
  <div class="rule"></div>
  <div class="meta">Ordia · Gestão de casa e vida · Lisboa, Portugal &nbsp;·&nbsp; {today}</div>
</section>

<section class="section">
  <p class="mono">O enquadramento</p>
  <h2 class="intro-h">Marketing é um processo, não um evento</h2>
  <p class="lead">Em vez de táticas soltas, um processo sequencial em três fases: <b>Antes</b> (identificar o prospeto, criar a mensagem, escolher os meios), <b>Durante</b> (captar, nutrir, converter) e <b>Depois</b> (entregar excelência, maximizar o valor de vida, gerar referências). Quando os nove quadrados trabalham juntos, há uma máquina de marketing, não um conjunto de tentativas.</p>

  <table class="grid">
    <tr><th>Fase<span>Alvo</span></th><td><b>Coluna 1</b></td><td><b>Coluna 2</b></td><td><b>Coluna 3</b></td></tr>
    {grid_html}
  </table>

  <div class="principle">
    <b>Princípio:</b> só cerca de 3% do mercado está pronto a comprar agora. Captar e nutrir mantém-no em contacto com os outros 97%, para vender quando estiverem prontos. A base de dados de leads é o ativo mais valioso do negócio.
  </div>
</section>

<div class="phase">
  <div class="phase-head"><span class="pn">FASE 01</span><h2>Antes</h2><span class="who">Estranho &rarr; Lead</span></div>
  <div class="cards">{before}</div>
</div>

<div class="phase">
  <div class="phase-head"><span class="pn">FASE 02</span><h2>Durante</h2><span class="who">Lead &rarr; Cliente</span></div>
  <div class="cards">{during}</div>
</div>

<div class="phase">
  <div class="phase-head"><span class="pn">FASE 03</span><h2>Depois</h2><span class="who">Cliente &rarr; Fã</span></div>
  <div class="cards">{after}</div>
</div>

<div class="phase avoid">
  <div class="phase-head"><span class="pn">SÍNTESE</span><h2>Autoavaliação e próximo passo</h2></div>
  <div class="score-wrap">
    <div class="score"><div class="n">6<span style="font-size:16pt">/10</span></div><div class="l">Score atual</div></div>
    <div>
      <p class="lead" style="margin-top:0">Mensagem, oferta, captação no site e conversão estão fortes. Para chegar a 9-10, fechar quatro lacunas:</p>
      <ul class="gaps">
        <li><b>Meios.</b> Ativar o canal nº1 (parcerias de referência) com plano concreto e metas.</li>
        <li><b>Captar / CRM.</b> Implementar o backend (Supabase + /admin) para não perder leads e medir.</li>
        <li><b>Nutrir.</b> Montar a sequência de email (Resend), hoje inexistente em estático.</li>
        <li><b>Referências.</b> Desenhar o pedido pós-projeto e o programa de parceiros.</li>
      </ul>
    </div>
  </div>
  <div class="next">
    <p class="mono">Próximo passo recomendado</p>
    Ativar as parcerias de referência (CAC mais baixo) e, em paralelo, migrar para um backend (Vercel + Supabase) para ligar captação, nurture e o painel de leads, fechando duas lacunas de uma vez.
  </div>
</div>

</body></html>'''

out = '/tmp/ordia_pdf/Ordia-Plano-de-Marketing.pdf'
HTML(string=HTML_DOC, base_url='/tmp/ordia_pdf/').write_pdf(out)
print('PDF gerado:', out, os.path.getsize(out), 'bytes')

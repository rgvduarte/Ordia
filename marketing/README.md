# Marketing

Materiais de marketing da Ordia.

- **`Ordia-Plano-de-Marketing.pdf`** (em `public/`): o Plano de Marketing de 1
  Página, montado num template com o design system da marca (paleta nude,
  Space Grotesk, espiral áurea). Fica disponível em
  `https://rgvduarte.github.io/Ordia/Ordia-Plano-de-Marketing.pdf`.
- **`gerar-plano-pdf.py`**: gerador do PDF a partir de HTML/CSS com WeasyPrint.

## Regenerar o PDF

Requer Python com `weasyprint` e os ficheiros de fonte (Space Grotesk, Inter,
JetBrains Mono, subset latin) numa pasta `fonts/` ao lado do script, com um
`local-fonts.css` a declará-los. As fontes são obtidas do Google Fonts:

```bash
pip install weasyprint
# descarregar as fontes latin (ver histórico da sessão) para ./fonts
python3 gerar-plano-pdf.py
```

O conteúdo do plano segue `.agents/marketing-plan.md`.

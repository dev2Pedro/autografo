# Acessibilidade

- Texto normal atinge 4,5:1 sobre o fundo que a nota indica. Texto de 24px ou mais, ou negrito de 19px ou mais, atinge 3:1.
- Bordas de controles, anéis de foco e ícones com significado atingem 3:1 sobre a superfície onde aparecem.
- Todo controle é alcançável por teclado, com ordem de foco lógica.
- Foco visível: anel de 2px em `color-brand-500`, em todos os elementos interativos.
- Imagens informativas têm texto alternativo. Imagens decorativas recebem `aria-hidden`.
- Status nunca depende só de cor. Badges, alertas e células de status trazem texto ou ícone.
- Success e error têm luminância próxima (razão de 1,3:1), então se distinguem pelo rótulo textual e pelo ícone, nunca só pela cor.
- Alvos de toque têm no mínimo 44px em mobile.
- Formulários associam rótulo ao campo. Erros são vinculados ao campo por `aria-describedby` e marcados com `aria-invalid`.
- Modais prendem o foco enquanto abertos, fecham com Esc e devolvem o foco ao elemento que os abriu.

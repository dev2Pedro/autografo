Use este sistema para toda tela do AutoTrafo. Ele é uma ferramenta de trabalho técnico: priorize clareza, precisão numérica e estados visíveis. Todo valor técnico exibido segue a seção "Dados técnicos". Todo desenho exibido carrega o aviso de conteúdo hipotético e demonstrativo.

## Princípios

- Cada tela tem uma ação principal evidente. Use um botão primary por área.
- Valores técnicos usam `mono` (`value`, `value-sm`), unidade explícita e formatação pt-BR.
- Mensagens de validação espelham as regras da API. Não invente textos de erro.
- Carregamento, vazio, erro e sucesso são projetados em toda tela com dados.
- Acessibilidade é requisito. Contraste, foco e teclado seguem a seção "Acessibilidade".

## Cor

- Use `color-brand-700` para ação primária e links. Use `color-brand-900` apenas para cabeçalhos.
- Use `color-neutral-900` para texto principal e `color-neutral-700` para texto secundário.
- Use `color-neutral-500` para texto auxiliar apenas sobre `color-neutral-0`. Sobre `color-neutral-100`, use `color-neutral-700`.
- Use `color-neutral-500` para bordas de campos e controles. Use `color-neutral-300` apenas para divisórias decorativas.
- Status sempre combina cor e texto. Use `color-success-700`, `color-warning-700` e `color-error-700` com seus fundos `-100`.
- Use `color-info-700` para informação neutra e dicas.
- Use `color-brand-500` como anel de foco de 2px em todo elemento interativo.
- Use os tokens `drawing-*` somente dentro do `DrawingViewer`. A folha do desenho é branca em qualquer tema.

## Tipografia

- Texto corrido usa `small` ou `body`. Rótulos usam `small` com peso 500.
- Títulos de página usam `page-title`. Títulos de seção usam `section-title`. Subtítulos usam `subheading`.
- Legendas e metadados usam `caption`.
- Valores numéricos, unidades, IDs e cotas usam `value` ou `value-sm`, sempre na família `mono`.

## Espaçamento, raio e sombra

- Espaçamentos vêm apenas de `space-1` a `space-16`. Não use valores soltos.
- Use `radius-sm` em campos e badges, `radius-md` em botões e cards, `radius-lg` em modais.
- Use `shadow-sm` em cards em repouso e `shadow-md` em menus suspensos e modais.

## Layout e movimento

- Breakpoints: `sm` 640px, `md` 768px, `lg` 1024px, `xl` 1280px. A abordagem é mobile-first.
- Largura máxima do conteúdo: 1280px.
- Formulários usam duas colunas em `md` e uma coluna abaixo.
- Desenhos rolam horizontalmente dentro do próprio contêiner em telas menores que `md`.
- Transições de 120ms para hover e foco, e de 200ms para abertura de painéis.
- Respeite `prefers-reduced-motion`: desative animações não essenciais.

## Iconografia

- Use uma única biblioteca de ícones de traço, com tamanho padrão de 20px e espessura 1.5.
- Ícones decorativos recebem `aria-hidden`. Ícone sem texto exige rótulo acessível.
- Não use emoji como decoração.

## Componentes

Cada componente tem guia e preview próprios em `components/`. Consulte o guia antes de criar uma variação nova.

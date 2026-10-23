Ocupa o lugar do conteúdo enquanto os dados carregam, com a forma do conteúdo final.

Use em listas, cards e tabelas durante o primeiro carregamento. Mantenha as mesmas dimensões do conteúdo final para evitar salto de layout. Não use skeleton para ações pontuais: nesse caso, use `Spinner`.

Blocos usam `color-neutral-100` e são decorativos (`aria-hidden`). A região carregando anuncia o estado com `aria-busy`.

O consumidor fornece a forma do conteúdo final.

Indica um estado curto ou uma categoria, como o status de um desenho.

Use `StatusBadge` para os três estados de geração: `pending` (Pendente, atenção), `generated` (Gerado, sucesso) e `failed` (Falhou, erro). Sem desenho, use a variante neutra com o rótulo "Sem desenho".

Badge sempre combina cor e texto. Cor sozinha nunca transmite estado. Use fundo `-100` e texto `-700` da mesma família.

O consumidor fornece o estado e o rótulo.

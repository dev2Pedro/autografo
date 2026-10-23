Campo de entrada de texto ou número, com unidade opcional como sufixo.

Use sempre dentro de um `Field`, que traz o rótulo visível. Não use placeholder como rótulo. Campos numéricos usam `inputmode="numeric"` ou `inputmode="decimal"`. A unidade aparece como sufixo dentro do campo, em `value`, por exemplo `kVA`, `V`, `Hz` ou `mm`.

Borda de controle usa `color-neutral-500`. Em erro, a borda muda para `color-error-700` e a mensagem aparece abaixo do campo, vinculada por `aria-describedby`.

O consumidor fornece o valor, a unidade e a mensagem de erro, que espelha a regra da API.

# Fixação da fase 05 — Regras de negócio e TDD

## Por que `src/rules` não importa Nest nem Prisma?

As regras são funções puras: mesma entrada, mesma saída, sem efeito colateral. Sem Nest e sem Prisma elas rodam em um teste simples, sem `Test.createTestingModule`, sem mock de banco e sem subir HTTP. Também podem ser reaproveitadas por qualquer consumidor (service, job, CLI, frontend). O acoplamento fica na borda: o service busca a linha do banco, converte os tipos (`Decimal` do Prisma vira `number`) e chama `applyRules`. Os tipos próprios (`TransformerParams`, `Phases` como união de strings) evitam depender do enum do Prisma.

## Por que testar os valores de limite?

Erros de regra por faixa quase sempre aparecem nas fronteiras: `<` contra `<=`, 500 contra 501. As faixas são fechadas à direita ("até 500" inclui 500). Os testes cobrem o limite e o valor logo acima (500 e 500.01), para que trocar `<=` por `<` quebre um teste. Também cobrem entradas inválidas (0, negativo, `NaN`, `Infinity`, string), que lançam `RangeError`.

## Qual a vantagem de regra como dado?

A cadeia de `if` mistura a regra (os limites e os valores) com o fluxo de controle. Na tabela de faixas (`Band<T>[]`), as regras são dados legíveis, e uma única função (`pickBand`) decide. Mudar um limite é editar uma linha, adicionar uma faixa não cria um novo `if`, e a função de decisão é testada uma vez só. A tabela espelha o `docs/rules.md`, o que facilita revisar regra e código lado a lado.

## Como o ciclo red-green-refactor apareceu aqui?

- **Red:** o teste de `getRadiatorCount` falhou porque o módulo não existia.
- **Green:** a cadeia de `if` mínima fez os testes passarem.
- **Refactor:** a cadeia foi trocada pela tabela com `pickBand`, mantendo os 14 testes verdes. O `pickBand` nasceu com testes próprios, escritos antes dele.

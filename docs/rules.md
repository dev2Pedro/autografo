# Regras hipotéticas do AutoTrafo

> Regras e valores **hipotéticos e demonstrativos**. Não reproduzem cálculos nem normas reais de engenharia elétrica.

As regras transformam `TransformerParams` em `DrawingConfig` (`src/rules`). Cada regra é uma função pura, sem Nest e sem Prisma.

## Convenções

- Faixa de potência: **"até X" inclui X**. Exemplo: 500 kVA cai na faixa "até 500", 501 kVA cai na seguinte.
- Todas as faixas são fechadas à direita (`<=`). A última faixa não tem limite superior.
- A potência (`powerKva`) deve ser um número finito e maior que zero. Caso contrário, a regra lança `RangeError`. A validação de formato é do DTO. Esta checagem protege contra valores que chegam como string (`Decimal` do Prisma).
- Valores informados em `bushingCount` e `radiatorCount` no cadastro **não entram** no cálculo. As regras sempre calculam esses valores.

## Radiadores

Depende de `powerKva`.

| Potência (kVA)     | Radiadores |
| ------------------ | ---------- |
| até 500            | 4          |
| acima de 500 até 750  | 5       |
| acima de 750 até 1000 | 6       |
| acima de 1000      | 8          |

## Conservador

Depende de `powerKva`.

| Potência (kVA) | Conservador |
| -------------- | ----------- |
| até 500        | não         |
| acima de 500   | sim         |

## Buchas

Depende de `phases`.

| Fases | Buchas AT | Buchas BT |
| ----- | --------- | --------- |
| MONO  | 1         | 2         |
| TRI   | 3         | 3         |

## Dimensões mínimas (mm)

Depende de `powerKva`. Valor informado menor que o mínimo, ou ausente, é substituído pelo mínimo. Valor informado maior ou igual ao mínimo é mantido.

| Potência (kVA)        | Largura | Altura | Profundidade |
| --------------------- | ------- | ------ | ------------ |
| até 500               | 900     | 1200   | 700          |
| acima de 500 até 750  | 1000    | 1300   | 800          |
| acima de 750 até 1000 | 1100    | 1400   | 900          |
| acima de 1000         | 1200    | 1500   | 1000         |

## Tanque

`hasTank` passa direto da entrada para a saída.

## Resultado esperado para o seed

| Transformador | Radiadores | Buchas AT/BT | Conservador | Dimensões (L×A×P) |
| ------------- | ---------- | ------------ | ----------- | ----------------- |
| 500 kVA TRI   | 4          | 3 / 3        | não         | 900×1200×700      |
| 750 kVA TRI   | 5          | 3 / 3        | sim         | 1000×1300×800     |
| 1000 kVA TRI  | 6          | 3 / 3        | sim         | 1100×1400×900     |

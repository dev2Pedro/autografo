Apresenta listas de registros para leitura, comparação e ação.

Use para listagens de transformadores e de versões. Colunas numéricas alinham à direita e usam `value-sm`. O cabeçalho da coluna traz a unidade, como "Potência (kVA)". Cabeçalho fica fixo em listas longas, e a tabela rola horizontalmente em telas menores.

Linha inteira é clicável somente quando houver uma ação principal única. Caso contrário, use um botão na última coluna. Estados obrigatórios: carregando (`Skeleton`), vazio (`EmptyState`) e erro (`ErrorState`).

O consumidor fornece as colunas, os registros e a ação principal, se houver.

# AutoTrafo — Instruções para Claude Code

## Documentação

- Leia `docs/project.md` para entender os requisitos e o planejamento.
- Consulte @docs/design-system/README.md ao trabalhar na interface.
  Tokens em `docs/design-system/tokens.json`; guias por componente em `docs/design-system/components/<Nome>/README.md`.

## Organização

- Frontend: apps/frontend
- Backend: apps/backend

## Regras de desenvolvimento

- Analise o código existente antes de modificá-lo.
- Diferencie funcionalidades planejadas das implementadas.
- Respeite a arquitetura e as dependências existentes.
- Não implemente funcionalidades fora do escopo solicitado.
- Não altere o backend durante tarefas exclusivas do frontend.
- Execute os testes e verificações relevantes após as mudanças.
- Preserve as decisões documentadas, sinalizando conflitos antes de mudanças arquiteturais relevantes.

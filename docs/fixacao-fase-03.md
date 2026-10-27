# Fixação da fase 03 — CRUD e Injeção de Dependência

## Por que o controller deve ser fino?

O controller só traduz HTTP: extrai e converte parâmetros (`ParseIntPipe`, `@Body`), delega ao service e define o status de resposta. Regra de negócio e acesso ao banco ficam no service. Assim a lógica é testável sem subir HTTP (basta mockar o `PrismaService`), pode ser reutilizada por outros consumidores (jobs, CLI) e o controller não muda quando a regra muda.

## PUT vs PATCH — qual foi escolhido e por quê?

PATCH. PUT substitui o recurso inteiro (todos os campos obrigatórios); PATCH altera só os campos enviados. O `UpdateTransformerDto` usa `PartialType(CreateTransformerDto)`, então todos os campos são opcionais mas validados quando presentes. Como o cliente (formulário de edição) normalmente muda poucos campos, PATCH evita reenviar e sobrescrever dados por engano.

## Onde tratar o erro do Prisma?

Em um exception filter global (`PrismaExceptionFilter`, registrado em `main.ts`), não nos services. O filter converte `P2025` (registro não encontrado) em 404 e `P2002` (violação de unique) em 409; outros códigos viram 500. Os services ficam sem `try/catch`, só com a regra de negócio, e o mapeamento de erro é único e consistente para todos os resources. Um `catch` genérico que vira 404 (como na primeira versão do `update`) é errado: esconderia falhas reais de banco como "não encontrado".

## Escopo REQUEST — o que é e quando usar?

Por padrão providers são singletons (uma instância para a aplicação). Com `Scope.REQUEST` o Nest cria uma instância nova do provider a cada requisição, e essa instância pode injetar o objeto da requisição (usuário logado, tenant). Custo: a cadeia de dependências (inclusive controllers que dependem dele) também vira request-scoped, com mais alocação e menor desempenho. Usar apenas quando o estado realmente depende da requisição. Não é o caso do `PrismaService` nem do `TransformersService`, que são stateless e ficam como singleton.

## DELETE: hard ou soft delete?

Hard delete, com 204. `Drawing` e `DrawingVersion` têm `onDelete: Cascade`, então remover um transformador remove seus desenhos e versões. Se for preciso histórico/recuperação no futuro, a alternativa é um campo `deletedAt` (soft delete), decisão a ser tomada antes de existirem dados reais.

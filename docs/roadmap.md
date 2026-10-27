# AutoTrafo — Roadmap de estudo e desenvolvimento

Espelho das tarefas do espaço **AutoTrafo** no ClickUp. Cada tarefa traz o objetivo resumido e o critério de pronto. O passo a passo completo e os links de documentação ficam na tarefa do ClickUp.

Atualizado em 27/10/2026.

**Legenda:** `[x]` concluída · `[~]` em andamento · `[ ]` a fazer

**Progresso:** 50 de 109 tarefas concluídas · 0 em andamento

---

## 00 Pré-requisitos

- [x] [00.1 TypeScript essencial](https://app.clickup.com/t/wdwmbdtkpt) — Revisar interface vs type, generics, utility types, classes e decorators (base do Nest). _Pronto quando_ explicar o que o Nest faz com `constructor(private readonly service: X)`.
- [x] [00.2 HTTP e REST](https://app.clickup.com/t/wdwmbdtkpu) — Verbos, status codes, headers e CORS como parte do contrato da API. _Pronto quando_ explicar PUT vs PATCH e por que DELETE pode retornar 204.
- [x] [00.3 SQL e PostgreSQL](https://app.clickup.com/t/wdwmbdtkpv) — Chaves, JOIN, índices, transações, tipos do Postgres e normalização. _Pronto quando_ explicar json vs jsonb e numeric vs real.
- [x] [00.4 Node.js: event loop e async](https://app.clickup.com/t/wdwmbdtkpw) — Event loop, Promises e streams, para não bloquear a API. _Pronto quando_ explicar por que um loop síncrono de 5s trava todos os usuários.

## 01 Setup e ambiente

- [x] [01.0 Instalar ferramentas](https://app.clickup.com/t/wdwmbdtkpx) — Node LTS, pnpm via corepack, Docker Desktop e cliente de banco. _Pronto quando_ node, pnpm e docker respondem no terminal.
- [x] [01.1 Criar monorepo com pnpm workspaces](https://app.clickup.com/t/wdwmbdtkpy) — Estrutura `apps/backend` e `apps/frontend`, `pnpm-workspace.yaml` e `.gitignore`. _Pronto quando_ a estrutura existe e o primeiro commit foi feito.
- [x] [01.2 Subir PostgreSQL com Docker Compose](https://app.clickup.com/t/wdwmbdtkpz) — Serviço `postgres:17` com volume nomeado e healthcheck. _Pronto quando_ o container fica healthy e o cliente conecta.
- [x] [01.3 Criar backend NestJS e ler a estrutura](https://app.clickup.com/t/wdwmbdtkq0) — Gerar o Nest e entender main, module, controller, service e spec. _Pronto quando_ o Hello World responde e cada arquivo tem papel explicado.
- [x] [01.4 Configuração e variáveis de ambiente](https://app.clickup.com/t/wdwmbdtkq1) — `@nestjs/config` global, `.env` e `.env.example`, validação no boot. _Pronto quando_ a app não sobe sem `DATABASE_URL`.
- [x] [01.5 Módulo Health](https://app.clickup.com/t/wdwmbdtkq2) — Módulo e controller gerados pelo CLI com `GET /health`. _Pronto quando_ `GET /health` retorna JSON.
- [x] [01.6 Criar frontend Next.js](https://app.clickup.com/t/wdwmbdtkq3) — Next com TypeScript, Tailwind, App Router e `API_URL` no `.env.local`. _Pronto quando_ o Next roda em :3000.
- [x] [01.7 Experimento de CORS](https://app.clickup.com/t/wdwmbdtkq4) — Comparar fetch no Server Component e no Client Component, e liberar CORS só para `localhost:3000`. _Pronto quando_ o erro foi visto, corrigido com origem restrita e explicado.
- [x] [01.8 Scripts na raiz e commit](https://app.clickup.com/t/wdwmbdtkq5) — Script `dev` na raiz que sobe os dois apps em paralelo. _Pronto quando_ um único `pnpm dev` na raiz sobe tudo.
- [x] [01.9 Fixação da fase 01](https://app.clickup.com/t/wdwmbdtkq6) — Perguntas escritas sobre providers/exports, CORS, `down -v` e validação de env, mais checklist final da fase. _Pronto quando_ as respostas e o checklist estão completos.

## 02 Prisma e modelagem

- [x] [02.1 Estudar ORM vs query builder](https://app.clickup.com/t/wdwmbdtkq7) — Comparar Prisma, TypeORM, Drizzle e Lucid. _Pronto quando_ a escolha do Prisma está registrada com 3 prós e 2 contras.
- [x] [02.2 Instalar e inicializar Prisma](https://app.clickup.com/t/wdwmbdtkq8) — `prisma init` com Prisma 6 apenas no backend (`url = env("DATABASE_URL")` no schema, sem `prisma.config.ts` nem driver adapter). _Pronto quando_ a conexão lê `DATABASE_URL` do `.env`.
- [x] [02.3 Modelar Transformer](https://app.clickup.com/t/wdwmbdtkq9) — Model com tipos justificados, enum de fases e nomes snake_case no banco. _Pronto quando_ o model está escrito e cada tipo justificado.
- [x] [02.4 Modelar Drawing e DrawingVersion](https://app.clickup.com/t/wdwmbdtkqa) — Escolher a estrutura, snapshot de `parameters` em JSONB, relações, unique e índices. _Pronto quando_ explicar por que o snapshot torna versão antiga reproduzível.
- [x] [02.5 Criar e inspecionar migration](https://app.clickup.com/t/wdwmbdtkqb) — Migration inicial, leitura do SQL gerado e uso do Prisma Studio. _Pronto quando_ as 3 tabelas existem e está claro por que não usar `migrate dev` em produção.
- [x] [02.6 PrismaService e PrismaModule](https://app.clickup.com/t/wdwmbdtkqc) — Service com `OnModuleInit` e módulo que exporta o service. _Pronto quando_ qualquer service consegue injetar `PrismaService`.
- [x] [02.7 Seed de dados](https://app.clickup.com/t/wdwmbdtkqd) — Seed idempotente com 3 transformadores (500, 750 e 1000 kVA). _Pronto quando_ rodar o seed duas vezes não duplica dados.
- [x] [02.8 Health check com banco (Terminus)](https://app.clickup.com/t/wdwmbdtkqe) — Trocar o `/health` por `@nestjs/terminus` com indicador do Prisma. _Pronto quando_ `/health` reflete o estado real do banco.
- [x] [02.9 Fixação da fase 02](https://app.clickup.com/t/wdwmbdtkqf) — Perguntas escritas sobre migrations, JSONB, `onDelete: Cascade` e exports. _Pronto quando_ as respostas estão escritas.

## 03 CRUD e Injeção de Dependência

- [x] [03.1 Estudar Injeção de Dependência no Nest](https://app.clickup.com/t/wdwmbdtkqg) — Providers, tokens, escopos e custom providers. _Pronto quando_ explicar como trocar o `PrismaService` por um mock num teste.
- [x] [03.2 Gerar resource transformers](https://app.clickup.com/t/wdwmbdtkqh) — `nest g resource`, remover `entities` e injetar o Prisma. _Pronto quando_ o módulo está registrado e o service acessa o Prisma.
- [x] [03.3 GET /transformers com paginação](https://app.clickup.com/t/wdwmbdtkqj) — `skip`/`take`, `page`/`limit`, ordenação e resposta `{ data, meta }`. _Pronto quando_ `?page=2&limit=1` retorna o segundo transformador do seed.
- [x] [03.4 GET /transformers/:id e 404](https://app.clickup.com/t/wdwmbdtkqk) — `ParseIntPipe` e `NotFoundException`. _Pronto quando_ um id ruim nunca retorna 500.
- [x] [03.5 POST /transformers](https://app.clickup.com/t/wdwmbdtkqm) — Criação com controller fino delegando ao service. _Pronto quando_ a criação funciona pelo Postman/APIDog.
- [x] [03.6 PATCH /transformers/:id](https://app.clickup.com/t/wdwmbdtkqn) — Decidir PUT ou PATCH e tratar o erro P2025 do Prisma. _Pronto quando_ a atualização parcial funciona e o 404 está correto.
- [x] [03.7 DELETE /transformers/:id](https://app.clickup.com/t/wdwmbdtkqp) — Remoção com 204 e decisão entre hard e soft delete. _Pronto quando_ DELETE retorna 204 e o efeito nas relações está claro.
- [x] [03.8 Exception filter para erros do Prisma](https://app.clickup.com/t/wdwmbdtkqq) — Filter global que mapeia P2002 para 409 e P2025 para 404. _Pronto quando_ os services não têm try/catch e os erros HTTP estão corretos.
- [x] [03.9 Collection Postman/APIDog](https://app.clickup.com/t/wdwmbdtkqr) — Collection com environment, requests do CRUD e casos de erro. _Pronto quando_ a collection está versionada no repositório.
- [x] [03.10 Fixação da fase 03](https://app.clickup.com/t/wdwmbdtkqt) — Perguntas escritas sobre controller fino, PUT vs PATCH, onde tratar erro e escopo REQUEST. _Pronto quando_ as respostas estão escritas.

## 04 Validação

- [x] [04.1 Estudar DTO vs entidade vs model](https://app.clickup.com/t/wdwmbdtkqu) — Separar o contrato da API do formato do banco. _Pronto quando_ explicar por que não usar o tipo do Prisma direto no `@Body`.
- [x] [04.2 ValidationPipe global](https://app.clickup.com/t/wdwmbdtkqv) — class-validator com `whitelist`, `forbidNonWhitelisted` e `transform`. _Pronto quando_ campo desconhecido no body retorna 400.
- [x] [04.3 CreateTransformerDto com regras](https://app.clickup.com/t/wdwmbdtkqw) — Decorators para as regras do plano, limites máximos e mensagens em português. _Pronto quando_ cada regra tem um request de erro na collection.
- [x] [04.4 UpdateDto com PartialType](https://app.clickup.com/t/wdwmbdtkqx) — `PartialType` e os demais mapped types. _Pronto quando_ o update aceita campos parciais e valida os enviados.
- [x] [04.5 Validar query params](https://app.clickup.com/t/wdwmbdtkqy) — `PaginationQueryDto` com conversão para número, defaults e máximo. _Pronto quando_ `?limit=9999` é limitado ou rejeitado.
- [x] [04.6 Documentar API com Swagger](https://app.clickup.com/t/wdwmbdtkqz) — `@nestjs/swagger` em `/docs` com plugin do CLI e respostas de erro. _Pronto quando_ `/docs` mostra todos os endpoints com schemas.
- [x] [04.7 Estudo comparativo: Zod](https://app.clickup.com/t/wdwmbdtkr0) — Validar um endpoint com Zod numa branch e comparar com class-validator. _Pronto quando_ a decisão está registrada.
- [x] [04.8 Fixação da fase 04](https://app.clickup.com/t/wdwmbdtkr1) — Perguntas escritas sobre `whitelist`, transform de query e class-validator vs Zod. _Pronto quando_ as respostas estão escritas.

## 05 Regras de negócio e TDD

- [x] [05.1 Estudar função pura e TDD](https://app.clickup.com/t/wdwmbdtkr2) — Função pura e ciclo red-green-refactor. _Pronto quando_ explicar o ciclo red-green-refactor.
- [x] [05.2 Escrever as regras hipotéticas](https://app.clickup.com/t/wdwmbdtkr4) — Tabela em `docs/rules.md` com radiadores, buchas, conservador e dimensões mínimas. _Pronto quando_ a tabela está completa e sem ambiguidade nos limites.
- [x] [05.3 Criar pasta rules e tipos](https://app.clickup.com/t/wdwmbdtkr5) — `src/rules` sem imports do Nest ou do Prisma, com `TransformerParams` e `DrawingConfig`. _Pronto quando_ a pasta está isolada e os tipos definidos.
- [x] [05.4 TDD: regra de radiadores](https://app.clickup.com/t/wdwmbdtkr6) — Testes primeiro com `test.each` e casos de limite. _Pronto quando_ todos os limites estão cobertos e verdes.
- [x] [05.5 Refactor: regras como dados](https://app.clickup.com/t/wdwmbdtkr7) — Trocar a cadeia de if por uma tabela de faixas. _Pronto quando_ não há if de faixa e os testes continuam verdes.
- [x] [05.6 TDD: buchas e conservador](https://app.clickup.com/t/wdwmbdtkr8) — Mesmo ciclo para buchas AT, buchas BT e conservador. _Pronto quando_ todas as regras de `docs/rules.md` estão testadas.
- [x] [05.7 Função agregadora applyRules](https://app.clickup.com/t/wdwmbdtkr9) — `applyRules(params)` retorna o `DrawingConfig` completo sem mutar a entrada. _Pronto quando_ há um teste por transformador do seed.
- [x] [05.8 Cobertura de testes](https://app.clickup.com/t/wdwmbdtkra) — Meta de 100% em `src/rules` com `coverageThreshold`. _Pronto quando_ o teste falha se a cobertura de rules cair.
- [x] [05.9 Fixação da fase 05](https://app.clickup.com/t/wdwmbdtkrb) — Perguntas escritas sobre isolamento das regras, testes de limite e regra como dado. _Pronto quando_ as respostas estão escritas.

## 06 Motor SVG

- [ ] [06.1 Estudar SVG](https://app.clickup.com/t/wdwmbdtkrc) — Sistema de coordenadas, `viewBox`, elementos básicos e `marker`. _Pronto quando_ desenhar uma cota com setas à mão.
- [ ] [06.2 Decidir abordagem de geração (ADR)](https://app.clickup.com/t/wdwmbdtkrd) — Prototipar template strings, svg.js ou React no servidor. _Pronto quando_ o ADR está escrito.
- [ ] [06.3 Definir tipos do DrawingSpec](https://app.clickup.com/t/wdwmbdtkre) — Shapes em mm e `DrawingSpec` com viewBox e lista de shapes. _Pronto quando_ os tipos estão em `drawing/types`.
- [ ] [06.4 Geometria: corpo do tanque](https://app.clickup.com/t/wdwmbdtkrf) — Função pura da vista frontal do tanque com margem para cotas. _Pronto quando_ está testada sem renderizar.
- [ ] [06.5 Geometria: buchas](https://app.clickup.com/t/wdwmbdtkrg) — Distribuir N buchas AT e BT no topo com espaçamento uniforme. _Pronto quando_ a distribuição simétrica está testada.
- [ ] [06.6 Geometria: radiadores](https://app.clickup.com/t/wdwmbdtkrh) — Metade dos radiadores de cada lado e regra documentada para número ímpar. _Pronto quando_ está testada com 4, 6 e 8.
- [ ] [06.7 Geometria: conservador](https://app.clickup.com/t/wdwmbdtkrj) — Conservador acima do tanque, só quando `hasConservator`. _Pronto quando_ está testado com e sem conservador.
- [ ] [06.8 Cotas (linhas de dimensão)](https://app.clickup.com/t/wdwmbdtkrk) — Shape `Dimension` com markers, linhas de extensão e texto rotacionado. _Pronto quando_ as cotas são legíveis em qualquer escala.
- [ ] [06.9 Carimbo (title block)](https://app.clickup.com/t/wdwmbdtkrm) — Carimbo no canto inferior direito com nome, potência, tensões, fases, data e versão. _Pronto quando_ o carimbo aparece com dados reais.
- [ ] [06.10 Renderizador DrawingSpec → SVG](https://app.clickup.com/t/wdwmbdtkrn) — Converter shapes em SVG com escape de texto contra XSS. _Pronto quando_ um nome com `<script>` não executa nada.
- [ ] [06.11 Snapshot test do SVG](https://app.clickup.com/t/wdwmbdtkrp) — `toMatchSnapshot` para os 3 transformadores do seed. _Pronto quando_ os snapshots estão versionados.
- [ ] [06.12 POST /drawings/generate com versionamento](https://app.clickup.com/t/wdwmbdtkrq) — Fluxo regras → spec → SVG salvo em transação com nova versão. _Pronto quando_ gerar 3 vezes cria as versões 1, 2 e 3.
- [ ] [06.13 GET /drawings/:id/svg](https://app.clickup.com/t/wdwmbdtkrr) — Retornar `image/svg+xml` com query param `version` opcional. _Pronto quando_ o browser renderiza o desenho pela URL.
- [ ] [06.14 Fixação da fase 06](https://app.clickup.com/t/wdwmbdtkrt) — Perguntas escritas sobre geometria vs renderização, viewBox, transação e escape. _Pronto quando_ as respostas estão escritas.

## 07 Frontend Next.js

- [ ] [07.1 Estudar App Router a fundo](https://app.clickup.com/t/wdwmbdtkru) — Server e Client Components, data fetching, Server Actions e arquivos especiais. _Pronto quando_ decidir onde cada tela busca dados.
- [ ] [07.2 Camada de API tipada](https://app.clickup.com/t/wdwmbdtkrv) — `lib/api` com funções tipadas e tratamento de erro central. _Pronto quando_ nenhuma tela chama fetch direto.
- [ ] [07.3 Layout e UI base](https://app.clickup.com/t/wdwmbdtkrw) — Header, navegação e componentes base com paleta e tipografia definidas. _Pronto quando_ o layout está aplicado em todas as páginas.
- [ ] [07.4 Dashboard (lista de transformadores)](https://app.clickup.com/t/wdwmbdtkrx) — Lista no servidor com estado vazio, loading, erro e paginação. _Pronto quando_ lista, vazio, loading e erro funcionam.
- [ ] [07.5 Formulário novo transformador](https://app.clickup.com/t/wdwmbdtkry) — react-hook-form com Zod espelhando o DTO e erros 400 nos campos. _Pronto quando_ há validação no front e no back com erros claros.
- [ ] [07.6 Página de detalhes](https://app.clickup.com/t/wdwmbdtkrz) — Dados técnicos, configuração calculada e lista de desenhos e versões. _Pronto quando_ um id inexistente mostra a página 404.
- [ ] [07.7 Editar transformador](https://app.clickup.com/t/wdwmbdtkt0) — Reutilizar o formulário e revalidar os detalhes. _Pronto quando_ a edição reflete na hora.
- [ ] [07.8 Botão gerar desenho](https://app.clickup.com/t/wdwmbdtkt1) — Server Action com estado pending, revalidação e toast. _Pronto quando_ gerar mostra loading e a nova versão aparece.
- [ ] [07.9 Visualizador SVG](https://app.clickup.com/t/wdwmbdtkt2) — `<img>` vs SVG inline, zoom/pan e abrir em nova aba. _Pronto quando_ o desenho tem zoom/pan e a abordagem segura está justificada.
- [ ] [07.10 Histórico de versões](https://app.clickup.com/t/wdwmbdtkt3) — Lista de versões, SVG por versão e comparação lado a lado. _Pronto quando_ a comparação lado a lado funciona.
- [ ] [07.11 Excluir com confirmação](https://app.clickup.com/t/wdwmbdtkt4) — Dialog de confirmação e volta ao dashboard. _Pronto quando_ não há exclusão por clique acidental.
- [ ] [07.12 Fixação da fase 07](https://app.clickup.com/t/wdwmbdtkt5) — Perguntas escritas sobre `"use client"`, Server Action vs fetch, `<img>` vs inline e `revalidatePath`. _Pronto quando_ as respostas estão escritas.

## 08 Testes de API

- [ ] [08.1 Estudar pirâmide de testes](https://app.clickup.com/t/wdwmbdtkt6) — Proporção entre unitários, integração e e2e. _Pronto quando_ classificar cada teste que vai escrever.
- [ ] [08.2 Unit tests dos services com mock](https://app.clickup.com/t/wdwmbdtkt7) — `Test.createTestingModule` com `PrismaService` mockado. _Pronto quando_ os services estão testados sem banco.
- [ ] [08.3 Banco isolado para testes](https://app.clickup.com/t/wdwmbdtkt8) — Testcontainers ou database separado, com `migrate deploy` antes. _Pronto quando_ os testes nunca tocam o banco de desenvolvimento.
- [ ] [08.4 E2E: CRUD de transformers](https://app.clickup.com/t/wdwmbdtkt9) — Supertest com os mesmos pipes globais do `main.ts`. _Pronto quando_ todos os endpoints do plano estão cobertos.
- [ ] [08.5 E2E: geração e versionamento](https://app.clickup.com/t/wdwmbdtkta) — Gerar, regenerar e conferir que a versão 1 mantém os parâmetros antigos. _Pronto quando_ o snapshot de parâmetros está comprovado por teste.
- [ ] [08.6 Limpeza entre testes](https://app.clickup.com/t/wdwmbdtktb) — Truncate ou rollback entre testes. _Pronto quando_ os testes passam em qualquer ordem.
- [ ] [08.7 Testes de frontend (opcional)](https://app.clickup.com/t/wdwmbdtktc) — Vitest + Testing Library no formulário e Playwright no fluxo completo. _Pronto quando_ um e2e do fluxo principal está verde.
- [ ] [08.8 Scripts e documentação de testes](https://app.clickup.com/t/wdwmbdtktd) — Scripts `test`, `test:e2e` e `test:cov` na raiz e seção no README. _Pronto quando_ qualquer pessoa roda os testes seguindo o README.
- [ ] [08.9 Fixação da fase 08](https://app.clickup.com/t/wdwmbdtkte) — Perguntas escritas sobre mock vs e2e, pipes no e2e e independência de ordem. _Pronto quando_ as respostas estão escritas.

## 09 Exportação PDF

- [ ] [09.1 Pesquisar opções de PDF (ADR)](https://app.clickup.com/t/wdwmbdtktf) — Comparar Playwright/Puppeteer e pdfkit + svg-to-pdfkit. _Pronto quando_ o ADR está escrito.
- [ ] [09.2 Página, unidades e margens](https://app.clickup.com/t/wdwmbdtktg) — Formato A3 ou A4 paisagem, conversão mm→pt e escala com margem. _Pronto quando_ o PDF impresso mantém a proporção.
- [ ] [09.3 PdfService](https://app.clickup.com/t/wdwmbdtkth) — Service que recebe SVG e devolve Buffer ou Stream sem bloquear a API. _Pronto quando_ o service está testado isoladamente.
- [ ] [09.4 GET /drawings/:id/pdf](https://app.clickup.com/t/wdwmbdtktj) — `StreamableFile` com `application/pdf` e `Content-Disposition`. _Pronto quando_ o browser baixa o arquivo com nome correto.
- [ ] [09.5 Botão exportar no frontend](https://app.clickup.com/t/wdwmbdtktk) — Link direto para a API ou Route Handler como proxy. _Pronto quando_ o download pelo front funciona.
- [ ] [09.6 Teste do PDF](https://app.clickup.com/t/wdwmbdtktm) — E2E confere headers e que o corpo começa com `%PDF`. _Pronto quando_ o teste está verde.
- [ ] [09.7 Fixação da fase 09](https://app.clickup.com/t/wdwmbdtktn) — Perguntas escritas sobre reuso do browser headless, inline vs attachment e fila. _Pronto quando_ as respostas estão escritas.

## 10 Docker e CI/CD

- [ ] [10.1 Estudar Docker para Node](https://app.clickup.com/t/wdwmbdtktp) — Multi-stage, `.dockerignore`, slim vs alpine, usuário não-root e cache de camadas. _Pronto quando_ explicar por que a ordem do COPY importa.
- [ ] [10.2 Dockerfile do backend](https://app.clickup.com/t/wdwmbdtktq) — Build com Prisma, runtime enxuto e estratégia de migrations. _Pronto quando_ a imagem sobe e conecta no banco.
- [ ] [10.3 Dockerfile do frontend](https://app.clickup.com/t/wdwmbdtktr) — `output: 'standalone'` e cuidado com `NEXT_PUBLIC_` no build. _Pronto quando_ a imagem é pequena e funcional.
- [ ] [10.4 Docker Compose completo](https://app.clickup.com/t/wdwmbdtktt) — Postgres, backend e frontend com `service_healthy` e rede interna. _Pronto quando_ `docker compose up` sobe o sistema inteiro do zero.
- [ ] [10.5 Lint e formatação](https://app.clickup.com/t/wdwmbdtktu) — ESLint e Prettier consistentes, opcionalmente com husky + lint-staged. _Pronto quando_ `pnpm lint` na raiz passa.
- [ ] [10.6 Pipeline CI no GitHub Actions](https://app.clickup.com/t/wdwmbdtktv) — Lint, test e build com Postgres de serviço e badge no README. _Pronto quando_ um PR com teste quebrado fica vermelho.
- [ ] [10.7 Build e push de imagem](https://app.clickup.com/t/wdwmbdtktw) — Publicar no GHCR após CI verde na main, com tags por SHA e latest. _Pronto quando_ as imagens aparecem no GHCR.
- [ ] [10.8 Deploy (opcional)](https://app.clickup.com/t/wdwmbdtktx) — Railway, Render ou Fly.io com Postgres gerenciado e secrets fora do repo. _Pronto quando_ há uma URL pública funcionando.
- [ ] [10.9 README de portfólio](https://app.clickup.com/t/wdwmbdtkty) — Descrição, prints, arquitetura, como rodar, decisões e aprendizados. _Pronto quando_ alguém entende o projeto em 2 minutos.
- [ ] [10.10 Fixação da fase 10](https://app.clickup.com/t/wdwmbdtktz) — Perguntas escritas sobre multi-stage, rede do Compose, `NEXT_PUBLIC_` e CI vs CD. _Pronto quando_ as respostas estão escritas.

## 11 Evoluções

- [ ] [11.1 Autenticação com JWT](https://app.clickup.com/t/wdwmbdtku0) — Model User com hash, login, guard global e token em cookie httpOnly. _Pronto quando_ rotas protegidas retornam 401 sem token.
- [ ] [11.2 Autorização por papéis](https://app.clickup.com/t/wdwmbdtku1) — Campo `role`, decorator `@Roles` e `RolesGuard`. _Pronto quando_ usuário comum recebe 403 ao excluir.
- [ ] [11.3 Auditoria](https://app.clickup.com/t/wdwmbdtku2) — `AuditLog` via interceptor ou eventos, com tela no front. _Pronto quando_ alterar e regenerar aparecem no log.
- [ ] [11.4 Webhooks](https://app.clickup.com/t/wdwmbdtku3) — Evento `drawing.generated` com assinatura HMAC, retry e idempotency key. _Pronto quando_ o receptor valida a assinatura e recebe o evento.
- [ ] [11.5 Geração assíncrona com BullMQ](https://app.clickup.com/t/wdwmbdtku4) — Redis, fila de desenhos, resposta 202 e acompanhamento por polling ou SSE. _Pronto quando_ a API responde na hora e o desenho aparece ao fim do job.
- [ ] [11.6 Armazenamento de arquivos](https://app.clickup.com/t/wdwmbdtku5) — MinIO compatível com S3, banco só com a chave e URLs assinadas. _Pronto quando_ os PDFs são servidos do storage.
- [ ] [11.7 Observabilidade](https://app.clickup.com/t/wdwmbdtku6) — Logs JSON com nestjs-pino, request id e duração da geração. _Pronto quando_ uma requisição é rastreável do início ao fim pelos logs.

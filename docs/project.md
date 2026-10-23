# AutoTrafo — Automação de Desenhos de Transformadores

## 1. Visão geral

O **AutoTrafo** é um projeto pessoal de desenvolvimento web inspirado em sistemas de **automação de desenhos técnicos de transformadores**.

A aplicação terá como objetivo receber parâmetros técnicos de um transformador, validar essas informações, aplicar regras de negócio simplificadas e gerar automaticamente uma representação gráfica do equipamento.

> **Importante:** as regras e cálculos utilizados no projeto serão hipotéticos e terão finalidade exclusivamente demonstrativa. O projeto não pretende reproduzir cálculos ou normas reais de engenharia elétrica.

### Fluxo principal

```text
Dados do transformador
        ↓
Validação
        ↓
Regras de negócio
        ↓
Cálculo das características
        ↓
Geração do desenho
        ↓
Visualização
        ↓
Exportação
```

---

# 2. Objetivos

## Objetivo principal

Desenvolver uma aplicação web capaz de automatizar a geração de desenhos técnicos simplificados a partir de parâmetros de um transformador.

## Objetivos específicos

- Criar uma API REST utilizando NestJS.
- Criar uma interface web utilizando Next.js e React.
- Persistir os dados utilizando PostgreSQL.
- Implementar validação de dados.
- Criar regras de negócio para determinar características do desenho.
- Gerar desenhos programaticamente utilizando SVG.
- Permitir visualizar o desenho no navegador.
- Permitir gerar/exportar uma versão em PDF.
- Criar histórico de desenhos e versões.
- Implementar testes automatizados.
- Estruturar o projeto para futura integração com CI/CD.
- Demonstrar conceitos de desenvolvimento web aplicados a um problema de automação.

---

# 3. Stack tecnológica

## Backend

- **NestJS**
- **TypeScript**
- **Node.js**

Responsável por:

- API REST;
- autenticação, se implementada;
- validação;
- regras de negócio;
- gerenciamento dos transformadores;
- geração dos desenhos;
- gerenciamento das versões;
- integração com banco de dados.

## Frontend

- **Next.js**
- **React**
- **TypeScript**

Responsável por:

- interface da aplicação;
- dashboard;
- formulários;
- visualização dos transformadores;
- visualização do desenho;
- histórico;
- interação com a API.

## Banco de dados

- **PostgreSQL**

Responsável por armazenar:

- transformadores;
- parâmetros técnicos;
- desenhos gerados;
- versões;
- informações de geração;
- timestamps.

---

# 4. Arquitetura

A arquitetura inicial será dividida em três partes:

```text
┌─────────────────────────────┐
│          Next.js            │
│                             │
│ React + Interface Web       │
└──────────────┬──────────────┘
               │
               │ HTTP / REST / JSON
               ▼
┌─────────────────────────────┐
│           NestJS            │
│                             │
│ Controllers                 │
│ Services                    │
│ DTOs / Validation           │
│ Business Rules              │
│ Drawing Generator           │
└──────────────┬──────────────┘
               │
               │ Prisma / SQL
               ▼
┌─────────────────────────────┐
│         PostgreSQL          │
│                             │
│ Transformers                │
│ Drawings                    │
│ Drawing Versions            │
└─────────────────────────────┘
```

---

# 5. Domínio da aplicação

O sistema terá como entidade principal o **Transformador**.

Cada transformador possuirá informações técnicas que serão utilizadas pelo sistema para determinar como o desenho deverá ser gerado.

## Exemplo de dados

```json
{
  "name": "Transformador 500 kVA",
  "power": 500,
  "primaryVoltage": 13800,
  "secondaryVoltage": 380,
  "frequency": 60,
  "phases": 3,
  "width": 900,
  "height": 1200,
  "depth": 700
}
```

---

# 6. Parâmetros do transformador

O MVP utilizará uma quantidade reduzida de parâmetros.

## Dados elétricos

- Potência;
- Tensão primária;
- Tensão secundária;
- Frequência;
- Quantidade de fases.

## Dados físicos

- Largura;
- Altura;
- Profundidade.

## Configurações

- Quantidade de buchas;
- Quantidade de radiadores;
- Possui tanque;
- Possui conservador.

---

# 7. Regras de negócio

O principal diferencial do projeto será transformar os dados fornecidos pelo usuário em características utilizadas na geração do desenho.

A aplicação não deverá simplesmente desenhar valores informados manualmente.

Ela deverá aplicar regras.

## Exemplo

Uma regra hipotética poderia ser:

```typescript
if (power <= 500) {
  radiatorCount = 4;
}

if (power > 500 && power <= 1000) {
  radiatorCount = 6;
}

if (power > 1000) {
  radiatorCount = 8;
}
```

Outro exemplo:

```typescript
if (primaryVoltage > 10000) {
  bushingCount = 6;
}
```

Esses valores são apenas exemplos para demonstrar o conceito.

## Objetivo das regras

Demonstrar o fluxo:

```text
Entrada
   ↓
Análise dos parâmetros
   ↓
Aplicação das regras
   ↓
Configuração do desenho
```

---

# 8. Motor de geração do desenho

Será criado um módulo específico responsável por transformar as informações do transformador em uma representação gráfica.

## Estrutura inicial

```text
drawing/
├── drawing.module.ts
├── drawing.controller.ts
├── drawing.service.ts
├── drawing-generator.ts
│
├── geometry/
│   ├── transformer-body.ts
│   ├── bushings.ts
│   ├── radiators.ts
│   └── dimensions.ts
│
└── types/
    └── drawing.types.ts
```

## Responsabilidades

O gerador deverá ser capaz de criar:

- corpo do transformador;
- buchas;
- radiadores;
- dimensões;
- textos;
- linhas;
- elementos geométricos.

---

# 9. SVG

A primeira versão do desenho será gerada em **SVG**.

A escolha do SVG ocorre porque ele permite criar desenhos utilizando elementos geométricos programaticamente.

Exemplo conceitual:

```xml
<svg width="1200" height="800">
    <rect />
    <circle />
    <line />
    <text />
</svg>
```

O resultado poderá ser visualizado diretamente no navegador.

## Fluxo

```text
Transformador
     ↓
Regras de negócio
     ↓
DrawingGenerator
     ↓
SVG
     ↓
Next.js
     ↓
Visualização
```

---

# 10. Geração de PDF

Após a implementação do SVG, será adicionada a possibilidade de exportar o desenho para PDF.

O objetivo será permitir:

```text
Desenho SVG
    ↓
Geração do PDF
    ↓
Download / Exportação
```

Essa etapa será implementada depois do MVP.

---

# 11. Backend — NestJS

## Estrutura inicial

```text
backend/
├── src/
│
├── transformers/
│   ├── transformers.module.ts
│   ├── transformers.controller.ts
│   ├── transformers.service.ts
│   └── dto/
│       ├── create-transformer.dto.ts
│       └── update-transformer.dto.ts
│
├── drawings/
│   ├── drawings.module.ts
│   ├── drawings.controller.ts
│   ├── drawings.service.ts
│   └── drawing-generator.ts
│
├── database/
│
├── app.module.ts
└── main.ts
```

---

# 12. API REST

## Transformadores

### Listar

```http
GET /transformers
```

### Buscar

```http
GET /transformers/:id
```

### Criar

```http
POST /transformers
```

### Atualizar

```http
PUT /transformers/:id
```

### Remover

```http
DELETE /transformers/:id
```

---

# 13. API de desenhos

### Gerar desenho

```http
POST /drawings/generate
```

Exemplo:

```json
{
  "transformerId": 1
}
```

Resposta:

```json
{
  "drawingId": 15,
  "status": "generated",
  "format": "svg"
}
```

### Visualizar SVG

```http
GET /drawings/:id/svg
```

### Exportar PDF

```http
GET /drawings/:id/pdf
```

---

# 14. DTOs e validação

O NestJS deverá utilizar DTOs para validar os dados recebidos pela API.

Exemplo conceitual:

```typescript
export class CreateTransformerDto {
  power: number;
  primaryVoltage: number;
  secondaryVoltage: number;
  frequency: number;
  phases: number;
  width: number;
  height: number;
  depth: number;
}
```

As validações deverão impedir valores inválidos, como:

- potência negativa;
- dimensões negativas;
- tensão igual a zero;
- quantidade de fases inválida;
- campos obrigatórios ausentes.

---

# 15. Banco de dados — PostgreSQL

## Transformer

Tabela responsável pelos dados principais do transformador.

```text
Transformer
├── id
├── name
├── power
├── primaryVoltage
├── secondaryVoltage
├── frequency
├── phases
├── width
├── height
├── depth
├── createdAt
└── updatedAt
```

## Drawing

Representa um desenho gerado.

```text
Drawing
├── id
├── transformerId
├── format
├── svg
├── version
├── status
├── createdAt
└── updatedAt
```

## DrawingVersion

Responsável por preservar o histórico das versões.

```text
DrawingVersion
├── id
├── drawingId
├── version
├── parameters
├── svg
└── createdAt
```

Relacionamento:

```text
Transformer
     │
     └── 1:N ── Drawing
                    │
                    └── 1:N ── DrawingVersion
```

---

# 16. Frontend — Next.js + React

## Telas

O MVP terá inicialmente quatro telas principais:

### 1. Dashboard

Exibe os transformadores cadastrados.

```text
AutoTrafo

Projetos

Transformador 500 kVA     [Abrir]
Transformador 750 kVA     [Abrir]
Transformador 1000 kVA    [Abrir]

                         [+ Novo projeto]
```

### 2. Novo transformador

Formulário para entrada dos parâmetros.

### 3. Detalhes do transformador

Exibe:

- dados técnicos;
- informações calculadas;
- desenhos disponíveis;
- versões.

### 4. Visualização do desenho

Exibe o SVG gerado.

Ações:

- regenerar;
- visualizar;
- exportar PDF;
- consultar versões.

---

# 17. Fluxo completo da aplicação

```text
Usuário
   │
   ▼
Next.js
   │
   │ POST /transformers
   ▼
NestJS
   │
   ├── Validação
   │
   ├── Regras de negócio
   │
   └── PostgreSQL
   │
   ▼
Transformador criado
   │
   ▼
Usuário solicita geração
   │
   ▼
POST /drawings/generate
   │
   ▼
Drawing Service
   │
   ├── Recupera dados
   ├── Aplica regras
   ├── Calcula geometria
   └── Gera SVG
   │
   ▼
PostgreSQL
   │
   ▼
Next.js
   │
   ▼
Visualização do desenho
```

---

# 18. Testes

O projeto deverá possuir testes automatizados.

## Testes unitários

Principalmente para as regras de negócio.

Exemplo:

```text
500 kVA
   ↓
4 radiadores
```

E:

```text
1000 kVA
   ↓
6 radiadores
```

## Testes de API

Testar:

```text
POST /transformers
GET /transformers
GET /transformers/:id
PUT /transformers/:id
DELETE /transformers/:id
POST /drawings/generate
```

## Tecnologias

- Jest;
- Supertest.

---

# 19. Testes manuais

Durante o desenvolvimento, a API poderá ser testada utilizando:

- Postman;
- APIDog.

Collection:

```text
AutoTrafo API
│
├── Transformers
│   ├── Create
│   ├── List
│   ├── Get
│   ├── Update
│   └── Delete
│
└── Drawings
    ├── Generate
    ├── Get SVG
    └── Export PDF
```

A diferença será:

```text
Postman / APIDog
→ testes e validações manuais da API

Jest / Supertest
→ testes automatizados

CI/CD
→ execução automática desses testes no pipeline
```

---

# 20. Docker

A aplicação deverá ser preparada para execução utilizando Docker.

Arquitetura:

```text
┌───────────────────┐
│      Next.js      │
│       :3000       │
└─────────┬─────────┘
          │
          ▼
┌───────────────────┐
│      NestJS       │
│       :3001       │
└─────────┬─────────┘
          │
          ▼
┌───────────────────┐
│    PostgreSQL     │
│       :5432       │
└───────────────────┘
```

---

# 21. CI/CD

Depois que a aplicação estiver funcionando, será criada uma pipeline de CI/CD.

Fluxo planejado:

```text
Git Push
   ↓
Pipeline
   ↓
Instalação das dependências
   ↓
Lint
   ↓
Testes
   ↓
Build
   ↓
Docker
   ↓
Deploy
```

A ferramenta de CI/CD poderá ser adicionada posteriormente, por exemplo, Jenkins ou GitHub Actions.

---

# 22. Evolução futura

Depois do MVP, algumas funcionalidades poderão ser adicionadas.

## Autenticação

- Login;
- JWT;
- usuários;
- permissões.

## Auditoria

Registrar:

- usuário;
- ação;
- data;
- transformador;
- versão gerada.

Exemplo:

```text
Pedro
   ↓
Alterou transformador #15
   ↓
Regenerou desenho
   ↓
Versão 3 criada
```

## Webhooks

Quando um desenho for gerado:

```text
Drawing generated
       ↓
Webhook
       ↓
Sistema externo
```

Evento:

```json
{
  "event": "drawing.generated",
  "drawingId": 15,
  "transformerId": 1
}
```

## Processamento assíncrono

Em uma evolução futura, a geração poderá utilizar uma fila:

```text
POST /drawings/generate
        ↓
     Job criado
        ↓
       Queue
        ↓
      Worker
        ↓
 Geração do desenho
        ↓
     PostgreSQL
```

Essa etapa poderá utilizar Redis + BullMQ.

---

# 23. Roadmap

## Fase 1 — Setup

- [ ] Criar repositório.
- [ ] Criar backend NestJS.
- [ ] Criar frontend Next.js.
- [ ] Configurar TypeScript.
- [ ] Configurar PostgreSQL.
- [ ] Configurar Prisma.
- [ ] Configurar ambiente de desenvolvimento.

## Fase 2 — CRUD

- [ ] Criar entidade Transformer.
- [ ] Criar migration.
- [ ] Criar DTOs.
- [ ] Criar POST.
- [ ] Criar GET.
- [ ] Criar GET por ID.
- [ ] Criar PUT.
- [ ] Criar DELETE.
- [ ] Implementar validações.

## Fase 3 — Regras de negócio

- [ ] Criar módulo de regras.
- [ ] Definir regras hipotéticas.
- [ ] Implementar cálculos.
- [ ] Criar testes das regras.
- [ ] Separar regras da camada HTTP.

## Fase 4 — Geração do desenho

- [ ] Criar DrawingModule.
- [ ] Criar DrawingService.
- [ ] Criar DrawingGenerator.
- [ ] Gerar corpo do transformador.
- [ ] Gerar buchas.
- [ ] Gerar radiadores.
- [ ] Gerar dimensões.
- [ ] Gerar textos.
- [ ] Gerar SVG.

## Fase 5 — Frontend

- [ ] Criar dashboard.
- [ ] Criar formulário.
- [ ] Criar tela de detalhes.
- [ ] Criar visualizador SVG.
- [ ] Criar histórico.
- [ ] Criar ações de regeneração.
- [ ] Criar exportação.

## Fase 6 — Testes

- [ ] Testes unitários.
- [ ] Testes de integração.
- [ ] Testes da API.
- [ ] Testes das regras.
- [ ] Collection Postman/APIDog.

## Fase 7 — Infraestrutura

- [ ] Dockerfile backend.
- [ ] Dockerfile frontend.
- [ ] Docker Compose.
- [ ] Pipeline CI/CD.
- [ ] Build automatizado.
- [ ] Execução automática dos testes.

## Fase 8 — Melhorias

- [ ] Autenticação.
- [ ] Auditoria.
- [ ] Versionamento.
- [ ] Webhooks.
- [ ] Geração assíncrona.
- [ ] Redis/BullMQ.
- [ ] Armazenamento de arquivos.

---

# 24. MVP

A primeira versão **não deverá implementar todas as funcionalidades**.

O MVP será:

```text
Next.js
   +
NestJS
   +
PostgreSQL
   ↓
CRUD de transformadores
   ↓
Regras simplificadas
   ↓
Geração de SVG
   ↓
Visualização no navegador
```

Depois disso:

```text
MVP
 ↓
Testes
 ↓
PDF
 ↓
Histórico
 ↓
Docker
 ↓
CI/CD
 ↓
Webhooks
 ↓
Processamento assíncrono
```

---

# 25. Resultado esperado

Ao final do projeto, o usuário deverá conseguir:

1. Criar um transformador.
2. Informar seus parâmetros.
3. Salvar os dados.
4. Solicitar a geração do desenho.
5. Executar as regras de negócio.
6. Gerar automaticamente o SVG.
7. Visualizar o desenho.
8. Regenerar o desenho após alterações.
9. Consultar versões anteriores.
10. Exportar o resultado.

---

# 26. Objetivo para o portfólio

O projeto deverá demonstrar conhecimentos em:

- Desenvolvimento Web;
- React;
- Next.js;
- NestJS;
- Node.js;
- TypeScript;
- APIs REST;
- HTTP;
- JSON;
- PostgreSQL;
- Modelagem de dados;
- Validação;
- Regras de negócio;
- Geração programática de documentos/desenhos;
- Testes automatizados;
- Docker;
- CI/CD;
- Arquitetura de software.

Mais importante do que a quantidade de tecnologias será demonstrar o raciocínio utilizado para transformar um problema de negócio em uma aplicação:

```text
Problema
   ↓
Requisitos
   ↓
Modelagem
   ↓
API
   ↓
Regras de negócio
   ↓
Processamento
   ↓
Geração do resultado
   ↓
Interface
   ↓
Testes
   ↓
Deploy
```

---

# 27. Descrição curta para o GitHub

> **AutoTrafo** — aplicação web experimental para automação da geração de desenhos técnicos simplificados de transformadores. O sistema recebe parâmetros técnicos, aplica regras de negócio e gera automaticamente representações gráficas em SVG, utilizando Next.js, React, NestJS, TypeScript, Node.js e PostgreSQL.

---

# 28. Princípio do projeto

> **Não construir apenas um CRUD. Construir um sistema que transforma dados em um resultado automatizado.**

Essa será a principal ideia do AutoTrafo.

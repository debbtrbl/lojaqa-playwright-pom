
# LojaQA - Automação de Testes E2E

Projeto acadêmico de automação de testes da tela de login da LojaQA, desenvolvido com Playwright e TypeScript.

## Técnicas utilizadas

- Page Object Model (POM)
- Fixtures customizadas com `base.extend`
- Testes Data-Driven com `for...of`
- Validações com `expect`

## Pré-requisitos

- Node.js
- npm

## Instalação

Clone o repositório e entre na pasta do projeto:

```bash
git clone URL_DO_REPOSITORIO
cd meu-projeto-playwright
```

Instale as dependências e o navegador:

```bash
npm install
npx playwright install chromium
```

## Como executar

Executar todos os testes:

```bash
npm test
```

Executar com o navegador visível:

```bash
npm run test:headed
```

Abrir o relatório HTML:

```bash
npm run test:report
```

## Aplicação testada

[LojaQA - Sistema de Login](https://alisonmelo.github.io/tioalison-pe-t4-fap26/projetos-base/01-sistema-login/login.html)

# TechHall — Client

Este repositório contém o front-end do cliente TechHall, uma aplicação construída com React, TypeScript, Vite e Tailwind CSS.

## Visão geral

- Framework: Vite
- Biblioteca: React + TypeScript
- Estilização: Tailwind CSS
- UI: shadcn-ui (componentes Radix + utilitários)

## Requisitos

- Node.js (recomendado versão LTS)
- npm, pnpm ou yarn (as instruções abaixo usam npm)

## Execução local

Clone o repositório, instale dependências e inicie o servidor de desenvolvimento:

```powershell
# 1. Clone o repositório
git clone git@github.com:mastertech/techhall-client.git

# 2. Entre na pasta do projeto
cd techhall-client

# 3. Instale dependências
npm install

# 4. Rode em modo desenvolvimento
npm run dev
```

Scripts úteis (definidos em `package.json`):

- `npm run dev` — inicia o servidor de desenvolvimento (Vite)
- `npm run build` — build de produção
- `npm run build:dev` — build com modo development
- `npm run preview` — pré-visualiza o build localmente
- `npm run lint` — executa o ESLint

## Estrutura do projeto (resumo)

- `src/` — código fonte da aplicação
  - `components/` — componentes React reutilizáveis e UI
  - `pages/` — páginas da aplicação
  - `assets/` — imagens e outros ativos
  - `lib/` e `hooks/` — utilitários e hooks personalizados
- `public/` — arquivos estáticos públicos

## Dependências principais

Veja `package.json` para a lista completa. Entre as principais estão `react`, `react-dom`, `vite`, `tailwindcss`, `@radix-ui/*`, `@tanstack/react-query` e `shadcn-ui`.

## Desenvolvimento e boas práticas

- Verifique a configuração do TypeScript (`tsconfig.json`) ao adicionar novos aliases ou paths.
- Siga as regras de lint do projeto antes de abrir PRs (`npm run lint`).
- Use branches temáticos e PRs com descrição clara das mudanças.

## Deploy

O projeto pode ser implantado em qualquer serviço que suporte aplicações estáticas geradas por Vite (por exemplo Netlify, Vercel, GitHub Pages ou servidores estáticos). Para gerar os arquivos de produção:

```powershell
npm run build
```

Depois, publique o conteúdo da pasta `dist/` no serviço de sua escolha.

## Problemas e contribuições

Se você encontrar bugs ou quiser contribuir, abra uma issue ou um Pull Request explicando a mudança proposta.

## Contato

Para dúvidas sobre este repositório, abra uma issue no GitHub ou contate o mantenedor do projeto.

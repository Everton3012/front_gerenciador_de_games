# 🎮 GameManager — Frontend

Frontend moderno e responsivo para o sistema **GameManager**, com autenticação JWT e OAuth (Google/Discord), dashboard interativo e integração com API REST.  
Construído com **Nuxt 3**, **Vue 3**, **TypeScript**, **Tailwind CSS** e backend em **NestJS**.

<p align="center">
  <img src="https://img.shields.io/badge/Nuxt-00DC82?style=for-the-badge&logo=nuxt.js&logoColor=white" alt="Nuxt" />
  <img src="https://img.shields.io/badge/Vue.js-4FC08D?style=for-the-badge&logo=vue.js&logoColor=white" alt="Vue.js" />
  <img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind CSS" />
  <img src="https://img.shields.io/badge/Cypress-17202C?style=for-the-badge&logo=cypress&logoColor=white" alt="Cypress" />
</p>

---

## 📋 Índice

- [Sobre o Projeto](#-sobre-o-projeto)
- [Funcionalidades](#-funcionalidades)
- [Tecnologias](#-tecnologias)
- [Pré-requisitos](#-pré-requisitos)
- [Instalação](#-instalação)
- [Configuração](#-configuração)
- [Executando o Projeto](#-executando-o-projeto)
- [Testes](#-testes)
- [Estrutura do Projeto](#-estrutura-do-projeto)
- [Como Usar](#-como-usar)
- [Deploy](#-deploy)
- [Contribuição](#-contribuição)
- [Licença](#-licença)

---

## 🎯 Sobre o Projeto

O **GameManager Frontend** fornece uma interface moderna e intuitiva para gerenciamento de usuários e jogos, com foco em **experiência do usuário**, **segurança** e **escalabilidade**.

### Principais Características

- ✅ Autenticação JWT + OAuth2 (Google, Discord)
- ✅ Dashboard interativo com estatísticas
- ✅ Proteção de rotas com middleware do Nuxt
- ✅ Tema claro e escuro
- ✅ Internacionalização (PT-BR, EN, ES)
- ✅ Gerenciamento de estado com Pinia
- ✅ Testes End-to-End com Cypress
- ✅ TypeScript para maior segurança e manutenibilidade

---

## 🚀 Funcionalidades

### 🔐 Autenticação
- Login e registro com validação Zod
- OAuth com Google e Discord
- Persistência de sessão via JWT
- Proteção de rotas privadas

### 📊 Dashboard
- Cards de estatísticas
- Edição de perfil
- Gerenciamento de usuários (admin)
- Listagem de jogos recentes

### 🌍 Internacionalização
- Troca dinâmica de idioma
- Suporte a PT-BR, EN e ES

### 🎨 UI/UX
- Layout responsivo (mobile-first)
- Tema escuro/claro automático ou manual
- Formulários validados com VeeValidate
- Animações suaves com Tailwind CSS

### 🧪 Testes
- Testes E2E com Cypress
- Cobertura dos fluxos críticos

---

## 🛠️ Tecnologias

- **Framework**: Nuxt 3
- **Linguagem**: TypeScript
- **UI**: Tailwind CSS
- **Estado**: Pinia
- **Validação**: VeeValidate + Zod
- **i18n**: vue-i18n
- **Testes**: Cypress
- **Build**: Vite (Nuxt)

---

## 📦 Pré-requisitos

- Node.js >= 18.x
- npm >= 9.x
- Backend GameManager rodando na porta 3001

---

## 🔧 Instalação

### 1. Clone o repositório
```bash
git clone <repo-url>
cd front_gerenciador_de_games
```

### 2. Instale as dependências
```bash
npm install
```

### 3. Configure o ambiente
```bash
cp .env.example .env
```

```env
NUXT_PUBLIC_APP_URL=http://localhost:3000
NUXT_PUBLIC_API_BASE_URL=http://localhost:3001
```

---

## ⚙️ Configuração

### Tema
```ts
const colorMode = useColorMode()
colorMode.preference = 'dark'
```

### Idioma
```ts
const { setLocale } = useI18n()
setLocale('en')
```

---

## 🚀 Executando o Projeto

### Desenvolvimento
```bash
npm run dev
```

### Produção
```bash
npm run build
npm run preview
```

---

## 🧪 Testes

```bash
npm run test:e2e
npm run cypress:open
```

---

## 📁 Estrutura do Projeto

```
assets/
components/
composables/
constants/
cypress/
i18n/
middleware/
pages/
plugins/
services/
types/
utils/
```

---

## 🎮 Como Usar

- /login — Login  
- /register — Registro  
- /dashboard — Área autenticada  

---

## 🚀 Deploy

- **Vercel** (recomendado)
- **Netlify**

---

## 📄 Licença

MIT

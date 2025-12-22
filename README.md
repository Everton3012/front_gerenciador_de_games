# 🎮 GameManager - Frontend

Um sistema completo de gerenciamento de jogos com autenticação JWT, OAuth (Google/Discord), dashboard interativo e API RESTful. Construído com Nuxt 3, Vue 3, TypeScript, Tailwind CSS e backend NestJS.

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

Frontend responsivo e moderno para o sistema GameManager, focado em experiência do usuário com autenticação robusta, dashboard interativo e suporte multilíngue.

### Principais Características:

- ✅ Autenticação JWT + OAuth2 (Google, Discord)
- ✅ Dashboard com estatísticas e gerenciamento
- ✅ Design responsivo com Tailwind CSS
- ✅ Tema escuro/claro
- ✅ Internacionalização (PT, EN, ES)
- ✅ Testes E2E com Cypress
- ✅ TypeScript para type safety
- ✅ Pinia para gerenciamento de estado

---

## 🚀 Funcionalidades

### 🔐 Autenticação
- Login/registro local com validação Zod
- OAuth com Google e Discord
- Proteção de rotas com middleware
- Persistência de sessão com localStorage

### 📊 Dashboard
- Cards de estatísticas (jogos, conquistas, horas)
- Edição de perfil do usuário
- Gerenciamento de usuários (admins)
- Lista de jogos recentes

### 🌍 Internacionalização
- Suporte a português, espanhol e inglês
- Traduções dinâmicas com vue-i18n

### 🎨 UI/UX
- Design responsivo (mobile-first)
- Tema escuro/claro automático
- Formulários validados com VeeValidate
- Animações suaves com Tailwind

### 🧪 Testes
- Testes E2E com Cypress
- Cobertura para fluxos críticos

---

## 🛠️ Tecnologias

- **Framework**: [Nuxt 3](https://nuxt.com/) - Meta-framework Vue.js
- **Linguagem**: [TypeScript](https://www.typescriptlang.org/) - JavaScript tipado
- **UI**: [Tailwind CSS](https://tailwindcss.com/) - Framework CSS utilitário
- **Estado**: [Pinia](https://pinia.vuejs.org/) - Store Vue.js oficial
- **Validação**: [VeeValidate](https://vee-validate.logaretm.com/) + [Zod](https://zod.dev/)
- **i18n**: [vue-i18n](https://vue-i18n.intlify.dev/)
- **Testes**: [Cypress](https://www.cypress.io/) - Testes E2E
- **Build**: Vite (integrado no Nuxt)

---

## 📦 Pré-requisitos

- [Node.js](https://nodejs.org/) >= 18.x
- [npm](https://www.npmjs.com/) >= 9.x
- Backend GameManager rodando (porta 3001)

---

## 🔧 Instalação

### 1. Clone o repositório:
```bash
git clone <repo-url>
cd front_gerenciador_de_games

### README Melhorado para o Frontend GameManager

Aqui está uma versão aprimorada do [`README.md`](README.md ) com mais detalhes, estrutura clara e seções adicionais:

```markdown
# 🎮 GameManager - Frontend

Um sistema completo de gerenciamento de jogos com autenticação JWT, OAuth (Google/Discord), dashboard interativo e API RESTful. Construído com Nuxt 3, Vue 3, TypeScript, Tailwind CSS e backend NestJS.

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

Frontend responsivo e moderno para o sistema GameManager, focado em experiência do usuário com autenticação robusta, dashboard interativo e suporte multilíngue.

### Principais Características:

- ✅ Autenticação JWT + OAuth2 (Google, Discord)
- ✅ Dashboard com estatísticas e gerenciamento
- ✅ Design responsivo com Tailwind CSS
- ✅ Tema escuro/claro
- ✅ Internacionalização (PT, EN, ES)
- ✅ Testes E2E com Cypress
- ✅ TypeScript para type safety
- ✅ Pinia para gerenciamento de estado

---

## 🚀 Funcionalidades

### 🔐 Autenticação
- Login/registro local com validação Zod
- OAuth com Google e Discord
- Proteção de rotas com middleware
- Persistência de sessão com localStorage

### 📊 Dashboard
- Cards de estatísticas (jogos, conquistas, horas)
- Edição de perfil do usuário
- Gerenciamento de usuários (admins)
- Lista de jogos recentes

### 🌍 Internacionalização
- Suporte a português, espanhol e inglês
- Traduções dinâmicas com vue-i18n

### 🎨 UI/UX
- Design responsivo (mobile-first)
- Tema escuro/claro automático
- Formulários validados com VeeValidate
- Animações suaves com Tailwind

### 🧪 Testes
- Testes E2E com Cypress
- Cobertura para fluxos críticos

---

## 🛠️ Tecnologias

- **Framework**: [Nuxt 3](https://nuxt.com/) - Meta-framework Vue.js
- **Linguagem**: [TypeScript](https://www.typescriptlang.org/) - JavaScript tipado
- **UI**: [Tailwind CSS](https://tailwindcss.com/) - Framework CSS utilitário
- **Estado**: [Pinia](https://pinia.vuejs.org/) - Store Vue.js oficial
- **Validação**: [VeeValidate](https://vee-validate.logaretm.com/) + [Zod](https://zod.dev/)
- **i18n**: [vue-i18n](https://vue-i18n.intlify.dev/)
- **Testes**: [Cypress](https://www.cypress.io/) - Testes E2E
- **Build**: Vite (integrado no Nuxt)

---

## 📦 Pré-requisitos

- [Node.js](https://nodejs.org/) >= 18.x
- [npm](https://www.npmjs.com/) >= 9.x
- Backend GameManager rodando (porta 3001)

---

## 🔧 Instalação

### 1. Clone o repositório:
```bash
git clone <repo-url>
cd front_gerenciador_de_games
```

### 2. Instale dependências:
```bash
npm install
```

### 3. Configure variáveis de ambiente:
```bash
cp 

.env.example

 .env
```

Edite `.env` com:
```env
NUXT_PUBLIC_APP_URL=http://localhost:3000
NUXT_PUBLIC_API_BASE_URL=http://localhost:3001
```

---

## ⚙️ Configuração

### Tema
O tema escuro/claro é automático baseado no sistema do usuário. Para forçar:
```typescript
// Em qualquer componente
const colorMode = useColorMode()
colorMode.preference = 'dark' // ou 'light'
```

### i18n
Idioma padrão: português. Para alterar:
```typescript
const { setLocale } = useI18n()
setLocale('en') // 'es' para espanhol
```

---

## 🚀 Executando o Projeto

### Desenvolvimento (com hot-reload):
```bash
npm run dev
```
Acesse: http://localhost:3000

### Build para produção:
```bash
npm run build
npm run preview
```

### Geração estática (SSG):
```bash
npm run generate
```

---

## 🧪 Testes

### Testes E2E (requer backend rodando):
```bash
npm run test:e2e
```

### Debug de testes:
```bash
npm run cypress:open
```

---

## 📁 Estrutura do Projeto

```
├── 📁 assets/              # Estilos globais e fontes
├── 📁 components/          # Componentes reutilizáveis
├── 📁 composables/         # Lógica Vue reutilizável
│   ├── useAuth.ts         # Autenticação
│   └── useUser.ts         # Gerenciamento de usuários
├── 📁 constants/           # Constantes (URLs, keys)
├── 📁 cypress/             # Testes E2E
├── 📁 i18n/                # Traduções multilíngues
│   ├── locales/
│   │   ├── pt-BR/
│   │   ├── en/
│   │   └── es/
├── 📁 middleware/          # Middlewares (auth)
├── 📁 pages/               # Páginas (SPA)
│   ├── index.vue          # Landing page
│   ├── login.vue          # Login
│   ├── register.vue       # Registro
│   ├── dashboard.vue      # Dashboard
│   └── auth/
│       └── callback.vue   # Callback OAuth
├── 📁 plugins/            # Plugins Nuxt
│   ├── auth.client.ts     # Interceptor de auth
│   └── pinia.ts           # Configuração Pinia
├── 📁 public/             # Arquivos estáticos
├── 📁 services/           # Serviços de API
│   ├── auth.service.ts    # API de auth
│   └── user.service.ts    # API de usuários
├── 📁 types/              # Tipos TypeScript
└── 📁 utils/              # Utilitários
```

---

## 🎮 Como Usar

### 1. **Registro/Login**
- Acesse `/register` para criar conta
- Ou `/login` para entrar
- Use OAuth com Google/Discord

### 2. **Dashboard**
- Visualize estatísticas pessoais
- Edite seu perfil
- Admins: gerencie usuários

### 3. **Navegação**
- Rotas protegidas redirecionam para login
- Suporte a múltiplos idiomas

### Exemplos de Uso:

#### Login Programático:
```typescript
import { useAuth } from '~/composables/useAuth'

const { login } = useAuth()
await login('user@example.com', 'password')
```

#### Troca de Idioma:
```vue
<script setup>
const { setLocale } = useI18n()
</script>

<template>
  <button @click="setLocale('en')">English</button>
</template>
```

---

## 🚀 Deploy

### Vercel (Recomendado):
1. Conecte o repositório no Vercel
2. Configure variáveis de ambiente
3. Deploy automático

### Netlify:
1. Build command: `npm run build`
2. Publish directory: `.output/public`
3. Configure env vars

### Configuração de Produção:
```env
NUXT_PUBLIC_APP_URL=https://your-domain.com
NUXT_PUBLIC_API_BASE_URL=https://your-api-domain.com
```

---

## 🤝 Contribuição

1. Fork o projeto
2. Crie uma branch: `git checkout -b feature/nova-feature`
3. Commit: `git commit -m 'Adiciona nova feature'`
4. Push: `git push origin feature/nova-feature`
5. Abra um Pull Request

### Guidelines:
- Use TypeScript
- Siga convenções Vue/Nuxt
- Adicione testes para novas features
- Mantenha commits pequenos e descritivos

---

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo `LICENSE` para detalhes.

---

## 🔗 Links Úteis

- [Documentação Nuxt](https://nuxt.com/docs)
- [Vue.js Guide](https://vuejs.org/guide/)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [Cypress Docs](https://docs.cypress.io/)
- [Pinia Guide](https://pinia.vuejs.org/)

---

<p align="center">
  Desenvolvido com ❤️ usando Nuxt 3 & Vue 3
</p>
```
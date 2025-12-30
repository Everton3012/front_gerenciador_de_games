import { defineNuxtConfig } from "nuxt/config";

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  css: ["~/assets/css/main.css"],
  devtools: { enabled: true },
  components: {
    dirs: [
      {
        path: '~/components',
        pathPrefix: false,
      },
    ],
  },
  modules: [
    //'@sidebase/nuxt-auth',
    '@nuxtjs/i18n'
  ],
  build: {
    transpile: ['vee-validate']
  },
  // @ts-ignore
  i18n: {
    lazy: true,    
    locales: [
      { code: 'pt-BR', iso: 'pt-BR', name: 'Português', file: 'pt-BR/index.ts' },
      { code: 'en', iso: 'en', name: 'English', file: 'en/index.ts' },
      { code: 'es', iso: 'es', name: 'Español', file: 'es/index.ts' }
    ],
    strategy: 'no_prefix',
  },

  postcss: {
    plugins: {
      '@tailwindcss/postcss': {},
      autoprefixer: {},
    },
  },
})
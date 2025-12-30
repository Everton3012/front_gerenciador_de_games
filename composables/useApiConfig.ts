import { useRuntimeConfig } from "nuxt/app"

export const useApiConfig = () => {
    const config = useRuntimeConfig()
    return {
      apiBaseUrl: config.public.apiBaseUrl  || 'http://localhost:3001',
      apiEndpoints: {
        auth: {
          login: '/auth/login',
          register: '/auth/register',
          logout: '/auth/logout',
          refresh: '/auth/refresh',
          me: '/auth/me',
          google: '/auth/google',
          discord: '/auth/discord'
        },
        users: {
          list: '/users',
          me: '/users/me',
          changePassword: '/users/me/change-password',
          byId: (id: string) => `/users/${id}`,
          upgrade: (id: string) => `/users/${id}/upgrade`,
          downgrade: (id: string) => `/users/${id}/downgrade`
        }
      }
    }
  }
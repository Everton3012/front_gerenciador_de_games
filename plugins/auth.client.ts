// plugins/auth.client.ts
import { defineNuxtPlugin } from "nuxt/app"
import { useAuth } from "../composables/useAuth"

export default defineNuxtPlugin(() => {
  const { accessToken, refreshAccessToken } = useAuth()

  // Interceptor para adicionar token automaticamente
  const api = $fetch.create({
    baseURL: '/api',
    onRequest({ options }) {
      const token = accessToken.value
      if (token) {
        // Forçar tipo como objeto simples para evitar conflitos
        const currentHeaders = Object.fromEntries(new Headers(options.headers)) as Record<string, string>
        options.headers = new Headers({
          ...currentHeaders,
          Authorization: `Bearer ${token}`
        })
      }
    },
    onResponseError({ response }) {
      // Se token expirou, tentar refresh
      if (response.status === 401) {
        refreshAccessToken()
      }
    }
  })

  return {
    provide: {
      api
    }
  }
})
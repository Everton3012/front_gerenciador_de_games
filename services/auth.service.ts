// services/auth.service.ts
import type { AuthResponse, LoginData, RegisterData, User } from '../@types/auth'
import { useApiConfig } from '../composables/useApiConfig'

let accessToken: string | null = null // Estado simples para token

const apiFetch = async <T>(endpoint: string, options: any = {}): Promise<T> => {
  const { apiBaseUrl } = useApiConfig()
  return $fetch<T>(`${apiBaseUrl}${endpoint}`, {
    ...options,
    headers: {
      'Content-Type': 'application/json',
      ...options.headers,
      ...(accessToken && { Authorization: `Bearer ${accessToken}` })
    }
  })
}

export const authService = {
  setToken: (token: string | null) => { accessToken = token },

  
  login: async (email: string, password: string): Promise<AuthResponse> => {
    const { apiBaseUrl, apiEndpoints } = useApiConfig()
    // Não use apiFetch (que adiciona Authorization), use $fetch direto
    return await $fetch<AuthResponse>(`${apiBaseUrl}${apiEndpoints.auth.login}`, {
      method: 'POST',
      body: { email, password },
      headers: {
        'Content-Type': 'application/json'
      }
    })
  },

  register: async (data: RegisterData): Promise<AuthResponse> => {
    const { apiEndpoints } = useApiConfig()
    return await apiFetch<AuthResponse>(apiEndpoints.auth.register, {
      method: 'POST',
      body: data
    })
  },

  logout: async (): Promise<void> => {
    const { apiEndpoints } = useApiConfig()
    return await apiFetch(apiEndpoints.auth.logout, { method: 'POST' })
  },

  refreshToken: async (refreshToken: string): Promise<{ access_token: string }> => {
    const { apiEndpoints } = useApiConfig()
    return await apiFetch(apiEndpoints.auth.refresh, {
      method: 'POST',
      body: { refresh_token: refreshToken }
    })
  },

  fetchUser: async (): Promise<User> => {
    const { apiEndpoints } = useApiConfig()
    return await apiFetch<User>(apiEndpoints.auth.me)
  }
}
// services/auth.service.ts
import type { AuthResponse, LoginData, RegisterData, User } from '../@types/auth'

const apiBaseUrl = process.env.NUXT_PUBLIC_API_BASE_URL || 'http://localhost:3001'

let accessToken: string | null = null // Estado simples para token

const apiFetch = <T>(endpoint: string, options: any = {}): Promise<T> => {
  return $fetch<T>(`${apiBaseUrl}${endpoint}`, {
    ...options,
    headers: {
      ...options.headers,
      ...(accessToken && { Authorization: `Bearer ${accessToken}` })
    }
  })
}

export const authService = {
  setToken: (token: string | null) => { accessToken = token },

  login: async (data: LoginData): Promise<AuthResponse> => {
    return await apiFetch<AuthResponse>('/auth/login', {
      method: 'POST',
      body: data
    })
  },

  register: async (data: RegisterData): Promise<AuthResponse> => {
    return await apiFetch<AuthResponse>('/auth/register', {
      method: 'POST',
      body: data
    })
  },

  logout: async (): Promise<void> => {
    await apiFetch('/auth/logout', { method: 'POST' })
  },

  refreshToken: async (refreshToken: string): Promise<{ access_token: string }> => {
    return await apiFetch('/auth/refresh', {
      method: 'POST',
      body: { refresh_token: refreshToken }
    })
  },

  fetchUser: async (): Promise<User> => {
    return await apiFetch<User>('/auth/me')
  }
}
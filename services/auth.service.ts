// services/auth.service.ts
import type { AuthResponse, LoginData, RegisterData, User } from '../@types/auth'
import { API_BASE_URL, API_ENDPOINTS } from '../constants/api'

let accessToken: string | null = null // Estado simples para token

const apiFetch = <T>(endpoint: string, options: any = {}): Promise<T> => {
  return $fetch<T>(`${API_BASE_URL}${endpoint}`, {
    ...options,
    headers: {
      'Content-Type': 'application/json',
      ...options.headers,
      ...(accessToken && { Authorization: `Bearer ${accessToken}` })
    },
    // Adicione timeout para produção
    timeout: 10000 // 10 segundos
  })
}

export const authService = {
  setToken: (token: string | null) => { accessToken = token },

  login: async (data: LoginData): Promise<AuthResponse> => {
    return await apiFetch<AuthResponse>(API_ENDPOINTS.LOGIN, {
      method: 'POST',
      body: data
    })
  },

  register: async (data: RegisterData): Promise<AuthResponse> => {
    return await apiFetch<AuthResponse>(API_ENDPOINTS.REGISTER, {
      method: 'POST',
      body: data
    })
  },

  logout: async (): Promise<void> => {
    return await apiFetch(API_ENDPOINTS.LOGOUT, { method: 'POST' })
  },

  refreshToken: async (refreshToken: string): Promise<{ access_token: string }> => {
    return await apiFetch(API_ENDPOINTS.REFRESH, {
      method: 'POST',
      body: { refresh_token: refreshToken }
    })
  },

  fetchUser: async (): Promise<User> => {
    return await apiFetch<User>(API_ENDPOINTS.ME)
  }
}
// services/user.service.ts
import type { User } from '../@types/auth'
import { useApiConfig } from '../composables/useApiConfig'

let accessToken: string | null = null // Estado simples para token (se necessário)

const apiFetch = async <T>(endpoint: string, options: any = {}): Promise<T> => {
  const { apiBaseUrl } = useApiConfig()
  return $fetch<T>(`${apiBaseUrl}${endpoint}`, {
    ...options,
    headers: {
      'Content-Type': 'application/json',
      ...options.headers,
      ...(accessToken ? { Authorization: `Bearer ${accessToken}` } : {})
    }
  })
}

export const userService = {
  updateProfile: async (data: { name: string; email: string }): Promise<User> => {
    const { apiEndpoints } = useApiConfig()
    return await apiFetch<User>(apiEndpoints.users.me, {
      method: 'PATCH',
      body: data
    })
  },

  getUsers: async (): Promise<User[]> => {
    const { apiEndpoints } = useApiConfig()
    return await apiFetch<User[]>(apiEndpoints.users.list)
  },

  getUserById: async (id: string): Promise<User> => {
    const { apiEndpoints } = useApiConfig()
    return await apiFetch<User>(apiEndpoints.users.byId(id))
  },

  upgradeUser: async (id: string): Promise<void> => {
    const { apiEndpoints } = useApiConfig()
    await apiFetch(apiEndpoints.users.upgrade(id), { method: 'POST' })
  },

  downgradeUser: async (id: string): Promise<void> => {
    const { apiEndpoints } = useApiConfig()
    await apiFetch(apiEndpoints.users.downgrade(id), { method: 'POST' })
  },

  changePassword: async (data: { oldPassword: string; newPassword: string }): Promise<void> => {
    const { apiEndpoints } = useApiConfig()
    await apiFetch(apiEndpoints.users.changePassword, {
      method: 'POST',
      body: data
    })
  }
}
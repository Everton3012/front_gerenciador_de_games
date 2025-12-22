// services/user.service.ts
import type { User } from '../@types/auth'
import { API_BASE_URL } from '../constants/api'

const apiFetch = async <T>(endpoint: string, options: any = {}): Promise<T> => {
  const token = localStorage.getItem('access_token')
  return $fetch<T>(`${API_BASE_URL}${endpoint}`, {
    ...options,
    headers: {
      'Content-Type': 'application/json',
      ...options.headers,
      ...(token && { Authorization: `Bearer ${token}` })
    }
  })
}

export const userService = {
  updateProfile: async (data: { name: string; email: string }): Promise<User> => {
    return await apiFetch<User>('/users/me', {
      method: 'PATCH',
      body: data
    })
  },

  getUsers: async (): Promise<User[]> => {
    return await apiFetch<User[]>('/users')
  },

  upgradeUser: async (id: string): Promise<void> => {
    await apiFetch(`/users/${id}/upgrade`, { method: 'POST' })
  }
}
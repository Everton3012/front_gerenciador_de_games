// utils/api.ts
import { API_BASE_URL } from '../constants/api_endpoints'

export const apiFetch = async <T>(endpoint: string, options: any = {}): Promise<T> => {
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
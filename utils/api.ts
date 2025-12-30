// utils/api.ts
import { useApiConfig } from "~/composables/useApiConfig"

export const apiFetch = async <T>(endpoint: string, options: any = {}): Promise<T> => {
  const token = localStorage.getItem('access_token')
  const { apiBaseUrl } = useApiConfig()
  return $fetch<T>(`${apiBaseUrl}${endpoint}`, {
    ...options,
    headers: {
      'Content-Type': 'application/json',
      ...options.headers,
      ...(token && { Authorization: `Bearer ${token}` })
    }
  })
}
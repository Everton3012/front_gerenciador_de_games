// composables/useAuth.ts
import { ref, computed, readonly } from 'vue'
import type { User, AuthResponse, LoginData, RegisterData } from '../@types/auth'
import { authService } from '../services/auth.service'
import { useApiConfig } from '../composables/useApiConfig'
import { STORAGE_KEYS } from '../constants/auth'

export const useAuth = () => {
  const user = ref<User | null>(null)
  const accessToken = ref<string | null>(null)
  const refreshToken = ref<string | null>(null)
  const isLoading = ref(false)
  const { apiBaseUrl } = useApiConfig()

  const isAuthenticated = computed(() => !!accessToken.value && !!user.value)

  // Sincroniza token no service
  const syncToken = () => {
    authService.setToken(accessToken.value)
  }

  const login = async (email: string, password: string): Promise<AuthResponse> => {
    isLoading.value = true
    try {
      const response = await authService.login(email, password)
      accessToken.value = response.access_token
      refreshToken.value = response.refresh_token
      user.value = response.user
      syncToken()
      if (import.meta.client) {
        localStorage.setItem(STORAGE_KEYS.ACCESS_TOKEN, response.access_token)
        localStorage.setItem(STORAGE_KEYS.REFRESH_TOKEN, response.refresh_token)
        localStorage.setItem(STORAGE_KEYS.USER, JSON.stringify(response.user))
      }
      return response
    } finally {
      isLoading.value = false
    }
  }

  const register = async (data: RegisterData): Promise<AuthResponse> => {
    isLoading.value = true
    try {
      const response = await authService.register(data)
      accessToken.value = response.access_token
      refreshToken.value = response.refresh_token
      user.value = response.user
      syncToken()
      if (import.meta.client) {
        localStorage.setItem(STORAGE_KEYS.ACCESS_TOKEN, response.access_token)
        localStorage.setItem(STORAGE_KEYS.REFRESH_TOKEN, response.refresh_token)
        localStorage.setItem(STORAGE_KEYS.USER, JSON.stringify(response.user))
      }
      return response
    } finally {
      isLoading.value = false
    }
  }

  const loginWithGoogle = async (): Promise<void> => {
    
    if (import.meta.client) {
      window.location.href = `${apiBaseUrl}/auth/google`
    }
  }

  const loginWithDiscord = async (): Promise<void> => {
    if (import.meta.client) {
      window.location.href = `${apiBaseUrl}/auth/discord`
    }
  }

  const logout = async (): Promise<void> => {
    try {
      await authService.logout()
    } catch (error) {
      console.error('Logout error:', error)
    } finally {
      accessToken.value = null
      refreshToken.value = null
      user.value = null
      syncToken()
      if (import.meta.client) {
        localStorage.removeItem(STORAGE_KEYS.ACCESS_TOKEN)
        localStorage.removeItem(STORAGE_KEYS.REFRESH_TOKEN)
        localStorage.removeItem(STORAGE_KEYS.USER)
      }
    }
  }

  const refreshAccessToken = async (): Promise<string | null> => {
    if (!refreshToken.value) return null
    try {
      const response = await authService.refreshToken(refreshToken.value)
      accessToken.value = response.access_token
      syncToken()
      if (import.meta.client) {
        localStorage.setItem(STORAGE_KEYS.ACCESS_TOKEN, response.access_token)
      }
      return response.access_token
    } catch (error) {
      await logout()
      return null
    }
  }

  const loadFromStorage = (): void => {
    if (import.meta.client) {
      const storedAccessToken = localStorage.getItem(STORAGE_KEYS.ACCESS_TOKEN)
      const storedRefreshToken = localStorage.getItem(STORAGE_KEYS.REFRESH_TOKEN)
      const storedUser = localStorage.getItem(STORAGE_KEYS.USER)
      if (storedAccessToken) accessToken.value = storedAccessToken
      if (storedRefreshToken) refreshToken.value = storedRefreshToken
      if (storedUser) user.value = JSON.parse(storedUser)
      syncToken()
    }
  }

  const fetchUser = async (): Promise<User | null> => {
    if (!accessToken.value) return null
    try {
      const userData = await authService.fetchUser()
      user.value = userData
      return userData
    } catch (error) {
      const newToken = await refreshAccessToken()
      if (newToken) return fetchUser()
      return null
    }
  }

  const setTokens = (access: string, refresh: string) => {
    accessToken.value = access
    refreshToken.value = refresh
    syncToken()
    if (import.meta.client) {
      localStorage.setItem(STORAGE_KEYS.ACCESS_TOKEN, access)
      localStorage.setItem(STORAGE_KEYS.REFRESH_TOKEN, refresh)
    }
  }

  return {
    user: readonly(user),
    accessToken: readonly(accessToken),
    refreshToken: readonly(refreshToken),
    isAuthenticated,
    isLoading,
    login,
    register,
    loginWithGoogle,
    loginWithDiscord,
    logout,
    refreshAccessToken,
    loadFromStorage,
    fetchUser,
    setTokens
  }
}
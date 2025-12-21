// composables/useAuth.ts
import { ref, computed, readonly } from 'vue'
import type { User, AuthResponse, LoginData, RegisterData } from '../@types/auth'
import { authService } from '../services/auth.service.ts'
const apiBaseUrl = process.env.NUXT_PUBLIC_API_BASE_URL || 'http://localhost:3001'


export const useAuth = () => {
  const user = ref<User | null>(null)
  const accessToken = ref<string | null>(null)
  const refreshToken = ref<string | null>(null)
  const isLoading = ref(false)

  const isAuthenticated = computed(() => !!accessToken.value && !!user.value)

  // Sincroniza token no service
  const syncToken = () => {
    authService.setToken(accessToken.value)
  }

  const login = async (data: LoginData): Promise<AuthResponse> => {
    isLoading.value = true
    try {
      const response = await authService.login(data)
      accessToken.value = response.access_token
      refreshToken.value = response.refresh_token
      user.value = response.user
      syncToken()
      if (import.meta.client) {
        localStorage.setItem('access_token', response.access_token)
        localStorage.setItem('refresh_token', response.refresh_token)
        localStorage.setItem('user', JSON.stringify(response.user))
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
        localStorage.setItem('access_token', response.access_token)
        localStorage.setItem('refresh_token', response.refresh_token)
        localStorage.setItem('user', JSON.stringify(response.user))
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
        localStorage.removeItem('access_token')
        localStorage.removeItem('refresh_token')
        localStorage.removeItem('user')
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
        localStorage.setItem('access_token', response.access_token)
      }
      return response.access_token
    } catch (error) {
      await logout()
      return null
    }
  }

  const loadFromStorage = (): void => {
    if (import.meta.client) {
      const storedAccessToken = localStorage.getItem('access_token')
      const storedRefreshToken = localStorage.getItem('refresh_token')
      const storedUser = localStorage.getItem('user')
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

  return {
    user: readonly(user),
    accessToken: readonly(accessToken),
    isAuthenticated,
    isLoading,
    login,
    register,
    loginWithGoogle,
    loginWithDiscord,
    logout,
    refreshAccessToken,
    loadFromStorage,
    fetchUser
  }
}
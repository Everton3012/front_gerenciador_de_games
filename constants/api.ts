export const API_BASE_URL = process.env.NUXT_PUBLIC_API_BASE_URL || 'http://localhost:3001'
export const API_ENDPOINTS = {
  LOGIN: '/auth/login',
  REGISTER: '/auth/register',
  LOGOUT: '/auth/logout',
  REFRESH: '/auth/refresh',
  ME: '/auth/me',
  GOOGLE: '/auth/google',
  DISCORD: '/auth/discord'
}
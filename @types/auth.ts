// types/auth.ts
export interface User {
    id: string
    name: string
    email: string
    avatarUrl?: string
    plan: 'free' | 'premium'
    role: 'user' | 'admin'
}

export interface AuthResponse {
    access_token: string
    refresh_token: string
    user: User
}

export interface LoginData {
    email: string
    password: string
}

export interface RegisterData {
    name: string
    email: string
    password: string
}
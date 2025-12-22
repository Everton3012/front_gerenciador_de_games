<template>
    <div class="min-h-screen flex items-center justify-center">
        <div class="text-center">
            <div class="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600 mx-auto"></div>
            <p class="mt-4 text-lg">Processando login...</p>
        </div>
    </div>
</template>

<script setup lang="ts">
import { useAuth } from '../../../composables/useAuth'
import { useRouter } from 'vue-router'
import { onMounted } from 'vue'

const { setTokens, fetchUser } = useAuth()
const router = useRouter()

onMounted(async () => {
    if (import.meta.client) {
        const urlParams = new URLSearchParams(window.location.search)
        const accessTokenParam = urlParams.get('access_token')
        const refreshTokenParam = urlParams.get('refresh_token')

        if (accessTokenParam && refreshTokenParam) {
            // Salvar tokens
            setTokens(accessTokenParam, refreshTokenParam)

            // Buscar dados do usuário
            try {
                await fetchUser()
            } catch (error) {
                console.error('Erro ao buscar usuário:', error)
            }

            // Redirecionar para dashboard
            await router.push('/dashboard')
        } else {
            // Erro: redirecionar para login
            await router.push('/login')
        }
    }
})
</script>
<template>
  <div class="min-h-screen bg-gray-50 dark:bg-gray-900">
    <!-- HEADER -->
    <header class="bg-white dark:bg-gray-800 shadow">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between items-center py-6">
          <div class="flex items-center">
            <h1 class="text-2xl font-bold text-gray-900 dark:text-white">Dashboard</h1>
          </div>
          <div class="flex items-center space-x-4">
            <span class="text-sm text-gray-700 dark:text-gray-300">
              Olá, {{ user?.name || 'Usuário' }}
            </span>
            <button @click="handleLogout" class="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-md text-sm font-medium">
              Logout
            </button>
          </div>
        </div>
      </div>
    </header>

    <!-- MAIN CONTENT -->
    <main class="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
      <div class="px-4 py-6 sm:px-0">
        <!-- CARDS DE ESTATÍSTICAS -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <!-- CARD 1: Jogos -->
          <div class="bg-white dark:bg-gray-800 overflow-hidden shadow rounded-lg">
            <div class="p-5">
              <div class="flex items-center">
                <div class="flex-shrink-0">
                  <svg class="h-8 w-8 text-blue-500" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                </div>
                <div class="ml-5 w-0 flex-1">
                  <dl>
                    <dt class="text-sm font-medium text-gray-500 dark:text-gray-400 truncate">
                      Jogos Gerenciados
                    </dt>
                    <dd class="text-lg font-medium text-gray-900 dark:text-white">
                      12
                    </dd>
                  </dl>
                </div>
              </div>
            </div>
          </div>

          <!-- CARD 2: Conquistas -->
          <div class="bg-white dark:bg-gray-800 overflow-hidden shadow rounded-lg">
            <div class="p-5">
              <div class="flex items-center">
                <div class="flex-shrink-0">
                  <svg class="h-8 w-8 text-green-500" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                </div>
                <div class="ml-5 w-0 flex-1">
                  <dl>
                    <dt class="text-sm font-medium text-gray-500 dark:text-gray-400 truncate">
                      Conquistas Desbloqueadas
                    </dt>
                    <dd class="text-lg font-medium text-gray-900 dark:text-white">
                      45
                    </dd>
                  </dl>
                </div>
              </div>
            </div>
          </div>

          <!-- CARD 3: Horas Jogadas -->
          <div class="bg-white dark:bg-gray-800 overflow-hidden shadow rounded-lg">
            <div class="p-5">
              <div class="flex items-center">
                <div class="flex-shrink-0">
                  <svg class="h-8 w-8 text-purple-500" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                  </svg>
                </div>
                <div class="ml-5 w-0 flex-1">
                  <dl>
                    <dt class="text-sm font-medium text-gray-500 dark:text-gray-400 truncate">
                      Horas Jogadas
                    </dt>
                    <dd class="text-lg font-medium text-gray-900 dark:text-white">
                      127h
                    </dd>
                  </dl>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- SEÇÃO DE PERFIL -->
        <div class="mt-8">
          <h2 class="text-lg font-medium text-gray-900 dark:text-white">Meu Perfil</h2>
          <div class="mt-4 bg-white dark:bg-gray-800 shadow overflow-hidden sm:rounded-md p-6">
            <form @submit.prevent="handleUpdateProfile" class="space-y-4">
              <div>
                <label class="block text-sm font-medium text-gray-700 dark:text-gray-300">Nome</label>
                <input
                  v-model="profileForm.name"
                  type="text"
                  class="mt-1 block w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white"
                />
              </div>
              <div>
                <label class="block text-sm font-medium text-gray-700 dark:text-gray-300">Email</label>
                <input
                  v-model="profileForm.email"
                  type="email"
                  class="mt-1 block w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white"
                  disabled
                />
              </div>
              <button
                type="submit"
                :disabled="userLoading"
                class="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm font-medium disabled:opacity-50"
              >
                {{ userLoading ? 'Atualizando...' : 'Atualizar Perfil' }}
              </button>
            </form>
          </div>
        </div>

        <!-- LISTA DE USUÁRIOS (APENAS ADMIN) -->
        <div v-if="user?.role === 'admin'" class="mt-8">
          <h2 class="text-lg font-medium text-gray-900 dark:text-white">Gerenciar Usuários</h2>
          <div class="mt-4 bg-white dark:bg-gray-800 shadow overflow-hidden sm:rounded-md">
            <ul class="divide-y divide-gray-200 dark:divide-gray-700">
              <li v-for="u in users" :key="u.id" class="px-4 py-4 sm:px-6">
                <div class="flex items-center justify-between">
                  <div>
                    <p class="text-sm font-medium text-gray-900 dark:text-white">{{ u.name }}</p>
                    <p class="text-sm text-gray-500 dark:text-gray-400">{{ u.email }}</p>
                  </div>
                  <button
                    @click="upgradeUser(u.id)"
                    class="bg-green-600 hover:bg-green-700 text-white px-3 py-1 rounded text-xs"
                  >
                    Upgrade
                  </button>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <!-- SEÇÃO DE JOGOS RECENTES -->
        <div class="mt-8">
          <h2 class="text-lg font-medium text-gray-900 dark:text-white">Jogos Recentes</h2>
          <div class="mt-4 bg-white dark:bg-gray-800 shadow overflow-hidden sm:rounded-md">
            <ul class="divide-y divide-gray-200 dark:divide-gray-700">
              <li>
                <div class="px-4 py-4 sm:px-6">
                  <div class="flex items-center justify-between">
                    <p class="text-sm font-medium text-indigo-600 dark:text-indigo-400 truncate">
                      The Legend of Zelda
                    </p>
                    <div class="ml-2 flex-shrink-0 flex">
                      <p class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                        Completo
                      </p>
                    </div>
                  </div>
                  <div class="mt-2 sm:flex sm:justify-between">
                    <div class="sm:flex">
                      <p class="flex items-center text-sm text-gray-500 dark:text-gray-400">
                        Última sessão: 2 horas atrás
                      </p>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script setup lang="ts">
  import { ref, onMounted } from 'vue'
  import { useAuth } from '../../../composables/useAuth'
  import { useUser } from '../../../composables/useUser'
  import { navigateTo } from '#app'
  
  const { accessToken, user, loadFromStorage, fetchUser, logout } = useAuth()
  const { updateProfile, loadUsers, upgradeUser, loading: userLoading, users } = useUser()
  const profileForm = ref({ name: '', email: '' })
  
  onMounted(async () => {
    loadFromStorage()
  
    if (!accessToken.value) {
      navigateTo('/login')
      return
    }
  
    try {
      await fetchUser()
      profileForm.value = { name: user.value?.name || '', email: user.value?.email || '' }
  
      if (user.value?.role === 'admin') {
        await loadUsers()
      }
    } catch (error) {
      console.error('Failed to fetch user:', error)
    }
  
    if (!accessToken.value || !user.value) {
      navigateTo('/login')
    }
  })
  
  const handleUpdateProfile = async () => {
    try {
      await updateProfile(profileForm.value)
      await fetchUser() // Atualiza dados
    } catch (error) {
      console.error('Erro ao atualizar perfil:', error)
    }
  }
  
  const handleLogout = () => {
    logout()
    navigateTo('/login')
  }
</script>
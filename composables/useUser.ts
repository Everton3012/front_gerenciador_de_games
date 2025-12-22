// composables/useUser.ts
import { readonly, ref } from 'vue'
import type { User } from '../@types/auth'
import { userService } from '../services/user.service'

export const useUser = () => {
  const users = ref<User[]>([])
  const loading = ref(false)

  const updateProfile = async (data: { name: string; email: string }) => {
    loading.value = true
    try {
      return await userService.updateProfile(data)
    } finally {
      loading.value = false
    }
  }

  const loadUsers = async () => {
    loading.value = true
    try {
      users.value = await userService.getUsers()
    } finally {
      loading.value = false
    }
  }

  const upgradeUser = async (id: string) => {
    try {
      await userService.upgradeUser(id)
      await loadUsers() // Recarrega lista
    } catch (error) {
      console.error('Erro ao fazer upgrade:', error)
    }
  }

  return {
    users: readonly(users),
    loading,
    updateProfile,
    loadUsers,
    upgradeUser
  }
}
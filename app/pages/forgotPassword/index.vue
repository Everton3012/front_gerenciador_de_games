<template>
    <div class="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div class="max-w-md w-full space-y-8">
        <!-- HEADER -->
        <div class="text-center">
          <NuxtLink to="/" class="inline-block">
            <h1 class="text-3xl font-extrabold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
              GameManager
            </h1>
          </NuxtLink>
          <h2 class="mt-6 text-2xl font-bold text-gray-900 dark:text-white">
            {{ t('auth.forgotPassword') }}
          </h2>
          <p class="mt-2 text-sm text-gray-600 dark:text-gray-400">
            {{ t('auth.forgotPasswordSubtitle') }}
          </p>
        </div>
  
        <!-- SUCCESS MESSAGE -->
        <div v-if="emailSent" class="rounded-md bg-green-50 dark:bg-green-900/50 p-4">
          <div class="flex">
            <div class="flex-shrink-0">
              <svg class="h-5 w-5 text-green-400" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
              </svg>
            </div>
            <div class="ml-3">
              <p class="text-sm font-medium text-green-800 dark:text-green-200">
                {{ t('auth.passwordResetSent') }}
              </p>
              <p class="text-sm text-green-700 dark:text-green-300 mt-1">
                {{ t('auth.checkYourEmail') }}
              </p>
            </div>
          </div>
        </div>
  
        <!-- FORM -->
        <Form v-else @submit="handleForgotPassword" :validation-schema="forgotPasswordSchema" class="space-y-6">
          <div>
            <!-- EMAIL -->
            <label for="email" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              {{ t('auth.email') }}
            </label>
            <Field
              id="email"
              name="email"
              type="email"
              autocomplete="email"
              v-model="email"
              class="appearance-none relative block w-full px-3 py-2 border border-gray-300 dark:border-gray-600 
                     placeholder-gray-500 text-gray-900 dark:text-white 
                     bg-white dark:bg-gray-800 rounded-md focus:outline-none focus:ring-blue-500 
                     focus:border-blue-500 focus:z-10 sm:text-sm"
              :placeholder="`${t('auth.emailExample')}@example.com`"
            />
            <ErrorMessage name="email" class="mt-1 text-sm text-red-600" />
          </div>
  
          <!-- SUBMIT BUTTON -->
          <div>
            <button
              type="submit"
              :disabled="loading"
              class="group relative w-full flex justify-center py-2 px-4 border border-transparent 
                     text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 
                     focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 
                     disabled:opacity-50 disabled:cursor-not-allowed transition"
            >
              <span v-if="loading" class="flex items-center">
                <svg class="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                  <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                {{ t('auth.sendingEmail') }}
              </span>
              <span v-else>
                {{ t('auth.sendResetEmail') }}
              </span>
            </button>
          </div>
  
          <!-- BACK TO LOGIN -->
          <div class="text-center">
            <NuxtLink to="/login" class="font-medium text-blue-600 hover:text-blue-500">
              {{ t('auth.backToLogin') }}
            </NuxtLink>
          </div>
        </Form>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref } from 'vue'
  import { useI18n } from 'vue-i18n'
  import { Form, Field, ErrorMessage } from 'vee-validate'
  import { useAuthValidation } from '../../../composables/useAuthValidation'
  
  const { t } = useI18n()
  const { forgotPasswordSchema } = useAuthValidation()
  
  // Form state
  const email = ref('')
  const loading = ref(false)
  const emailSent = ref(false)
  
  // Handle forgot password
  const handleForgotPassword = async (values: any) => {
    loading.value = true
  
    try {
      console.log('Forgot password for:', values.email)
  
      // Simular API call
      await new Promise(resolve => setTimeout(resolve, 1000))
  
      // Simular erro para demonstração
      if (values.email === 'error@example.com') {
        throw new Error('E-mail não encontrado')
      }
  
      // Success
      emailSent.value = true
  
    } catch (err: any) {
      console.error('Forgot password failed:', err)
      throw err // vee-validate vai capturar e mostrar o erro
    } finally {
      loading.value = false
    }
  }
  </script>
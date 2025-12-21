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
          {{ t('auth.signUp') }}
        </h2>
        <p class="mt-2 text-sm text-gray-600 dark:text-gray-400">
          {{ t('auth.registerSubtitle') }}
        </p>
      </div>

      <!-- SOCIAL REGISTER -->
      <div class="space-y-4">
        <button
          @click="registerWithGoogle"
          :disabled="loading"
          class="w-full flex justify-center items-center px-4 py-2 border border-gray-300 dark:border-gray-600 
                 rounded-md shadow-sm text-sm font-medium text-gray-700 dark:text-gray-300 
                 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 
                 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 
                 disabled:opacity-50 disabled:cursor-not-allowed transition"
        >
          <svg class="w-5 h-5 mr-3" viewBox="0 0 24 24">
            <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
            <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
            <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
            <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
          </svg>
          {{ t('auth.registerWithGoogle') }}
        </button>

        <button
          @click="registerWithDiscord"
          :disabled="loading"
          class="w-full flex justify-center items-center px-4 py-2 border border-gray-300 dark:border-gray-600 
                 rounded-md shadow-sm text-sm font-medium text-white 
                 bg-[#5865F2] hover:bg-[#4752C4] 
                 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#5865F2] 
                 disabled:opacity-50 disabled:cursor-not-allowed transition"
        >
          <svg class="w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 24 24">
            <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419-.0189 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189Z"/>
          </svg>
          {{ t('auth.registerWithDiscord') }}
        </button>
      </div>

      <!-- DIVIDER -->
      <div class="relative">
        <div class="absolute inset-0 flex items-center">
          <div class="w-full border-t border-gray-300 dark:border-gray-600"></div>
        </div>
        <div class="relative flex justify-center text-sm">
          <span class="px-2 bg-gray-50 dark:bg-gray-900 text-gray-500 dark:text-gray-400">
            {{ t('auth.orContinueWith') }}
          </span>
        </div>
      </div>

      <!-- FORM -->
      <Form @submit="handleRegister" :validation-schema="registerSchema" class="space-y-6">
        <!-- FULL NAME -->
        <div>
          <label for="fullName" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            {{ t('auth.fullName') }}
          </label>
          <Field
            id="fullName"
            name="fullName"
            type="text"
            autocomplete="name"
            v-model="form.fullName"
            class="appearance-none relative block w-full px-3 py-2 border border-gray-300 dark:border-gray-600 
                   placeholder-gray-500 text-gray-900 dark:text-white 
                   bg-white dark:bg-gray-800 rounded-md focus:outline-none focus:ring-blue-500 
                   focus:border-blue-500 focus:z-10 sm:text-sm"
            :placeholder="t('auth.fullNamePlaceholder')"
          />
          <ErrorMessage name="fullName" class="mt-1 text-sm text-red-600" />
        </div>

        <!-- EMAIL -->
        <div>
          <label for="email" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            {{ t('auth.email') }}
          </label>
          <Field
            id="email"
            name="email"
            type="email"
            autocomplete="email"
            v-model="form.email"
            class="appearance-none relative block w-full px-3 py-2 border border-gray-300 dark:border-gray-600 
                   placeholder-gray-500 text-gray-900 dark:text-white 
                   bg-white dark:bg-gray-800 rounded-md focus:outline-none focus:ring-blue-500 
                   focus:border-blue-500 focus:z-10 sm:text-sm"
            :placeholder="`${t('auth.emailExample')}@example.com`"
          />
          <ErrorMessage name="email" class="mt-1 text-sm text-red-600" />
        </div>

        <!-- PASSWORD -->
        <div>
          <label for="password" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            {{ t('auth.password') }}
          </label>
          <Field
            id="password"
            name="password"
            type="password"
            autocomplete="new-password"
            v-model="form.password"
            class="appearance-none relative block w-full px-3 py-2 border border-gray-300 dark:border-gray-600 
                   placeholder-gray-500 text-gray-900 dark:text-white 
                   bg-white dark:bg-gray-800 rounded-md focus:outline-none focus:ring-blue-500 
                   focus:border-blue-500 focus:z-10 sm:text-sm"
            :placeholder="t('auth.passwordPlaceholder')"
          />
          <ErrorMessage name="password" class="mt-1 text-sm text-red-600" />
        </div>

        <!-- CONFIRM PASSWORD -->
        <div>
          <label for="confirmPassword" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            {{ t('auth.confirmPassword') }}
          </label>
          <Field
            id="confirmPassword"
            name="confirmPassword"
            type="password"
            autocomplete="new-password"
            v-model="form.confirmPassword"
            class="appearance-none relative block w-full px-3 py-2 border border-gray-300 dark:border-gray-600 
                   placeholder-gray-500 text-gray-900 dark:text-white 
                   bg-white dark:bg-gray-800 rounded-md focus:outline-none focus:ring-blue-500 
                   focus:border-blue-500 focus:z-10 sm:text-sm"
            :placeholder="t('auth.passwordPlaceholder')"
          />
          <ErrorMessage name="confirmPassword" class="mt-1 text-sm text-red-600" />
        </div>

        <!-- TERMS AGREEMENT -->
        <div class="flex items-start">
          <div class="flex items-center h-5">
            <Field
              id="agree-terms"
              name="agreeTerms"
              type="checkbox"
              v-model="form.agreeTerms"
              class="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 dark:border-gray-600 
                     rounded bg-white dark:bg-gray-800"
            />
          </div>
          <div class="ml-3 text-sm">
            <label for="agree-terms" class="text-gray-700 dark:text-gray-300">
              {{ t('auth.agreeToTerms') }}
              <a href="#" class="font-medium text-blue-600 hover:text-blue-500">
                {{ t('auth.terms') }}
              </a>
              {{ t('auth.and') }}
              <a href="#" class="font-medium text-blue-600 hover:text-blue-500">
                {{ t('auth.privacyPolicy') }}
              </a>
            </label>
            <ErrorMessage name="agreeTerms" class="mt-1 text-sm text-red-600" />
          </div>
        </div>

        <!-- ERROR MESSAGE -->
        <div v-if="error" class="rounded-md bg-red-50 dark:bg-red-900/50 p-4">
          <div class="flex">
            <div class="flex-shrink-0">
              <svg class="h-5 w-5 text-red-400" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clip-rule="evenodd" />
              </svg>
            </div>
            <div class="ml-3">
              <p class="text-sm font-medium text-red-800 dark:text-red-200">
                {{ error }}
              </p>
            </div>
          </div>
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
              {{ t('auth.creatingAccount') }}
            </span>
            <span v-else>
              {{ t('auth.createAccount') }}
            </span>
          </button>
        </div>

        <!-- LOGIN LINK -->
        <div class="text-center">
          <p class="text-sm text-gray-600 dark:text-gray-400">
            {{ t('auth.alreadyHaveAccount') }}
            <NuxtLink to="/login" class="font-medium text-blue-600 hover:text-blue-500">
              {{ t('auth.signIn') }}
            </NuxtLink>
          </p>
        </div>
      </Form>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { ref, reactive } from 'vue'
  import { useI18n } from 'vue-i18n'
  import { Form, Field, ErrorMessage } from 'vee-validate'
  import { useAuthValidation } from '../../../composables/useAuthValidation'
  import { useAuth } from '../../../composables/useAuth'
  import { useRouter } from 'vue-router'
  
  const { t } = useI18n()
  const { registerSchema } = useAuthValidation()
  const { register, loginWithGoogle, loginWithDiscord } = useAuth()
  const router = useRouter()
  
  // Form state
  const form = reactive({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
    agreeTerms: false
  })
  
  // UI state
  const loading = ref(false)
  const error = ref('')
  
  // Handle register
  const handleRegister = async (values: any) => {
    loading.value = true
    error.value = ''
  
    try {
      const response = await register({
        name: values.fullName,
        email: values.email,
        password: values.password
      })
  
      console.log('Registration successful:', response)
      
      // Redirecionar para dashboard ou página inicial
      await router.push('/dashboard')
      
    } catch (err: any) {
      console.error('Registration failed:', err)
      error.value = err.data?.message || t('auth.registerError')
    } finally {
      loading.value = false
    }
  }
  
  // Social register handlers
  const registerWithGoogle = async () => {
    await loginWithGoogle()
  }
  
  const registerWithDiscord = async () => {
    await loginWithDiscord()
  }
  </script>
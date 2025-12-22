<template>
  <div class="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
    <div class="max-w-md w-full space-y-8">
      <!-- HEADER -->
      <div class="text-center">
        <NuxtLink to="/" class="inline-block">
          <h1
            class="text-3xl font-extrabold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
            GameManager
          </h1>
        </NuxtLink>
        <h2 class="mt-6 text-2xl font-bold text-gray-900 dark:text-white">
          {{ t('auth.signIn') }}
        </h2>
        <p class="mt-2 text-sm text-gray-600 dark:text-gray-400">
          {{ t('auth.loginSubtitle') }}
        </p>
      </div>

      <!-- FORM -->


    </div>
  </div>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'


const { t } = useI18n()

</script>
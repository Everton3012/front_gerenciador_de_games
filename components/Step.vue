<template>
  <div class="text-center">
    <div class="w-16 h-16 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 
                flex items-center justify-center text-2xl font-bold mx-auto mb-4 text-white">
      {{ number }}
    </div>
    <h4 class="text-xl font-bold mb-2">{{ title }}</h4>
    <p class="text-gray-600 dark:text-gray-400">{{ description }}</p>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  number: string
  title: string
  description: string
}>()
</script>
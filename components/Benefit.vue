<template>
  <div class="p-6 rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700
              hover:border-blue-500 transition-colors shadow-sm text-center">
    <div class="text-3xl mb-3">✨</div>
    <p class="font-semibold text-gray-900 dark:text-white">{{ text }}</p>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  text: string
}>()
</script>
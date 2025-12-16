<template>
    <div
      class="p-8 rounded-2xl bg-gray-50 dark:bg-gray-900
             border border-gray-200 dark:border-gray-700
             hover:shadow-lg transition"
    >
      <div
        class="w-10 h-10 flex items-center justify-center
               rounded-full bg-blue-600 text-white font-bold mb-4"
      >
        {{ number }}
      </div>
  
      <h3 class="text-lg font-semibold mb-2">
        {{ title }}
      </h3>
  
      <p class="text-sm text-gray-600 dark:text-gray-400">
        {{ description }}
      </p>
    </div>
  </template>
  
  <script setup>
  defineProps({
    number: String,
    title: String,
    description: String,
  })
  </script>
  
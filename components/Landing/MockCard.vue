<template>
    <div class="p-4 rounded-xl bg-gray-800 border border-white/10 text-center">
      <p class="text-sm text-gray-300">{{ title }}</p>
    </div>
  </template>
  
  <script setup>
  defineProps({ title: String })
  </script>
  
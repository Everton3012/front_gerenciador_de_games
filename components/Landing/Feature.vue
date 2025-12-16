<template>
    <div class="p-6 text-center rounded-xl bg-gray-900 border border-white/10
                hover:bg-gradient-to-br hover:from-blue-600/20 hover:to-purple-600/20 transition">
      <p class="font-semibold">{{ text }}</p>
    </div>
  </template>
  
  <script setup>
  defineProps({ text: String })
  </script>
  
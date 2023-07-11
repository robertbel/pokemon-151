<template>
    <div class="color-box" :style="{ backgroundColor: color, height: '1200px' }"></div>
  </template>
  
  <script setup>
  const props = defineProps({
    color: {
      type: String,
      required: true,
    },
  })
  </script>
  
  <style scoped>
  .color-box {
    width: 50%;
    margin-bottom: 20px;
  }
  </style>
  
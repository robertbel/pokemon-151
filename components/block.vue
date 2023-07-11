<template>
    <div ref="blockRef" :style="{ 'background': color }" class="block">
      {{ isBoxVisible }}
    </div>
  </template>
    
  <script setup>
  const props = defineProps({
    color: String
  });
  
  const blockRef = ref(null);
  const isBoxVisible = ref(false);

  
  let handleScroll = null;
  
  onMounted(() => {
    const checkVisibility = () => {
      const boundingBox = blockRef.value.getBoundingClientRect();
      const { top, left, right, bottom } = boundingBox;
      const visible = top <= window.innerHeight && left <= window.innerWidth && bottom >= 0 && right >= 0;
      
      if (visible && !isBoxVisible.value) {
        useState('currentColor', () => props.color);
      }
      
      isBoxVisible.value = visible;
    };
  
    handleScroll = () => checkVisibility();
    window.addEventListener('scroll', handleScroll);
  
    // Initial check
    checkVisibility();
  });
  
  onUnmounted(() => {
    if (handleScroll) {
      window.removeEventListener('scroll', handleScroll);
      handleScroll = null;
    }
  });
  </script>
  
  <style scoped>
  .block {
    height: 40rem;
    margin-bottom: 10rem;
  }
  </style>
  
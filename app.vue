<template>
  <div :style="{ 'background': currentColor }">
    <Block color="#FF0000">Red</Block>
    <Block color="#00FF00">Green</Block>
    <Block color="#0000FF">Blue</Block>
    <Block color="#FFFF00">Yellow</Block>
    <Block color="#FF00FF">Purple</Block>
  </div>
</template>

<script setup>
const currentColor = ref('red');

currentColor.value = useState('currentColor');
console.log(useState('currentColor'));
</script>

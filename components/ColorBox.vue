<template>
  <div class="color-box" :style="{ backgroundColor: color }" ref="colorBoxRef">
    <h2>Hallo</h2>
  </div>
</template>

<script setup>
const props = defineProps({
  color: {
    type: String,
    required: true,
  },
});

const colorBoxRef = ref(null);

const isVisible = useElementVisibility(colorBoxRef);

const currentColor = useCurrentColor();

watch(isVisible, (newVal) => {
  if (newVal) {
    currentColor.value = props.color;
  }
});
</script>

<style scoped>
.color-box {
  border-radius: 2rem;
  grid-area: block;
}
</style>

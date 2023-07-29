<template>
  <section class="color-box" ref="colorBoxRef">
    <slot></slot>
  </section>
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
  min-height: 1px;
}
</style>

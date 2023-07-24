<template>
  <div class="color-box" ref="colorBoxRef"></div>
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
  console.log(isVisible);
  // } else {
  //   currentColor.value = "var(--color-alpha)";
  // }
});
</script>

<style scoped>
.color-box {
  border-radius: 2rem;
  grid-area: block;
  min-height: 1px;
}
</style>

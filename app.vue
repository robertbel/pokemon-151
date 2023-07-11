<template>
  <div class="color-page" :style="{ backgroundColor: bgColor }">
    <div class="spacer">space</div>
    <ColorBox color="#ff0000" :ref="setColorBoxRef" />
    <div class="spacer">space</div>
    <div class="spacer">space</div>
    <ColorBox color="#00ff00" :ref="setColorBoxRef" />
    <div class="spacer">space</div>
    <ColorBox color="#0000ff" :ref="setColorBoxRef" />
    <div class="spacer">space</div>
    <div class="spacer">space</div>
    <div class="spacer">space</div>
    <ColorBox color="#ffff00" :ref="setColorBoxRef" />
    <div class="spacer">space</div>
    <div class="spacer">space</div>
    <div class="spacer">space</div>
    <ColorBox color="#00ffff" :ref="setColorBoxRef" />
    <div class="spacer">space</div>
    <div class="spacer">space</div>
    <div class="spacer">space</div>
    <ColorBox color="#ff00ff" :ref="setColorBoxRef" />
  </div>
</template>

<script>
import { ref, onMounted, onUnmounted } from 'vue'
import ColorBox from '@/components/ColorBox.vue'

export default {
  components: {
    ColorBox
  },
  setup() {
    const bgColor = ref('#222222')

    let observer = null
    let colorBoxes = []
    let lastColor = null

    const setColorBoxRef = (el) => {
      if (el) {
        colorBoxes.push(el)
      }
    }

    const handleIntersect = (entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          lastColor = entry.target.style.backgroundColor
        } else {
          bgColor.value = lastColor
        }
      })
    }

    onMounted(() => {
      const options = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
      }

      observer = new IntersectionObserver(handleIntersect, options)

      colorBoxes.forEach(colorBox => {
        observer.observe(colorBox.$el)
      })
    })

    onUnmounted(() => {
      if (observer) {
        colorBoxes.forEach(colorBox => {
          observer.unobserve(colorBox.$el)
        })
        observer = null
      }
    })

    return { bgColor, setColorBoxRef }
  }
}
</script>

<style scoped>
.color-page {
  width: 100%;
  height: 100%;
  transition: background-color 0.3s ease;
}

.spacer {
  height: 400px;
}
</style>

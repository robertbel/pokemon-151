<template>
  <ColorBox class="la hero" color="#542760"> Jooo </ColorBox>
  <ColorBox class="la" color="#F38696">
    <div id="one">
      <div class="sub one">sub</div>
      <div class="sub two">sub</div>
    </div>
  </ColorBox>

  <ColorBox class="la" color="#79C7D7">
    <div>
      <div class="sub one">sub</div>
      <div class="sub two">sub</div>
    </div>
  </ColorBox>

  <ColorBox class="la" color="#E7DB71">
    <div>
      <div class="sub one">sub</div>
      <div class="sub two">sub</div>
    </div>
  </ColorBox>

  <ColorBox class="la" color="#71E7A0">
    <div>
      <div class="sub one">sub</div>
      <div class="sub two">sub</div>
    </div>
  </ColorBox>
</template>

<script setup>
import va from "@vercel/analytics";
import VanillaTilt from "vanilla-tilt";

const currentColor = useCurrentColor();

watch(currentColor, (newColor) => {
  document.querySelector("body").style.backgroundColor = newColor;
});

definePageMeta({
  layout: "default",
});

useSeoMeta({
  title: "Pokémon Scarlet & Violet 151",
  ogTitle: "Pokémon Scarlet & Violet 151",
  description:
    "Verlies jezelf opnieuw in de wereld van Kanto met Pokémon Scarlet & Violet 151.",
  ogDescription:
    "Verlies jezelf opnieuw in de wereld van Kanto met Pokémon Scarlet & Violet 151.",
  ogImage: "@/assets/images/og-image.png",
});

const tiltElement = ref(null);

function trackClick() {
  va.track("bol");
}

onMounted(() => {
  VanillaTilt.init(tiltElement.value, {
    startX: 20,
    startY: 40,
    max: 25,
    speed: 400,
    glare: true,
  });
});
</script>

<style scoped>
.la {
  color: var(--font-base-color);
}

@media only screen and (max-width: 768px) {
  .la {
    padding-inline: var(--space-l-xl);
  }
}
section.la {
  height: calc(100vh - env(safe-area-inset-bottom));
  height: 100dvh;
  padding-block: 2rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 400px 200px;
  gap: 1rem;
  grid-template-areas:
    "block block"
    "sub1 sub2";
}

.sub {
  background-color: #fff;
  border-radius: 2rem;
  padding: 3rem;
}

.sub.one {
  grid-area: sub1;
}

.sub.two {
  grid-area: sub2;
}

.spacer {
  height: 100vh;
}
</style>

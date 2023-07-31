<template>
  <div class="la hero">
    <div class="section-content">
      <!-- <div>Ontdek de glans van het verleden!</div> -->
      <h1 class="hero-title">Pokémon Scarlet & Violet 151</h1>
      <p class="hero-intro">
        Verlies jezelf opnieuw in de wereld van Kanto met 'Pokémon Scarlet &
        Violet 151'. Beleef je favoriete Pokémon op een nieuwe en spannende
        manier. Ga het avontuur aan, en verzamel ze allemaal!
      </p>
      <div class="actions">
        <a
          href="https://www.bol.com/nl/nl/s/?searchtext=pokemon+151"
          target="_blank"
          class="button-link primary"
          @click="trackClick"
          >Pre-order bij Bol.com!</a
        >
        <a href="/producten" class="button-link secondary">Ontdek producten</a>
      </div>
    </div>
    <div class="card-container">
      <div class="card" ref="tiltElement"></div>
    </div>
  </div>
</template>

<script setup>
import va from "@vercel/analytics";
import VanillaTilt from "vanilla-tilt";

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
  va.track("Bol.com main c2a");
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

.la.hero {
  display: flex;
  gap: 2rem;
  margin-block-start: var(--space-xl-2xl);
  padding-inline: var(--space-l-xl);
}

@media only screen and (max-width: 768px) {
  .la.hero {
    flex-direction: column;
  }
}

.section-content {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: var(--space-s-m);
}

.hero-title,
.hero-intro {
  text-wrap: balance;
}

.hero-intro {
  font-size: var(--font-size-md);
  line-height: 1.6;
}

.actions {
  padding-block-start: 1rem;
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
}

.card-container {
  flex: 1;
  display: grid;
  justify-items: center;
}

.card {
  /* position: relative; */
  will-change: transform;
  width: 80%;
  aspect-ratio: 4 / 5;
  border-radius: 1rem;
  background-color: #fff;
  background-image: url("@/assets/images/card_mew.webp");
  background-size: cover;
}

@supports not (aspect-ratio: 4 / 5) {
  .card {
    padding-top: 100%;
    height: 0;
    position: relative;
    overflow: hidden;
  }
}

/* 
.card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background-color: #333;
  border-radius: 1rem;
  box-shadow: 0 20px 70px -10px rgba(51, 51, 51, 0.7), 0 50px 100px 0 rgba(51, 51, 51, 0.2);
  -webkit-transform: translateZ(-50px);
  transform: translateZ(-50px);
  -webkit-transition: .3s;
  transition: .3s;
} */
</style>

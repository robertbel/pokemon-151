<template>
  <main class="main">
    <section class="section hero">
      <div class="section-content">
        <div>Ontdek de glans van het verleden!</div>
        <!-- <h1 class="hero-title">Pokémon Scarlet & Violet 151</h1> -->
        <h1 class="hero-title">Lorem ipsum dolar sit amet</h1>
        <p class="hero-intro">
          Verlies jezelf opnieuw in de wereld van Kanto met 'Pokémon Scarlet &
          Violet 151'. Beleef je favoriete Pokémon op een nieuwe en spannende
          manier. Ga het avontuur aan, en verzamel ze allemaal!
        </p>
        <div class="actions">
          <a href="#" class="button-link primary">Pre-order bij Bol.com!</a>
          <a href="#"  class="button-link secondary">Ontdek paketten</a>
        </div>
      </div>
      <div class="card-container">
        <div class="card" ref="tiltElement"></div>
      </div>
    </section>
  </main>
</template>

<script setup>
import VanillaTilt from 'vanilla-tilt';

const tiltElement = ref(null);

onMounted(() => {
  VanillaTilt.init(tiltElement.value, {
    startX: 20,
    startY: 40, 
    max: 25,
    speed: 400,
    glare: true
    // You can add more options here
  });
});
</script>

<style scoped>
.main {
  max-width: 65rem;
  margin-inline: auto;
}

.section {
  position: relative;
  display: grid;
  align-items: center;
  height: 100vh;
  height: 100dvh;
  padding-inline: var(--space-l-xl);
  color: var(--font-base-color);
}

.section.hero {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  grid-gap: 2rem;
}

.section.hero::before {
  content: "";
  position: absolute;
  inset: 0;
  background-color: var(--color-alpha);
  background-image: url('@/assets/images/hero-pattern.png');
  background-blend-mode: luminosity;
  opacity: 0.1;
  z-index: -1;
  mask-image: radial-gradient(
      closest-corner circle at 50% 0%, 
      #000 0%, transparent 100%
    )
  ;
}

.section-content {
  max-width: 37.5rem;
  display: grid;
  gap: var(--space-s-m);
}

.hero-title, .hero-intro {
  text-wrap: balance;
}

.actions {
  padding-block-start: 1rem;
  display: flex;
  gap: 1rem;
}

.button-link {
  text-decoration: none;
  padding-inline: var(--space-l);
  padding-block: var(--space-s);
  display: grid;
  place-items: center;
  border-radius: 2rem;
  font-weight: 700;
}

.button-link.primary {
  background-color: #E7C771;
  color: #542760;
}

.button-link.secondary {
  border: 2px solid #fff;
  color: #fff;
}

.card-container {
  display: grid;
  place-items: center;
  height: 100%;
  overflow: hidden;
}

.card {
  /* position: relative; */
  will-change: transform;
  width: 400px;
  height: 500px;
  border-radius: 1rem;
  background-color: red;
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

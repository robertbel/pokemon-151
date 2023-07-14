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
    </section>
  </main>
</template>

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

.section.hero::before {
  content: "";
  position: absolute;
  inset: 0;
  background-color: var(--color-alpha);
  background-image: url('@/assets/images/hero-pattern.png');
  background-blend-mode: luminosity;
  opacity: 0.1;
  mask-image: radial-gradient(
      closest-corner circle at 50% 0%, 
      #000 0%, transparent 100%
    )
  ;
}

.section-content {
  max-width: 37.5rem;
  display: grid;
  gap: 1.5rem;
  z-index: 1;
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
</style>

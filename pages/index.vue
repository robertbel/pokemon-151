<template>
  <header class="header">
    <img src="@/assets/images/logo.webp" alt="Pokémon Scarlet & Violet 151" />
  </header>
  <main class="main">
    <section class="section hero">
      <ColorBox color="var(--color-alpha)" style="opacity: 0" />
      <div class="section-content">
        <div>Ontdek de glans van het verleden!</div>
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
            @click="trekkie"
            >Pre-order bij Bol.com!</a
          >
          <a href="#one" class="button-link secondary">Ontdek paketten</a>
        </div>
      </div>
      <div class="card-container">
        <div class="card" ref="tiltElement"></div>
      </div>
    </section>

    <section class="la" id="one">
      <ColorBox color="#F38696" />
      <div class="sub one">sub</div>
      <div class="sub two">sub</div>
    </section>

    <section class="la">
      <ColorBox color="#79C7D7" />
      <div class="sub one">sub</div>
      <div class="sub two">sub</div>
    </section>

    <section class="la">
      <ColorBox color="#E7DB71" />
      <div class="sub one">sub</div>
      <div class="sub two">sub</div>
    </section>

    <section class="la">
      <ColorBox color="#71E7A0" />
      <div class="sub one">sub</div>
      <div class="sub two">sub</div>
    </section>
  </main>
</template>

<script setup>
import va from "@vercel/analytics";
import VanillaTilt from "vanilla-tilt";

const currentColor = useCurrentColor();

watch(currentColor, (newColor) => {
  document.querySelector("body").style.backgroundColor = newColor;
  console.log(newColor);
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

function trekkie() {
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
.header {
  display: flex;
  justify-content: center;
  margin-block: var(--space-s-l);
}
.main {
  max-width: 65rem;
  margin-inline: auto;
}

.section {
  padding-inline: var(--space-l-xl);
  color: var(--font-base-color);
}

.section.hero {
  display: flex;
  gap: 2rem;
  height: calc(80vh - env(safe-area-inset-bottom));
  height: 80dvh;
}

@media only screen and (max-width: 768px) {
  .section.hero {
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

.actions {
  padding-block-start: 1rem;
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
}

.button-link {
  text-decoration: none;
  padding-inline: var(--space-s);
  padding-block: var(--space-s);
  display: grid;
  place-items: center;
  border-radius: 2rem;
  font-weight: 700;
}

.button-link.primary {
  background-color: #e7c771;
  color: #542760;
}

.button-link.primary:hover {
  background-color: #f9da87;
}

.button-link.secondary {
  border: 2px solid #fff;
  color: #fff;
}

.card-container {
  flex: 1;
}

.card {
  /* position: relative; */
  will-change: transform;
  width: 100%;
  aspect-ratio: 4 / 5;
  border-radius: 1.5rem;
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

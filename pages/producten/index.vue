<template>
  <div class="intro">
    <h1>Producten</h1>
    <p>
      Hier vindt je all producten beschikbaar van de nostalgische Pokémon
      Scarlet & Violet 151 set, vergeleken in prijs en beschikbaarheid.
    </p>
  </div>
  <ColorBox
    class="la"
    v-for="product in products"
    :color="product.backgroundColor"
    :data="product"
  ></ColorBox>
</template>

<script setup>
import va from "@vercel/analytics";

const products = [
  {
    productTitle: "Ultra Premium Collection Box",
    productIntro:
      "Voeg de mythische Pokémon Mew toe aan je Pokédex! Geniet van unieke Scarlet & Violet-151 boosterpacks, een verzamelbare Mew EX metalen kaart en veel meer.",
    productImage: "product_ultra-premium-collection",
    productImageAlt:
      "Pokémon Scarlet & Violet 151 - Ultra Premium Collection Box",
    primaryUrl:
      "https://www.bol.com/nl/nl/p/pokemon-scarlet-violet-151-ultra-premium-collection-pokemon-kaarten/9300000153604924/",
    productPrices: [
      {
        store: "Dracoon",
        url: "https://dracoon.nl/product/pokemon-scarlet-violet-151-ultra-premium-collection/",
        price: 128.99,
      },
      {
        store: "Bescards",
        url: "https://www.bescards.nl/pokemon-151-ultra-premium-collection/",
        price: 139.99,
      },
      {
        store: "Game Mania",
        url: "https://www.gamemania.nl/nl/board-games/trading-card-games/153205_scarlet-violet-151-ultra-premium-collection-pokemon-tcg",
        price: 149.98,
      },
      {
        store: "Bol.com",
        url: "https://www.bol.com/nl/nl/p/pokemon-scarlet-violet-151-ultra-premium-collection-pokemon-kaarten/9300000153604924/",
        price: 149.99,
      },
      {
        store: "Intertoys",
        url: "https://www.intertoys.nl/pokemon-tcg-scarlet-en-violet-151-ultra-premium-collection",
        price: 149.99,
      },
    ],
    numberOfPacks: 16,
    backgroundColor: "#542760",
    backgroundColorBlock: "#865992",
    textColorInverted: true,
  },
  {
    productTitle: "Booster bundle",
    productIntro:
      "Ga mee op avontuur met Bulbasaur, Charmander en Squirtle! Vang alle 151 Pokémon met de Scarlet & Violet-151 Booster Bundle, inclusief unieke Venusaur EX, Charizard EX en Blastoise EX kaarten.",
    productImage: "product_booster-bundle",
    productImageAlt: "Pokémon Scarlet & Violet 151 - Booster bundle",
    primaryUrl:
      "https://www.bol.com/nl/nl/p/pokemon-scarlet-violet-151-6-booster-bundle-pokemon-kaarten/9300000152330531/",
    productPrices: [
      {
        store: "Dracoon",
        url: "https://dracoon.nl/product/pokemon-scarlet-violet-151-booster-bundel/",
        price: 27.95,
      },
      {
        store: "Bescards",
        url: "https://www.bescards.nl/pokemon-151-6pk-booster-bundle/",
        price: 29.99,
      },
      {
        store: "Bol.com",
        url: "https://www.bol.com/nl/nl/p/pokemon-scarlet-violet-151-6-booster-bundle-pokemon-kaarten/9300000152330531/",
        price: 34.99,
      },
      {
        store: "Intertoys",
        url: "https://www.intertoys.nl/pokemon-tcg-scarlet-en-violet-151-booster-bundel",
        price: 34.99,
      },
      {
        store: "Game Mania",
        url: "https://www.gamemania.nl/nl/board-games/trading-card-games/153200_scarlet-violet-151-6-booster-bundle-pokemon-tcg",
        price: 36.98,
      },
    ],
    numberOfPacks: 6,
    backgroundColor: "#F38696",
    backgroundColorBlock: "#FBCBDE",
    textColorInverted: false,
  },
  {
    productTitle: "Elite trainer box",
    productIntro:
      "Ga op een episch avontuur in de Kanto-regio met de unieke Elite Trainer Box! Maak je Pokédex compleet en bewijs dat je elke uitdaging aankan.",
    productImage: "product_elite-trainer-box",
    productImageAlt: "Pokémon Scarlet & Violet 151 - Elite trainer box",
    primaryUrl:
      "https://www.bol.com/nl/nl/p/pokemon-scarlet-violet-151-elite-trainer-box-pokemon-kaarten/9300000153604928/",
    productPrices: [
      {
        store: "Dracoon",
        url: "https://dracoon.nl/product/pokemon-scarlet-violet-151-elite-trainer-box/",
        price: 44.95,
      },
      {
        store: "Bescards",
        url: "https://www.bescards.nl/pokemon-151-elite-trainer-box/",
        price: 44.99,
      },
      {
        store: "Bol.com",
        url: "https://www.bol.com/nl/nl/p/pokemon-scarlet-violet-151-elite-trainer-box-pokemon-kaarten/9300000153604928/",
        price: 55.99,
      },
      {
        store: "Intertoys",
        url: "https://www.intertoys.nl/pokemon-tcg-scarlet-en-violet-151-elite-trainer-box",
        price: 55.99,
      },
      {
        store: "Game Mania",
        url: "https://www.gamemania.nl/nl/board-games/trading-card-games/153201_scarlet-violet-151-elite-trainer-box-pokemon-tcg",
        price: 59.98,
      },
    ],
    numberOfPacks: 9,
    backgroundColor: "#79C7D7",
    backgroundColorBlock: "#ABE2ED",
    textColorInverted: false,
  },
];

const currentColor = useCurrentColor();

watch(currentColor, (newColor) => {
  document.querySelector("body").style.backgroundColor = newColor;
});

definePageMeta({
  layout: "default",
});

useSeoMeta({
  title: "Pokémon Scarlet & Violet 151 - Producten",
  ogTitle: "Pokémon Scarlet & Violet 151 - Producten",
  description:
    "Hier vindt je all producten beschikbaar van de nostalgische Pokémon Scarlet & Violet 151 set, vergeleken in prijs en beschikbaarheid.",
  ogDescription:
    "Hier vindt je all producten beschikbaar van de nostalgische Pokémon Scarlet & Violet 151 set, vergeleken in prijs en beschikbaarheid.",
  ogImage: "@/assets/images/og-image.png",
});

function trackClick() {
  va.track("bol");
}
</script>

<style scoped>
.intro {
  color: white;
  margin-block-start: var(--space-xl-2xl);
}

@media only screen and (max-width: 768px) {
  .intro {
    margin-block-end: 2rem;
  }
}

.intro p {
  font-size: var(--font-size-md);
  line-height: 1.6;
  margin-block-start: var(--space-xs-s);
}

section.la {
  padding-block: var(--space-2xl-3xl);
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

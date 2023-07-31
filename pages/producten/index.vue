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
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio dolor voluptates quas.",
    productImage: "product_ultra-premium-collection",
    productImageAlt:
      "Pokémon Scarlet & Violet 151 - Ultra Premium Collection Box",
    productPrices: [
      {
        store: "bol.com",
        price: 13.55,
      },
      {
        store: "interoys.nl",
        price: 9.99,
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
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio dolor voluptates quas.",
    productImage: "product_booster-bundle",
    productImageAlt: "Pokémon Scarlet & Violet 151 - Booster bundle",
    productPrices: [
      {
        store: "bol.com",
        price: 13.55,
      },
      {
        store: "interoys.nl",
        price: 9.99,
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
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio dolor voluptates quas.",
    productImage: "product_elite-trainer-box",
    productImageAlt: "Pokémon Scarlet & Violet 151 - Elite trainer box",
    productPrices: [
      {
        store: "bol.com",
        price: 13.55,
      },
      {
        store: "interoys.nl",
        price: 9.99,
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
  title: "Pokémon Scarlet & Violet 151",
  ogTitle: "Pokémon Scarlet & Violet 151",
  description:
    "Verlies jezelf opnieuw in de wereld van Kanto met Pokémon Scarlet & Violet 151.",
  ogDescription:
    "Verlies jezelf opnieuw in de wereld van Kanto met Pokémon Scarlet & Violet 151.",
  ogImage: "@/assets/images/og-image.png",
});

function trackClick() {
  va.track("bol");
}
</script>

<style scoped>
.intro {
  color: white;
  padding-inline: var(--space-l-xl);
  margin-block-start: var(--space-xl-2xl);
  margin-block-end: 6rem;
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
  min-height: calc(90vh - env(safe-area-inset-bottom));
  min-height: 90dvh;
  padding-block: 2rem;
  padding-inline: var(--space-l-xl);
}

@media only screen and (max-width: 768px) {
  section.la {
    min-height: auto;
  }
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

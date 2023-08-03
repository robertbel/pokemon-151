<template>
  <div class="intro">
    <h1>Prijzen</h1>
    <p>
      Hier vindt je all producten beschikbaar van de nostalgische Pokémon
      Scarlet & Violet 151 set, vergeleken in prijs en beschikbaarheid.
    </p>
  </div>
  <div class="table">
    <div class="row header">
      <div class="column">Product</div>
      <div class="column">Shop</div>
      <div class="column">Prijs</div>
    </div>
    <a :href="item.url" target="_blank" class="row" v-for="item in data">
      <div class="column">{{ item.product }}</div>
      <div class="column">{{ item.website }}</div>
      <div class="column">&euro; {{ item.price }}</div>
    </a>
  </div>
</template>

<script setup>
let data = ref();

const fetchPrices = async () => {
  try {
    const response = await fetch("/data/data.json");
    data.value = await response.json();
  } catch (error) {
    console.error("Error fetching prices: ", error);
  }
};

onMounted(fetchPrices);
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
.table {
  background-color: #e0e1e2;
  border-radius: 1rem;
  padding: 2rem;
  margin-block-start: 2rem;
}
.table .row {
  display: flex;
  padding-block: 1rem;
  border-bottom: 1px solid #c4c5c6;
  text-decoration: none;
}

.table .row:hover {
  background-color: #fff;
}

.table .row.header {
  font-weight: 800;
}

.table .row:last-child {
  border-bottom: none;
}

.column {
  flex: 1;
  padding-inline: 1rem;
}
</style>

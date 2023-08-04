<template>
  <div class="intro">
    <h1>Prijzen</h1>
    <p>
      Hier vindt je all producten beschikbaar van de nostalgische Pokémon
      Scarlet & Violet 151 set, vergeleken in prijs en beschikbaarheid.
    </p>
    <p v-if="lastUpdated">
      Laatst bijgewerkt:
      {{
        new Date(lastUpdated).toLocaleString("en-US", {
          timeZone: "Europe/Brussels",
        })
      }}
    </p>
  </div>
  <div class="table">
    <div class="row header">
      <div class="column">Product</div>
      <div class="column">Prijs</div>
      <div class="column">Prijs per pack</div>
      <div class="column">Shop</div>
      <div class="column">Link</div>
    </div>
    <div v-if="loading">Loading...</div>
    <div v-else>
      <a
        :href="item.url"
        target="_blank"
        class="row"
        v-for="item in products"
        :key="item.id"
      >
        <div class="column">{{ item.product_categories.product_name }}</div>
        <div class="column">&euro; {{ item.current_price }}</div>
        <div class="column">
          &euro;
          {{
            (
              item.current_price / item.product_categories.number_of_packs
            ).toFixed(2)
          }}
        </div>
        <div class="column">{{ item.webshops.webshop_name }}</div>
        <div class="column">
          <div class="button-link primary">Pre-Order</div>
        </div>
      </a>
    </div>
  </div>
</template>

<script setup>
const state = useStore();
await fetchProducts();

const products = computed(() => {
  const rawProducts = Object.values(state.value.products) || [];
  return rawProducts.sort((a, b) => {
    const pricePerPackA =
      a.current_price / a.product_categories.number_of_packs;
    const pricePerPackB =
      b.current_price / b.product_categories.number_of_packs;
    return pricePerPackA - pricePerPackB;
  });
});

const loading = computed(() => products.value.length === 0);
const lastUpdated = computed(() =>
  products.value.length > 0 ? products.value[0].pulled_date : null
);
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
  padding: var(--space-s-l);
  margin-block: 2rem;
}
.table .row {
  display: flex;
  align-items: center;
  padding-block: 0.5rem;
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

@media only screen and (max-width: 768px) {
  .column:nth-last-child(-n + 2) {
    display: none;
  }
}
</style>

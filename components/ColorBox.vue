<template>
  <section class="color-box">
    <div class="product">
      <div class="product-summary">
        <h2>{{ data.productTitle }}</h2>
        <p>
          {{ data.productIntro }}
        </p>
        <div class="product-image">
          <img
            :src="`/images/${data.productImage}.webp`"
            :alt="data.productImageAlt"
          />
        </div>
      </div>
      <div class="product-info">
        <div class="product-block">
          <img
            src="@/assets/images/product_booster-pack.webp"
            alt="Pokémon Scarlet & Violet 151 - Booster Pack"
          />
        </div>
        <div class="product-block">
          <div class="product-price" v-for="price in data.productPrices">
            <div class="store">{{ price.store }}</div>
            <div class="price">{{ price.price }}</div>
          </div>
        </div>
      </div>
    </div>
    <div class="color-box-ref" ref="colorBoxRef"></div>
  </section>
</template>

<script setup>
const props = defineProps({
  color: {
    type: String,
    required: true,
  },
  data: {
    type: Object,
    required: true,
  },
});

const colorBoxRef = ref(null);

const isVisible = useElementVisibility(colorBoxRef);

const currentColor = useCurrentColor();

watch(isVisible, (newVal) => {
  if (newVal) {
    currentColor.value = props.color;
  }
});
</script>

<style scoped>
.color-box {
  position: relative;
  border-radius: 2rem;
  display: grid;
  place-items: center;
}

.color-box-ref {
  position: absolute;
  left: 0;
  top: 30%;
  width: 100%;
  height: 1px;
}

.product {
  display: flex;
  gap: 1rem;
}

@media only screen and (max-width: 768px) {
  .product {
    flex-direction: column;
  }
}

.product-summary {
  flex: 1;
}

.product-info {
  flex-grow: 0;
  flex-shrink: 1;
  flex-basis: 26.5rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.product-block {
  background-color: #824e8f;
  border-radius: 1.5rem;
  padding: 1rem;
}

.product-image {
  margin-block-start: var(--space-m-l);
}

.product-price {
  display: flex;
  justify-content: space-between;
}
</style>

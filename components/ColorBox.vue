<template>
  <section class="color-box" :class="{ inverted: data.textColorInverted }">
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
        <div
          class="product-block packs"
          :style="[
            isVisible
              ? { backgroundColor: data.backgroundColorBlock }
              : { backgroundColor: none },
          ]"
        >
          <div class="statistic">16x</div>
          <div class="statistic-image">
            <img
              src="@/assets/images/product_booster-pack.webp"
              alt="Pokémon Scarlet & Violet 151 - Booster Pack"
            />
          </div>
        </div>
        <div
          class="product-block"
          :style="[
            isVisible
              ? { backgroundColor: data.backgroundColorBlock }
              : { backgroundColor: none },
          ]"
        >
          <div class="product-price" v-for="price in data.productPrices">
            <div class="store">{{ price.store }}</div>
            <div class="price">&euro; {{ price.price }}</div>
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
  align-items: center;
  color: var(--color-alpha);
}

.color-box.inverted {
  color: #fff;
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
  gap: 2rem;
}

@media only screen and (max-width: 768px) {
  .product {
    flex-direction: column;
  }
}

.product-summary {
  flex: 1;
}

.product-summary p {
  margin-top: var(--space-xs-s);
}

.product-info {
  flex-grow: 0;
  flex-shrink: 1;
  flex-basis: 26.5rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

@media only screen and (max-width: 768px) {
  .product-info {
    flex-basis: auto;
  }
}

.product-block {
  position: relative;
  border-radius: 1.5rem;
  padding: 1rem;
  transition: background-color 0.3s;
}

.product-block.packs {
  display: flex;
  min-height: 10rem;
}

.product-block.packs .statistic {
  flex: 1;
}

.product-block.packs .statistic-image {
  width: 5rem;
  position: relative;
}

.product-block.packs .statistic-image img {
  position: absolute;
  right: 1rem;
  top: -1.5rem;
  transform: rotate(10deg);
}

.product-image {
  margin-block-start: var(--space-m-l);
}

.product-price {
  display: flex;
  justify-content: space-between;
  padding: 1rem 0.5rem;
  border-block-end: 1px dashed;
}

.product-price:last-child {
  border-block-end: none;
}

.price {
  font-weight: 800;
}
</style>

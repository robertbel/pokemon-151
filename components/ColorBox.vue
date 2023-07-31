<template>
  <section class="color-box" :class="{ inverted: data.textColorInverted }">
    <div class="product">
      <div class="product-summary">
        <div class="product-text">
          <h2>{{ data.productTitle }}</h2>
          <p>
            {{ data.productIntro }}
          </p>
          <div class="product-actions">
            <a
              href="https://www.bol.com/nl/nl/s/?searchtext=pokemon+151"
              target="_blank"
              class="button-link primary"
              >Pre-order bij Bol.com!</a
            >
          </div>
        </div>
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
          <div class="statistic">
            <div class="statistic-number">{{ data.numberOfPacks }}x</div>
            <div class="statistic-label">Booster pack</div>
          </div>
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
          <h3>Meer betrouwbare aanbieders</h3>
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
  top: 20%;
  width: 100%;
  height: 1px;
  /* border: 1px solid red; */
}

@media only screen and (max-width: 768px) {
  .color-box-ref {
    top: 50%;
  }
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
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding-block: 2rem;
  padding-inline-end: 4rem;
}

@media only screen and (max-width: 768px) {
  .product-summary {
    flex-direction: column-reverse;
    padding: 0;
  }
}

.product-text p {
  margin-block: var(--space-xs-s);
}

.product-image img {
  max-width: 60%;
}

.product-info {
  flex-grow: 0;
  flex-shrink: 1;
  flex-basis: 22.5rem;
  display: flex;
  flex-direction: column;
  gap: var(--space-m-l);
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

.product-block h3 {
  padding: 0.5rem;
}

.product-block.packs {
  display: flex;
  min-height: 10rem;
}

.product-block.packs .statistic {
  flex: 1;
  padding-inline: 1rem;
  font-weight: 800;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.product-block.packs .statistic-image {
  width: 6rem;
  position: relative;
}

.product-block.packs .statistic-image img {
  position: absolute;
  right: 2rem;
  top: -1.5rem;
  transform: rotate(10deg);
}

.product-block.packs .statistic-number {
  font-size: 4.25rem;
  line-height: 1;
}

.product-price {
  display: flex;
  justify-content: space-between;
  padding: 1rem 0.5rem;
  border-block-end: 1px dashed;
  transition: background-color 0.2s linear;
}

.product-price:last-child {
  border-block-end: none;
}

.product-price:hover {
  background-color: rgba(255, 255, 255, 0.16);
  cursor: pointer;
}

.price {
  font-weight: 800;
}
</style>

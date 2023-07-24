<template>
  <h1>Prices</h1>
  <div v-for="(price, url) in prices" :key="url">
    <p>{{ url }}: {{ price }}</p>
  </div>
</template>

<script setup>
import axios from "axios";

let prices = ref({});

const fetchPrices = async () => {
  try {
    const { data } = await axios.get("http://localhost:3000/api/scrape");
    prices.value = data;
  } catch (error) {
    console.error("Error fetching prices: ", error);
  }
};

fetchPrices();
</script>

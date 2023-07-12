export default defineNuxtConfig({
  css: ["@/assets/css/reset.css"],
  nitro: {
    preset: "vercel-edge",
  },
  modules: ["@vueuse/nuxt"],
});

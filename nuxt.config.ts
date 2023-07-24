export default defineNuxtConfig({
  css: [
    "@/assets/css/reset.css",
    "@/assets/css/typography.css",
    "@/assets/css/spacing.css",
    "@/assets/css/colors.css",
    "@/assets/css/base.css",
  ],
  nitro: {
    preset: "vercel-edge",
  },
  modules: ["@vueuse/nuxt"],
  plugins: [{ src: "~/plugins/vercel.js", mode: "client" }],
});

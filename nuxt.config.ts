// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  colorMode: {
    preference: "light",
  },
  modules: ["@nuxt/ui", "@vueuse/nuxt", "@nuxt/image-edge"],
  css: ["~/assets/css/main.scss"],
  image: {
    format: ["webp"],
    screens: { md: 768 },
    domains: ["i.ibb.co"]
  },
});

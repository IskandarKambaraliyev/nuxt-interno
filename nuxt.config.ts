// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  colorMode: {
    preference: "light",
  },
  modules: ["@nuxt/ui", "@vueuse/nuxt", "@nuxt/image"],
  css: ["~/assets/css/main.scss"]
})

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  colorMode: {
    preference: "light",
  },
  modules: ["@nuxt/ui", "@vueuse/nuxt", "@nuxt/image", "@nuxtjs/i18n"],
  css: ["~/assets/css/main.scss"],
  image: {
    format: ["webp"],
    screens: { xs: 320, sm: 640, md: 768, lg: 1232 },
    domains: ["i.ibb.co", "unsplash.com", "images.unsplash.com"],
    provider: "ipx",
    dir: "assets/images"
  },
  i18n: {
    vueI18n: "./i18n.config.ts",
    locales: ["en"],
    defaultLocale: "en",
    strategy: "prefix_and_default",
  },
  nitro: {
    experimental: {
      openAPI: true,
    },
  },
});

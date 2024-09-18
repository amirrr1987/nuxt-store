// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  modules: [
    "@nuxt/icon",
    "@nuxt/image",
    "@nuxt/ui",
    "@pinia/nuxt",
    "@vueuse/nuxt",
    "nuxt-typed-router",
    "nuxt-lodash",
    '@primevue/nuxt-module'
  ],
  primevue: {
    options: {
      unstyled: true
    }
  }
});
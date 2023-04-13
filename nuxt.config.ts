// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  srcDir: "src/",
  modules: [
    "@pinia/nuxt",
    "@vueuse/nuxt",
    "@element-plus/nuxt",
    "@nuxtjs/eslint-module",
    "nuxt-svgo",
  ],
  app: {
    pageTransition: {
      name: "page",
      mode: "out-in",
    },
  },
  css: ["@/assets/css/base.css"],
});

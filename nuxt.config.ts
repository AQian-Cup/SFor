// https://nuxt.com/docs/api/configuration/nuxt-config
import storage from "./src/utils/storage/config";

export default defineNuxtConfig({
  srcDir: "src/",
  modules: [
    "@pinia/nuxt",
    "@pinia-plugin-persistedstate/nuxt",
    "@vueuse/nuxt",
    "@element-plus/nuxt",
    "@nuxtjs/eslint-module",
    "nuxt-svgo",
    "@sidebase/nuxt-auth",
  ],
  app: {
    pageTransition: {
      name: "page",
      mode: "out-in",
    },
  },
  css: ["@/assets/css/base.css"],
  nitro: {
    storage,
  },
});

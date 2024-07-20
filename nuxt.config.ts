// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,
  devtools: { enabled: false },
  modules: ["@nuxt/ui", "@nuxt/content", "@nuxt/fonts", "@nuxthq/studio"],
  fonts: {
    defaults: {
      weights: [200, 400, 500, 600, 700, 800],
      styles: ["normal"],
    },
  },
  content: {
    experimental: {
      clientDB: true,
    },
  },
  routeRules: {
    "/": { prerender: true },
  },
  future: {
    compatibilityVersion: 4,
  },
});

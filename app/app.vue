<script setup lang="ts">
useHead({
  meta: [{ name: "viewport", content: "width=device-width, initial-scale=1" }],
  link: [{ rel: "icon", href: "/favicon.ico" }],
  htmlAttrs: {
    lang: "en",
  },
});

// useSeoMeta({
//   ogImage: "https://landing-template.nuxt.dev/social-card.png",
//   twitterImage: "https://landing-template.nuxt.dev/social-card.png",
//   twitterCard: "summary_large_image",
// });
</script>

<template>
  <AppHeader />

  <div>
    <NuxtPage />
  </div>

  <AppFooter />

  <UNotifications />
</template>

<style>
:root {
  font-family: "Space Grotesk", "Helvetica Neue", sans-serif;
}

html {
  @apply h-full;
  color: #f8fafc;
  background-color: #020617;
}
</style>

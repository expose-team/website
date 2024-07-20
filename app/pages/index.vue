<script setup lang="ts">
const { data } = await useAsyncData("index", () => queryContent("/").findOne());

useSeoMeta({
  title: data?.value?.title,
  ogTitle: data?.value?.title,
  description: data?.value?.description,
  ogDescription: data?.value?.description,
});
</script>

<template>
  <div id="home" class="flex flex-col-reverse sm:flex-row">
    <div
      class="-my-40 sm:-my-20 lg:my-0 scale-50 md:scale-75 lg:scale-100 sm:w-1/2"
    >
      <AppMacbook />
    </div>
    <div class="flex flex-col justify-center items-center px-4">
      <h2 class="text-xl md:text-2xl xl:text-3xl text-center">
        {{ data?.hero.title }}
      </h2>
      <h3 class="text-3xl md:text-5xl xl:text-7xl tracking-widest text-center">
        {{ data?.hero.subtitle }}
      </h3>
    </div>
  </div>
  <!-- <div class="space-y-28">
    <AppFeatures :data="data?.features" />

    <AppPricing :data="data?.pricing" />

    <AppTestimonials :data="data?.testimonials" />

    <AppFaq :data="data?.faq" />
  </div> -->
</template>

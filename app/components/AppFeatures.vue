<script setup lang="ts">
defineProps({
  data: {
    type: Object,
    required: true,
  },
});
</script>

<template>
  <div id="features" class="mx-auto max-w-7xl px-6 lg:px-8 my-8">
    <div class="mx-auto max-w-3xl text-center">
      <h2 class="text-lg font-semibold leading-8 tracking-tight text-slate-200">
        {{ data.title }}
      </h2>
      <p
        class="mt-2 text-3xl font-bold tracking-tight text-slate-500 sm:text-4xl"
      >
        {{ data.description }}
      </p>
    </div>

    <div class="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8 mt-10">
      <div
        v-for="(item, index) of data.items"
        :key="index"
        class="gap-x-8 rounded-lg flex-1 flex flex-col px-4 py-5 sm:p-6 ring-1 ring-slate-800"
      >
        <UIcon :name="item.icon" class="h-8 w-8" />
        <h3 class="text-slate-200 font-bold truncate mt-2">{{ item.title }}</h3>
        <p class="text-slate-500 mt-1 text-sm">{{ item.description }}</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps({
  data: {
    type: Object,
    required: true,
  },
});
</script>

<template>
  <div id="testimonials" class="mx-auto max-w-7xl px-6 lg:px-8 my-8">
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

    <div
      class="column-1 md:columns-2 lg:columns-3 gap-8 space-y-8 xl:columns-4 mt-10"
    >
      <div
        class="break-inside-avoid"
        v-for="(item, index) of data.items"
        :key="index"
      >
        <div
          class="rounded-lg divide-y divide-slate-00 ring-1 ring-slate-900 bg-slate-800 relative"
        >
          <div class="flex flex-col px-3 py-4 sm:p-5">
            <q class="text-slate-300">{{ item.quote }}</q>
            <div class="flex items-center gap-3 mt-6 relative">
              <img
                class="rounded-full h-10 w-10 text-base"
                :alt="item.author.name"
                :src="item.author.avatar.src"
                :loading="item.author.avatar.loadng"
              />

              <div>
                <p class="font-semibold text-slate-300 text-sm">
                  {{ item.author.name }}
                </p>
                <p class="text-slate-500 text-sm">
                  {{ item.author.description }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

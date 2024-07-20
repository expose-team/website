<script setup lang="ts">
const { data } = await useAsyncData("changelog", () =>
  queryContent("/changelog").findOne()
);
</script>

<template>
  <h2 class="text-center text-3xl text-slate-200">Changelog</h2>
  <section class="flex flex-col justify-center max-w-5xl mx-auto px-4 md:px-6">
    <div
      class="flex flex-col justify-center divide-y divide-slate-200 [&>*]:py-16"
    >
      <div
        class="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:ml-[8.75rem] md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-300 before:to-transparent"
      >
        <div
          class="relative"
          v-for="(item, index) of data?.items.reverse()"
          :key="index"
        >
          <div v-if="item.published">
            <div class="flex items-center">
              <div class="flex items-center md:space-x-reverse">
                <div
                  class="flex items-center justify-center w-3 h-3 md:order-1 ml-[14px] md:ml-[23px]"
                >
                  <svg
                    class="fill-slate-500"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                  >
                    <path
                      d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512z"
                    />
                  </svg>
                </div>

                <time
                  class="text-sm font-medium text-indigo-500 ml-[22px] md:ml-0 md:w-28"
                  >{{ item.date }}</time
                >
              </div>
              <UBadge :label="item.version" variant="soft" class="ml-7" />
            </div>
            <div class="py-2 px-4 ml-8 md:ml-40">
              <h3 class="text-xl pb-1">{{ item.title }}</h3>
              <img
                v-if="item.picture"
                :src="item.picture"
                class="w-full h-64 object-cover rounded-lg"
              />
              <p class="text-slate-500">{{ item.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

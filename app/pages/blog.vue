<script setup lang="ts">
const router = useRouter();
const { data } = await useAsyncData("blog", () =>
  queryContent("/blog").findOne()
);

const itemsPerPage = 10;
const page = ref(1);
const posts = await queryContent("/posts")
  .where({ published: true })
  .sort({ pubDate: -1 })
  .skip((page.value - 1) * itemsPerPage)
  .limit(itemsPerPage)
  .find();
</script>

<template>
  <div class="max-w-5xl mx-auto px-4 md:px-6 space-y-5">
    <div>
      <h2 class="text-slate-200 text-3xl">{{ data?.title }}</h2>
      <p class="text-slate-500">{{ data?.subtitle }}</p>
    </div>

    <UDivider :ui="{ border: { base: 'border-slate-600' } }" />

    <div class="grid grid-cols-3 gap-4">
      <article
        v-for="(item, index) of posts"
        :key="index"
        class="text-slate-500 border border-slate-700 rounded-lg space-y-4 hover:border-green-500 cursor-pointer"
        @click="router.push(String(item._path))"
      >
        <img :src="item.featuredImage" class="rounded-t-lg" />
        <div class="px-2">
          <div class="mb-2"><UBadge :label="item.category" /></div>
          <h3 class="text-slate-300 text-lg capitalize">{{ item.title }}</h3>
          <p class="line-clamp-2">{{ item.description }}</p>
        </div>

        <div class="px-2 pb-2">
          <time :datetime="item.pubDate" class="text-sm font-medium">{{
            new Date(item.pubDate).toDateString()
          }}</time>
        </div>
      </article>
    </div>
  </div>
</template>

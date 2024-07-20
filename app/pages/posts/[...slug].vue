<script setup lang="ts">
const route = useRoute();
const currentPost = await queryContent({
  where: { _path: { $contains: route.path } },
}).findOne();

useSeoMeta({
  title: currentPost.title,
  ogTitle: currentPost.title,
  description: currentPost.description,
  ogDescription: currentPost.description,
  ogImage: `https://expose.team${currentPost.featuredImage}`,
  ogImageAlt: "Expose Team blog post hero image",
  ogImageType: "image/png",
  ogUrl: `https://expose.team${currentPost._path}`,

  twitterCard: "summary_large_image",
  twitterImage: `https://expose.team${currentPost.featuredImage}`,

  ogType: "article",
  ogLocale: "en_US",
  articleAuthor: currentPost.author,
  articlePublishedTime: currentPost.pubDate,
});

onMounted(() => {
  const anchors: Array<any> = document.querySelectorAll(".blog-content h2, h3");
  const links = document.querySelectorAll("nav > ul > div > li > a");

  window.addEventListener("scroll", () => {
    if (
      typeof anchors != "undefined" &&
      anchors != null &&
      typeof links != "undefined" &&
      links != null
    ) {
      let scrollTop = window.scrollY;

      // highlight the last scrolled-to: set everything inactive first
      links.forEach((link) => {
        link.classList.remove("active");
      });

      // then iterate backwards, on the first match highlight it and break
      for (var i = anchors.length - 1; i >= 0; i--) {
        if (scrollTop > anchors[i].offsetTop + 180) {
          links[i].classList.add("active");
          break;
        }
      }
    }
  });
});
</script>

<template>
  <div class="max-w-screen-xl mx-auto relative">
    <div class="md:absolute pt-8 md:pt-14">
      <UButton
        icon="i-heroicons-arrow-long-left"
        label="Blog"
        variant="link"
        size="lg"
        to="/blog"
      />
    </div>
  </div>

  <main class="max-w-screen-xl mx-auto px-4 3xl:px-0 md:py-14">
    <h3 class="text-3xl font-semibold text-center">{{ currentPost.title }}</h3>

    <div
      class="flex flex-col sm:flex-row justify-between items-center my-10 gap-4"
    >
      <div
        class="flex flex-col sm:flex-row gap-2 items-center text-sm text-slate-500"
      >
        <span class="flex gap-1 items-center">
          <UIcon name="i-heroicons-calendar-days" />
          <time :datetime="currentPost.pubDate">{{
            new Date(currentPost.pubDate).toDateString()
          }}</time>
        </span>
      </div>
    </div>

    <div
      class="relative flex flex-col-reverse lg:grid lg:grid-cols-10 lg:gap-6 px-4 sm:px-8 md:px-14"
    >
      <div class="blog-content lg:col-span-8">
        <ContentDoc>
          <template #not-found>
            <h1>Article not found, return to blog page</h1>
          </template>
        </ContentDoc>
      </div>

      <div
        class="lg:px-0 lg:col-span-2 text-slate-500 text-sm h-fit lg:sticky lg:top-28 flex flex-col-reverse lg:flex-col"
      >
        <nav>
          <p class="font-semibold">ON THIS PAGE</p>
          <ul>
            <div v-for="link of currentPost.body?.toc?.links" :key="link.id">
              <li class="py-1">
                <a :href="`#${link.id}`" class="hover:text-slate-400">{{
                  link.text
                }}</a>
              </li>
              <li
                v-for="sublink of link.children || []"
                :key="sublink.id"
                class="ml-2 pl-2 border-l border-slate-500 py-1"
              >
                <a :href="`#${sublink.id}`" class="hover:text-slate-400">{{
                  sublink.text
                }}</a>
              </li>
            </div>
          </ul>
        </nav>
      </div>
    </div>
  </main>
</template>

<style scoped>
nav .active {
  @apply text-slate-300;
}

.blog-content :deep(h1) {
  @apply text-2xl mt-6 -mb-2 font-semibold;
}

.blog-content :deep(h2) {
  @apply text-2xl mt-8 -mb-2;
}
.blog-content :deep(h3) {
  @apply text-xl mt-6;
}

.blog-content :deep(p) {
  @apply my-2 leading-loose text-lg;
}

.blog-content :deep(img) {
  @apply rounded-md h-full md:w-3/4 object-cover my-4 mx-auto;
}

.blog-content :deep(ol) {
  @apply list-decimal ml-6;
}

.blog-content :deep(ul) {
  @apply list-disc ml-6;
}

.blog-content :deep(ol li),
.blog-content :deep(ul li) {
  @apply my-4 leading-loose;
}

.blog-content :deep(ol li br) {
  content: "";
  @apply block h-2;
}
</style>

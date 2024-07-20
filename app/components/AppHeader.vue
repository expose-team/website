<script setup lang="ts">
const links = [
  // { label: "Features", to: "/#features", includePaths: [] },
  // { label: "Pricing", to: "/#pricing", includePaths: [] },
  // { label: "Testimonials", to: "/#testimonials", includePaths: [] },
  // { label: "FAQ", to: "/#faq", includePaths: [] },
  { label: "Blog", to: "/blog", includePaths: ["blog", "posts"] },
  { label: "Changelog", to: "/changelog", includePaths: ["changelog"] },
];

const route = useRoute();
const mobile = ref(false);
let currentPath = ref(route.path.split("/")?.[1]);
watch(
  () => route.path,
  () => (currentPath.value = route.path.split("/")?.[1])
);

window.onscroll = function () {
  const sections = [
    document.getElementById("home"),
    document.getElementById("features"),
    document.getElementById("pricing"),
    document.getElementById("testimonials"),
    document.getElementById("faq"),
  ];

  for (const section of sections) {
    if (!section) {
      continue;
    }

    const boundaries = section.getBoundingClientRect();
    if (section && boundaries.top < 85) {
      const allNavLinks = document.getElementsByClassName("nav-link");
      for (const navLink of allNavLinks) {
        navLink.classList.remove("text-slate-400");
      }

      const navElement = document.querySelectorAll(`a[href='/#${section.id}']`);
      if (navElement.length) {
        navElement[0]?.classList.add("text-slate-400");
        navElement[1]?.classList.add("text-slate-400");
      }
    }
  }
};

const resetNav = () => {
  const allNavLinks = document.getElementsByClassName("nav-link");
  for (const navLink of allNavLinks) {
    navLink.classList.remove("text-slate-400");
  }
};
</script>

<template>
  <header class="sticky top-0 w-full bg-background/75 backdrop-blur z-10">
    <nav
      class="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
    >
      <div class="flex lg:flex-1">
        <a href="/">
          <h1 class="text-4xl">Expose Team</h1>
        </a>
      </div>
      <div class="flex lg:hidden">
        <UButton
          icon="i-heroicons-bars-3"
          size="sm"
          color="gray"
          square
          variant="ghost"
          @click="mobile = !mobile"
        />
      </div>
      <div
        class="hidden lg:flex lg:gap-x-10 gap-4 bg-slate-950 text-slate-600 border border-slate-800 rounded-full py-2 px-4"
      >
        <ULink
          v-for="(link, index) of links"
          :key="index"
          :to="link.to"
          :class="[
            link.includePaths.includes(String(currentPath))
              ? 'text-slate-400'
              : '',
            'nav-link',
          ]"
          @click="resetNav"
        >
          {{ link.label }}
        </ULink>
      </div>
      <div class="hidden lg:flex lg:flex-1 lg:justify-end">
        <UButton label="Download" :disabled="true" />
      </div>
    </nav>
  </header>

  <!-- Mobile menu, show/hide based on menu open state. -->
  <div :class="[mobile ? 'lg:hidden' : 'hidden']">
    <div
      class="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-slate-900 px-6 py-6 sm:max-w-60"
    >
      <div class="flex items-center justify-between">
        <UButton
          icon="i-heroicons-x-mark"
          size="sm"
          color="gray"
          square
          variant="ghost"
          @click="mobile = !mobile"
        />
      </div>
      <div>
        <div class="divide-y divide-slate-300">
          <div class="space-y-2 py-6 text-slate-600">
            <ULink
              v-for="(link, index) of links"
              :key="index"
              :to="link.to"
              :class="[
                link.includePaths.includes(String(currentPath))
                  ? 'text-slate-400'
                  : '',
                'block px-3 py-2 nav-link',
              ]"
              @click="resetNav"
            >
              {{ link.label }}
            </ULink>
          </div>
          <div class="py-6">
            <UButton label="Download" :disabled="true" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  data: {
    type: Object,
    required: true,
  },
});

const items = ref(props.data.items);
</script>

<template>
  <div id="faq" class="mx-auto max-w-7xl px-6 lg:px-8 my-8">
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

    <dl class="mt-10 space-y-6 divide-y divide-slate-700">
      <div class="pt-6" v-for="(item, index) of items" :key="index">
        <dt>
          <UButton
            variant="link"
            size="xl"
            class="w-full flex justify-between"
            @click="item.opened = !item.opened"
          >
            <template #leading>
              <span>{{ item.label }}</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                class="size-5"
                v-if="!item.opened"
              >
                <path
                  fill-rule="evenodd"
                  d="M12 3.75a.75.75 0 0 1 .75.75v6.75h6.75a.75.75 0 0 1 0 1.5h-6.75v6.75a.75.75 0 0 1-1.5 0v-6.75H4.5a.75.75 0 0 1 0-1.5h6.75V4.5a.75.75 0 0 1 .75-.75Z"
                  clip-rule="evenodd"
                />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                class="size-5"
                v-else
              >
                <path
                  fill-rule="evenodd"
                  d="M4.25 12a.75.75 0 0 1 .75-.75h14a.75.75 0 0 1 0 1.5H5a.75.75 0 0 1-.75-.75Z"
                  clip-rule="evenodd"
                />
              </svg>
            </template>
          </UButton>
        </dt>
        <dd class="mt-2 px-2">
          <p class="leading-7 text-slate-500" v-if="item.opened">
            {{ item.content }}
          </p>
        </dd>
      </div>
    </dl>
  </div>
</template>

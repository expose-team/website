<script setup lang="ts">
defineProps({
  data: {
    type: Object,
    required: true,
  },
});
</script>

<template>
  <div id="pricing" class="mx-auto max-w-7xl px-6 lg:px-8 my-8">
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
      class="mx-auto mt-10 grid max-w-lg grid-cols-1 items-center gap-y-6 sm:gap-y-0 lg:max-w-4xl lg:grid-cols-2"
    >
      <div
        class="rounded-xl bg-slate-800 p-8 sm:mx-8 sm:p-10 lg:mx-0 md:rounded-b-none lg:rounded-r-none"
      >
        <h3 class="font-semibold leading-7 text-green-600">
          {{ data.hobby.title }}
        </h3>
        <p class="mt-4 flex items-baseline gap-x-2">
          <span class="text-5xl font-bold tracking-tight text-slate-200"
            >${{ data.hobby.price }}</span
          >
          <span class="text-slate-500">/month</span>
        </p>
        <p class="mt-6 leading-7 text-slate-500">
          {{ data.hobby.description }}
        </p>
        <ul role="list" class="mt-8 space-y-3 text-sm text-slate-600 sm:mt-10">
          <li
            class="flex gap-x-3"
            v-for="(feature, index) of data.hobby.features"
            :key="index"
          >
            <svg
              class="h-6 w-5 flex-none text-green-600"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fill-rule="evenodd"
                d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                clip-rule="evenodd"
              />
            </svg>
            {{ feature }}
          </li>
        </ul>
        <UButton
          label="Get started today"
          variant="outline"
          block
          size="md"
          class="mt-8"
        />
      </div>
      <div
        class="relative rounded-3xl bg-gray-900 p-8 shadow-2xl ring-1 ring-gray-900/10 sm:p-10"
      >
        <h3
          id="tier-enterprise"
          class="text-base font-semibold leading-7 text-green-600"
        >
          {{ data.professional.title }}
        </h3>
        <p class="mt-4 flex items-baseline gap-x-2">
          <span class="text-5xl font-bold tracking-tight text-slate-200"
            >${{ data.professional.price }}</span
          >
          <span class="text-base text-slate-500">/month</span>
        </p>
        <p class="mt-6 leading-7 text-slate-500">
          {{ data.professional.description }}
        </p>
        <ul role="list" class="mt-8 space-y-3 text-sm text-slate-600 sm:mt-10">
          <li
            class="flex gap-x-3"
            v-for="(feature, index) of data.professional.features"
            :key="index"
          >
            <svg
              class="h-6 w-5 flex-none text-green-600"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fill-rule="evenodd"
                d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                clip-rule="evenodd"
              />
            </svg>
            {{ feature }}
          </li>
        </ul>
        <UButton label="Get started today" block size="md" class="mt-8" />
      </div>
    </div>
  </div>
</template>

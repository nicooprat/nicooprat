<template>
  <div class="mx-auto max-w-5xl pt-[1px] px-8 space-y-16">
    <div class="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      <div
        v-for="(item, i) in items"
        :key="i"
        class="relative rounded-lg border-2 border-slate-200 p-4 space-y-2"
      >
        <p
          v-if="item.lang"
          class="bg-slate-200 text-xs font-bold text-slate-600 rounded px-2 py-1 inline-block absolute top-0 right-0 -m-2"
        >
          {{ item.lang }}
        </p>
        <h4 class="font-semibold">
          <a :href="item.link">
            <svg
              aria-hidden="true"
              height="16"
              viewBox="0 0 16 16"
              width="16"
              class="inline-block mr-1"
            >
              <path
                fill-rule="evenodd"
                d="M2 2.5A2.5 2.5 0 014.5 0h8.75a.75.75 0 01.75.75v12.5a.75.75 0 01-.75.75h-2.5a.75.75 0 110-1.5h1.75v-2h-8a1 1 0 00-.714 1.7.75.75 0 01-1.072 1.05A2.495 2.495 0 012 11.5v-9zm10.5-1V9h-8c-.356 0-.694.074-1 .208V2.5a1 1 0 011-1h8zM5 12.25v3.25a.25.25 0 00.4.2l1.45-1.087a.25.25 0 01.3 0L8.6 15.7a.25.25 0 00.4-.2v-3.25a.25.25 0 00-.25-.25h-3.5a.25.25 0 00-.25.25z"
              ></path>
            </svg>
            <span class="absolute inset-0"></span>
            <span class="underline underline-offset-1">
              {{ item.title }}
            </span>
          </a>
        </h4>

        <p class="text-sm text-slate-600">
          {{ item.description }}
        </p>
        <time class="text-slate-400 text-sm" :datetime="item.updated">
          {{ formatDate(item.updated) }}
          <svg
            class="w-3 inline-block"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path fill="currentColor" d="M8 24l3-9h-9l14-15-3 9h9l-14 15z" />
          </svg>
        </time>
      </div>
    </div>

    <img
      src="https://ghchart.rshah.org/2563eb/nicooprat"
      alt="Nico Prat activity chart on Github"
      class="block w-full"
    />
  </div>
</template>

<script setup lang="ts">
import { PropType } from 'vue'
import { GithubItem } from '../types'

defineProps({
  items: {
    type: Array as PropType<GithubItem[]>,
    required: true,
  },
})

const formatDate = (date: string) =>
  new Intl.DateTimeFormat('fr', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(new Date(date))
</script>

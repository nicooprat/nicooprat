<template>
  <div class="mx-auto max-w-5xl px-8 space-y-16 safe-area">
    <Heading class="text-slate-700">
      <template #icon="{ classes }">
        <svg :class="classes" viewBox="0 0 24 24">
          <path
            fill="currentColor"
            d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
          />
        </svg>
      </template>

      <template #link="{ classes }">
        <a :class="classes" href="https://github.com/nicooprat">Github</a>
      </template>
    </Heading>

    <div class="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 snap">
      <div
        v-for="(item, i) in items"
        :key="i"
        class="flex flex-col relative rounded-lg border-2 border-slate-200 p-4 space-y-2"
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

        <time
          class="text-slate-400 text-sm pt-4 !mt-auto"
          :datetime="item.updated"
        >
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
      class="hidden md:block w-full max-w-5xl mx-auto filter brightness-110 mix-blend-multiply"
    />
  </div>
</template>

<script setup lang="ts">
import { PropType } from 'vue'
import { GithubItem } from '../types'
import { formatDate } from '~~/utils'

defineProps({
  items: {
    type: Array as PropType<GithubItem[]>,
    required: true,
  },
})
</script>

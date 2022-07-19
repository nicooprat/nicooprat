<template>
  <div class="mx-auto max-w-5xl pt-[1px] px-8">
    <div class="-mt-24 md:-mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-8 snap">
      <article
        v-for="(item, i) in items"
        :key="i"
        class="flex flex-col bg-white rounded-xl shadow-lg shadow-neutral-800/10 relative"
      >
        <img
          :src="item.thumb"
          :alt="item.title"
          class="rounded-t-lg aspect-video object-cover"
        />

        <div class="flex flex-col p-6 space-y-2 grow">
          <h3 class="font-semibold">
            <a :href="item.link" class="underline underline-offset-1">
              <span class="absolute inset-0"></span>
              {{ item.title }}
            </a>
          </h3>

          <p class="text-slate-600 text-sm">
            {{ item.excerpt }}
          </p>

          <time
            class="text-slate-400 text-sm pt-2 !mt-auto"
            :datetime="item.date"
          >
            {{ formatDate(item.date) }}
          </time>
        </div>
      </article>
    </div>
  </div>
</template>

<script setup lang="ts">
import { PropType } from 'vue'
import { MediumItem } from '../types'
import { formatDate } from '~~/utils'

defineProps({
  items: {
    type: Array as PropType<MediumItem[]>,
    required: true,
  },
})
</script>

<template>
  <div class="mx-auto max-w-5xl grid sm:grid-cols-2 lg:grid-cols-3 gap-8 px-8">
    <article v-for="(item, i) in items" :key="i" class="bg-white rounded-xl  shadow-lg shadow-slate-500/20 relative">
      <img :src="item.thumb" alt="item.title" class="rounded-t-lg aspect-video object-cover">
      <div class="p-6 space-y-2">
        <h3 class="font-semibold leading-5">
          <a :href="item.link">
            <span class="absolute inset-0"></span>
            {{ item.title }}
          </a>
        </h3>
        <p class="text-slate-600 text-sm">
          {{ item.excerpt }}
        </p>
        <time class="text-slate-400 text-sm">
          {{ formatDate(item.date) }}
        </time>
      </div>
    </article>
  </div>
</template>

<script setup lang="ts">
import { PropType } from 'vue'
import { MediumItem } from '../types'

defineProps({
  items: {
    type: Array as PropType<MediumItem[]>,
    required: true
  },
})

const formatDate = (date: string) => new Intl.DateTimeFormat('fr', {
  year: 'numeric',
  month: 'long',
  day: 'numeric',
}).format(new Date(date))
</script>

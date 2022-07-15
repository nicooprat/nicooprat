<template>
  <div class="pb-16">
    <Intro />
    <Medium :items="medium" class="-mt-16" />
  </div>
</template>

<script setup lang="ts">
import { MediumItem } from './types'

const config = useRuntimeConfig()

const { data: twitter } = useAsyncData('twitter', () =>
  $fetch(
    `https://api.apify.com/v2/acts/vdrmota~twitter-scraper/runs/last/dataset/items?token=${config.apifyToken}&status=SUCCEEDED`,
  ),
)

const { data: medium } = useAsyncData<MediumItem[]>('medium', () =>
  $fetch(
    `https://api.apify.com/v2/actor-tasks/Ko2MdgnAosj3Tduqp/runs/last/dataset/items?token=${config.apifyToken}&ui=1&clean=true`,
  ),
)

const { data: github } = useAsyncData('github', () =>
  $fetch(
    `https://api.apify.com/v2/actor-tasks/tyh6K9orWEgWGhgov/runs/last/dataset/items?token=${config.apifyToken}&ui=1&clean=true`,
  ),
)
</script>

<style lang="postcss">
body {
  @apply bg-slate-100 text-slate-800;
  font-family: Inter,system-ui,BlinkMacSystemFont,-apple-system,Segoe UI,sans-serif;
}
</style>

<template>
  <div>
    <Intro />
    <main class="bg-slate-100 pb-16 relative translate-y-full">
      <svg class="curve-top absolute bottom-full text-slate-100 origin-bottom" viewBox="0 0 500 105" PreserveAspectRatio="none">
        <path fill="currentColor" d="M250,104.6C152.1,104.6,63.7,64.6,0,0l0,105.1h500V0C436.3,64.6,347.9,104.6,250,104.6z" />
      </svg>
      <svg class="curve-bottom absolute top-0 text-blue-600 origin-top" viewBox="0 0 500 105" PreserveAspectRatio="none">
        <path fill="currentColor" d="M250,0.5c97.9,0,186.3,40,250,104.6V0H0v105.1C63.7,40.5,152.1,0.5,250,0.5z" />
      </svg>
      <div class="space-y-32">
        <Medium :items="medium.slice(0,6)" />
        <Github :items="github.slice(0,12)" />
        <Twitter :items="twitter.slice(0,6)" />
      </div>
    </main>
  </div>
</template>

<script setup lang="ts">
import anime from 'animejs'
import { MediumItem, GithubItem, TwitterItem } from './types'

const config = useRuntimeConfig()

const { data: twitter } = useAsyncData<TwitterItem[]>('twitter', () =>
  $fetch(
    `https://api.apify.com/v2/actor-tasks/YTsKf4NT2htwvumtX/runs/last/dataset/items?token=${config.apifyToken}&status=SUCCEEDED`,
  ),
)

const { data: medium } = useAsyncData<MediumItem[]>('medium', () =>
  $fetch(
    `https://api.apify.com/v2/actor-tasks/Ko2MdgnAosj3Tduqp/runs/last/dataset/items?token=${config.apifyToken}&ui=1&clean=true`,
  ),
)

const { data: github } = useAsyncData<GithubItem[]>('github', () =>
  $fetch(
    `https://api.apify.com/v2/actor-tasks/tyh6K9orWEgWGhgov/runs/last/dataset/items?token=${config.apifyToken}&ui=1&clean=true`,
  ),
)

const scaleY = ref(2)

const minmax = (val, min, max) => Math.max(min, Math.min(max, val))

const transformTop = computed(() => minmax(-scaleY.value, 0, 1).toFixed(4))
const transformBottom = computed(() => minmax(scaleY.value, 0, 1).toFixed(4))

if (process.client) {
  onMounted(() => {
    anime.timeline()
      .add({
        targets: scaleY,
        value: -0.1,
        duration: 1200,
        delay: 100
      })
      .add({
        targets: 'main',
        translateY: ['100vh', '0vh'],
        translateZ: 0,
      }, 0)
      .add({
        targets: 'header',
        translateY: ['50%', '0%'],
        translateZ: 0,
        opacity: [0, 1],
      }, 200)
      .add({
        targets: '[data-anime="medium-item"]',
        translateY: ['50%', '0%'],
        opacity: ['0%', '100%'],
        delay: anime.stagger(100),
      }, '-=1200')
  })
}
</script>

<style lang="postcss">
body {
  @apply text-slate-800 bg-blue-600;
  font-family: Inter,system-ui,BlinkMacSystemFont,-apple-system,Segoe UI,sans-serif;
}

.curve-top {
  transform: scaleY(v-bind(transformTop));
}

.curve-bottom {
  transform: scaleY(v-bind(transformBottom));
}
</style>

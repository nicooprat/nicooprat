<template>
  <div class="overflow-hidden">
    <Intro />
    <main class="bg-slate-100 relative translate-y-full pb-32">
      <svg
        class="curve-top absolute bottom-full text-slate-100 origin-bottom -mb-[1px]"
        viewBox="0 0 500 105"
        PreserveAspectRatio="none"
      >
        <path
          fill="currentColor"
          d="M250,104.6C152.1,104.6,63.7,64.6,0,0l0,105.1h500V0C436.3,64.6,347.9,104.6,250,104.6z"
        />
      </svg>
      <svg
        class="curve-bottom absolute top-0 text-blue-600 origin-top"
        viewBox="0 0 500 105"
        PreserveAspectRatio="none"
      >
        <path
          fill="currentColor"
          d="M250,0.5c97.9,0,186.3,40,250,104.6V0H0v105.1C63.7,40.5,152.1,0.5,250,0.5z"
        />
      </svg>

      <div class="space-y-16 md:space-y-32">
        <Medium
          v-if="!mediumError && medium.length"
          :items="medium.slice(0, 6)"
        />
        <Github
          v-if="!githubError && github.length"
          :items="github.slice(0, 12)"
        />
        <Twitter
          v-if="!twitterError && twitter.length"
          :items="twitter.slice(0, 6)"
        />
        <Meetup
          v-if="!meetupError && meetup.length"
          :items="meetup.slice(0, 6)"
        />
        <Globetrotter class="xl:-ml-32" />
        <Alterecolo class="xl:-mr-32" />
      </div>
    </main>
  </div>
</template>

<script setup lang="ts">
import anime from 'animejs'
import { MediumItem, GithubItem, TwitterItem, MeetupItem } from './types'

const config = useRuntimeConfig()

const { data: twitter, error: twitterError } = await useAsyncData<
  TwitterItem[]
>('twitter', () =>
  $fetch(
    `https://api.apify.com/v2/actor-tasks/YTsKf4NT2htwvumtX/runs/last/dataset/items?token=${config.apifyToken}&status=SUCCEEDED&clean=1`,
  ),
)

if (twitterError.value) {
  // eslint-disable-next-line no-console
  console.error('twitter\n', twitterError.value)
}

const { data: medium, error: mediumError } = await useAsyncData<MediumItem[]>(
  'medium',
  () =>
    $fetch(
      `https://api.apify.com/v2/actor-tasks/Ko2MdgnAosj3Tduqp/runs/last/dataset/items?token=${config.apifyToken}&status=SUCCEEDED&clean=1`,
    ),
)

if (mediumError.value) {
  // eslint-disable-next-line no-console
  console.error('medium\n', mediumError.value)
}

const { data: github, error: githubError } = await useAsyncData<GithubItem[]>(
  'github',
  () =>
    $fetch(
      `https://api.apify.com/v2/actor-tasks/tyh6K9orWEgWGhgov/runs/last/dataset/items?token=${config.apifyToken}&status=SUCCEEDED&clean=1`,
    ),
)

if (githubError.value) {
  // eslint-disable-next-line no-console
  console.error('github\n', githubError.value)
}

const { data: meetup, error: meetupError } = await useAsyncData<MeetupItem[]>(
  'meetup',
  () =>
    $fetch(
      `https://api.apify.com/v2/actor-tasks/E6lfAp6bDuymUC8ae/runs/last/dataset/items?token=${config.apifyToken}&status=SUCCEEDED&clean=1`,
    ),
)

if (meetupError.value) {
  // eslint-disable-next-line no-console
  console.error('meetup\n', meetupError.value)
}

const scaleY = ref(2)

const minmax = (val, min, max) => Math.max(min, Math.min(max, val))

const transformTop = computed(() => minmax(-scaleY.value, 0, 1).toFixed(4))
const transformBottom = computed(() => minmax(scaleY.value, 0, 1).toFixed(4))

if (process.client) {
  onMounted(() => {
    anime
      .timeline()
      .add({
        targets: scaleY,
        value: -0.1,
        duration: 1200,
        delay: 100,
      })
      .add(
        {
          targets: 'main',
          translateY: ['100vh', '0vh'],
          translateZ: 0,
        },
        0,
      )
      .add(
        {
          targets: 'header',
          translateY: ['50%', '0%'],
          translateZ: 0,
          opacity: [0, 1],
        },
        200,
      )
      .add(
        {
          targets: 'article',
          translateY: ['50%', '0%'],
          opacity: ['0%', '100%'],
          delay: anime.stagger(100),
        },
        '-=1200',
      )
  })
}
</script>

<style lang="postcss">
body {
  @apply text-slate-800 bg-blue-600;
  font-family: Inter, system-ui, BlinkMacSystemFont, -apple-system, Segoe UI,
    sans-serif;
}

.curve-top {
  transform: scaleY(v-bind(transformTop));
}

.curve-bottom {
  transform: scaleY(v-bind(transformBottom));
}

.safe-area {
  border-left: env(safe-area-inset-left) solid transparent;
  border-right: env(safe-area-inset-right) solid transparent;
}

@media (max-width: theme('screens.md')) {
  .snap {
    @apply -mx-8 py-8 gap-0 flex overflow-x-auto snap-x snap-mandatory;

    /* Fix Safari bug missing last margin */
    &:after {
      content: '';
      @apply w-8 shrink-0;
    }

    > * {
      @apply w-[75vw] shrink-0 ml-8 snap-center;
    }
  }
}
</style>

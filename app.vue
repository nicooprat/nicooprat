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
        <Medium />
        <Github />
        <Twitter />
        <Meetup />
        <Globetrotter class="xl:-ml-32" />
        <Alterecolo class="xl:-mr-32" />
      </div>
    </main>
  </div>
</template>

<script setup lang="ts">
import anime from 'animejs'

const scaleY = ref(2)

const minmax = (val, min, max) => Math.max(min, Math.min(max, val)).toFixed(4)

const transformTop = computed(() => minmax(-scaleY.value, 0, 1))
const transformBottom = computed(() => minmax(scaleY.value, 0, 1))

if (process.client) {
  useHead({
    title: 'Nico Prat',
    meta: [
      { name: 'description', content: 'Designer & développeur front-end' },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1, viewport-fit=cover',
      },
    ],
    link: [
      { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
      { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: true },
      {
        href: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;700;900&display=swap',
        rel: 'stylesheet',
      },
    ],
    bodyAttrs: {
      style: 'background-color: rgb(37 99 235)', // Prevent white background as soon as possible
    },
  })

  onMounted(() => {
    anime
      .timeline({
        easing: 'easeOutElastic(1, .75)',
        duration: 800
      })
      .add({
        targets: scaleY,
        value: -0.1,
        duration: 1000,
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
        '-=1000',
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

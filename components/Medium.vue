<template>
  <div class="mx-auto max-w-5xl pt-[1px] px-8" :tiltReady="tiltReady">
    <div class="-mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
      <article v-for="(item, i) in items" :key="i" ref="itemRefs" class="flex flex-col p-6 bg-white rounded-xl shadow shadow-neutral-800/20 relative preserve" data-anime="medium-item">
        <img :src="item.thumb" alt="item.title" class="rounded-lg aspect-video object-cover block mb-4">

        <h3 class="font-semibold leading-5">
          <a :href="item.link" class="underline underline-offset-1">
            <span class="absolute inset-0 z-10"></span>
            {{ item.title }}
          </a>
        </h3>

        <p class="text-slate-600 text-sm">
          {{ item.excerpt }}
        </p>

        <time class="text-slate-400 text-sm !mt-auto" :datetime="item.date">
          {{ formatDate(item.date) }}
        </time>
      </article>
    </div>
  </div>
</template>

<script setup lang="ts">
import { PropType } from 'vue'
import VanillaTilt from 'vanilla-tilt'
import { MediumItem } from '../types'

const props = defineProps({
  items: {
    type: Array as PropType<MediumItem[]>,
    required: true
  },
  tiltReady: {
    type: Boolean,
    default: false
  }
})

const formatDate = (date: string) => new Intl.DateTimeFormat('fr', {
  year: 'numeric',
  month: 'long',
  day: 'numeric',
}).format(new Date(date))

const itemRefs = ref<HTMLElement>()

watch(() => props.tiltReady, () => {
  [...itemRefs.value].forEach((child) => {
    VanillaTilt.init(child, {
      max: 5,
      speed: 400,
      scale: 1.1,
      glare: true
    })
  })
})
</script>

<style lang="postcss" scoped>

  article {
    transform-style: preserve-3d;
    perspective: 1000px;
    }

[tiltReady="true"] {
  article {
    transition: box-shadow 300ms;

    img {
      transition: box-shadow 300ms, transform 200ms;
    }

    a span {
      transform: translateZ(100px); /* Keep on top on whole element */
    }

    &:hover {
      @apply shadow-xl;

      img {
        transform: translateZ(50px);
      }
    }
  }
}

::v-deep .js-tilt-glare {
  @apply rounded-xl;
    overflow: hidden;

    .js-tilt-glare-inner {
      /* background-image: linear-gradient(0deg, rgba(0,0,0, .1) 0%, rgb(255, 255, 255) 100%) !important; */
    }
}

</style>

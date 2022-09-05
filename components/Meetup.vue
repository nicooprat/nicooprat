<template>
  <div
    v-if="data?.events?.length"
    class="mx-auto max-w-5xl px-8 space-y-8 safe-area"
  >
    <Heading class="text-rose-500">
      <template #icon="{ classes }">
        <svg :class="classes" viewBox="0 0 105.1 82.1">
          <path
            fill="currentColor"
            d="M100.1,67.8c-8,1-16.6,4.1-17.3-2.9C81.5,52.4,100.1,25.5,98.7,15C97.3,5.6,91,3.6,85.5,3.5 c-5.4-0.1-6.8,0.8-8.6,1.8c-1,0.6-2.5,1.8-4.6-0.2c-1.4-1.3-2.3-2.2-3.8-3.4c-0.7-0.6-1.9-1.3-3.9-1.6c-2-0.3-4.6,0-6.2,0.7 c-1.6,0.7-2.9,1.9-4.3,3.1c-1.3,1.2-4.8,5-8,3.6c-1.4-0.6-6.1-3-9.4-4.4c-6.5-2.8-15.9,1.8-19.3,7.8c-5,9-15,44.2-16.5,48.8 c-3.4,10.4,4.3,18.9,14.6,18.4c4.4-0.2,7.3-1.8,10-6.8c1.6-2.9,16.6-42.1,17.7-43.9c0.8-1.4,3.5-3.2,5.8-2c2.3,1.2,2.7,3.6,2.4,5.9 c-0.5,3.7-11.1,27.6-11.5,30.3c-0.7,4.6,1.5,7.2,6.3,7.4c3.3,0.2,6.5-1,9.1-5.9c1.4-2.7,18.1-36.1,19.6-38.4 c1.6-2.4,2.9-3.3,4.6-3.2c1.3,0.1,3.3,0.4,2.8,4.2c-0.5,3.8-13.9,28.3-15.3,34.3c-2.1,9.1,3.7,21.3,19.3,21.9c4,0.1,13-0.2,17.9-5.3 C106.1,74.8,105.2,67.2,100.1,67.8z"
          />
        </svg>
      </template>

      <template #link="{ classes }">
        <a
          :class="classes"
          href="https://www.meetup.com/fr-FR/members/144086432/"
          >Meetup</a
        >
      </template>
    </Heading>

    <div class="-mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-8 snap">
      <div
        v-for="(item, i) in data.events.slice(0, 6)"
        :key="i"
        class="flex flex-col bg-gradient-to-br from-rose-500 to-rose-600 rounded-xl shadow-xl shadow-red-800/20 p-6 relative text-white mt-8"
      >
        <img
          :src="item.thumb"
          :alt="item.title"
          class="rounded-lg -mt-12 shadow-lg shadow-red-900/50"
        />

        <h3 class="font-semibold leading-5 mt-4">
          <a :href="item.link">
            <span class="absolute inset-0"></span>
            {{ item.title }}
          </a>
        </h3>

        <p class="text-sm text-rose-300 pt-2 !mt-auto">
          <time class="text-sm !mt-auto" :datetime="item.time">
            {{ formatDate(item.time) }}
          </time>

          @

          <span>{{ item.group }}</span>
        </p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { formatDate } from '~~/utils'

const { data, error } = await useAsyncData(
  'meetup',
  () => import('../storage/meetup.json'),
)

if (error.value) {
  // eslint-disable-next-line no-console
  console.error('meetup\n', error.value)
}
</script>

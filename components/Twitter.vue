<template>
  <div class="mx-auto max-w-5xl px-8 space-y-8 safe-area">
    <Heading class="text-blue-400">
      <template #icon="{ classes }">
        <svg :class="classes" viewBox="0 0 24 24">
          <path
            fill="currentColor"
            d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"
          />
        </svg>
      </template>

      <template #link="{ classes }">
        <a :class="classes" href="https://twitter.com/nicooprat">Twitter</a>
      </template>
    </Heading>

    <component
      :is="columns === 1 ? 'div' : Columns"
      :columns="columns"
      class="-mx-4 -my-8 snap"
    >
      <div
        v-for="item in tweets.slice(0, 6)"
        :key="item.id"
        class="relative rounded-xl bg-gradient-to-b from-blue-300 to-blue-400 shadow-lg shadow-blue-600/25 p-6 space-y-3 bg-blue-500 text-blue-900 self-start mx-4 my-8"
      >
        <img
          loading="lazy"
          src="https://github.com/nicooprat.png"
          alt="Nico Prat Twitter"
          class="rounded-full w-12 -mt-8 -mr-8 mb-4 ml-4 float-right shadow-md"
        />

        <p class="text-blue-900 break-words !mt-0">
          <a :href="item.link">
            <span class="absolute inset-0"></span>
            {{ item.content }}
          </a>
        </p>

        <div v-if="item.thumbs" class="flex flex-col -mx-8">
          <img
            v-for="(thumb, i) in item.thumbs"
            :key="i"
            :src="thumb"
            loading="lazy"
            class="rounded-lg shadow-lg"
            :class="{
              'w-full': item.thumbs.length === 1,
              'w-3/5': item.thumbs.length > 1,
              'self-end': i % 2 === 1,
              '-mt-4': i > 0,
            }"
          />
        </div>

        <p class="flex items-end justify-between">
          <time class="text-sm" :datetime="item.date">
            {{ formatDate(item.date) }}
          </time>
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            class="w-8 opacity-50"
          >
            <path
              fill="currentColor"
              d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"
            />
          </svg>
        </p>
      </div>
    </component>
  </div>
</template>

<script setup lang="ts">
import { ref, watchEffect } from 'vue' // temp fix
import { breakpointsTailwind, useBreakpoints } from '@vueuse/core'
import { tweets } from "../storage/twitter.json";
import Columns from './Columns.vue'
import { formatDate } from '~~/utils'

const breakpoints = useBreakpoints(breakpointsTailwind)

// Can't use computed for some reason?
const columns = ref(1)
watchEffect(() => {
  if (breakpoints.greater('lg').value) {
    columns.value = 3
    return
  }
  if (breakpoints.greater('md').value) {
    columns.value = 2
    return
  }
  columns.value = 1
})
</script>

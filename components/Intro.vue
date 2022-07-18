<template>
  <div class="intro text-white">
    <header
      class="max-w-3xl mx-auto p-12 pb-24 flex justify-center items-center space-x-16 min-h-[50vh] opacity-0"
    >
      <img
        src="https://avatars.githubusercontent.com/u/645641?v=4"
        class="rounded-full w-32 drop-shadow-lg shadow-blue-600"
        alt="Nico Prat"
      />
      <div class="drop-shadow-lg shadow-blue-600 space-y-2">
        <h1 title="Nico Prat" class="relative text-5xl font-semibold">
          <span class="opacity-50">@</span>nico<span class="opacity-50">o</span
          >prat
        </h1>
        <h2 class="text-2xl">Designer & développeur front-end</h2>
      </div>
    </header>
  </div>
</template>

<script setup lang="ts">
useHead({
  title: 'Nico Prat',
  meta: [{ name: 'description', content: 'Designer & développeur front-end' }],
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
</script>

<style lang="postcss" scoped>
.intro {
  background: radial-gradient(
    closest-side,
    theme('colors.blue.500'),
    theme('colors.blue.600')
  );
}
</style>

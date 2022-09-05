<template>
  <div class="intro text-white">
    <header
      class="max-w-3xl mx-auto p-12 pb-24 flex flex-col opacity-0 md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-16 min-h-[50vh] text-center md:text-left"
    >
      <img
        src="https://github.com/nicooprat.png"
        class="rounded-full w-32 drop-shadow-lg shadow-blue-600"
        alt="Nico Prat"
      />

      <div class="drop-shadow-lg shadow-blue-600 space-y-2">
        <h1
          title="Nico Prat"
          class="relative text-4xl md:text-5xl font-semibold"
        >
          <span class="opacity-50">@</span>nico<span class="opacity-50">o</span
          >prat
        </h1>

        <h2 class="text-xl md:text-2xl">Designer & développeur front-end</h2>

        <nav class="inline-flex space-x-4">
          <a href="https://medium.com/@nicooprat" title="Nico Prat sur Medium">
            <svg class="w-6 h-6" viewBox="0 0 1043.63 592.71">
              <path
                fill="currentColor"
                d="M588.67 296.36c0 163.67-131.78 296.35-294.33 296.35S0 460 0 296.36 131.78 0 294.34 0s294.33 132.69 294.33 296.36"
              />
              <path
                fill="currentColor"
                d="M911.56 296.36c0 154.06-65.89 279-147.17 279s-147.17-124.94-147.17-279 65.88-279 147.16-279 147.17 124.9 147.17 279"
              />
              <path
                fill="currentColor"
                d="M1043.63 296.36c0 138-23.17 249.94-51.76 249.94s-51.75-111.91-51.75-249.94 23.17-249.94 51.75-249.94 51.76 111.9 51.76 249.94"
              />
              />
            </svg>
          </a>

          <a href="https://github.com/nicooprat" title="Nico Prat sur Github">
            <svg class="w-6 h-6" viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
              />
              />
            </svg>
          </a>

          <a href="https://twitter.com/nicooprat" title="Nico Prat sur Twitter">
            <svg class="w-6 h-6" viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"
              />
            </svg>
          </a>

          <a
            href="https://www.meetup.com/fr-FR/members/144086432/"
            title="Nico Prat sur Meetup"
          >
            <svg class="w-6 h-6" viewBox="0 0 105.1 82.1">
              <path
                fill="currentColor"
                d="M100.1,67.8c-8,1-16.6,4.1-17.3-2.9C81.5,52.4,100.1,25.5,98.7,15C97.3,5.6,91,3.6,85.5,3.5 c-5.4-0.1-6.8,0.8-8.6,1.8c-1,0.6-2.5,1.8-4.6-0.2c-1.4-1.3-2.3-2.2-3.8-3.4c-0.7-0.6-1.9-1.3-3.9-1.6c-2-0.3-4.6,0-6.2,0.7 c-1.6,0.7-2.9,1.9-4.3,3.1c-1.3,1.2-4.8,5-8,3.6c-1.4-0.6-6.1-3-9.4-4.4c-6.5-2.8-15.9,1.8-19.3,7.8c-5,9-15,44.2-16.5,48.8 c-3.4,10.4,4.3,18.9,14.6,18.4c4.4-0.2,7.3-1.8,10-6.8c1.6-2.9,16.6-42.1,17.7-43.9c0.8-1.4,3.5-3.2,5.8-2c2.3,1.2,2.7,3.6,2.4,5.9 c-0.5,3.7-11.1,27.6-11.5,30.3c-0.7,4.6,1.5,7.2,6.3,7.4c3.3,0.2,6.5-1,9.1-5.9c1.4-2.7,18.1-36.1,19.6-38.4 c1.6-2.4,2.9-3.3,4.6-3.2c1.3,0.1,3.3,0.4,2.8,4.2c-0.5,3.8-13.9,28.3-15.3,34.3c-2.1,9.1,3.7,21.3,19.3,21.9c4,0.1,13-0.2,17.9-5.3 C106.1,74.8,105.2,67.2,100.1,67.8z"
              />
            </svg>
          </a>

          <a
            href="https://www.linkedin.com/in/nicooprat/"
            title="Nico Prat sur LinkedIn"
          >
            <svg class="w-6 h-6" viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
              />
            </svg>
          </a>
        </nav>
      </div>
    </header>
  </div>
</template>

<script setup lang="ts">
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

<template>
  <h3 class="text-center relative text-4xl table mx-auto py-12">
    <slot
      name="icon"
      :classes="'w-32 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.15]'"
    />

    <slot
      name="link"
      :classes="'block font-extrabold uppercase tracking-wider -skew-y-2'"
    />
  </h3>
</template>

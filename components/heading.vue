<template>
  <h3>
    {{title}}
    <slot name="icon"></slot>
    <a :href="link" v-if="link">
      <svg viewBox="0 0 24 24"><path fill="currentColor" d="M21 13v10h-21v-19h12v2h-10v15h17v-8h2zm3-12h-10.988l4.035 4-6.977 7.07 2.828 2.828 6.977-7.07 4.125 4.172v-11z"/></svg>
    </a>
  </h3>
</template>

<script>
  export default {
    props: ['title', 'link', 'icon']
  }
</script>

<style lang="scss" scoped>
  @import "~/assets/common.scss";

  h3 {
    display: flex;
    align-items: center;
    font-size: 2.5em;
    font-weight: 900;
    margin-top: -5vh;
    margin-bottom: 0;
    padding: 1em spacer();
    margin-left: spacer(-1);
    margin-right: spacer(-1);
    position: relative;
    position: sticky;
    top: -1px;
    z-index: 2;
    background-color: var(--sectionColor);

    @include media('<=phone') {
      font-size: 1.8em;
    }

    & + * {
      margin-top: 1em;
    }

    > svg {
      width: 1em;
      height: 1em;
      transform: scale(1.5) translateX(-10%);
      opacity: .125;
    }

    > a {
      margin-left: auto;
      border-bottom: none;
      color: inherit;

      > svg {
        width: 24px;
        height: 24px;
      }

      &:focus {
        outline: none;
      }
    }
  }
</style>

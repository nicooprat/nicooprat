<template>
  <header class="container section">
    <img src="/avatar.jpg" alt="Nico Prat">
    <div>
      <h1 title="Nico Prat"><span>@</span>nico<span>o</span>prat</h1>
      <h2>designer & développeur front-end</h2>
    </div>
  </header>
</template>

<style lang="scss" scoped>
  @import "~/assets/common.scss";

  header {
    display: flex;
    align-items: center;
    background-color: var(--link);
    color: white;
    position: relative;

    @include media('<=phone') {
      flex-direction: column;
      text-align: center;
      font-size: .8em;
    }
  }

  div {

    @include media('>phone') {
      padding-right: 1em;
    }
  }

  img {
    width: 7em;
    border-radius: 999px;

    @include media('>phone') {
      margin-left: auto;
      order: 1;
    }
  }

  h1, h2 {
    margin: 0;
  }

  h1 {
    position: relative;
    font-size: 3em;
    font-weight: 900;
    font-family: 'Arvo';
    letter-spacing: -.075em;
    line-height: 1;

    @include media('<=phone') {
      margin: .25em 0;
    }

    span {
      opacity: .15;

      &:first-of-type {
        position: absolute;
        transform: scale(1.1) translate(-85%,-3%);
      }

      &:last-of-type {
        margin-left: -.03em;
        margin-right: -.06em;
      }
    }
  }

  h2 {
    font-size: 1.6em;
    font-weight: 300;
    opacity: .7;
  }
</style>

<template>
  <button>
    <slot></slot>
    <div class="button-mask"></div>
  </button>
</template>

<script lang="ts">
  import { Component, Vue } from 'nuxt-property-decorator';

  @Component
  export default class Button1 extends Vue {}
</script>

<style lang="scss" scoped>
  @import '~/assets/styles/color';

  button {
    cursor: pointer;
    border: 0.125rem solid $white;
    border-radius: 0;
    padding: 1rem 1.5rem;
    overflow: hidden;
    position: relative;
    transition: background 5s cubic-bezier(0.2, 1, 0.2, 1), border 1s cubic-bezier(0.2, 1, 0.2, 1), color 0.6s cubic-bezier(0.2, 1, 0.2, 1);

    .button-mask {
      background-color: $white-50;
      height: 100vh;
      position: absolute;
      transform: translate3d(-120%, -50px, 0) rotate3d(0, 0, 1, 25deg);
      transition: all 1.1s cubic-bezier(0.2, 1, 0.2, 1);
      width: 100vw;
    }

    &:focus {
      outline: none;
      box-shadow: none;
    }

    &:hover {
      background-color: $white-50;
      border-color: $white;
      box-shadow: 0 0 0.25rem $white-80;
      transition: background 0s;

      .button-mask {
        background-color: $white;
        transform: translate3d(120%, -100px, 0) rotate3d(0, 0, 1, 90deg);
      }
    }

    &:active {
      background-color: $white-80;
      color: $black;
      box-shadow: 0 0 0.5rem $white-80;
    }
  }
</style>

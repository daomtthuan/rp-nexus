<template>
  <div class="meteorite">
    <div class="wrapper">
      <div v-for="index in 5" :key="index" class="element-white"></div>
      <div v-for="index in 5" :key="index" class="element-yellow"></div>
    </div>
  </div>
</template>

<script lang="ts">
  import { Component, Vue } from 'nuxt-property-decorator';

  @Component
  export default class AppMeteorite extends Vue {}
</script>

<style lang="scss" scoped>
  .meteorite {
    @import '~/assets/styles/color';

    $time: 2.5s;
    $rotate: 55deg;

    @keyframes blurred {
      0% {
        width: 0;
      }

      30% {
        width: 100px;
      }

      100% {
        width: 0;
      }
    }

    @keyframes fall-down {
      0% {
        transform: translateX(0);
      }

      100% {
        transform: translateX(300px);
      }
    }

    height: 100%;
    width: 50vw;
    overflow: hidden;
    display: flex;
    position: absolute;
    right: 0;
    top: 0;

    .wrapper {
      position: relative;
      width: calc(100vw - 50%);
      height: 50%;
      transform: rotateZ($rotate);
      top: -10vh;
      right: -8vw;

      .element-white {
        position: absolute;
        height: 0.1rem;
        background: linear-gradient(-$rotate, $white-5, $transparent);
        filter: drop-shadow(0 0 5rem $white-5);
        animation: blurred $time ease-in-out infinite, fall-down $time ease-in-out infinite;

        &::after {
          @extend .element-white::before;
          transform: translateX(50%) rotateZ(-$rotate);
        }

        @for $i from 1 through 20 {
          &:nth-child(#{$i}) {
            $delay: random(9999) + 10ms;
            top: calc(50% - #{random(400) - 200px});
            left: calc(50% - #{random(300) + 0px});
            animation-delay: $delay;
            opacity: random(50) / 100 + 0.5;

            &::before,
            &::after {
              animation-delay: $delay;
            }
          }
        }
      }

      .element-yellow {
        position: absolute;
        height: 0.15rem;
        background: linear-gradient(-$rotate, $yellow-5, $transparent);
        filter: drop-shadow(0 0 5rem $yellow-5);
        animation: blurred $time ease-in-out infinite, fall-down $time ease-in-out infinite;

        &::after {
          @extend .element-yellow::before;
          transform: translateX(50%) rotateZ(-$rotate);
        }

        @for $i from 1 through 20 {
          &:nth-child(#{$i}) {
            $delay: random(9999) + 10ms;
            top: calc(50% - #{random(400) - 200px});
            left: calc(50% - #{random(300) + 0px});
            animation-delay: $delay;
            opacity: random(50) / 100 + 0.5;

            &::before,
            &::after {
              animation-delay: $delay;
            }
          }
        }
      }
    }
  }
</style>

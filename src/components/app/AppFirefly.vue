<template>
  <div class="firefly">
    <div v-for="index in 10" :key="index" class="element"></div>
  </div>
</template>

<script lang="ts">
  import { Component, Vue } from 'nuxt-property-decorator';

  @Component
  export default class AppFirefly extends Vue {}
</script>

<style lang="scss" scoped>
  .firefly {
    @import '~/assets/styles/color';

    $quantity: 10;

    .element {
      position: fixed;
      left: 50%;
      top: 50%;
      width: 0.3vw;
      height: 0.3vw;
      margin: -0.2vw 0 0 9.8vw;
      animation: ease 2000s alternate infinite;
      pointer-events: none;

      &::before,
      &::after {
        content: '';
        position: absolute;
        width: 100%;
        height: 100%;
        border-radius: 50%;
        transform-origin: -10vw;
      }

      &::before {
        background: $white-01;
        opacity: 0.3;
        animation: drift ease alternate infinite;
      }

      &::after {
        background: $white-8;
        opacity: 0;
        box-shadow: 0 0 0vw 0vw $yellow;
        animation: drift ease alternate infinite, flash ease infinite;
      }
    }

    @for $i from 1 through $quantity {
      $steps: random(12) + 16;
      $rotationSpeed: random(10) + 8s;

      .element:nth-child(#{$i}) {
        animation-name: move#{$i};

        &::before {
          animation-duration: #{$rotationSpeed};
        }

        &::after {
          animation-duration: #{$rotationSpeed}, random(6000) + 5000ms;
          animation-delay: 0ms, random(8000) + 500ms;
        }
      }

      @keyframes move#{$i} {
        @for $step from 0 through $steps {
          #{$step * (100 / $steps) * 1.0%} {
            transform: translateX(random(100) - 50vw) translateY(random(100) - 50vh) scale(random(75) / 100 + 0.25);
          }
        }
      }
    }

    @keyframes drift {
      0% {
        transform: rotate(0deg);
      }

      100% {
        transform: rotate(360deg);
      }
    }

    @keyframes flash {
      0%,
      30%,
      100% {
        opacity: 0;
        box-shadow: 0 0 0vw 0vw $yellow;
      }

      5% {
        opacity: 1;
        box-shadow: 0 0 2vw 0.4vw $yellow;
      }
    }
  }
</style>

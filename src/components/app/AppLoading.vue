<template>
  <section id="loading" v-if="$store.state.loading.isLoading">
    <div class="d-flex align-items-center h-100 w-100">
      <div class="mx-auto wrapper">
        <app-animation-logo />
        <!-- <app-meteorite /> -->
      </div>
    </div>
    <div class="mask2"></div>
    <div class="mask1"></div>
  </section>
</template>

<script lang="ts">
  import { Component, Vue } from 'nuxt-property-decorator';

  @Component
  export default class AppLoading extends Vue {
    public beforeCreate() {
      this.$store.commit('loading/setLoading', true);
    }

    public mounted() {
      this.$nextTick(() => {
        new Promise((handler: TimerHandler) => setTimeout(handler, 5000)).then(() => {
          this.$store.commit('loading/setLoading', false);
        });
      });
    }
  }
</script>

<style lang="scss" scoped>
  #loading {
    @import '~/assets/styles/color';

    width: 100vw;
    height: 100vh;
    background: $black;
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    z-index: 999;

    .wrapper {
      width: calc(100vw / 3);
    }

    .mask1,
    .mask2 {
      height: 100vh;
      position: fixed;
      top: 0;
      right: 0;
      bottom: 0;
      animation: move 1s ease-in-out;

      @keyframes move {
        0% {
          width: 0;
          left: 0;
        }

        50% {
          width: 100vw;
          left: 0;
        }

        100% {
          width: 100vw;
          left: 100vw;
        }
      }
    }

    .mask1 {
      background: $white-8;
      animation-delay: 4s;
    }

    .mask2 {
      background: $yellow-5;
      animation-delay: 4.2s;
    }
  }
</style>

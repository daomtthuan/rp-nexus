<template>
  <main>
    <app-meteorite />
    <app-firefly />
    <section id="home">
      <b-container fluid no-gutters>
        <b-row>
          <b-col lg="8" xl="6" class="brand">
            <div class="brand-content">
              <app-logo />
            </div>
            <div class="brand-background-1"></div>
            <div class="brand-background-2"></div>
          </b-col>
          <b-col lg="4" xl="6"></b-col>
        </b-row>
      </b-container>
    </section>
  </main>
</template>

<script lang="ts">
  import { Component, Vue } from 'nuxt-property-decorator';

  @Component
  export default class PageIndex extends Vue {
    private head() {
      return { title: 'Home' };
    }
  }
</script>

<style lang="scss" scoped>
  #home {
    @import '~/assets/styles/color';

    overflow: hidden;
    background: $white-01;
    z-index: -1;
    position: relative;

    .brand {
      min-height: 100vh;

      .brand-content {
        margin: 12rem auto;
        z-index: 2;
        position: relative;
        width: 50%;
      }

      .brand-background-1 {
        background-color: $black;
        height: 100vh;
        width: calc(100vw / 3);
        position: absolute;
        top: 0;
        left: 0;
        z-index: 1;
      }

      .brand-background-2 {
        border-top: 100vh solid $black;
        border-right: calc(100vw / 3) solid transparent;
        position: absolute;
        top: 0;
        left: calc(100vw / 3);
        z-index: 1;
      }
    }
  }
</style>

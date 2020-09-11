<template>
  <main>
    <app-meteorite />
    <app-firefly />
    <section id="home">
      <b-container fluid no-gutters>
        <b-row>
          <b-col md="6" lg="8" class="brand">
            <div class="brand-content text-center">
              <h1 class="pt-5">NEXUS</h1>
              <h2>RENTAL PARTNER</h2>
            </div>
            <div class="brand-background-1"></div>
            <div class="brand-background-2"></div>
          </b-col>
          <b-col md="6" lg="4"> </b-col>
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
    background: $white-1;
    z-index: -1;
    position: relative;

    .brand {
      min-height: 100vh;

      .brand-content {
        margin-top: 12rem;
        z-index: 2;
        position: relative;
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

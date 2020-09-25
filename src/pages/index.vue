<template>
  <main>
    <app-meteorite />
    <transition name="page">
      <section v-if="!$store.state.loading.isLoading" v-scroll="onScroll">
        <page-index-navbar :scroll="scroll" />
        <page-index-home />
        <page-index-product />
        <page-index-company />
      </section>
    </transition>
  </main>
</template>

<script lang="ts">
  import { Component, Vue } from 'nuxt-property-decorator';
  import aos from 'aos';

  @Component
  export default class PageIndex extends Vue {
    private loading: boolean = true;
    private scroll: number = 0;

    public head() {
      return { title: 'Home' };
    }

    public mounted() {
      // aos.init();
    }

    public onScroll(event: Event, element: Element) {
      this.scroll = window.scrollY;
    }
  }
</script>

<style lang="scss">
  //   @import 'aos/dist/aos.css';
  //
</style>

<template>
  <section id="product"></section>
</template>

<script lang="ts">
  import { Component, Vue } from 'nuxt-property-decorator';

  @Component
  export default class PageIndexProduct extends Vue {}
</script>

<style lang="scss" scoped>
  #product {
    @import '~/assets/styles/color';

    min-height: 100vh;
  }
</style>

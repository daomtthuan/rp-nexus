<template>
  <section id="company"></section>
</template>

<script lang="ts">
  import { Component, Vue } from 'nuxt-property-decorator';

  @Component
  export default class PageIndexCompany extends Vue {}
</script>

<style lang="scss" scoped>
  #company {
    @import '~/assets/styles/color';

    min-height: 100vh;
  }
</style>

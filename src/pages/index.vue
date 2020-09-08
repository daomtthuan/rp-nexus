<template>
  <nuxt-link to="/components">Go to components demo</nuxt-link>
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

<template></template>

<script lang="ts">
  import { Component, Vue } from 'nuxt-property-decorator';

  @Component
  export default class PageComponent extends Vue {
    private head() {
      return { title: 'Test Components' };
    }
  }
</script>

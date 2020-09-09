<template>
  <main>
    <h1>Components</h1>

    <section>
      <h3>Button</h3>

      <app-button-yellow>
        ボタン
      </app-button-yellow>
      <br />
      <br />
      <app-button-yellow>
        長いボタン 長いボタン 長いボタン 長いボタン
      </app-button-yellow>
    </section>

    <section>
      <h3>Background Animation</h3>

      <app-background-yellow :count="20"></app-background-yellow>
    </section>
  </main>
</template>

<script lang="ts">
  import { Component, Vue } from 'nuxt-property-decorator';

  @Component
  export default class PageComponent extends Vue {
    private head() {
      return { title: 'Components' };
    }
  }
</script>

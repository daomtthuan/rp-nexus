<template>
  <main id="__page">
    <h1>Components</h1>

    <section>
      <h3>Button 1</h3>

      <app-button-1>
        Button ButtonButtonButtonButtonButtonButtonButtonButtonButto
      </app-button-1>

      <app-button-1>
        ボタン
      </app-button-1>
    </section>
    <br />
    <section>
      <h3>Button 2</h3>

      <app-button-2>
        Button ButtonButtonButtonButtonButtonButtonButtonButtonButton
      </app-button-2>

      <app-button-2>
        ボタン
      </app-button-2>
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

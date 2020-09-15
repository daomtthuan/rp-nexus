<template>
  <section id="home">
    <b-container fluid no-gutters>
      <b-row class="row-1">
        <b-col lg="8" xl="6">
          <div class="background-1"></div>
          <div class="background-2"></div>
          <div class="background-3"></div>
          <app-logo class="brand" />
        </b-col>
      </b-row>
      <b-row class="row-2">
        <b-col lg="8" xl="6" class="about text-center">
          <h3>私たち<span class="text-yellow">NEXUS</span>は</h3>
          <h5>
            目まぐるしく変わっていく<br />
            現場状況下でお客様、<br />
            協力会社様と連携を取り
          </h5>
          <h4 class="text-yellow">
            臨機応変<br />
            ファスト レスポンス
          </h4>
          <h5>
            を常に心掛け、<br />
            お客様にとって
          </h5>
          <h3 class="text-yellow">
            RENTAL PARTNER
          </h3>
          <h5>
            であり続ける為に日々、<br />
            走り続けています。
          </h5>
        </b-col>
      </b-row>
    </b-container>
    <app-meteorite />
    <app-firefly />
  </section>
</template>

<script lang="ts">
  import { Component, Vue } from 'nuxt-property-decorator';

  @Component
  export default class PageIndexHome extends Vue {}
</script>

<style lang="scss" scoped>
  #home {
    @import '~/assets/styles/color';

    overflow: hidden;
    min-height: 100vh;

    .row-1 {
      .brand {
        position: relative;
        margin-top: calc((100vh -100%) / 6);
      }

      .background-1 {
        background-image: linear-gradient($black, $black-8), url($base + '/images/index/hand.png');
        background-size: cover;
        background-position: center;
        height: 100vh;
        width: calc(200vw / 3);
        position: absolute;
        top: 0;
        left: calc(100vw / 3);
        z-index: 0;
      }

      .background-2 {
        background-color: $black;
        height: 100vh;
        width: calc(100vw / 3);
        position: absolute;
        top: 0;
        left: 0;
        z-index: 0;
      }

      .background-3 {
        border-top: 100vh solid $black;
        border-right: calc(100vw / 3) solid transparent;
        position: absolute;
        top: 0;
        left: calc(100vw / 3);
        z-index: 0;
      }
    }

    .row-2 {
      & > * {
        margin-top: calc((100vh -100%) / 6);
      }
    }
  }
</style>

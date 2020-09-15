<template>
  <section id="home">
    <b-container fluid no-gutters>
      <b-row class="row">
        <b-col lg="8" xl="6">
          <div class="wrapper">
            <div class="w-100">
              <app-logo class="brand" />
              <div class="text-center">
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
              </div>
            </div>
          </div>
          <div class="background-1"></div>
          <div class="background-2"></div>
          <div class="background-3"></div>
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

    .row {
      .wrapper {
        position: relative;
        z-index: 1;
        min-height: calc(100vh - 80px - 1rem);
        margin-top: calc(80px + 1rem);
        display: flex;
        align-items: center;

        .brand {
          margin: 1em auto calc(100% / 6) auto;

          // Extra large devices (large desktops, 1200px and up)
          @media (min-width: 1200px) {
            max-width: calc(100vw / 2);
          }

          @media (min-width: 2560px) {
            max-width: calc(100vw / 3);
          }
        }
      }

      .background-1 {
        background-image: linear-gradient($black, $black-8), url($base + '/images/index/hand.png');
        background-size: cover;
        background-position: center;
        height: 100%;
        width: calc(200vw / 3);
        position: absolute;
        top: 0;
        left: calc(100vw / 3);
        z-index: 0;
      }

      .background-2 {
        background-color: $black;
        height: 100%;
        width: calc(100vw / 3);
        position: absolute;
        top: 0;
        left: 0;
        z-index: 0;
      }

      .background-3 {
        border-top: 100vmax solid $black;
        border-right: calc(100vw / 3) solid transparent;
        position: absolute;
        top: 0;
        left: calc(100vw / 3);
        z-index: 0;
      }
    }
  }
</style>

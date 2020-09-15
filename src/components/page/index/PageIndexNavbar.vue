<template>
  <b-navbar id="navbar" type="dark" class="fixed-top">
    <b-navbar variant="faded" type="light">
      <b-navbar-brand href="#" class="font-weight-bold">
        {{ $nuxt.context.env.NAME }}
      </b-navbar-brand>
    </b-navbar>
    <b-collapse is-nav>
      <b-navbar-nav class="ml-auto text-center">
        <b-nav-item href="#" class="mx-2">
          <span class="item-text">Product</span>
          <hr />
          製品情報
        </b-nav-item>
        <b-nav-item href="#" class="mx-2">
          <span class="item-text">Company</span>
          <hr />
          企業情報
        </b-nav-item>
        <b-nav-item href="#" class="mx-2">
          <span class="item-text">Service</span>
          <hr />
          サービス情報
        </b-nav-item>
        <b-nav-item href="#" class="mx-2">
          <span class="item-text">Terms - Conditions</span>
          <hr />
          規約と条件
        </b-nav-item>
        <b-nav-item href="#" class="mx-2">
          <span class="item-text">Blog</span>
          <hr />
          ブログ
        </b-nav-item>
        <b-nav-item href="#" class="mx-2">
          <span class="item-text">Contact</span>
          <hr />
          連絡先
        </b-nav-item>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<script lang="ts">
  import { Component, Vue } from 'nuxt-property-decorator';

  @Component
  export default class PageIndexNavbar extends Vue {}
</script>

<style lang="scss" scoped>
  #navbar {
    @import '~/assets/styles/color';

    .navbar-brand {
      transition: all 0.4s ease-in;
      &:hover {
        color: $yellow;
      }
    }

    .navbar-nav {
      .nav-item {
        .nav-link {
          text-transform: uppercase;
          font-weight: lighter;

          hr {
            opacity: 0;
            transition: all 0.4s ease-in;
            background-color: $white;
            margin: 0;
          }

          &:hover {
            font-size: 1rem;

            .item-text {
              color: $yellow;
            }

            hr {
              opacity: 1;
              background-color: $yellow;
            }
          }
        }
      }
    }
  }
</style>

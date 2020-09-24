<template>
  <b-navbar id="navbar" type="dark" class="fixed-top">
    <b-navbar variant="faded" type="light">
      <b-navbar-brand href="#" class="font-weight-bold" v-scroll-to="'#home'">
        {{ $nuxt.context.env.NAME }}
      </b-navbar-brand>
    </b-navbar>
    <b-collapse is-nav>
      <b-navbar-nav class="ml-auto text-center">
        <b-nav-item href="#" class="mx-2 scroll active" v-scroll-to="'#home'" ref="home">
          <span class="item-text">Home</span>
          <hr />
          ホームページ
        </b-nav-item>
        <b-nav-item href="#" class="mx-2 scroll" v-scroll-to="'#product'" ref="product">
          <span class="item-text">Product</span>
          <hr />
          製品情報
        </b-nav-item>
        <b-nav-item href="#" class="mx-2 scroll" v-scroll-to="'#company'" ref="company">
          <span class="item-text">Company</span>
          <hr />
          企業情報
        </b-nav-item>
        <b-nav-item href="#" class="mx-2 scroll" v-scroll-to="'#service'" ref="service">
          <span class="item-text">Service</span>
          <hr />
          サービス情報
        </b-nav-item>
        <b-nav-item href="#" class="mx-2 scroll" v-scroll-to="'#terms-conditions'" ref="terms-conditions">
          <span class="item-text">Terms - Conditions</span>
          <hr />
          規約と条件
        </b-nav-item>
        <b-nav-item href="#" class="mx-2 scroll" v-scroll-to="'#blog'" ref="blog">
          <span class="item-text">Blog</span>
          <hr />
          ブログ
        </b-nav-item>
        <b-nav-item href="#" class="mx-2 scroll" v-scroll-to="'#contact'" ref="contact">
          <span class="item-text">Contact</span>
          <hr />
          連絡先
        </b-nav-item>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<script lang="ts">
  import { Component, Prop, Vue, Watch } from 'nuxt-property-decorator';

  @Component
  export default class PageIndexNavbar extends Vue {
    @Prop(Number)
    private scroll!: number;

    @Watch('scroll')
    public onScroll(scrollValue: number) {
      document.querySelectorAll('.scroll').forEach((element) => element.classList.remove('active'));

      if ((<HTMLLIElement>document.querySelector('#home')).offsetTop <= scrollValue && scrollValue < (<HTMLLIElement>document.querySelector('#product')).offsetTop) {
        (<HTMLElement>this.$refs['home']).classList.add('active');
      } else if ((<HTMLLIElement>document.querySelector('#product')).offsetTop <= scrollValue && scrollValue < (<HTMLLIElement>document.querySelector('#company')).offsetTop) {
        (<HTMLElement>this.$refs['product']).classList.add('active');
      } else if ((<HTMLLIElement>document.querySelector('#company')).offsetTop <= scrollValue && scrollValue < (<HTMLLIElement>document.querySelector('#service')).offsetTop) {
        (<HTMLElement>this.$refs['company']).classList.add('active');
      } else if ((<HTMLLIElement>document.querySelector('#service')).offsetTop <= scrollValue && scrollValue < (<HTMLLIElement>document.querySelector('#terms-conditions')).offsetTop) {
        (<HTMLElement>this.$refs['service']).classList.add('active');
      } else if ((<HTMLLIElement>document.querySelector('#terms-conditions')).offsetTop <= scrollValue && scrollValue < (<HTMLLIElement>document.querySelector('#blog')).offsetTop) {
        (<HTMLElement>this.$refs['terms-conditions']).classList.add('active');
      } else if ((<HTMLLIElement>document.querySelector('#blog')).offsetTop <= scrollValue && scrollValue < (<HTMLLIElement>document.querySelector('#contact')).offsetTop) {
        (<HTMLElement>this.$refs['blog']).classList.add('active');
      } else if ((<HTMLLIElement>document.querySelector('#contact')).offsetTop <= scrollValue) {
        (<HTMLElement>this.$refs['contact']).classList.add('active');
      }
    }
  }
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
        &.scroll.active {
          .nav-link {
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

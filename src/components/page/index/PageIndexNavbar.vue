<template>
  <b-navbar toggleable="lg" type="dark" class="bg-black sticky-top">
    <b-navbar variant="faded" type="light">
      <b-navbar-brand href="#" class="font-weight-bold">
        <img :src="$icon(64)" class="mb-1" />
        {{ $nuxt.context.env.NAME }}
      </b-navbar-brand>
    </b-navbar>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <b-nav-item href="#">
          COMPANY<br />
          企業情報
        </b-nav-item>
      </b-navbar-nav>

      <!-- Right aligned nav items -->
      <!-- <b-navbar-nav class="ml-auto">
        <b-nav-form>
          <b-form-input size="sm" class="mr-sm-2" placeholder="Search"></b-form-input>
          <b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>
        </b-nav-form>

        <b-nav-item-dropdown text="Lang" right>
          <b-dropdown-item href="#">EN</b-dropdown-item>
          <b-dropdown-item href="#">ES</b-dropdown-item>
          <b-dropdown-item href="#">RU</b-dropdown-item>
          <b-dropdown-item href="#">FA</b-dropdown-item>
        </b-nav-item-dropdown>

        <b-nav-item-dropdown right> -->
      <!-- Using 'button-content' slot -->
      <!-- <template v-slot:button-content>
            <em>User</em>
          </template>
          <b-dropdown-item href="#">Profile</b-dropdown-item>
          <b-dropdown-item href="#">Sign Out</b-dropdown-item>
        </b-nav-item-dropdown>
      </b-navbar-nav> -->
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
  }
</style>

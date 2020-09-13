import Dotenv from 'dotenv';

Dotenv.config();

export default {
  // Server
  server: {
    host: '127.0.0.1',
    port: 80,
  },
  router: { base: process.env.app_base },

  // Project
  srcDir: 'src/',
  components: true,
  head: {
    meta: [
      { charset: 'utf-8' },
      { 'http-equiv': 'X-UA-Compatible', content: 'IE=edge' },
      { name: 'viewport', content: process.env.app_viewport },
      { name: 'keywords', content: 'NEXUS RENTAL PARTNER, NEXUS, RENTAL PARTNER' },
      { name: 'author', content: 'Daomtthuan' },
      { name: 'robots', content: 'index, follow, archive' },
      { hid: 'description', name: 'description', content: process.env.app_description },
      { property: 'st:section', content: process.env.app_description },
      { name: 'twitter:title', content: process.env.app_name },
      { name: 'twitter:description', content: process.env.app_description },
      { name: 'og:locale', content: 'ja_JP' },
      { name: 'twitter:image', content: `${process.env.app_base}/images/index/hand.png` },
      { name: 'og:image:width', content: '544' },
      { name: 'og:image:height', content: '362' },
      { name: 'og:image:secure_url', content: `${process.env.app_base}/images/index/hand.png` },
    ],
    title: process.env.app_name,
    titleTemplate: `${process.env.app_name} - %s`,
    noscript: [{ innerHTML: 'This website requires JavaScript. （このWebサイトにはJavaScriptが必要です。）' }],
  },
  modules: ['@nuxtjs/pwa', 'bootstrap-vue/nuxt'],
  pwa: {
    meta: {
      viewport: process.env.app_viewport,
      name: process.env.app_name,
      author: process.env.app_author,
      description: process.env.app_description,
      theme_color: process.env.app_color,
      lang: process.env.app_language,
      ogHost: process.env.app_base,
      ogImage: '/images/index/hand.png',
      twitterCard: 'summary_large_image',
      nativeUI: true,
    },
    manifest: {
      name: process.env.app_name,
      description: process.env.app_description,
      lang: process.env.app_language,
      background_color: process.env.app_color,
      theme_color: process.env.app_color,
    },
  },

  // Build
  target: 'static',
  buildModules: ['@nuxt/typescript-build', '@nuxtjs/dotenv'],
  dotenv: {
    path: '~/../',
  },
  build: {
    analyze: false,
    babel: {
      presets: () => [['@nuxt/babel-preset-app', { loose: true }]],
      compact: true,
    },
  },
};

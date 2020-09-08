const name = 'NEXUS RENTAL PARTNER';
const description = '建機　建設機械　レンタル　ネクサス　めくり隊　解体　アタッチメント　出張修理　nexus NEXUS 重機　SK30 SK17 SK45 CAT ｺﾍﾞﾙｺ　KOBELCO　303　017　308';
const viewport = 'width=device-width, initial-scale=1, shrink-to-fit=no';
const author = 'Daomtthuan';
const color = '#171414';
const language = 'ja';
const base = '/rp-nexus/';

export default {
  // Server
  server: {
    host: '127.0.0.1',
    port: 80,
  },
  router: { base: base },

  // Project
  srcDir: 'src/',
  components: [{ path: '~/components', prefix: 'app' }],
  head: {
    meta: [
      { charset: 'utf-8' },
      { 'http-equiv': 'X-UA-Compatible', content: 'IE=edge' },
      { name: 'viewport', content: viewport },
      { name: 'keywords', content: 'NEXUS RENTAL PARTNER, NEXUS, RENTAL PARTNER' },
      { name: 'author', content: 'Daomtthuan' },
      { name: 'robots', content: 'index, follow, archive' },
      { hid: 'description', name: 'description', content: description },
      { property: 'st:section', content: description },
      { name: 'twitter:title', content: name },
      { name: 'twitter:description', content: description },
      { name: 'og:locale', content: 'ja_JP' },
      // { name: 'twitter:image', content:  },
      //og:image:width
      //og:image:height
      //og:image:secure_url
    ],
    title: name,
    titleTemplate: `${name} - %s`,
    noscript: [{ innerHTML: 'This website requires JavaScript. （このWebサイトにはJavaScriptが必要です。）' }],
  },
  modules: ['@nuxtjs/pwa'],
  pwa: {
    meta: {
      viewport: viewport,
      name: name,
      author: author,
      description: description,
      theme_color: color,
      lang: language,
      ogHost: 'http://rp-nexus.jimdo.com/',
      //ogImage
      twitterCard: 'summary_large_image',
      nativeUI: true,
    },
    manifest: {
      name: name,
      description: description,
      lang: language,
      background_color: color,
      theme_color: color,
    },
  },

  // Build
  target: 'static',
  buildModules: ['@nuxt/typescript-build'],
  build: {
    babel: {
      presets: () => [['@nuxt/babel-preset-app', { loose: true }]],
    },
  },
};

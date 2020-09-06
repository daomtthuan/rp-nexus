export default {
  target: 'static',
  router: {
    base: '/rp-nexus/',
  },

  server: {
    host: '127.0.0.1',
    port: 80,
  },
  buildModules: ['@nuxt/typescript-build'],
  components: true, //['~/components/', { path: '~/components/litestyle/', prefix: 'ls' }],
  build: {
    babel: {
      presets() {
        return [['@nuxt/babel-preset-app', { loose: true }]];
      },
    },
  },
};

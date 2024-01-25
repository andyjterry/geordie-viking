// https://nuxt.com/docs/api/configuration/nuxt-config
// Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
export default {
  layout: 'default',
  buildModules: [],
  head: {},

  modules: ['@nuxtjs/tailwindcss'],
  styleResources: {
    scss: ['~assets/css/main.scss'],
  },
  css: ['~/assets/css/main.scss'],

  tailwindcss: {
    cssPath: '~/assets/css/tailwind.css',
    configPath: 'tailwind.config',
    exposeConfig: false,
    config: {},
    injectPosition: 0,
    viewer: true,
  },
  postcss: {
    plugins: {
      autoprefixer: {},
    },
  },
};

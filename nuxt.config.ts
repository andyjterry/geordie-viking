// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  head: {
    title: 'Geordie Viking',
  },
  devtools: { enabled: true },
  build: {
    postcss: {
      // Your PostCSS configuration here
      plugins: {
        tailwindcss: {},
        autoprefixer: {},
        // ... other PostCSS plugins if you have any
      },
    },
  },
  serverMiddleware: ['~/proxy.js'], // Add this line to use the proxy middleware
});

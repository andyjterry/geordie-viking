// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
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
});

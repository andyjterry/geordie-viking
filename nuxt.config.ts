// import { defineNuxtConfig, NuxtConfig } from 'nuxt/config';
//
// interface ExtendedConfig extends NuxtConfig {
//   head: {
//     title: 'Geordie Viking';
//     meta: [
//       { charset: 'utf-8' },
//       { name: 'viewport'; content: 'width=device-width, initial-scale=1' },
//       // Add other meta tags as needed
//     ];
//     link: [
//       // Add links for favicons, icons, etc.
//     ];
//     // Other head elements like scripts, styles, etc.
//   };
//
//   devtools: { enabled: true };
//   // css: ['~/dist/tailwind.css'];
//   css: ['~/assets/css/tailwind.css'];
//
//   postcss: {
//     plugins: {
//       tailwindcss: {};
//       autoprefixer: {};
//     };
//   };
//
//   serverMiddleware: ['~/proxy.js'];
// }

export default {
  head: {
    title: 'Geordie Viking',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      // Add other meta tags as needed
    ],
    link: [
      // Add links for favicons, icons, etc.
    ],
    // Other head elements like scripts, styles, etc.
  },
  css: ['~/assets/css/tailwind.css'],
  build: {
    postcssOptions: {
      plugins: {
        tailwindcss: {},
        autoprefixer: {},
      },
    },
  },
  serverMiddleware: ['~/proxy.js'],
};

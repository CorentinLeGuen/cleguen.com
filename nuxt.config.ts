import { resolve } from "path";
export default defineNuxtConfig({
  app: {
    head: {
      script: [
        {
          src: 'https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.8/dist/umd/popper.min.js',
          integrity: 'sha384-I7E8VVD/ismYTF4hNIPjVp/Zjvgyol6VFvRkX/vR+Vc4jQkC+hVqc2pM8ODewa9r',
          crossorigin: 'anonymous'
        },
        {
          src: 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.min.js',
          integrity: 'sha384-BBtl+eGJRgqQAUMxJ7pMwbEyER4l1g+O15P+16Ep7Q9Q+zqX6gSbd85u4mG4QzX+',
          crossorigin: 'anonymous'
        }
      ]
    }
  },
  alias: {
    "@": resolve(__dirname, "/"),
  },
  routeRules: {
    '/draw/last': {
      proxy: {
        to: "http://167.114.115.103:21000/draw/last",
      },
    },
    '/draw/stats': {
      proxy: {
        to: "http://167.114.115.103:21000/draw/stats",
      },
    }
  },

  modules: [
    '@nuxtjs/i18n',
    '@nuxtjs/tailwindcss',
  ],
  i18n: {
    vueI18n: './i18n.config.ts'
  }
})
import { resolve } from "path";
export default defineNuxtConfig({
  app: {},
  css: ['~/assets/input.css'],
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
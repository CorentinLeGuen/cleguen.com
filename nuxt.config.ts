import { resolve } from "path";
export default defineNuxtConfig({
  alias: {
    "@": resolve(__dirname, "/"),
  },
  css: [
    "~/assets/css/main.scss"
  ],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  routeRules: {
    '/draw/last': {
      proxy: {
        to: "http://167.114.115.103:21000/draw/last",
      },
    }
  },
})

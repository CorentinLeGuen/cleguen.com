/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    extend: {},
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      forest: {
        100: '#E4F4E9',
        300: '#A0D5B1',
        500: '#4B9C67',
        700: '#316844',
        900: '#24432F',
      }
    }
  },
  plugins: [
    require('flowbite/plugin')
  ],
}


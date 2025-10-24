import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './styles/init.css'
import { initFlowbite } from 'flowbite'

initFlowbite()

const app = createApp(App)

app.use(router)

app.mount('#app')

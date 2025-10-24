import Legal from '@/components/Legal.vue'
import Main from '@/components/Main.vue'
import {createRouter, createWebHistory, type RouteRecordRaw} from 'vue-router'

const routes: RouteRecordRaw[] = [
    {
        path: '/',
        name: 'home',
        component: () => Main,
    },
    {
        path: '/legal',
        name: 'legal',
        component: () => Legal,
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
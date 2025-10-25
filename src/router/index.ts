import {createRouter, createWebHistory, type RouteRecordRaw} from 'vue-router'

const routes: RouteRecordRaw[] = [
    {
        path: '/',
        name: 'home',
        component: () => import('@/components/Main.vue'),
        meta: { title: 'cleguen' }
    },
    {
        path: '/legal',
        name: 'legal',
        component: () => import('@/components/Legal.vue'),
        meta: { title: 'Legal'}
    },
    {
        path: '/ia-progress-or-downfall',
        name: 'article1',
        component: () => import('@/components/blog/IAProgressDownfall.vue'),
        meta: { title: 'cleguen.com - IA article'}
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition
        } else {
            return { top: 0 }
        }
    }
})

router.afterEach((to) => {
  document.title = (to.meta.title as string) || 'cleguen.com'
})

export default router
import {createRouter, createWebHistory, type RouteRecordRaw} from 'vue-router'

const DEFAULT_DESCRIPTION = 'Portfolio and blog of Corentin Le Guen, Lead Senior Developer. Articles on software, AI and tech.'

const routes: RouteRecordRaw[] = [
    {
        path: '/',
        name: 'home',
        component: () => import('@/components/Main.vue'),
        meta: { title: 'cleguen', description: DEFAULT_DESCRIPTION }
    },
    {
        path: '/legal',
        name: 'legal',
        component: () => import('@/components/Legal.vue'),
        meta: { title: 'Legal', description: 'Legal notice for cleguen.com.' }
    },
    {
        path: '/blog',
        children: [
            {
                path: '',
                name: 'blog',
                component: () => import('@/components/Blog.vue'),
                meta: { title: 'cleguen.com - Blog', description: 'Articles by Corentin Le Guen on software, AI and tech.' }
            },
            {
                path: 'ia-progress-or-downfall',
                name: 'article1',
                component: () => import('@/components/blog/IAProgressDownfall.vue'),
                meta: { title: 'cleguen.com - IA article', description: 'Reflections on artificial intelligence: progress or downfall?' }
            },
            {
                path: 'ia-hallucination',
                name: 'article2',
                component: () => import('@/components/blog/IAHallucination.vue'),
                meta: { title: 'cleguen.com - IA Hallucination', description: 'A concrete example of an AI hallucination and why you should not fully trust generated answers.' }
            }
        ]
    },
    {
        path: '/:pathMatch(.*)*',
        name: 'not-found',
        component: () => import('@/components/NotFound.vue'),
        meta: { title: 'cleguen.com - Page not found', description: 'The page you are looking for does not exist.' }
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

  const description = (to.meta.description as string) || DEFAULT_DESCRIPTION
  let tag = document.querySelector('meta[name="description"]')
  if (!tag) {
    tag = document.createElement('meta')
    tag.setAttribute('name', 'description')
    document.head.appendChild(tag)
  }
  tag.setAttribute('content', description)
})

export default router
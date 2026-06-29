<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { articles } from '@/data/articles'
const { t } = useI18n()
</script>

<template>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <router-link
            v-for="article in articles"
            :key="article.slug"
            :to="`/blog/${article.slug}`"
            class="group h-full"
        >
            <div class="h-full bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between">
                <div>
                    <div class="text-xs font-semibold uppercase tracking-wider text-amber-600 mb-2">{{ article.category }}</div>
                    <h3 class="text-xl font-bold text-gray-800 group-hover:text-amber-600 transition-colors mb-3">{{ t(`${article.i18nKey}.title`) }}</h3>
                    <p class="text-gray-600 line-clamp-3 mb-4">{{ t(`${article.i18nKey}.description`) }}</p>
                </div>
                <div class="flex items-center justify-between text-sm text-gray-500 mt-4 border-t pt-4 border-gray-100">
                    <span>{{ t(`${article.i18nKey}.date_publication`) }}</span>
                    <span class="group-hover:translate-x-1 transition-transform">{{ t('blog.link') }} &rarr;</span>
                </div>
            </div>
        </router-link>
    </div>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { articles } from '@/data/articles'
const { t } = useI18n()
</script>

<template>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <router-link
            v-for="(article, index) in articles"
            :key="article.slug"
            :to="`/blog/${article.slug}`"
            class="group h-full"
        >
            <div class="h-full bg-tdr-white border-2 border-tdr-black tdr-shadow group-hover:tdr-shadow-red group-hover:-translate-x-1 group-hover:-translate-y-1 transition-transform duration-200 flex flex-col justify-between">
                <div class="flex items-center justify-between bg-tdr-black text-tdr-white px-4 py-2">
                    <span class="tdr-label text-tdr-yellow">{{ article.category }}</span>
                    <span class="tdr-label text-tdr-grey">№ {{ String(articles.length - index).padStart(3, '0') }}</span>
                </div>
                <div class="p-6">
                    <h3 class="text-xl font-bold uppercase leading-tight group-hover:text-tdr-red transition-colors mb-3">{{ t(`${article.i18nKey}.title`) }}</h3>
                    <p class="text-tdr-steel line-clamp-3">{{ t(`${article.i18nKey}.description`) }}</p>
                </div>
                <div class="flex items-center justify-between tdr-label border-t-2 border-tdr-black">
                    <span class="px-4 py-3">{{ t(`${article.i18nKey}.date_publication`) }}</span>
                    <span class="px-4 py-3 whitespace-nowrap bg-tdr-yellow text-tdr-black border-l-2 border-tdr-black group-hover:bg-tdr-red group-hover:text-tdr-white transition-colors">{{ t('blog.link') }} &rarr;</span>
                </div>
            </div>
        </router-link>
    </div>
</template>

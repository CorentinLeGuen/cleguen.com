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
            <div class="h-full bg-hw-crypt border-2 border-hw-grave hw-shadow group-hover:hw-shadow-pumpkin group-hover:-translate-x-1 group-hover:-translate-y-1 transition-transform duration-200 flex flex-col justify-between">
                <div class="flex items-center justify-between bg-hw-abyss text-hw-bone px-4 py-2">
                    <span class="hw-label text-hw-slime">{{ article.category }}</span>
                    <span class="hw-label text-hw-mist">№ {{ String(articles.length - index).padStart(3, '0') }}</span>
                </div>
                <div class="p-6">
                    <h3 class="text-xl font-bold uppercase leading-tight group-hover:text-hw-pumpkin transition-colors mb-3">{{ t(`${article.i18nKey}.title`) }}</h3>
                    <p class="text-hw-fog line-clamp-3">{{ t(`${article.i18nKey}.description`) }}</p>
                </div>
                <div class="flex items-center justify-between hw-label border-t-2 border-hw-grave">
                    <span class="px-4 py-3">{{ t(`${article.i18nKey}.date_publication`) }}</span>
                    <span class="px-4 py-3 whitespace-nowrap bg-hw-slime text-hw-abyss border-l-2 border-hw-grave group-hover:bg-hw-pumpkin transition-colors">{{ t('blog.link') }} &rarr;</span>
                </div>
            </div>
        </router-link>
    </div>
</template>

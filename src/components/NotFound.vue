<script setup lang="ts">
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
</script>

<template>
    <div class="max-w-3xl mx-auto px-6 py-20 md:py-28 flex flex-col items-center text-center space-y-8">
        <span class="xm-label bg-xm-abyss text-xm-gold px-3 py-1">Error // エラー</span>
        <h1 class="xm-display text-8xl md:text-9xl text-xm-berry xm-twinkle">404</h1>
        <div class="h-3 w-48 xm-candy" aria-hidden="true"></div>

        <div class="space-y-3">
            <h2 class="text-2xl md:text-3xl font-bold uppercase">{{ t('notfound.title') }}</h2>
            <p class="text-xm-frost max-w-md mx-auto">{{ t('notfound.text') }}</p>
        </div>

        <div class="flex flex-col sm:flex-row gap-4 pt-2">
            <RouterLink to="/"
                class="xm-display text-sm px-6 py-4 bg-xm-abyss text-xm-gold xm-shadow-berry hover:bg-xm-gold hover:text-xm-abyss transition-colors">
                {{ t('notfound.home') }}
            </RouterLink>
            <RouterLink to="/blog"
                class="xm-display text-sm px-6 py-4 border-2 border-xm-holly bg-xm-pine hover:bg-xm-berry hover:text-xm-abyss transition-colors">
                {{ t('notfound.blog') }}
            </RouterLink>
        </div>
    </div>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import BlogList from '@/components/BlogList.vue'
const { t } = useI18n()
</script>

<template>
    <div class="max-w-5xl mx-auto px-6 py-12 md:py-20 space-y-10">
        <div class="space-y-2">
            <span class="tdr-label text-tdr-red">Index // 記事</span>
            <div class="flex items-center gap-4">
                <h1 class="tdr-display text-3xl md:text-5xl">{{ t('blog.title') }}</h1>
                <div class="h-3 grow tdr-hazard"></div>
            </div>
        </div>
        <BlogList />
    </div>
</template>

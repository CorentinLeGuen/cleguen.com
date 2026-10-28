<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import BlogList from '@/components/BlogList.vue'
const { t } = useI18n()
</script>

<template>
    <div class="max-w-5xl mx-auto px-6 py-12 md:py-20 space-y-10">
        <div class="space-y-2">
            <span class="hw-label text-hw-pumpkin">Index // 記事</span>
            <div class="flex items-center gap-4">
                <h1 class="hw-display text-3xl md:text-5xl">{{ t('blog.title') }}</h1>
                <div class="h-3 grow hw-hazard"></div>
            </div>
        </div>
        <BlogList />
    </div>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import BlogList from '@/components/BlogList.vue'
const { t } = useI18n()
</script>

<template>
    <div class="max-w-5xl mx-auto px-6 py-12 md:py-20 space-y-10">
        <div class="flex items-center gap-4">
            <h1 class="text-3xl md:text-4xl font-bold text-gray-800">{{ t('blog.title') }}</h1>
            <div class="h-1 grow bg-gray-100 rounded-full"></div>
        </div>
        <BlogList />
    </div>
</template>

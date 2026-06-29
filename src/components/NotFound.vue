<script setup lang="ts">
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
</script>

<template>
    <div class="max-w-3xl mx-auto px-6 py-20 md:py-28 flex flex-col items-center text-center space-y-8">
        <h1 class="text-8xl md:text-9xl font-extrabold leading-none">
            <span class="bg-clip-text text-transparent bg-linear-to-r from-amber-600 to-orange-500">404</span>
        </h1>

        <div class="space-y-3">
            <h2 class="text-2xl md:text-3xl font-bold text-gray-800">{{ t('notfound.title') }}</h2>
            <p class="text-gray-600 max-w-md mx-auto">{{ t('notfound.text') }}</p>
        </div>

        <div class="flex flex-col sm:flex-row gap-4 pt-2">
            <RouterLink to="/"
                class="px-8 py-3 bg-gray-900 text-white font-medium rounded-lg shadow-lg hover:bg-gray-800 hover:-translate-y-1 transition-all duration-300">
                {{ t('notfound.home') }}
            </RouterLink>
            <RouterLink to="/blog"
                class="px-8 py-3 border border-gray-200 text-gray-700 font-medium rounded-lg hover:text-amber-600 hover:shadow hover:-translate-y-1 transition-all duration-300">
                {{ t('notfound.blog') }}
            </RouterLink>
        </div>
    </div>
</template>

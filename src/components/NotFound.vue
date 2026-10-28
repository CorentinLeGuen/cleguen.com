<script setup lang="ts">
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
</script>

<template>
    <div class="max-w-3xl mx-auto px-6 py-20 md:py-28 flex flex-col items-center text-center space-y-8">
        <span class="hw-label bg-hw-abyss text-hw-slime px-3 py-1">Error // エラー</span>
        <h1 class="hw-display text-8xl md:text-9xl text-hw-pumpkin hw-flicker">404</h1>
        <div class="h-3 w-48 hw-hazard" aria-hidden="true"></div>

        <div class="space-y-3">
            <h2 class="text-2xl md:text-3xl font-bold uppercase">{{ t('notfound.title') }}</h2>
            <p class="text-hw-fog max-w-md mx-auto">{{ t('notfound.text') }}</p>
        </div>

        <div class="flex flex-col sm:flex-row gap-4 pt-2">
            <RouterLink to="/"
                class="hw-display text-sm px-6 py-4 bg-hw-abyss text-hw-slime hw-shadow-pumpkin hover:bg-hw-slime hover:text-hw-abyss transition-colors">
                {{ t('notfound.home') }}
            </RouterLink>
            <RouterLink to="/blog"
                class="hw-display text-sm px-6 py-4 border-2 border-hw-grave bg-hw-crypt hover:bg-hw-pumpkin hover:text-hw-abyss transition-colors">
                {{ t('notfound.blog') }}
            </RouterLink>
        </div>
    </div>
</template>

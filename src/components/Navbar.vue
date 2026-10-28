<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import Language from "@/components/Language.vue";
const { t } = useI18n()
</script>

<template>
    <nav class="bg-hw-abyss text-hw-bone border-b-4 border-hw-pumpkin">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-stretch justify-between gap-4">
            <RouterLink to="/" class="flex items-center gap-3 py-3 group">
                <span class="bg-hw-slime p-1.5">
                    <img src="@/assets/favicon.svg" alt="logo" class="w-6"/>
                </span>
                <span class="flex flex-col leading-none">
                    <span class="hw-display text-base sm:text-lg group-hover:text-hw-slime transition-colors">cleguen.com</span>
                    <span class="hw-label text-hw-mist mt-1">CLG-01 // 開発者</span>
                </span>
            </RouterLink>
            <div class="flex items-stretch">
                <RouterLink to="/blog" class="hw-label text-xs! flex items-center px-4 hover:bg-hw-slime hover:text-hw-abyss transition-colors">
                    {{ t('blog.nav') }}
                </RouterLink>
                <Language />
            </div>
        </div>
    </nav>
</template>

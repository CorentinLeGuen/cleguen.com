<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import Language from "@/components/Language.vue";
const { t } = useI18n()
</script>

<template>
    <nav class="bg-xm-abyss text-xm-snow border-b-4 border-xm-berry">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-stretch justify-between gap-4">
            <RouterLink to="/" class="flex items-center gap-3 py-3 group">
                <span class="bg-xm-gold p-1.5">
                    <img src="@/assets/favicon.svg" alt="logo" class="w-6"/>
                </span>
                <span class="flex flex-col leading-none">
                    <span class="xm-display text-base sm:text-lg group-hover:text-xm-gold transition-colors">cleguen.com</span>
                    <span class="xm-label text-xm-mist mt-1">CLG-01 // 開発者</span>
                </span>
            </RouterLink>
            <div class="flex items-stretch">
                <RouterLink to="/blog" class="xm-label text-xs! flex items-center px-4 hover:bg-xm-gold hover:text-xm-abyss transition-colors">
                    {{ t('blog.nav') }}
                </RouterLink>
                <Language />
            </div>
        </div>
    </nav>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import Language from "@/components/Language.vue";
const { t } = useI18n()
</script>

<template>
    <nav class="bg-tdr-black text-tdr-white border-b-4 border-tdr-red">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-stretch justify-between gap-4">
            <RouterLink to="/" class="flex items-center gap-3 py-3 group">
                <span class="bg-tdr-yellow p-1.5">
                    <img src="@/assets/favicon.svg" alt="logo" class="w-6"/>
                </span>
                <span class="flex flex-col leading-none">
                    <span class="tdr-display text-base sm:text-lg group-hover:text-tdr-yellow transition-colors">cleguen.com</span>
                    <span class="tdr-label text-tdr-grey mt-1">CLG-01 // 開発者</span>
                </span>
            </RouterLink>
            <div class="flex items-stretch">
                <RouterLink to="/blog" class="tdr-label text-xs! flex items-center px-4 hover:bg-tdr-yellow hover:text-tdr-black transition-colors">
                    {{ t('blog.nav') }}
                </RouterLink>
                <Language />
            </div>
        </div>
    </nav>
</template>

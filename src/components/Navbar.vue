<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import Language from "@/components/Language.vue";
const { t } = useI18n()
</script>

<template>
    <div class="flex items-center justify-center">
        <RouterLink to="/" class="flex items-center justify-center text-gray-700 hover:text-gray-800 m-2 me-8">
            <img src="@/assets/favicon.svg" alt="logo" class="w-8 me-2.5 drop-shadow"/>
            <p class="font-bold text-xl">cleguen.com</p>
        </RouterLink>
        <RouterLink to="/blog" class="text-gray-700 hover:text-amber-600 font-medium m-2 me-8">
            {{ t('blog.nav') }}
        </RouterLink>
        <Language />
    </div>
</template>
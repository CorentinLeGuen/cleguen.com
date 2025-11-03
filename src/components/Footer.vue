<script setup lang="ts">
import { useI18n } from 'vue-i18n'
const {t} = useI18n()
</script>


<template>
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 lg:py-12 flex items-center justify-between text-sm text-gray-700 border-t border-gray-200">

        <div class="flex flex-wrap items-center space-x-4">
            <p>&copy; <strong>Corentin Le Guen</strong> - {{ t('legal.rights') }}</p>
            <a href="https://github.com/CorentinLeGuen/cleguen.com" target="_blank" class="text-gray-500 text-xs font-light hover:underline">
                {{ t('about.website_sources') }}
            </a>
        </div>
        
        <div class="flex flex-wrap items-center space-x-4">
            <RouterLink to="/legal">
                {{ t('legal.title') }}
            </RouterLink>
        </div>
    </div>
</template>
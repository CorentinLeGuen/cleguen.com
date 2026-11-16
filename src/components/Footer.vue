<script setup lang="ts">
import { useI18n } from 'vue-i18n'
const {t} = useI18n()
</script>


<template>
    <footer class="bg-xm-abyss text-xm-snow mt-12">
        <div class="h-2 xm-candy" aria-hidden="true"></div>
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12 flex flex-wrap items-end justify-between gap-6 text-sm">
            <div class="space-y-2">
                <p class="xm-display text-2xl sm:text-3xl text-xm-gold">CLG<span class="text-xm-berry">/</span>01</p>
                <p>&copy; <strong>Corentin Le Guen</strong> — {{ t('legal.rights') }}</p>
                <a href="https://github.com/CorentinLeGuen/cleguen.com" target="_blank" class="xm-label text-xm-mist hover:text-xm-gold">
                    {{ t('about.website_sources') }} &rarr;
                </a>
            </div>

            <div class="flex flex-col items-end gap-2">
                <RouterLink to="/legal" class="xm-label text-xs! border border-xm-snow px-3 py-2 hover:bg-xm-berry hover:text-xm-abyss hover:border-xm-berry transition-colors">
                    {{ t('legal.title') }}
                </RouterLink>
                <span class="xm-label text-xm-mist">Quality assured // 品質保証</span>
            </div>
        </div>
    </footer>
</template>

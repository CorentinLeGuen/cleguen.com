<script setup lang="ts">
import { useI18n } from 'vue-i18n'
const {t} = useI18n()
</script>


<template>
    <footer class="bg-tdr-black text-tdr-white mt-12">
        <div class="h-2 tdr-hazard" aria-hidden="true"></div>
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12 flex flex-wrap items-end justify-between gap-6 text-sm">
            <div class="space-y-2">
                <p class="tdr-display text-2xl sm:text-3xl text-tdr-yellow">CLG<span class="text-tdr-red">/</span>01</p>
                <p>&copy; <strong>Corentin Le Guen</strong> — {{ t('legal.rights') }}</p>
                <a href="https://github.com/CorentinLeGuen/cleguen.com" target="_blank" class="tdr-label text-tdr-grey hover:text-tdr-yellow">
                    {{ t('about.website_sources') }} &rarr;
                </a>
            </div>

            <div class="flex flex-col items-end gap-2">
                <RouterLink to="/legal" class="tdr-label text-xs! border border-tdr-white px-3 py-2 hover:bg-tdr-red hover:border-tdr-red transition-colors">
                    {{ t('legal.title') }}
                </RouterLink>
                <span class="tdr-label text-tdr-grey">Quality assured // 品質保証</span>
            </div>
        </div>
    </footer>
</template>

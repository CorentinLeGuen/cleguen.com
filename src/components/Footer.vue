<script setup lang="ts">
import { useI18n } from 'vue-i18n'
const {t} = useI18n()
</script>


<template>
    <footer class="bg-hw-abyss text-hw-bone mt-12">
        <div class="h-2 hw-hazard" aria-hidden="true"></div>
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12 flex flex-wrap items-end justify-between gap-6 text-sm">
            <div class="space-y-2">
                <p class="hw-display text-2xl sm:text-3xl text-hw-slime">CLG<span class="text-hw-pumpkin">/</span>01</p>
                <p>&copy; <strong>Corentin Le Guen</strong> — {{ t('legal.rights') }}</p>
                <a href="https://github.com/CorentinLeGuen/cleguen.com" target="_blank" class="hw-label text-hw-mist hover:text-hw-slime">
                    {{ t('about.website_sources') }} &rarr;
                </a>
            </div>

            <div class="flex flex-col items-end gap-2">
                <RouterLink to="/legal" class="hw-label text-xs! border border-hw-bone px-3 py-2 hover:bg-hw-pumpkin hover:text-hw-abyss hover:border-hw-pumpkin transition-colors">
                    {{ t('legal.title') }}
                </RouterLink>
                <span class="hw-label text-hw-mist">Quality assured // 品質保証</span>
            </div>
        </div>
    </footer>
</template>

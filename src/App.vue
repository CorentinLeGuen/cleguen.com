<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import Language from './components/Language.vue';
const {t, locale} = useI18n()

</script>

<template>
  <main>
    <Language />
    <RouterView />
  </main>
</template>

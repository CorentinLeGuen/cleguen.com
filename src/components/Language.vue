<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { ref, watch } from 'vue'

const { locale } = useI18n()

const languages = {
    en: 'English',
    fr: 'Français',
}

const currentLocale = ref(localStorage.getItem('locale') || locale.value)

const updateLanguage = () => {
  locale.value = currentLocale.value
  localStorage.setItem('locale', currentLocale.value)
}

watch(locale, newVal => {
  currentLocale.value = newVal
})

</script>

<template>
  <div>
    <select v-model="currentLocale" @change="updateLanguage">
      <option v-for="(label, code) in languages" :key="code" :value="code">
        {{ label }}
      </option>
    </select>
  </div>
</template>
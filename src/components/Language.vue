<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { watch, onMounted } from 'vue'

const { locale } = useI18n()

const languages: Record<string, { label: string; name: string }> = {
  en: { label: 'EN', name: 'English' },
  fr: { label: 'FR', name: 'Français' },
}

const applyLocale = (code: string) => {
  locale.value = code
  document.documentElement.lang = code
}

onMounted(() => {
  const savedLocale = localStorage.getItem('locale')
  if (savedLocale && savedLocale in languages) {
    applyLocale(savedLocale)
  } else {
    document.documentElement.lang = locale.value
  }
})

const changeLanguage = (code: string) => {
  applyLocale(code)
  localStorage.setItem('locale', code)
}

watch(locale, (newValue) => {
  document.documentElement.lang = newValue
})
</script>

<template>
  <div class="flex items-stretch">
    <ul class="flex items-stretch">
      <li v-for="(lang, code) in languages" :key="code" class="flex items-stretch">
        <button
          v-if="locale !== code"
          type="button"
          :aria-label="`Switch language to ${lang.name}`"
          @click="changeLanguage(code)"
          class="tdr-label text-xs! px-4 bg-tdr-red text-tdr-white hover:cursor-pointer hover:bg-tdr-yellow hover:text-tdr-black transition-colors"
        >
          {{ lang.label }}
        </button>
      </li>
    </ul>
  </div>
</template>

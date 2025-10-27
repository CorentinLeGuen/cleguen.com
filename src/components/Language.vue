<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { ref, watch, onMounted } from 'vue'

const { locale } = useI18n()

const languages = {
    en: 'EN',
    fr: 'FR',
}

const currentLocale = ref(locale.value)

onMounted(() => {
  const savedLocale = localStorage.getItem('locale')
  if (savedLocale && (savedLocale === 'en' || savedLocale === 'fr')) {
    currentLocale.value = savedLocale
    locale.value = savedLocale
  }
})

const changeLanguage = (code: string) => {
  currentLocale.value = code
  locale.value = code
  localStorage.setItem('locale', code)
}

watch(locale, (newValue) => {
  currentLocale.value = newValue
})

</script>

<template>
  <div class="mt-1 text-gray-600">
    <ul class="flex">
        <li
            v-for="(label, code) in languages" 
            :key="code" 
            @click="changeLanguage(code)" 
            :class="[
                'hover:cursor-pointer',
                currentLocale === code ? 'hidden' : ''
            ]"
        >
            {{ label }}
        </li>
    </ul>
  </div>
</template>
<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { ref, watch } from 'vue'

const { locale } = useI18n()

const languages = {
    en: 'EN',
    fr: 'FR',
}

const currentLocale = ref(localStorage.getItem('locale') || locale.value)

const changeLanguage = (code: string) => {
    currentLocale.value = code
    updateLanguage()
}

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
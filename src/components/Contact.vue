<script setup lang="ts">
import { useI18n } from 'vue-i18n'
const {t} = useI18n()
</script>

<template>
    <form action="https://formspree.io/f/xpwpypbj" method="POST" class="text-gray-600 flex flex-col space-y-2 border border-gray-200 bg-white/30 backdrop-blur-md rounded shadow px-4 py-2 my-4">
        <h1 class="text-xl text-bold">{{ t('contact.title') }}</h1>
        <input type="email" name="email" required placeholder="contact@email.com" class="rounded border-gray-100 bg-transparent"/>
        <textarea required name="message" placeholder="..."  class="rounded border-gray-100 bg-transparent"/>
        <button class="border border-gray-200 text-gray-600 transition duration-300 ease-in-out hover:shadow hover:cursor-pointer">{{ t('contact.send') }}</button>
        <p v-html="t('contact.legal')" class="text-sm text-gray-600"></p>
    </form>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'
const { t } = useI18n()

const FORMSPREE_ENDPOINT = 'https://formspree.io/f/xpwpypbj'

type Status = 'idle' | 'sending' | 'success' | 'error'
const status = ref<Status>('idle')

const onSubmit = async (event: Event) => {
  const form = event.target as HTMLFormElement
  status.value = 'sending'
  try {
    const response = await fetch(FORMSPREE_ENDPOINT, {
      method: 'POST',
      body: new FormData(form),
      headers: { Accept: 'application/json' },
    })
    if (response.ok) {
      status.value = 'success'
      form.reset()
    } else {
      status.value = 'error'
    }
  } catch {
    status.value = 'error'
  }
}
</script>

<template>
    <form @submit.prevent="onSubmit" class="text-gray-600 flex flex-col space-y-2 border border-gray-200 bg-white/30 backdrop-blur-md rounded shadow px-4 py-2 my-4">
        <h1 class="text-xl text-bold">{{ t('contact.title') }}</h1>
        <input type="email" name="email" required placeholder="contact@email.com" class="rounded border-gray-100 bg-transparent"/>
        <textarea required name="message" placeholder="..."  class="rounded border-gray-100 bg-transparent"/>
        <button
            type="submit"
            :disabled="status === 'sending'"
            class="border border-gray-200 text-gray-600 transition duration-300 ease-in-out hover:shadow hover:cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
        >
            {{ status === 'sending' ? t('contact.sending') : t('contact.send') }}
        </button>
        <p v-if="status === 'success'" role="status" class="text-sm text-green-600">{{ t('contact.success') }}</p>
        <p v-if="status === 'error'" role="alert" class="text-sm text-red-600">{{ t('contact.error') }}</p>
    </form>
</template>

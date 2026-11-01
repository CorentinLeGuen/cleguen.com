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
    <form @submit.prevent="onSubmit" class="flex flex-col bg-tdr-white border-2 border-tdr-black tdr-shadow my-6">
        <div class="flex items-center justify-between bg-tdr-red text-tdr-white px-4 py-2">
            <h1 class="tdr-display text-lg">{{ t('contact.title') }}</h1>
            <span class="tdr-label">TX // 送信</span>
        </div>
        <div class="flex flex-col gap-3 p-4">
            <input type="email" name="email" required placeholder="contact@email.com" class="font-mono border-2 border-tdr-black rounded-none bg-tdr-paper focus:ring-0 focus:border-tdr-red"/>
            <textarea required name="message" placeholder="..." rows="4" class="font-mono border-2 border-tdr-black rounded-none bg-tdr-paper focus:ring-0 focus:border-tdr-red"/>
            <button
                type="submit"
                :disabled="status === 'sending'"
                class="tdr-display text-sm py-3 bg-tdr-black text-tdr-yellow transition-colors hover:bg-tdr-yellow hover:text-tdr-black hover:cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
            >
                {{ status === 'sending' ? t('contact.sending') : t('contact.send') }}
            </button>
            <p v-if="status === 'success'" role="status" class="tdr-label text-xs! bg-tdr-yellow px-3 py-2">{{ t('contact.success') }}</p>
            <p v-if="status === 'error'" role="alert" class="tdr-label text-xs! bg-tdr-red text-tdr-white px-3 py-2">{{ t('contact.error') }}</p>
        </div>
    </form>
</template>

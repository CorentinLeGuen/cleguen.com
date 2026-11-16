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
    <form @submit.prevent="onSubmit" class="flex flex-col bg-xm-pine border-2 border-xm-holly xm-shadow my-6">
        <div class="flex items-center justify-between bg-xm-berry text-xm-abyss px-4 py-2">
            <h1 class="xm-display text-lg">{{ t('contact.title') }}</h1>
            <span class="xm-label">🎄 TX // 送信</span>
        </div>
        <div class="flex flex-col gap-3 p-4">
            <input type="email" name="email" required placeholder="contact@email.com" class="font-mono border-2 border-xm-holly rounded-none bg-xm-night text-xm-snow placeholder:text-xm-mist focus:ring-0 focus:border-xm-berry"/>
            <textarea required name="message" placeholder="..." rows="4" class="font-mono border-2 border-xm-holly rounded-none bg-xm-night text-xm-snow placeholder:text-xm-mist focus:ring-0 focus:border-xm-berry"/>
            <button
                type="submit"
                :disabled="status === 'sending'"
                class="xm-display text-sm py-3 bg-xm-abyss text-xm-gold transition-colors hover:bg-xm-gold hover:text-xm-abyss hover:cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
            >
                {{ status === 'sending' ? t('contact.sending') : t('contact.send') }}
            </button>
            <p v-if="status === 'success'" role="status" class="xm-label text-xs! bg-xm-gold text-xm-abyss px-3 py-2">{{ t('contact.success') }}</p>
            <p v-if="status === 'error'" role="alert" class="xm-label text-xs! bg-xm-berry text-xm-abyss px-3 py-2">{{ t('contact.error') }}</p>
        </div>
    </form>
</template>

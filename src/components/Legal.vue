<script setup lang="ts">
import { useI18n } from 'vue-i18n'
const {t} = useI18n()

document.title = 'Legal'

</script>

<template>
    <div class="my-8 mx-auto text-gray-700">
        <h1 class="mb-6 text-3xl font-bold">{{t('legal.title')}}</h1>

        <section class="mb-8">
            <h2 class="mb-2 text-xl font-semibold">{{t('legal.publisher.title')}}</h2>
            <p v-html="t('legal.publisher.text')"></p>
        </section>

        <section class="mb-8">
            <h2 class="mb-2 text-xl font-semibold">{{t('legal.hosting.title')}}</h2>
            <p>{{t('legal.hosting.text')}}</p>
        </section>

        <section class="mb-8">
            <h2 class="mb-2 text-xl font-semibold">{{t('legal.ip.title')}}</h2>
            <p>{{t('legal.ip.text')}}</p>
        </section>

        <section class="mb-8">
            <h2 class="mb-2 text-xl font-semibold">{{t('legal.rgpd.title')}}</h2>
            <p class="mb-2">{{t('legal.rgpd.text1')}}</p>
            <p>{{t('legal.rgpd.text2')}}</p>
        </section>

        <section class="mb-8">
            <h2 class="mb-2 text-xl font-semibold">{{t('legal.liability.title')}}</h2>
            <p>{{t('legal.liability.text')}}</p>
        </section>

        <section>
            <h2 class="mb-2 text-xl font-semibold">{{t('legal.updated.title')}}</h2>
            <p>{{t('legal.updated.date')}}</p>
        </section>
    </div>
</template>
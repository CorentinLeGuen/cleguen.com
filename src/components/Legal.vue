<script setup lang="ts">
import { useI18n } from 'vue-i18n'
const {t} = useI18n()
import Contact from "@/components/Contact.vue"
</script>

<template>
    <div class="my-12 max-w-full sm:max-w-3/4 md:max-w-2/3 xl:max-w-1/2 mx-auto text-xm-frost">
        <span class="xm-label text-xm-berry">Notice // 法的</span>
        <h1 class="xm-display mb-8 text-3xl md:text-4xl text-xm-snow">{{t('legal.title')}}</h1>

        <section class="mb-8">
            <h2 class="mb-2 inline-block bg-xm-abyss text-xm-snow px-2 py-1 text-lg font-bold uppercase">{{t('legal.publisher.title')}}</h2>
            <p v-html="t('legal.publisher.text')"></p>
        </section>

        <Contact />

        <section class="mb-8">
            <h2 class="mb-2 inline-block bg-xm-abyss text-xm-snow px-2 py-1 text-lg font-bold uppercase">{{t('legal.hosting.title')}}</h2>
            <p>{{t('legal.hosting.text')}}</p>
        </section>

        <section class="mb-8">
            <h2 class="mb-2 inline-block bg-xm-abyss text-xm-snow px-2 py-1 text-lg font-bold uppercase">{{t('legal.ip.title')}}</h2>
            <p>{{t('legal.ip.text')}}</p>
        </section>

        <section class="mb-8">
            <h2 class="mb-2 inline-block bg-xm-abyss text-xm-snow px-2 py-1 text-lg font-bold uppercase">{{t('legal.rgpd.title')}}</h2>
            <p class="mb-2">{{t('legal.rgpd.text1')}}</p>
            <p>{{t('legal.rgpd.text2')}}</p>
        </section>

        <section class="mb-8">
            <h2 class="mb-2 inline-block bg-xm-abyss text-xm-snow px-2 py-1 text-lg font-bold uppercase">{{t('legal.liability.title')}}</h2>
            <p>{{t('legal.liability.text')}}</p>
        </section>

        <section>
            <h2 class="mb-2 inline-block bg-xm-abyss text-xm-snow px-2 py-1 text-lg font-bold uppercase">{{t('legal.updated.title')}}</h2>
            <p>{{t('legal.updated.date')}}</p>
        </section>
    </div>
</template>
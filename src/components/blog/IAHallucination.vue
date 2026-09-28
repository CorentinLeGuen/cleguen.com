<script setup lang="ts">
import { useI18n } from 'vue-i18n'
const {t} = useI18n()
import Contact from '@/components/Contact.vue'
</script>

<template>
    <article class="my-12 px-6 md:px-10 py-8 max-w-full sm:max-w-3/4 md:max-w-2/3 mx-auto bg-tdr-white border-2 border-tdr-black tdr-shadow">
        <h1 class="tdr-display my-4 text-2xl md:text-4xl break-words">{{ t('blog.2.title') }}</h1>
        <p class="tdr-label text-tdr-grey">{{ t('blog.2.date_publication') }}</p>
        <p class="tdr-label text-tdr-grey">{{ t('blog.2.date_update') }}</p>
        <section class="my-4 space-y-2.5 text-justify">
            <h2 class="text-left text-2xl font-bold uppercase border-l-8 border-tdr-red pl-3 mt-6">{{ t('blog.2.content.1.title') }}</h2>
            <p v-html="t('blog.2.content.1.p_1')" class="text-tdr-steel"></p>
            <p v-html="t('blog.2.content.1.p_2')" class="text-tdr-steel"></p>
            <p v-html="t('blog.2.content.1.p_3')" class="italic text-tdr-grey border-l-4 border-tdr-yellow pl-3"></p>
        </section>
        <div class="my-8 h-2 tdr-hazard" aria-hidden="true"></div>
        <section class="my-4 space-y-2.5 text-justify">
            <h2 class="text-left text-2xl font-bold uppercase border-l-8 border-tdr-red pl-3 mt-6">{{ t('blog.2.content.2.title') }}</h2>
            <p v-html="t('blog.2.content.2.p_1')" class="text-tdr-steel"></p>
            <p v-html="t('blog.2.content.2.p_1_c')" class="italic text-tdr-grey border-l-4 border-tdr-yellow pl-3"></p>
            <p v-html="t('blog.2.content.2.p_2')" class="text-tdr-steel"></p>
            <img src="@/assets/images/blog/2/capture-chatgpt-1.webp" alt="ChatGPT suggesting a cargo check -W unused-dependencies command" loading="lazy" decoding="async" class="my-4 border-2 border-tdr-black"/>
            <p v-html="t('blog.2.content.2.p_3')" class="text-tdr-steel"></p>
            <img src="@/assets/images/blog/2/capture-terminal-1.webp" alt="Terminal showing the cargo check -W unused-dependencies command failing because it does not exist" loading="lazy" decoding="async" class="my-4 border-2 border-tdr-black"/>
            <p v-html="t('blog.2.content.2.p_4')" class="text-tdr-steel"></p>
            <img src="@/assets/images/blog/2/capture-chatgpt-2.webp" alt="ChatGPT confirming the hallucinated cargo command does not exist" loading="lazy" decoding="async" class="my-4 border-2 border-tdr-black"/>
            <p v-html="t('blog.2.content.2.p_5')" class="text-tdr-steel"></p>
        </section>
        <div class="my-8 h-2 tdr-hazard" aria-hidden="true"></div>
        <section class="my-4 space-y-2.5 text-justify">
            <h2 class="text-left text-2xl font-bold uppercase border-l-8 border-tdr-red pl-3 mt-6">{{ t('blog.2.content.3.title') }}</h2>
            <p v-html="t('blog.2.content.3.p_1')" class="text-tdr-steel"></p>
            <p v-html="t('blog.2.content.3.p_2')" class="text-tdr-steel"></p>
            <p v-html="t('blog.2.content.3.p_3')" class="text-tdr-steel"></p>
            <p v-html="t('blog.2.content.3.p_4')" class="text-tdr-steel"></p>
            <p v-html="t('blog.2.content.3.p_5')" class="text-tdr-steel"></p>
        </section>
        <div class="my-8 h-2 tdr-hazard" aria-hidden="true"></div>
        <section class="my-4 space-y-2.5 text-justify">
            <h2 class="text-left text-2xl font-bold uppercase border-l-8 border-tdr-red pl-3 mt-6">{{ t('blog.2.content.4.title') }}</h2>
            <p v-html="t('blog.2.content.4.p_1')" class="text-tdr-steel"></p>
            <p v-html="t('blog.2.content.4.p_2')" class="text-tdr-steel"></p>
            <p v-html="t('blog.2.content.4.p_3')" class="text-tdr-steel"></p>
        </section>
        <div class="my-8 h-2 tdr-hazard" aria-hidden="true"></div>
        <section class="my-4 space-y-2.5 text-justify">
            <h2 class="text-left text-2xl font-bold uppercase border-l-8 border-tdr-red pl-3 mt-6">{{ t('blog.2.content.5.title') }}</h2>
            <p v-html="t('blog.2.content.5.p_1')" class="text-tdr-steel"></p>
            <p v-html="t('blog.2.content.5.p_2')" class="text-tdr-steel"></p>
            <p v-html="t('blog.2.content.5.p_3')" class="text-tdr-steel"></p>
        </section>
        <Contact />
    </article>
</template>
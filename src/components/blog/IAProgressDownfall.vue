<script setup lang="ts">
import { useI18n } from 'vue-i18n'
const {t} = useI18n()
import Contact from '@/components/Contact.vue'
</script>

<template>
    <article class="my-12 px-6 md:px-10 py-8 max-w-full sm:max-w-3/4 md:max-w-2/3 mx-auto bg-hw-crypt border-2 border-hw-grave hw-shadow">
        <h1 class="hw-display my-4 text-2xl md:text-4xl break-words">{{ t('blog.1.title') }}</h1>
        <p class="hw-label text-hw-mist">{{ t('blog.1.date_publication') }}</p>
        <section class="my-4 space-y-2.5 text-justify">
            <h2 class="text-left text-2xl font-bold uppercase border-l-8 border-hw-pumpkin pl-3 mt-6">{{ t('blog.1.content.1.title') }}</h2>
            <p class="text-hw-fog">{{ t('blog.1.content.1.p_1') }}</p>
            <p class="text-hw-fog">{{ t('blog.1.content.1.p_2') }}</p>
            <img src="@/assets/images/blog/1/ai-ghibli-style-prompt.webp" alt="Screenshot of a ChatGPT prompt generating Studio Ghibli-style artwork" loading="lazy" decoding="async" class="my-4 border-2 border-hw-grave"/>
            <p v-html="t('blog.1.content.1.p_3')" class="text-hw-fog"></p>
            <p class="text-hw-fog">{{ t('blog.1.content.1.p_4') }}</p>
        </section>
        <div class="my-8 h-2 hw-hazard" aria-hidden="true"></div>
        <section class="my-4 space-y-2.5 text-justify">
            <h2 class="text-left text-2xl font-bold uppercase border-l-8 border-hw-pumpkin pl-3 mt-6">{{ t('blog.1.content.2.title') }}</h2>
            <p class="text-hw-fog">{{ t('blog.1.content.2.p_1') }}</p>
            <p v-html="t('blog.1.content.2.p_2')" class="text-hw-fog"></p>
            <iframe class="mx-auto w-full h-56 md:h-72 xl:h-96" src="https://www.youtube.com/embed/eNsOpmRqOjA?si=o3k-P3jXkbnKc2Ml" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            <p class="text-hw-fog">{{ t('blog.1.content.2.p_3') }}</p>
        </section>
        <div class="my-8 h-2 hw-hazard" aria-hidden="true"></div>
        <section class="my-4 space-y-2.5 text-justify">
            <h2 class="text-left text-2xl font-bold uppercase border-l-8 border-hw-pumpkin pl-3 mt-6">{{ t('blog.1.content.3.title') }}</h2>
            <p class="text-hw-fog">{{ t('blog.1.content.3.p_1') }}</p>
            <p class="text-hw-fog">{{ t('blog.1.content.3.p_2') }}</p>
            <p class="text-hw-fog">{{ t('blog.1.content.3.p_3') }}</p>
            <iframe class="mx-auto w-full h-56 md:h-72 xl:h-96" src="https://www.youtube.com/embed/R2fjRbc9Sa0?si=0C4eMWIxKSJTr3I4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            <p class="text-hw-fog">{{ t('blog.1.content.3.p_4') }}</p>
            <p class="text-hw-fog">{{ t('blog.1.content.3.p_5') }}</p>
            <p class="text-hw-fog">{{ t('blog.1.content.3.p_6') }}</p>
            <p class="text-hw-fog">{{ t('blog.1.content.3.p_7') }}</p>
        </section>
        <div class="my-8 h-2 hw-hazard" aria-hidden="true"></div>
        <section class="my-4 space-y-2.5 text-justify">
            <h2 class="text-left text-2xl font-bold uppercase border-l-8 border-hw-pumpkin pl-3 mt-6">{{ t('blog.1.content.4.title') }}</h2>
            <p class="text-hw-fog">{{ t('blog.1.content.4.p_1') }}</p>
            <p v-html="t('blog.1.content.4.p_2')" class="text-hw-fog"></p>
            <img src="@/assets/images/blog/1/tay-chatbot-racist-behavior.webp" alt="Screenshot of Microsoft's Tay chatbot posting offensive tweets" loading="lazy" decoding="async" class="my-4 border-2 border-hw-grave"/>
            <p v-html="t('blog.1.content.4.p_3')" class="text-hw-fog"></p>
            <p v-html="t('blog.1.content.4.p_4')" class="text-hw-fog"></p>
            <p class="text-hw-fog">{{ t('blog.1.content.4.p_5') }}</p>
        </section>
        <div class="my-8 h-2 hw-hazard" aria-hidden="true"></div>
        <section class="my-4 space-y-2.5 text-justify">
            <h2 class="text-left text-2xl font-bold uppercase border-l-8 border-hw-pumpkin pl-3 mt-6">{{ t('blog.1.content.5.title') }}</h2>
            <p class="text-hw-fog">{{ t('blog.1.content.5.p_1') }}</p>
            <p v-html="t('blog.1.content.5.p_2')" class="text-hw-fog"></p>
            <ul class="ml-4 list-disc space-y-2">
                <li class="text-hw-fog">{{ t('blog.1.content.5.p_3') }}</li>
                <li class="text-hw-fog">{{ t('blog.1.content.5.p_4') }}</li>
                <li class="text-hw-fog">{{ t('blog.1.content.5.p_5') }}</li>
                <li class="text-hw-fog">{{ t('blog.1.content.5.p_6') }}</li>
                <li class="text-hw-fog">{{ t('blog.1.content.5.p_7') }}</li>
                <li class="text-hw-fog">{{ t('blog.1.content.5.p_8') }}</li>
            </ul>
            <p v-html="t('blog.1.content.5.p_9')" class="text-hw-fog"></p>
            <ul class="ml-4 list-disc space-y-2">
                <li class="text-hw-fog">{{ t('blog.1.content.5.p_10') }}</li>
                <li class="text-hw-fog">{{ t('blog.1.content.5.p_11') }}</li>
                <li class="text-hw-fog">{{ t('blog.1.content.5.p_12') }}</li>
            </ul>
            <p v-html="t('blog.1.content.5.p_13')" class="text-hw-fog"></p>
            <p v-html="t('blog.1.content.5.p_14')" class="text-hw-fog"></p>
            <p v-html="t('blog.1.content.5.p_15')" class="text-hw-fog"></p>
            <ul class="ml-4 list-disc space-y-2">
                <li v-html="t('blog.1.content.5.p_16')" class="text-hw-fog"></li>
                <li v-html="t('blog.1.content.5.p_17')" class="text-hw-fog"></li>
                <li v-html="t('blog.1.content.5.p_18')" class="text-hw-fog"></li>
            </ul>
        </section>
        <div class="my-8 h-2 hw-hazard" aria-hidden="true"></div>
        <section class="my-4 space-y-2.5 text-justify">
            <h2 class="text-left text-2xl font-bold uppercase border-l-8 border-hw-pumpkin pl-3 mt-6">{{ t('blog.1.content.6.title') }}</h2>
            <p class="text-hw-fog">{{ t('blog.1.content.6.p_1') }}</p>
            <p class="text-hw-fog">{{ t('blog.1.content.6.p_2') }}</p>
            <ul class="ml-4 list-disc space-y-2">
                <li class="text-hw-fog">{{ t('blog.1.content.6.p_3') }}</li>
                <li class="text-hw-fog">{{ t('blog.1.content.6.p_4') }}</li>
                <li class="text-hw-fog">{{ t('blog.1.content.6.p_5') }}</li>
                <li class="text-hw-fog">{{ t('blog.1.content.6.p_6') }}</li>
            </ul>
            <img src="@/assets/images/blog/1/screenshot-twitter-russian-bot.webp" alt="Screenshot of a Twitter bot exposed as a Russian propaganda account" loading="lazy" decoding="async" class="w-full md:w-3/4 xl:w-1/2 mx-auto my-4"/>
            <p class="text-hw-fog">{{ t('blog.1.content.6.p_7') }}</p>
            <p class="text-hw-fog">{{ t('blog.1.content.6.p_8') }}</p>
        </section>
        <div class="my-8 h-2 hw-hazard" aria-hidden="true"></div>
        <section class="my-4 space-y-2.5 text-justify">
            <h2 class="text-left text-2xl font-bold uppercase border-l-8 border-hw-pumpkin pl-3 mt-6">{{ t('blog.1.content.7.title') }}</h2>
            <p class="text-hw-fog">{{ t('blog.1.content.7.p_1') }}</p>
            <p class="text-hw-fog">{{ t('blog.1.content.7.p_2') }}</p>
            <p class="text-hw-fog">{{ t('blog.1.content.7.p_3') }}</p>
            <p class="text-hw-fog">{{ t('blog.1.content.7.p_4') }}</p>
            <p class="text-hw-fog">{{ t('blog.1.content.7.p_5') }}</p>
            <p class="text-hw-fog">{{ t('blog.1.content.7.p_6') }}</p>
            <p class="text-hw-fog">{{ t('blog.1.content.7.p_7') }}</p>
        </section>
        <Contact />
    </article>
</template>
<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import Contact from '../Contact.vue';
const {t} = useI18n()


document.title = t('blog.1.title')

</script>

<template>
    <article class="px-4 py-0.5 max-w-full sm:max-w-3/4 md:max-w-2/3 mx-auto bg-white">
        <h1 class="my-4 text-4xl font-extrabold text-gray-700">{{ t('blog.1.title') }}</h1>
        <p class="italic text-sm text-gray-400">{{ t('blog.1.date_publication') }}</p>
        <section class="my-4 space-y-2.5 text-justify">
            <h2 class="text-2xl font-bold text-gray-700">{{ t('blog.1.content.1.title') }}</h2>
            <p class="text-gray-600">{{ t('blog.1.content.1.p_1') }}</p>
            <p class="text-gray-600">{{ t('blog.1.content.1.p_2') }}</p>
            <img src="@/assets/images/blog/1/ai-ghibli-style-prompt.png" title="screenshot ChatGPT prompt art" class="my-4"/>
            <p v-html="t('blog.1.content.1.p_3')" class="text-gray-600"></p>
            <p class="text-gray-600">{{ t('blog.1.content.1.p_4') }}</p>
        </section>
        <hr class="my-4 text-gray-200" />
        <section class="my-4 space-y-2.5 text-justify">
            <h2 class="text-2xl text-left font-bold text-gray-700">{{ t('blog.1.content.2.title') }}</h2>
            <p class="text-gray-600">{{ t('blog.1.content.2.p_1') }}</p>
            <p v-html="t('blog.1.content.2.p_2')" class="text-gray-600"></p>
            <iframe class="mx-auto w-full h-56 md:h-72 xl:h-96" src="https://www.youtube.com/embed/eNsOpmRqOjA?si=o3k-P3jXkbnKc2Ml" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            <p class="text-gray-600">{{ t('blog.1.content.2.p_3') }}</p>
        </section>
        <hr class="my-4 text-gray-200" />
        <section class="my-4 space-y-2.5 text-justify">
            <h2 class="text-2xl text-left font-bold text-gray-700">{{ t('blog.1.content.3.title') }}</h2>
            <p class="text-gray-600">{{ t('blog.1.content.3.p_1') }}</p>
            <p class="text-gray-600">{{ t('blog.1.content.3.p_2') }}</p>
            <p class="text-gray-600">{{ t('blog.1.content.3.p_3') }}</p>
            <iframe class="mx-auto w-full h-56 md:h-72 xl:h-96" src="https://www.youtube.com/embed/R2fjRbc9Sa0?si=0C4eMWIxKSJTr3I4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            <p class="text-gray-600">{{ t('blog.1.content.3.p_4') }}</p>
            <p class="text-gray-600">{{ t('blog.1.content.3.p_5') }}</p>
            <p class="text-gray-600">{{ t('blog.1.content.3.p_6') }}</p>
            <p class="text-gray-600">{{ t('blog.1.content.3.p_7') }}</p>
        </section>
        <hr class="my-4 text-gray-200" />
        <section class="my-4 space-y-2.5 text-justify">
            <h2 class="text-2xl text-left font-bold text-gray-700">{{ t('blog.1.content.4.title') }}</h2>
            <p class="text-gray-600">{{ t('blog.1.content.4.p_1') }}</p>
            <p v-html="t('blog.1.content.4.p_2')" class="text-gray-600"></p>
            <img src="@/assets/images/blog/1/tay-chatbot-racist-behavior.png" title="screenshot twitter bot" class="my-4"/>
            <p v-html="t('blog.1.content.4.p_3')" class="text-gray-600"></p>
            <p v-html="t('blog.1.content.4.p_4')" class="text-gray-600"></p>
            <p class="text-gray-600">{{ t('blog.1.content.4.p_5') }}</p>
        </section>
        <hr class="my-4 text-gray-200" />
        <section class="my-4 space-y-2.5 text-justify">
            <h2 class="text-2xl text-left font-bold text-gray-700">{{ t('blog.1.content.5.title') }}</h2>
            <p class="text-gray-600">{{ t('blog.1.content.5.p_1') }}</p>
            <p v-html="t('blog.1.content.5.p_2')" class="text-gray-600"></p>
            <ul class="ml-4 list-disc space-y-2">
                <li class="text-gray-600">{{ t('blog.1.content.5.p_3') }}</li>
                <li class="text-gray-600">{{ t('blog.1.content.5.p_4') }}</li>
                <li class="text-gray-600">{{ t('blog.1.content.5.p_5') }}</li>
                <li class="text-gray-600">{{ t('blog.1.content.5.p_6') }}</li>
                <li class="text-gray-600">{{ t('blog.1.content.5.p_7') }}</li>
                <li class="text-gray-600">{{ t('blog.1.content.5.p_8') }}</li>
            </ul>
            <p v-html="t('blog.1.content.5.p_9')" class="text-gray-600"></p>
            <ul class="ml-4 list-disc space-y-2">
                <li class="text-gray-600">{{ t('blog.1.content.5.p_10') }}</li>
                <li class="text-gray-600">{{ t('blog.1.content.5.p_11') }}</li>
                <li class="text-gray-600">{{ t('blog.1.content.5.p_12') }}</li>
            </ul>
            <p v-html="t('blog.1.content.5.p_13')" class="text-gray-600"></p>
            <p v-html="t('blog.1.content.5.p_14')" class="text-gray-600"></p>
            <p v-html="t('blog.1.content.5.p_15')" class="text-gray-600"></p>
            <ul class="ml-4 list-disc space-y-2">
                <li v-html="t('blog.1.content.5.p_16')" class="text-gray-600"></li>
                <li v-html="t('blog.1.content.5.p_17')" class="text-gray-600"></li>
                <li v-html="t('blog.1.content.5.p_18')" class="text-gray-600"></li>
            </ul>
        </section>
        <hr class="my-4 text-gray-200" />
        <section class="my-4 space-y-2.5 text-justify">
            <h2 class="text-2xl text-left font-bold text-gray-700">{{ t('blog.1.content.6.title') }}</h2>
            <p class="text-gray-600">{{ t('blog.1.content.6.p_1') }}</p>
            <p class="text-gray-600">{{ t('blog.1.content.6.p_2') }}</p>
            <ul class="ml-4 list-disc space-y-2">
                <li class="text-gray-600">{{ t('blog.1.content.6.p_3') }}</li>
                <li class="text-gray-600">{{ t('blog.1.content.6.p_4') }}</li>
                <li class="text-gray-600">{{ t('blog.1.content.6.p_5') }}</li>
                <li class="text-gray-600">{{ t('blog.1.content.6.p_6') }}</li>
            </ul>
            <img src="@/assets/images/blog/1/screenshot-twitter-russian-bot.jpg" title="screenshot twitter bot" class="w-full md:w-3/4 xl:w-1/2 mx-auto my-4"/>
            <p class="text-gray-600">{{ t('blog.1.content.6.p_7') }}</p>
            <p class="text-gray-600">{{ t('blog.1.content.6.p_8') }}</p>
        </section>
        <hr class="my-4 text-gray-200" />
        <section class="my-4 space-y-2.5 text-justify">
            <h2 class="text-2xl text-left font-bold text-gray-700">{{ t('blog.1.content.7.title') }}</h2>
            <p class="text-gray-600">{{ t('blog.1.content.7.p_1') }}</p>
            <p class="text-gray-600">{{ t('blog.1.content.7.p_2') }}</p>
            <p class="text-gray-600">{{ t('blog.1.content.7.p_3') }}</p>
            <p class="text-gray-600">{{ t('blog.1.content.7.p_4') }}</p>
            <p class="text-gray-600">{{ t('blog.1.content.7.p_5') }}</p>
            <p class="text-gray-600">{{ t('blog.1.content.7.p_6') }}</p>
            <p class="text-gray-600">{{ t('blog.1.content.7.p_7') }}</p>
        </section>
        <Contact />
    </article>
</template>
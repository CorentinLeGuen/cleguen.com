<script setup lang="ts">
import { useI18n } from 'vue-i18n'
const {t} = useI18n()
import Contact from '@/components/Contact.vue'
</script>

<template>
    <article class="px-4 py-0.5 max-w-full sm:max-w-3/4 md:max-w-2/3 mx-auto bg-white">
        <h1 class="my-4 text-4xl font-extrabold text-gray-700">{{ t('blog.2.title') }}</h1>
        <p class="italic text-sm text-gray-400">{{ t('blog.2.date_publication') }}</p>
        <section class="my-4 space-y-2.5 text-justify">
            <h2 class="text-2xl font-bold text-gray-700">{{ t('blog.2.content.1.title') }}</h2>
            <p v-html="t('blog.2.content.1.p_1')" class="text-gray-600"></p>
            <p v-html="t('blog.2.content.1.p_2')" class="text-gray-600"></p>
        </section>
        <hr class="my-4 text-gray-200" />
        <section class="my-4 space-y-2.5 text-justify">
            <h2 class="text-2xl font-bold text-gray-700">{{ t('blog.2.content.2.title') }}</h2>
            <p v-html="t('blog.2.content.2.p_1')" class="text-gray-600"></p>
            <p v-html="t('blog.2.content.2.p_1_c')" class="italic text-gray-500"></p>
            <p v-html="t('blog.2.content.2.p_2')" class="text-gray-600"></p>
            <img src="@/assets/images/blog/2/capture-chatgpt-1.png" title="chatgpt" class="my-4"/>
            <p v-html="t('blog.2.content.2.p_3')" class="text-gray-600"></p>
            <img src="@/assets/images/blog/2/capture-terminal-1.png" title="cargo check -W unused-dependencies" class="my-4"/>
            <p v-html="t('blog.2.content.2.p_4')" class="text-gray-600"></p>
            <img src="@/assets/images/blog/2/capture-chatgpt-2.png" title="cargo check -W unused-dependencies" class="my-4"/>
            <p v-html="t('blog.2.content.2.p_5')" class="text-gray-600"></p>
        </section>
        <hr class="my-4 text-gray-200" />
        <section class="my-4 space-y-2.5 text-justify">
            <h2 class="text-2xl font-bold text-gray-700">{{ t('blog.2.content.3.title') }}</h2>
            <p v-html="t('blog.2.content.3.p_1')" class="text-gray-600"></p>
            <p v-html="t('blog.2.content.3.p_2')" class="text-gray-600"></p>
            <p v-html="t('blog.2.content.3.p_3')" class="text-gray-600"></p>
        </section>
        <Contact />
    </article>
</template>
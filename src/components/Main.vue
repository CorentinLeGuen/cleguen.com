<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import Contact from '@/components/Contact.vue'
const {t, locale} = useI18n()

</script>

<template>
    <div class="space-y-10 my-8 md:my-18 mx-auto">
        <div class="flex items-center justify-baseline max-w-full sm:max-w-1/2 mx-auto">
            <img src="@/assets/images/profile.jpeg" alt="profile picture" class="w-1/2 rounded-full drop-shadow-xl" />
            <h1 class="font-extrabold drop-shadow text-center text-4xl text-gray-700">{{ t('welcome') }}</h1>
        </div>
        <div class="max-w-full sm:max-w-1/2 text-justify mx-auto space-y-2 text-gray-700">
            <p v-html="t('about.description.1')"></p>
            <p v-html="t('about.description.2')"></p>
            <p v-html="t('about.description.3')"></p>
            <p v-html="t('about.description.4')"></p>
            <p v-html="t('about.description.5')"></p>
        </div>
        <div class="flex items-center justify-center max-w-full sm:max-w-1/2 mx-auto">
            <a href="https://www.credly.com/badges/1640cacc-f529-4c92-bcea-50b422c32a80/public_url" target="_blank">
                <img src="@/assets/images/aws-certified-developer-associate.png" alt="AWS certified logo" class="h-36 drop-shadow-lg"/>
            </a>
            <a href="https://github.com/CorentinLeGuen" target="_blank">
                <img src="@/assets/images/github.svg" alt="GitHub logo" class="h-36 drop-shadow-lg"/>
            </a>
            <a href="https://www.linkedin.com/in/corentinleguen/" target="_blank">
                <img src="@/assets/images/linkedin.svg" alt="GitHub logo" class="h-40 drop-shadow-lg"/>
            </a>
        </div>
        <div class="flex justify-between max-w-full sm:max-w-1/2 mx-auto">
            <a href="/Resume_CorentinLeGuen.pdf" download="Resume_CorentinLeGuen.pdf" target="_blank" class="w-full py-1.5 text-center text-gray-700 border border-gray-300 bg-white rounded transition duration-300 ease-in-out hover:cursor-pointer hover:shadow">
                {{ t('about.resume_download') }}
            </a>
        </div>

        <div class="max-w-full sm:max-w-1/2 mx-auto space-y-6">
            <h2 class="text-4xl font-extrabold text-gray-700 ml-4">{{ t('blog.title') }}</h2>

            <router-link to="/ia-progress-or-downfall">
                <div class="flex items-center  justify-center space-x-4 px-4 py-2 bg-white rounded border border-gray-200 transition duration-300 ease-in-out hover:shadow hover:cursor-pointer">
                    <img src="@/assets/images/blog/1/logo.svg" alt="ai progress or downfall logo" class="h-24" />
                    <div>
                        <h3 class="text-xl font-bold text-gray-700">{{ t('blog.1.title') }}</h3>
                        <p class="text-sm text-gray-600">{{ t('blog.1.description') }}</p>
                        <p class="italic text-sm text-gray-500">{{ t('blog.1.date_publication') }}</p>
                    </div>
                </div>
            </router-link>
        </div>

        <hr class="w-48 h-1 mx-auto my-4 bg-gray-300 border-0 rounded-sm md:my-10 drop-shadow"/>

        <div class="max-w-full sm:max-w-1/2 mx-auto">
            <Contact />
        </div>
    </div>
</template>
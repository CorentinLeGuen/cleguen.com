<script setup lang="ts">
import { useI18n } from 'vue-i18n'
const {t, locale} = useI18n()

</script>

<template>
    <div class="space-y-10 my-8 md:my-18 mx-auto">
        <h1 class="text-center text-4xl text-gray-700">{{ t('welcome') }}</h1>
        <div class="max-w-full sm:max-w-1/2 text-justify mx-auto space-y-2 text-gray-700">
            <p>{{ t('about.description.1') }}</p>
            <p>{{ t('about.description.2') }}</p>
            <p>{{ t('about.description.3') }}</p>
            <p>{{ t('about.description.4') }}</p>
            <p>{{ t('about.description.5') }}</p>
        </div>
        <div class="flex items-center justify-center max-w-full sm:max-w-1/2 mx-auto">
            <a href="https://www.credly.com/badges/1640cacc-f529-4c92-bcea-50b422c32a80/public_url" target="_blank">
                <img src="@/assets/images/aws-certified-developer-associate.png" alt="AWS certified logo" class="h-48 drop-shadow-lg"/>
            </a>
            <a href="https://github.com/CorentinLeGuen" target="_blank">
                <img src="@/assets/images/github.svg" alt="GitHub logo" class="h-36 drop-shadow-lg"/>
            </a>
            <a href="https://www.linkedin.com/in/corentinleguen/" target="_blank">
                <img src="@/assets/images/linkedin.svg" alt="GitHub logo" class="h-36 drop-shadow-lg"/>
            </a>
        </div>
        <div class="flex justify-between max-w-full sm:max-w-1/2 mx-auto">
            <a href="/Resume_CorentinLeGuen.pdf" download="Resume_CorentinLeGuen.pdf" target="_blank" class="w-full py-1.5 text-center text-gray-700 border border-gray-300 bg-white rounded transition duration-300 ease-in-out hover:cursor-pointer hover:shadow">
                {{ t('about.resume_download') }}
            </a>
        </div>
    </div>
</template>
<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import Contact from '@/components/Contact.vue'
import { onMounted, onUnmounted } from 'vue'

const {t} = useI18n()

let observer: IntersectionObserver | null = null;

onMounted(() => {
  const observerOptions = {
    root: null,
    threshold: 0.1
  };

  observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer?.unobserve(entry.target); 
      } 
    });
  }, observerOptions);

  const elements = document.querySelectorAll('.animate-on-scroll');
  
  elements.forEach(el => {
    observer?.observe(el);
  });
});

onUnmounted(() => {
  if (observer) observer.disconnect();
});
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
                <img src="@/assets/images/aws-certified-developer-associate.png" alt="AWS certified logo" class="w-32 h-auto md:w-48 lg:w-64 drop-shadow-lg"/>
            </a>
            <img src="@/assets/images/microsoft_gh-200_certification.png" alt="GH-200 certified logo" class="w-32 h-auto md:w-48 lg:w-64 drop-shadow-lg"/>
        </div>
        <div class="flex items-center justify-center max-w-full sm:max-w-1/2 mx-auto">
            <a href="https://github.com/CorentinLeGuen" target="_blank">
                <img src="@/assets/images/github.svg" alt="GitHub logo" class="w-26 h-auto md:w-40 lg:w-54 drop-shadow-lg"/>
            </a>
            <a href="https://www.linkedin.com/in/corentinleguen/" target="_blank">
                <img src="@/assets/images/linkedin.svg" alt="GitHub logo" class="w-32 h-auto md:w-48 lg:w-64 drop-shadow-lg"/>
            </a>
        </div>
        <div class="flex justify-between max-w-full sm:max-w-1/2 mx-auto">
            <a href="/Resume_CorentinLeGuen.pdf" download="Resume_CorentinLeGuen.pdf" target="_blank" class="w-full py-1.5 text-center text-gray-700 border border-gray-300 bg-white rounded transition duration-300 ease-in-out hover:cursor-pointer hover:shadow">
                {{ t('about.resume_download') }}
            </a>
        </div>

        <div class="max-w-full sm:max-w-1/2 mx-auto space-y-6">
            <h2 class="text-4xl font-extrabold text-gray-700 ml-4">{{ t('blog.title') }}</h2>

            <router-link to="/ia-hallucination">
                <div class="block md:flex my-4 items-center justify-center px-4 py-2 bg-white rounded border border-gray-200 transition duration-300 ease-in-out hover:shadow hover:cursor-pointer">
                    <div>
                        <h3 class="text-xl font-bold text-amber-600">{{ t('blog.2.title') }}</h3>
                        <p class="text-sm text-gray-600">{{ t('blog.2.description') }}</p>
                        <p class="italic text-sm text-gray-500">{{ t('blog.2.date_publication') }}</p>
                    </div>
                </div>
            </router-link>
            
            <router-link to="/ia-progress-or-downfall">
                <div class="block md:flex items-center justify-center px-4 py-2 bg-white rounded border border-gray-200 transition duration-300 ease-in-out hover:shadow hover:cursor-pointer">
                    <div>
                        <h3 class="text-xl font-bold text-amber-600">{{ t('blog.1.title') }}</h3>
                        <p class="text-sm text-gray-600">{{ t('blog.1.description') }}</p>
                        <p class="italic text-sm text-gray-500">{{ t('blog.1.date_publication') }}</p>
                    </div>
                </div>
            </router-link>
        </div>

        <hr class="w-48 h-1 mx-auto my-4 bg-gray-300 border-0 rounded-sm md:my-10 drop-shadow"/>

        <div class="max-w-full sm:max-w-1/2 mx-auto animate-on-scroll">
            <Contact />
        </div>
    </div>
</template>

<style lang="css">
.animate-on-scroll {
  opacity: 0;
  transform: translateY(30px);
  transition: opacity 0.6s ease-in-out, transform 0.6s ease-in-out;
  will-change: opacity, transform; 
}

.animate-on-scroll.is-visible {
  opacity: 1;
  transform: translateY(0);
}
</style>

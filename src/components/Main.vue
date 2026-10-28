<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import Contact from '@/components/Contact.vue'
import BlogList from '@/components/BlogList.vue'
import { onMounted, onUnmounted } from 'vue'

const { t } = useI18n()

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
    <div class="max-w-5xl mx-auto px-6 py-12 md:py-20 space-y-20">
        
        <section class="grid md:grid-cols-2 gap-12 items-center animate-on-scroll">
            <div class="order-2 md:order-1 text-center md:text-left space-y-6">
                <span class="hw-label text-hw-pumpkin">Lead Senior Developer // 開発者</span>
                <h1 class="hw-display text-3xl md:text-5xl break-words">
                    {{ t('welcome') }}
                </h1>
                <div class="h-3 w-40 hw-hazard mx-auto md:mx-0" aria-hidden="true"></div>
                
                <!-- Résumé succinct / Boutons d'action -->
                <div class="flex flex-col sm:flex-row gap-4 justify-center md:justify-start pt-4">
                    <a href="/Resume_CorentinLeGuen.pdf" download="Resume_CorentinLeGuen.pdf" target="_blank" 
                       class="hw-display text-sm px-6 py-4 bg-hw-abyss text-hw-slime hw-shadow-pumpkin hover:bg-hw-slime hover:text-hw-abyss transition-colors flex items-center justify-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="square" stroke-linejoin="miter" stroke-width="2.5" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg>
                        {{ t('about.resume_download') }}
                    </a>
                    <div class="flex items-center justify-center gap-3">
                        <a href="https://github.com/CorentinLeGuen" target="_blank" class="p-2 border-2 border-hw-grave bg-hw-bone hover:bg-hw-slime transition-colors">
                            <img src="@/assets/images/github.svg" alt="GitHub" class="w-8 h-8"/>
                        </a>
                        <a href="https://www.linkedin.com/in/corentinleguen/" target="_blank" class="p-1 border-2 border-hw-grave bg-hw-bone hover:bg-hw-slime transition-colors">
                            <img src="@/assets/images/linkedin.svg" alt="LinkedIn" class="w-10 h-10"/>
                        </a>
                    </div>
                </div>
            </div>

            <div class="order-1 md:order-2 flex justify-center md:justify-end">
                <div class="relative">
                    <div class="absolute -inset-3 translate-x-4 translate-y-4 bg-hw-pumpkin" aria-hidden="true"></div>
                    <div class="absolute -top-6 -left-6 w-16 h-16 bg-hw-slime" aria-hidden="true"></div>
                    <img src="@/assets/images/profile.jpeg" alt="profile picture" 
                         class="relative w-64 h-64 md:w-80 md:h-80 object-cover border-4 border-hw-grave grayscale contrast-125 hover:grayscale-0 transition-[filter] duration-500" />
                    <span class="absolute -bottom-8 left-0 hw-label bg-hw-abyss text-hw-bone px-2 py-1">ID // CLG-01</span>
                </div>
            </div>
        </section>

        <section class="max-w-3xl mx-auto space-y-8 animate-on-scroll">
            <div class="bg-hw-crypt border-2 border-hw-grave hw-shadow">
                <div class="flex items-center justify-between bg-hw-abyss text-hw-bone px-4 py-2">
                    <span class="hw-label text-hw-slime">About // 概要</span>
                    <span class="hw-label text-hw-mist">SPEC-001</span>
                </div>
                <div class="p-8 text-justify text-hw-fog text-lg">
                    <div class="space-y-4">
                        <p v-html="t('about.description.1')"></p>
                        <p v-html="t('about.description.2')"></p>
                        <p v-html="t('about.description.3')"></p>
                        <p v-html="t('about.description.4')"></p>
                        <p v-html="t('about.description.5')"></p>
                    </div>
                </div>
            </div>
            <div class="flex flex-wrap items-center justify-center gap-8 grayscale hover:grayscale-0 transition-all duration-500">
                <a href="https://www.credly.com/badges/1640cacc-f529-4c92-bcea-50b422c32a80/public_url" target="_blank" class="hover:scale-105 transition-transform">
                    <img src="@/assets/images/aws-certified-developer-associate.png" alt="AWS Certified" class="h-20 w-auto md:h-24"/>
                </a>
                <div class="h-12 w-1 bg-hw-pumpkin hidden sm:block"></div>
                <a href="https://learn.microsoft.com/en-gb/users/cc-1695/transcript/vjj6mcyx0k1o9n9" target="_blank" class="hover:scale-105 transition-transform">
                <img src="@/assets/images/microsoft_gh-200_certification.png" alt="GH-200 Certified" class="h-20 w-auto md:h-24"/>
                </a>
            </div>
        </section>

        <section class="space-y-10 animate-on-scroll">
            <div class="space-y-2">
                <span class="hw-label text-hw-pumpkin">Index // 記事</span>
                <div class="flex items-center gap-4">
                    <h2 class="hw-display text-3xl md:text-4xl">{{ t('blog.title') }}</h2>
                    <div class="h-3 grow hw-hazard"></div>
                </div>
            </div>

            <BlogList />
        </section>

        <section class="max-w-3xl mx-auto pt-10 animate-on-scroll">
            <div class="flex items-center gap-4">
                <div class="h-1 grow bg-hw-abyss" aria-hidden="true"></div>
                <span class="hw-label bg-hw-slime text-hw-abyss px-3 py-1">Contact // 連絡</span>
                <div class="h-1 grow bg-hw-abyss" aria-hidden="true"></div>
            </div>
            <Contact />
        </section>
    </div>
</template>

<style lang="css">
.animate-on-scroll {
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 0.8s ease-out, transform 0.8s ease-out;
  will-change: opacity, transform; 
}

.animate-on-scroll.is-visible {
  opacity: 1;
  transform: translateY(0);
}
</style>

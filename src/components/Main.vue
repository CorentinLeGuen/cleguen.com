<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import Contact from '@/components/Contact.vue'
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
                <h1 class="text-4xl md:text-5xl font-extrabold text-gray-800 leading-tight">
                    <span class="bg-clip-text text-transparent bg-linear-to-r from-amber-600 to-orange-500">
                        {{ t('welcome') }}
                    </span>
                </h1>
                
                <!-- Résumé succinct / Boutons d'action -->
                <div class="flex flex-col sm:flex-row gap-4 justify-center md:justify-start pt-4">
                    <a href="/Resume_CorentinLeGuen.pdf" download="Resume_CorentinLeGuen.pdf" target="_blank" 
                       class="px-8 py-3 bg-gray-900 text-white font-medium rounded-lg shadow-lg hover:bg-gray-800 hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg>
                        {{ t('about.resume_download') }}
                    </a>
                    <div class="flex items-center justify-center gap-4">
                        <a href="https://github.com/CorentinLeGuen" target="_blank" class="text-gray-600 hover:text-gray-900 transition-colors">
                            <img src="@/assets/images/github.svg" alt="GitHub" class="w-10 h-10 opacity-80 hover:opacity-100"/>
                        </a>
                        <a href="https://www.linkedin.com/in/corentinleguen/" target="_blank" class="text-gray-600 hover:text-blue-700 transition-colors">
                            <img src="@/assets/images/linkedin.svg" alt="LinkedIn" class="w-12 h-12 opacity-80 hover:opacity-100"/>
                        </a>
                    </div>
                </div>
            </div>

            <div class="order-1 md:order-2 flex justify-center md:justify-end relative">
                <div class="absolute inset-0 bg-amber-100 rounded-full blur-3xl opacity-50 transform scale-90 translate-y-4 -z-10"></div>
                <img src="@/assets/images/profile.jpeg" alt="profile picture" 
                     class="w-64 h-64 md:w-80 md:h-80 object-cover rounded-2xl shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-500 border-4 border-white" />
            </div>
        </section>

        <section class="max-w-3xl mx-auto space-y-8 animate-on-scroll">
            <div class="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                <div class="prose prose-lg prose-gray text-justify mx-auto text-gray-600">
                    <div class="space-y-4">
                        <p v-html="t('about.description.1')"></p>
                        <p v-html="t('about.description.2')"></p>
                        <p v-html="t('about.description.3')"></p>
                        <p v-html="t('about.description.4')"></p>
                        <p v-html="t('about.description.5')"></p>
                    </div>
                </div>
            </div>
            <div class="flex flex-wrap items-center justify-center gap-8 opacity-80 grayscale hover:grayscale-0 transition-all duration-500">
                <a href="https://www.credly.com/badges/1640cacc-f529-4c92-bcea-50b422c32a80/public_url" target="_blank" class="hover:scale-105 transition-transform">
                    <img src="@/assets/images/aws-certified-developer-associate.png" alt="AWS Certified" class="h-20 w-auto md:h-24 drop-shadow-md"/>
                </a>
                <div class="h-12 w-px bg-gray-300 hidden sm:block"></div>
                <a href="https://learn.microsoft.com/en-gb/users/cc-1695/transcript/vjj6mcyx0k1o9n9" target="_blank" class="hover:scale-105 transition-transform">
                <img src="@/assets/images/microsoft_gh-200_certification.png" alt="GH-200 Certified" class="h-20 w-auto md:h-24 drop-shadow-md"/>
                </a>
            </div>
        </section>

        <section class="space-y-10 animate-on-scroll">
            <div class="flex items-center gap-4">
                <h2 class="text-3xl font-bold text-gray-800">{{ t('blog.title') }}</h2>
                <div class="h-1 grow bg-gray-100 rounded-full"></div>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <!-- Article 1 -->
                <router-link to="/ia-hallucination" class="group h-full">
                    <div class="h-full bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between">
                        <div>
                            <div class="text-xs font-semibold uppercase tracking-wider text-amber-600 mb-2">AI & Tech</div>
                            <h3 class="text-xl font-bold text-gray-800 group-hover:text-amber-600 transition-colors mb-3">{{ t('blog.2.title') }}</h3>
                            <p class="text-gray-600 line-clamp-3 mb-4">{{ t('blog.2.description') }}</p>
                        </div>
                        <div class="flex items-center justify-between text-sm text-gray-500 mt-4 border-t pt-4 border-gray-100">
                            <span>{{ t('blog.2.date_publication') }}</span>
                            <span class="group-hover:translate-x-1 transition-transform">{{ t('blog.link') }} &rarr;</span>
                        </div>
                    </div>
                </router-link>
                
                <!-- Article 2 -->
                <router-link to="/ia-progress-or-downfall" class="group h-full">
                    <div class="h-full bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between">
                        <div>
                            <div class="text-xs font-semibold uppercase tracking-wider text-amber-600 mb-2">Reflections</div>
                            <h3 class="text-xl font-bold text-gray-800 group-hover:text-amber-600 transition-colors mb-3">{{ t('blog.1.title') }}</h3>
                            <p class="text-gray-600 line-clamp-3 mb-4">{{ t('blog.1.description') }}</p>
                        </div>
                        <div class="flex items-center justify-between text-sm text-gray-500 mt-4 border-t pt-4 border-gray-100">
                            <span>{{ t('blog.1.date_publication') }}</span>
                            <span class="group-hover:translate-x-1 transition-transform">{{ t('blog.link') }} &rarr;</span>
                        </div>
                    </div>
                </router-link>
            </div>
        </section>

        <section class="max-w-3xl mx-auto pt-10 animate-on-scroll">
            <div class="relative py-8">
                <div class="absolute inset-0 flex items-center" aria-hidden="true">
                    <div class="w-full border-t border-gray-200"></div>
                </div>
                <div class="relative flex justify-center">
                    <span class="bg-gray-50 px-4 text-sm text-gray-500 uppercase tracking-widest">Contact</span>
                </div>
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

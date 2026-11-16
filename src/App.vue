<script setup lang="ts">
import Navbar from '@/components/Navbar.vue'
import Footer from '@/components/Footer.vue'
</script>

<template>
    <main
      class="relative min-h-screen w-full bg-xm-night bg-winter overflow-x-hidden"
    >
    <div class="h-2 xm-candy" aria-hidden="true"></div>
    <Navbar />
    <div class="snowfall absolute inset-0 pointer-events-none" aria-hidden="true"></div>
    <svg class="star absolute right-6 md:right-12 mt-6 w-16 h-16 md:w-24 md:h-24 pointer-events-none" viewBox="0 0 100 100" aria-hidden="true">
      <path d="M50 4 L61 38 L96 38 L68 59 L79 94 L50 73 L21 94 L32 59 L4 38 L39 38 Z" fill="currentColor" />
    </svg>
    <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <RouterView />
    </div>
    <Footer />
  </main>
</template>

<style scoped>
/* Warm star glow top-right, pine haze bottom-left, faint grid */
.bg-winter {
  background-image:
    radial-gradient(circle at 88% 6rem, rgb(245 197 66 / 0.12) 0, rgb(255 75 92 / 0.05) 12rem, transparent 26rem),
    radial-gradient(ellipse at 0% 100%, rgb(31 107 69 / 0.30) 0, transparent 60%),
    linear-gradient(to right, rgb(31 107 69 / 0.10) 1px, transparent 1px),
    linear-gradient(to bottom, rgb(31 107 69 / 0.10) 1px, transparent 1px);
  background-size: 100% 100%, 100% 100%, 32px 32px, 32px 32px;
  background-repeat: no-repeat, no-repeat, repeat, repeat;
}

.star {
  color: var(--color-xm-gold);
  filter: drop-shadow(0 0 12px rgb(245 197 66 / 0.6));
  animation: star-glow 3s ease-in-out infinite;
}

@keyframes star-glow {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.7; }
}

/* Two layers of flakes drifting down at different speeds */
.snowfall {
  background-image:
    radial-gradient(2px 2px at 20px 30px, rgb(244 246 242 / 0.8), transparent),
    radial-gradient(2px 2px at 140px 90px, rgb(244 246 242 / 0.6), transparent),
    radial-gradient(1.5px 1.5px at 80px 160px, rgb(244 246 242 / 0.7), transparent),
    radial-gradient(3px 3px at 60px 60px, rgb(244 246 242 / 0.35), transparent),
    radial-gradient(2.5px 2.5px at 230px 210px, rgb(244 246 242 / 0.3), transparent);
  background-size: 200px 200px, 200px 200px, 200px 200px, 300px 300px, 300px 300px;
  animation: snow 18s linear infinite;
}

@keyframes snow {
  from { background-position: 0 0, 0 0, 0 0, 0 0, 0 0; }
  to { background-position: 40px 400px, 40px 400px, 40px 400px, -60px 600px, -60px 600px; }
}

@media (prefers-reduced-motion: reduce) {
  .snowfall, .star {
    animation: none;
  }
}
</style>

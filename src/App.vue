<script setup lang="ts">
import Navbar from '@/components/Navbar.vue'
import Footer from '@/components/Footer.vue'
</script>

<template>
    <main
      class="relative min-h-screen w-full bg-hw-night bg-haunted overflow-x-hidden"
    >
    <div class="h-2 hw-hazard" aria-hidden="true"></div>
    <Navbar />
    <svg class="cobweb absolute right-0 w-40 h-40 md:w-56 md:h-56 pointer-events-none" viewBox="0 0 100 100" fill="none" stroke="currentColor" stroke-width="0.6" aria-hidden="true">
      <path d="M100 0 L0 100 M100 0 L30 100 M100 0 L65 100 M100 0 L100 100 M100 0 L0 70 M100 0 L0 35 M100 0 L0 0" />
      <path d="M85 0 Q88 10 100 14" />
      <path d="M68 0 Q70 18 81 23 Q90 26 100 30" />
      <path d="M48 0 Q52 26 66 36 Q78 43 88 47 Q94 49 100 50" />
      <path d="M26 0 Q32 34 50 50 Q64 61 77 66 Q90 70 100 72" />
      <line x1="72" y1="28" x2="72" y2="58" stroke-width="0.4" />
      <circle cx="72" cy="61" r="3" fill="currentColor" stroke="none" />
    </svg>
    <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <RouterView />
    </div>
    <Footer />
  </main>
</template>

<style scoped>
/* Full moon top-right, purple fog bottom-left, faint grid */
.bg-haunted {
  background-image:
    radial-gradient(circle at 88% 6rem, rgb(239 230 210 / 0.10) 0, rgb(255 122 26 / 0.06) 12rem, transparent 26rem),
    radial-gradient(ellipse at 0% 100%, rgb(109 51 166 / 0.22) 0, transparent 60%),
    linear-gradient(to right, rgb(109 51 166 / 0.08) 1px, transparent 1px),
    linear-gradient(to bottom, rgb(109 51 166 / 0.08) 1px, transparent 1px);
  background-size: 100% 100%, 100% 100%, 32px 32px, 32px 32px;
  background-repeat: no-repeat, no-repeat, repeat, repeat;
}

.cobweb {
  color: rgb(201 189 217 / 0.35);
}
</style>

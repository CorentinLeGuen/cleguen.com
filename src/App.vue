<script setup lang="ts">
import Navbar from '@/components/Navbar.vue'
import Footer from '@/components/Footer.vue'
</script>

<template>
    <main 
      class="min-h-screen w-full bg-tdr-paper bg-tech-grid"
    >
    <div class="h-2 tdr-hazard" aria-hidden="true"></div>
    <Navbar />
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <RouterView />
    </div>
    <Footer />
  </main>
</template>

<style scoped>
.bg-tech-grid {
  background-image:
    linear-gradient(to right, rgb(11 11 11 / 0.06) 1px, transparent 1px),
    linear-gradient(to bottom, rgb(11 11 11 / 0.06) 1px, transparent 1px);
  background-size: 32px 32px;
}
</style>

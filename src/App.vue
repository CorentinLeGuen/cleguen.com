<script setup lang="ts">
import Navbar from '@/components/Navbar.vue'
import Footer from '@/components/Footer.vue'
</script>

<template>
    <main 
      class="min-h-screen w-full bg-repeat select-none bg-dot-grid"
    >
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <Navbar />
      <RouterView />
    </div>
    <Footer />
  </main>
</template>

<style scoped>
.bg-dot-grid {
  background-image: url('@/assets/images/dot-grid.webp');
}
</style>
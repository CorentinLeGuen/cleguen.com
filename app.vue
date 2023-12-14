<template>
  <div>
    <NuxtLayout>

      <NuxtLink to="/">Cleguen</NuxtLink>
      <NuxtLink to="/posts">Posts</NuxtLink>
      <NuxtLink to="/spicy">Spicy sauces</NuxtLink>
      <NuxtLink to="/about">About</NuxtLink>

      <select v-model="locale">
        <option value="en">EN</option>
        <option value="fr">FR</option>
      </select>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script setup>
const { locale } = useI18n()
</script>
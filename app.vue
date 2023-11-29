<template>
  <div>
    <NuxtLayout>

      <header class="shadow-xl text-center mb-5 pb-1">
        <ul class="flex ml-10 mr-10">
          <li class="flex-none w-32">
            <NuxtLink to="/">Home</NuxtLink>
          </li>
          <li class="flex-1">
            <NuxtLink to="/posts">Posts</NuxtLink>
          </li>
          <li class="flex-none w-32">
            <NuxtLink to="/about">About</NuxtLink>
          </li>
        </ul>
      </header>
      <div class="container mx-auto">
        <NuxtPage />
      </div>
    </NuxtLayout>
  </div>
</template>

<style scoped>
.router-link-exact-active {
  font-weight: bold;
}
</style>
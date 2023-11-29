<template>
  <div>
    <NuxtLayout>
      <header>
        <ul>
          <li>
            <NuxtLink to="/">Home</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/posts">Posts</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/about">About</NuxtLink>
          </li>
        </ul>
      </header>
      <div>
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
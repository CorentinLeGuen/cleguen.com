<template>
  <div>
    <NuxtLayout>
      <nav class="navbar navbar-expand-sm bg-body-tertiary mb-5 shadow">
        <div class="container">
          <a class="navbar-brand" href="/">Cleguen</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
            aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse text-center" id="navbarNav">
            <hr />
            <ul class="navbar-nav me-auto">
              <li class="nav-item">
                <NuxtLink class="nav-link" to="/posts">Posts</NuxtLink>
              </li>
              <li class="nav-item">
                <NuxtLink class="nav-link" to="/spicy">Spicy sauces</NuxtLink>
              </li>
              <li class="nav-item">
                <NuxtLink class="nav-link" to="/about">About</NuxtLink>
              </li>
            </ul>
            <div class="form-group">
              <select class="form-select" v-model="locale">
                <option value="en">EN</option>
                <option value="fr">FR</option>
              </select>
            </div>
          </div>
        </div>
      </nav>
      <div class="container">
        <NuxtPage />
      </div>
    </NuxtLayout>
  </div>
</template>

<script setup>
const { locale } = useI18n()
</script>

<style scoped>
.router-link-exact-active {
  font-weight: bold;
  color: #455EC3;
}

.navbar-toggler {
  border: 0;
}

.navbar-toggler:focus {
  box-shadow: 0 0 0 0;
}
</style>
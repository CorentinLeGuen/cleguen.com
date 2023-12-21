<template>
    <div>
        <NuxtLayout>
            <nav class="border-gray-200 bg-gray-50  shadow-md mb-9">
                <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                    <NuxtLink class="flex items-center space-x-3 rtl:space-x-reverse" to="/">
                        <span class="self-center text-2xl font-semibold whitespace-nowrap hover:text-forest-500">CLeGuen</span>
                    </NuxtLink>
                    <button data-collapse-toggle="navbar-solid-bg" type="button"
                        class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden focus:outline-none focus:ring-2 focus:ring-gray-200 "
                        aria-controls="navbar-solid-bg" aria-expanded="false">
                        <span class="sr-only">Open main menu</span>
                        <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                            viewBox="0 0 17 14">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M1 1h15M1 7h15M1 13h15" />
                        </svg>
                    </button>
                    <div class="hidden w-full md:block md:w-auto" id="navbar-solid-bg">
                        <ul
                            class="flex flex-col font-medium mt-4 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-transparent ">
                            <li>
                                <NuxtLink class="block py-2 px-3 md:p-0 text-gray-900 rounded md:hover:bg-transparent md:border-0 hover:text-forest-500"
                                    to="/posts">{{ $t('posts.title') }}</NuxtLink>
                            </li>
                            <li>
                                <NuxtLink
                                    class="block py-2 px-3 md:p-0 text-gray-900 rounded md:hover:bg-transparent md:border-0 hover:text-forest-500"
                                    to="/spicy">{{ $t('spicy.title') }}</NuxtLink>
                            </li>
                        </ul>
                    </div>
                    <select class="border border-gray-300 rounded-lg bg-gray-50 text-sm p-2 focus:border-1 focus:border-forest-500 focus:ring-0" v-model="locale">
                        <option value="en">English</option>
                        <option value="fr">Français</option>
                    </select>
                </div>
            </nav>
            <div class="justify-between px-4 mx-auto max-w-screen-xl min-h-screen">
                <NuxtPage />
            </div>

            <footer class="bg-white rounded-lg shadow m-3 mt-9">
                <div class="w-full mx-auto max-w-screen-md p-3 flex items-center justify-between">
                    <span class="text-sm text-gray-500 sm:text-center">Cleguen © 2023 - {{ $t('all_right_reserved') }}</span>
                    <NuxtLink class="me-3 md:me-5 title" to="/about">{{ $t('about.title') }}</NuxtLink>
                </div>
            </footer>
        </NuxtLayout>
    </div>
</template>

<script setup>
import 'flowbite';
const { locale } = useI18n();
</script>

<style>
.router-link-exact-active {
    color: #316844;
}

.title {
    text-transform: capitalize;
}
</style>
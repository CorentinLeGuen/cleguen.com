<template>
    <div>
        <NuxtLayout>
            <nav class="border-gray-200 bg-gray-50 shadow-md">
                <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                    <NuxtLink class="flex items-center space-x-3 rtl:space-x-reverse" to="/">
                        <span class="self-center text-2xl font-semibold tracking-tight text-transparent bg-clip-text bg-gradient-to-br from-blue-400 to-forest-500 whitespace-nowrap hover:text-forest-400">CLeGuen</span>
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
                        </ul>
                    </div>
                    <select class="border border-gray-200 bg-gray-50 text-sm p-2 focus:border-1 focus:border-gray-200 focus:ring-0" v-model="locale">
                        <option value="en">English</option>
                        <option value="fr">Français</option>
                    </select>
                </div>
            </nav>
            <div class="min-h-screen">
                <NuxtPage />
            </div>

            <div id="alert-c" class="fixed bottom-0 right-0 flex items-center p-4 border rounded-lg bg-gray-50 shadow m-2 mb-8" role="alert">
                🍪
                <span class="sr-only">Info</span>
                <div class="ms-3 text-sm text-center font-medium text-gray-800">
                    {{  $t('cookie_policy') }}
                </div>
                <button type="button" class="ms-auto -mx-1.5 -my-1.5 bg-gray-50 text-gray-500 rounded-lg focus:ring-2 focus:ring-gray-400 p-1.5 hover:bg-gray-200 inline-flex items-center justify-center h-8 w-8 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700 dark:hover:text-white" data-dismiss-target="#alert-c" aria-label="Close">
                    <span class="sr-only">Dismiss</span>
                    <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                    </svg>
                </button>
            </div>

            <footer class="bg-white border-t text-center">
                <p class="my-5">
                    <NuxtLink class="text-gray-600" to="/about">
                        {{ $t('about.title') }}
                    </NuxtLink>
                </p>

                <hr class="w-1/2 h-1 mx-auto rounded"/>

                <span class="text-sm text-gray-500 sm:text-center">Corentin Le Guen © 2024 - {{ $t('all_right_reserved') }}</span>
            </footer>
        </NuxtLayout>
    </div>
</template>

<script setup>
import 'flowbite';
const { locale } = useI18n();
</script>

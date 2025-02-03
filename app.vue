<template>
    <div>
        <NuxtLayout>
            <nav class="border-gray-200 bg-gray-50 shadow">
                <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                    <NuxtLink class="flex items-center space-x-3 rtl:space-x-reverse" to="/">
                        <span class="self-center text-2xl font-semibold tracking-tight text-transparent bg-clip-text bg-gradient-to-br from-blue-400 to-forest-500 whitespace-nowrap hover:text-forest-400">CLeGuen</span>
                    </NuxtLink>
                    <button data-collapse-toggle="navbar-solid-bg" type="button"
                        class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden focus:outline-none focus:ring-0"
                        aria-controls="navbar-solid-bg" aria-expanded="false">
                        <span class="sr-only">Open main menu</span>
                        <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                            viewBox="0 0 17 14">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M1 1h15M1 7h15M1 13h15" />
                        </svg>
                    </button>
                    <div class="hidden w-full md:block md:w-auto" id="navbar-solid-bg">
                        <ul class="flex flex-col font-medium mt-4 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-transparent">
                            <li>
                                <!--
                                    <NuxtLink class="block py-2 px-3 md:p-0 text-gray-500 rounded md:hover:bg-transparent md:border-0 hover:text-gray-800" to="/posts/git-notes">
                                        Git Notes
                                    </NuxtLink>
                                -->
                            </li>
                        </ul>
                        <hr class="h-px my-4 md:hidden" />
                    </div>
                    <select class="border-0 bg-gray-50 text-gray-500 p-0 focus:border-0 focus:ring-0" v-model="locale">
                        <option value="en">English</option>
                        <option value="fr">Français</option>
                    </select>
                </div>
            </nav>
            <div class="min-h-screen">
                <NuxtPage />
            </div>

            <footer class="bg-white border-t text-center">
                <div class="flex justify-center m-4">
                    <a href="https://github.com/CorentinLeGuen" target="_blank">
                        <svg class="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M12 2C6.475 2 2 6.475 2 12C2 16.425 4.8625 20.1625 8.8375 21.4875C9.3375 21.575 9.525 21.275 9.525 21.0125C9.525 20.775 9.5125 19.9875 9.5125 19.15C7 19.6125 6.35 18.5375 6.15 17.975C6.0375 17.6875 5.55 16.8 5.125 16.5625C4.775 16.375 4.275 15.9125 5.1125 15.9C5.9 15.8875 6.4625 16.625 6.65 16.925C7.55 18.4375 8.9875 18.0125 9.5625 17.75C9.65 17.1 9.9125 16.6625 10.2 16.4125C7.975 16.1625 5.65 15.3 5.65 11.475C5.65 10.3875 6.0375 9.4875 6.675 8.7875C6.575 8.5375 6.225 7.5125 6.775 6.1375C6.775 6.1375 7.6125 5.875 9.525 7.1625C10.325 6.9375 11.175 6.825 12.025 6.825C12.875 6.825 13.725 6.9375 14.525 7.1625C16.4375 5.8625 17.275 6.1375 17.275 6.1375C17.825 7.5125 17.475 8.5375 17.375 8.7875C18.0125 9.4875 18.4 10.375 18.4 11.475C18.4 15.3125 16.0625 16.1625 13.8375 16.4125C14.2 16.725 14.5125 17.325 14.5125 18.2625C14.5125 19.6 14.5 20.675 14.5 21.0125C14.5 21.275 14.6875 21.5875 15.1875 21.4875C17.1727 20.8173 18.8977 19.5415 20.1198 17.8395C21.3419 16.1376 21.9995 14.0953 22 12C22 6.475 17.525 2 12 2Z" fill="#000000"></path> </g></svg>
                    </a>
                </div>

                <hr class="w-1/2 h-1 mx-auto rounded"/>

                <span class="text-sm text-gray-500 sm:text-center">Corentin Le Guen © {{ currYear }} - {{ $t('all_right_reserved') }}</span>
            </footer>
        </NuxtLayout>
    </div>
</template>

<script setup>
import 'flowbite';
import { computed } from "vue";
const { locale } = useI18n();

const currYear = computed(() => new Date().getFullYear());

</script>

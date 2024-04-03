<template>
    <div>
        <header>
            <title>cleguen | homepage</title>
        </header>

        <h2 class="text-center font-bold mb-4 text-3xl text-transparent uppercase bg-clip-text bg-gradient-to-br from-blue-300 to-green-400">{{ $t('about.job') }}</h2>
        <div class="mx-auto md:w-3/4 sm:w-full text-center text-justify text-md mb-3">
            {{ $t('about.resume') }}
            <figcaption class="flex items-center justify-center mt-6 space-x-3 rtl:space-x-reverse">
                <img class="w-6 h-6 rounded-full" src="/img/profil.jpg" alt="profile picture">
                <div class="flex items-center divide-x-2 rtl:divide-x-reverse divide-gray-500 dark:divide-gray-700">
                    <cite class="pe-3 font-medium text-gray-900 dark:text-white">Corentin Le Guen</cite>
                    <cite class="ps-3 text-sm text-gray-500 dark:text-gray-400">Data Scientist, Strategist & Data Analyst at Morgan Stanley</cite>
                </div>
            </figcaption>
        </div>

        <hr class="w-48 h-1 mx-auto my-4 bg-gray-100 border-0 rounded md:my-10">
        
        <div id="cookie-policy" class="flex items-center p-4 rounded-lg bg-gray-50 mx-20 my-5 shadow" role="alert">
            <span>🍪</span>
            <span class="sr-only">Info</span>
            <div class="ms-3 text-sm font-medium text-gray-800">
                {{ $t('cookie_policy') }}
            </div>
            <button type="button"
                class="ms-auto -mx-1.5 -my-1.5 bg-gray-50 text-gray-500 rounded-lg focus:ring-2 focus:ring-gray-400 p-1.5 hover:bg-gray-200 inline-flex items-center justify-center h-8 w-8"
                data-dismiss-target="#cookie-policy" aria-label="Close">
                <span class="sr-only">Dismiss</span>
                <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                    viewBox="0 0 14 14">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                </svg>
            </button>
        </div>
    </div>
</template>
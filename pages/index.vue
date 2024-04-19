<template>
    <div>
        <header>
            <title>cleguen - {{ $t('homepage') }}</title>
        </header>

        <section class="bg-white-100 shadow-lg">
            <div class="px-4 mx-auto max-w-screen-xl text-center py-8 lg:py-24">
                <h1 class="mb-8 text-4xl uppercase font-extrabold tracking-tight leading-none text-transparent bg-clip-text bg-gradient-to-br from-blue-400 to-forest-500">
                    {{ $t('about.job') }}
                </h1>

                <p class="mb-8 text-lg font-normal text-gray-600 lg:text-xl sm:px-16 lg:px-48">
                    {{ $t('about.resume') }}
                </p>

                <NuxtLink to="/about">
                    <button class="relative inline-flex items-center px-32 py-4 overflow-hidden font-medium text-gray-100 bg-gradient-to-br from-blue-400 to-forest-500 group-hover:from-blue-400 group-hover:to-forest-500 hover:text-white focus:ring-4 focus:outline-none focus:ring-gray-200">
                        {{ $t('about.discover')}}
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="absolute right-2 w-8 h-8">
                            <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                        </svg>
                    </button>
                </NuxtLink>

                <hr class="w-1/3 h-1 mx-auto my-16 bg-gradient-to-br from-blue-50 to-forest-100 border-0 rounded" />

                <figcaption class="flex items-center justify-center mt-6 space-x-3 rtl:space-x-reverse">
                    <img class="w-6 h-6 rounded-full" src="/img/profil.jpg" alt="profile picture">
                    <div class="flex items-center divide-x-2 rtl:divide-x-reverse divide-white-500">
                        <cite class="pe-3 font-medium text-gray-600">Corentin Le Guen</cite>
                        <cite class="ps-3 text-sm text-gray-600">
                            {{ $t('about.job') }}
                        </cite>
                    </div>
                </figcaption>
            </div>
        </section>
    </div>
</template>
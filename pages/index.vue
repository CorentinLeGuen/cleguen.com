<template>
    <div>
        <header>
            <title>cleguen | homepage</title>
        </header>

        <section class="bg-center bg-no-repea bg-white-100 bg-blend-multiply shadow">
            <div class="px-4 mx-auto max-w-screen-xl text-center py-8 lg:py-24">
                <h1 class="mb-8 text-4xl uppercase font-extrabold tracking-tight leading-none text-transparent bg-clip-text bg-gradient-to-br from-blue-400 to-forest-500">
                    {{ $t('about.job') }}
                </h1>


                <p class="mb-8 text-lg font-normal text-gray-600 lg:text-xl sm:px-16 lg:px-48">
                    {{ $t('about.resume') }}
                </p>

                <hr class="w-1/3 h-1 mx-auto my-16 bg-gradient-to-br from-blue-50 to-forest-100 border-0 rounded"/>

                <figcaption class="flex items-center justify-center mt-6 space-x-3 rtl:space-x-reverse">
                    <img class="w-6 h-6 rounded-full" src="/img/profil.jpg" alt="profile picture">
                    <div class="flex items-center divide-x-2 rtl:divide-x-reverse divide-white-500">
                        <cite class="pe-3 font-medium text-gray-600">Corentin Le Guen</cite>
                        <cite class="ps-3 text-sm text-gray-600">
                            Data Scientist, Strategist & Data
                            Analyst at Morgan Stanley
                        </cite>
                    </div>
                </figcaption>
            </div>
        </section>

    </div>
</template>
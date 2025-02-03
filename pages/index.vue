<template>
    <div>
        <header>
            <title>cleguen - {{ $t('homepage') }}</title>
        </header>

        <div class="p-4 mx-auto max-w-screen-xl text-center lg:py-12">
            <h1 class="mb-8 text-4xl md:text-5xl uppercase font-extrabold tracking-tight leading-none text-transparent bg-clip-text bg-gradient-to-br from-blue-400 to-forest-500">
                {{ $t('about.job') }}
            </h1>

            <p class="mb-8 text-lg font-normal text-gray-600 lg:text-xl sm:px-16 lg:px-48">
                {{ $t('about.resume') }}
            </p>
        </div>

        <div class="text-center bg-gray-50 py-12">
            <div class="mb-8">
                <div
                    class="uppercase text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-blue-400 to-forest-500">
                    {{ $t('about.experience.year') }}</div>
                <div class="text-gray-400 italic text-sm md:text-base">{{ $t('about.experience.start_date') }}
                </div>
            </div>

            <div class="grid text-center gap-x-8 grid-cols-3 mx-4 mb-8 md:mx-16 xl:mx-32">
                <div>
                    <div class="text-2xl font-semibold text-gray-600">
                        {{ $t('about.experience.cs_years') }}
                    </div>
                    <div class="text-gray-400 italic text-sm md:text-base">
                        {{ $t('about.experience.cs_resume') }}
                    </div>
                </div>
                <div>
                    <div class="text-2xl font-semibold text-gray-600">
                        Python
                    </div>
                    <div class="text-gray-400 italic text-sm md:text-base">
                        {{ $t('about.experience.py_resume') }}
                    </div>
                </div>
                <div>
                    <div class="text-2xl font-semibold uppercase text-gray-600">
                        KDB+ & Q
                    </div>
                    <div class="text-gray-400 italic text-sm md:text-base">
                        {{ $t('about.experience.kdb_resume') }}
                    </div>
                </div>
            </div>
        </div>

        <div class="text-center bg-white py-12">
            <p class="text-2xl">
                {{ $t('under_construction')}}
            </p>
        </div>
    </div>
</template>
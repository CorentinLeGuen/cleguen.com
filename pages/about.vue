<template>
    <div>
        <header>
            <title>cleguen - {{ $t('about.title') }}</title>
        </header>

        <div class="my-8">
            <h1 class="text-center text-4xl uppercase font-extrabold tracking-tight leading-none text-transparent bg-clip-text bg-gradient-to-br from-blue-400 to-forest-500">{{ $t('about.title') }}</h1>
            <hr class="w-1/3 h-1 mx-auto my-16 bg-gradient-to-br from-blue-50 to-forest-100 border-0 rounded"/>

            <div class="text-center my-16">
                <div class="mb-8">
                    <div class="uppercase text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-blue-400 to-forest-500">{{ $t('about.experience.year') }}</div>
                    <em class="text-sm text-gray-500">{{ $t('about.experience.start_date') }}</em>
                </div>

                <div class="grid text-center gap-x-8 grid-cols-3 mx-4 mb-4 md:mx-16 xl:mx-32">
                    <div>
                        <div class="text-2xl font-semibold text-gray-600">
                            {{ $t('about.experience.cs_years') }}
                        </div>
                        <div class="text-gray-400 italic">
                            {{ $t('about.experience.cs_resume') }}
                        </div>
                    </div>
                    <div>
                        <div class="text-2xl font-semibold text-gray-600">
                            Python
                        </div>
                        <div class="text-gray-400 italic">
                            {{ $t('about.experience.py_resume') }}
                        </div>
                    </div>
                    <div>
                        <div class="text-2xl font-semibold uppercase text-gray-600">
                            KDB+ & Q
                        </div>
                        <div class="text-gray-400 italic">
                            {{ $t('about.experience.kdb_resume') }}
                        </div>
                    </div>
                </div>
            </div>

            <div class="bg-gray-50 py-16 shadow">

                <h3 class="mb-8 text-2xl uppercase font-extrabold leading-none text-center tracking-tight text-transparent bg-clip-text bg-gradient-to-br from-blue-400 to-forest-500">{{ $t('about.detailed') }}</h3>

                <div class="m-8 2xl:pl-64 xl:pl-64 lg:pl-32 md:pl-16 sm:pl-8">
                    <ol class="relative border-s border-gray-300">
                        <li class="mb-10 ms-6">
                            <span class="absolute flex items-center justify-center w-6 h-6 bg-forest-100 rounded-full -start-3 ring-8 ring-gray-50">
                                <svg class="w-2.5 h-2.5 text-forest-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M19.728 10.686c-2.38 2.256-6.153 3.381-9.875 3.381-3.722 0-7.4-1.126-9.571-3.371L0 10.437V18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-7.6l-.272.286Z"/>
                                    <path d="m.135 7.847 1.542 1.417c3.6 3.712 12.747 3.7 16.635.01L19.605 7.9A.98.98 0 0 1 20 7.652V6a2 2 0 0 0-2-2h-3V3a3 3 0 0 0-3-3H8a3 3 0 0 0-3 3v1H2a2 2 0 0 0-2 2v1.765c.047.024.092.051.135.082ZM10 10.25a1.25 1.25 0 1 1 0-2.5 1.25 1.25 0 0 1 0 2.5ZM7 3a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v1H7V3Z"/>
                                </svg>
                            </span>
                            <h3 class="flex items-center mb-1 text-lg font-semibold text-gray-900">
                                {{ $t('resume.8.job_title') }} <span class="text-base text-gray-400 mx-2"> @ Morgan Stanley</span>
                                <span class="bg-forest-100 text-forest-500 text-sm font-medium me-2 px-2.5 py-0.5 rounded ms-3">{{ $t('resume.current_position') }}</span>
                            </h3>
                            <time class="block mb-2 text-sm font-normal leading-none text-gray-400">
                                {{ $t('resume.8.date') }}
                            </time>
                            <ul class="ml-4 mb-4 text-base font-normal list-disc text-gray-500">
                                <li>{{ $t('resume.8.line_1') }}</li>
                                <li>{{ $t('resume.8.line_2') }}</li>
                                <li>{{ $t('resume.8.line_3') }}</li>
                                <li>{{ $t('resume.8.line_4') }}</li>
                                <li>{{ $t('resume.8.line_5') }}</li>
                                <li>{{ $t('resume.8.line_6') }}</li>
                            </ul>
                        </li>
                        <li class="mb-10 ms-6">
                            <span class="absolute flex items-center justify-center w-6 h-6 bg-forest-100 rounded-full -start-3 ring-8 ring-gray-50">
                                <svg class="w-2.5 h-2.5 text-forest-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M19.728 10.686c-2.38 2.256-6.153 3.381-9.875 3.381-3.722 0-7.4-1.126-9.571-3.371L0 10.437V18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-7.6l-.272.286Z"/>
                                    <path d="m.135 7.847 1.542 1.417c3.6 3.712 12.747 3.7 16.635.01L19.605 7.9A.98.98 0 0 1 20 7.652V6a2 2 0 0 0-2-2h-3V3a3 3 0 0 0-3-3H8a3 3 0 0 0-3 3v1H2a2 2 0 0 0-2 2v1.765c.047.024.092.051.135.082ZM10 10.25a1.25 1.25 0 1 1 0-2.5 1.25 1.25 0 0 1 0 2.5ZM7 3a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v1H7V3Z"/>
                                </svg>
                            </span>
                            <h3 class="mb-1 text-lg font-semibold text-gray-900 dark:text-white">
                                {{ $t('resume.7.job_title') }}
                                <span class="text-base text-gray-400 mx-2"> @ Desjardins</span>
                            </h3>
                            <time class="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                                {{ $t('resume.7.date') }}
                            </time>
                            <ul class="ml-4 mb-4 text-base font-normal list-disc text-gray-500">
                                <li>{{ $t('resume.7.line_1') }}</li>
                                <li>{{ $t('resume.7.line_2') }}</li>
                                <li>{{ $t('resume.7.line_3') }}</li>
                                <li>{{ $t('resume.7.line_4') }}</li>
                                <li>{{ $t('resume.7.line_5') }}</li>
                                <li>{{ $t('resume.7.line_6') }}</li>
                                <li>{{ $t('resume.7.line_7') }}</li>
                                <li>{{ $t('resume.7.line_8') }}</li>
                                <li>{{ $t('resume.7.line_9') }}</li>
                                <li>{{ $t('resume.7.line_10') }}</li>
                            </ul>
                        </li>
                        <li class="mb-10 ms-6">
                            <span class="absolute flex items-center justify-center w-6 h-6 bg-forest-100 rounded-full -start-3 ring-8 ring-gray-50">
                                <svg class="w-2.5 h-2.5 text-forest-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M19.728 10.686c-2.38 2.256-6.153 3.381-9.875 3.381-3.722 0-7.4-1.126-9.571-3.371L0 10.437V18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-7.6l-.272.286Z"/>
                                    <path d="m.135 7.847 1.542 1.417c3.6 3.712 12.747 3.7 16.635.01L19.605 7.9A.98.98 0 0 1 20 7.652V6a2 2 0 0 0-2-2h-3V3a3 3 0 0 0-3-3H8a3 3 0 0 0-3 3v1H2a2 2 0 0 0-2 2v1.765c.047.024.092.051.135.082ZM10 10.25a1.25 1.25 0 1 1 0-2.5 1.25 1.25 0 0 1 0 2.5ZM7 3a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v1H7V3Z"/>
                                </svg>
                            </span>
                            <h3 class="mb-1 text-lg font-semibold text-gray-900 dark:text-white">
                                {{ $t('resume.6.job_title') }}
                                <span class="text-base text-gray-400 mx-2"> @ {{ $t('resume.6.company') }}</span>
                            </h3>
                            <time class="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                                {{ $t('resume.6.date') }}
                            </time>
                            <ul class="ml-4 mb-4 text-base font-normal list-disc text-gray-500">
                                <li>{{ $t('resume.6.line_1') }}</li>
                                <li>{{ $t('resume.6.line_2') }}</li>
                                <li>{{ $t('resume.6.line_3') }}</li>
                                <li>{{ $t('resume.6.line_4') }}</li>
                                <li>{{ $t('resume.6.line_5') }}</li>
                                <li>{{ $t('resume.6.line_6') }}</li>
                                <li>{{ $t('resume.6.line_7') }}</li>
                                <li>{{ $t('resume.6.line_8') }}</li>
                                <li>{{ $t('resume.6.line_9') }}</li>
                            </ul>
                        </li>
                        <li class="mb-10 ms-6">
                            <span class="absolute flex items-center justify-center w-6 h-6 bg-forest-100 rounded-full -start-3 ring-8 ring-gray-50">
                                <svg class="w-2.5 h-2.5 text-forest-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M19.728 10.686c-2.38 2.256-6.153 3.381-9.875 3.381-3.722 0-7.4-1.126-9.571-3.371L0 10.437V18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-7.6l-.272.286Z"/>
                                    <path d="m.135 7.847 1.542 1.417c3.6 3.712 12.747 3.7 16.635.01L19.605 7.9A.98.98 0 0 1 20 7.652V6a2 2 0 0 0-2-2h-3V3a3 3 0 0 0-3-3H8a3 3 0 0 0-3 3v1H2a2 2 0 0 0-2 2v1.765c.047.024.092.051.135.082ZM10 10.25a1.25 1.25 0 1 1 0-2.5 1.25 1.25 0 0 1 0 2.5ZM7 3a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v1H7V3Z"/>
                                </svg>
                            </span>
                            <h3 class="mb-1 text-lg font-semibold text-gray-900 dark:text-white">
                                {{ $t('resume.5.job_title') }}
                                <span class="text-base text-gray-400 mx-2"> @ {{ $t('resume.5.company') }}</span>
                            </h3>
                            <time class="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                                {{ $t('resume.5.date') }}
                            </time>
                            <ul class="ml-4 mb-4 text-base font-normal list-disc text-gray-500">
                                <li>{{ $t('resume.5.line_1') }}</li>
                                <li>{{ $t('resume.5.line_2') }}</li>
                                <li>{{ $t('resume.5.line_3') }}</li>
                                <li>{{ $t('resume.5.line_4') }}</li>
                            </ul>
                        </li>
                        <li class="mb-10 ms-6">
                            <span class="absolute flex items-center justify-center w-6 h-6 bg-forest-100 rounded-full -start-3 ring-8 ring-gray-50">
                                <svg class="w-2.5 h-2.5 text-forest-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M19.728 10.686c-2.38 2.256-6.153 3.381-9.875 3.381-3.722 0-7.4-1.126-9.571-3.371L0 10.437V18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-7.6l-.272.286Z"/>
                                    <path d="m.135 7.847 1.542 1.417c3.6 3.712 12.747 3.7 16.635.01L19.605 7.9A.98.98 0 0 1 20 7.652V6a2 2 0 0 0-2-2h-3V3a3 3 0 0 0-3-3H8a3 3 0 0 0-3 3v1H2a2 2 0 0 0-2 2v1.765c.047.024.092.051.135.082ZM10 10.25a1.25 1.25 0 1 1 0-2.5 1.25 1.25 0 0 1 0 2.5ZM7 3a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v1H7V3Z"/>
                                </svg>
                            </span>
                            <h3 class="mb-1 text-lg font-semibold text-gray-900 dark:text-white">
                                {{ $t('resume.4.job_title') }}
                                <span class="text-base text-gray-400 mx-2"> @ BNP Paribas</span>
                            </h3>
                            <time class="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                                {{ $t('resume.4.date') }}
                            </time>
                            <ul class="ml-4 mb-4 text-base font-normal list-disc text-gray-500">
                                <li>{{ $t('resume.4.line_1')}}</li>
                                <li>{{ $t('resume.4.line_2')}}</li>
                                <li>{{ $t('resume.4.line_3')}}</li>
                                <li>{{ $t('resume.4.line_4')}}</li>
                                <li>{{ $t('resume.4.line_5')}}</li>
                                <li>{{ $t('resume.4.line_6')}}</li>
                                <li>{{ $t('resume.4.line_7')}}</li>
                            </ul>
                        </li>
                        <li class="mb-10 ms-6">
                            <span class="absolute flex items-center justify-center w-6 h-6 bg-forest-100 rounded-full -start-3 ring-8 ring-gray-50">
                                <svg class="w-2.5 h-2.5 text-forest-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M19.728 10.686c-2.38 2.256-6.153 3.381-9.875 3.381-3.722 0-7.4-1.126-9.571-3.371L0 10.437V18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-7.6l-.272.286Z"/>
                                    <path d="m.135 7.847 1.542 1.417c3.6 3.712 12.747 3.7 16.635.01L19.605 7.9A.98.98 0 0 1 20 7.652V6a2 2 0 0 0-2-2h-3V3a3 3 0 0 0-3-3H8a3 3 0 0 0-3 3v1H2a2 2 0 0 0-2 2v1.765c.047.024.092.051.135.082ZM10 10.25a1.25 1.25 0 1 1 0-2.5 1.25 1.25 0 0 1 0 2.5ZM7 3a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v1H7V3Z"/>
                                </svg>
                            </span>
                            <h3 class="mb-1 text-lg font-semibold text-gray-900 dark:text-white">
                                {{ $t('resume.3.job_title') }}
                                <span class="text-base text-gray-400 mx-2"> @ {{ $t('resume.3.company') }}</span>
                            </h3>
                            <time class="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                                {{ $t('resume.3.date') }}
                            </time>
                            <ul class="ml-4 mb-4 text-base font-normal list-disc text-gray-500">
                                <li>{{ $t('resume.3.line_1') }}</li>
                                <li>{{ $t('resume.3.line_2') }}</li>
                                <li>{{ $t('resume.3.line_3') }}</li>
                                <li>{{ $t('resume.3.line_4') }}</li>
                            </ul>
                        </li>
                        <li class="mb-10 ms-6">
                            <span class="absolute flex items-center justify-center w-6 h-6 bg-forest-100 rounded-full -start-3 ring-8 ring-gray-50">
                                <svg class="w-2.5 h-2.5 text-forest-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M19.728 10.686c-2.38 2.256-6.153 3.381-9.875 3.381-3.722 0-7.4-1.126-9.571-3.371L0 10.437V18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-7.6l-.272.286Z"/>
                                    <path d="m.135 7.847 1.542 1.417c3.6 3.712 12.747 3.7 16.635.01L19.605 7.9A.98.98 0 0 1 20 7.652V6a2 2 0 0 0-2-2h-3V3a3 3 0 0 0-3-3H8a3 3 0 0 0-3 3v1H2a2 2 0 0 0-2 2v1.765c.047.024.092.051.135.082ZM10 10.25a1.25 1.25 0 1 1 0-2.5 1.25 1.25 0 0 1 0 2.5ZM7 3a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v1H7V3Z"/>
                                </svg>
                            </span>
                            <h3 class="mb-1 text-lg font-semibold text-gray-900 dark:text-white">
                                {{ $t('resume.2.job_title') }}
                                <span class="text-base text-gray-400 mx-2"> @ Altitude Infrastructure</span>
                            </h3>
                            <time class="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                                {{ $t('resume.2.date') }}
                            </time>
                            <ul class="ml-4 mb-4 text-base font-normal list-disc text-gray-500">
                                <li>{{ $t('resume.2.line_1') }}</li>
                                <li>{{ $t('resume.2.line_2') }}</li>
                                <li>{{ $t('resume.2.line_3') }}</li>
                                <li>{{ $t('resume.2.line_4') }}</li>
                                <li>{{ $t('resume.2.line_5') }}</li>
                                <li>{{ $t('resume.2.line_6') }}</li>
                                <li>{{ $t('resume.2.line_7') }}</li>
                            </ul>
                        </li>
                        <li class="mb-10 ms-6">
                            <span class="absolute flex items-center justify-center w-6 h-6 bg-forest-100 rounded-full -start-3 ring-8 ring-gray-50">
                                <svg class="w-2.5 h-2.5 text-forest-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M19.728 10.686c-2.38 2.256-6.153 3.381-9.875 3.381-3.722 0-7.4-1.126-9.571-3.371L0 10.437V18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-7.6l-.272.286Z"/>
                                    <path d="m.135 7.847 1.542 1.417c3.6 3.712 12.747 3.7 16.635.01L19.605 7.9A.98.98 0 0 1 20 7.652V6a2 2 0 0 0-2-2h-3V3a3 3 0 0 0-3-3H8a3 3 0 0 0-3 3v1H2a2 2 0 0 0-2 2v1.765c.047.024.092.051.135.082ZM10 10.25a1.25 1.25 0 1 1 0-2.5 1.25 1.25 0 0 1 0 2.5ZM7 3a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v1H7V3Z"/>
                                </svg>
                            </span>
                            <h3 class="mb-1 text-lg font-semibold text-gray-900 dark:text-white">
                                {{ $t('resume.1.job_title') }}
                                <span class="text-base text-gray-400 mx-2"> @ Saagie</span>
                            </h3>
                            <time class="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                                {{ $t('resume.1.date') }}
                            </time>
                            <ul class="ml-4 mb-4 text-base font-normal list-disc text-gray-500">
                                <li>{{ $t('resume.1.line_1') }}</li>
                                <li>{{ $t('resume.1.line_2') }}</li>
                                <li>{{ $t('resume.1.line_3') }}</li>
                            </ul>
                        </li>
                    </ol>
                </div>
            </div>

            <!--<h4 class="text-md text-center mt-10 mb-5">{{ $t('about.support') }}</h4>
            <a href="https://www.buymeacoffee.com/corentinleguen" target="_blank">
                <img class="h-auto max-w-lg mx-auto shadow-xl rounded-lg" src="/img/buy-me-a-coffee.png" alt="buy me a coffee img" />
            </a>-->
        </div>

        <div class="text-center py-5 mb-16">
            <p class="text-gray-700 pt-10 pb-5">
                {{ $t('about.support') }}
            </p>
            <a href="https://www.buymeacoffee.com/corentinleguen" target="_blank">
                <button type="button" class="text-white font-semibold focus:outline-none font-medium text-xl px-32 py-2.5 bg-gradient-to-br from-green-400 to-blue-600">
                    Buy Me A Coffee ☕ 
                </button>
            </a>
        </div>
    </div>
</template>
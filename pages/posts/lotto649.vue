<template>
    <div>
        <header>
            <title>cleguen - IRMA</title>
        </header>

        <div>
            <nav class="flex m-8" aria-label="Breadcrumb">
                <ol class="inline-flex items-center space-x-1 md:space-x-2 ">
                    <li class="inline-flex items-center">
                        <NuxtLink to="/"
                            class="inline-flex items-center text-sm font-medium text-gray-700 hover:text-forest-700">
                            <svg class="w-3 h-3 me-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor" viewBox="0 0 20 20">
                                <path
                                    d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z" />
                            </svg>
                            {{ $t('homepage') }}
                        </NuxtLink>
                    </li>
                    <li>
                        <div class="flex items-center">
                            <svg class="rtl:rotate-180 w-3 h-3 text-gray-400 mx-1" aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="m1 9 4-4-4-4" />
                            </svg>
                            <NuxtLink class="ms-1 text-sm font-medium text-gray-700 hover:text-forest-700 md:ms-2" to="/posts">{{
                                $t('posts.title') }}</NuxtLink>
                        </div>
                    </li>
                    <li aria-current="page">
                        <div class="flex items-center">
                            <svg class="rtl:rotate-180 w-3 h-3 text-gray-400 mx-1" aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="m1 9 4-4-4-4" />
                            </svg>
                            <span class="ms-1 text-sm font-medium text-gray-500 md:ms-2">Lotto 6.49</span>
                        </div>
                    </li>
                </ol>
            </nav>

            <h1 class="text-center my-8 text-4xl uppercase font-extrabold tracking-tight leading-none text-transparent bg-clip-text bg-gradient-to-br from-blue-400 to-forest-500">Lotto 6.49 - {{ $t('posts.lotto649.title') }}</h1>

            <img class="max-w-md mx-auto rounded-full w-96 h-96 drop-shadow-xl" src="/img/posts/irma/IRMA-logo.webp" alt="IRMA logo" />

            <h1 class="text-4xl font-semibold text-center my-4">{{ $t('posts.lotto649.catchphrase') }}</h1>

            <!-- Description -->
            <div class="mx-4 md:mx-16 xl:mx-64 2xl:mx-1/2 mt-16 mb-8 text-center">
                <div class="">
                    {{ $t('posts.lotto649.description') }}
                </div>
                <div class="text-gray-500 italic">
                    {{ $t('posts.lotto649.description_date') }}
                </div>
            </div>

            <!-- Last draw example -->
            <div class="mx-4 md:mx-16 xl:mx-64 2xl:mx-1/2 mt-16 mb-8">
                <div v-if="pending_last" class="grid grid-cols-2 gap-4 my-8">
                    <div role="status" class="max-w-sm animate-pulse">
                        <div class="h-2.5 bg-gray-200 mx-auto rounded-full w-1/2 mb-4"></div>
                    </div>
                    <div class="relative overflow-x-auto text-center">
                        <div class="relative overflow-x-auto">
                            <table class="w-full text-sm text-left rtl:text-right text-gray-500 animate-pulse">
                                <tbody>
                                    <tr class="bg-white border-b hover:bg-gray-50">
                                        <div class="h-2 bg-gray-200 rounded-full max-w-1/2 my-2.5 mx-16"></div>
                                    </tr>
                                    <tr class="bg-white border-b hover:bg-gray-50">
                                        <div class="h-2 bg-gray-200 rounded-full max-w-1/2 my-2.5 mx-16"></div>
                                    </tr>
                                    <tr class="bg-white border-b hover:bg-gray-50">
                                        <div class="h-2 bg-gray-200 rounded-full max-w-1/2 my-2.5 mx-16"></div>
                                    </tr>
                                    <tr class="bg-white border-b hover:bg-gray-50">
                                        <div class="h-2 bg-gray-200 rounded-full max-w-1/2 my-2.5 mx-16"></div>
                                    </tr>
                                    <tr class="bg-white border-b hover:bg-gray-50">
                                        <div class="h-2 bg-gray-200 rounded-full max-w-1/2 my-2.5 mx-16"></div>
                                    </tr>
                                    <tr class="bg-white border-b hover:bg-gray-50">
                                        <div class="h-2 bg-gray-200 rounded-full max-w-1/2 my-2.5 mx-16"></div>
                                    </tr>
                                    <tr class="bg-white hover:bg-gray-50">
                                        <div class="h-2 bg-gray-200 rounded-full max-w-1/2 my-2.5 mx-16"></div>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                <div v-else-if="error_last">
                    <div class="flex items-center p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 justify-center" role="alert">
                        <svg class="flex-shrink-0 inline w-4 h-4 me-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z"/>
                        </svg>
                        <span class="sr-only">Info</span>
                        <div class="text-center">
                            <span class="font-medium">{{ $t('posts.sorry') }} !</span> {{ $t('posts.error') }}
                        </div>
                    </div>
                </div>
                <div v-else class="grid grid-cols-2 gap-4 my-8">
                    <div class="text-center">
                        {{ $t('posts.lotto649.last_draw_from') }} {{ data_last.draw_date }}
                    </div>
                    <div>
                        <div class="relative overflow-x-auto">
                            <table class="w-full text-sm text-left rtl:text-right text-gray-500">
                                <tbody>
                                    <tr class="bg-white capitalize border-b hover:bg-gray-50">
                                        <th scope="row" class="px-4 py-2 font-medium text-gray-900 whitespace-nowrap">
                                            {{ $t('posts.lotto649.n1') }}
                                        </th>
                                        <td>
                                            {{ data_last.number_1 }}
                                        </td>
                                    </tr>
                                    <tr class="bg-white capitalize border-b hover:bg-gray-50">
                                        <th scope="row" class="px-4 py-2 font-medium text-gray-900 whitespace-nowrap">
                                            {{ $t('posts.lotto649.n2') }}
                                        </th>
                                        <td>
                                            {{ data_last.number_2 }}
                                        </td>
                                    </tr>
                                    <tr class="bg-white capitalize border-b hover:bg-gray-50">
                                        <th scope="row" class="px-4 py-2 font-medium text-gray-900 whitespace-nowrap">
                                            {{ $t('posts.lotto649.n3') }}
                                        </th>
                                        <td>
                                            {{ data_last.number_3 }}
                                        </td>
                                    </tr>
                                    <tr class="bg-white capitalize border-b hover:bg-gray-50">
                                        <th scope="row" class="px-4 py-2 font-medium text-gray-900 whitespace-nowrap">
                                            {{ $t('posts.lotto649.n4') }}
                                        </th>
                                        <td>
                                            {{ data_last.number_4 }}
                                        </td>
                                    </tr>
                                    <tr class="bg-white capitalize border-b hover:bg-gray-50">
                                        <th scope="row" class="px-4 py-2 font-medium text-gray-900 whitespace-nowrap">
                                            {{ $t('posts.lotto649.n5') }}
                                        </th>
                                        <td>
                                            {{ data_last.number_5 }}
                                        </td>
                                    </tr>
                                    <tr class="bg-white capitalize border-b hover:bg-gray-50">
                                        <th scope="row" class="px-4 py-2 font-medium text-gray-900 whitespace-nowrap">
                                            {{ $t('posts.lotto649.n6') }}
                                        </th>
                                        <td>
                                            {{ data_last.number_6 }}
                                        </td>
                                    </tr>
                                    <tr class="bg-white capitalize hover:bg-gray-50">
                                        <th scope="row" class="px-4 py-2 font-medium text-gray-900 whitespace-nowrap">
                                            {{ $t('posts.lotto649.nc') }}
                                        </th>
                                        <td>
                                            {{ data_last.number_c }}
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>

            <!-- 3 Main parts of IRMA -->
            <div class="bg-gray-50 py-8">
                <h2 class="mx-2 my-8 text-2xl font-semibold text-center">{{ $t('posts.lotto649.split.title') }}</h2>

                <div class="grid grid-flow-row-dense grid-cols-1 md:grid-cols-3 gap-2 md:gap-4 xl:gap-8 mx-2 md:mx-16 xl:mx-32 mb-8">
                    <div class="mx-auto">
                        <a class="block max-w-sm p-6 bg-white rounded-lg shadow hover:shadow-lg" href="#scrap">
                            <h5 class="mb-2 text-center text-2xl font-bold tracking-tight text-gray-900">Scrap</h5>
                            <p class="font-normal text-gray-700">{{ $t('posts.lotto649.split.scrap_resume') }}</p>
                        </a>
                    </div>
                    <div class="mx-auto">
                        <a class="block max-w-sm p-6 bg-white rounded-lg shadow hover:shadow-lg" href="#analyze">
                            <h5 class="mb-2 text-center text-2xl font-bold tracking-tight text-gray-900">{{ $t('posts.lotto649.split.analize_title') }}</h5>
                            <p class="font-normal text-gray-700">{{ $t('posts.lotto649.split.analize_resume') }}</p>
                        </a>
                    </div>
                    <div class="mx-auto">
                        <a class="block max-w-sm p-6 bg-white rounded-lg shadow hover:shadow-lg" href="#api">
                            <h5 class="mb-2 text-center text-2xl font-bold tracking-tight text-gray-900">{{ $t('posts.lotto649.split.api_title') }}</h5>
                            <p class="font-normal text-gray-700">{{ $t('posts.lotto649.split.api_resume') }}</p>
                        </a>
                    </div>
                </div>
            </div>

            <!-- Scrap section -->
            <div class="bg-white py-8">
                <h2 id="scrap" class="mx-2 my-8 text-2xl text-gray-800 font-semibold text-center">Scrap</h2>
                <div class="p-4 mb-4 text-center w-1/2 mx-auto text-sm text-yellow-800 rounded-lg bg-yellow-50 shadow" role="alert">
                    <span class="font-semibold">{{ $t('posts.sorry') }} !</span> {{ $t('posts.wip') }}
                </div>
            </div>

            <!-- Analyze section -->
            <div class="bg-gray-50 py-8">
                <h2 id="analyze" class="mx-2 my-8 text-2xl text-gray-800 font-semibold text-center">{{ $t('posts.lotto649.split.analize_title') }}</h2>
                <div class="p-4 mb-4 text-center w-1/2 mx-auto text-sm text-yellow-800 rounded-lg bg-yellow-50 shadow" role="alert">
                    <span class="font-semibold">{{ $t('posts.sorry') }} !</span> {{ $t('posts.wip') }}
                </div>
            </div>

            <!-- Service API section -->
            <div class="bg-white py-8">
                <h2 id="api" class="mx-2 my-8 text-2xl text-gray-800 font-semibold text-center">{{ $t('posts.lotto649.split.api_title') }}</h2>

                <!-- List of APIs -->
                <div class="mx-4 md:mx-16 xl:mx-64 2xl:mx-1/2 mt-16 mb-8">
                    <ul class="w-full md:w-2/3 xl:w-1/2 mx-auto text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg">
                        <li class="w-full px-4 py-2 border-b font-semibold border-gray-200 bg-gray-50 rounded-t-lg text-center">
                            <h3 class="font-extrabold text-gray-800">{{ $t('posts.lotto649.api.title') }}</h3>
                        </li>
                        <li class="w-full px-4 py-2 border-b border-gray-200">
                            <h3 class="font-extrabold text-gray-800">Dates</h3>
                            <p class="text-gray-500">{{ $t('posts.lotto649.api.dates_resume') }}</p>
                        </li>
                        <li class="w-full px-4 py-2 border-b border-gray-200">
                            <h3 class="font-extrabold text-gray-800">{{ $t('posts.lotto649.api.hist_draw_title') }}</h3>
                            <p class="text-gray-500">{{ $t('posts.lotto649.api.hist_draw_resume') }}</p>
                        </li>
                        <li class="w-full px-4 py-2 border-b border-gray-200">
                            <h3 class="font-extrabold text-gray-800">{{ $t('posts.lotto649.api.hist_pred_title') }}</h3>
                            <p class="text-gray-500">{{ $t('posts.lotto649.api.hist_pred_resume') }}</p>
                        </li>
                        <li class="w-full px-4 py-2 border-b border-gray-200">
                            <h3 class="font-extrabold text-gray-800">{{ $t('posts.lotto649.api.stats_title') }}</h3>
                            <p class="text-gray-500">{{ $t('posts.lotto649.api.stats_resume') }}</p>
                        </li>
                        <li class="w-full px-4 py-2 border-b border-gray-200">
                            <h3 class="font-extrabold text-gray-800">{{ $t('posts.lotto649.api.pred_title') }}</h3>
                            <p class="text-gray-500">{{ $t('posts.lotto649.api.pred_resume') }}</p>
                        </li>
                        <li class="w-full px-4 py-2 rounded-b-lg">
                            <h3 class="font-extrabold text-gray-800">{{ $t('posts.lotto649.api.extr_title') }}</h3>
                            <p class="text-gray-500">{{ $t('posts.lotto649.api.extr_resume') }}</p>
                        </li>
                    </ul>
                </div>

                <!-- Examples of results -->
                <div class="w-5/6 md:w-2/3 xl:w-1/3 mx-auto">
                    <div id="accordion-collapse" data-accordion="collapse">
                        <h2 id="accordion-collapse-heading-1">
                            <button type="button" class="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 focus:ring-4 focus:ring-gray-200 hover:bg-gray-100 gap-3" data-accordion-target="#accordion-collapse-body-1" aria-expanded="false" aria-controls="accordion-collapse-body-1">
                                <span class="mx-auto">
                                    {{ $t('posts.lotto649.api.example_stats') }}
                                </span>
                                <svg data-accordion-icon class="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5 5 1 1 5"/>
                                </svg>
                            </button>
                        </h2>
                        <div id="accordion-collapse-body-1" class="hidden" aria-labelledby="accordion-collapse-heading-1">
                            <div class="p-5">
                                <div v-if="pending_stats">
                                    <div role="status" class="text-center">
                                        <svg aria-hidden="true" class="inline w-8 h-8 text-gray-200 animate-spin fill-green-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                                            <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
                                        </svg>
                                        <span class="sr-only">Loading...</span>
                                    </div>
                                </div>
                                <div v-else-if="error_stats">
                                    <div class="flex items-center p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 justify-center" role="alert">
                                        <svg class="flex-shrink-0 inline w-4 h-4 me-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z"/>
                                        </svg>
                                        <span class="sr-only">Info</span>
                                        <div class="text-center">
                                            <span class="font-medium">Sorry !</span> The stats API is presently not available.
                                        </div>
                                    </div>
                                </div>
                                <div v-else>
                                    <div class="text-center my-4">
                                        Stats example with a total of <span class="text-red-400 font-semibold">{{ data_stats.total }}</span> draws, from {{ data_stats.date_start }} to {{ data_stats.date_end }}
                                    </div>
                                    <div class="relative overflow-x-auto shadow-md sm:rounded-lg mt-5">
                                        <table class="w-full text-sm text-left rtl:text-right text-gray-500">
                                            <thead class="text-xs text-gray-700 uppercase bg-gray-50">
                                                <tr class="bg-white border-b hover:bg-gray-50">
                                                    <th scope="col" class="px-6 py-2">#</th>
                                                    <th scope="col" class="px-6 py-2 text-center">Total</th>
                                                    <th scope="col" class="px-6 py-2 text-center">Complementary</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr class="bg-white border-b hover:bg-gray-50" v-for="([key, value]) in sorted_data_stats" :key="key">
                                                    <th scope="row" class="px-6 py-2">{{ key.replace('number_', 'N. ') }}</th>
                                                    <td class="px-6 py-2 text-center">{{ value.total_occurrence }}</td>
                                                    <td class="px-6 py-2 text-center">{{ value.complementary }}</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <h2 id="accordion-collapse-heading-2">
                            <button type="button" class="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 gap-3" data-accordion-target="#accordion-collapse-body-2" aria-expanded="false" aria-controls="accordion-collapse-body-2">
                                <span class="mx-auto">
                                    {{ $t('posts.lotto649.api.example_pred') }}
                                </span>
                                <svg data-accordion-icon class="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5 5 1 1 5"/>
                                </svg>
                            </button>
                        </h2>
                        <div id="accordion-collapse-body-2" class="hidden" aria-labelledby="accordion-collapse-heading-2">
                            <div class="p-5">
                                <div class="text-center my-4 text-gray-500">
                                    Prediction for <span class="text-red-400 font-semibold" >2024-04-20</span>
                                </div>
                                <table class="w-full text-sm text-gray-500 text-center">
                                    <thead>
                                        <tr class="border py-2 px-6 bg-gray-50">
                                            <th>Number</th>
                                            <th>Actual</th>
                                            <th>Predicted</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr class="px-6 py-2 text-center hover:bg-gray-50">
                                            <td>1</td>
                                            <td>9</td>
                                            <td class="text-forest-300 font-semibold">9</td>
                                        </tr>
                                        <tr class="px-6 py-2 text-center hover:bg-gray-50">
                                            <td>2</td>
                                            <td>14</td>
                                            <td class="text-forest-300 font-semibold">14</td>
                                        </tr>
                                        <tr class="px-6 py-2 text-center hover:bg-gray-50">
                                            <td>3</td>
                                            <td>23</td>
                                            <td class="text-red-300 font-semibold">22</td>
                                        </tr>
                                        <tr class="px-6 py-2 text-center hover:bg-gray-50">
                                            <td>4</td>
                                            <td>26</td>
                                            <td class="text-red-300 font-semibold">28</td>
                                        </tr>
                                        <tr class="px-6 py-2 text-center hover:bg-gray-50">
                                            <td>5</td>
                                            <td>30</td>
                                            <td class="text-red-300 font-semibold">35</td>
                                        </tr>
                                        <tr class="px-6 py-2 text-center hover:bg-gray-50">
                                            <td>6</td>
                                            <td>43</td>
                                            <td class="text-forest-300 font-semibold">43</td>
                                        </tr>
                                        <tr class="px-6 py-2 text-center hover:bg-gray-50 border-b">
                                            <td>c</td>
                                            <td>35</td>
                                            <td class="text-red-300 font-semibold">34</td>
                                        </tr>
                                        <tr class="px-6 py-2 text-center font-semibold hover:bg-gray-50">
                                            <td>Accurracy</td>
                                            <td>42.86 %</td>
                                            <td>$ 10.00 gain</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Contact button -->
                <div class="text-center">
                    <a href="mailto:leguen.corentin@protonmail.com?subject=Access to Irma">
                        <button type="button" class="px-5 py-2.5 my-8 text-sm font-medium text-gray-500 inline-flex items-center bg-gray-50 focus:ring-0 focus:outline-none focus:ring-gray-100 text-center border hover:shadow">
                            <svg class="w-3.5 h-3.5 text-gray-500 me-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 16">
                                <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z"/>
                                <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z"/>
                            </svg>
                            {{ $t('posts.lotto649.api.contact') }}
                        </button>
                    </a>
                </div>
            </div>
            
            <!-- GitHub repos -->
            <div class="bg-gray-50 py-16">
                <h2 class="flex justify-center font-semibold text-2xl mb-8">
                    <svg class="w-8 h-8 me-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M12 2C6.475 2 2 6.475 2 12C2 16.425 4.8625 20.1625 8.8375 21.4875C9.3375 21.575 9.525 21.275 9.525 21.0125C9.525 20.775 9.5125 19.9875 9.5125 19.15C7 19.6125 6.35 18.5375 6.15 17.975C6.0375 17.6875 5.55 16.8 5.125 16.5625C4.775 16.375 4.275 15.9125 5.1125 15.9C5.9 15.8875 6.4625 16.625 6.65 16.925C7.55 18.4375 8.9875 18.0125 9.5625 17.75C9.65 17.1 9.9125 16.6625 10.2 16.4125C7.975 16.1625 5.65 15.3 5.65 11.475C5.65 10.3875 6.0375 9.4875 6.675 8.7875C6.575 8.5375 6.225 7.5125 6.775 6.1375C6.775 6.1375 7.6125 5.875 9.525 7.1625C10.325 6.9375 11.175 6.825 12.025 6.825C12.875 6.825 13.725 6.9375 14.525 7.1625C16.4375 5.8625 17.275 6.1375 17.275 6.1375C17.825 7.5125 17.475 8.5375 17.375 8.7875C18.0125 9.4875 18.4 10.375 18.4 11.475C18.4 15.3125 16.0625 16.1625 13.8375 16.4125C14.2 16.725 14.5125 17.325 14.5125 18.2625C14.5125 19.6 14.5 20.675 14.5 21.0125C14.5 21.275 14.6875 21.5875 15.1875 21.4875C17.1727 20.8173 18.8977 19.5415 20.1198 17.8395C21.3419 16.1376 21.9995 14.0953 22 12C22 6.475 17.525 2 12 2Z" fill="#000000"></path> </g></svg>
                    {{ $t('posts.lotto649.github_repo') }}
                </h2>

                <div class="grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-4 xl:gap-8 mx-2 md:mx-16 xl:mx-32">
                    <div class="shadow p-4 bg-white">
                        <div class="mb-4 text-center">
                            <p class="text-xl">
                                {{ $t('posts.lotto649.github.1') }}
                            </p>
                            <small class="text-sm text-gray-500 italic">
                                2021
                            </small>
                        </div>
                        
                        <a href="https://github.com/CorentinLeGuen/LotoQuebec649LastResults" target="_blank">
                            <button type="button" class="text-gray-500 hover:shadow border focus:ring-1 focus:border-gray-800 focus:outline-none font-medium text-sm px-5 py-2.5 text-center inline-flex items-center w-full justify-center">
                                {{ $t('posts.lotto649.github.show_project') }}
                                <svg class="w-3.5 h-3.5 ms-3 mt-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                                </svg>
                            </button>
                        </a>
                    </div>
                    <div class="shadow p-4 bg-white">
                        <div class="mb-4 text-center size-5">
                            <p class="text-xl">
                                {{ $t('posts.lotto649.github.2') }}
                            </p>
                            <small class="text-sm text-gray-500 italic">
                                2022
                            </small>
                        </div>
                        
                        <a href="https://github.com/CorentinLeGuen/grafolo49" target="_blank">
                            <button type="button" class="text-gray-500 hover:shadow border focus:ring-1 focus:border-gray-800 focus:outline-none font-medium text-sm px-5 py-2.5 text-center inline-flex items-center w-full justify-center">
                                {{ $t('posts.lotto649.github.show_project') }}
                                <svg class="w-3.5 h-3.5 ms-3 mt-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                                </svg>
                            </button>
                        </a>
                    </div>
                    <div class="shadow p-4 bg-white">
                        <div class="mb-4 text-center">
                            <p class="text-xl">
                                {{ $t('posts.lotto649.github.3') }}
                            </p>
                            <small class="text-sm text-gray-500 italic">
                                2022
                            </small>
                        </div>
                        
                        <a href="https://github.com/CorentinLeGuen/lotto-6-49-api" target="_blank">
                            <button type="button" class="text-gray-500 hover:shadow border focus:ring-1 focus:border-gray-800 focus:outline-none font-medium text-sm px-5 py-2.5 text-center inline-flex items-center w-full justify-center">
                                {{ $t('posts.lotto649.github.show_project') }}
                                <svg class="w-3.5 h-3.5 ms-3 mt-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                                </svg>
                            </button>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
const { pending: pending_last, error: error_last, data: data_last } = useFetch('/draw/last', { timeout: 1200, server: false });
const { pending: pending_stats, error: error_stats, data: data_stats } = useFetch('/draw/stats', { timeout: 1200, server: false });

const sorted_data_stats = computed(() => {
    const items = Object.entries(data_stats.value.draws);
    items.sort((a, b) => {
        const nA = parseInt(a[0].slice(7));
        const nB = parseInt(b[0].slice(7));
        return nA - nB;
    });
    return items;
});
</script>
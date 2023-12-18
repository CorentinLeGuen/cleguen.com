<script setup>
const { pending: pending_last, error: error_last, data: data_last } = await useFetch('/draw/last');
const { pending: pending_stats, error: error_stats, data: data_stats } = await useFetch('/draw/stats');
const data_array = Object.entries(data_stats.value.draws).map((draws) => ({
    key: parseInt(draws[0].split('_')[1]),
    comp: parseInt(draws[1].complementary),
    total: parseInt(draws[1].total_occurrence)
}));
</script>

<template>
    <div>
        <header>
            <title>cleguen | IRMA</title>
        </header>
        <nav class="flex" aria-label="Breadcrumb">
            <ol class="inline-flex items-center space-x-1 md:space-x-2 ">
                <li class="inline-flex items-center">
                    <NuxtLink to="/"
                        class="inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white">
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
                        <NuxtLink class="ms-1 text-sm font-medium text-gray-700 hover:text-blue-600 md:ms-2" to="/posts">{{
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
                        <span class="ms-1 text-sm font-medium text-gray-500 md:ms-2 dark:text-gray-400">Lotto 6.49</span>
                    </div>
                </li>
            </ol>
        </nav>

        <h1 class="title text-5xl text-center m-10">Lotto 6.49 - {{ $t('posts.lotto649.title') }}</h1>

        <hr class="w-48 h-1 mx-auto my-4 bg-gray-100 border-0 rounded md:my-10 dark:bg-gray-700">

        <div class="text-center">
            <p>{{ $t('posts.lotto649.description') }}</p>
            <p>{{ $t('posts.lotto649.description_date') }}</p>
            <small>{{ $t('posts.lotto649.access') }}</small>
        </div>

        <br />
        <br />
        <br />

        <h4 class="text-center text-xl">{{ $t('posts.lotto649.results_info') }}</h4>

        <div v-if="pending_last">
            <div role="status">
                <svg aria-hidden="true" class="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
                    viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                        fill="currentColor" />
                    <path
                        d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                        fill="currentFill" />
                </svg>
                <span class="sr-only">Loading...</span>
            </div>
        </div>
        <div v-else-if="error_last">
            <h2>Something wrong happened...</h2>
        </div>
        <div v-else>
            <h4>{{ $t('posts.lotto649.last_draw') }}: {{ data_last.draw_date }}</h4>
            <div class="flex items-center mx-auto justify-center">
                <span
                    class="flex items-center justify-center w-8 h-8 border border-blue-500 rounded-full sm:mx-1 md:mx-3 xl:mx-5">
                    <p class="font-medium leading-tight text-blue-500">{{ data_last.number_1 }}</p>
                </span>
                <span
                    class="flex items-center justify-center w-8 h-8 border border-blue-500 rounded-full sm:mx-1 md:mx-3 xl:mx-5">
                    <p class="font-medium leading-tight text-blue-500">{{ data_last.number_2 }}</p>
                </span>
                <span
                    class="flex items-center justify-center w-8 h-8 border border-blue-500 rounded-full sm:mx-1 md:mx-3 xl:mx-5">
                    <p class="font-medium leading-tight text-blue-500">{{ data_last.number_3 }}</p>
                </span>
                <span
                    class="flex items-center justify-center w-8 h-8 border border-blue-500 rounded-full sm:mx-1 md:mx-3 xl:mx-5">
                    <p class="font-medium leading-tight text-blue-500">{{ data_last.number_4 }}</p>
                </span>
                <span
                    class="flex items-center justify-center w-8 h-8 border border-blue-500 rounded-full sm:mx-1 md:mx-3 xl:mx-5">
                    <p class="font-medium leading-tight text-blue-500">{{ data_last.number_5 }}</p>
                </span>
                <span
                    class="flex items-center justify-center w-8 h-8 border border-blue-500 rounded-full sm:mx-1 md:mx-3 xl:mx-5">
                    <p class="font-medium leading-tight text-blue-500">{{ data_last.number_6 }}</p>
                </span>
                <span
                    class="flex items-center justify-center w-8 h-8 border border-purple-500 rounded-full sm:mx-1 md:mx-3 xl:mx-5">
                    <p class="font-medium leading-tight text-purple-500">{{ data_last.number_c }}</p>
                </span>
            </div>
        </div>

        <div v-if="pending_stats">
            <div role="status">
                <svg aria-hidden="true" class="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
                    viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                        fill="currentColor" />
                    <path
                        d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                        fill="currentFill" />
                </svg>
                <span class="sr-only">Loading...</span>
            </div>
        </div>
        <div v-else-if="error_stats">
            <h2>Something wrong happened...</h2>
        </div>
        <div v-else>
            <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
                <table class="w-full text-sm text-left rtl:text-right text-gray-500 ">
                    <caption class="p-5 text-lg font-semibold text-left rtl:text-right text-gray-900 bg-white ">
                        {{ $t('posts.lotto649.stats_over_1') }} {{ data_stats.total }} {{ $t('posts.lotto649.stats_over_2')
                        }}

                        <p class="text-red-800 text-sm flex items-center">
                            <svg class="flex-shrink-0 inline w-4 h-4 me-3" aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                <path
                                    d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
                            </svg>{{ $t('posts.lotto649.alert_table_sort') }}
                        </p>
                        <p class="mt-1 text-sm font-normal text-gray-500 ">
                            From {{ data_stats.date_start }} to {{ data_stats.date_end }}
                        </p>
                    </caption>
                    <thead class="text-xs text-gray-700 uppercase bg-gray-50 text-center">
                        <tr>
                            <th scope="col" class="px-6 py-3">
                                Number
                            </th>
                            <th scope="col" class="px-6 py-3">
                                <div>
                                    Occurrences
                                </div>
                            </th>
                            <th scope="col" class="px-6 py-3">
                                <div>
                                    Complementary
                                </div>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr class="bg-white border-b text-center" v-for="draw in data_array.sort((a, b) => a.key - b.key)">
                            <th scope="row" class="px-6 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                {{ draw.key }}
                            </th>
                            <td class="px-6 py-2">
                                {{ draw.total }}
                            </td>
                            <td class="px-6 py-2">
                                {{ draw.comp }}
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
        <div class="text-center my-10">
            <h4 class="text-center text-xl">{{ $t('posts.lotto649.api_tools') }}</h4>

            <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
                <table class="w-full text-sm text-left rtl:text-right text-gray-500 ">
                    <caption class="p-5 text-lg font-semibold text-left rtl:text-right text-gray-900 bg-white ">
                        {{ $t('posts.lotto649.api_our_services') }}
                        <p class="mt-1 text-sm font-normal text-gray-500 ">
                            {{ $t('posts.lotto649.api_services_detail') }} <a href="#access-form" class="text-blue-500">{{
                                $t('posts.lotto649.api_access_form') }}</a>.
                        </p>
                    </caption>
                    <thead class="text-xs text-gray-700 uppercase bg-gray-50">
                        <tr>
                            <th scope="col" class="px-6 py-3">
                                {{ $t('posts.lotto649.desc.path') }}
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Description
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr class="bg-white hover:bg-gray-50 border-b">
                            <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                                /draw/last
                            </th>
                            <td class="px-6 py-4">
                                {{ $t('posts.lotto649.desc.draw_last') }}
                            </td>
                        </tr>
                        <tr class="bg-white hover:bg-gray-50 border-b">
                            <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                                /draw/stats
                            </th>
                            <td class="px-6 py-4">
                                {{ $t('posts.lotto649.desc.draw_stats') }}
                            </td>
                        </tr>
                        <tr class="bg-white hover:bg-gray-50 border-b">
                            <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                                /draw/date/[date]
                            </th>
                            <td class="px-6 py-4">
                                {{ $t('posts.lotto649.desc.draw_date') }}
                            </td>
                        </tr>
                        <tr class="bg-white hover:bg-gray-50 border-b">
                            <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                                /draw/year/[year]
                            </th>
                            <td class="px-6 py-4">
                                {{ $t('posts.lotto649.desc.draw_year') }}
                            </td>
                        </tr>
                        <tr class="bg-white hover:bg-gray-50 border-b">
                            <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                                /draw/number/[n]
                            </th>
                            <td class="px-6 py-4">
                                {{ $t('posts.lotto649.desc.draw_number') }}
                            </td>
                        </tr>
                        <tr class="bg-white hover:bg-gray-50 border-b">
                            <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                                /date/next
                            </th>
                            <td class="px-6 py-4">
                                {{ $t('posts.lotto649.desc.date_next') }}
                            </td>
                        </tr>
                        <tr class="bg-white hover:bg-gray-50 border-b">
                            <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                                /date/last
                            </th>
                            <td class="px-6 py-4">
                                {{ $t('posts.lotto649.desc.date_last') }}
                            </td>
                        </tr>
                        <tr class="bg-white hover:bg-gray-50 border-b">
                            <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                                /predict/next
                            </th>
                            <td class="px-6 py-4">
                                {{ $t('posts.lotto649.desc.predict_next') }}
                            </td>
                        </tr>
                        <tr class="bg-white hover:bg-gray-50 border-b">
                            <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                                /predict/stats
                            </th>
                            <td class="px-6 py-4">
                                {{ $t('posts.lotto649.desc.predict_stats') }}
                            </td>
                        </tr>
                        <tr class="bg-white hover:bg-gray-50 border-b">
                            <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                                /predict/history
                            </th>
                            <td class="px-6 py-4">
                                {{ $t('posts.lotto649.desc.predict_hist') }}
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
        <div>
            <h4 class="text-center text-xl capitalize" id="access-form">{{ $t('posts.lotto649.api_access_form') }}</h4>
            <form class="max-w-lg mx-auto border p-5 rounded shadow-lg" name="api-access" netlify>
                <label for="email-address-icon" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    {{ $t('form.email') }}
                </label>
                <div class="relative">
                    <div class="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                        <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 16">
                            <path
                                d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z" />
                            <path
                                d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z" />
                        </svg>
                    </div>
                    <input type="text" id="email-address-icon"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="contact@email.com">
                </div>

                <button type="submit"
                    class="my-2 max-w-lg mx-auto flex justify-center p-0.5 overflow-hidden text-gray-900 text-sm rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white focus:ring-4 focus:outline-none focus:ring-green-200">
                    <span
                        class="px-5 py-2.5 transition-all ease-in duration-75 bg-white rounded-md group-hover:bg-opacity-0">
                        {{ $t('posts.lotto649.api_ask_access') }}
                    </span>
                </button>
            </form>
        </div>
</div></template>
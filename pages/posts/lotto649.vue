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

            <div class="mx-4 md:mx-16 xl:mx-64 2xl:mx-1/2 mt-16 mb-8 text-center">
                <div class="">
                    {{ $t('posts.lotto649.description') }}
                </div>
                <div class="text-gray-500 italic">
                    {{ $t('posts.lotto649.description_date') }}
                </div>
            </div>

            <div class="mx-4 md:mx-16 xl:mx-64 2xl:mx-1/2 mt-16 mb-8">
                <div class="grid grid-cols-2 gap-4 my-8">
                    <div class="text-center">
                        Dernier tirage du {{ data_last.draw_date }}
                    </div>
                    <div>
                        <div class="relative overflow-x-auto">
                            <table class="w-full text-sm text-left rtl:text-right text-gray-500">
                                <tbody>
                                    <tr class="bg-white border-b hover:bg-gray-50">
                                        <th scope="row" class="px-4 py-2 font-medium text-gray-900 whitespace-nowrap">
                                            Numéro 1
                                        </th>
                                        <td>
                                            {{ data_last.number_1 }}
                                        </td>
                                    </tr>
                                    <tr class="bg-white border-b hover:bg-gray-50">
                                        <th scope="row" class="px-4 py-2 font-medium text-gray-900 whitespace-nowrap">
                                            Numéro 2
                                        </th>
                                        <td>
                                            {{ data_last.number_2 }}
                                        </td>
                                    </tr>
                                    <tr class="bg-white border-b hover:bg-gray-50">
                                        <th scope="row" class="px-4 py-2 font-medium text-gray-900 whitespace-nowrap">
                                            Numéro 3
                                        </th>
                                        <td>
                                            {{ data_last.number_3 }}
                                        </td>
                                    </tr>
                                    <tr class="bg-white border-b hover:bg-gray-50">
                                        <th scope="row" class="px-4 py-2 font-medium text-gray-900 whitespace-nowrap">
                                            Numéro 4
                                        </th>
                                        <td>
                                            {{ data_last.number_4 }}
                                        </td>
                                    </tr>
                                    <tr class="bg-white border-b hover:bg-gray-50">
                                        <th scope="row" class="px-4 py-2 font-medium text-gray-900 whitespace-nowrap">
                                            Numéro 5
                                        </th>
                                        <td>
                                            {{ data_last.number_5 }}
                                        </td>
                                    </tr>
                                    <tr class="bg-white border-b hover:bg-gray-50">
                                        <th scope="row" class="px-4 py-2 font-medium text-gray-900 whitespace-nowrap">
                                            Numéro 6
                                        </th>
                                        <td>
                                            {{ data_last.number_6 }}
                                        </td>
                                    </tr>
                                    <tr class="bg-white hover:bg-gray-50">
                                        <th scope="row" class="px-4 py-2 font-medium text-gray-900 whitespace-nowrap">
                                            Numéro c
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

            <div class="bg-gray-50 py-8">
                <h2 class="mx-2 my-8 text-2xl font-semibold text-center">IRMA est découpé en 3 parties</h2>

                <div class="grid grid-flow-row-dense grid-cols-1 md:grid-cols-3 gap-2 md:gap-4 xl:gap-8 mx-2 md:mx-16 xl:mx-32 mb-8">
                    <div class="mx-auto">
                        <a class="block max-w-sm p-6 bg-white rounded-lg shadow hover:shadow-lg" href="#scrap">
                            <h5 class="mb-2 text-center text-2xl font-bold tracking-tight text-gray-900">Scrap</h5>
                            <p class="font-normal text-gray-700">Extrait les données des tirages depuis les pages HTML du site officiel.</p>
                        </a>
                    </div>
                    <div class="mx-auto">
                        <a class="block max-w-sm p-6 bg-white rounded-lg shadow hover:shadow-lg" href="#analyze">
                            <h5 class="mb-2 text-center text-2xl font-bold tracking-tight text-gray-900">Analyse & Prédiction</h5>
                            <p class="font-normal text-gray-700">Le traitement des données se fait par IA qui analyse les tirages et extrait des paternes et des prédictions pour les prochains tirages.</p>
                        </a>
                    </div>
                    <div class="mx-auto">
                        <a class="block max-w-sm p-6 bg-white rounded-lg shadow hover:shadow-lg" href="#api">
                            <h5 class="mb-2 text-center text-2xl font-bold tracking-tight text-gray-900">Service API</h5>
                            <p class="font-normal text-gray-700">Distribue par services API les statistiques et résultats des tirages et des résultats de l'IA.</p>
                        </a>
                    </div>
                </div>
            </div>

            <div class="bg-white py-8">
                <h2 id="scrap" class="mx-2 my-8 text-2xl text-gray-800 font-semibold text-center">Scrap</h2>
            </div>

            <div class="bg-gray-50 py-8">
                <h2 id="analyze" class="mx-2 my-8 text-2xl text-gray-800 font-semibold text-center">Analyse & Pédiction</h2>
            </div>

            <div class="bg-white py-8">
                <h2 id="api" class="mx-2 my-8 text-2xl text-gray-800 font-semibold text-center">Service API</h2>

                <div class="text-center">
                    <a href="mailto:leguen.corentin@protonmail.com?subject=Access to Irma">
                        <button type="button" class="px-5 py-2.5 my-8 text-sm font-medium text-gray-500 inline-flex items-center bg-gray-50 focus:ring-0 focus:outline-none focus:ring-gray-100 text-center border hover:shadow">
                            <svg class="w-3.5 h-3.5 text-gray-500 me-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 16">
                                <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z"/>
                                <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z"/>
                            </svg>
                            Send me an email to get access
                        </button>
                    </a>
                </div>
            </div>
            
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
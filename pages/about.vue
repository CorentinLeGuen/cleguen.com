<template>
    <div>
        <header>
            <title>cleguen | about</title>
        </header>
        <h1 class="title text-5xl text-center text-forest-500">{{ $t('about.title') }}</h1>
        <hr class="w-48 h-1 mx-auto my-4 bg-gray-100 border-0 rounded md:my-10 dark:bg-gray-700">

        <div id="cookie-policy" class="flex items-center p-4 rounded-lg bg-gray-50 mx-20 my-5 shadow"
            role="alert">
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

        <h4 class="text-md text-center mt-10 mb-5">{{ $t('about.support') }}</h4>
        <a href="https://www.buymeacoffee.com/corentinleguen" target="_blank">
            <img class="h-auto max-w-lg mx-auto shadow-xl rounded-lg" src="/img/buy-me-a-coffee.png" alt="buy me a coffee img" />
        </a>

    </div>
</template>
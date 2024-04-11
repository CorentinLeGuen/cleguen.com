<template>
    <div>
        <header>
            <title>cleguen | about</title>
        </header>

        <div class="my-8">
            <h1 class="text-center text-4xl uppercase font-extrabold tracking-tight leading-none text-transparent bg-clip-text bg-gradient-to-br from-blue-400 to-forest-500">{{ $t('about.title') }}</h1>
            <hr class="w-1/3 h-1 mx-auto my-16 bg-gradient-to-br from-blue-50 to-forest-100 border-0 rounded"/>

            <h4 class="text-md text-center mt-10 mb-5">{{ $t('about.support') }}</h4>
            <a href="https://www.buymeacoffee.com/corentinleguen" target="_blank">
                <img class="h-auto max-w-lg mx-auto shadow-xl rounded-lg" src="/img/buy-me-a-coffee.png" alt="buy me a coffee img" />
            </a>
        </div>
    </div>
</template>
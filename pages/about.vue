<template>
    <div>
        <header>
            <title>cleguen | about</title>
        </header>
        <h1 class="title text-5xl text-center">{{ $t('about.title') }}</h1>
        <hr class="w-48 h-1 mx-auto my-4 bg-gray-100 border-0 rounded md:my-10 dark:bg-gray-700">

        <div class="text-justify">
            <p>{{ $t('about.about_resume_1') }}</p>
            <br/>
            <p>{{ $t('about.about_resume_2') }}</p>
            <br/>
            <p>{{ $t('about.about_resume_3') }}</p>
        </div>

        <h4 class="text-md text-center mt-10 mb-5">{{ $t('about.support') }}</h4>
        <a href="https://www.buymeacoffee.com/corentinleguen" target="_blank">
            <img class="h-auto max-w-lg mx-auto shadow-xl rounded-lg" src="/img/buy-me-a-coffee.png" alt="buy me a coffee img" />
        </a>

    </div>
</template>
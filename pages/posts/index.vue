<template>
    <div>
        <header>
            <title>cleguen | posts</title>
        </header>
        <h1 class="title text-5xl text-center text-forest-500">{{ $t('posts.title') }}</h1>
        <hr class="w-48 h-1 mx-auto my-4 bg-gray-100 border-0 rounded md:my-10 dark:bg-gray-700">

        <div class="flex justify-center gap-4">
            <figure class="relative max-w-sm transition-all duration-300 cursor-pointer filter grayscale hover:grayscale-0 border rounded-lg shadow-md hover:shadow-lg">
                <NuxtLink to="/posts/lotto649">
                    <img class="rounded-lg" src="/img/posts/lotto.jpg" alt="image description">
                </NuxtLink>
                <figcaption class="text-center absolute px-4 text-3xl font-semibold text-white bottom-6 left-6">
                    <p>Lotto 6.49</p>
                </figcaption>
            </figure>
            <figure class="relative max-w-sm transition-all duration-300 cursor-pointer filter grayscale hover:grayscale-0 border rounded-lg shadow-md hover:shadow-lg">
                <NuxtLink to="/posts/git-notes">
                    <img class="rounded-lg" src="/img/posts/git.jpg" alt="image description">
                </NuxtLink>
                <figcaption class="text-center absolute px-4 text-3xl font-semibold text-black bottom-6 left-6">
                    <p>Git Cheat Sheet</p>
                </figcaption>
            </figure>
        </div>
    </div>
</template>
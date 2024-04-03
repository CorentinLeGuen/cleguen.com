<template>
    <div>
        <header>
            <title>cleguen | posts</title>
        </header>
        <h1 class="title text-5xl text-center text-forest-500">{{ $t('posts.title') }}</h1>
        <hr class="w-48 h-1 mx-auto my-4 bg-gray-100 border-0 rounded md:my-10 dark:bg-gray-700">

        <div class="grid xl:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
            <NuxtLink to="/posts/lotto649">
                <figure
                    class="transition-all mx-4 my-4 duration-300 cursor-pointer filter grayscale hover:grayscale-0 border rounded-lg shadow-md hover:shadow-lg">
                    <img class="rounded-lg" src="/img/posts/lotto.jpg" alt="image description">
                    <figcaption
                        class="text-center absolute text-2xl font-semibold text-white bottom-2 left-2">
                        <p>Lotto 6.49</p>
                    </figcaption>
                </figure>
            </NuxtLink>
            <NuxtLink to="/posts/git-notes">
                <figure
                    class="transition-all mx-4 my-4 duration-300 cursor-pointer filter grayscale hover:grayscale-0 border rounded-lg shadow-md hover:shadow-lg">
                    <img class="rounded-lg" src="/img/posts/git.jpg" alt="image description">
                    <figcaption
                        class="text-center absolute text-2xl font-semibold text-black bottom-2 left-2">
                        <p>Git Cheat Sheet</p>
                    </figcaption>
                </figure>
            </NuxtLink>
            <NuxtLink to="/posts/3d-print">
                <figure
                    class="transition-all mx-4 my-4 duration-300 cursor-pointer filter grayscale hover:grayscale-0 border rounded-lg shadow-md hover:shadow-lg">
                    <img class="rounded-lg" src="/img/posts/3dprint.png" alt="image description">
                    <figcaption
                        class="text-center absolute text-2xl font-semibold text-white bottom-2 left-2">
                        <p>3D Print</p>
                    </figcaption>
                </figure>
            </NuxtLink>
        </div>
    </div>
</template>
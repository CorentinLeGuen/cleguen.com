<template>
    <div>
        <header>
            <title>cleguen - {{ $t('posts.title') }}</title>
        </header>

        <div class="m-8">
            <h1 class="text-center text-4xl uppercase font-extrabold tracking-tight leading-none text-transparent bg-clip-text bg-gradient-to-br from-blue-400 to-forest-500">{{ $t('posts.title') }}</h1>
            <hr class="w-1/3 h-1 mx-auto my-16 bg-gradient-to-br from-blue-50 to-forest-100 border-0 rounded"/>

            <div class="grid justify-items-center gap-x-8 gap-y-4 xl:grid-cols-3 md:grid-cols-3 sm:grid-cols-2">
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
    </div>
</template>
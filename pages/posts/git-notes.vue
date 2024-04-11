<template>
    <div>
        <header>
            <title>cleguen | Git Cheat Sheet</title>
        </header>

        <div class="m-8">
            <nav class="flex" aria-label="Breadcrumb">
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
                            <NuxtLink class="ms-1 text-sm font-medium text-gray-700 hover:text-forest-700 md:ms-2" to="/posts">
                                {{
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
                            <span class="ms-1 text-sm font-medium text-gray-500 md:ms-2">Git Cheat
                                Sheet</span>
                        </div>
                    </li>
                </ol>
            </nav>

            <h1 class="m-8 text-center text-4xl uppercase font-extrabold tracking-tight leading-none text-transparent bg-clip-text bg-gradient-to-br from-blue-400 to-forest-500">Git Cheat Sheet</h1>

            <hr class="w-48 h-1 mx-auto my-4 bg-gray-100 border-0 rounded md:my-10 dark:bg-gray-700">

            <p>{{ $t('posts.git.intro_1') }}</p>
            <p>{{ $t('posts.git.intro_2') }} <em>git init</em>, <em>git push</em>, <em>git commit</em>, etc.</p>

            <div class="mt-10">
                <h4 class="text-xl items-center flex gap-3">
                    <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                        fill="none" viewBox="0 0 8 14">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="m1 13 5.7-5.326a.909.909 0 0 0 0-1.348L1 1" />
                    </svg>
                    {{ $t('posts.git.title_1') }} <em>master</em>:
                </h4>
                <div class="border border-l-8 bg-gray-50 pl-5 my-5 font-mono">
                    <p>git branch -M main</p>
                </div>
                <p class="text-sm text-gray-600 ml-0 md:ml-5">{{ $t('posts.git.title_1_sub_1') }} <em>master</em> {{ $t('posts.git.title_1_sub_2') }} <em>main</em></p>
            </div>

            <div class="mt-10">
                <h4 class="text-xl items-center flex gap-3">
                    <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                        fill="none" viewBox="0 0 8 14">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="m1 13 5.7-5.326a.909.909 0 0 0 0-1.348L1 1" />
                    </svg>
                    {{ $t('posts.git.title_2') }}:
                </h4>
                <div class="border border-l-8 bg-gray-50 pl-5 my-5 font-mono">
                    <p>git add .</p>
                    <p>git commit --amend --no-edit</p>
                    <p>git push -f</p>
                </div>
                <p class="text-sm text-gray-600 ml-0 md:ml-5">{{ $t('posts.git.title_2_sub_1') }} <em>--no-edit</em> {{ $t('posts.git.title_2_sub_2') }}:</p>
            </div>

            <div class="mt-10">
                <h4 class="text-xl items-center flex gap-3">
                    <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                        fill="none" viewBox="0 0 8 14">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="m1 13 5.7-5.326a.909.909 0 0 0 0-1.348L1 1" />
                    </svg>
                    {{ $t('posts.git.title_3') }}:
                </h4>
                <div class="border border-l-8 bg-gray-50 pl-5 my-5 font-mono">
                    <p>git remote set-url origin &lt;url&gt;</p>
                </div>
                <p class="text-sm text-gray-600 ml-0 md:ml-5">{{ $t('posts.git.title_3_sub') }}</p>
            </div>
        </div>
    </div>
</template>
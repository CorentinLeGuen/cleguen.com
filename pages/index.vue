<template>
    <div>
        <header>
            <title>cleguen - {{ $t('homepage') }}</title>
        </header>

        <section class="bg-white-100 shadow-lg">
            <div class="px-4 mx-auto max-w-screen-xl text-center py-8 lg:py-24">
                <h1 class="mb-8 text-4xl md:text-5xl uppercase font-extrabold tracking-tight leading-none text-transparent bg-clip-text bg-gradient-to-br from-blue-400 to-forest-500">
                    {{ $t('about.job') }}
                </h1>

                <p class="mb-8 text-lg font-normal text-gray-600 lg:text-xl sm:px-16 lg:px-48">
                    {{ $t('about.resume') }}
                </p>

                <NuxtLink to="/about">
                    <button id="discover" class="shadow-inner font-normal border border-1 text-gray-600 w-full md:w-9/12 lg:w-6/12">
                        <span>
                            {{ $t('about.discover')}}
                        </span>
                    </button>
                </NuxtLink>

                <hr class="w-1/3 h-1 mx-auto my-16 bg-gradient-to-br from-blue-50 to-forest-100 border-0 rounded" />

                <figcaption class="flex items-center justify-center mt-6 space-x-3 rtl:space-x-reverse">
                    <img class="w-6 h-6 rounded-full" src="/img/profil.jpg" alt="profile picture">
                    <div class="flex items-center divide-x-2 rtl:divide-x-reverse divide-white-500">
                        <cite class="pe-3 font-medium text-gray-600">Corentin Le Guen</cite>
                        <cite class="ps-3 text-sm text-gray-600">
                            {{ $t('about.job') }}
                        </cite>
                    </div>
                </figcaption>
            </div>
        </section>
    </div>
</template>

<style scoped>
button#discover {
  background: #fff;
  padding: 10px 20px;
  display: inline-block;
  cursor: pointer;
  transform: skew(-8deg);
}
button#discover::before {
  content: '';
  position: absolute;
  top: 0;
  bottom: 0;
  font-weight: bold;
  right: 100%;
  left: 0;
  background: linear-gradient(90deg, rgba(59,130,246,1) 10%, rgba(75,156,103,1) 90%);
  opacity: 0;
  z-index: -1;
  transition: all 0.5s;
}
button#discover:hover {
  color: #fff;
}

button#discover:hover::before {
  left: 0;
  right: 0;
  opacity: 0.7;
}
</style>
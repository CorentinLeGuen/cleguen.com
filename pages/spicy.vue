<template>
    <div>
        <header>
            <title>cleguen | 🌶️ spicy sauces</title>
        </header>
        <div>
            <h1 class="text-center text-xl text-forest-500">{{ $t('spicy.description') }}</h1>

            <hr class="w-48 h-1 mx-auto my-4 bg-gray-100 border-0 rounded md:my-10 dark:bg-gray-700">

            <div class="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
                <div class="bg-white border border-gray-200 rounded-lg shadow-xl mx-4" v-for="sauce in sauces">
                    <img class="rounded-t-lg w-full" :src="sauce.img" alt="" />
                    <div class="p-5">
                        <h5 class="mb-2 text-xl font-bold tracking-tight text-gray-900 ">
                            {{ sauce.name }}
                        </h5>
                        <hr/>
                        <p class="text-sm text-gray-500 underline">{{ $t('spicy.spicy_factor') }}:</p>
                        <ul class="flex items-center mx-auto justify-center">
                            <li class="mx-3" v-for="i in sauce.spicy">🌶️</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
const sauces = [
    {
        id: 1,
        name: 'The Moune',
        spicy: 2,
        composition: ['raspberry', 'honey'],
        img: 'img/spicy/the-moune-strawberry.png'
    },
    {
        id: 2,
        name: 'Red Hot Chilly Poppers',
        spicy: 4,
        composition: ['bacon'],
        img: 'img/spicy/red-hot-chilly-poppers.png'
    },
    {
        id: 3,
        name: 'Caca Django Miaow',
        spicy: 4,
        composition: ['salmon', 'cheese'],
        img: 'img/spicy/caca-django-miaou.png'
    },
    {
        id: 4,
        name: 'Ésharlot',
        spicy: 3,
        composition: ['shalot'],
        img: 'img/spicy/esharlot.png'
    },
    {
        id: 5,
        name: 'Adrienne',
        spicy: 5,
        composition: ['beer', 'grilled corn'],
        img: 'img/spicy/adrien.png'
    },
    {
        id: 5,
        name: 'Blblbl',
        spicy: 4,
        composition: ['garlic', 'brussels sprouts'],
        img: 'img/spicy/blblbl.png'
    },
    {
        id: 6,
        name: 'Alexandrie',
        spicy: 3,
        composition: ['smoked meat'],
        img: 'img/spicy/alexandrite.png'
    },
    {
        id: 7,
        name: 'Fenix',
        spicy: 3,
        composition: ['apple', 'cinnamon'],
        img: 'img/spicy/fenix.png'
    }
]
</script>
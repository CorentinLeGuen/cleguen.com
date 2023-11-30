<template>
    <div>
        <header>
            <title>cleguen | 🌶️ spicy sauces</title>
        </header>
        <h1>Custom spicy sauces</h1>
        <div class="d-flex flex-wrap justify-content-around">
            <span v-for="sauce in sauces">
                <div class="card bg-dark text-white m-1" style="max-width: 200px;">
                    <img class="rounded card-img" :src="sauce.img" alt="sauce picture" height="215" />
                    <div class="card-img-overlay" style="background-color: rgba(0, 0, 0, 0.3)">
                        <p class="card-title">
                            {{ sauce.name }}
                        </p>
                        <ul class="list-group list-group-flush" v-for="comp in sauce.composition">
                            <li class="list-group-item bg-transparent text-white">{{ comp }}</li>
                        </ul>
                        <div class="hstack gap-0">
                            <span v-for="i in sauce.spicy">
                                <p class="p-0">🌶️</p>
                            </span>
                        </div>
                    </div>
                </div>
            </span>
        </div>
    </div>
</template>

<script setup>
import { capitalize } from 'vue';

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
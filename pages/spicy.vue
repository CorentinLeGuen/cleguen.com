<template>
    <div>
        <header>
            <title>cleguen | 🌶️ spicy sauces</title>
        </header>
        <h1>Custom spicy sauces</h1>
        <table class="table">
            <thead>
                <tr>
                    <th scope="col">Name</th>
                    <th scope="col">🌶️</th>
                    <th scope="col">Composition</th>
                    <th scope="col">Picture</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="sauce in sauces">
                    <td>{{ sauce.name }}</td>
                    <td>{{ sauce.spicy }}</td>
                    <td>{{ sauce.composition }}</td>
                    <td>
                        <img :src="sauce.img" alt="sauce picture" height="125" />
                    </td>
                </tr>
            </tbody>
        </table>
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
        img: ''
    }
]
</script>
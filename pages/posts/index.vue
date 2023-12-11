<template>
    <div>
        <header>
            <title>cleguen | posts</title>
        </header>
        <h1>Posts</h1>
        <hr />
        <div class="alert alert-danger" role="alert">
            Pages are under construction. Please, come back later !
        </div>
        <div class="d-flex flex-wrap justify-content-around">
            <span v-for="post in posts">
                <NuxtLink :to="post.path">
                    <div class="card mb-4 shadow" style="width: 18rem;">
                        <img :src="post.picture" class="card-img-top" height="180" :alt="post.name">
                        <div class="card-body">
                            <strong class="card-title">{{ post.name }}</strong>
                            <hr />
                            <p class="card-text text-justify">{{ post.desc }}</p>
                            <small v-if="post.date">
                                <em class="post-date">
                                    {{ post.date }}
                                </em>
                            </small>
                        </div>
                    </div>
                </NuxtLink>
            </span>
        </div>
    </div>
</template>

<script setup>
const posts = [
    {
        id: 1,
        name: 'Lotto 6.49 - IRMA project',
        path: '/posts/lotto649',
        picture: '/img/posts/lotto.jpg',
        desc: 'This is a scrap / AI project about lotto 6.49',
        date: 'Year 2023 - still in progress'
    },
    {
        id: 2,
        name: '🐍 Python',
        path: '/posts/python',
        picture: '/img/posts/python.jpg',
        desc: 'This a my personnal notes on Python',
        date: '~ Continuous documentation ~'
    },
    {
        id: 3,
        name: 'Stock Project',
        path: '/posts/stock',
        picture: '/img/posts/stock.jpg',
        desc: 'Stock project',
        date: 'Not started'
    },
    {
        id: 4,
        name: 'Nuxt3 - VueJS - Netlify',
        path: '/posts/frontend',
        picture: '/img/posts/frontend.jpg',
        desc: 'Nuxt3, VueJS and Netlify notes',
        date: 'Started Dec. 2023'
    },
    {
        id: 5,
        name: 'Building a homemade Arcade box',
        path: '/posts/arcade',
        picture: '/img/posts/arcade.jpg',
        desc: 'I build an arcade box, here is how I did it',
        date: 'Started Nov. 2023'
    },
    {
        id: 6,
        name: 'Bino project - Youtube without ads',
        path: '/posts/bino',
        picture: '/img/posts/bino.jpg',
        desc: 'I build a Youtube without ads',
        date: 'Not started'
    }
]
</script>

<style scoped>
a {
    text-decoration: none;
}
em.post-date {
    color: gray;
}
</style>
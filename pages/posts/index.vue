<template>
    <div>
        <header>
            <title>cleguen | posts</title>
        </header>
        <h1>Posts</h1>
        <div>
            Pages are under construction. Please, come back later !
        </div>
        <span v-for="post in posts">
            <NuxtLink :to="post.path">
                <img :src="post.picture" height="180" :alt="post.name">
                <strong>{{ post.name }}</strong>
                <p>{{ post.desc }}</p>
                <small v-if="post.date">
                    {{ post.date }}
                </small>

            </NuxtLink>
        </span>
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
    }
]
</script>
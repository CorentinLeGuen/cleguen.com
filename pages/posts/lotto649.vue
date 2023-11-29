<script setup>
const { pending, error, data } = await useFetch('/draw/last');
</script>

<template>
    <div>
        <header>
            <title>cleguen | IRMA</title>
        </header>
        <h1>Lotto 6.49 - IRMA project</h1>
        <hr />
        <div v-if="pending">
            <h2>Fetching data...</h2>
        </div>
        <div v-else-if="error">
            <h2>Sorry, something wrong happened...</h2>
            <p>{{ error }}</p>
        </div>
        <div v-else>
            <h2>Last draw: {{ data.draw_date }}</h2>
            <div class="container">
                <ul>
                    <li>number 1 : {{ data.number_1 }}</li>
                    <li>number 2 : {{ data.number_2 }}</li>
                    <li>number 3 : {{ data.number_3 }}</li>
                    <li>number 4 : {{ data.number_4 }}</li>
                    <li>number 5 : {{ data.number_5 }}</li>
                    <li>number 6 : {{ data.number_6 }}</li>
                    <li>number c : {{ data.number_c }}</li>
                </ul>
            </div>
        </div>
    </div>
</template>
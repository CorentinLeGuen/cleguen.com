<script setup>
const { pending: pending_last, error: error_last, data: data_last } = await useFetch('/draw/last');
const { pending: pending_stats, error: error_stats, data: data_stats } = await useFetch('/draw/stats');
const data_array = Object.entries(data_stats.value.draws).map((draws) => ({
    key: parseInt(draws[0].split('_')[1]),
    comp: parseInt(draws[1].complementary),
    total: parseInt(draws[1].total_occurrence)
}));
</script>

<template>
    <div>
        <header>
            <title>cleguen | IRMA</title>
        </header>

        <NuxtLink to="/posts">Posts</NuxtLink>

        <h1>Lotto 6.49 - IRMA project</h1>

        <div v-if="pending_last">
            <h2>Fetching data for last result</h2>
        </div>
        <div v-else-if="error_last">
            <h2>Something wrong happened...</h2>
        </div>
        <div v-else>
            <h4>Last draw: {{ data_last.draw_date }}</h4>
            <div>{{ data_last.number_1 }}</div>
            <div>{{ data_last.number_2 }}</div>
            <div>{{ data_last.number_3 }}</div>
            <div>{{ data_last.number_4 }}</div>
            <div>{{ data_last.number_5 }}</div>
            <div>{{ data_last.number_6 }}</div>
            <div>{{ data_last.number_c }}</div>
        </div>

        <div v-if="pending_stats">
            <h2>Fetching data for stats</h2>
        </div>
        <div v-else-if="error_stats">
            <h2>Something wrong happened...</h2>
        </div>
        <div v-else>
            <h4>Stats</h4>
            <div>First draw <strong>{{ data_stats.date_start }}</strong> and last draw <strong>{{data_stats.date_end }}</strong> for a total of <strong>{{ data_stats.total }}</strong> draws.</div>
            <table>
                <caption>This table is generated with <em>{{ data_stats.total }}</em> records.</caption>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Total occurrences</th>
                        <th>Complementary</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="draw in data_array">
                        <th>{{ draw.key }}</th>
                        <td>{{ draw.total }}</td>
                        <td>{{ draw.comp }}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>
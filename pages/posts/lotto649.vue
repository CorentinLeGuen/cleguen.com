<template>
    <div>
        <header>
            <title>cleguen | IRMA</title>
        </header>
        <h1>Lotto 6.49 - IRMA project</h1>
        <hr />
        <div v-if="pending">
            Loading lotto 6.49 last result...
        </div>
        <div v-else>
            <h2>Draw for <strong>{{ data.draw_date }}</strong></h2>
            <table class="table-auto">
                <thead>
                    <tr>
                        <th>Number</th>
                        <th>Draw</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>{{ data.number_1 }}</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>{{ data.number_2 }}</td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>{{ data.number_3 }}</td>
                    </tr>
                    <tr>
                        <td>4</td>
                        <td>{{ data.number_4 }}</td>
                    </tr>
                    <tr>
                        <td>5</td>
                        <td>{{ data.number_5 }}</td>
                    </tr>
                    <tr>
                        <td>6</td>
                        <td>{{ data.number_6 }}</td>
                    </tr>
                    <tr>
                        <td>c</td>
                        <td>{{ data.number_c }}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script setup>
const { pending, data } = useLazyFetch('http://167.114.115.103:21000/draw/last')
</script>
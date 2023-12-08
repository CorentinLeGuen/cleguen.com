
import { capitalize } from 'vue';
<template>
    <div>
        <header>
            <title>cleguen | about</title>
        </header>
        <h1 class="text-center">{{ $t('about') }}</h1>
        <hr />
        <div class="container-md mb-4">
            <p>{{ $t('about_resume_1') }}</p>
            <p>{{ $t('about_resume_2') }}</p>
            <p>{{ $t('about_resume_3') }}</p>
        </div>
        <br />
        <p>{{ $t('presently_learning') }}</p>
        <ul class="list-group list-group-flush">
            <li class="list-group-item">
                <h5>Python / numpy / pandas / scikit learn</h5>
                <div class="progress">
                    <div class="progress-bar progress-bar-striped bg-success progress-bar-animated" role="progressbar"
                        style="width: 82%" aria-valuenow="82" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
            </li>
            <li class="list-group-item">
                <h5>Nuxt3</h5>
                <div class="progress">
                    <div class="progress-bar progress-bar-striped bg-info progress-bar-animated" role="progressbar"
                        style="width: 50%" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
            </li>
            <li class="list-group-item">
                <h5>Tailwind</h5>
                <div class="progress">
                    <div class="progress-bar progress-bar-striped bg-info progress-bar-animated" role="progressbar"
                        style="width: 1%" aria-valuenow="1" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
            </li>
            <li class="list-group-item">
                <h5>Android</h5>
                <div class="progress">
                    <div class="progress-bar progress-bar-striped bg-info progress-bar-animated" role="progressbar"
                        style="width: 0%" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
            </li>
        </ul>

    </div>
</template>

<style scoped>
h1 {
    text-transform: capitalize;
}

p {
    text-justify: auto;
}
</style>
<script setup lang="ts">
import Language from "@/components/Language.vue";
</script>

<template>
    <div class="flex items-center justify-center">
        <RouterLink to="/" class="flex items-center justify-center text-gray-700 hover:text-gray-800 m-2 me-8">
            <img src="@/assets/favicon.svg" alt="logo" class="w-8 me-2.5 drop-shadow"/>
            <p class="font-bold text-xl">cleguen.com</p>
        </RouterLink>
        <Language />
    </div>
</template>
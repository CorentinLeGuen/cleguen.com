<script lang="ts">
	import '../app.css';
	import { onMount } from 'svelte';
	import { locale, loadTranslations } from '$lib/i18n/config';
	import Navbar from '$lib/components/Navbar.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import { Spinner } from 'flowbite-svelte';

	let isReady = false;

	onMount(async () => {
		let lang = localStorage.getItem('lang') || navigator.language.slice(0, 2);

		if (!['fr', 'en'].includes(lang)) {
			lang = 'fr';
		}

		locale.set(lang);
		await loadTranslations(lang);
		isReady = true;
	});
</script>

{#if isReady}
	<div class="min-h-screen flex flex-col bg-white text-black transition-colors dark:bg-gray-900 dark:text-white">
		<Navbar />
		<main class="p-6 flex-grow text-gray-700 dark:text-gray-400">
			<slot />
		</main>
		<Footer />
	</div>
{:else}
	<div class="p-6 text-xl text-center"><Spinner /> Loading ...</div>
{/if}

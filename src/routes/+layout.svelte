<script lang="ts">
	import '../app.css';
	import Navbar from '$lib/components/Navbar.svelte';
</script>

<div class="min-h-screen bg-white text-black transition-colors dark:bg-gray-900 dark:text-white">
	<Navbar />
	<main class="p-6">
		<slot />
	</main>
</div>

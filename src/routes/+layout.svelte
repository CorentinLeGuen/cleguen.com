<script lang="ts">
	import '../app.css';
	import ThemeToggle from '$lib/components/ThemeToggle.svelte';
</script>

<div class="min-h-screen bg-white text-black transition-colors dark:bg-gray-900 dark:text-white">
	<ThemeToggle />
	<slot />
</div>

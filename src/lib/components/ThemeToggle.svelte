<script>
	import { onMount } from 'svelte';

	let isDark = false;

	onMount(() => {
		const theme = localStorage.getItem('theme');
		if (theme === 'dark') {
			document.documentElement.classList.add('dark');
			isDark = true;
		}
	});

	function toggleTheme() {
		isDark = !isDark;
		document.documentElement.classList.toggle('dark', isDark);
		localStorage.setItem('theme', isDark ? 'dark' : 'light');
	}
</script>

<button on:click={toggleTheme} class="bg-transparent px-2 py-2 text-sm text-black dark:bg-transparent dark:text-white">
	{isDark ? '☀️' : '🌙'}
</button>

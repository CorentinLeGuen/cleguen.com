<script lang="ts">
	import { t, locale, locales, loadTranslations } from '$lib/i18n/config';
	import { get } from 'svelte/store';
    import { Select } from 'flowbite-svelte';

	$: options = get(locales).map((lang) => ({
        value: lang,
        name: lang.toUpperCase()
    }));
</script>

<Select class="w-18" items={options} bind:value={$locale} placeholder=""/>
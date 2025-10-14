<script>
	import { Button } from 'flowbite-svelte';
	import { t } from '$lib/i18n/config';
</script>

<svelte:head>
	<title>cleguen.com</title>
</svelte:head>

<h1 class="text-center text-4xl font-extrabold">{$t('translations.intro')}</h1>

<div class="paragraph my-4 text-center text-2xl">
	{@html $t('translations.about.description.1')}
</div>

<div class="flex justify-center mt-8">
	<a href="/about">
		<Button outline class="x-auto">
			{$t('translations.about.see_about_section')}
		</Button>
	</a>
</div>

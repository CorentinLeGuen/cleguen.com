<script>
	import { Button } from 'flowbite-svelte';
	import { FileLinesSolid } from 'flowbite-svelte-icons';
	import { t } from '$lib/i18n/config';
</script>

<h1 class="mb-4 text-center text-3xl font-bold">{$t('translations.about.title')}</h1>

<p class="mb-4 text-center text-2xl">{$t('translations.about.short_description')}</p>

<div class="m-4 text-justify">
	<p class="my-2">{$t('translations.about.description.1')}</p>
	<p class="my-2">{$t('translations.about.description.2')}</p>
	<p class="my-2">{$t('translations.about.description.3')}</p>
	<p class="my-2">{$t('translations.about.description.4')}</p>
	<p class="my-2">{$t('translations.about.description.5')}</p>
</div>

<div class="flex justify-center">
	<Button outline class="x-auto w-md" href="/Resume_CorentinLeGuen.pdf" target="_blank">
		<FileLinesSolid class="me-2 h-5 w-5" />
		{$t('translations.about.resume_download')}
	</Button>
</div>

<h2 class="mt-8 mb-2 text-2xl font-semibold text-center">📬 {$t('translations.contact.title')}</h2>

<p>
	{$t('translations.contact.text')}:
	<a
		class="text-blue-700 hover:underline dark:text-blue-400"
		href="mailto:cleguen.refined872@passmail.net">cleguen.refined872@passmail.net</a
	>
</p>

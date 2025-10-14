<script>
	import { Button, Hr, Popover } from 'flowbite-svelte';
	import { t } from '$lib/i18n/config';
	import { Github, Linkedin } from "svelte-supertiny";
    import ContactForm from '$lib/components/ContactForm.svelte';
</script>


<svelte:head>
	<title>{$t('translations.about.title')}</title>
</svelte:head>

<div class="max-w-full sm:max-w-3/4 md:max-w-2/3 xl:max-w-1/2 2xl:max-w-1/3 mx-auto">
	<h1 class="mb-4 text-center text-3xl font-bold text-gray-900 dark:text-gray-100">{$t('translations.about.title')}</h1>

	<p class="mb-8 text-center text-2xl">{$t('translations.about.short_description')}</p>

	<div class="text-justify grow">
		<p class="my-2">{@html $t('translations.about.description.1')}</p>
		<p class="my-2">{$t('translations.about.description.2')}</p>
		<p class="my-2">{$t('translations.about.description.3')}</p>
		<p class="my-2">{$t('translations.about.description.4')}</p>
		<p class="my-2">{$t('translations.about.description.5')}</p>
	</div>
	
	<div class="justify-center">
		<a href="https://www.credly.com/badges/1640cacc-f529-4c92-bcea-50b422c32a80/public_url">
			<img class="max-w-1/2 mx-auto drop-shadow-lg" src="images/aws-certified-developer-associate.png" alt="AWS Certified Developer - Associate Badge"/>
		</a>
	</div>

	<div class="flex justify-center my-4 sm:my-8 md:my-12">
		<Button outline class="x-auto w-md" href="/Resume_CorentinLeGuen.pdf" target="_blank">
			{$t('translations.about.resume_download')}
		</Button>
	</div>

	<Hr class="my-8 w-64 text-gray-900 dark:text-gray-100">{$t('translations.contact.title')}</Hr>

	<div class="flex justify-center gap-4">
		<a href="https://github.com/CorentinLeGuen" target="_blank">
			<Github class="size-12"/>
		</a>
		<a href="https://www.linkedin.com/in/corentinleguen/" target="_blank">
			<Linkedin class="size-12" />
		</a>
	</div>
</div>

<ContactForm />

<script>
	import { Button, GradientButton, Hr } from 'flowbite-svelte';
	import { FileLinesSolid } from 'flowbite-svelte-icons';
	import { t } from '$lib/i18n/config';
	import { Section, FeatureDefault, FeatureItem } from "flowbite-svelte-blocks";
	import { AwardOutline, PersonChalkboardOutline, ChartOutline } from "flowbite-svelte-icons";
	import { Python, Github, Linkedin, Mail } from "svelte-supertiny";

</script>

<h1 class="mb-4 text-center text-3xl font-bold">{$t('translations.about.title')}</h1>

<p class="mb-4 text-center text-2xl">{$t('translations.about.short_description')}</p>

<Section name="feature">
	<FeatureDefault class="grid grid-cols-3 text-center my-2 sm:my-4 md:my-12">
		<FeatureItem class="mx-auto">
		  <svelte:fragment slot="icon"><AwardOutline class="text-primary-600 dark:text-primary-300" /></svelte:fragment>
		  <svelte:fragment slot="h3">+ 12 years</svelte:fragment>
		  <svelte:fragment slot="paragraph">experience in Software Development</svelte:fragment>
		</FeatureItem>
		<FeatureItem class="mx-auto">
			<svelte:fragment slot="icon"><Python class="text-primary-600 dark:text-primary-300" /></svelte:fragment>
			<svelte:fragment slot="h3">Python</svelte:fragment>
			<svelte:fragment slot="paragraph">strong knowledge since 2012</svelte:fragment>
		</FeatureItem>
		<FeatureItem class="mx-auto">
			<svelte:fragment slot="icon"><ChartOutline class="text-primary-600 dark:text-primary-300" /></svelte:fragment>
			<svelte:fragment slot="h3">Domain</svelte:fragment>
			<svelte:fragment slot="paragraph">in Data Science and finance</svelte:fragment>
		</FeatureItem>
	</FeatureDefault>
</Section>


<div class="paragraph text-justify">
	<p class="my-2">{@html $t('translations.about.description.1')}</p>
	<p class="my-2">{$t('translations.about.description.2')}</p>
	<p class="my-2">{$t('translations.about.description.3')}</p>
	<p class="my-2">{$t('translations.about.description.4')}</p>
	<p class="my-2">{$t('translations.about.description.5')}</p>
</div>

<div class="flex justify-center my-4 sm:my-8 md:my-12">
	<Button outline class="x-auto w-md" href="/Resume_CorentinLeGuen.pdf" target="_blank">
		<FileLinesSolid class="me-2 h-5 w-5" />
		{$t('translations.about.resume_download')}
	</Button>
</div>

<Hr classHr="my-8 w-64">{$t('translations.contact.title')}</Hr>

<div class="flex justify-center gap-4">
	<a href="https://github.com/CorentinLeGuen" target="_blank">
		<Github class="size-12"/>
	</a>
	<a href="https://www.linkedin.com/in/corentinleguen/" target="_blank">
		<Linkedin class="size-12" />
	</a>
	<a href="mailto:cleguen.refined872@passmail.net" target="_blank">
		<Mail class="size-12" />
	</a>
</div>
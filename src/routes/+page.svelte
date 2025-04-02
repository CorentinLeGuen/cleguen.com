<script>
	import { Button } from 'flowbite-svelte';
	import { ArrowRightOutline } from 'flowbite-svelte-icons';
	import { t } from '$lib/i18n/config';
</script>

<h1 class="text-center text-4xl font-extrabold">{$t('translations.intro')}</h1>

<div class="paragraph my-4 text-center text-2xl">
	{@html $t('translations.about.description.1')}
</div>

<div class="flex justify-center mt-8">
	<a href="/about">
		<Button outline class="x-auto w-md">
			{$t('translations.about.see_about_section')}<ArrowRightOutline class="ms-2 h-5 w-5" />
		</Button>
	</a>
</div>

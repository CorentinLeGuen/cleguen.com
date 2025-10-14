<script>
	import { Alert } from 'flowbite-svelte';
	import { t } from '$lib/i18n/config';
</script>

<Alert color="red" rounded={false} class="border-t-4 text-center w-full md:w-3/4 xl:w-1/2 2xl:w-1/4 mx-auto">
	<span class="font-medium">{$t('translations.error.title')}</span>
	<span class="text-center mx-auto">{$t('translations.error.details')}</span>
</Alert>

<script>
	import { Alert } from 'flowbite-svelte';
	import { InfoCircleSolid } from 'flowbite-svelte-icons';
	import { t } from '$lib/i18n/config';
</script>

<Alert color="red" rounded={false} class="border-t-4 w-full md:w-3/4 xl:w-1/2 2xl:w-1/4 mx-auto">
	<InfoCircleSolid slot="icon" class="h-5 w-5" />
	<span class="font-medium">{$t('translations.error.title')}</span>
	<span class="text-center mx-auto">{$t('translations.error.details')}</span>
</Alert>

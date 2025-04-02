<script lang="ts">
	import { t } from '$lib/i18n/config';
</script>

<div class="max-w-full sm:max-w-3/4 md:max-w-2/3 xl:max-w-1/2 2xl:max-w-1/3 mx-auto">
	<h1 class="mb-6 text-3xl font-bold">{$t('translations.legal.title')}</h1>

	<section class="mb-8">
		<h2 class="mb-2 text-xl font-semibold">{$t('translations.legal.publisher.title')}</h2>
		<p>{@html $t('translations.legal.publisher.text')}</p>
	</section>

	<section class="mb-8">
		<h2 class="mb-2 text-xl font-semibold">{$t('translations.legal.hosting.title')}</h2>
		<p>{$t('translations.legal.hosting.text')}</p>
	</section>

	<section class="mb-8">
		<h2 class="mb-2 text-xl font-semibold">{$t('translations.legal.ip.title')}</h2>
		<p>{$t('translations.legal.ip.text')}</p>
	</section>

	<section class="mb-8">
		<h2 class="mb-2 text-xl font-semibold">{$t('translations.legal.rgpd.title')}</h2>
		<p class="mb-2">{$t('translations.legal.rgpd.text1')}</p>
		<p>{$t('translations.legal.rgpd.text2')}</p>
	</section>

	<section class="mb-8">
		<h2 class="mb-2 text-xl font-semibold">{$t('translations.legal.liability.title')}</h2>
		<p>{$t('translations.legal.liability.text')}</p>
	</section>

	<section>
		<h2 class="mb-2 text-xl font-semibold">{$t('translations.legal.updated.title')}</h2>
		<p>{$t('translations.legal.updated.date')}</p>
	</section>
</div>

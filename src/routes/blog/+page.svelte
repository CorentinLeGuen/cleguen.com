<script>
	import { Card } from 'flowbite-svelte';
	import { ArrowUpRightFromSquareOutline } from 'flowbite-svelte-icons';
	import { t } from '$lib/i18n/config';
</script>

<div class="mx-auto max-w-full sm:max-w-3/4 md:max-w-2/3 xl:max-w-1/2 2xl:max-w-1/3">
    <h1 class="text-center text-4xl font-extrabold mb-8">{$t('translations.nav.blog')}</h1>

	<Card class="text-justify mx-auto">
		<h5 class="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white text-center">
			L’intelligence artificielle, progrès ou dérive ?
		</h5>
        <div class="flex justify-between mx-4">
            <p class="text-sm italic mb-2 text-gray-500 dark:text-gray-400">Publié le 2 Avril 2025</p>
            <p class="font-bold">FR</p>
        </div>
		<p class="mb-3 font-normal text-gray-500 dark:text-gray-400">
			Cet article propose une réflexion sur les enjeux
            éthiques de l’intelligence artificielle, à travers des exemples concrets et des questions ouvertes.
		</p>
		<a href="/blog/ia-progres-derive-ethique" class="text-center">
			<span class="text-primary-600 inline-flex items-center hover:underline">
				Consulter l'article
				<ArrowUpRightFromSquareOutline class="ms-2.5 h-4 w-4" />
			</span>
		</a>
	</Card>
</div>

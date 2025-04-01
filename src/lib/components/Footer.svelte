<script>
	import { Footer, FooterCopyright, FooterLinkGroup, FooterLink } from 'flowbite-svelte';
	import { t } from '$lib/i18n/config';
</script>

<Footer class="border-t-1 border-gray-100 dark:border-gray-800">
	<div class="w-full mx-auto max-w-screen-xl p-4 flex items-center justify-between">
        <span class="self-center whitespace-nowrap text-sm text-gray-700 dark:text-gray-400">
            &copy; 2025 - <a href="/" class="font-semibold">Corentin Le Guen</a>
        </span>
		<FooterLinkGroup ulClass="flex flex-wrap items-center text-sm text-gray-500 dark:text-gray-400">
			<FooterLink href="/about">{$t('translations.about.title')}</FooterLink>
			<FooterLink href="/legal">{$t('translations.legal.title')}</FooterLink>
		</FooterLinkGroup>
	</div>
</Footer>

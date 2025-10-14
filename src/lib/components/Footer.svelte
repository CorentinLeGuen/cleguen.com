<script>
	import { Footer, FooterCopyright, FooterLinkGroup, FooterLink } from 'flowbite-svelte';
	import { t } from '$lib/i18n/config';
</script>

<Footer>
	<div class="w-full mx-auto max-w-screen-xl flex items-center justify-between">
        <span class="self-center text-sm text-gray-700 dark:text-gray-400">
            &copy; 2025 <a href="/" class="font-semibold">Corentin Le Guen</a> - {$t('translations.legal.rights')} 
        </span>
		<FooterLinkGroup class="flex flex-wrap items-center text-sm text-gray-500 dark:text-gray-400">
			<FooterLink href="/about">{$t('translations.about.title')}</FooterLink>
			<FooterLink href="/legal">{$t('translations.legal.title')}</FooterLink>
		</FooterLinkGroup>
	</div>
</Footer>

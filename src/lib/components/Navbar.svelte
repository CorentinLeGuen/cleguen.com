<script>
	import { Navbar, NavBrand, NavLi, NavUl, NavHamburger } from 'flowbite-svelte';
	import ThemeToggle from './ThemeToggle.svelte';
    import LanguageSwitcher from './LanguageSwitcher.svelte';
	import { t } from '$lib/i18n/config';
</script>

<Navbar color="form">
	<NavBrand href="/">
		<img src="/favicon.svg" class="me-3 h-6 sm:h-9" alt="Website Logo" />
		<span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white">CLeGuen</span>
	</NavBrand>
	<div class="flex md:order-2">
		<ThemeToggle />
        <LanguageSwitcher />
		<NavHamburger />
	</div>
	<NavUl>
		<NavLi href="/blog/">{$t('translations.nav.blog')}</NavLi>
		<NavLi href="/about">{$t('translations.nav.about')} & {$t('translations.nav.contact')}</NavLi>
	</NavUl>
</Navbar>

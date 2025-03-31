<script>
	import { Navbar, NavBrand, NavLi, NavUl, NavHamburger } from 'flowbite-svelte';
	import ThemeToggle from './ThemeToggle.svelte';
</script>

<Navbar rounded color="form">
	<NavBrand href="/">
		<img src="/favicon.svg" class="me-3 h-6 sm:h-9" alt="Website Logo" />
		<span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white">CLeGuen</span>
	</NavBrand>
	<div class="flex md:order-2">
		<ThemeToggle />
		<NavHamburger />
	</div>
	<NavUl>
		<NavLi href="/blog/">Articles</NavLi>
		<NavLi href="/about">About & Contact</NavLi>
	</NavUl>
</Navbar>

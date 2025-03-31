<script>
	import { Button } from 'flowbite-svelte';
	import { FileLinesSolid } from 'flowbite-svelte-icons';
</script>

<h1 class="mb-4 text-3xl font-bold">À propos de moi</h1>

<p class="mb-4">Je suis développeur senior avec X années d'expérience en XYZ...</p>

<ul class="mb-6 ml-6 list-disc">
	<li>Expérience 1</li>
	<li>Expérience 2</li>
	<li>Tech préférées : Svelte, Python, Postgres...</li>
</ul>

<Button outline href="/Resume_CorentinLeGuen.pdf" target="_blank"
	><FileLinesSolid class="me-2 h-5 w-5" /> Download my resume</Button
>

<h2 class="mt-8 mb-2 text-2xl font-semibold">📬 Me contacter</h2>
<p>
	Tu peux m’écrire directement à :
	<a class="text-blue-500 hover:underline" href="mailto:ton@email.com"> ton@email.com </a>
</p>

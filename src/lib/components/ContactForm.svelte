<script>
	import { Input, Label, Helper } from 'flowbite-svelte';
</script>

<Label class="block space-y-2">
	<span>Your email</span>
	<Input label="Email" id="email" name="email" required placeholder="name@flowbite.com" />
	<Helper class="text-sm">
		We’ll never share your details. Read our <a
			href="/"
			class="text-primary-600 dark:text-primary-500 font-medium hover:underline"
		>
			Privacy Policy
		</a>
		.
	</Helper>
</Label>

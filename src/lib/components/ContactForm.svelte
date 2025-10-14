<script>
    import { Input, Button, Helper, Textarea } from 'flowbite-svelte';
    import { ArrowUpRightFromSquareSolid } from 'flowbite-svelte-icons';
	import { t } from '$lib/i18n/config';
</script>

<form action="https://formspree.io/f/xpwpypbj" method="POST" class="border border-gray-200 dark:border-gray-600 rounded-lg p-4 shadow my-8 max-w-full sm:max-w-3/4 md:max-w-2/3 xl:max-w-1/2 2xl:max-w-1/3 mx-auto">
    <h2 class="text-2xl mb-2">{$t('translations.contact.form')}</h2>
    <Input type="email" name="email" required placeholder="contact@email.com" />
    <Textarea class="my-2 w-full" required placeholder="{$t('translations.contact.msg')}" name="message"/>
    <Button outline class="w-full mb-4" type="submit">{$t('translations.contact.send')} <ArrowUpRightFromSquareSolid class="ms-2 h-5 w-5" /></Button>
    <Helper class="text-sm text-gray-700 dark:text-gray-400">
        {$t('translations.legal.info')} <a href="/legal" target="_blank" class="text-orange-600 dark:text-orange-500 font-light hover:underline"> {$t('translations.legal.privacy_policy')} </a>
    </Helper>
</form>

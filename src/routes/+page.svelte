<script>
	import { Button } from 'flowbite-svelte';
	import { ArrowRightOutline } from 'flowbite-svelte-icons';
	import { t } from '$lib/i18n/config';
</script>

<h1 class="text-center text-4xl font-extrabold">{$t('translations.intro')}</h1>

<div class="paragraph my-4 text-center text-2xl">
	{@html $t('translations.about.description.1')}
</div>

<div class="flex justify-center mt-8">
	<a href="/about">
		<Button outline class="x-auto">
			{$t('translations.about.see_about_section')}<ArrowRightOutline class="ms-2 h-5 w-5" />
		</Button>
	</a>
</div>

<hr class="w-48 h-1 mx-auto my-4 bg-gray-100 border-0 rounded-sm md:my-10 dark:bg-gray-700">

<div class="paragraph text-center shadow-xl rounded-xl p-8">
	<h2 class="text-xl font-extrabold text-gray-600 mb-6">{$t('translations.articles.tips.columbia_course.title')}</h2>
	<p class="text-gray-500 my-4">{$t('translations.articles.tips.columbia_course.desc')}</p>
	<p class="text-gray-500">{@html $t('translations.articles.tips.columbia_course.info')}</p>
	<a href="https://www.instagram.com/p/DKAqk_oz6eG/" target="_blank">
		<img src="/images/insta_columbia.png" class="rounded-4xl shadow my-6 w-full sm:w-3/4 mx-auto" alt="instagram post" />
	</a>
	<a href="https://plus.columbia.edu/content/learning-ai-through-visualization" class="border border-gray-400 px-12 py-2 rounded hover:shadow" target="_blank">
		{$t('translations.articles.tips.columbia_course.link')}
	</a>
</div>
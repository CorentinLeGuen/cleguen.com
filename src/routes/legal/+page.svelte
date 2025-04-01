<script lang="ts">
    import { t } from '$lib/i18n/config';
  </script>
  
  <h1 class="text-3xl font-bold mb-6">{$t('translations.legal.title')}</h1>
  
  <section class="mb-8">
    <h2 class="text-xl font-semibold mb-2">{$t('translations.legal.publisher.title')}</h2>
    <p>{@html $t('translations.legal.publisher.text')}</p>
  </section>
  
  <section class="mb-8">
    <h2 class="text-xl font-semibold mb-2">{$t('translations.legal.hosting.title')}</h2>
    <p>{$t('translations.legal.hosting.text')}</p>
  </section>
  
  <section class="mb-8">
    <h2 class="text-xl font-semibold mb-2">{$t('translations.legal.ip.title')}</h2>
    <p>{$t('translations.legal.ip.text')}</p>
  </section>
  
  <section class="mb-8">
    <h2 class="text-xl font-semibold mb-2">{$t('translations.legal.rgpd.title')}</h2>
    <p class="mb-2">{$t('translations.legal.rgpd.text1')}</p>
    <p>{$t('translations.legal.rgpd.text2')}</p>
  </section>
  
  <section class="mb-8">
    <h2 class="text-xl font-semibold mb-2">{$t('translations.legal.liability.title')}</h2>
    <p>{$t('translations.legal.liability.text')}</p>
  </section>
  
  <section>
    <h2 class="text-xl font-semibold mb-2">{$t('translations.legal.updated.title')}</h2>
    <p>{$t('translations.legal.updated.date')}</p>
  </section>
  
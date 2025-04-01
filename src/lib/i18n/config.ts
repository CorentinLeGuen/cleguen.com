import i18n from 'sveltekit-i18n';

/** @type {import('sveltekit-i18n').Config} */
const config = {
  loaders: [
    {
      locale: 'en',
      key: 'translations',
      loader: async () => (await import('./lang/en.json')).default,
    },
    {
      locale: 'fr',
      key: 'translations',
      loader: async () => (await import('./lang/fr.json')).default,
    },
  ],
  initialLocale: 'fr', // Set the default locale
};

export const { t, locale, locales, loading, loadTranslations } = new i18n(config);

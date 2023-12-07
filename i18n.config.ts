export default defineI18nConfig(() => ({
    legacy: false,
    locale: 'en',
    messages: {
        en: {
            welcome: 'Welcome',
            under_construction: 'This website is under construction.',
            contact_intro: 'You can still',
            contact: 'contact me',
            under_construction_translate: 'Some pages are not yet translated.'
        },
        fr: {
            welcome: 'Bienvenue',
            under_construction: 'Ce site est en cours de construction.',
            contact_intro: 'Vous pouvez toujours ',
            contact: 'me contacter',
            under_construction_translate: 'La plupart des pages ne sont pas encore traduites en français.'
        }
    }
}))

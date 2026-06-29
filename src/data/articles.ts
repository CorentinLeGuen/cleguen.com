// Single source of truth for blog articles.
// `i18nKey` points at the locale subtree holding the article's title/description/dates
// (see `blog.*` in src/locales/*.json); `slug` is the URL segment under /blog/.
export interface Article {
    slug: string
    i18nKey: string
    category: string
}

export const articles: Article[] = [
    { slug: 'ia-hallucination', i18nKey: 'blog.2', category: 'AI & Tech' },
    { slug: 'ia-progress-or-downfall', i18nKey: 'blog.1', category: 'Reflections' },
]

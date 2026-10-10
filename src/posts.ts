import { getCollection } from 'astro:content';
import type { Lang } from './i18n';

// Published posts for one language, newest first. Entry ids look like "zh/hello".
export async function getPosts(lang: Lang) {
  const posts = await getCollection(
    'blog',
    (p) => p.id.startsWith(`${lang}/`) && !p.data.draft,
  );
  return posts
    .map((p) => ({ ...p, slug: p.id.slice(lang.length + 1) }))
    .sort((a, b) => b.data.date.getTime() - a.data.date.getTime());
}

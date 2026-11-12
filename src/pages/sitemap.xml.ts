import type { APIRoute } from 'astro';
import { base, htmlLang, type Lang } from '../i18n';
import { getPosts } from '../posts';

// Every indexable page, with hreflang pairs for pages that exist in both
// languages. Built from the same post list as the blog, so drafts stay out.
export const GET: APIRoute = async ({ site }) => {
  const abs = (path: string) => new URL(path, site).href;
  const langs: Lang[] = ['zh', 'en'];
  const pair = (paths: Record<Lang, string>) =>
    langs.map((lang) => ({ loc: abs(paths[lang]), alternates: paths }));

  const entries: { loc: string; lastmod?: string; alternates?: Record<Lang, string> }[] = [
    ...pair({ zh: base.zh, en: base.en }),
    ...pair({ zh: `${base.zh}blog/`, en: `${base.en}blog/` }),
  ];

  const posts = { zh: await getPosts('zh'), en: await getPosts('en') };
  for (const lang of langs) {
    const other: Lang = lang === 'zh' ? 'en' : 'zh';
    for (const post of posts[lang]) {
      const translated = posts[other].some((p) => p.slug === post.slug);
      entries.push({
        loc: abs(`${base[lang]}blog/${post.slug}/`),
        lastmod: post.data.date.toISOString().slice(0, 10),
        alternates: translated
          ? ({ [lang]: `${base[lang]}blog/${post.slug}/`, [other]: `${base[other]}blog/${post.slug}/` } as Record<Lang, string>)
          : undefined,
      });
    }
  }

  const body = entries
    .map(({ loc, lastmod, alternates }) => {
      const links = alternates
        ? langs
            .map((l) => `<xhtml:link rel="alternate" hreflang="${htmlLang[l]}" href="${abs(alternates[l])}"/>`)
            .join('')
        : '';
      return `<url><loc>${loc}</loc>${lastmod ? `<lastmod>${lastmod}</lastmod>` : ''}${links}</url>`;
    })
    .join('\n');

  return new Response(
    `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">\n${body}\n</urlset>\n`,
    { headers: { 'Content-Type': 'application/xml; charset=utf-8' } },
  );
};

import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';
import { siteUrl } from '~/config/site';
import { parseEntryId } from '~/lib/content';
import { defaultLocale } from '~/i18n/routing';
import { detailPath } from '~/lib/url';

export const GET: APIRoute = async () => {
  const entries = await getCollection('wiki');
  const pages = entries.flatMap((entry) => {
    if (entry.data.draft || entry.data.noindex) return [];
    const parsed = parseEntryId(entry.id);
    if (!parsed) return [];
    const pagePath = detailPath(entry.data.category, parsed.slug, parsed.locale);
    const markdownPath = `/agent-content/${parsed.locale === defaultLocale ? '' : `${parsed.locale}/`}${parsed.category}/${parsed.slug}.md`;
    return [{
      id: entry.id.replace(/\.mdx$/, ''),
      title: entry.data.title,
      description: entry.data.description,
      summary: entry.data.summary ?? entry.data.description,
      category: entry.data.category,
      locale: parsed.locale,
      tags: entry.data.tags,
      updated: (entry.data.lastModified ?? entry.data.date).toISOString().slice(0, 10),
      url: `${siteUrl}${pagePath}`,
      path: pagePath,
      markdown_url: `${siteUrl}${markdownPath}`,
      markdown_path: markdownPath,
    }];
  }).sort((a, b) => a.locale.localeCompare(b.locale) || a.category.localeCompare(b.category) || a.title.localeCompare(b.title));

  return new Response(JSON.stringify({
    schema_version: 1,
    site: siteUrl,
    description: 'Published public Aniimo Wiki pages; draft and noindex entries are excluded.',
    count: pages.length,
    pages,
  }), {
    headers: { 'Content-Type': 'application/json; charset=utf-8' },
  });
};

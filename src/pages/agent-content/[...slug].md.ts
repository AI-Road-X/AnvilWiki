import type { APIRoute } from 'astro';
import { getCollection, getEntry } from 'astro:content';
import { siteUrl } from '~/config/site';
import { defaultLocale } from '~/i18n/routing';
import { parseEntryId } from '~/lib/content';
import { detailPath } from '~/lib/url';

export async function getStaticPaths() {
  const entries = await getCollection('wiki');
  return entries.flatMap((entry) => {
    if (entry.data.draft || entry.data.noindex) return [];
    const parsed = parseEntryId(entry.id);
    if (!parsed) return [];
    const localePrefix = parsed.locale === defaultLocale ? '' : `${parsed.locale}/`;
    return [{
      params: { slug: `${localePrefix}${parsed.category}/${parsed.slug}` },
      props: { entryId: entry.id.replace(/\.mdx$/, '') },
    }];
  });
}

interface Props {
  entryId: string;
}

export const GET: APIRoute = async ({ props }) => {
  const entry = await getEntry('wiki', (props as Props).entryId);
  if (!entry || entry.data.draft || entry.data.noindex) return new Response('Not Found', { status: 404 });
  const parsed = parseEntryId(entry.id);
  if (!parsed) return new Response('Not Found', { status: 404 });

  const pageUrl = `${siteUrl}${detailPath(entry.data.category, parsed.slug, parsed.locale)}`;
  const updated = entry.data.lastModified ?? entry.data.date;
  const summary = entry.data.summary?.trim();
  const body = (entry.body ?? '').trim();
  const markdown = [
    `# ${entry.data.title}`,
    '',
    `Canonical source: ${pageUrl}`,
    `Category: ${entry.data.category}`,
    `Language: ${parsed.locale}`,
    `Last reviewed: ${updated.toISOString().slice(0, 10)}`,
    summary ? '' : undefined,
    summary ? `## Quick answer\n\n${summary}` : undefined,
    body ? '' : undefined,
    body || undefined,
    '',
  ].filter((part): part is string => part !== undefined).join('\n');

  return new Response(markdown, {
    headers: { 'Content-Type': 'text/markdown; charset=utf-8' },
  });
};

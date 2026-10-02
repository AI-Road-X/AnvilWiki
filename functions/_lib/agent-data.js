const MAX_QUERY_LENGTH = 200;
const MAX_PAGE_CHARS = 12000;

export async function loadPublishedIndex(context) {
  const url = new URL('/api/agent/index.json', context.request.url);
  const response = await context.env.ASSETS.fetch(new Request(url));
  if (!response.ok) throw new Error('Published page index is unavailable.');
  const index = await response.json();
  if (!Array.isArray(index.pages)) throw new Error('Published page index has an invalid shape.');
  return index.pages;
}

export function searchPages(pages, query, category, requestedLimit) {
  const q = typeof query === 'string' ? query.trim().slice(0, MAX_QUERY_LENGTH) : '';
  if (!q) return { error: 'missing_query', message: 'Provide a non-empty q search term.' };
  const terms = q.toLocaleLowerCase().split(/\s+/).filter(Boolean);
  const safeCategory = typeof category === 'string' ? category.trim().toLowerCase() : '';
  const limit = Math.max(1, Math.min(10, Number.parseInt(String(requestedLimit ?? 5), 10) || 5));

  const results = pages.flatMap((page) => {
    if (safeCategory && page.category.toLowerCase() !== safeCategory) return [];
    const title = page.title.toLocaleLowerCase();
    const searchable = [page.title, page.description, page.summary, page.category, ...(page.tags ?? [])]
      .join(' ')
      .toLocaleLowerCase();
    if (!terms.every((term) => searchable.includes(term))) return [];
    const score = terms.reduce((total, term) => total + (title === term ? 8 : title.includes(term) ? 4 : 1), 0);
    return [{ page, score }];
  }).sort((a, b) => b.score - a.score || a.page.title.localeCompare(b.page.title)).slice(0, limit);

  return {
    query: q,
    count: results.length,
    results: results.map(({ page }) => ({
      title: page.title,
      summary: page.summary,
      category: page.category,
      locale: page.locale,
      updated: page.updated,
      url: page.url,
      markdown_url: page.markdown_url,
    })),
  };
}

export async function readPage(context, pathOrId) {
  if (typeof pathOrId !== 'string' || pathOrId.length > 500) {
    return { status: 400, body: { error: 'invalid_page', message: 'Provide a published page path or ID.' } };
  }
  const pages = await loadPublishedIndex(context);
  const normalized = pathOrId.trim();
  const page = pages.find((item) => item.path === normalized || item.id === normalized || item.url === normalized);
  if (!page) return { status: 404, body: { error: 'not_found', message: 'No published page matches that path or ID.' } };

  const assetUrl = new URL(page.markdown_path, context.request.url);
  const response = await context.env.ASSETS.fetch(new Request(assetUrl));
  if (!response.ok) return { status: 502, body: { error: 'page_unavailable', message: 'The published Markdown page could not be loaded.' } };
  const markdown = await response.text();
  const truncated = markdown.length > MAX_PAGE_CHARS;
  return {
    status: 200,
    body: {
      id: page.id,
      title: page.title,
      url: page.url,
      updated: page.updated,
      markdown: truncated ? `${markdown.slice(0, MAX_PAGE_CHARS)}\n\n[Output truncated at ${MAX_PAGE_CHARS} characters.]` : markdown,
      truncated,
    },
  };
}

export function jsonResponse(body, status = 200) {
  return new Response(JSON.stringify(body), {
    status,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers': 'Content-Type, Mcp-Protocol-Version',
      'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
      'Cache-Control': 'no-store',
      'Content-Type': 'application/json; charset=utf-8',
      'X-Content-Type-Options': 'nosniff',
    },
  });
}

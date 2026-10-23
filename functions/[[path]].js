function addVaryAccept(headers) {
  const values = (headers.get('Vary') ?? '').split(',').map((value) => value.trim()).filter(Boolean);
  if (!values.some((value) => value.toLowerCase() === 'accept')) values.push('Accept');
  headers.set('Vary', values.join(', '));
}

export async function onRequest(context) {
  const request = context.request;
  const url = new URL(request.url);
  const acceptsMarkdown = /(?:^|,)\s*text\/markdown(?:\s*;[^,]*)?(?:,|$)/i.test(request.headers.get('Accept') ?? '');

  if (acceptsMarkdown && (request.method === 'GET' || request.method === 'HEAD')) {
    let markdownPath = null;
    if (url.pathname === '/' || url.pathname === '/index.html') {
      markdownPath = '/agent-content/index.md';
    } else {
      const indexResponse = await context.env.ASSETS.fetch(new Request(new URL('/api/agent/index.json', url)));
      if (indexResponse.ok) {
        const index = await indexResponse.json();
        const match = index.pages?.find((page) => page.path === url.pathname || page.path === `${url.pathname.replace(/\/+$/, '')}/`);
        if (match) markdownPath = match.markdown_path;
      }
    }

    if (markdownPath) {
      const assetUrl = new URL(markdownPath, url);
      const markdownResponse = await context.env.ASSETS.fetch(new Request(assetUrl, { method: request.method }));
      if (markdownResponse.ok) {
        const headers = new Headers(markdownResponse.headers);
        headers.set('Content-Type', 'text/markdown; charset=utf-8');
        addVaryAccept(headers);
        headers.set('X-Content-Type-Options', 'nosniff');
        return new Response(request.method === 'HEAD' ? null : markdownResponse.body, {
          status: markdownResponse.status,
          headers,
        });
      }
    }
  }

  const response = await context.next();
  if (!(response.headers.get('Content-Type') ?? '').toLowerCase().startsWith('text/html')) return response;
  const headers = new Headers(response.headers);
  addVaryAccept(headers);
  return new Response(response.body, { status: response.status, statusText: response.statusText, headers });
}

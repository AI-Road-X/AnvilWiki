import { jsonResponse, loadPublishedIndex, searchPages } from '../../_lib/agent-data.js';

export async function onRequest(context) {
  if (context.request.method === 'OPTIONS') {
    return new Response(null, {
      status: 204,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type',
        'Access-Control-Max-Age': '86400',
      },
    });
  }
  if (context.request.method !== 'GET') return jsonResponse({ error: 'method_not_allowed' }, 405);
  const url = new URL(context.request.url);
  try {
    const pages = await loadPublishedIndex(context);
    const result = searchPages(pages, url.searchParams.get('q'), url.searchParams.get('category'), url.searchParams.get('limit'));
    return jsonResponse(result, result.error ? 400 : 200);
  } catch {
    return jsonResponse({ error: 'index_unavailable', message: 'The published page index is temporarily unavailable.' }, 503);
  }
}

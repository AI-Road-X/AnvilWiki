import { jsonResponse, readPage } from '../../_lib/agent-data.js';

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
  const path = new URL(context.request.url).searchParams.get('path');
  try {
    const result = await readPage(context, path);
    return jsonResponse(result.body, result.status);
  } catch {
    return jsonResponse({ error: 'page_unavailable', message: 'The published page is temporarily unavailable.' }, 503);
  }
}

const supportedOperations = new Set(['authorize', 'token', 'register', 'claim', 'resource']);

export async function onRequest(context) {
  const operation = context.params.operation;
  if (!supportedOperations.has(operation)) return new Response('Not Found', { status: 404 });
  return new Response(JSON.stringify({
    status: 'under_construction',
    available: false,
    error: 'temporarily_unavailable',
    error_description: 'Authentication and registration are not available. Use the public read-only Aniimo Wiki lookup service.',
  }), {
    status: 503,
    headers: {
      'Cache-Control': 'no-store',
      'Content-Type': 'application/json; charset=utf-8',
      'Retry-After': '86400',
      'X-Content-Type-Options': 'nosniff',
    },
  });
}

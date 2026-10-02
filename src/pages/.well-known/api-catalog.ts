import type { APIRoute } from 'astro';

const origin = 'https://aniimo-guides.com';
const catalog = {
  linkset: [
    {
      anchor: `${origin}/`,
      'service-desc': [{ href: `${origin}/openapi.json`, type: 'application/vnd.oai.openapi+json;version=3.1.0' }],
      'service-doc': [{ href: `${origin}/ai/`, type: 'text/html' }, { href: `${origin}/ai/index.ilang`, type: 'text/plain' }],
      describedby: [{ href: `${origin}/.well-known/mcp/server-card.json`, type: 'application/json' }],
    },
    {
      anchor: `${origin}/api/agent/search`,
      'service-desc': [{ href: `${origin}/openapi.json`, type: 'application/vnd.oai.openapi+json;version=3.1.0' }],
    },
    {
      anchor: `${origin}/mcp`,
      'service-desc': [{ href: `${origin}/openapi.json`, type: 'application/vnd.oai.openapi+json;version=3.1.0' }],
      describedby: [{ href: `${origin}/.well-known/mcp/server-card.json`, type: 'application/json' }],
    },
  ],
};

export const GET: APIRoute = () => new Response(JSON.stringify(catalog), {
  headers: {
    'Access-Control-Allow-Origin': '*',
    'Content-Type': 'application/linkset+json; charset=utf-8',
    'X-Content-Type-Options': 'nosniff',
  },
});

import type { APIRoute } from 'astro';

const origin = 'https://aniimo-guides.com';
const metadata = {
  status: 'under_construction',
  available: false,
  capabilities_status: 'planned_contract_only',
  message: 'OAuth is unavailable. Existing public read-only lookup does not require authentication.',
  launch_date: null,
  resource: origin,
  planned_resource_endpoint: `${origin}/agent-auth/resource`,
  authorization_servers: [origin],
  scopes_supported: ['site:read'],
  bearer_methods_supported: ['header'],
};

export const GET: APIRoute = () => new Response(JSON.stringify(metadata), {
  headers: { 'Cache-Control': 'public, max-age=300', 'Content-Type': 'application/json; charset=utf-8' },
});

import type { APIRoute } from 'astro';

const serverCard = {
  serverInfo: { name: 'aniimo-guides-readonly', version: '1.0.0', title: 'Aniimo Wiki public lookup' },
  description: 'Read-only search and retrieval for published public Aniimo Wiki guides.',
  endpoint: 'https://aniimo-guides.com/mcp',
  transport: 'streamable-http',
  authentication: { required: false, description: 'Public lookup is unauthenticated; OAuth is construction-only and unavailable.' },
  capabilities: {
    tools: [
      { name: 'search_aniimo_wiki', description: 'Search public published wiki pages.' },
      { name: 'read_aniimo_page', description: 'Read one published public guide by a returned path or ID.' },
    ],
    resources: [],
    prompts: [],
  },
};

export const GET: APIRoute = () => new Response(JSON.stringify(serverCard), {
  headers: { 'Access-Control-Allow-Origin': '*', 'Content-Type': 'application/json; charset=utf-8' },
});

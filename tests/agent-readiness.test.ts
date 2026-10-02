import { describe, expect, it } from 'vitest';
import { searchPages, readPage } from '../functions/_lib/agent-data.js';
import { onRequest as searchHandler } from '../functions/api/agent/search.js';
import { onRequest as readHandler } from '../functions/api/agent/read.js';
import { onRequest as mcpHandler } from '../functions/mcp.js';

const pages = [
  {
    id: 'en/characters/sparki', title: 'Sparki', description: 'Electric Aniimo', summary: 'A quick guide to Sparki.',
    category: 'characters', locale: 'en', tags: ['electric'], updated: '2026-10-01',
    url: 'https://aniimo-guides.com/characters/sparki/', path: '/characters/sparki/',
    markdown_url: 'https://aniimo-guides.com/agent-content/characters/sparki.md',
    markdown_path: '/agent-content/characters/sparki.md',
  },
];

function makeContext(request: Request) {
  const calls: string[] = [];
  const context = {
    request,
    env: {
      ASSETS: {
        fetch: async (assetRequest: Request) => {
          const url = new URL(assetRequest.url);
          calls.push(url.pathname);
          if (url.pathname === '/api/agent/index.json') {
            return Response.json({ pages });
          }
          if (url.pathname === '/agent-content/characters/sparki.md') {
            return new Response('# Sparki\n\nElectric guide.', { headers: { 'Content-Type': 'text/markdown' } });
          }
          return new Response('missing', { status: 404 });
        },
      },
    },
  };
  return { context, calls };
}

describe('agent-ready read-only interfaces', () => {
  it('searches published metadata and caps result count', () => {
    expect(searchPages(pages, 'electric', undefined, 100).results).toHaveLength(1);
    expect(searchPages(pages, '', undefined, 5).error).toBe('missing_query');
  });

  it('reads only a page present in the published index', async () => {
    const { context, calls } = makeContext(new Request('https://aniimo-guides.com/api/agent/read?path=%2Fcharacters%2Fsparki%2F'));
    const result = await readPage(context, '/characters/sparki/');
    expect(result.status).toBe(200);
    expect(result.body.markdown).toContain('# Sparki');
    expect(calls).toContain('/agent-content/characters/sparki.md');

    const rejected = await readPage(context, 'https://example.com/secret');
    expect(rejected.status).toBe(404);
    expect(calls).not.toContain('/secret');
  });

  it('serves search API and handles unsupported methods', async () => {
    const { context } = makeContext(new Request('https://aniimo-guides.com/api/agent/search?q=sparki'));
    const response = await searchHandler(context);
    expect(response.status).toBe(200);
    expect((await response.json()).results[0].title).toBe('Sparki');

    const unsupported = await searchHandler({ ...context, request: new Request('https://aniimo-guides.com/api/agent/search', { method: 'POST' }) });
    expect(unsupported.status).toBe(405);
  });

  it('serves a bounded page through the read API', async () => {
    const { context } = makeContext(new Request('https://aniimo-guides.com/api/agent/read?path=%2Fcharacters%2Fsparki%2F'));
    const response = await readHandler(context);
    expect(response.status).toBe(200);
    expect((await response.json()).markdown).toContain('Electric guide.');
  });

  it('provides MCP initialization and read-only tool discovery', async () => {
    const { context } = makeContext(new Request('https://aniimo-guides.com/mcp', { method: 'POST', body: JSON.stringify({ jsonrpc: '2.0', id: 1, method: 'initialize', params: { protocolVersion: '2025-11-25' } }) }));
    const initialized = await mcpHandler(context);
    const initData = await initialized.json();
    expect(initData.result.protocolVersion).toBe('2025-11-25');
    expect(initData.result.capabilities.tools).toBeTruthy();

    const listed = await mcpHandler({ ...context, request: new Request('https://aniimo-guides.com/mcp', { method: 'POST', body: JSON.stringify({ jsonrpc: '2.0', id: 2, method: 'tools/list' }) }) });
    const toolNames = (await listed.json()).result.tools.map((tool: { name: string }) => tool.name);
    expect(toolNames).toEqual(['search_aniimo_wiki', 'read_aniimo_page']);
  });

  it('returns honest temporary-unavailable responses for reserved auth endpoints', async () => {
    const { context } = makeContext(new Request('https://aniimo-guides.com/agent-auth/token'));
    const { onRequest } = await import('../functions/agent-auth/[operation].js');
    const response = await onRequest({ ...context, params: { operation: 'token' } });
    expect(response.status).toBe(503);
    expect(response.headers.get('Cache-Control')).toBe('no-store');
  });
});

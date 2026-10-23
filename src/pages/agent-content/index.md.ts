import type { APIRoute } from 'astro';
import { site, siteUrl } from '~/config/site';

export const GET: APIRoute = () => {
  const content = `# ${site.name}\n\n${site.description}\n\n` +
    `This is an unofficial, public, read-only community guide for ${site.game.name}. It is not affiliated with ${site.game.developer}.\n\n` +
    `## Find published pages\n\n` +
    `- Search API: ${siteUrl}/api/agent/search?q=QUERY\n` +
    `- Public page index: ${siteUrl}/api/agent/index.json\n` +
    `- MCP endpoint: ${siteUrl}/mcp\n` +
    `- Agent usage instructions: ${siteUrl}/ai/index.ilang\n` +
    `- Human-readable site overview: ${siteUrl}/ai/\n` +
    `- Sitemap: ${siteUrl}/sitemap-index.xml\n` +
    `- LLM page list: ${siteUrl}/llms.txt\n\n` +
    `Use the read-only search and page lookup tools. Preserve article dates and qualifiers, cite the returned canonical page URL, and do not invent facts absent from the page.\n`;

  return new Response(content, {
    headers: { 'Content-Type': 'text/markdown; charset=utf-8' },
  });
};

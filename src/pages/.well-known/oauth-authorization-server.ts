import type { APIRoute } from 'astro';

const origin = 'https://aniimo-guides.com';
const metadata = {
  status: 'under_construction',
  available: false,
  capabilities_status: 'planned_contract_only',
  message: 'Authentication is not available. Use the public read-only lookup service.',
  launch_date: null,
  issuer: origin,
  authorization_endpoint: `${origin}/agent-auth/authorize`,
  token_endpoint: `${origin}/agent-auth/token`,
  jwks_uri: `${origin}/.well-known/jwks.json`,
  grant_types_supported: ['authorization_code', 'urn:ietf:params:oauth:grant-type:jwt-bearer'],
  response_types_supported: ['code'],
  code_challenge_methods_supported: ['S256'],
  scopes_supported: ['site:read'],
  agent_auth: {
    status: 'under_construction',
    available: false,
    capabilities_status: 'planned_contract_only',
    skill: `${origin}/auth.md`,
    register_uri: `${origin}/agent-auth/register`,
    claim_uri: `${origin}/agent-auth/claim`,
    identity_types_supported: ['anonymous'],
    anonymous: {
      status: 'under_construction',
      available: false,
      capabilities_status: 'planned_contract_only',
      credential_types_supported: ['access_token'],
    },
  },
};

export const GET: APIRoute = () => new Response(JSON.stringify(metadata), {
  headers: { 'Cache-Control': 'public, max-age=300', 'Content-Type': 'application/json; charset=utf-8' },
});

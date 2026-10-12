import type { APIRoute } from 'astro';
import { SITE } from '../site.config';

export const GET: APIRoute = () => {
  const robotsTxt = `User-agent: *
Allow: /

# AI & LLM Crawlers
User-agent: GPTBot
Allow: /

User-agent: ClaudeBot
Allow: /

User-agent: PerplexityBot
Allow: /

User-agent: Applebot-Extended
Allow: /

User-agent: Google-Extended
Allow: /

# Sitemap
Sitemap: ${SITE.url}/sitemap-index.xml
`;

  return new Response(robotsTxt, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
    },
  });
};

import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';
import { SITE } from '../site.config';
import { getPostDate, getPostSlug } from '../utils/posts';

export const GET: APIRoute = async () => {
  const posts = await getCollection('posts');
  const sorted = posts.sort((a, b) => getPostDate(b).getTime() - getPostDate(a).getTime());
  const recentPosts = sorted.slice(0, 10);

  const lines = [
    `# ${SITE.title}`,
    '',
    `> ${SITE.description}`,
    '',
    `Ultimate Triage is a World of Warcraft guild based on the US-Proudmoore server (Alliance).`,
    `This site provides raid progression logs, guild announcements, community updates, and addon guides.`,
    '',
    '## Core Pages',
    '',
    `- [About](${SITE.url}/about): Guild history, raid policies, and general info`,
    `- [Tags](${SITE.url}/tags): Index of articles by topic`,
    `- [Feed](${SITE.url}/feed.xml): RSS 2.0 feed`,
    `- [Full LLM Index](${SITE.url}/llms-full.txt): Complete article catalog for LLMs`,
    '',
    '## Recent Posts',
    '',
    ...recentPosts.map((post) => {
      const slug = getPostSlug(post);
      const desc = post.data.excerpt ? `: ${post.data.excerpt}` : '';
      return `- [${post.data.title}](${SITE.url}/${slug}/)${desc}`;
    }),
    '',
  ];

  return new Response(lines.join('\n'), {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
    },
  });
};

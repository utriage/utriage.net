import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';
import { SITE } from '../site.config';
import { formatDate, getPostDate, getPostSlug } from '../utils/posts';

export const GET: APIRoute = async () => {
  const posts = await getCollection('posts');
  const sorted = posts.sort((a, b) => getPostDate(b).getTime() - getPostDate(a).getTime());

  const lines = [
    `# ${SITE.title} - Full Article Catalog`,
    '',
    `> ${SITE.description}`,
    '',
    `Complete index of all articles published on ${SITE.url}.`,
    '',
    '## All Articles',
    '',
    ...sorted.map((post) => {
      const slug = getPostSlug(post);
      const date = formatDate(getPostDate(post));
      const excerpt = post.data.excerpt ? `\n  - Summary: ${post.data.excerpt}` : '';
      const tags = post.data.tags?.length ? `\n  - Tags: ${post.data.tags.join(', ')}` : '';
      return `- **[${post.data.title}](${SITE.url}/${slug}/)** (${date})${excerpt}${tags}`;
    }),
    '',
  ];

  return new Response(lines.join('\n'), {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
    },
  });
};

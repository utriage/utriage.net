import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import { SITE } from '../site.config';
import { getPostDate, getPostSlug } from '../utils/posts';

export async function GET(context: { site: URL }) {
  const posts = await getCollection('posts');
  const sorted = posts.sort((a, b) => getPostDate(b).getTime() - getPostDate(a).getTime());

  return rss({
    title: SITE.title,
    description: SITE.description,
    site: context.site || SITE.url,
    items: sorted.map((post) => ({
      title: post.data.title,
      pubDate: getPostDate(post),
      description: post.data.excerpt || '',
      link: `/${getPostSlug(post)}/`,
    })),
  });
}

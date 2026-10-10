import type { CollectionEntry } from 'astro:content';

export function getPostSlug(entry: CollectionEntry<'posts'>): string {
  if (entry.data.permalink) {
    return entry.data.permalink.replace(/^\//, '').replace(/\/$/, '');
  }
  // Strip YYYY-MM-DD- prefix and .md extension from id
  const filename = entry.id.split('/').pop() || entry.id;
  return filename.replace(/^(\d{4}-\d{2}-\d{2}-)/, '').replace(/\.md$/, '');
}

export function getPostDate(entry: CollectionEntry<'posts'>): Date {
  if (entry.data.date) {
    return new Date(entry.data.date);
  }
  const match = entry.id.match(/(\d{4})-(\d{2})-(\d{2})/);
  if (match) {
    return new Date(`${match[1]}-${match[2]}-${match[3]}T00:00:00Z`);
  }
  return new Date();
}

export function formatDate(date: Date): string {
  const y = date.getUTCFullYear();
  const m = String(date.getUTCMonth() + 1).padStart(2, '0');
  const d = String(date.getUTCDate()).padStart(2, '0');
  return `${y}/${m}/${d}`;
}

export function getPostTags(entry: CollectionEntry<'posts'> | CollectionEntry<'pages'>): string[] {
  const tags = entry.data.tags || entry.data.tag || ['blog'];
  return Array.isArray(tags) ? tags : [tags];
}

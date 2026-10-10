import { glob } from 'astro/loaders';
import type { Loader } from 'astro/loaders';

export function transformLiquid(text: string): string {
  // 1. Gallery
  const galleryRegex =
    /{%\s*capture\s+images\s*%}([\s\S]*?){%\s*endcapture\s*%}\s*{%\s*include\s+gallery\.html\s+images=images\s+caption=["'“”]?([^"'“”\n]*)["'“”]?(?:\s+cols=(\d+))?\s*%}/g;
  text = text.replace(galleryRegex, (_, imagesBlock, caption, cols) => {
    const colNum = parseInt(cols || '1', 10);
    const colClass = colNum === 2 ? 'half' : colNum === 3 ? 'third' : '';
    const classAttr = colClass ? ` class="${colClass}"` : '';
    const urls = imagesBlock
      .split('\n')
      .map((s: string) => s.trim())
      .filter((s: string) => s.length > 0);
    const links = urls
      .map((url: string) => `<a href="${url}" data-lightbox="${caption}"><img src="${url}" alt="" /></a>`)
      .join('\n');
    return `<figure${classAttr}>\n${links}\n<figcaption>${caption}</figcaption>\n</figure>`;
  });

  // 2. Image
  text = text.replace(
    /{%\s*include\s+image\s+src=["'“”]?([^"'“”\s>]+)["'“”]?\s*%}(?:\{:[^}]+\})?/g,
    (_, src) => {
      return `<a href="${src}" data-lightbox="page"><img src="${src}" alt="" /></a>`;
    }
  );

  // 3. YouTube
  text = text.replace(
    /{%\s*include\s+youtube_embed\.html\s+src=["'“”]?([^"'“”\s>]+)["'“”]?\s*%}/g,
    (_, rawSrc) => {
      const embedSrc = rawSrc
        .replace('watch?v=', 'embed/')
        .replace('youtu.be/', 'www.youtube.com/embed/');
      return `<div class="movie-wrap"><iframe src="${embedSrc}" frameborder="0" allowfullscreen></iframe></div><br />`;
    }
  );

  // 4. Link with preview
  text = text.replace(
    /{%\s*include\s+link_with_preview\.html\s+href=["'“”]?([^"'“”\s>]+)["'“”]?\s*%}/g,
    (_, href) => {
      return `<a class="link_preview" data-href="${href}" data-escaped="${encodeURIComponent(href)}" href="${href}">${href}</a>`;
    }
  );

  // 5. Clean up kramdown IAL like {:data-lightbox="page"}
  text = text.replace(/\{:[^}]+\}/g, '');

  return text;
}

export function liquidGlob(options: Parameters<typeof glob>[0]): Loader {
  const baseLoader = glob(options);

  return {
    name: 'liquid-glob-loader',
    load: async (context: any) => {
      const originalEntryTypes = context.entryTypes;
      if (originalEntryTypes) {
        const mdEntryType = originalEntryTypes.get('.md');
        if (mdEntryType) {
          const originalGetEntryInfo = mdEntryType.getEntryInfo.bind(mdEntryType);
          const wrappedMdEntryType = {
            ...mdEntryType,
            getEntryInfo: async (params: { contents: string; fileUrl: URL }) => {
              const transformed = transformLiquid(params.contents);
              return originalGetEntryInfo({
                ...params,
                contents: transformed,
              });
            },
          };

          const wrappedMap = new Map(originalEntryTypes);
          wrappedMap.set('.md', wrappedMdEntryType);

          return baseLoader.load({
            ...context,
            entryTypes: wrappedMap,
          });
        }
      }

      return baseLoader.load(context);
    },
  };
}

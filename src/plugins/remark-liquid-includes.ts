import { visit } from 'unist-util-visit';
import type { Root, Node } from 'mdast';

function transformLiquidText(text: string): string {
  // 1. Gallery capture + include:
  // {% capture images %} ... {% endcapture %} {% include gallery.html images=images caption="..." cols=3 %}
  const galleryRegex =
    /{%\s*capture\s+images\s*%}([\s\S]*?){%\s*endcapture\s*%}\s*{%\s*include\s+gallery\.html\s+images=images\s+caption=(?:"([^"]*)"|'([^']*)')(?:\s+cols=(\d+))?\s*%}/g;

  let transformed = text.replace(galleryRegex, (_, imagesBlock, cap1, cap2, cols) => {
    const caption = cap1 || cap2 || '';
    const colNum = parseInt(cols || '1', 10);
    const colClass = colNum === 2 ? 'half' : colNum === 3 ? 'third' : '';
    const urls = imagesBlock
      .split('\n')
      .map((s: string) => s.trim())
      .filter((s: string) => s.length > 0);

    const links = urls
      .map((url: string) => `<a href="${url}" data-lightbox="${caption}"><img src="${url}" alt="" /></a>`)
      .join('\n');

    return `<figure class="${colClass}">${links}<figcaption>${caption}</figcaption></figure>`;
  });

  // 2. {% include image src="..." %}
  transformed = transformed.replace(
    /{%\s*include\s+image\s+src=(?:"([^"]+)"|'([^']+)')\s*%}(?:\{:data-lightbox="[^"]*"\}|\s*)?/g,
    (_, src1, src2) => {
      const src = src1 || src2;
      return `<p><a href="${src}" data-lightbox="page"><img src="${src}" alt="" /></a></p>`;
    }
  );

  // 3. {% include youtube_embed.html src="..." %}
  transformed = transformed.replace(
    /{%\s*include\s+youtube_embed\.html\s+src=(?:"([^"]+)"|'([^']+)')\s*%}/g,
    (_, src1, src2) => {
      const rawSrc = src1 || src2;
      const embedSrc = rawSrc
        .replace('watch?v=', 'embed/')
        .replace('youtu.be/', 'www.youtube.com/embed/');
      return `<div class="movie-wrap"><iframe src="${embedSrc}" frameborder="0" allowfullscreen></iframe></div><br />`;
    }
  );

  // 4. {% include link_with_preview.html href="..." %}
  transformed = transformed.replace(
    /{%\s*include\s+link_with_preview\.html\s+href=(?:"([^"]+)"|'([^']+)')\s*%}/g,
    (_, href1, href2) => {
      const href = href1 || href2;
      const escaped = encodeURIComponent(href);
      return `<a class="link_preview" data-href="${href}" data-escaped="${escaped}" href="${href}">${href}</a>`;
    }
  );

  // 5. Clean up any leftover kramdown IAL like {:data-lightbox="page"}
  transformed = transformed.replace(/\{:[^}]+\}/g, '');

  return transformed;
}

export function remarkLiquidIncludes() {
  return (tree: Root) => {
    visit(tree, (node: Node) => {
      if (node.type === 'text' || node.type === 'html') {
        const textNode = node as unknown as { value?: string };
        if (textNode.value && (textNode.value.includes('{%') || textNode.value.includes('{:'))) {
          const transformed = transformLiquidText(textNode.value);
          if (transformed !== textNode.value) {
            textNode.value = transformed;
            (node as unknown as { type: string }).type = 'html';
          }
        }
      }
    });
  };
}

import { defineConfig } from 'astro/config';
import fs from 'node:fs';
import path from 'node:path';

// Vite plugin to serve and copy legacy root static directories (images/, assets/, favicon.*)
function legacyStaticPlugin() {
  return {
    name: 'legacy-static-assets',
    configureServer(server) {
      server.middlewares.use((req, res, next) => {
        const decodedUrl = decodeURI(req.url?.split('?')[0] || '');
        // Check if request matches /images/*, /assets/*, or /favicon.*
        const staticPaths = ['/images/', '/assets/', '/favicon.ico', '/favicon.png'];
        const matched = staticPaths.some((p) => decodedUrl.startsWith(p) || decodedUrl === p);
        if (matched) {
          const filePath = path.resolve(process.cwd(), '.' + decodedUrl);
          if (fs.existsSync(filePath) && fs.statSync(filePath).isFile()) {
            const ext = path.extname(filePath).toLowerCase();
            const mimeTypes = {
              '.jpg': 'image/jpeg',
              '.jpeg': 'image/jpeg',
              '.png': 'image/png',
              '.gif': 'image/gif',
              '.svg': 'image/svg+xml',
              '.ico': 'image/x-icon',
              '.css': 'text/css',
              '.js': 'application/javascript',
              '.woff': 'font/woff',
              '.woff2': 'font/woff2',
              '.ttf': 'font/ttf',
              '.eot': 'application/vnd.ms-fontobject',
            };
            res.setHeader('Content-Type', mimeTypes[ext] || 'application/octet-stream');
            fs.createReadStream(filePath).pipe(res);
            return;
          }
        }
        next();
      });
    },
    closeBundle() {
      // Copy images, assets, and favicons to dist output directory during build
      const distDir = path.resolve(process.cwd(), 'dist');
      if (!fs.existsSync(distDir)) return;

      const toCopy = [
        { src: 'images', dest: path.join(distDir, 'images') },
        { src: 'assets', dest: path.join(distDir, 'assets') },
        { src: 'favicon.ico', dest: path.join(distDir, 'favicon.ico') },
        { src: 'favicon.png', dest: path.join(distDir, 'favicon.png') },
      ];

      for (const item of toCopy) {
        const srcPath = path.resolve(process.cwd(), item.src);
        if (fs.existsSync(srcPath)) {
          fs.cpSync(srcPath, item.dest, { recursive: true, force: true });
        }
      }
    },
  };
}

import { remarkLiquidIncludes } from './src/plugins/remark-liquid-includes.ts';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://utriage.net',
  integrations: [sitemap()],
  server: {
    port: 4000,
    host: '127.0.0.1',
  },
  markdown: {
    remarkPlugins: [remarkLiquidIncludes],
  },
  vite: {
    plugins: [legacyStaticPlugin()],
  },
});

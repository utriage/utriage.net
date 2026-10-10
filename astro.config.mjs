import { defineConfig } from 'astro/config';
import fs from 'node:fs';
import path from 'node:path';
import sitemap from '@astrojs/sitemap';

// Vite plugin to serve legacy static assets during dev
function legacyStaticPlugin() {
  return {
    name: 'legacy-static-assets',
    configureServer(server) {
      server.middlewares.use((req, res, next) => {
        const decodedUrl = decodeURI(req.url?.split('?')[0] || '');
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
  };
}

// Astro integration to copy legacy assets on build
function copyLegacyAssetsIntegration() {
  return {
    name: 'copy-legacy-assets',
    hooks: {
      'astro:build:done': async ({ dir }) => {
        const outDir = dir.pathname.replace(/^\/([A-Za-z]:)/, '$1'); // Clean up file URL on Windows if needed
        const resolvedOutDir = path.resolve(outDir);
        const toCopy = [
          { src: 'images', dest: path.join(resolvedOutDir, 'images') },
          { src: 'assets', dest: path.join(resolvedOutDir, 'assets') },
          { src: 'favicon.ico', dest: path.join(resolvedOutDir, 'favicon.ico') },
          { src: 'favicon.png', dest: path.join(resolvedOutDir, 'favicon.png') },
        ];
        for (const item of toCopy) {
          const srcPath = path.resolve(process.cwd(), item.src);
          if (fs.existsSync(srcPath)) {
            fs.cpSync(srcPath, item.dest, { recursive: true, force: true });
          }
        }
      },
    },
  };
}

export default defineConfig({
  site: 'https://utriage.net',
  integrations: [sitemap(), copyLegacyAssetsIntegration()],
  server: {
    port: 4000,
    host: '127.0.0.1',
  },
  vite: {
    plugins: [legacyStaticPlugin()],
  },
});

import { defineConfig } from 'vite';
import { resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = fileURLToPath(new URL('.', import.meta.url));

// The Kloe Gaye design system ships as a compiled global bundle
// (window.KloeGayeDesignSystem_152bdb) built against React/ReactDOM UMD
// globals. So we keep React as a runtime global (loaded via <script> in
// index.html) and compile our JSX with the CLASSIC runtime — emitting
// React.createElement / React.Fragment instead of importing react.
export default defineConfig({
  base: '/',
  esbuild: {
    jsx: 'transform',
    jsxFactory: 'React.createElement',
    jsxFragment: 'React.Fragment',
  },
  build: {
    outDir: 'dist',
    target: 'es2018',
    rollupOptions: {
      // Multi-page build: the main portfolio plus the hidden, unlinked UGC page.
      input: {
        main: resolve(root, 'index.html'),
        ugc: resolve(root, 'ugc.html'),
      },
    },
  },
});

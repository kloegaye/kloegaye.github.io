import { defineConfig } from 'vite';

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
  },
});

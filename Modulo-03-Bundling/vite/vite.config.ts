// vite.config.ts (o .js)
import { defineConfig } from 'vite';
import checker from "vite-plugin-checker";
import react from '@vitejs/plugin-react';
import { visualizer } from 'rollup-plugin-visualizer';
import viteCompression from 'vite-plugin-compression';

export default defineConfig({
  plugins: [
    react(),
    viteCompression({ algorithm: 'gzip'}),
    viteCompression({ algorithm: 'brotliCompress', ext: '.br'}),
    visualizer({
      open: true, 
      filename: 'bundle-report.html',
      gzipSize: true,
      brotliSize: true,
    }),
    checker({
        typescript: true
    })
  ],
});

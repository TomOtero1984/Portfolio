import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

export default defineConfig({
  root: process.cwd(),
  plugins: [ vue() ],
  base: '/',
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  },
  server: {
    host: '0.0.0.0',
    port: 3000
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@use "@/styles/theme.scss" as theme;` // optional global import
      }
    }
  },
  assetsInclude: ['**/*.wasm', '**/*.iso', '**/*.bin', '**/*.json'],
  build: {
    rollupOptions: {
      output: {
        assetFileNames: (assetInfo) => {
          if (assetInfo.name?.endsWith('.wasm')) return 'assets/[name]-[hash][extname]';
          return 'assets/[name]-[hash][extname]';
        },
      },
    },
  },
})

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

function wasmMimePlugin() {
  return {
    name: "wasm-mime",
    configureServer(server) {
      server.middlewares.use((req, res, next) => {
        if (req.url?.endsWith(".wasm")) {
          res.setHeader("Content-Type", "application/wasm");
        }
        next();
      });
    }
  };
}

function MimePlugin() {
  return {
    name: "mime-plugin",
    configureServer(server) {
      server.middlewares.use((req, res, next) => {
        if (req.url?.endsWith(".wasm")) {
          res.setHeader("Content-Type", "application/wasm");
        }
        if (req.url?.endsWith(".bin")) {
          res.setHeader("Content-Type", "application/octet-stream");
        }
        if (req.url?.endsWith(".gz")) {
          res.setHeader("Content-Type", "application/gzip");
        }
        if (req.url?.endsWith("bzimage")){
          console.log("bzimage")
          res.setHeader("Content-Type", "application/octet-stream")
        }
        next();
      });
    }
  };
}

export default defineConfig({
  root: process.cwd(),
  plugins: [
    vue(),
    MimePlugin()
  ],

  base: '/',
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
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
  assetsInclude: [ '**/*.wasm', '**/*.iso', '**/*.bin', '**/*.json', '**/*.gz' ],
  build: {
    rollupOptions: {
      output: {
        assetFileNames: 'assets/[name]-[hash][extname]',
      },

    },
  },
})

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { VitePWA } from 'vite-plugin-pwa'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(),
  VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['favicon.svg','pwa-192x192.png','pwa-512x512.png', '180.png'],
      manifest: {
        name: 'GruS Corner',
        short_name: 'GruS Corner',
        description: 'A shared space for memos and plans',
        theme_color: '#ffffff',
        icons: [
          {
            src: 'pwa-192x192.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: 'pwa-512x512.png',
            sizes: '512x512',
            type: 'image/png'
          },
          {
            src: '180.png',
            sizes: '180x180',
            type: 'image/png',
            purpose: 'any'
          }
        ]
      },
    })
  ],
  base: '/EnD/',
  build: {
    outDir: 'dist',
  }
});

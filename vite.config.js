import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
// https://vite.dev/config/
export default defineConfig({
    plugins: [react()],
    build: {
        assetsDir: 'assets',
        assetsInlineLimit: 0, // Evitar inline de imágenes grandes
        rollupOptions: {
            output: {
                assetFileNames: 'assets/[name]-[hash][extname]'
            }
        }
    },
    server: {
        headers: {
            'Cache-Control': 'no-cache'
        }
    }
});

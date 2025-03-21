// vite.config.js
import { defineConfig } from 'vite';
import tailwindcss from '@tailwindcss/vite'; // Ensure the correct import

export default defineConfig({
    plugins: [tailwindcss()],

    build: {
        rollupOptions: {
            input: {
                main: 'index.html',
                cardium: 'src/pages/cardium.html',
                ecometer: 'src/pages/ecometer.html',
            },
        },
    },
});
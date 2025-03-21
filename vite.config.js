// vite.config.js
import { defineConfig } from 'vite';
import tailwindcss from '@tailwindcss/vite'; // Ensure the correct import

export default defineConfig({
    plugins: [tailwindcss()],

    build: {
        rollupOptions: {
            input: {
                main: 'index.html',
                cardium: 'projects/cardium.html',
                ecometer: 'projects/ecometer.html',
                ecometer_desktop: 'projects/ecometer-desktop.html',
                graphs: 'projects/graphs.html',
                ice_adventure: 'projects/ice-adventure.html',
                json_parser: 'projects/json-parser.html',
                melodica: 'projects/melodica.html',
                minesweeper: 'projects/minesweeper.html',
                portfolio: 'projects/portfolio.html',
                rhythm_ninja: 'projects/rhythm-ninja.html',
                tower: 'projects/tower.html',
                weave: 'projects/weave.html',
            },
        },
    },
});
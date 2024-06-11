import { defineConfig } from 'vite';
import astro from '@astrojs/vite-plugin-astro';

export default defineConfig({
    plugins: [astro()],
    resolve: {
        alias: {
            '@components': '/src/components',
            '@public': '/public',
            // Add other aliases as needed
        },
    },
});

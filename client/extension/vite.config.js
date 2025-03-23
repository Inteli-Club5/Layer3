import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { viteStaticCopy } from 'vite-plugin-static-copy';
import fs from 'fs';

export default defineConfig({
    plugins: [
        react(),
        viteStaticCopy({
            targets: [
                {
                    src: 'extension/manifest.json', // Correct path to the manifest file
                    dest: '.' // Copy it to the root of the output directory
                },
                {
                    src: 'extension/assets/*', // Assets folder
                    dest: './assets' // Copy to assets folder in output directory
                }
            ]
        })
    ],
    build: {
        rollupOptions: {
            input: {
                extension: 'extension/index.html' // Explicit path to index.html in the extension folder
            },
            output: {
                entryFileNames: 'index.js', // Ensure the output is named index.js
                assetFileNames: 'index.css', // Ensure the CSS is named index.css
            }
        }
    }
});

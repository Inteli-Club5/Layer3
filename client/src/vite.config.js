import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '#blockchain': path.resolve(__dirname, '../../blockchain'),
    },
  },
  optimizeDeps: {
    include: ['../blockchain/transaction.js'],
  },
  server: {
    fs: {
      allow: ['..', '../..'],
    },
  },
  build: {
    commonjsOptions: {
      include: [/blockchain/, /node_modules/],
    },
  }
});

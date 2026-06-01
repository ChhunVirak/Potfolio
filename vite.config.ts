import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig(({ command }) => ({
  plugins: [react(), tailwindcss()],
  // Absolute base in production so asset paths in copied per-route index.html files still resolve correctly
  base: command === 'build' ? '/Potfolio/' : '/',
}));

import { defineConfig } from 'vite';

// The published portal stays buildless; Vite is only for local layout checks.
export default defineConfig({
  server: {
    host: '0.0.0.0',
    allowedHosts: ['terminal.local'],
  },
});

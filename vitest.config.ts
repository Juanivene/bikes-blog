import react from '@vitejs/plugin-react';

import { defineConfig } from 'vitest/config';

// import tsconfigPaths from 'vite-tsconfig-paths'

export default defineConfig({
  // plugins: [tsconfigPaths(), react()],
  plugins: [react()],
  resolve: {
    alias: {
      '@': '/src', // Esto asegura que '@' apunte a la carpeta 'src'
    },
  },
  test: {
    environment: 'jsdom', // Simula un navegador para pruebas
    globals: true, // Habilita API de pruebas globales como describe/it
    setupFiles: './vitest.setup.ts', // Archivo de configuración global
    coverage: {
      provider: 'v8', // Cobertura usando el motor V8
      reporter: ['text', 'json', 'html'], // Formatos de reporte
    },
  },
});

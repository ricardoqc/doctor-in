import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    tailwindcss(),
    react()
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  // Añade este bloque para permitir el dominio en producción
  preview: {
    allowedHosts: ['doctor-in.com', 'www.doctor-in.com'],
    // Nota: También puedes usar `allowedHosts: true` para permitir cualquier dominio
  }
});
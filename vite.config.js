import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Vite configuration for development and build
export default defineConfig({
  plugins: [react()],
  build: {
    target: 'esnext',
    rollupOptions: {
      external: ['@rollup/rollup-linux-x64-gnu']
    }
  }
})
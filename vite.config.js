import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Vite configuration for development and build
export default defineConfig({
  plugins: [react()],
})
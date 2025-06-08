import { defineConfig } from 'vite'
<<<<<<< HEAD
import react from '@vitejs/plugin-react'

// Vite configuration for development and build
export default defineConfig({
  plugins: [react()],
=======
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss()
  ],
>>>>>>> a731120ab112c728e8c935e9f2daa2fe420fc96f
})
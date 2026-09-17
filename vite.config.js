import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // base: './' asegura que los paths a los assets sean relativos para facilitar el deploy en GitHub Pages
  base: './',
})

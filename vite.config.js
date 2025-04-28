import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/tatooine-lanches/', // isso aqui é essencial para GitHub Pages
  plugins: [react()],
})


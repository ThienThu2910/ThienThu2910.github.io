import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  // Dùng base tương đối './' giúp tương thích mọi tên repository trên GitHub Pages hoặc domain tùy chỉnh
  base: './',
})

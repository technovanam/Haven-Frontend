import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],

  // Configure the dev server to handle SPA routing
  server: {
    historyApiFallback: true,
  },

  // Configure the preview server to handle SPA routing
  preview: {
    historyApiFallback: true,
  },
})

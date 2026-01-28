import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import TanStackRouter from '@tanstack/router-plugin/vite'

export default defineConfig({
  plugins: [react(),tailwindcss(),TanStackRouter(),],
})

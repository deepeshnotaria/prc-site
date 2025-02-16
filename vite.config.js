import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/prc-site",
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          pdfjsWorker: ['pdfjs-dist/build/pdf.worker.entry'],
        },
      },
    },
  },
})

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3001, // 使用不同端口避免冲突
  },
  build: {
    outDir: 'dist',
  }
})
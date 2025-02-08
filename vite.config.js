import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path  from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue()
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname,'src'),
      '@assets': path.resolve(__dirname,'src/assets'),
      '@components': path.resolve(__dirname,'src/components'),
      '@services': path.resolve(__dirname,'src/services'),
      '@store': path.resolve(__dirname,'src/store'),
      '@views': path.resolve(__dirname,'src/views'),
    }
  }
})

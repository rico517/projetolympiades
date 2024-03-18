import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      '@components': '/front_end/src/assets/components',
      '@controllers': '/back_end/controllers',
      '@models': '/back_end/models',
      '@views': '/front_end/src/views',
    }
  }
})
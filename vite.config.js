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
      '@': fileURLToPath(new URL('/', import.meta.url)),
      // front
      '@components': '/front_end/src/assets/components',
      '@views': '/front_end/src/views',



      // back
      '@classes': '/back_end/classes',
      '@controllers': '/back_end/controllers',
      '@models': '/back_end/models'
    }
  }
})
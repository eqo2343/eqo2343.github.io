import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import images from 'rollup-plugin-image-assets'

// https://vite.dev/config/
export default defineConfig({
  entry: 'src/index.js',
  des: 'dist/bundle.js',
  plugins: [
    react(),
    tailwindcss(),
    images({
        output: 'build/images'
    })
  ],
  server: {
    port: 3000
  },
  build: {
    rollupOptions: {
      external: ['axios']
    }
  }

})

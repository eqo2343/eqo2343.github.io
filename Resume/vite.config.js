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
      external: ['axios', 
        '/home/eqo234/resume-site/resume-site/Resume/src/assets/hardlees1.png',
        '/home/eqo234/resume-site/resume-site/Resume/src/assets/hardlees2.png',
        '/home/eqo234/resume-site/resume-site/Resume/src/assets/me2.jpg',
        '/home/eqo234/resume-site/resume-site/Resume/src/assets/snake.png',
        '/home/eqo234/resume-site/resume-site/Resume/src/assets/states.png',
        '/home/eqo234/resume-site/resume-site/Resume/src/assets/custom-cloud.svg',
      ]
    }
  }

})

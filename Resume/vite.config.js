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
        '/home/eqo234/resume-site/resume-site/Resume/dist/assets/hardlees1-7garVGrS.png',
        '/home/eqo234/resume-site/resume-site/Resume/dist/assets/hardlees2-DuQ5IO7i.png',
        '/home/eqo234/resume-site/resume-site/Resume/dist/assets/me2-Cw1j7ivo.jpg',
        '/home/eqo234/resume-site/resume-site/Resume/dist/assets/snake-DNAFteSf.png',
        '/home/eqo234/resume-site/resume-site/Resume/dist/assets/states-DGJHrd0q.png'
      ]
    }
  }

})

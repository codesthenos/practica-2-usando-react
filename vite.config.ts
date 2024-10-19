import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { viteStaticCopy } from 'vite-plugin-static-copy'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/practica-2-usando-react/',
  plugins: [
    react(),
    viteStaticCopy({
      targets: [
        {
          src: '404.html',
          dest: '.'
        },
        {
          src: '500.html',
          dest: '.'
        },
        {
          src: 'projects.html',
          dest: '.'
        }
      ]
    })
  ]
})

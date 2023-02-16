import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
/**
 * details about vite-plugin-pages
 * https://www.npmjs.com/package/vite-plugin-pages?activeTab=readme
 * https://stackoverflow.com/questions/71906886/how-to-setup-vite-plugin-pages-cannot-find-module-pages
 * https://nextjs.org/docs/routing/introduction
 */
import Pages from 'vite-plugin-pages'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    Pages({
      dirs: 'src/views',
      pagesDir: [
        { dir: 'src/views', baseRoute: '' },
        { dir: 'src/base', baseRoute: 'base' }
      ]
    })
  ],
  resolve: {
    alias: {
      '@': `${path.resolve(__dirname, './src')}`
    }
  }
})

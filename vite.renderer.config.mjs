import vue from '@vitejs/plugin-vue2'
import { defineConfig, splitVendorChunkPlugin } from 'vite'
import renderer from 'vite-plugin-electron-renderer'

// https://vitejs.dev/config
export default defineConfig({
  plugins: [
    vue(),
    splitVendorChunkPlugin(),
    renderer()
  ]
})

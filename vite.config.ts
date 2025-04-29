import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import ElementPlus from 'unplugin-element-plus/vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    ElementPlus({
      useSource: true
    })
  ],
  build: {
    rollupOptions: {
      external: ['echarts'] // 确保ECharts正确打包
    }
  }
})

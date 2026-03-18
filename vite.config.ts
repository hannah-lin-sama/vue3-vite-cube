import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import vueDevTools from 'vite-plugin-vue-devtools'
import VueRouter from 'vue-router/vite'


// https://vite.dev/config/
export default defineConfig({
  plugins: [
    // 必须要在 vue 插件之前
    VueRouter({
      routesFolder: 'src/pages', // 默认 pages，可改
      extensions: ['.vue'], // 匹配文件后缀
      dts: 'src/typed-router.d.ts', // 生成类型文件
       // 添加调试选项
      logs: true
    }),
    vue(),
    vueJsx(),
    vueDevTools(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
  },
})

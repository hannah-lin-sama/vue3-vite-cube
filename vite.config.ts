// import { fileURLToPath, URL } from 'node:url'
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
      routesFolder: 'src/pages', // 默认 pages
      extensions: ['.vue'], // 匹配文件后缀
      dts: 'src/typed-router.d.ts', // 生成类型文件
      // 出现 RangeError: Maximum call stack size exceeded
      // getRouteName: (route) => {
      //   console.log('getRouteName',route)
      //   return route.name || route.path
      // },

       // 添加调试选项
      logs: true,

      // routeBlockLang: 'json5', // 路由块语言，默认 json
      importMode: 'async',
      root: process.cwd(),

      // 在配置文件写入前，手动修改路由配置（如添加全局路由守卫、调整路由元信息、过滤路由等）
      // beforeWriteFiles: (editedRoutes) => {
      //   console.log('beforeWriteFiles', editedRoutes)
      // },
      watch: true, // 开启路由块文件监听
      // 开启实验性功能
      // experimental: {
       
      // },
    }),
    vue(),
    vueJsx(),
    vueDevTools(),
  ],
  resolve: {
    // alias: {
    //   '@': fileURLToPath(new URL('./src', import.meta.url))
    // },
    // tsconfigPaths: true,  // 自动读取 tsconfig paths
    alias: {
      '@': '/src',
    },
  },
  css: {
    preprocessorOptions: {
      less: {
        additionalData: `@import "@/styles/variables.less";`,
        javascriptEnabled: true
      }
    }
  },
  mode: 'development',
  // server: {
  //   ws: false,
  // },
  // optimizeDeps: {
  //   include: ['virtual:vue-inspector-path:load.js'],
  // },

})
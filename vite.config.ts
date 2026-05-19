// import { fileURLToPath, URL } from 'node:url'
import { defineConfig, minify } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
// import vueDevTools from 'vite-plugin-vue-devtools'
import VueRouter from 'vue-router/vite'
import ElementPlus from 'unplugin-element-plus/vite'


// https://vite.dev/config/
export default defineConfig({
  plugins: [
    // 必须要在 vue 插件之前
    VueRouter({
      exclude: ['**/components/**'], // 排除 components 目录下的所有文件
      routesFolder: 'src/pages', // 默认 pages
      extensions: ['.vue', '.tsx'], // 匹配文件后缀
      dts: 'src/typed-router.d.ts', // 生成类型文件
      // 出现 RangeError: Maximum call stack size exceeded
      // getRouteName: (route) => {
      //   console.log('getRouteName',route)
      //   return route.name || route.path
      // },

       // 添加调试选项
      // logs: true,

      // routeBlockLang: 'json5', // 路由块语言，默认 json
      importMode: 'async',
      root: process.cwd(),

      // 在配置文件写入前，手动修改路由配置（如添加全局路由守卫、调整路由元信息、过滤路由等）
      // beforeWriteFiles: (editedRoutes) => {
      //   console.log('beforeWriteFiles', editedRoutes)
      // },
      // watch: true, // 开启路由块文件监听
      // 开启实验性功能
      // experimental: {
       
      // },
    }),   
    vue({
      template: { 
        compilerOptions: {
          hoistStatic: true,   // 强制开启（开发模式也会生效）
          cacheHandlers: true, // 缓存事件处理函数
      }
    }
    }),
    vueJsx({
      
    }),
    // vueDevTools(),
    ElementPlus({}),
  ],
  base: '/vue3-vite-cube/',
  resolve: {
    // alias: {
    //   '@': fileURLToPath(new URL('./src', import.meta.url))
    // },
    alias: {
      '@': '/src',
      'vue-run': 'vue/dist/vue.esm-bundler.js',
    },
    // tsconfigPaths: true,  // 自动读取 tsconfig paths
  },
  css: {
    preprocessorOptions: {
      less: {
        additionalData: `@import "@/styles/variables.less";`,
        javascriptEnabled: true
      }
    }
  },
  build: {
    outDir: 'dist-cube',
    assetsDir: 'public',
    // minify: 'oxc', // oxc false terser esbuild
    minify: false, // 关闭压缩
    // minify: true, // 开启压缩
    manifest: true, // 生成 manifest.json 文件
    license: true, // 生成 license.md 文件
    sourcemap: true, // 生成 sourcemap 文件
    rolldownOptions: {
      output: {
        postBanner:
          '/* See licenses of bundled dependencies at https://example.com/license.md */',
      },
    },
  },
  // mode: 'development',
  // server: {
  //   ws: false,
  // },
  // optimizeDeps: {
  //   include: ['virtual:vue-inspector-path:load.js'],
  // },
  server: {
    
    port: 5173, // 端口号
    host: '0.0.0.0', // 监听所有网络接口
    allowedHosts: ['localhost'], // 允许的主机名
    open: true, // 自动打开浏览器
    strictPort: true, // 严格端口号
    proxy: {
      // 简单字符串
      '/api1': 'http://localhost:3000',
      // 对象配置
      '/api': {
        target: 'http://localhost:3001',
        changeOrigin: true,
        secure: false,
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
      // 正则配置
      '/api2': {
        target: 'http://localhost:3002',
        changeOrigin: true,
        secure: false,
        rewrite: (path) => path.replace(/^\/api2/, ''),
      },
    },
    // cors: true, // 开启 CORS
    // hmr: true,
    // sourcemapIgnoreList: true, // 忽略的 sourcemap 文件
    // 监听文件变化
    // watch: {
      
    // }
  },
  experimental: {
    // bundledDev: true,
  }
})
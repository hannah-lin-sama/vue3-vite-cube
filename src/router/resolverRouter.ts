import { createWebHistory } from 'vue-router'
// 自动生成的路由（vite 插件注入）
import { resolver } from 'vue-router/auto-resolver'
import { experimental_createRouter } from 'vue-router/experimental'

// console.log('routes', routes)
const router = experimental_createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  resolver
})

router.afterEach((to, from) => {
  document.title = to.meta.title ? `${to.meta.title} ｜Vite Vue3 平台 ` : 'Vite Vue3 平台'
})

// console.log('import.meta.hot', import.meta.hot)

// if (import.meta.hot) {
//   handleHotUpdate(router);
// }
export default router

import { createRouter, createWebHistory } from 'vue-router'
// 自动生成的路由（vite 插件注入）
import { routes } from 'vue-router/auto-routes';

console.log('routes',routes);
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

router.afterEach((to, from) => {
  document.title = to.meta.title ?  `${to.meta.title} ｜Vite Vue3 平台 ` : 'Vite Vue3 平台';
})
export default router

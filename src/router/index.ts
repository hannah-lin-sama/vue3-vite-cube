import { createRouter, createWebHistory } from 'vue-router'
// 自动生成的路由（vite 插件注入）
import { routes } from 'vue-router/auto-routes';

console.log('routes',routes);
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router

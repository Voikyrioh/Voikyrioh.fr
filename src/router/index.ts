import { createRouter, createWebHistory, type RouteLocationNormalized } from 'vue-router'
import Home from '@/pages/home.vue'

const routes = [
  { path: '/', name: 'home', component: Home },
  {
    path: '/project/:slug',
    name: 'project-detail',
    component: () => import('@/pages/project-detail.vue'),
    props: true,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to: RouteLocationNormalized) {
    if (to.hash) {
      return { el: to.hash, behavior: 'smooth' }
    }
    return { top: 0 }
  },
})

export default router

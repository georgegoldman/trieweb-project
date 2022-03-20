import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/settings',
    name: 'settings',
    component: () => import('../views/SettingView.vue')
  },
  {
    path: '/user-settings',
    name: 'user-settings',
    component: () => import('../views/settings/UserSettings.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router

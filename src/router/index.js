import Vue from 'vue'
import Router from 'vue-router'

import authRoutes from './auth'
import characterRoutes from './characters'
import userRoutes from './users'

import HomeView from '@/components/views/Home'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
      ...authRoutes,
      ...characterRoutes,
      ...userRoutes
  ]
})

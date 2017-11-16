import Vue from 'vue'
import Router from 'vue-router'
import LandingView from '@/components/LandingView'
import UserView from '@/components/UserView'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      Name: 'landing',
      component: LandingView
    },
    {
      path: '/user',
      name: 'user',
      component: UserView
    }
  ]
})

export default router

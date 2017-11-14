import Vue from 'vue'
import Router from 'vue-router'
import LandingView from '@/components/LandingView'
import UserView from '@/components/UserView'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'LandingPage',
      component: LandingView
    },
    {
      path: '/user',
      name: 'UserProfile',
      component: UserView
    }
  ]
})

import Vue from 'vue'
import Router from 'vue-router'
import LandingView from '@/components/view/LandingView'
import RepoView from '@/components/view/RepoView'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: LandingView
    },
    {
      path: '/repo-view',
      component: RepoView
    }
  ]
})

export default router

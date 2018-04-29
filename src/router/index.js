import Vue from 'vue'
import Router from 'vue-router'
import LandingView from '@/components/view/LandingView'
import RepoView from '@/components/view/RepoView'
import ModuleView from '@/components/view/ModuleView'

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
    },
    {
      path: '/module-view',
      component: ModuleView
    }
  ]
})

export default router

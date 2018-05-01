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
      path: '/repo/:id',
      component: RepoView,
      name: 'repo',
      props: true
    },
    {
      path: '/module/:id',
      component: ModuleView,
      name: 'module',
      props: true
    }
  ]
})

export default router

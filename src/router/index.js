import Vue from 'vue'
import Router from 'vue-router'
import LandingView from '@/components/view/LandingView'
import ExperimentView from '@/components/view/ExperimentView'
import SystemView from '@/components/view/SystemView'
import ProtocolView from '@/components/view/ProtocolView'

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
      path: '/experiment-view',
      name: 'experiment-view',
      component: ExperimentView,
      props: true
    },
    {
      path: '/system-view',
      name: 'system-view',
      component: SystemView,
      props: true
    },
    {
      path: '/protocol-view',
      name: 'protocol-view',
      component: ProtocolView,
      props: true
    }
  ]
})

export default router

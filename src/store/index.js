import Vue from 'vue'
import Vuex from 'vuex'
import auth from './StoreModules/auth'
import repos from './StoreModules/repos'
import modules from './StoreModules/modules'
import news from './StoreModules/news'
import * as types from './mutation-types'

Vue.use(Vuex)

const globalState = {
  notification: {
    type: 'info', // danger success info
    msg: '',
    dismissCountDown: 10, // seconds before notif diappears on its own
    raised: false
  }
}

const globalMutations = {
  [types.SET_NOTIFICATION] (state, {msg, type}) {
    state.notification.msg = msg
    state.notification.type = type
    state.notification.raised = true
  },
  [types.DISMISS_NOTIFICATION] (state) {
    state.notification.msg = ''
    state.notification.type = ''
    state.notification.raised = false
  }
}

const globalActions = {

}

export default new Vuex.Store({
  state: globalState,
  mutations: globalMutations,
  actions: globalActions,
  strict: true,
  modules: {
    auth,
    repos,
    modules,
    news
  }
})

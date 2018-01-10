import Vue from 'vue'
import Vuex from 'vuex'
import auth from './modules/auth'
import items from './modules/items'
import globals from './globals'

Vue.use(Vuex)

export default new Vuex.Store({
  strict: true,
  ...globals,
  modules: {
    auth,
    items
  }
})

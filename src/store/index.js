import Vue from 'vue'
import Vuex from 'vuex'
import auth from './StoreModules/auth'
import repos from './StoreModules/repos'
import modules from './StoreModules/modules'
import news from './StoreModules/news'

Vue.use(Vuex)

export default new Vuex.Store({
  strict: true,
  modules: {
    auth,
    repos,
    modules,
    news
  }
})

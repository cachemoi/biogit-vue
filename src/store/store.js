import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  count: 0,
  isLoggedin: true
}

export default new Vuex.Store({
  state
})

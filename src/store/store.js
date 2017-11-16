import Vue from 'vue'
import Vuex from 'vuex'
import {login, signUp} from './api'

Vue.use(Vuex)

const state = {
  isLoggedin: true,
  user: null
}

// mutations are synchronous, so we only use them through actions.
const mutations = {
  LOGIN (state, email, password) {
    const loggedInUser = login(email, password)
    state.isLoggedin = true
    state.user = loggedInUser
  },
  SIGN_UP (state, email, password) {
    const success = signUp(email, password)
    if (success) {
      login(email, password)
      const loggedInUser = login()
      state.isLoggedin = true
      state.user = loggedInUser
    } else {
      console.log('sign up failed')
    }
  }
}

export default new Vuex.Store({
  state,
  mutations
})

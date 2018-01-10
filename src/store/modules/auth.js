import authAPI from '../api/auth'
import * as types from '../mutation-types'

// intial state
const state = {
  isLoggedin: false,
  user: null,
  email: null,
  password: null,
  userName: null
}

// getters
const getters = {}

// actions
const actions = {
  async auth ({commit, state}) {
    try {
      authAPI.authUser(state.email, state.password)
        .then(data => {
          if (data.authenticateUser) {
            const user = {...data.authenticateUser}
            commit(types.AUTH_SUCCESS, {user})
          } else {
            console.log(new Error('Sorry, it looks like those were the wrong credentials!'))
          }
        })
    } catch (e) {
      console.log(new Error(e))
    }
  },
  async createUser ({commit, state}) {
    try {
      authAPI.signUpUser(state.userName, state.email, state.password)
        .then(data => console.log(data))
    } catch (e) {
      return new Error(e.toString())
    }
  },
  async login ({ dispatch }) {
    try {
      await dispatch('auth')
    } catch (e) {
      return new Error(e.toString())
    }
  },
  async signUp ({dispatch}) {
    try {
      await dispatch('createUser')
    } catch (e) {
      return new Error(e.toString())
    }
  }
}

// mutations
const mutations = {
  [types.SET_EMAIL] (state, email) {
    state.email = email
  },
  [types.SET_PASSWORD] (state, password) {
    state.password = password
  },
  [types.SET_USERNAME] (state, userName) {
    state.userName = userName
  },
  [types.SIGN_UP] () {
    console.log('mutated sign up')
  },
  [types.AUTH_SUCCESS] (state, {user}) {
    state.isLoggedin = true
    state.user = user
    console.log('auth Success')
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}

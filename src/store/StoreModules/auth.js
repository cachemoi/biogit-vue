import authAPI from '../api/auth'
import * as types from '../mutation-types'

// intial state
const state = {
  isLoggedin: false,
  user: {
    id: null,
    email: null,
    password: null,
    name: null
  }
}

// getters
const getters = {}

// actions
const actions = {
  auth ({commit, state}) {
    authAPI.authUser(state.user.email)
      .then(data => {
        if (data.User) {
          const user = {...data.User}
          commit(types.AUTH_SUCCESS, {userName: user.name, userID: user.id})
        } else {
          commit(types.SET_NOTIFICATION, {msg: 'Sorry, it looks like those were the wrong credentials!', type: 'danger'})
        }
      })
      .catch((e) => commit(types.SET_NOTIFICATION, {msg: e, type: 'danger'}))
  },
  createUser ({commit, state}) {
    authAPI.signUpUser(state.userName, state.email, state.password)
      .then(data => {
        if (data.User) {
          const user = { ...data.User }
          commit(types.AUTH_SUCCESS, { userName: user.name, userEmail: user.email })
        } else {
          commit(
            types.SET_NOTIFICATION,
            {
              msg: 'Sorry, it looks like those were the wrong credentials!',
              type: 'danger'
            })
        }
      }).catch((e) => { commit(types.SET_NOTIFICATION, {msg: e, type: 'danger'}) })
  }
}

// mutations
const mutations = {
  [types.SET_EMAIL] (state, {email}) {
    state.user.email = email
  },
  [types.SET_PASSWORD] (state, {password}) {
    state.user.password = password
  },
  [types.SET_USERNAME] (state, {userName}) {
    state.user.name = userName
  },
  [types.AUTH_SUCCESS] (state, {userName, userID}) {
    state.isLoggedin = true
    state.user.name = userName
    state.user.id = userID
  },
  [types.LOGOUT] (state) {
    state.isLoggedin = false
    state.user = {
      id: null,
      email: null,
      password: null,
      name: null
    }
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}

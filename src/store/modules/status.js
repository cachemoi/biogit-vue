import * as types from '../mutation-types'

/*
 This is meant to hold data about the local component state
 */

// intial state
const state = {
  loading: {
    status: false,
    msg: null
  },
  error: {
    status: false,
    msg: null
  }
}

// getters
const getters = {}

// actions
const actions = {
  setError ({commit, state}, msg) {
    console.log('error set')
    if (msg) {
      commit(types.SET_ERROR(state, {msg: msg}))
    } else {
      commit(types.SET_ERROR(state, {msg: 'something went wrong'}))
    }
  },
  setLoad ({commit, state}) {
    console.log('loading')
    commit(types.SET_LOADING(state, {msg: ''}))
  },
  dismissError ({ commit, state }) {
    console.log('error dismissed')
    commit(types.DISMISS_ERROR(state))
  },
  finishedLoading ({ commit, state }) {
    console.log('loading finished')
    commit(types.DISMISS_LOADING(state))
  }
}

// mutations
const mutations = {
  [types.SET_ERROR] (state, args) {
    state.error.status = true
    state.error.msg = args.msg
  },
  [types.DISMISS_ERROR] (state, args) {
    state.error.state = true
    state.error.msg = args.msg
  },
  [types.SET_LOADING] (state, args) {
    state.loading.state = true
    state.loading.msg = args.msg
  },
  [types.DISMISS_LOADING] (state, args) {
    state.loading.state = true
    state.loading.msg = args.msg
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}

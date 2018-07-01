import newsAPI from '../api/news'
import * as types from '../mutation-types'

// intial state
const state = {
  newsItems: null
}

// getters
const getters = {
}

// actions
const actions = {
  getWorldNews ({state, commit}, {itemNum}) {
    newsAPI.getWorldNews({itemNum: itemNum}).then(data => console.log(data))
  },
  getUserNews ({state, commit}, {userID, itemNum}) {
    newsAPI.getWorldNews({userID: userID, itemNum: itemNum}).then(data => console.log(data))
  },
  getNews ({state, commit, dispatch}, {userID, itemNum}) {
    dispatch('getUserNews', {userID: userID, itemNum: itemNum}).then(data => console.log(data))
    .then(() => dispatch('getWorldNews', {itemNum: itemNum})
    .then(data => console.log(data)))
  }
}

// mutations
const mutations = {
  [types.SET_NEWS_ITEMS] (state, {items}) {
    state = items
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}

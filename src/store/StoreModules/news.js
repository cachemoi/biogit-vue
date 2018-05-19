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
  async getNews ({state, commit, dispatch}, {userID, itemNum}) {
    await dispatch('getUserNews', {userID: userID, itemNum: itemNum}).then(data => console.log(data))
    await dispatch('getWorldNews', {itemNum: itemNum}).then(data => console.log(data))
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

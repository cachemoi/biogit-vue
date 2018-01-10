import ItemsAPI from '../api/items'
import * as types from '../mutation-types'

/*
Items represent knowledge modules
They are differentiated by their class attributes
Possible classes:
-experiment
-system
-protocol
to be implemented
-anthology: collection of modules
 */

// intial state
const state = {
  items: [],
  currentItem: null
}

// getters
const getters = {}

// actions
const actions = {
  getUserItems ({ commit, state }, userID) {
    console.log(userID)
    try {
      ItemsAPI.getUserItems(userID)
        .then(data => {
          console.log(data)
          commit(types.SET_ITEMS, {items: data.User.items})
        })
    } catch (e) {
      console.log(new Error(e.toString()))
    }
  },
  newItem ({state, commit}, args) {
    console.log('new Item')
    ItemsAPI.addItem(args.newItemName, args.newItemClass, args.userID, args.data)
      .then(data => console.log(data))
  },
  getItem ({commit}, args) {
    try {
      ItemsAPI.getItem(args.itemID).then(
        data => {
          console.log(data)
          commit('FOCUS_ITEM', data.Item)
        }
      )
    } catch (e) {
      return new Error(e)
    }
  },
  focusItem ({commit}, args) {
    commit('FOCUS_ITEM', args.item)
  },
  getItemData ({commit}, args) {
    try {
      ItemsAPI.getSystemData(args.ID).then(
        data => commit('SET_ITEM_DATA', data.data)
      )
    } catch (e) {
      return new Error(e)
    }
  }
}

// mutations
const mutations = {
  [types.SET_ITEMS] (state, args) {
    state.items = [...args.items]
  },
  [types.FOCUS_ITEM] (state, item) {
    state.currentItem = item
  },
  [types.SET_ITEM_DATA] (state, args) {
    state.currentItem.data = args.data
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}

import ReposAPI from '../api/repos'
import * as types from '../mutation-types'
import Vue from 'vue'

// TODO USE GETTERS NOT 'FOCUSEX'

/*
Repositories hold knowledge modules
Possible modules:
-experiment
-system
-protocol
 */

// intial state
const state = {
  repos: {}, // IDs as keys for data
  focusedRepoID: null, // ID of the focused repo
  newRepo: {
    name: ''
  }
}

// getters
const getters = {
  focusedRepoDat: state => {
    return state.repos[state.focusedRepoID]
  },
  isRepoFocused: state => {
    if (state.focusedRepoID) {
      return true
    } else {
      return false
    }
  }
}

// actions
const actions = {
  getUserRepos ({ commit, state }, userID) {
    try {
      ReposAPI.getUserRepos(userID)
        .then(data => {
          commit(types.SET_REPOS, {repos: data.User.repositories})
        })
    } catch (e) {
      console.Error(e)
    }
  },
  createRepo ({state, commit}, {userID, newRepoName}) {
    ReposAPI.createRepo({userID: userID, repoName: newRepoName})
      .then(data => {
        commit('ADD_REPO', {repo: data.createRepository})
        commit('FOCUS_REPO', { repoID: data.createRepository.id })
      })
  },
  getRepo ({commit}, repoID) {
    try {
      ReposAPI.getRepo(repoID).then(
        data => {
          commit('ADD_REPO', { repo: data.Repo })
          commit('FOCUS_REPO', data.Repo.id)
        }
      )
    } catch (e) {
      return new Error(e)
    }
  },
  getRepoData ({commit}, {repoID}) {
    try {
      ReposAPI.getSystemData(repoID).then(
        data => commit('ADD_REPO_DATA', {data: data.data, repoID: repoID})
      )
    } catch (e) {
      return new Error(e)
    }
  }
}

// mutations
const mutations = {
  [types.SET_REPOS] (state, {repos}) {
    for (let repo of repos) {
      Vue.set(state.repos, repo.id, repo)
    }
  },
  [types.ADD_REPO] (state, { repo }) {
    Vue.set(state.repos, repo.id, repo)
  },
  [types.ADD_REPO_DATA] (state, {data, repoID}) {
    Vue.set(state.repos, repoID, data)
  },
  [types.FOCUS_REPO] (state, {repoID}) {
    state.focusedRepoID = repoID
  },
  [types.SET_NEW_REPO_NAME] (state, {newRepoName}) {
    state.newRepo.name = newRepoName
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}

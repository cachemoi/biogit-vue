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
  focusedRepo: {
    name: null
  }
}

// getters
const getters = {}

// actions
const actions = {
  getUserRepos ({ commit, state }, userID) {
    console.log(userID)
    try {
      ReposAPI.getUserRepos(userID)
        .then(data => {
          commit(types.SET_REPOS, {repos: data.User.repositories})
        })
    } catch (e) {
      console.log(new Error(e.toString()))
    }
  },
  createRepo ({state, commit}, {userID, newRepoName}) {
    return ReposAPI.createRepo({userID: userID, repoName: newRepoName})
      .then(data => {
        console.log(data)
        commit('ADD_REPO', {repo: data.createRepository})
        commit('FOCUS_REPO', { repoID: data.createRepository.id })
        return data.createRepository.id
      })
  },
  getRepo ({commit}, repoID) {
    try {
      ReposAPI.getRepo(repoID).then(
        data => {
          console.log(data)
          commit('FOCUS_REPO', data.Repo)
        }
      )
    } catch (e) {
      return new Error(e)
    }
  },
  getRepoData ({commit}, args) {
    try {
      ReposAPI.getSystemData(args.ID).then(
        data => commit('SET_REPO_DATA', data.data)
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
    console.log(repo)
    Vue.set(state.repos, repo.id, repo)
  },
  [types.FOCUS_REPO] (state, {repoID}) {
    console.log(repoID)
    state.focusedRepo = state.repos[repoID]
  },
  [types.SET_FOCUSED_REPO_NAME] (state, {repoName}) {
    state.focusedRepo.name = repoName
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}

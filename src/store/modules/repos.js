import ReposAPI from '../api/repos'
import * as types from '../mutation-types'
import Vue from 'vue'

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
          console.log(data)
          commit(types.SET_REPOS, {repos: data.User.repositories})
        })
    } catch (e) {
      console.log(new Error(e.toString()))
    }
  },
  createRepo ({state, commit}, {userID, newRepoName}) {
    console.log('new Repo')
    ReposAPI.createRepo({userID: userID, newRepoName: newRepoName})
      .then(data => console.log(data))
  },
  getRepo ({commit}, args) {
    try {
      ReposAPI.getRepo(args.repoID).then(
        data => {
          console.log(data)
          commit('FOCUS_REPO', data.Repo)
        }
      )
    } catch (e) {
      return new Error(e)
    }
  },
  focusRepo ({commit}, args) {
    commit('FOCUS_REPO', args.repo)
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
      console.log(repo)
      Vue.set(state.repos, repo.id, repo)
    }
  },
  [types.FOCUS_REPO] (state, {repoID}) {
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

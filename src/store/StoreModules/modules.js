import modulesAPI from '../api/modules'
import * as types from '../mutation-types'
import Vue from 'vue'

// intial state
const state = {
  experiments: {}, // IDs as keys for data
  protocols: {}, // IDs as keys for data
  systems: {}, // IDs as keys for data
  focusedModule: {
    name: null
  }
}

// getters
const getters = {
  modulePresent: state => {
    let check = false
    switch (check) {
      case (Object.keys(state.experiments).length === 0 && state.experiments.constructor === Object):
        check = true
        break
      case (Object.keys(state.protocols).length === 0 && state.protocols.constructor === Object):
        check = true
        break
      case (Object.keys(state.systems).length === 0 && state.systems.constructor === Object):
        check = true
        break
      default:
        check = false
    }
    return check
  },
  allModules: state => {
    return {...state.experiments, ...state.protocols, ...state.systems}
  }
}

// actions
const actions = {
  async getRepoModules ({state, commit}, repoID) {
    await modulesAPI.getRepoModulesID(repoID)
    .then(data => {
      console.log(data)
      let extractedModules = {
        experiments: [],
        protocols: [],
        systems: []
      }
      for (let experiment of data.Repository.experiments) {
        console.log(experiment)
        extractedModules.experiments.push(experiment)
      }
      for (let protocol of data.Repository.protocols) {
        console.log(protocol)
        extractedModules.protocols.push(protocol)
      }
      for (let system of data.Repository.systems) {
        extractedModules.systems.push(system)
      }
      console.log(extractedModules)
      commit('ADD_MODULES', {
        experiments: extractedModules.experiments,
        protocols: extractedModules.protocols,
        systems: extractedModules.systems
      })
    })
  },
  async createModule ({state, commit}, {repoID, moduleType, moduleName}) {
    await modulesAPI.createModule({repoID: repoID, moduleType: moduleType, moduleName: moduleName})
    .then(data => {
      console.log(data)
    })
  }
}

// mutations
const mutations = {
  [types.FOCUS_MODULE] (state, {moduleID}) {
    state.focusedModule = state.modules[moduleID]
  },
  [types.ADD_MODULES] (state, {experiments, protocols, systems}) {
    for (let experiment of experiments) {
      Vue.set(state.experiments, experiment.id, {...experiment})
    }
    for (let protocol of protocols) {
      console.log(protocol)
      Vue.set(state.protocols, protocol.id, {...protocol})
    }
    for (let system of systems) {
      Vue.set(state.protocols, system.id, {...system})
    }
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}

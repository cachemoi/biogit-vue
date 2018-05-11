import modulesAPI from '../api/modules'
import * as types from '../mutation-types'
import Vue from 'vue'

// intial state
const state = {
  experiments: {}, // IDs as keys for data
  protocols: {}, // IDs as keys for data
  systems: {}, // IDs as keys for data
  focusedModuleID: null, // ID of the focused module
  newModule: {
    name: null,
    type: null
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
  moduleType: (state, getters) => (moduleID) => {
    if (moduleID in state.protocols) {
      return 'Protocol'
    } else if (moduleID in state.experiments) {
      return 'Experiment'
    } else if (moduleID in state.systems) {
      return 'System'
    } else {
      return null
    }
  },
  focusedModuleType: (state, getters) => {
    if (state.focusedModuleID === null) {
      return null
    } else {
      return getters.moduleType(state.focusedModuleID)
    }
  },
  selectModule: (state, getters) => (moduleId) => {
    return getters.allModules[moduleId]
  },
  focusedModuleDat: (state, getters) => {
    return getters.allModules[state.focusedModuleID]
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
      let extractedModules = {
        experiments: [],
        protocols: [],
        systems: []
      }
      for (let experiment of data.Repository.experiments) {
        extractedModules.experiments.push(experiment)
      }
      for (let protocol of data.Repository.protocols) {
        extractedModules.protocols.push(protocol)
      }
      for (let system of data.Repository.systems) {
        extractedModules.systems.push(system)
      }
      commit('SET_MODULES', {
        experiments: extractedModules.experiments,
        protocols: extractedModules.protocols,
        systems: extractedModules.systems
      })
    })
  },
  createModule ({state, commit}, {repoID, moduleType, moduleName}) {
    return modulesAPI.createModule({repoID: repoID, moduleType: moduleType, moduleName: moduleName})
    .then(data => {
      console.log(data)
      commit('ADD_MODULE', {
        module: data,
        type: state.newModule.type
      })
      commit('FOCUS_MODULE', { moduleID: data.id })
      return data.id
    })
  }
}

// mutations
const mutations = {
  [types.FOCUS_MODULE] (state, {moduleID}) {
    console.log(moduleID)
    state.focusedModuleID = moduleID
  },
  [types.ADD_MODULE] (state, { module, type }) {
    console.log('module added', module, type)
    if (type === 'Experiment') {
      console.log('Experiment added')
      console.log(module.id)
      Vue.set(state.experiments, module.id, module)
    } else if (type === 'Protocol') {
      Vue.set(state.protocols, module.id, module)
    } else if (type === 'System') {
      Vue.set(state.systems, module.id, module)
    }
  },
  [types.ADD_MODULES] (state, {experiments, protocols, systems}) {
    for (let experiment of experiments) {
      Vue.set(state.experiments, experiment.id, {...experiment})
    }
    for (let protocol of protocols) {
      Vue.set(state.protocols, protocol.id, {...protocol})
    }
    for (let system of systems) {
      Vue.set(state.systems, system.id, {...system})
    }
  },
  [types.SET_MODULES] (state, { experiments, protocols, systems }) {
    let formattedObject = {
      experiments: {},
      protocols: {},
      systems: {}
    }
    for (let experiment of experiments) {
      formattedObject.experiments[experiment.id] = experiment
    }
    for (let protocol of protocols) {
      formattedObject.protocols[protocol.id] = protocol
    }
    for (let system of systems) {
      formattedObject.systems[system.id] = system
    }
    state.experiments = formattedObject.experiments
    state.protocols = formattedObject.protocols
    state.systems = formattedObject.systems
  },
  [types.SET_NEW_MODULE_NAME] (state, {moduleName}) {
    state.newModule.name = moduleName
  },
  [types.SET_NEW_MODULE_TYPE] (state, { moduleType }) {
    state.newModule.type = moduleType
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}

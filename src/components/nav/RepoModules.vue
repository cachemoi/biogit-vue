<template>
  <div class="card">
    <div class="card-header text-center">
      Knowledge modules
    </div>
    <ul class="list-group list-group-flush">
      <div v-if="modulePresent">
        <li class="list-group-item d-flex flex-wrap" v-for="module of allModules" :key="module.id">
          <router-link class="nav-link p-0 m-0" :id="module.id" :to="{name: 'module', params: {id: module.id}}">
            {{module.name}}
          </router-link>
          <img v-if="moduleType(module.id) ==='Experiment'" class="ml-auto " src="../../assets/moduleIcons/experiment.svg" height="20" width="20">
          <img v-if="moduleType(module.id) ==='Protocol'" class="ml-auto" src="../../assets/moduleIcons/protocol.svg" height="20" width="20">
          <img v-if="moduleType(module.id) ==='System'" class="ml-auto" src="../../assets/moduleIcons/system.svg" height="20" width="20">
        </li>
      </div>
      <li v-else class="list-group-item">
        <p>This repository is empty, add some knowledge modules?</p>
      </li>
      <li class="list-group-item text-center">
        <new-module-button></new-module-button>
      </li>
    </ul>
  </div>
</template>

<script>
import {mapState, mapGetters} from 'vuex'
import NewModuleButton from '../buttons/NewModuleButton'

export default {
  name: 'RepoModules',
  components: {
    NewModuleButton
  },
  computed: {
    ...mapState({
      experiments: state => state.modules.experiments,
      protocols: state => state.modules.protocols,
      systems: state => state.modules.systems,
      focusedRepoID: state => state.repos.focusedRepoID
    }),
    ...mapGetters([
      'allModules',
      'moduleType',
      'modulePresent'
    ])
  },
  mounted () {
    this.fetchData()
  },
  methods: {
    focusModule (e) {
      this.$store.commit('FOCUS_MODULE', {moduleID: e.target.id})
    },
    fetchData () {
      this.$store.dispatch('getRepoModules', this.focusedRepoID)
    }
  }
}
</script>

<style scoped>
  .repo-nav-wrapper{
    width: 150px
  }
</style>

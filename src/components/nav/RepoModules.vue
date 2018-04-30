<template>
  <div class="card">
    <div class="card-header text-center">
      Knowledge modules
    </div>
    <ul class="list-group list-group-flush">
      <div v-if="modulePresent">
        <li class="list-group-item d-flex flex-wrap" v-for="experiment of experiments" :key="experiment.id">
          <router-link class="nav-link p-0 m-0" @click.native="focusModule" :id="experiment.id" to="/module-view">
            {{experiment.name}}
          </router-link>
          <img class="ml-auto " src="../../assets/moduleIcons/experiment.svg" height="20" width="20">
        </li>
        <li class="list-group-item d-flex flex-wrap" v-for="protocol of protocols" :key="protocol.id">
          <router-link class="nav-link p-0 m-0" @click.native="focusModule" :id="protocol.id" to="/module-view">
            {{protocol.name}}
          </router-link>
          <img class="ml-auto" src="../../assets/moduleIcons/protocol.svg" height="20" width="20">
        </li>
        <li class="list-group-item d-flex flex-wrap" v-for="system of systems" :key="system.id">
          <router-link class="nav-link p-0 m-0" @click.native="focusModule" :id="system.id" to="/module-view">
            {{system.name}}
          </router-link>
          <img class="ml-auto" src="../../assets/moduleIcons/system.svg" height="20" width="20">
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
import {mapState} from 'vuex'
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
    modulePresent () {
      return this.$store.getters.modulePresent
    }
  },
  methods: {
    focusModule (e) {
      console.log(e.target.id)
      this.$store.commit('FOCUS_MODULE', {moduleID: e.target.id})
    }
  }
}
</script>

<style scoped>
  .repo-nav-wrapper{
    width: 150px
  }
</style>

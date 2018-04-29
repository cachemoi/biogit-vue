<template>
  <div class="card text-center">
    <div class="card-header">
      Knowledge modules
    </div>
    <ul class="list-group list-group-flush">
      <div v-if="modulePresent">
        <li class="list-group-item" v-for="experiment of experiments" :key="experiment.id">
          {{experiment.name}}
        </li>
        <li class="list-group-item" v-for="protocol of protocols" :key="protocol.id">
          {{protocol.name}}
        </li>
        <li class="list-group-item" v-for="system of systems" :key="system.id">
          {{system.name}}
        </li>
      </div>
      <li v-else class="list-group-item">
        <p>This repository is empty, add some knowledge modules?</p>
      </li>
      <li class="list-group-item">
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
      focusedRepoID: state => state.repos.focusedRepo.id
    }),
    modulePresent () {
      console.log(this.$store.getters.modulePresent)
      return this.$store.getters.modulePresent
    }
  }
}
</script>

<style scoped>
  .repo-nav-wrapper{
    width: 150px
  }
</style>

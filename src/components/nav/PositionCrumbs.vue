<template>
  <nav aria-label="breadcrumb">
    <ol class="breadcrumb">
      <li class="breadcrumb-item">
        <router-link to="/">{{userName}}</router-link>
      </li>
      <li v-if="this.$route.name === 'repo' | this.$route.name === 'module'" class="breadcrumb-item">
        <router-link :to="{name: 'repo', params: {id: focusedRepoID}}">{{focusedRepoDat.name}}</router-link>
      </li>
      <li v-if="this.$route.name === 'module'" class="breadcrumb-item">
        <router-link :to="{name: 'module', params: {id: focusedModuleID}}">{{focusedModuleDat.name}}</router-link>
      </li>
    </ol>
  </nav>
</template>

<script>
import {mapState, mapGetters} from 'vuex'

export default {
  name: 'PositionCrumbs',
  computed: {
    ...mapState({
      userName: state => state.auth.user.name,
      focusedModuleID: state => state.modules.focusedModuleID,
      focusedRepoID: state => state.repos.focusedRepoID
    }),
    ...mapGetters([
      'focusedRepoDat',
      'focusedModuleDat'
    ])
  }
}
</script>

<style scoped>
</style>

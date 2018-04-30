<template>
  <div v-if="isRepoFocused" class="d-flex flex-column flex-wrap p-4">
    <h1 class="p-4">{{userName + " / " + focusedRepoDat.name}}</h1>
    <RepoModules></RepoModules>
  </div>
  <div v-else>
    <h1>No repo found, go back?</h1>
  </div>
</template>

<script>
  import {mapState, mapGetters} from 'vuex'
  import RepoModules from '../nav/RepoModules'

  export default {
    name: 'RepoView',
    components: {
      RepoModules
    },
    computed: {
      ...mapState({
        userName: state => state.auth.user.name
      }),
      ...mapGetters([
        'focusedRepoDat',
        'isRepoFocused'
      ])
    }
  }
</script>

<style scoped>
</style>

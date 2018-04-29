<template>
  <div class="d-flex flex-column flex-wrap p-4">
    <h1 class="p-4">{{userName + " / " + focusedRepoName +  " / " + focusedModule.name}}</h1>
  </div>
</template>

<script>
  import {mapState} from 'vuex'

  export default {
    name: 'ModuleView',
    computed: {
      ...mapState({
        focusedModule: state => state.modules.focusedModule,
        focusedRepoName: state => state.repos.focusedRepo.name,
        userName: state => state.auth.user.name
      })
    }
  }
</script>

<style scoped>
</style>

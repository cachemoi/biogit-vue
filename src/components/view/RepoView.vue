<template>
  <div v-if="isRepoFocused" class="d-flex flex-column flex-wrap p-4">
    <position-crumbs></position-crumbs>
    <RepoModules></RepoModules>
  </div>
  <div v-else>
    <h1>No repo found, go back?</h1>
  </div>
</template>

<script>
  import {mapGetters} from 'vuex'
  import PositionCrumbs from '../nav/PositionCrumbs'
  import RepoModules from '../nav/RepoModules'

  export default {
    name: 'RepoView',
    components: {
      RepoModules,
      PositionCrumbs
    },
    props: ['id'],
    computed: {
      ...mapGetters([
        'isRepoFocused'
      ])
    },
    created () {
      this.setFocusedRepo(this.id)
    },
    watch: {
      '$route': 'setFocusedRepo'
    },
    methods: {
      setFocusedRepo (id) {
        this.$store.commit('FOCUS_REPO', {repoID: id})
      }
    }
  }
</script>

<style scoped>
</style>

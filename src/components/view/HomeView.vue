<template>
  <div class="d-flex flex-wrap">
    <div class="p-4 mr-auto">
      <UserHomePanel></UserHomePanel>
    </div>
    <div class="p-4">
      <UserRepos></UserRepos>
    </div>
  </div>
</template>

<script>
  import UserRepos from '../nav/UserRepos'
  import UserHomePanel from '../panels/UserHomePanel'
  import {mapState} from 'vuex'

  export default {
    components: {
      UserRepos,
      UserHomePanel
    },
    computed: {
      ...mapState({
        user: state => state.auth.user
      })
    },
    name: 'HomeView',
    mounted () {
      console.log('HomeView mounted')
      this.$store.dispatch('getUserItems', this.user.id)
    }
  }
</script>

<style scoped>
</style>

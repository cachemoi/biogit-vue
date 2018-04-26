<template>
  <div class="d-flex flex-wrap">
    <UserHomePanel></UserHomePanel>
    <UserRepos></UserRepos>
  </div>
</template>

<script>
  import UserRepos from '../nav/UserRepos'
  import UserHomePanel from '../panels/UserHomePanel'

  export default {
    components: {
      UserRepos,
      UserHomePanel
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

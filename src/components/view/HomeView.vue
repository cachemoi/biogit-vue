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

  export default {
    components: {
      UserRepos,
      UserHomePanel
    },
    name: 'HomeView'
  }
</script>

<style scoped>
</style>

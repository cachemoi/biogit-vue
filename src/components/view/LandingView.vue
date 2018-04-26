<template>
  <div>
    <no-user-view  v-if="isLoggedin === false"></no-user-view>
    <home-view v-else/>
  </div>
</template>

<script>
  import {mapState} from 'vuex'
  import HomeView from './HomeView'
  import NoUserView from './NoUserView'

  export default {
    components: {
      HomeView,
      NoUserView
    },
    name: 'landing-page',
    computed: {
      ...mapState({
        isLoggedin: state => state.auth.isLoggedin
      })
    }
  }
</script>

<style scoped>
</style>

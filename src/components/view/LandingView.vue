<template>
  <div>
    <div  v-if="isLoggedin === false">
      <div class="view p-4 m-5">
        <h1>Scientific publishing for the internet age</h1>
      </div>
    </div>
    <home-view v-else></home-view>
  </div>
</template>

<script>
  import {mapState} from 'vuex'
  import HomeView from './HomeView.vue'

  export default {
    components: {HomeView},
    name: 'landing-page',
    computed: {
      ...mapState({
        isLoggedin: state => state.auth.isLoggedin
      })
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>

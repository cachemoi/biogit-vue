<template>
  <div class="card text-center" style="width: 12rem;">
    <div class="card-header">
      Your Repositories
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item" v-if="Object.keys(repos).length === 0 && repos.constructor === Object">
        <p>You don't have any repositories yet, click to add some!</p>
      </li>
      <li class="list-group-item" v-for="repo in repos" :key="repo.name">
        <router-link to="/repo-view" @click.native="focusRepo" :id="repo.id" class="card-link">
          {{repo.name}}
        </router-link>
      </li>
      <li class="list-group-item">
        <new-repo-button></new-repo-button>
      </li>
    </ul>
  </div>
</template>

<script>
import {mapState} from 'vuex'
import NewRepoButton from '../buttons/NewRepoButton'

export default {
  name: 'UserRepos',
  components: {
    NewRepoButton
  },
  computed: {
    ...mapState({
      repos: state => state.repos.repos,
      userID: state => state.auth.user.id
    })
  },
  mounted () {
    this.$store.dispatch('getUserRepos', this.userID)
  },
  methods: {
    focusRepo (e) {
      console.log(e.target.id)
      this.$store.dispatch('getRepoModules', e.target.id)
      this.$store.commit('FOCUS_REPO', {repoID: e.target.id})
    }
  }
}
</script>

<style scoped>
  .repo-nav-wrapper{
    width: 150px
  }
</style>

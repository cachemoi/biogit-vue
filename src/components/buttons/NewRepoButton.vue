<template>
  <div>
    <b-btn v-b-modal.NewRepoModal class="btn btn-outline-primary">
      ~+~
    </b-btn>
    <b-modal id="NewRepoModal" title="New Repository" :hide-footer="true">
      <form>
        <div class="form-group">
          <input type="text" @change="updateNewRepoName" placeholder="Enter repo name" class="form-control"/>
        </div>
        <div class="form-group">
          <button @click.prevent="createRepo" class="btn btn-outline-primary">
            ~+~
          </button>
        </div>
      </form>
    </b-modal>
  </div>
</template>

<script>
  import {mapState} from 'vuex'

  export default {
    name: 'NewRepoButton',
    computed: {
      ...mapState({
        userID: state => state.auth.user.id,
        newRepo: state => state.repos.newRepo
      })
    },
    methods: {
      createRepo () {
        this.$store.dispatch('createRepo', {
          userID: this.userID,
          newRepoName: this.newRepo.name
        })
        this.$router.push({path: '/repo-view'})
      },
      updateNewRepoName (e) {
        this.$store.commit('SET_NEW_REPO_NAME', {newRepoName: e.target.value})
      }
    }
  }
</script>

<style scoped>
</style>

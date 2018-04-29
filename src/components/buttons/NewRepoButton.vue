<template>
  <div>
    <b-btn v-b-modal.NewRepoModal class="btn btn-outline-primary">
      ~+~
    </b-btn>
    <b-modal id="NewRepoModal" title="New Repository" :hide-footer="true">
      <form>
        <div class="form-group">
          <input type="text" @change="updateFocusedRepoName" placeholder="Enter repo name" class="form-control"/>
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
    name: 'NewItemButton',
    computed: {
      ...mapState({
        userID: state => state.auth.user.id,
        focusedRepoName: state => state.repos.focusedRepo.name
      })
    },
    methods: {
      createRepo () {
        const newRepoID = this.$store.dispatch('createRepo', {
          userID: this.userID,
          newRepoName: this.focusedRepoName
        })
        console.log(newRepoID)
        this.$router.push({path: '/repo-view'})
      },
      updateFocusedRepoName (e) {
        this.$store.commit('SET_FOCUSED_REPO_NAME', {repoName: e.target.value})
      }
    }
  }
</script>

<style scoped>
</style>

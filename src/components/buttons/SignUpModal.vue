<template>
  <div>
    <button type="button" class="btn btn-outline-success mr-2 ml-2" data-toggle="modal" data-target="#sign-up-modal">
      Join
    </button>
    <div class="modal fade" id="sign-up-modal" tabindex="-1" role="dialog">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Join Biogit</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true"></span>
            </button>
          </div>
          <div class="modal-body">
            <form>
              <div class="form-group">
                <label for="sign-up-input-email">Username</label>
                <input :value="userName" @change="updateUserName" type="text" class="form-control" id="sign-up-input-username" placeholder="Enter username">
              </div>
              <div class="form-group">
                <label for="sign-up-input-email">Email address</label>
                <input :value="email" @change="updateMail" type="email" class="form-control" id="sign-up-input-email" aria-describedby="emailHelp" placeholder="Enter email">
                <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
              </div>
              <div class="form-group">
                <label for="exampleInputPassword1">Password</label>
                <input :value="password" @change="updatePass" type="password" class="form-control" id="exampleInputPassword1" placeholder="Password">
              </div>
              <button @click="signUp" class="btn btn-primary" data-dismiss="modal">Submit</button>
            </form>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import { mapState } from 'vuex'

  const $ = window.$

  export default {
    name: 'SignUpModal',
    computed: {
      ...mapState({
        userName: state => state.auth.userName,
        email: state => state.auth.email,
        password: state => state.auth.password
      })
    },
    methods: {
      async signUp () {
        try {
          await this.$store.dispatch('signUp')
        } catch (e) {
          console.log(e)
        }
        $('#sign-up-modal').modal('toggle')
        this.$router.push({path: ''})
      },
      updateMail (e) {
        this.$store.commit('SET_EMAIL', e.target.value)
      },
      updatePass (e) {
        this.$store.commit('SET_PASSWORD', e.target.value)
      },
      updateUserName (e) {
        this.$store.commit('SET_USERNAME', e.target.value)
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>

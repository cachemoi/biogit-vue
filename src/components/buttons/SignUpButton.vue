<template>
  <div>
    <b-btn v-b-modal.SignUpModal class="btn btn-outline-success mr-2">
      Join
    </b-btn>
    <b-modal id="SignUpModal" title="Join Biogit" :hide-footer="true">
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
    </b-modal>
  </div>
</template>

<script>
  import { mapState } from 'vuex'

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

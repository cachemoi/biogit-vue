<template>
  <div>
    <b-btn v-b-modal.signInModal class="btn btn-outline-primary mr-2">
      Sign in
    </b-btn>
    <b-modal id="signInModal" title="Sign in" :hide-footer="true">
      <form>
        <div class="form-group">
          <label for="log-in-input-email">Email address</label>
          <input :value="email" @change='updateMail' type="email" class="form-control" id="log-in-input-email" aria-describedby="emailHelp" placeholder="Enter email">
        </div>
        <div class="form-group">
          <label for="loginPass">Password</label>
          <input :value="password" @change='updatePass' type="password" class="form-control" id="loginPass" placeholder="Password">
        </div>
        <button @click.prevent="login" class="btn btn-primary">Submit</button>
      </form>
    </b-modal>
  </div>
</template>

<script>
  import { mapState } from 'vuex'

  export default {
    computed: {
      ...mapState({
        email: state => state.auth.user.email,
        password: state => state.auth.user.password
      })
    },
    methods: {
      login () {
        this.$store.dispatch('auth')
        this.$router.push({path: '/'})
      },
      updateMail (e) {
        this.$store.commit('SET_EMAIL', {email: e.target.value})
      },
      updatePass (e) {
        this.$store.commit('SET_PASSWORD', {password: e.target.value})
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>

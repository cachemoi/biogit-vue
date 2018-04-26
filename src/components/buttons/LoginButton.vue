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
      <red-alert></red-alert>
    </b-modal>
  </div>
</template>

<script>
  import { mapState } from 'vuex'
  import RedAlert from '../RedAlert.vue'

  export default {
    components: {
      RedAlert
    },
    computed: {
      ...mapState({
        email: state => state.auth.email,
        password: state => state.auth.password
      })
    },
    methods: {
      async login () {
        try {
          await this.$store.dispatch('login')
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
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>

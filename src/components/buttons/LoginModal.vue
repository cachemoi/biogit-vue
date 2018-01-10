<template>
  <div>
    <button type="button" class="btn btn-outline-primary mr-2 ml-2" data-toggle="modal" data-target="#login-modal">
      Sign in
    </button>
    <div class="modal fade" id="login-modal" tabindex="-1" role="dialog">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Sign in</h5>
          </div>
          <div class="modal-body">
            <form>
              <div class="form-group">
                <label for="log-in-input-email">Email address</label>
                <input :value="email" @change='updateMail' type="email" class="form-control" id="log-in-input-email" aria-describedby="emailHelp" placeholder="Enter email">
              </div>
              <div class="form-group">
                <label for="exampleInputPassword1">Password</label>
                <input :value="password" @change='updatePass' type="password" class="form-control" id="exampleInputPassword1" placeholder="Password">
              </div>
              <button @click.prevent="login" class="btn btn-primary">Submit</button>
            </form>
            <red-alert></red-alert>
          </div>
          <div class="modal-footer">
            <button @click="closeModal" type="button" class="btn btn-secondary">Close</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import { mapState } from 'vuex'
  import RedAlert from '../RedAlert.vue'

  const $ = window.$

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
        $('#login-modal').modal('toggle')
        this.$router.push({path: ''})
      },
      closeModal () {
        $('#login-modal').modal('toggle')
      },
      updateMail (e) {
        console.log('mail updated')
        this.$store.commit('SET_EMAIL', e.target.value)
      },
      updatePass (e) {
        console.log('pass updated')
        this.$store.commit('SET_PASSWORD', e.target.value)
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>

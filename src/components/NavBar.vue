<template>
  <div id="navbar-wrapper">
    <nav class="navbar navbar-expand-md navbar-light bg-light">
      <router-link to="/" class="navbar-brand">
        <img src="../assets/logo.png" width="30" alt="">
      </router-link>
      <router-link to="/" class="navbar-brand">
        Biogit
      </router-link>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div v-if="!loginStatus" class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <a class="nav-link" href="#">Contact us <span class="sr-only">(current)</span></a>
          </li>
        </ul>
        <login-modal></login-modal>
        <sign-up-modal></sign-up-modal>
      </div>
      <div v-if="loginStatus" class="collapse navbar-collapse">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <router-link to="/" class="nav-link">
              <span class="sr-only">Home</span>
            </router-link>
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<script>
import LoginModal from './buttons/LoginModal.vue'
import SignUpModal from './buttons/SignUpModal.vue'
import {mapState} from 'vuex'

export default {
  components: {
    LoginModal,
    SignUpModal
  },
  computed: {
    ...mapState({
      user: state => state.auth.user,
      loginStatus: state => state.auth.isLoggedin
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  #navbar-wrapper{
    border-bottom: solid #1DA1F2;
    border-bottom-width: 3px;
  }
</style>

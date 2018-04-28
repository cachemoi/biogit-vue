<template>
  <div class="navbar-bottom-line">
    <b-navbar toggleable="md" type="light" variant="light">
      <b-navbar-brand to="/">
        <img src="../../assets/logo.svg" class="d-inline-block align-top" width="30" alt="logo">
        Biogit
      </b-navbar-brand>
      <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
      <b-collapse is-nav id="nav_collapse">
        <b-navbar-nav>
          <b-nav-item v-if="loginStatus" to="/" >
           Home
          </b-nav-item>
        </b-navbar-nav>
        <b-navbar-nav class="ml-auto" v-if="!loginStatus">
            <login-button></login-button>
            <sign-up-button></sign-up-button>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
import LoginButton from '../buttons/LoginButton'
import SignUpButton from '../buttons/SignUpButton'
import {mapState} from 'vuex'

export default {
  components: {
    LoginButton,
    SignUpButton
  },
  computed: {
    ...mapState({
      user: state => state.auth.user,
      loginStatus: state => state.auth.isLoggedin
    })
  }
}
</script>

<style scoped>
  .navbar-bottom-line{
    border-bottom: solid #1DA1F2;
    border-bottom-width: 3px;
  }
</style>

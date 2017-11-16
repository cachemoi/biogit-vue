<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <a class="navbar-brand" href="#">
        <img src="../assets/logo.png" width="30" alt="">
      </a>
      <a class="navbar-brand" href="#">Biogit</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse">
        <ul v-if="isLoggedin === false" class="navbar-nav mr-auto">
          <li class="nav-item active">
            <a class="nav-link" href="#">Contact us <span class="sr-only">(current)</span></a>
          </li>
        </ul>
        <login-modal v-if="isLoggedin === false"></login-modal>
        <sign-up-modal v-if="isLoggedin === false"></sign-up-modal>
        <ul v-if="isLoggedin === true" class="navbar-nav mr-auto">
          <li class="nav-item active">
            <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
          </li>
        </ul>
        <form v-if="isLoggedin === true" class="form-inline my-2 my-lg-0">
          <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
          <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
        </form>
      </div>
    </nav>
  </div>
</template>

<script>
import LoginModal from './LoginModal.vue'
import SignUpModal from './SignUpModal.vue'

export default {
  components: {
    LoginModal,
    SignUpModal
  },
  name: 'nav-bar',
  data () {
    return {isLoggedin: this.$store.state.isLoggedin}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>

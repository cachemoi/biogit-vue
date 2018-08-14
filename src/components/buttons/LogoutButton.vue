<template>
  <button @click.prevent="logout" class="btn btn-outline-primary mr-2">
    Logout
  </button>
</template>

<script>
  export default {
    name: 'LogoutButton',
    methods: {
      logout () {
        this.$router.push({path: '/'})
        this.$store.commit('LOGOUT')
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>

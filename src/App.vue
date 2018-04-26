<template>
  <div>
    <nav-bar></nav-bar>
    <router-view/>
  </div>
</template>

<script>
import NavBar from './components/nav/NavBar'

export default {
  components: {
    NavBar
  },
  name: 'app'
}
</script>

<style>
body {
  background-image: url("https://www.transparenttextures.com/patterns/gplay.png");
}
</style>

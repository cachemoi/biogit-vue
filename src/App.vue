<template>
  <div>
    <nav-bar></nav-bar>
    <router-view/>
    <notification></notification>
  </div>
</template>

<script>
import NavBar from './components/nav/NavBar'
import Notification from './components/feedback/Notification'

export default {
  components: {
    Notification,
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

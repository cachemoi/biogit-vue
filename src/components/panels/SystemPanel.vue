<template>
  <div>
    <h1>System</h1>
    <h3>{{focusedModuleDat.name}}</h3>
  </div>
</template>

<script>
  import {mapGetters} from 'vuex'

  export default {
    name: 'SystemPanel',
    computed: {
      ...mapGetters([
        'focusedModuleDat'
      ])
    }
  }
</script>

<style scoped>
</style>

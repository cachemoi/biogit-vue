<template>
  <div>
    <h1>Protocol</h1>
    <h2>{{focusedModuleDat.name}}</h2>
    
  </div>
</template>

<script>
  import {mapGetters} from 'vuex'

  export default {
    name: 'ProtocolPanel',
    computed: {
      ...mapGetters([
        'focusedModuleDat'
      ])
    }
  }
</script>

<style scoped>
</style>

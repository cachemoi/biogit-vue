<template>
  <div>
    <h1>Experiment</h1>
    <h3>{{focusedModuleDat.name}}</h3>
  </div>
</template>

<script>
  import {mapState, mapGetters} from 'vuex'

  export default {
    name: 'ExperimentPanel',
    computed: {
      ...mapState({}),
      ...mapGetters([
        'focusedModuleDat'
      ])
    }
  }
</script>

<style scoped>
</style>

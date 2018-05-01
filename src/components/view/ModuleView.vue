<template>
  <div class="flex-column pr-4">
    <div class="p-4">
      <position-crumbs></position-crumbs>
    </div>
    <div v-if="focusedModuleID" class="p-4">
      <system-panel v-if="focusedModuleType==='System'"></system-panel>
      <experiment-panel v-if="focusedModuleType==='Experiment'"></experiment-panel>
      <protocol-panel v-if="focusedModuleType==='Protocol'"></protocol-panel>
    </div>
    <div v-else>
      <h1>Module not found, return?</h1>
    </div>
  </div>
</template>

<script>
  import {mapGetters, mapState} from 'vuex'
  import PositionCrumbs from '../nav/PositionCrumbs'
  import SystemPanel from '../panels/SystemPanel'
  import ProtocolPanel from '../panels/ProtocolPanel'
  import ExperimentPanel from '../panels/ExperimentPanel'

  export default {
    name: 'ModuleView',
    components: {
      PositionCrumbs,
      SystemPanel,
      ProtocolPanel,
      ExperimentPanel
    },
    props: ['id'],
    computed: {
      ...mapState({
        focusedModuleID: state => state.modules.focusedModuleID
      }),
      ...mapGetters([
        'focusedModuleType'
      ])
    },
    created () {
      this.setFocusedModule(this.id)
    },
    watch: {
      '$route': 'setFocusedModule'
    },
    methods: {
      setFocusedModule (id) {
        console.log(id)
        this.$store.commit('FOCUS_MODULE', {moduleID: id})
      }
    }
  }
</script>

<style scoped>
</style>

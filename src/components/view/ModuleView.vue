<template>
  <div class="flex-column pr-4">
    <div class="p-4">
      <h1>{{userName + " / " + focusedRepoName +  " / " + focusedRepoDat.name}}</h1>
    </div>
    <div class="p-4">
      <system-panel v-if="moduleType==='System'"></system-panel>
      <experiment-panel v-if="moduleType==='Experiment'"></experiment-panel>
      <protocol-panel v-if="moduleType==='Protocol'"></protocol-panel>
    </div>
  </div>
</template>

<script>
  import {mapState, mapGetters} from 'vuex'
  import SystemPanel from '../panels/SystemPanel'
  import ProtocolPanel from '../panels/ProtocolPanel'
  import ExperimentPanel from '../panels/ExperimentPanel'

  export default {
    name: 'ModuleView',
    components: {
      SystemPanel,
      ProtocolPanel,
      ExperimentPanel
    },
    computed: {
      ...mapState({
        focusedModule: state => state.modules.focusedModule,
        userName: state => state.auth.user.name
      }),
      ...mapGetters([
        'focusedRepoDat',
        'moduleType'
      ])
    }
  }
</script>

<style scoped>
</style>

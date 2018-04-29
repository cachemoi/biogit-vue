<template>
  <div>
    <b-btn v-b-modal.NewModuleModal class="btn btn-outline-primary">
      ~+~
    </b-btn>
    <b-modal id="NewModuleModal" title="New Knowledge module" :hide-footer="true">
      <div class="form-group">
        <input type="text" @change="updateFocusedModuleName" placeholder="Enter module name" class="form-control"/>
      </div>
      <b-form-group label="Module type">
        <b-form-radio-group id="btnradios2"
                            buttons
                            button-variant="outline-primary"
                            size="lg"
                            v-model="selected"
                            :options="[
                              { text: 'System', value: 'System' },
                              { text: 'Protocol', value: 'Protocol' },
                              { text: 'Experiment', value: 'Experiment' }
                            ]"
                            name="radioBtnOutline" />
      </b-form-group>
      <div class="form-group">
        <button @click.prevent="createModule" class="btn btn-outline-primary">
          ~+~
        </button>
      </div>
    </b-modal>
  </div>
</template>

<script>
  import {mapState} from 'vuex'

  export default {
    name: 'NewModuleButton',
    computed: {
      ...mapState({
        repoID: state => state.auth.focusedRepoid,
        focusedModuleName: state => state.modules.focusedModule.name
      })
    },
    methods: {
      createModule () {
        const newModuleID = this.$store.dispatch('createModule', {
          repoID: this.repoID,
          Name: this.focusedModuleName

        })
        console.log(newModuleID)
        this.$router.push({path: '/module-view'})
      },
      updateFocusedModuleName (e) {
        this.$store.commit('SET_FOCUSED_MODULE_NAME', {moduleName: e.target.value})
      }
    }
  }
</script>

<style scoped>
</style>

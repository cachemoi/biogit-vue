<template>
  <div>
    <b-btn v-b-modal.NewModuleModal class="btn btn-outline-primary">
      ~+~
    </b-btn>
    <b-modal id="NewModuleModal" title="New Knowledge module" :hide-footer="true">
      <div class="form-group">
        <input type="text" @change="updateNewModuleName" placeholder="Enter module name" class="form-control"/>
      </div>

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
        focusedRepoID: state => state.repos.focusedRepoID,
        focusedModule: state => state.modules.focusedModule
      }),
      moduleType: {
        get () {
          return this.$store.state.modules.focusedModule.type
        },
        set (value) {
          this.$store.commit('SET_NEW_MODULE_TYPE', value)
        }
      }
    },
    methods: {
      createModule () {
        const newModuleID = this.$store.dispatch('createModule', {
          repoID: this.repoID,
          moduleName: this.focusedModule.name,
          // TODO hardocoded type
          moduleType: 'System'
        })
        console.log(newModuleID)
        this.$router.push({path: '/module-view'})
      },
      updateNewModuleName (e) {
        this.$store.commit('SET_NEW_MODULE_NAME', {moduleName: e.target.value})
      }
    }
  }
</script>

<style scoped>
</style>

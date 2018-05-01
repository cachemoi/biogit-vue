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
        <div class="btn-group">
          <button class="btn btn-outline-primary"
                  :class="{ active: isSystem }"
                  @click.prevent="changeNewModuleType('System')"
                  >
            System
          </button>
          <button class="btn btn-outline-primary"
                  :class="{ active: isProtocol }"
                  @click.prevent="changeNewModuleType('Protocol')"
                  >
            Protocol
          </button>
          <button class="btn btn-outline-primary"
                  :class="{ active: isExperiment }"
                  @click.prevent="changeNewModuleType('Experiment')"
                  >
            Experiment
          </button>
        </div>
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
        newModule: state => state.modules.newModule
      }),
      isSystem: function () {
        if (this.newModule.type === 'System') {
          return true
        } else {
          return false
        }
      },
      isProtocol: function () {
        if (this.newModule.type === 'Protocol') {
          return true
        } else {
          return false
        }
      },
      isExperiment: function () {
        if (this.newModule.type === 'Experiment') {
          return true
        } else {
          return false
        }
      }
    },
    methods: {
      changeNewModuleType (newType) {
        this.$store.commit('SET_NEW_MODULE_TYPE', {moduleType: newType})
      },
      createModule () {
        this.$store.dispatch('createModule', {
          repoID: this.focusedRepoID,
          moduleName: this.newModule.name,
          moduleType: this.newModule.type
        }).then(
          createdID => {
            this.$router.push({name: 'module', props: {id: createdID}})
          }
        )
      },
      updateNewModuleName (e) {
        this.$store.commit('SET_NEW_MODULE_NAME', {moduleName: e.target.value})
      }
    }
  }
</script>

<style scoped>
</style>

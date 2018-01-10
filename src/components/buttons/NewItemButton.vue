<template>
  <div>
    <button type="button" class="btn btn-outline-primary mr-2 ml-2" data-toggle="modal" data-target="#new-item-modal">
      <i class="fa fa-plus-circle" aria-hidden="true"></i>
    </button>
    <div class="modal fade" id="new-item-modal" tabindex="-1" role="dialog">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">New Item</h5>
          </div>
          <div class="modal-body">
            <form>
              <div class="form-group">
                <input v-model="newItemName" type="text" placeholder="Enter item name" class="form-control"/>
              </div>
              <div class="form-group">
                <div class="btn-group" data-toggle="buttons">
                  <label class="dropdown">
                    <select v-model="newItemClass" class="custom-select">
                      <option disabled value="">Please select your item type</option>
                      <option value="system">System</option>
                      <option value="protocol">Protocol</option>
                      <option value="experiment">Experiment</option>
                    </select>
                  </label>
                </div>
              </div>
              <button @click.prevent="newItem" class="btn btn-outline-primary">
                <i class="fa fa-plus-circle" aria-hidden="true"></i>
              </button>
            </form>
          </div>
          <div class="modal-footer">
            <button @click="closeModal" type="button" class="btn btn-secondary">Close</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import {mapState} from 'vuex'

  const $ = window.$

  export default {
    name: 'new-item-button',
    data () {
      return {
        newItemClass: '',
        newItemName: ''
      }
    },
    computed: {
      ...mapState({
        userID: state => state.auth.user.userID
      })
    },
    methods: {
      async newItem () {
        console.log(this.newItemName)
        $('#new-item-modal').modal('toggle')
        this.$router.push({name: 'new-item-view', params: {newItemClass: this.newItemClass, newItemName: this.newItemName}})
      },
      closeModal () {
        $('#new-item-modal').modal('toggle')
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>

<template>
  <div>
    <b-btn v-b-modal.SignUpModal class="btn btn-outline-primary">
      ~+~
    </b-btn>
    <b-modal id="NewItemModal" title="New Item" :hide-footer="true">
      <form>
        <div class="form-group">
          <input type="text" placeholder="Enter item name" class="form-control"/>
        </div>
        <div class="form-group">
          <div class="btn-group" data-toggle="buttons">
            <label class="dropdown">
              <select class="custom-select">
                <option disabled value="">Please select your item type</option>
                <option value="system">System</option>
                <option value="protocol">Protocol</option>
                <option value="experiment">Experiment</option>
              </select>
            </label>
          </div>
        </div>
        <button @click.prevent="newItem" class="btn btn-outline-primary">
          ~+~
        </button>
      </form>
    </b-modal>
  </div>
</template>

<script>
  import {mapState} from 'vuex'

  export default {
    name: 'NewItemButton',
    computed: {
      ...mapState({
        userID: state => state.auth.user.userID
      })
    },
    methods: {
      newItem () {
        console.log(this.newItemName)
      }
    }
  }
</script>

<style scoped>
</style>

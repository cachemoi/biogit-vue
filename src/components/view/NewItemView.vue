<template>
  <div class="container-fluid mt-4">
    <h1 class="display-6">Creating new knowledge module</h1>
    <form class="m-5">
      <div class="form-group row">
        <label for="item-name-input" class="col-form-legend">Item Name</label>
          <input id="item-name-input" v-model="newItemName" type="text" placeholder="Enter item name" class="form-control"/>
      </div>
      <div class="form-group row">
        <div id="item-class-input" class="btn-group" data-toggle="buttons">
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
      <div class="form-group row">
        <button @click.prevent="createItem" class="btn btn-outline-primary">
          Create item
        </button>
      </div>
    </form>
  </div>
</template>

<script>
  import {mapState} from 'vuex'

  export default {
    name: 'new-item-view',
    props: {
      newItemClass: String,
      newItemName: String
    },
    computed: {
      ...mapState({
        userID: state => state.auth.user.id
      })
    },
    methods: {
      async createItem () {
        try {
          await this.$store.dispatch('newItem', {
            newItemName: this.newItemName,
            newItemClass: this.newItemClass,
            userID: this.userID,
            data: null
          }).then(data => console.log(data))
        } catch (e) {
          console.log(e)
        } finally {
          switch (this.newItemClass) {
            // TODO ID is not dynamic
            case 'system':
              this.$router.push({path: 'system-view', props: {itemID: 'cjanz69rc49le0165crdonsgb'}})
              break
            case 'experiment':
              this.$router.push({path: 'experiment-view', props: {itemID: 'cjanz69rc49le0165crdonsgb'}})
              break
            case 'protocol':
              this.$router.push({path: 'protocol-view', props: {itemID: 'cjanz69rc49le0165crdonsgb'}})
              break
            default:
              this.$store.dispatch('setError')
              break
          }
        }
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>

<template>
  <div v-if="item" class="container-fluid">
    <div class="row bg-light pt-3 px-5">
      <div class="row col-12">
        <h3 class="display-6">
          {{item.author.userName}} / {{item.name}}
        </h3>
      </div>

      <div class="row pt-3">
        <nav class="nav nav-tabs" id="myTab" role="tablist">
          <a class="nav-item nav-link active" data-toggle="tab" href="#item-view" role="tab" aria-controls="nav-home" aria-selected="true">
            View
          </a>
          <a class="nav-item nav-link" data-toggle="tab" href="#item-issues" role="tab" aria-controls="nav-profile" aria-selected="false">
            Issues
          </a>
        </nav>
      </div>
    </div>
    <div class="row pt-3 px-3">
      <div class="tab-content" id="nav-tabContent">
        <div id="item-view" class="col col-sm-12 tab-pane fade show active" role="tabpanel">
          Main View
        </div>
        <div id="item-issues" class="col col-sm-12 tab-pane fade" role="tabpanel">
          Issues
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import {mapState} from 'vuex'

  export default {
    name: 'system-view',
    props: ['itemID'],
    computed: {
      ...mapState({
        item: state => state.items.currentItem
      })
    },
    mounted () {
      console.log(this.itemID)
      try {
        this.$store.dispatch('getItem', {itemID: this.itemID})
        this.$store.dispatch('getItemData', {itemID: this.itemID})
      } catch (e) {
        console.log(new Error(e.toString()))
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>

<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-12">
        <div class="row">
          <div class="col col-9 border-dark">
            <div class="card text-center">
              <div class="card-header">
                <ul class="nav nav-tabs" id="myTab" role="tablist">
                  <li class="nav-item">
                    <a class="nav-link active" id="world-feed-tab" data-toggle="tab" href="#world-feed" role="tab">World feed</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" id="user-feed-tab" data-toggle="tab" href="#user-feed" role="tab">Your feed</a>
                  </li>
                </ul>
              </div>
              <div class="card-body">
                <div class="card-text tab-content" id="myTabContent">
                  <div class="tab-pane fade show active" id="world-feed" role="tabpanel">
                    World feed
                  </div>
                  <div class="tab-pane fade" id="user-feed" role="tabpanel">
                    Your feed
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col col-3 border-dark">
            <div class="card">
              <h5 class="card-header">
                Your Items
              </h5>
              <ul class="list-group list-group-flush">
                <li class="list-group-item" v-if="items.length === 0">
                  <p>You don't have any items yet, click to add some!</p>
                </li>
                <li class="list-group-item" v-for="item in items" v-if="item.class === 'system'">
                  <router-link :to="{name: 'system-view', params: { itemID : item.id}}" class="card-link system">
                    {{item.name}}
                  </router-link>
                </li>
                <li class="list-group-item" v-else-if="item.class === 'experiment'">
                  <router-link :to="{name: 'experiment-view', params: { itemID : item.id}}" class="card-link experiment">
                    {{item.name}}
                  </router-link>
                </li>
                <li class="list-group-item">
                  <new-item-button></new-item-button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import {mapState} from 'vuex'
  import NewItemButton from '../buttons/NewItemButton.vue'

  export default {
    components: {NewItemButton},
    name: 'home-view',
    computed: {
      ...mapState({
        user: state => state.auth.user,
        items: state => state.items.items
      })
    },
    mounted () {
      console.log('HomeView mounted')
      this.$store.dispatch('getUserItems', this.user.id)
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

  .container-fluid{
    padding-top: 5%
  }
  .system {
    color: #0A81D1;
  }
  .experiment {
    color: #314CB6;
  }
</style>

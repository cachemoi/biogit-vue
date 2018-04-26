<template>
  <div class="card text-center" style="width: 12rem;">
    <div class="card-header">
      Your Items
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item" v-if="items.length === 0">
        <p>You don't have any items yet, click to add some!</p>
      </li>
      <li class="list-group-item" v-for="item in items" :key="item.name" v-if="item.class === 'system'">
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
</template>

<script>
import {mapState} from 'vuex'
import NewItemButton from '../buttons/NewItemButton'

export default {
  name: 'UserRepos',
  components: {
    NewItemButton
  },
  computed: {
    ...mapState({
      items: state => state.items.items
    })
  }
}
</script>

<style scoped>
  .repo-nav-wrapper{
    width: 150px
  }
</style>

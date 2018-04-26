<template>
  <div id="repo-nav-wrapper">
    <h5 class="card-header">
      Your Items
    </h5>
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

export default {
  name: 'UserRepos',
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

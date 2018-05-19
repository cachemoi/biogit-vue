<template>
  <b-card no-body>
    <b-tabs card>
      <b-tab title="Your Feed" active>
        People you follow/your own repos
      </b-tab>
      <b-tab title="World Feed">
        Modules Published around the world
      </b-tab>
    </b-tabs>
  </b-card>
</template>

<script>
  import {mapState} from 'vuex'

  export default {
    name: 'UserHomePanel',
    computed: {
      ...mapState({
        userID: state => state.auth.userID,
        newsItems: state => state.news.items
      })
    },
    created () {
      this.fetchNews()
    },
    watch: {
      '$route': 'fetchNews'
    },
    methods: {
      fetchNews () {
        this.$store.dispatch('getNews', {userID: this.userID, itemNum: 20})
      }
    }
  }
</script>

<style scoped>
</style>

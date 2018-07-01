<template>
  <footer v-if="notification.raised" class="footer p-2">
      <b-alert  :variant="notification.type"
                dismissible
                class="m-4 border border-dark text-center"
                :show="notification.dismissCountDown"
                @dismissed="dismissNotification()">
        {{notification.msg}}
      </b-alert>
  </footer>
</template>

<script>
  import {mapState} from 'vuex'

  export default {
    computed: {
      ...mapState({
        notification: state => state.notification
      })
    },
    methods: {
      dismissNotification () {
        this.$store.commit('DISMISS_NOTIFICATION')
      }
    }
  }
</script>

<style scoped>
  .footer {
    position: fixed;
    bottom: 0;
    width: 100%;
    height: 15vh;
  }
</style>

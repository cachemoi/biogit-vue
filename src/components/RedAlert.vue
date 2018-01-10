<template>
  <div v-if="errorMsg" class="alert alert-danger m-2" role="alert">
    {{ errorMsg }}
    <span>
      <button @click="dismiss" type="button" class="btn btn-danger btn-sm" data-dismiss="alert" aria-label="Close">
        Dismiss
      </button>
    </span>
  </div>
</template>

<script>
  import {mapState, mapActions} from 'vuex'

  export default {
    computed: {
      ...mapState({
        errorMsg: state => state.errorMsg
      })
    },
    methods: {
      ...mapActions([
        'setErrorMsg'
      ]),
      dismiss () {
        this.$store.commit('DISMISS_ERROR')
      }
    }
  }
</script>

<style scoped>
</style>

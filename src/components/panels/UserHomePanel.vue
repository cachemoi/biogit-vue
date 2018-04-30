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
  export default {
    name: 'UserHomePanel'
  }
</script>

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

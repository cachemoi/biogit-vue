<template>
  <div>
    <h2>{{focusedModuleDat.name}}</h2>
    <ul>
      <add-step 
      v-for="i in stepCounter"
      :stepNumber="i"
      :key="i.id"
      ></add-step>
    </ul>
    <button v-if="stepCounter==0" 
     type="button"
     class="btn btn-primary"
     @click="stepCounter++"
     >Add Protocol</button>
     <template v-else>
      <button
       type="button"
       class="btn btn-primary"
       @click="stepCounter++"
      >Next Step</button>
      <button
       type="button"
       class="btn btn-primary"
       @click="saveContent"
      >Submit Protocol</button>
    </template>
  </div>
</template>

<script>
  import {mapGetters} from 'vuex'
  import VQuill from 'quill'
  import AddStep from './AddStep'
  const Quill = window.Quill || VQuill
  export default {
    name: 'ProtocolPanel',
    props: {},
    computed: {
      ...mapGetters([
        'focusedModuleDat'
      ])
    },
    components: {
      AddStep
    },
    data () {
      return {
        stepCounter: 0
      }
    },
    methods: {
      saveContent() {
        let content = this.quill.getContents()
        console.log('contents', content);
        let html = "contents" + JSON.stringify(content, null,2)
        console.log(html)
      }
    }
  }
</script>

<style scoped>

</style>

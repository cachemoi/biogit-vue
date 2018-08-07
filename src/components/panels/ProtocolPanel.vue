<template>
  <div>
    <h2>{{focusedModuleDat.name}}</h2>
    <!--     light bunser burner
    place iron oxide
    observe -->
    <!-- <ul> -->
<!--       <add-step 
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
      >Next Step</button> -->
      <div class="quillWrapper">
        <div ref="quillContainer"></div>    
      </div>
      <button
       type="button"
       class="btn btn-primary"
       @click="saveContent"
      >Submit Protocol</button>
    <!-- </template> -->
  </div>
</template>

<script>
  import {mapGetters} from 'vuex'
  import VQuill from 'quill'
  // import AddStep from './AddStep'
  const Quill = window.Quill || VQuill
  export default {
    name: 'ProtocolPanel',
    props: {},
    computed: {
      ...mapGetters([
        'focusedModuleDat'
      ])
    },
    data () {
      return {
        quill: null,
        editor: null
      }
    },
    created () {
      this.$store.dispatch('getProtocolSteps', {protocolID: this.focusedModuleDat.id})
    },
    mounted () {
      this.setQuillElement()
    },
    methods: {
      setQuillElement () {
        // deal with config later,
        let toolbarOptions = [
          ['bold', 'italic', 'underline', 'strike'],        // toggled buttons
          [{ 'list': 'bullet' }],
          [{ 'script': 'sub' }, { 'script': 'super' }],      // superscript/subscript
          [{ 'size': ['small', false, 'large', 'huge'] }],  // custom dropdown
          [ 'link', 'image', 'formula' ],          // add's image support
          [{ 'color': [] }],          // dropdown with defaults from theme
          [{ 'font': [] }],
          [{ 'align': [] }],

          ['clean']                                       // remove formatting button
        ]
        let options = {
          debug: true,
          placeholder: '',
          theme: 'snow',
          modules: {
            toolbar: toolbarOptions
          }
        }
        this.quill = new Quill(this.$refs.quillContainer, options)
        if (this.focusedModuleDat.steps) this.quill.setContents(JSON.parse(this.focusedModuleDat.steps))
      },
      saveContent () {
        let content = this.quill.getContents()
        let protocolSteps = JSON.stringify(content, null, 2)
        console.log(protocolSteps)
        this.$store.dispatch('addProtocolSteps', {
          protocolID: this.focusedModuleDat.id,
          protocolSteps: protocolSteps
        })
      },
      addProtocolSteps () {
        this.$store.dispatch('addProtocolSteps', {
          protocolID: null,
          protocolSteps: null
        })
      }
    }
  }
</script>

<style scoped>
  .quillWrapper{
    height: 200px;  /* You can change this value */
    padding-bottom: 50px;
    width: 800px;
  }
</style>

<style src="quill/dist/quill.snow.css"></style>

<template>
  <div>
    <h2>{{focusedModuleDat.name}}</h2>
    <!-- <div>{{ focusedModuleDat.steps? setQuillContents(): null }}</div> -->
    <!-- <p v-if='focusedModuleDat.steps'>{{ setQuillContents() }}</p> -->
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
      // ...mapstate({
      //   protocolSteps: state => state.
      // }),
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
    mounted () {
      this.setQuillElement()
      this.$store.dispatch('getProtocolSteps', {protocolID: this.focusedModuleDat.id})
      .then(steps => this.quill.setContents(JSON.parse(steps)))
    },
    methods: {
      setQuillElement () {
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
        // if (this.focusedModuleDat.steps) {
        //   console.log('true')
        //   this.quill.setContents(JSON.parse(this.focusedModuleDat.steps))
        // } else {
        //   console.log('false')
        // }
      },
      saveContent () {
        let protocolSteps = JSON.stringify(this.quill.getContents(), null, 2)
        this.$store.dispatch('addProtocolSteps', {
          protocolID: this.focusedModuleDat.id,
          protocolSteps: protocolSteps
        })
      },
      setQuillContents () {
        this.quill.setContents(JSON.parse(this.focusedModuleDat.steps))
        // this.quill.setText(JSON.parse(this.focusedModuleDat.steps))
        // this.quill.insertText(0, JSON.parse(this.focusedModuleDat.steps))
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

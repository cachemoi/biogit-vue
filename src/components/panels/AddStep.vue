<template>
  <div>
    <div class="container-fluid">
      <div class="row">
        <div class="col-sm-1">
          <button type="button" class="btn btn-lg btn-success numberLabel" disabled>{{ stepNumber }}</button>
        </div>
        <div class="col-sm-9">
          <div class="quillWrapper">
            <div ref="quillContainer"></div>    
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import {mapGetters} from 'vuex'
  import VQuill from 'quill'
  const Quill = window.Quill || VQuill
  export default {
    name: 'AddStep',
    props: {
      stepNumber: Number
    },
    computed: {
      ...mapGetters([
        'focusedModuleDat'
      ])
    },
    data () {
      return {
        quill: null,
        editor: null,
      }
    },
    mounted () {
      this.setQuillElement()
    },
    methods: {
      setQuillElement () {
        // deal with config later, 
        let toolbarOptions = [
          ['bold', 'italic', 'underline', 'strike'],        // toggled buttons
          [ { 'list': 'bullet' }],
          [{ 'script': 'sub'}, { 'script': 'super' }],      // superscript/subscript
          [{ 'size': ['small', false, 'large', 'huge'] }],  // custom dropdown
          [ 'link', 'image', 'formula' ],          // add's image support
          [{ 'color': [] }],          // dropdown with defaults from theme
          [{ 'font': [] }],
          [{ 'align': [] }],

          ['clean']                                       // remove formatting button
        ];
        let options = {
          debug: true,
          placeholder: '',
          theme: 'snow',
          modules: {
            toolbar: toolbarOptions
          }
        }
        this.quill = new Quill(this.$refs.quillContainer, options)
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
  .numberLabel{
    position: relative;
    top: 70px;
  }
</style>
<style src="quill/dist/quill.snow.css"></style>
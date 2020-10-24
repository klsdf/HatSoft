<template>
  <div>
    <markdown-it-vue class="md-body" :content="content"/>
  </div>
</template>
 
<script>
import MarkdownItVue from 'markdown-it-vue'
import 'markdown-it-vue/dist/markdown-it-vue.css'
import MdFile from "./SQL.js"
export default {
  components: {
    MarkdownItVue
  },
  data () {
    return {
			content: MdFile
    }
  }
}
</script>

<style>
	
</style>
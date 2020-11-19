<template>
<div>
  <SlidePage></SlidePage>
</div>
 
</template>

<script>
import SlidePage from "components/common/SlidePages/SlidePages.vue"
import {getData} from "network/markdownSrc/test.js"
export default {
  name: "Home",
  components: {
    SlidePage
  },
  data:function() {
  	return {
  		result: null
  	}
  },
  created(){
	  getData().then(res=>{
		  console.log(res);
		  this.result=res;
	  })
  }
};
</script>

<style>
</style>


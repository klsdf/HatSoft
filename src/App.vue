<template>
  <div id="app">
    <MainTapBar />
    <router-view></router-view>
  </div>
  
</template>

<script>
import MainTapBar from "components/content/MainTapBar.vue";
import 'highlight.js/styles/github.css'
import 'github-markdown-css'
export default {
  name: "App",
  components: {
    MainTapBar,
  },
};
</script>

<style>
@import url("assets/css/base.css");
</style>

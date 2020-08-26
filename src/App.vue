<template>
  <div id="app">
	<MainTapBar/>
    <router-view></router-view>
  </div>
</template>

<script>
	import MainTapBar from "./components/content/MainTapBar.vue";
	export default {
		name: "App",
		components: {
			MainTapBar,
		}
	}
</script>

<style>
	@import url("assets/css/base.css");
</style>

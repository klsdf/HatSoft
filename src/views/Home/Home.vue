<template>
	<NavBar>
		<span slot="left">left</span>
		<span slot="middle">middle</span>
		<span slot="right">right</span>
	</NavBar>
</template>

<script>
	import NavBar from "../../components/common/NavBar/NavBar.vue"
	export default {
		name: "Home",
		components:{
		  NavBar
		}
	}
</script>

<style>
</style>

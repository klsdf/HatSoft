<template>
	<TapBar>
		<TapBarItem linkpath="/Home">
			<img slot="img" src="~assets/img/home.svg" alt="">
			<span slot="text">首页</span>
		</TapBarItem>
		<TapBarItem linkpath="/Computer">
			<img slot="img" src="~assets/img/code.svg" alt="">
			<span slot="text">计算机</span>
		</TapBarItem>
		<TapBarItem linkpath="/Art">
			<img slot="img" src="~assets/img/art.svg" alt="">
			<span slot="text">艺术</span>
		</TapBarItem>
	</TapBar>
</template>

<script>
	import TapBar from "components/common/TapBar/TapBar.vue";
	import TapBarItem from "components/common/TapBar/TapBarItem.vue"
	export default {
		name: "MainTapBar",
		components:{
		  TapBar,TapBarItem
		}
	}
</script>

<style>
	
</style>

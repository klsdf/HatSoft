<template>
	<TapBar>
		<TapBarItem linkpath="/Home">
			<img slot="img" src="../../assets/img/home.svg" alt="">
			<span slot="text">首页</span>
		</TapBarItem>
		<TapBarItem linkpath="/Computer">
			<img slot="img" src="../../assets/img/code.svg" alt="">
			<span slot="text">计算机</span>
		</TapBarItem>
		<TapBarItem linkpath="/Art">
			<img slot="img" src="../../assets/img/art.svg" alt="">
			<span slot="text">艺术</span>
		</TapBarItem>
		<TapBarItem linkpath="/Game">
			<img slot="img" src="../../assets/img/game.svg" alt="">
			<span slot="text">游戏开发</span>
		</TapBarItem>
	</TapBar>
</template>

<script>
	import TapBar from "../common/TapBar/TapBar.vue";
	import TapBarItem from "../common/TapBar/TapBarItem.vue"
	export default {
		name: "MainTapBar",
		components:{
		  TapBar,TapBarItem
		}
	}
	
</script>

<style>
	
</style>

<template>
	<TapBar class="tap-bar">
		<TapBarItem linkpath="/Home" class="tap-bar-item">
			<img slot="img" src="~assets/img/home.svg" alt="">
			<span slot="text" class="text">首页</span>
		</TapBarItem>
		<TapBarItem linkpath="/Computer" class="tap-bar-item">
			<img slot="img" src="~assets/img/code.svg" alt="">
			<span slot="text" class="text">计算机</span>
		</TapBarItem>
		<TapBarItem linkpath="/Art" class="tap-bar-item">
			<img slot="img" src="~assets/img/art.svg" alt="">
			<span slot="text" class="text">艺术</span>
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
	.tap-bar{
		background-color: rgb(81,85,118);
	}
	.text{
		color: rgb(189,191,165);
	}
</style>

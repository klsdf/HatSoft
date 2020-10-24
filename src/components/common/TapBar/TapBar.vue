<template>
	<div id="tap-bar">
		<slot></slot>
	</div>
</template>

<script>
	import TapBarItem from "./TapBarItem.vue";
	export default {
		name: "TapBar",
		components:{
		  TapBarItem,
		}
	}
</script>


<style scoped>
	#tap-bar {
		/* 弹性布局 */
		display: flex;

		/* 固定定位,确保两边把屏幕撑死 */
		/* position: fixed;  */
		/* left: 0px; */
		/* top:0px; */
		bottom: 0px;
		right: 0px;

		/* 背景颜色 */
		background-color: khaki;
	}

</style>

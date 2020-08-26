<template>
	<div class="nav-bar">
		<div class="nav-bar-item"><slot name="left"></slot></div>
		<div class="nav-bar-item"><slot name="middle"></slot></slot></div>
		<div class="nav-bar-item"><slot name="right"></slot></slot></div>
	</div>
</template>

<script>
	export default {
		name: "NavBar",
		components:{
		}
	}
</script>

<style>
	.nav-bar{
		display: flex;
		background-color:  beige;
		height: 30px;
		text-align: center;
		font-size: 25px;
		color: firebrick;
	}
	.nav-bar-item{
		flex: 1;
	}
</style>

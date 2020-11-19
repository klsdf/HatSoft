<template>
	<div class="tap-bar-item" v-bind:class="{active:isActive}" v-on:click="itemClick">
		<a href="#">
			<slot name="img"></slot>
			<slot name="text">默认值</slot>
		</a>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				// 使用计算属性可以动态判断是否活跃
				// isActive: false
			}
		},
		computed:{
			isActive(){
				// ==-1表示没有找到
				return this.$route.path==this.linkpath}
		},
		props:{
			linkpath:{
				type:String
			}
		},
		methods: {
			itemClick(){
				this.$router.replace(this.linkpath)
			}
		}
	}
</script>

<style>
	.tap-bar-item {
		border: 1px black solid;
		flex: 1;
		text-align: center;
		height: 40px;
		font-size: 14px;
	}

	.tap-bar-item img {
		position: relative;
		top: 4px;
		width: 24px;
		height: 24px;
		margin-right: 5px;
	}
	.active{
		font-size: 20px;
	}
</style>

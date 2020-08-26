import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

// 防止路由重复报错
const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
	return originalPush.call(this, location).catch(err => err)
}

const routes = [
	// 默认路由重定向
	{
		path: '',
		redirect: '/Home',
	},
	{
		path: '/Home',
		name: 'Home',
		component: () => import('../views/Home/Home.vue')
	},
	{
		path: '/Computer',
		name: 'Computer',
		component: () => import('../views/Computer/Computer.vue')
	},
	{
		path: '/Art',
		name: 'Art',
		component: () => import('../views/Art/Art.vue')
	},
	{
		path: '/Game',
		name: 'Game',
		component: () => import('../views/Game/Game.vue')
	},
]

const router = new VueRouter({
	routes,
	mode: 'history'
})

export default router

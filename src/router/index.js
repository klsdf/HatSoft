import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

// 防止路由重复报错
const VueRouterPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(to) {
	return VueRouterPush.call(this, to).catch(err => err)
}

//replace
const VueRouterReplace = VueRouter.prototype.replace
VueRouter.prototype.replace = function replace(to) {
	return VueRouterReplace.call(this, to).catch(err => err)
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
		component: () => import('views/Home/Home.vue')
	},
	{
		path: '/Computer',
		name: 'Computer',
		component: () => import('views/Computer/Computer.vue'),
		children: [
			{
				path: 'HTML',
				name: 'HTML',
				component: () => import('views/Computer/HTML/HTML.vue')
			},
			{
				path: 'CSS',
				name: 'CSS',
				component: () => import('views/Computer/CSS/CSS.vue')
			},
			{
				path: 'JavaScript',
				name: 'JavaScript',
				component: () => import('views/Computer/JavaScript/JavaScript.vue')
			},
			{
				path: 'SQL',
				name: 'SQL',
				component: () => import('views/Computer/SQL/SQL.vue')
			},
		]
	},
{
	path: '/Art',
		name: 'Art',
			component: () => import('../views/Art/Art.vue')
},
]

const router = new VueRouter({
	routes,
	mode: 'history'
})

export default router

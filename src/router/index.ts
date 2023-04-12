
import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';


const routes = [
	{
		path: '/',
		name: 'App',
		redirect: '/login',
		component: () => import('@/views/App.vue'),
		children: [
			{
				path: '/login',
				name: 'login',
				component: () => import('@/views/common/login.vue')
			},
			{
				path: '/layout',
				name: 'layout',
				component: () => import('@/views/common/layout.vue')
			}
		]
	}
];
function importAllRoutes(): void {
  const routes: any = [];
	console.log(routes);
	
  const moduleGlob = import.meta.glob('@/views/**/*.vue');
	console.log('moduleGlob', moduleGlob);
	
}
importAllRoutes();
// createWebHashHistory 带#的hash路由
// createWebHistory 标准的web路由

export const router = createRouter({
	routes,
	history: createWebHistory()
});

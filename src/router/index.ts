import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import Myapp from '@/views/myapp/myapp';

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
			}
		]
	}
];
// function importAllRoutes(): void {
//   const routes: any = [];
// 	console.log(routes);
//	
//   const moduleGlob = import.meta.glob('@/views/**/*.vue');
// 	console.log('moduleGlob', moduleGlob);
//	
// }
// importAllRoutes();
// createWebHashHistory 带#的hash路由
// createWebHistory 标准的web路由
routes.push(Myapp);
export const router = createRouter({
	routes,
	history: createWebHistory()
});

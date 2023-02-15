import { createRouter, createWebHistory } from "vue-router";
import Index from '@/views/index';
import About from "@/views/about";


const routes = [
	{
		path: '/',
		component: Index
	},
	{
		path: '/about',
		component: About
	}
]
// createWebHashHistory 带#的hash路由
// createWebHistory 标准的web路由
export const router = createRouter({
	routes,
	history: createWebHistory()
})


import { createRouter, createWebHashHistory } from "vue-router";
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

export const router = createRouter({
	routes,
	history: createWebHashHistory()
})


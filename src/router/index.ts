import { createRouter, createWebHistory } from "vue-router";
// virtual:generated-pages是vite-plugin-pages插件生成的，存储在内存中
import generatedRoutes from 'virtual:generated-pages';
// console.log(generatedRoutes);

// createWebHashHistory 带#的hash路由
// createWebHistory 标准的web路由
export const router = createRouter({
	routes: generatedRoutes,
	history: createWebHistory()
})


export default {
	path: '/myapp/home',
	name: 'myapp_home',
	redirect: '',
	meta: {
		type: 1, // 1 => 菜单 2 => 视图 4 => 菜单+视图
		title: 'home', // 菜单以及权限验证所显示的中文名 （*必填）
	},
	component: () => import('@/views/myapp/home/home.vue'),
	children: []
};

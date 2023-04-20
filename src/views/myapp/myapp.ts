export default {
  path: '/myapp',
  name: 'myapp',
  redirect: '',
  component: () => import('@/views/myapp/myapp.vue'),
  children: []
};

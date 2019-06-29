import Vue from 'vue';
import VueRouter from 'vue-router';

const hello = () => import('@/components/hello');
const world = () => import('@/components/world');

Vue.use(VueRouter);

export default new VueRouter({
  mode: 'history',
  base: '/activity',
  routes: [
    {
      path: '/',
      redirect: '/hello'
    },
    {
			path: '/hello',
			name: 'Hello',
			component: hello
     },
     {
			path: '/world',
			name: 'World',
			component: world
     }
  ]
});
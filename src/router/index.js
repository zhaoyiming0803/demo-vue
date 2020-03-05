import VueRouter from 'vue-router'
import Vue from 'vue'

// 将 RouterLink 和 RouterView 组件挂载到 Vue.options.Components
Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      component: () => import('@/pages/Home.vue')
    },
    {
      path: '/list',
      component: () => import('@/pages/List.vue')
    }
  ],
  scrollBehavior: (to, from, position) => {
    console.log('to: ', to)
    console.log('from: ', from)
    console.log('position: ', position)
    console.log('---------')
  }
})

export default router
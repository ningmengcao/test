import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: () => import('../views/Login.vue')
    },
    {
      path: '/Index',
      component: () => import('../views/Index.vue'),
      children: [
        {
          path: '/',
          name: 'Home',
          component: () => import('../views/Home.vue') // 主页
        },
        {
          path: '/Overview',
          name: 'Overview',
          component: () => import('../views/Overview.vue') // 总览界面
        },
        {
          path: '/User',
          name: 'User',
          component: () => import('../views/User.vue') // 用户管理界面
        },
        {
          path: '/Company',
          name: 'Company',
          component: () => import('../views/Company.vue') // 公司管理界面
        },
        {
          path: '/Business',
          name: 'Business',
          component: () => import('../views/Business.vue') // 业务管理界面
        },
        {
          path: '/Finance',
          name: 'Finance',
          component: () => import('../views/Finance.vue') // 财务管理界面
        },
        {
          path: '/Label',
          name: 'Label',
          component: () => import('../views/Label.vue') // 标签管理界面
        },
        {
          path: '/Log',
          name: 'Log',
          component: () => import('../views/Log.vue') // 标签管理界面
        },
        {
          path: '/Manager',
          name: 'Manager',
          component: () => import('../views/Manager.vue') // 标签管理界面
        }
      ]
    }
  ]
})

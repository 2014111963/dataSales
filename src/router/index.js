import Vue from 'vue'
import Router from 'vue-router'
import product from '../datasales/product/product'
import home from '../home/home'
import exportData from '../datasales/product/exportData'
import login from '../datasales/user/login'
import resetPassword from '../datasales/user/resetPassword'
import member from '../datasales/member/member'
import updatePassword from '../datasales/user/updatePassword'
import areaList from '../datasales/area/areaList'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/product',
      name: 'product',
      component: product
    },
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/resetPassword',
      name: 'resetPassword',
      component: resetPassword
    },
    {
      path: '/member',
      name: 'member',
      component: member
    },
    {
      path: '/exportData',
      name: 'exportData',
      component: exportData
    },
    {
      path: '/updatePassword',
      name: 'updatePassword',
      component: updatePassword
    },
    {
      path: '/areaList',
      name: 'areaList',
      component: areaList
    }
  ]
})

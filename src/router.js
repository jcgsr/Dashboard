import Vue from 'vue'
import Router from 'vue-router'

import Home from './components/Home'
import Register from './components/Register'
import Login from './components/Login'
import Dashboard from './components/Dashboard'

Vue.use(Router)


export default new Router({
   mode: 'history',
   linkExactActiveClass: 'link-active',
   routes: [{
      path: '/',
      name: 'home',
      component: Home
   }, {
      path: '/register',
      name: 'register',
      component: Register
   }, {
      path: '/login',
      name: 'login',     
      component: Login
   }, {
      path: '/dashboard',
      name: 'dashboard',      
      component: Dashboard
   }]
})


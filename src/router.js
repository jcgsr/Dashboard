/*jshint esversion: 6 */
import Vue from 'vue';
import Router from 'vue-router';

import Home from './components/Home';
import Register from './components/Register';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import EscritosForm from './components/EscritosForm';
import EscritosEdit from './components/EscritosEdit';

Vue.use(Router);


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
   }, {
      path: '/escritos',
      name: 'escritos',
      component: EscritosForm
   }, {
		path: '/edit',
		name: 'edit',
		component: EscritosEdit
	}]
})


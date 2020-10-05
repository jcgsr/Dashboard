import Vue from 'vue'
import { BootstrapVue } from 'bootstrap-vue'
import VueRouter from 'vue-router'
import * as firebase from 'firebase'

import router from './router'

Vue.use(BootstrapVue)

Vue.use(VueRouter)

import App from './App.vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'animate.css'

Vue.config.productionTip = false

const firebaseConfig = {
  apiKey: "AIzaSyCEAqdkvf1vXzMJXu7N6T3OgPQHW0UE5Ug",
  authDomain: "meusescritos-2bc34.firebaseapp.com",
  databaseURL: "https://meusescritos-2bc34.firebaseio.com",
  projectId: "meusescritos-2bc34",
  storageBucket: "meusescritos-2bc34.appspot.com",
  messagingSenderId: "1018889555488",
  appId: "1:1018889555488:web:3b05a9536c2313cff3f645",
  measurementId: "G-ZK5M6Z7TCH"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// firebase.analytics();

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')

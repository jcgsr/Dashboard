import Vue from 'vue'
import axios from 'axios'

axios.defaults.baseURL = 'https://meusescritos-2bc34.firebaseio.com'

Vue.use({
   install(Vue) {
      Vue.prototype.$http = axios
   }
})
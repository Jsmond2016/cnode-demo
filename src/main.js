// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Axios from 'axios'
import { formatDate, tabFormatter } from './utis/filters'

import './assets/reset.css'

Vue.prototype.$http = Axios
Vue.config.productionTip = false

Vue.filter('formatDate', formatDate)
Vue.filter('tabFormatter', tabFormatter)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

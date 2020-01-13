// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

window.Vue = Vue;

/* eslint-disable no-new */
window.vm = new Vue({
  el: '#app',
  data () {
    mark: 'entry'
  },
  render: h => h(App)
})

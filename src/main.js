// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import { create } from 'domain';

Vue.config.productionTip = false

Vue.mixin({
  created () {
    console.log('parent created');
  },

  mounted () {
    console.log('parent mounted');
  }
});

new Vue({
  el: '#app',

  data () {
    return {
      placeholder: 'new Vue'
    }
  },
  
  created () {
    console.log('child created');
  },

  mounted () {
    console.log('child mounted');
  },
  
  render: h => h(App)
})

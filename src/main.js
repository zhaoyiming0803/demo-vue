// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import { create } from 'domain';
import world from './components/world';

import hello from './components/hello';

Vue.config.productionTip = false

Vue.component('hello', hello);

// Vue.mixin({
//   data: function () {
//     return {
//       haha: 'haha',
//       hehe: 'hehe'
//     }
//   },
//   created () {
//     console.log('Vue.mixin created');
//   },

//   mounted () {
//     console.log('Vue.mixin mounted');
//   }
// });



// Vue.component('world', world);

new Vue({
  el: '#app',

  data () {
    return {
      uname: 'zymfe'
    }
  },

  // extends: {
  //   created: function () {
  //     console.log('new Vue extends created');
  //   },
  //   mounted: function () {
  //     console.log('new Vue extends mounted');
  //   },
  //   directives: {
  //     a: {
  //       bind: function (el) {}
  //     }
  //   }
  // },
  // mixins: [
  //   {
  //     beforeCreate: function () {
  //       console.log('new Vue mixins beforeCreate');
  //     },
  //     created: function () {
  //       console.log('new Vue mixins created');
  //     },
  //     mounted: function () {
  //       console.log('new Vue mixins mounted');
  //     },
  //     directives: {
  //       b: {
  //         bind: function (el) {}
  //       }
  //     },
  //     filters: {
  //       capitalize: function (value) {
  //         return 'mock one'
  //       }
  //     }
  //   }
  // ],
  
  // created () {
  //   console.log('new Vue created');
  // },

  // mounted () {
  //   console.log('new Vue mounted');
  // },
  
  render: h => h(App)

  // render: h => {
  //   return h('div', {
  //     attrs: {
  //       id: 'app1'
  //     }
  //   }, this.uname);
  // }
})

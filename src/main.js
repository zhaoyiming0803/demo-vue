// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import { create } from 'domain';

Vue.config.productionTip = false

window.Vue = Vue;

/* eslint-disable no-new */
window.vm = new Vue({
  el: '#app',
  data () {
    return {
      a: 'aaa'
    }
  },
  // components: {
  //   abc: {
  //     render: (createElement) => {
  //       return createElement('div', {
  //         style: {
  //           color: 'red',
  //           fontSize: 30
  //         }
  //       }, '11111');
  //     }
  //   }
  // },
  //components: { App },
  // render: function (createElement) {
  //   return createElement('div',
  //     Array.apply(null, { length: 20 }).map(function () {
  //       return createElement('p', {
  //         attrs: {
  //           class: 'haha'
  //         }
  //       }, 'hi')
  //     })
  //   )
  // }

  // render (createElement) {
  //   const _this = this;
  //   return createElement('div', [
  //     createElement('div', {
  //       style: {
  //         color: 'red'
  //       },
  //       on: {
  //         click: () => {
  //           console.log(this);
  //         }
  //       }
  //     }, this.a),
  //     createElement('div', {
  //       style: {
  //         color: 'blue'
  //       }
  //     }, '2')
  //   ]);
  // }
  render: h => h(App)
})

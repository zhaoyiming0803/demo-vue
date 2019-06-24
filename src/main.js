// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import Alert from '@/components/alert';

Vue.config.productionTip = false;

Vue.prototype.$Alert = Alert;

Vue.mixin({
  methods: {
    dispatch (componentName, eventName, params) {
      let parent = this.$parent || this.$root;
      let name = parent.$options.name;

      while (parent && (!name || name !== componentName)) {
        parent = parent.$parent;
        if (parent) {
          name = parent.$options.name;
        }
      }

      if (parent) {
        parent.$emit.apply(parent, [eventName].concat(params));
      }
    }
  }
});


new Vue({
  el: '#app',
  data () {
    return {
      name: 'Main'
    }
  },
  render: h => h(App)
})

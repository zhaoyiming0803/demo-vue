import Vue from 'vue';

let alertNode = null;

function getAlertNode (instance) {
  return instance.$mount().$el;
}

function patch (instance, content) {
  instance.message = content.message;
  instance.currentValue = true;
  instance.duration = content.duration;
  alertNode = getAlertNode(instance);
  document.body.appendChild(alertNode);
}

function destroyAlertNode () {
  if (alertNode) document.body.removeChild(alertNode); 
}

const options = {
  name: 'zAlert',

  data () {
    return {
      color: '#000',
      currentValue: false,
      duration: 3000,
      message: ''
    }
  },

  watch: {
    currentValue (n, o) {
      if (n) {
        setTimeout(() => {
          this.currentValue = false;
          destroyAlertNode();
        }, this.duration || 3000);
      }
    }
  },

  render (h) {
    return h('div', {
      attrs: {
        class: 'alert-container'
      },
      style: {
        display: this.currentValue ? 'block' : 'none',
        color: this.color || '#000'
      }
    }, this.message);
  }
};

function getComponentInstance () {
  const Component = Vue.extend(options);
  const instance = new Component();
  return instance;
}

export default {
  success (content) {
    const instance = getComponentInstance();
    instance.color = 'green';
    patch(instance, content);
  },

  error (content) {
    const instance = getComponentInstance();
    instance.color = 'red';
    patch(instance, content);
  }
}
import Vue from "vue";
import Alert from "./Alert.vue";

export default function AlertFn(option) {
  const message = option.message || "";
  const duration = option.duration || 1000;

  if (!message) {
    return;
  }

  const instance = new Vue({
    render: h =>
      h(Alert, {
        props: {
          message
        }
      })
  });

  // const Component = Vue.extend({
  //   name: "Alert",
  //   template:
  //     '<div style="position: fixed; top: 50%; left: 50%; transform: translate(-50%, -50%); font-size: 30px; color: red">{{message}}</div>',
  //   data() {
  //     return {
  //       message
  //     };
  //   }
  // });
  // const instance = new Component();

  const dom = instance.$mount();
  console.log(dom);
  document.body.appendChild(dom.$el);
  setTimeout(() => {
    document.body.removeChild(dom.$el);
  }, duration);
}

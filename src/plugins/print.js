export default {
  install(Vue, options) {
    Vue.component("Print", {
      name: "Print",
      template: "<div>a:{{a}} b:{{b}}</div>",
      data() {
        return {
          ...options
        };
      }
    });
  }
};

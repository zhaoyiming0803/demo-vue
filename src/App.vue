<template>
  <div class="app-container">
    <div ref="container">{{num}}</div>
    <hello :message="message"></hello>
    <button @click="change">change</button>
  </div>
</template>

<script>
  import Hello from './components/hello';
  export default {
    data () {
      return {
        num: 1,
        message: 'hello world',
        isShowHello: true
      }
    },

    watch: {
      // watch 一个数据时，再次改变其值，会触发无限更新
      // 为了避免浏览器卡死，Vue 做了限制，最终提示：infinite update loop
      // num (newVal, oldVal) {
      //   this.num = Math.random();
      // },
      num (n, o) {
        this.message = 'hello ' + n
      }
    },

    components: {
      Hello
    },

    methods: {
      change () {
        // for (let i = 0; i < 10; i += 1) {
        //   this.num = Math.random();
        // }

        // 连续将多个 task 放到 microTask 队列中
        // for (let i = 0; i < 3; i += 1) {
        //   this.$nextTick(() => {
        //     this.message = 'hello ' + Math.random();
        //   });
        // }

        this.num = Math.random();
        this.isShowHello = false;
      }
    }
  }
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

<template>
  <div class="app-container">
    <div>{{num}}</div>
    <div>{{num + 1}}</div>
    <button @click="change">change</button>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        num: 1
      }
    },

    watch: {
      // watch 一个数据时，再次改变其值，会触发无限更新
      // 为了避免浏览器卡死，Vue 做了限制，最终提示：infinite update loop
      // num (newVal, oldVal) {
      //   this.num = Math.random();
      // }
    },

    methods: {
      change () {
        for (let i = 0; i < 10; i += 1) {
          this.num = Math.random();
        }
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

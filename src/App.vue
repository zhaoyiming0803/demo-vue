<template>
  <div class="app-container">
    <div>c: {{c}}</div>
    <div>d:{{d}}</div>
    <button @click="resetA">重置a</button>
    <button @click="resetD">重置d</button>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        a: 1,
        b: 2
      }
    },

    computed: {
      c () {
        return this.a + this.b;
      },

      d: {
        get () {
          return this.a + this.b;
        },
        set () {
          console.log('正在执行计算属性 d 的自定义 set 方法');
        }
      }
    },

    methods: {
      resetA () {
        this.a = Math.random();
      },

      resetD () {
        this.d = 1234;
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

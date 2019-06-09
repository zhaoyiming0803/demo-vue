<template>
  <div class="app-container">
    <div>num1:{{num1}}</div>
    <div>num2:{{num2}}</div>
    <div>num3:{{num3}}</div>
    <div>年龄：{{person.age}}</div>
    <button @click="changeNum">生成随机数</button>
    <button @click="changeAge">长大啦</button>
  </div>
</template>

<script>
  export default {
  data () {
    return {
      num1: 1,
      num2: 2,
      num3: 3,
      person: {
        name: 'zhaoyiming',
        age: 18
      }
    }
  },

  watch: {
    num1 (n, o) {
      console.log(n);
    },

    num2: [
      function handler (n, o) {
        console.log('num2-1：', n);
      },
      {
        handler (n, o) {
          console.log('num2-2：', n);
        }
      },
      'modifiedNum2'
    ],

    person: {
      handler (n, o) {
        console.log('长大啦：', n.age);
      },
      deep: true,
      immediate: true
    },

    'person.age' (n, o) {
      console.log('person.age:', n);
    }
  },

  methods: {
    changeNum () {
      this.num1 = this.num2 = this.num3 = Math.random();
    },

    changeAge () {
      this.person.age += 1;
    },

    modifiedNum2 (n, o) {
      console.log('modifiedNum2:', n);
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

<template>
  <div class="app-container">
    <input type="text" v-model="person.age">
    <div>{{message}}</div>
    <hello></hello>
  </div>
</template>

<script>
  import hello from './components/hello';
  export default {
    data () {
      return {
        person: {
          age: 1,
          skill: ['code']
        }
      }
    },

    watch: {
      'person.age' (n, o) {
        console.log('age最新值：' + o);
      },
      'skill["code"]' (n, o) {
        console.log('skill最新值：' + n);
      }
    },

    computed: {
      message () {
        return '我今年' + this.person.age +　'岁';
      }
    },

    components: {
      hello
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

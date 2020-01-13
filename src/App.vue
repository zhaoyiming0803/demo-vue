<template>
  <div id="app">
    <hello></hello>
    <div>div label</div>
  </div>
</template>

<script>
  import hello from './components/hello';
  export default {
    data () {
      return {
        mark: 'app'
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

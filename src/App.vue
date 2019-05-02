<template>
  <div class="app-container">
    <hello></hello>
  </div>
</template>

<script>
  import hello from './components/hello';
  import world from './components/world';
  export default {
    data () {
      return {
        name: 'APP'
      }
    },

    components: {
      hello,
      world
    },

    created () {
      
    },

    mounted () {
      
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

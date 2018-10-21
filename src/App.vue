<template>
  <div class="root-container">
    <hello></hello>
  </div>
</template>

<script>
  import hello from './components/hello';
  import world from './components/world';
  export default {
    data () {
      return {
        placeholder: 'App'
      }
    },

    components: {
      hello,
      world
    },

    created () {
      console.log('app.vue created');
    },

    mounted () {
      console.log('app.vue mounted');
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

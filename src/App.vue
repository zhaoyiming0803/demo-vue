<template>
  <div class="app-container">
    <hello :message="message" :content="content"></hello>
  </div>
</template>

<script>
  import Hello from './components/hello';

  export default {
    data () {
      return {
        message: 'hello world',
        content: {}
      }
    },

    components: {
      Hello
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

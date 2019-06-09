<template>
  <div class="app-container">
    <div>{{message}}</div>
    <div>{{reservedMessage}}</div>
    <input type="text" v-model="message">
  </div>
</template>

<script>
  export default {
    data () {
      return {
        message: 'hello vue'
      }
    },

    computed: {
      reservedMessage () {
        return this.message.split('').reverse().join('');
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

<template>
  <div id="app">
    <hello></hello>
    <div @click="changeAbc">abc in store: {{$store.state.abc}}</div>
    <router-view></router-view>
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
    },

    mounted () {
      console.log(this.$store)
    },

    methods: {
      changeAbc () {
        this.$store.commit('changeAbc', Math.random())
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
  height: 2000px;
}

</style>

<template>
  <div>
    <div>{{activityTab}}</div>
    <tabs v-model="activityTab"></tabs>
  </div>
</template>

<script>
  import tabs from './components/tabs'
  export default {
    data () {
      return {
        activityTab: 3
      }
    },

    components: {
      tabs
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

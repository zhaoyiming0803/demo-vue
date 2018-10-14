<template>
  <div class="root-container">
    <img src="http://www.0351zhuangxiu.com/uploads/images/123.jpg" alt="">
    <div>div1</div>
    <div>div2</div>
  </div>
</template>

<script>
  import hello from './components/hello';
  export default {
    data () {
      return {
        name: 'app'
      }
    },

    created () {
      
    },

    mounted () {
      console.log(this);
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

<template>
  <div class="hello-container">
    <div v-if="isShowMessage">{{message}}</div>
  </div>
</template>

<script scoped type="ecmascript-6">
  export default {
    data () {
      return {
        isShowMessage: true,
        message: 'hello'
      }
    },

    mounted () {
      setTimeout(() => {
        this.isShowMessage = false;
      }, 3000);
    }
  }
</script>

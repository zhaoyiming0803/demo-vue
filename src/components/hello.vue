<template>
  <div class="hello-container">
    hello
    <button @click="toWorld">去 world</button>
  </div>
</template>

<script scoped type="ecmascript-6">
  export default {
    data () {
      return {
        name: 'Hello'
      }
    },

    methods: {
      toWorld () {
        this.$router.push({
          name: 'World'
        });
      }
    }
  }
</script>

<template>
  <div>
    <div>Home</div>
    <div @click="alert">alert</div>
    <Print></Print>
    <router-link to="/list">go List page</router-link>
  </div>
</template>

<script scoped>
export default {
  data() {
    return {}
  },
  methods: {
    alert() {
      this.Alert({
        message: 'hello world',
        duration: 1000
      })
    }
  }
}
</script>

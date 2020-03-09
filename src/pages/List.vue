<template>
  <div>
    <div>List</div>
    <router-link to="/home">go Home page</router-link>
  </div>
</template>

<script scoped>
export default {
  data () {
    return {

    }
  },
  mounted () {
    console.log('List component, this.$store.state: ', this.$store.state)
    console.log('List component, this.$options.store: ', this.$options.store)
    console.log('List component, this.$options.parent.$store: ', this.$options.parent.$store)
    console.log('List component this: ', this)
  }
}
</script>
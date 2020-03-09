<template>
  <div @click="changeC">
    hello: {{$store.state.hello.hi.c}}
  </div>
</template>

<script scoped type="ecmascript-6">
  export default {
    data () {
      return {
        hello: 'world'
      }
    },

    created () {

    },

    mounted () {
      console.log('hello component, this.$store.state: ', this.$store.state)
      console.log('hello component, this.$options.store: ', this.$options.store)
      console.log('hello component, this.$options.parent.$store: ', this.$options.parent.$store)
      console.log('hello component this: ', this)
    },

    methods: {
      changeC () {
        this.$store.commit('hello/hi/changeC', Math.random())
      }
    }
  }
</script>

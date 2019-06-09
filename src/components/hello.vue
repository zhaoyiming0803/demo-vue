<template>
  <div class="hello-container">
    
  </div>
</template>

<script scoped type="ecmascript-6">
  export default {
    props: {
      message: {
        type: String,
        required: true
      },
      content: {
        type: [Object, Array],
        required: true
      }
    },

    data () {
      return {
        name: 'Hello'
      }
    },

    created () {

    },

    mounted () {
      
    }
  }
</script>

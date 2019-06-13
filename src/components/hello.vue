<template>
  <div class="hello-container">
    {{message}}
  </div>
</template>

<script scoped type="ecmascript-6">
  export default {
    props: {
      message: {
        type: String,
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

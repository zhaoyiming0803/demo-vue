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
      },
      // Invalid default value for prop "formData": 
      // Props with type Object/Array must use a factory function to return the default value.
      // formData: {
      //   type: Object,
      //   default: {}
      // },
      test: {
        type: String,
        default () {
          return '';
        },
        //  Invalid prop: custom validator check failed for prop "test".
        // validator (value) {
        //   return ['small', 'middle', 'large'].includes(value);
        // }
      }
    },

    data () {
      return {
        name: 'Hello'
      }
    }
  }
</script>

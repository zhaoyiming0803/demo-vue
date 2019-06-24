<template>
  <div @click="handleClick">
    <slot></slot>
  </div>
</template>

<script scoped type="text/ecmascript-6">
  export default {
    name: 'zHello',

    data () {
      return {

      }
    },

    mounted () {
  
    },

    methods: {
      handleClick () {
        console.log(this.$props);
        this.$emit('click');
      }
    }
  }
</script>

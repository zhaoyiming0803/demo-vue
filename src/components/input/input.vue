<template>
  <div>
    <input 
      :type="type" 
      :value="currentValue" 
　　　 @input="handleInput"
      @blur="handleBlur"
      :placeholder="placeholder" 
      class="z-input">
  </div>
</template>

<script scoped type="text/ecmascript-6">
  export default {
    name: 'zInput',

    props: {
      type: {
        type: String,
        validator (type) {
          return ['text', 'number', 'textarea'].indexOf(type) > -1;
        },
        default () {
          return 'text';
        }
      },

      placeholder: {
        type: String,
        default () {
          return '';
        }
      },

      value: {
        type: [String, Number, Boolean]
      }
    },

    data () {
      return {
        currentValue: this.value
      }
    },

    watch: {
      value (n, o) {
        this.currentValue = n;
      }
    },

    mounted () {
      
    },

    methods: {
      handleInput (e) {
        const value = e.target.value;
        this.currentValue = value;
        this.$emit('input', value);
        //this.$emit('on-change', e);
        this.dispatch('zFormItem', 'on-form-change', value);
      },

      handleBlur (e) {
        this.dispatch('zFormItem', 'on-form-blur', this.currentValue);
      }
    }
  }
</script>

<style>
  .z-input {
    padding: 3px;
    box-sizing: border-box;
    width: 400px;
    height: 28px;
    line-height: 28px;
  }
</style>

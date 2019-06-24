<template>
  <div :class="['button', classes]" @click="handleClick">
    <slot></slot>
  </div>
</template>

<script scoped type="text/ecmascript-6">
  export default {
    name: 'zButton',

    props: {
      type: {
        type: String,
        validator (type) {
          return ['primary', 'success', 'error'].indexOf(type) > -1;
        },
        default () {
          return 'primary';
        }
      },

      size: {
        type: String,
        validator (size) {
          return ['middle', 'small', 'mini'].indexOf(size) > -1;
        },
        default () {
          return 'small';
        }
      }
    },

    data () {
      return {

      }
    },

    computed: {
      classes () {
        return `button-${this.type} button-${this.size}`;
      }
    },

    methods: {
      handleClick () {
        this.$emit('click');
      }
    }
  }
</script>

<style scoped>
  .button {
    text-align: center;
    color: #fff;
    cursor: pointer;
  }

  .button-primary {
    background-color: blue;
  }

  .button-success {
    background-color: green;
  }

  .button-error {
    background-color: red;
  }

  .button-middle {
    width: 100px;
    height: 30px;
    line-height: 30px;
    font-size: 16px;
  }

  .button-small {
    width: 60px;
    height: 20px;
    line-height: 20px;
    font-size: 14px;
  }
</style>

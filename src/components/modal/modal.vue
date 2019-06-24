<template>
  <div v-show="currentValue">
    <button @click="closeModal">关闭模态框</button>
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    value: {
      type: Boolean,
      required: true
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

  methods: {
    closeModal () {
      this.currentValue = false;
      this.$emit('input', false);
    }
  },

  mounted () {
    console.log(this.$listeners);
    console.log(this.$listeners.input.fns);
  }
}
</script>

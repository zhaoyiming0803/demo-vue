<template>
  <div>
    <button v-for="(v, k) in tabs" :key="k" @click="changeTab(k)" :style="{color: k === activity ? 'red' : 'blue'}">{{v}}</button>
  </div>
</template>

<script scoped>
export default {
  props: {
    value: {
      type: Number,
      default: () => 0
    }
  },
  data () {
    return {
      tabs: [0, 1, 2, 3],
      activity: 0
    }
  },
  watch: {
    value: {
      handler (newValue, oldValue) {
        this.activity = newValue
      },
      immediate: true
    }
  },
  methods: {
    changeTab (index) {
      this.activity = index
      this.$emit('input', index)
    }
  }
}
</script>

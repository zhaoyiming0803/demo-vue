<template>
  <div style="position: fixed; top: 50%; left: 50%; transform: translate(-50%, -50%); font-size: 30px; color: red">
    {{message}}
  </div>
</template>

<script scoped>
export default {
  name: "Alert",
  props: {
    message: {
      type: String,
      default: () => ""
    }
  }
};
</script>

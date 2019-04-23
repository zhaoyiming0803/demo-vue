<template>
  <div>
    
    <div v-for="(v, k) in list" :key="k">{{v}}</div>

  </div>
</template>

<script scoped type="ecmascript-6">
  export default {
    data () {
      return {
        name: 'hello',
        list: [1, 2, 3]
      }
    },

    mounted () {
      // setInterval(() => {
      //   this.list.push.apply(this.list, [0, 0, 0, '---------']);
      //   //this.list = this.list.concat([0, 0, 0, '-------']);
      // }, 1000);
    },
  }
</script>

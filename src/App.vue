<template>
  <div class="app-container">
    <div v-show="currentRuleTagConfig.config && currentRuleTagConfig.config.type === 2">
      <div v-for="(v, k) in currentRuleTagConfig.config && currentRuleTagConfig.config.options" :key="k">
        <input type="checkbox" :id="k" :value="v" v-model="currentRuleTagConfig.value">
        <label :for="k">{{v}}</label>
      </div>
    </div>
    <button @click="check">显示或隐藏</button>
    <button @click="change">修改</button>
    <button @click="log">打印</button>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        currentRuleTagConfig: {},
        ruleTagList: [
          {
            index: 0,
            config: {
              type: 2,
              options: ['男', '女', '未知']
            }
          },
          {
            index: 1,
            config: {
              type: 2,
              options: ['北京', '杭州', '太原']
            }
          }
        ],
        isShowModal: false
      }
    },

    methods: {
      check () {
        const index = this.currentRuleTagConfig.index || 0;
        if (this.ruleTagList[index].value === undefined) {
          this.$set(this.ruleTagList[index], 'value', []);
        }
        this.currentRuleTagConfig = this.ruleTagList[index];
        this.isShowModal = !this.isShowModal;
      },

      log () {
        console.log(this.currentRuleTagConfig);
      },

      change () {
        const currentRuleTagConfig = this.currentRuleTagConfig.index === 1
          ? this.ruleTagList[0]
          : this.ruleTagList[1];
        if (currentRuleTagConfig.value === undefined) {
          this.$set(currentRuleTagConfig, 'value', []);
        }
        this.currentRuleTagConfig = currentRuleTagConfig;
        console.log(this.currentRuleTagConfig);
      }
    }
    
  }
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

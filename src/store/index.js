import Vue from 'vue'
import Vuex from 'vuex'

import hello from './modules/hello'
import world from './modules/world'

Vue.use(Vuex)

window.Vuex = Vuex

export default new Vuex.Store({
  // 启用严格模式，在mutations中异步修改state时，控制台会报警告
  strict: process.env.NODE_ENV !== 'production',
  state: {
    abc: 123
  },
  // mutations 中不能写异步代码的原因是：
  // 1：mutations中异步修改某个值，不能及时反映到vuex开发者工具上，在严格模式下会报错。原因参谋 store._withCommit 方法
  // 2：最好遵循单向数据流的开发规范：在 template 中触发 actions，actions异步获取到数据通过commit执行mutation，mutation中修改值之后反应到state中，然后再促使view层发生变化
  mutations: {
    changeAbc (store, value) {
      // setTimeout(() => {
      //   store.abc = value
      // }, 1000)
      store.abc = value
    }
  },
  actions: {
    //
  },
  modules: {
    hello,
    world
  },
  plugins: [ pluginA, pluginB ]
})


function pluginA (store) {
  console.log('store in pluginA: ', store)
}

function pluginB (store) {
  console.log('store in pluginB: ', store)
}
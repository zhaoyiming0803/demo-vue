export default {
  namespaced: 'hello',
  state: {
    a: 1,
    b: 2
  },
  mutations: {
    setA (state, value) {
      state.a = value + '123'
    },
  },
  getters: {
  },
  actions: {
    handleLogin ({ commit }, { userName, password }) {
      
    }
  },
  modules: {
    hi: {
      namespaced: 'hi',
      state: {
        a: 'hi a',
        b: 'hi b',
        c: 'hi c'
      },
      mutations: {
        changeC (state, value) {
          state.c = value
        }
      },
      getters: {
      },
      actions: {
        
      }
    }
  }
}

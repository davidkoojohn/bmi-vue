import { createStore } from 'vuex'

const store = createStore({
  state() {
    return {
      count: 1
    }
  },
  getters: {
    count100: (state) => state.count * 100
  },
  mutations: {
    increment(state) {
      state.count += 1
    }
  },
  actions: {
    increment (context) {
      context.commit('increment')
    }
  },
  modules: {

  }
})


export default store

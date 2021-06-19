import { createStore, createLogger } from 'vuex'

import bmiModule from './modules/bmi'

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
    bmi: bmiModule,
  },
  strict: import.meta.env.DEV,
  plugins: [
    createLogger()
  ],
})


export default store

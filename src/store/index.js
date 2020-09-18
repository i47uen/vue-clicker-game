import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)


export default new Vuex.Store({
  state: {
    balance: 0.005,
    farms: [
      {name: 'Ферма 1', extraction: 0.001, cost: 0.005, quantity: 0},
      {name: 'Ферма 2', extraction: 0.003, cost: 0.025, quantity: 0},
      {name: 'Ферма 3', extraction: 0.009, cost: 0.100, quantity: 0},
    ]
  },
  mutations: {
  },
  actions: {
  },
  getters: {
  },
  modules: {
  }
})

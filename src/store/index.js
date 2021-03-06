import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    balance: 0.15,
    totalExtracted: 0,
    farms: [
      {name: 'Ферма 1', extraction: 0.001, cost: 0.050, quantity: 0},
      {name: 'Ферма 2', extraction: 0.005, cost: 0.250, quantity: 0},
      {name: 'Ферма 3', extraction: 0.025, cost: 1.000, quantity: 0},
      {name: 'Ферма 4', extraction: 0.275, cost: 10.000, quantity: 0},
      {name: 'Ферма 5', extraction: 1.350, cost: 50.000, quantity: 0},
    ]
  },
  mutations: {
    Increment(state, payload){
      state.balance += payload
    },
    buyFarm(state, payload){
      state.farms[payload].quantity++
      state.balance -= state.farms[payload].cost
    },
    addNalog(state, payload){
      state.farms[payload].cost = state.farms[payload].cost + state.farms[payload].cost / 100 * 8
    },
    ResetAll(state){
      state.balance = 0.15
      return  state.farms.reduce((s, i) => s = i.quantity = 0, 0)
    }
  },
  getters: {
    getExtraction(state){
      return  state.farms.reduce((s, i) => s = s + i.extraction * i.quantity, 0)
    },
    getCost(state){
      return  state.farms.reduce((s, i) => s = s + i.cost * i.quantity, 0)
    },
    getFarmsCount(state){
      return state.farms.reduce((s, i) => s = s + i.quantity, 0)
    }
  },
  plugins: [createPersistedState()],

})

export default store;

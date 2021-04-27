import { createStore } from 'vuex'

export default createStore({
  state: {
    title: 'Dziennik elektroniczny'
  },

  mutations: {
    setTitle (state, payload){
      state.title = payload}
  },

  getters: {
    getTitle: state => {return state.title}
  }
})

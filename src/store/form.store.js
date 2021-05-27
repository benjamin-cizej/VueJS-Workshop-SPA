const formModule = {
  namespaced: true,
  state: () => ({
    inputValue: 'test value'
  }),
  getters: {

  },
  mutations: {
    setInput(state, value) {
      state.inputValue = value
    }
  },
  actions: {
    setInputAction(context, value) {
      context.commit('setInput', value)
    }
  }
}

export default formModule

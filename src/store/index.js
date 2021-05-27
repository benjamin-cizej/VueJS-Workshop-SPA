import Vuex from 'vuex'
import Vue from 'vue'
import formModule from './form.store'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    user: {
      username: '',
      accessToken: '',
    }
  },
  getters: {
    isUserLoggedIn(state) {
      return state.user.username && state.user.accessToken
    }
  },
  mutations: {
    setUser(state, user) {
      state.user = user;
    }
  },
  actions: {
    setUserAction(context, user) {
      context.commit('setUser', user)
    }
  },
  modules: {
    formModule: formModule
  }
})

export default store;

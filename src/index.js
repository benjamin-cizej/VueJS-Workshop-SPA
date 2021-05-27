import Vue from 'vue'
import store from './store'
import App from './App.vue'
import router from './router'

const app = new Vue({
  el: '#app',
  store,
  router,
  render: (renderer) => renderer(App)
})

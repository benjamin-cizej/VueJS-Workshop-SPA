import Vue from 'vue'
import store from './store'
import App from './App.vue'

const app = new Vue({
  el: '#app',
  store,
  render: (renderer) => renderer(App)
})

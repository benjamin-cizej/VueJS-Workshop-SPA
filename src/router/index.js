import VueRouter from 'vue-router'
import Vue from 'vue'
import TestComponent from '../components/TestComponent'
import FormComponent from '../components/FormComponent'
import NotFoundComponent from '../components/NotFoundComponent'
import store from '../store'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      name: 'home',
      path: '/',
      component: TestComponent,
    },
    {
      name: 'form',
      path: '/form',
      component: FormComponent,
      props: {
        title: 'My form'
      },
      beforeEnter: (to, from, next) => {
        if (store.getters.isUserLoggedIn) {
          next()
        } else {
          next({ name: 'home' })
        }
      }
    },
    {
      name: 'notfound',
      path: '*',
      component: NotFoundComponent
    }
  ]
})

export default router

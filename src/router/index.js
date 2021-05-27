import VueRouter from 'vue-router'
import Vue from 'vue'
import TestComponent from '../components/TestComponent'
import FormComponent from '../components/FormComponent'
import NotFoundComponent from '../components/NotFoundComponent'
import store from '../store'
import UserDetailsComponent from '../components/UserDetailsComponent'
import CompanyDetailsComponent from '../components/CompanyDetailsComponent'

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
      name: 'user-details',
      path: '/user/:userId',
      component: UserDetailsComponent,
      children: [
        {
          path: 'company',
          component: CompanyDetailsComponent
        },
        {
          path: 'billing',
          // neka komponenta ki prikaže plačane postavke
        }
      ]
    },
    {
      name: '/test-url',
      path: '/test-url-*'
    },
    {
      name: 'notfound',
      path: '*',
      component: NotFoundComponent
    }
  ]
})

export default router

import VueRouter from 'vue-router'
import Vue from 'vue'
import TestPage from '../pages/TestPage'
import FormPage from '../pages/FormPage'
import NotFoundPage from '../pages/NotFoundPage'
import store from '../store'
import UserDetailsPage from '../pages/UserDetailsPage'
import CompanyDetailsComponent from '../components/CompanyDetailsComponent'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      name: 'home',
      path: '/',
      component: TestPage,
    },
    {
      name: 'form',
      path: '/form',
      component: FormPage,
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
      component: UserDetailsPage,
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
      component: NotFoundPage
    }
  ]
})

export default router

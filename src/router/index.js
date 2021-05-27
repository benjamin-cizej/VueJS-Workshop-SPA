import VueRouter from 'vue-router'
import Vue from 'vue'
import TestPage from '../pages/TestPage'
const FormPage = () => import('../pages/FormPage')
import NotFoundPage from '../pages/NotFoundPage'
import store from '../store'

const UserDetailsPage = () => import(/* webpackChunkName: "group-users" */ '../pages/UserDetailsPage')
const CompanyDetailsComponent = () => import(/* webpackChunkName: "group-users" */ '../components/CompanyDetailsComponent')

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

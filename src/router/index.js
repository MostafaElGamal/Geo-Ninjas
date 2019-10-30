import Vue from 'vue'
import Router from 'vue-router'
import gmap from '@/components/home/gmap'
import SignUp from '@/components/Auth/SignUp'
import login from '@/components/Auth/login'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'gmap',
      component: gmap
    },
    {
      path: '/signup',
      name: 'SignUp',
      component: SignUp
    },
    {
      path: '/login',
      name: 'login',
      component: login
    },
  ]
})

import Vue from 'vue'
import Router from 'vue-router'
import gmap from '@/components/home/gmap'
import SignUp from '@/components/Auth/SignUp'
import login from '@/components/Auth/login'
import profile from '@/components/Profile/profile'
import firebase from 'firebase'

Vue.use(Router)

const router =  new Router({
  routes: [
    {
      path: '/',
      name: 'gmap',
      component: gmap,
      meta: {
        requireAuth:true
      }
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
    {
      path: '/profile/:id',
      name: 'profile',
      component: profile,
      meta: {
        requireAuth:true
      }
    },
  ]
})

router.beforeEach( (to, from, next) => {
  // check to see if route requires auth
   if( to.matched.some( rec => rec.meta.requireAuth) ){
    // check auth state of user
    let user = firebase.auth().currentUser
    // user signed in, proceed to route
    if(user){
      next()
    }else{
      // no user signed in, redirect to login
      next({ name: 'login'})
    }
    }else{
      next()
   }
})

export default router 
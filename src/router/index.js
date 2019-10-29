import Vue from 'vue'
import Router from 'vue-router'
import gmap from '@/components/home/gmap'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'gmap',
      component: gmap
    }
  ]
})
